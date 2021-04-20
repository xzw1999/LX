<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\services\kefu;


use crmeb\basic\BaseAuth;
use think\facade\Log;
use think\facade\Cache;
use crmeb\utils\JwtAuth;
use crmeb\utils\ApiErrorCode;
use app\services\BaseServices;
use crmeb\services\CacheService;
use Firebase\JWT\ExpiredException;
use crmeb\exceptions\AuthException;
use app\dao\service\StoreServiceDao;
use crmeb\services\WechatOpenService;
use think\exception\ValidateException;
use app\services\wechat\WechatUserServices;

/**
 * 客服登录
 * Class LoginServices
 * @package app\services\kefu
 * @method get($id, ?array $field = [], ?array $with = []) 获取一条数据
 */
class LoginServices extends BaseServices
{
    /**
     * LoginServices constructor.
     * @param StoreServiceDao $dao
     */
    public function __construct(StoreServiceDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * 客服账号密码登录
     * @param string $account
     * @param string $password
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function authLogin(string $account, string $password = null)
    {
        $kefuInfo = $this->dao->get(['account' => $account]);
        if (!$kefuInfo) {
            throw new ValidateException('没有此用户');
        }
        if ($password && !password_verify($password, $kefuInfo->password)) {
            throw new ValidateException('账号或密码错误');
        }
        if (!$kefuInfo->status) {
            throw new ValidateException('您已被禁止登录');
        }
        $token = $this->createToken($kefuInfo->id, 'kefu');
        $kefuInfo->update_time = time();
        $kefuInfo->ip = request()->ip();
        $kefuInfo->save();
        return [
            'token' => $token['token'],
            'exp_time' => $token['params']['exp'],
            'kefuInfo' => $kefuInfo->hidden(['password', 'ip', 'update_time', 'add_time', 'status', 'mer_id', 'customer', 'notify'])->toArray()
        ];
    }

    /**
     * 解析token
     * @param string $token
     * @return array
     * @throws \Psr\SimpleCache\InvalidArgumentException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function parseToken(string $token)
    {
        /** @var BaseAuth $services */
        $services = app()->make(BaseAuth::class);
        $adminInfo = $services->parseToken($token, function ($id) {
            return $this->dao->get($id);
        });
        return $adminInfo->hidden(['password', 'ip', 'status']);
    }

    /**
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function wechatAuth()
    {
        /** @var WechatOpenService $service */
        $service = app()->make(WechatOpenService::class);
        $info = $service->getAuthorizationInfo();
        if (!$info) {
            throw new ValidateException('授权失败');
        }
        $original = $info->getOriginal();
        if (!isset($original['unionid'])) {
            throw new ValidateException('unionid不存在');
        }
        /** @var WechatUserServices $userService */
        $userService = app()->make(WechatUserServices::class);
        $uid = $userService->value(['unionid' => $original['unionid']], 'uid');
        if (!$uid) {
            throw new ValidateException('获取用户UID失败');
        }
        $kefuInfo = $this->dao->get(['uid' => $uid]);
        if (!$kefuInfo) {
            throw new ValidateException('客服不存在');
        }
        if (!$kefuInfo->status) {
            throw new ValidateException('您已被禁止登录');
        }
        $token = $this->createToken($kefuInfo->id, 'kefu');
        $kefuInfo->update_time = time();
        $kefuInfo->ip = request()->ip();
        $kefuInfo->save();
        return [
            'token' => $token['token'],
            'exp_time' => $token['params']['exp'],
            'kefuInfo' => $kefuInfo->hidden(['password', 'ip', 'update_time', 'add_time', 'status', 'mer_id', 'customer', 'notify'])->toArray()
        ];
    }

    /**
     * 检测有没有人扫描登录
     * @param string $key
     * @return array|int[]
     * @throws \Psr\SimpleCache\InvalidArgumentException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function scanLogin(string $key)
    {
        $hasKey = Cache::has($key);
        if ($hasKey === false) {
            $status = 0;//不存在需要刷新二维码
        } else {
            $keyValue = CacheService::get($key);
            if ($keyValue === '0') {
                $status = 1;//正在扫描中
                $kefuInfo = $this->dao->get(['uniqid' => $key], ['account', 'uniqid']);
                if ($kefuInfo) {
                    $tokenInfo = $this->authLogin($kefuInfo->account);
                    $tokenInfo['status'] = 3;
                    $kefuInfo->uniqid = '';
                    $kefuInfo->save();
                    CacheService::delete($key);
                    return $tokenInfo;
                }
            } else {
                $status = 2;//没有扫描
            }
        }
        return ['status' => $status];
    }
}
