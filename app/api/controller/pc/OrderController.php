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

namespace app\api\controller\pc;


use app\Request;
use app\services\pc\OrderServices;

class OrderController
{
    protected $services;

    public function __construct(OrderServices $services)
    {
        $this->services = $services;
    }

    /**
     * 轮询订单状态
     * @param Request $request
     * @return mixed
     */
    public function checkOrderStatus(Request $request)
    {
        list($order_id, $end_time) = $request->getMore([
            ['order_id', ''],
            ['end_time', ''],
        ], true);
        $data['status'] = $this->services->checkOrderStatus((string)$order_id);
        $time = $end_time - time();
        $data['time'] = $time > 0 ? $time : 0;
        return app('json')->successful($data);
    }

    /**
     * 获取订单列表
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getOrderList(Request $request)
    {
        $where = $request->getMore([
            ['type', '', '', 'status'],
            ['search', '', '', 'real_name'],
        ]);
        $where['uid'] = $request->uid();
        $where['is_del'] = 0;
        $where['is_system_del'] = 0;
        return app('json')->successful($this->services->getOrderList($where));
    }
}
