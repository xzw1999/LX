(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-order_list-index"],{"16fa":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"my-order"},[a("v-uni-view",{staticClass:"header bg-color"},[a("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"name"},[t._v("订单信息")]),a("v-uni-view",[t._v("消费订单："+t._s(t.orderData.order_count||0)+" 总消费：￥"+t._s(t.orderData.sum_price||0))])],1),a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:i("d876")}})],1)],1)],1),a("v-uni-view",{staticClass:"nav acea-row row-around"},[a("v-uni-view",{staticClass:"item",class:0==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(0)}}},[a("v-uni-view",[t._v("待付款")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.unpaid_count||0))])],1),a("v-uni-view",{staticClass:"item",class:1==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(1)}}},[a("v-uni-view",[t._v("待发货")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.unshipped_count||0))])],1),a("v-uni-view",{staticClass:"item",class:2==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(2)}}},[a("v-uni-view",[t._v("待收货")]),a("v-uni-view",{staticClass:"num "},[t._v(t._s(t.orderData.received_count||0))])],1),a("v-uni-view",{staticClass:"item",class:3==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(3)}}},[a("v-uni-view",[t._v("待评价")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.evaluated_count||0))])],1),a("v-uni-view",{staticClass:"item",class:4==t.orderStatus?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.statusClick(4)}}},[a("v-uni-view",[t._v("已完成")]),a("v-uni-view",{staticClass:"num"},[t._v(t._s(t.orderData.complete_count||0))])],1)],1),a("v-uni-view",{staticClass:"list"},t._l(t.orderList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item"},[a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[a("v-uni-view",{staticClass:"title acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"acea-row row-middle"},[0!=e.bargain_id?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("砍价")]):0!=e.combination_id?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("拼团")]):0!=e.seckill_id?a("v-uni-text",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("秒杀")]):t._e(),a("v-uni-view",[t._v(t._s(e._add_time))])],1),0==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("待付款")]):1==e._status._type&&1==e.shipping_type?a("v-uni-view",{staticClass:"font-color"},[t._v("待发货")]):2==e._status._type&&1==e.shipping_type?a("v-uni-view",{staticClass:"font-color"},[t._v("待收货")]):3==e._status._type&&1==e.shipping_type?a("v-uni-view",{staticClass:"font-color"},[t._v("待评价")]):4==e._status._type&&1==e.shipping_type?a("v-uni-view",{staticClass:"font-color"},[t._v("已完成")]):2==e.shipping_type&&3==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("待评价")]):2==e.shipping_type&&4==e._status._type?a("v-uni-view",{staticClass:"font-color"},[t._v("已完成")]):t._e()],1),t._l(e.cartInfo,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item-info acea-row row-between row-top"},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.productInfo.image}})],1),a("v-uni-view",{staticClass:"text acea-row row-between"},[a("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.productInfo.store_name))]),a("v-uni-view",{staticClass:"money"},[e.productInfo.attrInfo?a("v-uni-view",[t._v("￥"+t._s(e.productInfo.attrInfo.price))]):a("v-uni-view",[t._v("￥"+t._s(e.productInfo.price))]),a("v-uni-view",[t._v("x"+t._s(e.cart_num))])],1)],1)],1)})),a("v-uni-view",{staticClass:"totalPrice"},[t._v("共"+t._s(e.cartInfo.length||0)+"件商品，总金额"),a("v-uni-text",{staticClass:"money font-color"},[t._v("￥"+t._s(e.pay_price))])],1)],2),a("v-uni-view",{staticClass:"bottom acea-row row-right row-middle"},[0==e._status._type||9==e._status._type?a("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelOrder(i,e.order_id)}}},[t._v("取消订单")]):t._e(),0==e._status._type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPay(e.pay_price,e.order_id)}}},[t._v("立即付款")]):1==e._status._type||9==e._status._type||2==e._status._type&&e.delivery_type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("查看详情")]):3==e._status._type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("去评价")]):e.seckill_id<1&&e.bargain_id<1&&e.combination_id<1&&4==e._status._type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails(e.order_id)}}},[t._v("再次购买")]):t._e(),4==e._status._type?a("v-uni-view",{staticClass:"bnt cancelBnt",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delOrder(e.order_id,i)}}},[t._v("删除订单")]):t._e()],1)],1)})),1),t.orderList.length>0?a("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[a("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),0==t.orderList.length?a("v-uni-view",[a("emptyPage",{attrs:{title:"暂无订单~"}})],1):t._e()],1),0==t.orderList.length&&t.page>1?a("v-uni-view",{staticClass:"noCart"},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:"/images/noOrder.png"}})],1)],1):t._e(),a("home"),a("payment",{attrs:{payMode:t.payMode,pay_close:t.pay_close,order_id:t.pay_order_id,totalPrice:t.totalPrice},on:{onChangeFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeFun.apply(void 0,arguments)}}})],1)},r=[]},"22bf":function(t,e,i){"use strict";i.r(e);var a=i("429e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},4253:function(t,e,i){var a=i("7b06");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("44288dc4",a,!0,{sourceMap:!1,shadowMode:!1})},"429e":function(t,e,i){"use strict";var a=i("4ea4");i("d81d"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("ee4b"),r=i("c861"),o=(i("7aac"),a(i("e4fa"))),s=a(i("5d9f")),d=i("dac6"),c=i("2f62"),u=a(i("9f3b")),l={components:{payment:s.default,home:o.default,emptyPage:u.default},data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderData:{},orderStatus:0,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"微信快捷支付",payStatus:!0},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"支付宝支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,c.mapGetters)(["isLogin"]),onShow:function(){this.isLogin?(this.getOrderData(),this.getOrderList(),this.getUserInfo()):(0,d.toLogin)()},methods:{onLoadFun:function(){this.getOrderData(),this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,a=void 0!=e.value?e.value:null;i&&this[i]&&this[i](a)},getUserInfo:function(){var t=this;(0,r.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this;(0,n.orderData)().then((function(e){t.$set(t,"orderData",e.data),t.payMode.map((function(t){"weixin"==t.value&&(t.payStatus=!!e.data.pay_weixin_open),"alipay"==t.value&&(t.payStatus=!!e.data.ali_pay_status),"yue"==t.value&&(t.payStatus=1==e.data.yue_pay_status)}))}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,n.orderCancel)(e).then((function(e){return i.$util.Tips({title:e.msg,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.$set(this,"pay_order_id",e),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(t){if(!t)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});uni.navigateTo({url:"/pages/users/order_details/index?order_id="+t})},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加载更多",(0,n.getOrderList)({type:t.orderStatus,page:t.page,limit:t.limit}).then((function(e){var i=e.data||[],a=i.length<t.limit;t.orderList=t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.loadend=a,t.loading=!1,t.loadTitle=a?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},delOrder:function(t,e){var i=this;(0,n.orderDel)(t).then((function(t){return i.orderList.splice(e,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData(),i.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))}},onReachBottom:function(){this.getOrderList()}};e.default=l},"5ec8":function(t,e,i){"use strict";i.r(e);var a=i("16fa"),n=i("22bf");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("6c4b");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"56272574",null,!1,a["a"],o);e["default"]=d.exports},"6c4b":function(t,e,i){"use strict";var a=i("4253"),n=i.n(a);n.a},"7a9e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{title:{type:String,default:"暂无记录"}}};e.default=a},"7ada":function(t,e,i){"use strict";var a=i("9a11"),n=i.n(a);n.a},"7b06":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.my-order .header[data-v-56272574]{height:%?260?%;padding:0 %?30?%}.my-order .header .picTxt[data-v-56272574]{height:%?190?%}.my-order .header .picTxt .text[data-v-56272574]{color:hsla(0,0%,100%,.8);font-size:%?26?%;font-family:Guildford Pro}.my-order .header .picTxt .text .name[data-v-56272574]{font-size:%?34?%;font-weight:700;color:#fff;margin-bottom:%?20?%}.my-order .header .picTxt .pictrue[data-v-56272574]{width:%?122?%;height:%?109?%}.my-order .header .picTxt .pictrue uni-image[data-v-56272574]{width:100%;height:100%}.my-order .nav[data-v-56272574]{background-color:#fff;width:%?690?%;height:%?140?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin:%?-73?% auto 0 auto}.my-order .nav .item[data-v-56272574]{text-align:center;font-size:%?26?%;color:#282828;padding:%?27?% 0}.my-order .nav .item.on[data-v-56272574]{font-weight:700;border-bottom:%?5?% solid #e93323}.my-order .nav .item .num[data-v-56272574]{margin-top:%?18?%}.my-order .list[data-v-56272574]{width:%?690?%;margin:%?14?% auto 0 auto}.my-order .list .item[data-v-56272574]{background-color:#fff;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin-bottom:%?14?%}.my-order .list .item .title[data-v-56272574]{height:%?84?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#282828}.my-order .list .item .title .sign[data-v-56272574]{font-size:%?24?%;padding:0 %?7?%;height:%?36?%;margin-right:%?15?%}.my-order .list .item .item-info[data-v-56272574]{padding:0 %?30?%;margin-top:%?22?%}.my-order .list .item .item-info .pictrue[data-v-56272574]{width:%?120?%;height:%?120?%}.my-order .list .item .item-info .pictrue uni-image[data-v-56272574]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.my-order .list .item .item-info .text[data-v-56272574]{width:%?486?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.my-order .list .item .item-info .text .name[data-v-56272574]{width:%?306?%;color:#282828}.my-order .list .item .item-info .text .money[data-v-56272574]{text-align:right}.my-order .list .item .totalPrice[data-v-56272574]{font-size:%?26?%;color:#282828;text-align:right;margin:%?27?% 0 0 %?30?%;padding:0 %?30?% %?30?% 0;border-bottom:%?1?% solid #eee}.my-order .list .item .totalPrice .money[data-v-56272574]{font-size:%?28?%;font-weight:700}.my-order .list .item .bottom[data-v-56272574]{height:%?107?%;padding:0 %?30?%}.my-order .list .item .bottom .bnt[data-v-56272574]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;color:#fff;-webkit-border-radius:%?50?%;border-radius:%?50?%;font-size:%?27?%}.my-order .list .item .bottom .bnt.cancelBnt[data-v-56272574]{border:%?1?% solid #ddd;color:#aaa}.my-order .list .item .bottom .bnt ~ .bnt[data-v-56272574]{margin-left:%?17?%}.noCart[data-v-56272574]{margin-top:%?171?%;padding-top:%?0.1?%}.noCart .pictrue[data-v-56272574]{width:%?414?%;height:%?336?%;margin:%?78?% auto %?56?% auto}.noCart .pictrue uni-image[data-v-56272574]{width:100%;height:100%}.line2[data-v-56272574]{word-break:break-all}',""]),t.exports=e},"8b9a":function(t,e,i){"use strict";i.r(e);var a=i("7a9e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"945b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.empty-box[data-v-244d8f0e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-244d8f0e]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-244d8f0e]{font-size:%?26?%;color:#999}',""]),t.exports=e},"9a11":function(t,e,i){var a=i("945b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7bd86278",a,!0,{sourceMap:!1,shadowMode:!1})},"9f3b":function(t,e,i){"use strict";i.r(e);var a=i("cf44"),n=i("8b9a");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("7ada");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"244d8f0e",null,!1,a["a"],o);e["default"]=d.exports},cf44:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty-box"},[i("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),i("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},r=[]},d876:function(t,e,i){t.exports=i.p+"static/img/orderTime.e95f9090.png"}}]);