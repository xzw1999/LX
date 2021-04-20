<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/9/12
 */

namespace app\adminapi\controller;

use app\services\activity\StoreCombinationServices;
use app\services\activity\StorePinkServices;
use app\services\coupon\StoreCouponUserServices;
use app\services\order\StoreOrderCreateServices;
use app\services\order\StoreOrderServices;
use crmeb\services\AliPayService;

class Test
{
    public function index()
    {
        $order = app()->make(StoreOrderServices::class);
    }
}

