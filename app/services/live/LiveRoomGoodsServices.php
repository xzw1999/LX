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
declare (strict_types=1);

namespace app\services\live;


use app\dao\live\LiveRoomGoodsDao;
use app\services\BaseServices;

/**
 * Class LiveRoomGoodsServices
 * @package app\services\live
 */
class LiveRoomGoodsServices extends BaseServices
{
    public function __construct(LiveRoomGoodsDao $dao)
    {
        $this->dao = $dao;
    }
}
