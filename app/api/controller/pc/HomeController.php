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


use app\services\pc\HomeServices;


class HomeController
{
    protected $services;

    public function __construct(HomeServices $services)
    {
        $this->services = $services;
    }

    /**
     * PC端首页轮播图
     * @return mixed
     */
    public function getBanner()
    {
        $list = sys_data('pc_home_banner');
        return app('json')->successful(compact('list'));
    }

    /**
     * 首页分类尚品
     * @return mixed
     */
    public function getCategoryProduct()
    {
        $data = $this->services->getCategoryProduct();
        return app('json')->successful($data);
    }

    /**
     * 获取手机购买跳转url配置
     * @return string
     */
    public function getProductPhoneBuy()
    {
        $phoneBuy = sys_config('product_phone_buy_url', 1);
        $siteUrl = sys_config('site_url');
        return app('json')->successful(['phone_buy' => $phoneBuy, 'sit_url' => $siteUrl]);
    }
}
