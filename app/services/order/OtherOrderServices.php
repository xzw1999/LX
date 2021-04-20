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

namespace app\services\order;


use app\dao\order\OtherOrderDao;
use app\services\BaseServices;
use app\services\pay\PayServices;
use app\services\statistic\TradeStatisticServices;
use app\services\user\MemberShipServices;
use app\services\user\UserBillServices;
use app\services\user\UserServices;
use app\services\user\MemberCardServices;
use crmeb\services\GroupDataService;
use crmeb\utils\Queue;
use think\App;
use think\exception\ValidateException;

/**
 * Class OtherOrderServices
 * @package app\services\order
 * @method getDistinctCount(array $where, $field, ?bool $search = true)
 * @method getPayUserCount(int $time, string $channel_type)
 * @method getTrendData($time, $type, $timeType)
 */
class OtherOrderServices extends BaseServices
{

    /**初始化，获得dao层句柄
     * OtherOrderServices constructor.
     * @param OtherOrderDao $dao
     */
    public function __construct(OtherOrderDao $dao)
    {
        $this->dao = $dao;
    }

    /** 生成会员购买订单数据
     * @param array $data
     * @return mixed
     */
    public function addOtherOrderData(array $data)
    {
        if (!$data) throw new ValidateException('数据不能为空');
        $add = [
            'uid' => $data['uid'],
            'type' => isset($data['type']) ? $data['type'] : 1,
            'order_id' => $data['order_id'],
            'channel_type' => $data['channel_type'],
            'pay_type' => isset($data['pay_type']) ? $data['pay_type'] : 0,
            'member_type' => isset($data['member_type']) ? $data['member_type'] : 0,
            'member_price' => isset($data['member_price']) ? $data['member_price'] : 0.00,
            'pay_price' => isset($data['pay_price']) ? $data['pay_price'] : 0.00,
            'code' => isset($data['member_code']) ? $data['member_code'] : "",
            'pay_price' => isset($data['pay_price']) ? $data['pay_price'] : 0,
            'vip_day' => isset($data['vip_day']) ? $data['vip_day'] : 0,
            'is_permanent' => isset($data['is_permanent']) ? $data['is_permanent'] : 0,
            'is_free' => isset($data['is_free']) ? $data['is_free'] : 0,
            'overdue_time' => isset($data['overdue_time']) ? $data['overdue_time'] : 0,
            'status' => 0,
            'paid' => isset($data['paid']) ? $data['paid'] : 0,
            'pay_time' => isset($data['pay_time']) ? $data['pay_time'] : 0,
            'money' => isset($data['money']) ? $data['money'] : 0,
            'add_time' => time(),
        ];
        return $this->dao->save($add);
    }

    /** 能否领取免费
     * @param int $uid
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function isCanGetFree(int $uid)
    {
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        /** @var MemberShipServices $memberShipService */
        $memberShipService = app()->make(MemberShipServices::class);
        /** @var TradeStatisticServices $tradeService */
        $tradeService = app()->make(TradeStatisticServices::class);
        /** @var StoreOrderEconomizeServices $economizeService */
        $economizeService = app()->make(StoreOrderEconomizeServices::class);
        $freeDay = $memberShipService->getVipDay(['type' => "free"]);
        $freeConfig = array();
        $freeConfig['price'] = 0;
        $freeConfig['pre_price'] = 0;
        $freeConfig['title'] = "免费会员";
        $freeConfig['type'] = "free";
        $freeConfig['vip_day'] = $freeDay ? $freeDay : 0;
        $userInfo = $userService->get($uid);
        if ($freeConfig) {
            $freeConfig['is_record'] = 0;
            $record = $this->dao->getOneByWhere(['uid' => $uid, 'is_free' => 1]);
            if ($record) {
                $freeConfig['is_record'] = 1;

            }
        }
        $registerTime = $tradeService->TimeConvert(['start_time' => date('Y-m-d H:i:s', $userInfo['add_time']), 'end_time' => date('Y-m-d H:i:s', time())]);
        $userInfo['register_days'] = $registerTime['days'];
        $userInfo['economize_money'] = $economizeService->sumEconomizeMoney($uid);
        $userInfo['shop_name'] = sys_config('site_name');
        $freeConfig['user_info'] = $userInfo;
        return $freeConfig;
    }


    /** 查询会员卡订单数据
     * @param array $where
     * @param string $field
     * @return array|\think\Model|null
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOne(array $where, string $field = '*')
    {
        return $this->dao->getOne($where, $field);
    }

    /**
     * @param int $uid
     * @param string $channelType 支付渠道
     * @param bool $memberType 会员卡类型
     * @param string $payPrice 支付金额
     * @param string $payType 支付方式
     * @param $type 订单类型
     * @return mixed
     * @throws \Exception
     */
    public function createOrder(int $uid, string $channelType, $memberType = false, string $payPrice, string $payType, $type, $money)
    {
        /** @var StoreOrderCreateServices $storeOrderCreateService */
        $storeOrderCreateService = app()->make(StoreOrderCreateServices::class);
        $orderInfo = [
            'uid' => $uid,
            'order_id' => $storeOrderCreateService->getNewOrderId(),
            'pay_price' => $payPrice,
            'pay_type' => $payType,
            'channel_type' => $channelType,
            'member_code' => "",
        ];
        if ($type != 3) { //区别 0：免费领取会员 1：购买会员  2：卡密领取会员  3：线下付款
            if (!$memberType) throw new ValidateException('memberType miss');
            list($memberPrice, $isFree, $isPermanent, $overdueTime, $type, $newMemberRight) = $this->checkPayMemberType($memberType, $payPrice, $type, $uid);
            $orderInfo['member_price'] = $memberPrice;
            $orderInfo['money'] = $memberPrice;
            $orderInfo['vip_day'] = $newMemberRight[$memberType]['vip_day'];
            $orderInfo['member_type'] = $memberType;
            $orderInfo['overdue_time'] = $overdueTime;
            $orderInfo['is_permanent'] = $isPermanent;
            $orderInfo['is_free'] = $isFree;
            $orderInfo['type'] = $type;
            $changeType = "create_member_order";
        } else {
            $orderInfo['type'] = $type;
            $orderInfo['member_code'] = "";
            $changeType = "create_offline_scan_order";
            $orderInfo['money'] = $money ? $money : $payPrice;
        }
        $memberOrder = $this->addOtherOrderData($orderInfo);
        if (!$memberOrder) {
            throw new ValidateException('订单生成失败!');
        }
        // CacheService::redisHandler()->delete('user_order_' . $uid . $key);
        /** @var OtherOrderStatusServices $statusService */
        $statusService = app()->make(OtherOrderStatusServices::class);
        $statusService->save([
            'oid' => $memberOrder['id'],
            'change_type' => $changeType,
            'change_message' => '订单生成',
            'change_time' => time(),
            'shop_type' => $type,
        ]);
        //$this->pushJob($order['id'], $combinationId, $seckillId, $bargainId);
        return $memberOrder;
    }

    /** 免费卡领取支付
     * @param $orderInfo
     * @return bool
     */
    public function zeroYuanPayment($orderInfo)
    {
        if ($orderInfo['paid']) {
            throw new ValidateException('该订单已支付!');
        }
        if ($orderInfo['member_type'] != 'free') {
            throw new ValidateException('支付失败!');
        }
        $res = $this->paySuccess($orderInfo, 'yue');//余额支付成功
        return $res;

    }

    /**  会员卡支付成功
     * @param array $orderInfo
     * @param string $paytype
     * @return bool
     */
    public function paySuccess(array $orderInfo, string $paytype = PayServices::WEIXIN_PAY, array $other = [])
    {
        /** @var OtherOrderStatusServices $statusService */
        $statusService = app()->make(OtherOrderStatusServices::class);
        /** @var UserServices $userServices */
        $userServices = app()->make(UserServices::class);
        /** @var UserBillServices $userBillServices */
        $userBillServices = app()->make(UserBillServices::class);
        switch ($orderInfo['type']) {
            case 0 :
            case 1:
            case 2 :
                $type = "pay_member";
                $res1 = $userServices->setMemberOverdueTime($orderInfo['vip_day'], $orderInfo['uid'], 1, $orderInfo['member_type']);
                break;
            case 3:
                $type = "offline_scan";
                $res1 = true;
                break;
        }
        if ($paytype == PayServices::ALIAPY_PAY && isset($other['trade_no'])) {
            $updata['trade_no'] = $other['trade_no'];
        }
        $updata['paid'] = 1;
        $updata['pay_type'] = $paytype;
        $updata['pay_time'] = time();
        $res2 = $this->dao->update($orderInfo['id'], $updata);
        $res3 = $statusService->save([
            'oid' => $orderInfo['id'],
            'change_type' => 'pay_success',
            'change_message' => '用户付款成功',
            'shop_type' => $orderInfo['type'],
            'change_time' => time()
        ]);

        $now_money = $userServices->value(['uid' => $orderInfo['uid']], 'now_money');
        $res4 = $userBillServices->income($type, $orderInfo['uid'], $orderInfo['pay_price'], $now_money, $orderInfo['id']);
        //支付成功后发送消息
        Queue::instance()->job(\crmeb\jobs\OtherOrderJob::class)->data($orderInfo)->push();
        $res = $res1 && $res2 && $res3 && $res4;
        return false !== $res;
    }

    /** 修改
     * @param array $where
     * @param array $data
     * @return mixed
     */
    public function update(array $where, array $data)
    {
        return $this->dao->update($where, $data);
    }

    /** 购买会员卡数据校验
     * @param $memberType
     * @param $pay_price
     * @param $type
     * @return array
     */
    public function checkPayMemberType(string $memberType, string $payPrice, string $type, $uid)
    {
        /** @var MemberCardServices $memberCardService */
        $memberCardService = app()->make(MemberCardServices::class);
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        $userInfo = $userService->get($uid);
        if ($userInfo['is_money_level'] > 0 && $userInfo['is_ever_level'] > 0) throw new ValidateException('您已是永久会员无需再购买!');
        $newMemberRight = $memberCardService->getMemberTypeValue();
        if (!array_key_exists($memberType, $newMemberRight)) throw new ValidateException('该会员卡暂时无法购买!');
        $price = $newMemberRight[$memberType]['pre_price'];
        if ($payPrice != $price || ($memberType != 'free' && $payPrice <= 0)) throw new ValidateException('请核实价格!');
        if ($memberType == 'free' && $newMemberRight[$memberType]['vip_day'] <= 0) throw new ValidateException('网络错误!');
        switch ($memberType) {
            case "free"://免费会员
                $isCanGetFree = $this->isCanGetFree($uid);
                if ($isCanGetFree['is_record'] == 1) throw new ValidateException('您已经领取过免费会员!');
                $memberPrice = 0.00; //会员卡价格
                $isFree = 1;//代表免费
                $isPermanent = 0;//代表非永久
                $overdueTime = bcadd(bcmul(abs($newMemberRight[$memberType]['vip_day']), "86400", 0), time(), 0);
                break;
            case "month":
            case "year":
            case "quarter":
                $memberPrice = $price;
                $isFree = 0;
                $isPermanent = 0;
                $overdueTime = bcadd(bcmul(abs($newMemberRight[$memberType]['vip_day']), 86400, 0), time(), 0);
                break;
            case "ever":
                $memberPrice = $price;
                $isFree = 0;
                $isPermanent = 1;
                $overdueTime = -1;
                break;
            default:
                throw new ValidateException('此类型会员卡暂未开售！');
                break;
        }
        //return compact('member_price', 'is_free', 'is_permanent', 'overdue_time', 'type');
        return [$memberPrice, $isFree, $isPermanent, $overdueTime, $type, $newMemberRight];
    }

    /**根据查询用户购买会员金额
     * @param array $where
     * @return mixed
     */
    public function getMemberMoneyByWhere(array $where, string $sumField, string $selectType, string $group = "")
    {
        switch ($selectType) {
            case "sum" :
                return $this->dao->getWhereSumField($where, $sumField);
            case "group" :
                return $this->dao->getGroupField($where, $sumField, $group);
        }
    }

    /**线下收银列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getScanOrderList(array $where)
    {
        $where['type'] = 3;
        $where['paid'] = 1;
        [$page, $limit] = $this->getPageValue();
        if ($where['add_time']) {
            [$startTime, $endTime] = explode('-', $where['add_time']);
            if ($startTime || $endTime) {
                $startTime = strtotime($startTime);
                $endTime = strtotime($endTime . ' 23:59:59');
                $where['add_time'] = [$startTime, $endTime];
            }
        }
        if ($where['name']) {
            /** @var UserServices $userService */
            $userService = app()->make(UserServices::class);
            $userInfo = $userService->getUserInfoList(['nickname' => $where['name']], "uid");
            if ($userInfo) $where['uid'] = array_column($userInfo, 'uid');
        }
        $list = $this->dao->getScanOrderList($where, $page, $limit);
        /** @var UserServices $userService */
        $userService = app()->make(UserServices::class);
        if ($list) {
            foreach ($list as &$v) {
                $v['add_time'] = date('Y-m-d H:i:s', $v['add_time']);
                $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                $userInfo = $userService->getUserInfo($v['uid']);
                $v['phone'] = $userInfo['phone'];
                $v['nickname'] = $userInfo['nickname'];
                switch ($v['pay_type']) {
                    case "yue" :
                        $v['pay_type'] = "余额";
                        break;
                    case "weixin" :
                        $v['pay_type'] = "微信";
                        break;
                    case "alipay" :
                        $v['pay_type'] = "支付宝";
                        break;
                }
                $v['true_price'] = bcsub($v['money'], $v['pay_price'], 2);
            }
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

    /**获取会员记录
     * @param array $where
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getMemberRecord(array $where)
    {
        $where['type'] = [0, 1, 2,3];
        $where['paid'] = 1;
        if ($where['add_time']) {
            $searchTime = explode('-', $where['add_time']);
            $startTime = strtotime($searchTime[0]);
            $endTime = strtotime($searchTime[1]);
            $where['add_time'] = [$startTime, $endTime];
        }
        [$page, $limit] = $this->getPageValue();
        $list = $this->dao->getMemberRecord($where, $page, $limit);
        if ($list) {
            /** @var MemberShipServices $memberShipService */
            $memberShipService = app()->make(MemberShipServices::class);
            $shipInfo = $memberShipService->getApiList([]);
            $shipInfo = array_column($shipInfo, 'title', 'type');
            foreach ($list as &$v) {
                $v['member_type'] = $v['member_type'] ? $shipInfo[$v['member_type']] : '其他';
                $v['pay_time'] = date('Y-m-d H:i:s', $v['pay_time']);
                $v['add_time'] = date('Y-m-d H:i:s', $v['add_time']);
                $v['overdue_time'] = date('Y-m-d H:i:s', $v['overdue_time']);
                switch ($v['pay_type']) {
                    case "yue" :
                        $v['pay_type'] = "余额";
                        break;
                    case "weixin" :
                        $v['pay_type'] = "微信";
                        break;
                    case "alipay" :
                        $v['pay_type'] = "支付宝";
                        break;
                    case "admin" :
                        $v['pay_type'] = "后台赠送";
                        break;
                }
                if ($v['type'] == 0)  $v['pay_type'] = "免费领取";
                if ($v['type'] == 2){
                    $v['pay_type'] = "卡密领取";
                    $v['member_type'] = "卡密激活";
                }
                if ($v['type'] == 1 && $v['is_free'] == 1)  $v['pay_type'] = "免费领取";
                $v['user']['overdue_time'] = date('Y-m-d', $v['user']['overdue_time']) == "1970-01-01" ? "" : date('Y-m-d H:i:s', $v['user']['overdue_time']);
            }
        }
        $count = $this->dao->count($where);
        return compact('list', 'count');
    }

}
