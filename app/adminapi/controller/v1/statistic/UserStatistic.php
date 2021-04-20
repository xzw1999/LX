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

namespace app\adminapi\controller\v1\statistic;


use app\adminapi\controller\AuthController;
use app\services\statistic\UserStatisticServices;
use think\facade\App;

class UserStatistic extends AuthController
{
    public function __construct(App $app, UserStatisticServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 用户基础信息
     * @return mixed
     */
    public function getBasic()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getBasic($where));
    }

    /**
     * 用户趋势
     * @return mixed
     */
    public function getTrend()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getTrend($where));
    }

    /**
     * 微信用户信息
     * @return mixed
     */
    public function getWechat()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getWechat($where));
    }

    /**
     * 微信用户趋势
     * @return mixed
     */
    public function getWechatTrend()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getWechatTrend($where));
    }

    /**
     * 用户地域
     * @return mixed
     */
    public function getRegion()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time'],
            ['sort', 'allNum']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getRegion($where));
    }

    /**
     * 用户性别
     * @return mixed
     */
    public function getSex()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getSex($where));
    }

    /**
     * 用户统计导出
     * @return mixed
     */
    public function getExcel()
    {
        $where = $this->request->getMore([
            ['channel_type', ''],
            ['data', '', '', 'time']
        ]);
        $where['time'] = $this->getDay($where['time']);
        return $this->success($this->services->getTrend($where, true));
    }

    /**
     * 格式化时间
     * @param $time
     * @return string
     */
    public function getDay($time)
    {
        if (strstr($time, '-') !== false) {
            [$startTime, $endTime] = explode('-', $time);
            if (!$startTime && !$endTime) {
                return date("Y/m/d", strtotime("-30 days", time())) . '-' . date("Y/m/d", time());
            } else {
                return $time;
            }
        } else {
            return date("Y/m/d", strtotime("-30 days", time())) . '-' . date("Y/m/d", time());
        }
    }
}