(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_list-index"],{"057d":function(e,t,i){"use strict";var n=i("ecf9"),a=i.n(n);a.a},"0e28":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav[data-v-47c082da]{position:fixed;top:0;left:0;z-index:9;width:100%;height:%?90?%;background-color:#fff}.nav .acea-row[data-v-47c082da]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-top:%?3?% solid transparent;border-bottom:%?3?% solid transparent;font-size:%?30?%;color:#282828}.nav .on[data-v-47c082da]{border-bottom-color:#e93323;color:#e93323}.list[data-v-47c082da]{padding:%?14?% %?32?%;margin-top:%?90?%;margin-bottom:%?140?%}.list .item[data-v-47c082da]{padding:%?28?% %?32?%;background-color:#fff}.list .item ~ .item[data-v-47c082da]{margin-top:%?14?%}.list .item-hd .acea-row[data-v-47c082da]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0}.list .name[data-v-47c082da]{font-weight:600;font-size:%?30?%;color:#282828}.list .label[data-v-47c082da]{width:%?56?%;height:%?28?%;border:%?1?% solid #e93323;margin-left:%?18?%;font-size:%?20?%;line-height:%?26?%;text-align:center;color:#e93323}.list .type[data-v-47c082da]{width:%?172?%;height:%?42?%;margin-left:%?30?%;background-color:#fcf0e0;font-size:%?24?%;line-height:%?42?%;text-align:center;color:#d67300}.list .type.special[data-v-47c082da]{background-color:#fde9e7;color:#e93323}.list .item-bd[data-v-47c082da]{margin-top:%?18?%}.list .cell[data-v-47c082da]{font-size:%?26?%;color:#666}.list .cell ~ .cell[data-v-47c082da]{margin-top:%?12?%}.list .item-ft[data-v-47c082da]{margin-top:%?11?%}.list .btn[data-v-47c082da]{font-size:%?26?%;color:#282828;cursor:pointer}.list .btn ~ .btn[data-v-47c082da]{margin-left:%?35?%}.list .btn .iconfont[data-v-47c082da]{margin-right:%?10?%;font-size:%?24?%;color:#000}.add-link[data-v-47c082da]{position:fixed;right:%?30?%;bottom:%?53?%;left:%?30?%;height:%?86?%;-webkit-border-radius:%?43?%;border-radius:%?43?%;background-color:#e93323;font-size:%?30?%;line-height:%?86?%;text-align:center;color:#fff}.add-link .iconfont[data-v-47c082da]{margin-right:%?14?%;font-size:%?28?%}.nothing[data-v-47c082da]{margin-top:%?254?%;font-size:%?26?%;text-align:center;color:#999}.nothing .image[data-v-47c082da]{width:%?400?%;height:%?260?%;margin-bottom:%?20?%}.record-wrapper[data-v-47c082da]{margin-top:%?110?%}.record-wrapper .item[data-v-47c082da]{padding-right:%?30?%;padding-left:%?30?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin:%?30?%;background-color:#fff}.record-wrapper .item .item-hd[data-v-47c082da]{padding-top:%?36?%;padding-bottom:%?36?%}.record-wrapper .item .item-hd .image[data-v-47c082da]{width:%?78?%;height:%?78?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.record-wrapper .item .item-hd .text[data-v-47c082da]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-left:%?24?%;font-size:%?26?%;line-height:%?37?%;color:#282828}.record-wrapper .item .item-bd[data-v-47c082da]{padding:%?26?% %?30?% %?25?% %?32?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#f5f6f7;font-size:%?26?%;line-height:%?37?%;color:#818181}.record-wrapper .item .item-bd .name[data-v-47c082da]{margin-bottom:%?8?%;font-weight:700;font-size:%?26?%;color:#282828}.record-wrapper .item .item-bd .money[data-v-47c082da]{font-weight:700;font-size:%?24?%;color:#282828}.record-wrapper .item .item-bd .money .num[data-v-47c082da]{font-size:%?32?%}.record-wrapper .item .item-ft[data-v-47c082da]{padding-top:%?30?%;padding-bottom:%?30?%;font-weight:700;font-size:%?28?%;color:#282828}.record-wrapper .item .item-ft .link[data-v-47c082da]{width:%?150?%;height:%?57?%;border:%?1?% solid #707070;-webkit-border-radius:%?29?%;border-radius:%?29?%;font-weight:400;font-size:%?26?%;line-height:%?57?%;text-align:center;color:#282828}',""]),e.exports=t},"10e8":function(e,t,i){"use strict";var n=i("e277"),a=i.n(n);a.a},5696:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("c740"),i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("e4fa")),r=i("2f62"),o=i("c861"),c=i("ee4b"),s={components:{home:a.default},data:function(){return{orderList:[],invoiceList:[],nav:1,page:1,limit:30,loading:!1,finished:!1,specialInvoice:!0}},watch:{nav:{immediate:!0,handler:function(e){switch(this.page=1,e){case 1:this.orderList=[],this.getOrderList();break;case 2:this.invoiceList=[],this.getInvoiceList();break}}}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(e){"invoice_form"===e.from&&(this.nav=2),this.getUserInfo()},methods:{getUserInfo:function(){var e=this;(0,o.getUserInfo)().then((function(t){var i=t.data.special_invoice;e.specialInvoice=i}))},navTab:function(e){this.nav!==e&&(this.nav=e)},getOrderList:function(){var e=this;uni.showLoading({title:"加载中"}),(0,c.orderInvoiceList)({page:this.page,limit:this.limit}).then((function(t){var i=t.data;uni.hideLoading(),e.orderList=e.orderList.concat(i),e.finished=i.length<e.limit,e.page+=1})).catch((function(e){uni.showToast({title:e.msg,icon:"none"})}))},getInvoiceList:function(){var e=this;uni.showLoading({title:"加载中"}),(0,o.invoiceList)({page:this.page,limit:this.limit}).then((function(t){var i=t.data;uni.hideLoading(),e.invoiceList=e.invoiceList.concat(i),e.finished=i.length<e.limit,e.page+=1})).catch((function(e){uni.showToast({title:e.msg,icon:"none"})}))},editInvoice:function(e){uni.navigateTo({url:"/pages/users/user_invoice_form/index?id=".concat(e)})},deleteInvoice:function(e){var t=this;uni.showModal({content:"删除该发票？",confirmColor:"#E93323",success:function(i){i.confirm&&(0,o.invoiceDelete)(e).then((function(){t.$util.Tips({title:"删除成功",icon:"success"},(function(){var i=t.invoiceList.findIndex((function(t){return t.id==e}));t.invoiceList.splice(i,1)}))})).catch((function(e){return t.$util.Tips({title:e})}))}})}}};t.default=s},a84d:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"acea-row nav"},[i("v-uni-view",{staticClass:"acea-row row-center-wrapper",class:{on:1===e.nav},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTab(1)}}},[e._v("发票记录")]),i("v-uni-view",{staticClass:"acea-row row-center-wrapper",class:{on:2===e.nav},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTab(2)}}},[e._v("抬头管理")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.nav,expression:"nav === 1"}],staticClass:"record-wrapper"},[e._l(e.orderList,(function(t){return i("v-uni-view",{key:t.id,staticClass:"item"},[i("v-uni-view",{staticClass:"item-hd acea-row"},[i("v-uni-image",{staticClass:"image",attrs:{src:t.order.cartInfo[0].productInfo.image}}),i("v-uni-view",{staticClass:"text"},[e._v(e._s(t.order.cartInfo[0].productInfo.store_name+t.order.cartInfo[0].productInfo.attrInfo.suk||""))])],1),i("v-uni-view",{staticClass:"item-bd acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-view",{staticClass:"name"},[e._v(e._s(1===t.header_type?"个人":"企业")+e._s(1===t.type?"普通":"专用")+"发票")]),i("v-uni-view",[e._v("申请时间 "+e._s(t.add_time))])],1),i("v-uni-view",{staticClass:"money"},[e._v("￥"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(t.order.pay_price))])],1)],1),i("v-uni-view",{staticClass:"item-ft acea-row row-between-wrapper"},[i("v-uni-view",[e._v(e._s(t.is_invoice?"已开票":"未开票"))]),i("v-uni-navigator",{staticClass:"link",attrs:{url:"/pages/users/user_invoice_order/index?order_id="+t.order.order_id}},[e._v("查看详情")])],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===e.page&&!e.orderList.length,expression:"page === 2 && !orderList.length"}],staticClass:"nothing"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/images/noInvoice.png"}}),i("v-uni-view",[e._v("没有发票信息哟~")])],1)],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===e.nav,expression:"nav === 2"}]},[e.invoiceList.length?i("v-uni-view",{staticClass:"list"},[e._l(e.invoiceList,(function(t){return[1===t.type||2===t.type&&e.specialInvoice?i("v-uni-view",{key:t.id,staticClass:"item"},[i("v-uni-view",{staticClass:"acea-row item-hd"},[i("v-uni-view",{staticClass:"acea-row row-middle"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),t.is_default?i("v-uni-view",{staticClass:"label"},[e._v("默认")]):e._e()],1),i("v-uni-view",{staticClass:"type",class:{special:2===t.type}},[e._v(e._s(1===t.type&&1===t.header_type?"个人普通发票":1===t.type&&2===t.header_type?"企业普通发票":"企业专用发票"))])],1),i("v-uni-view",{staticClass:"item-bd"},[i("v-uni-view",{staticClass:"cell"},[e._v("联系邮箱 "+e._s(t.email))]),2===t.header_type?i("v-uni-view",{staticClass:"cell"},[e._v("企业税号 "+e._s(t.duty_number))]):e._e(),1===t.header_type&&t.drawer_phone?i("v-uni-view",{staticClass:"cell"},[e._v("联系电话 "+e._s(t.drawer_phone))]):e._e()],1),i("v-uni-view",{staticClass:"acea-row row-right item-ft"},[i("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.editInvoice(t.id)}}},[i("v-uni-text",{staticClass:"iconfont icon-bianji"}),e._v("编辑")],1),i("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deleteInvoice(t.id)}}},[i("v-uni-text",{staticClass:"iconfont icon-shanchu"}),e._v("删除")],1)],1)],1):e._e()]}))],2):e._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===e.page&&!e.invoiceList.length,expression:"page === 2 && !invoiceList.length"}],staticClass:"nothing"},[i("v-uni-image",{staticClass:"image",attrs:{src:"/static/images/noInvoice.png"}}),i("v-uni-view",[e._v("没有发票信息哟~")])],1),i("v-uni-navigator",{staticClass:"add-link",attrs:{url:"/pages/users/user_invoice_form/index?specialInvoice="+e.specialInvoice}},[i("v-uni-text",{staticClass:"iconfont icon-fapiao"}),e._v("添加新发票")],1)],1),i("home")],1)},r=[]},c1e1:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".pictrueBox[data-v-4bff0b6f]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-4bff0b6f]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-4bff0b6f]{-webkit-border-radius:%?50?%;border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-4bff0b6f]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f44939!important}.home .homeCon .iconfont[data-v-4bff0b6f]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-4bff0b6f]{width:%?86?%;height:%?86?%;-webkit-border-radius:50%;border-radius:50%;margin:0 auto}.home .pictrue .image[data-v-4bff0b6f]{width:100%;height:100%;-webkit-border-radius:50%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),e.exports=t},cb73:function(e,t,i){"use strict";i.r(t);var n=i("e4cf"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},ccf2:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:e.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.setTouchMove.apply(void 0,arguments)}}},[e.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color-red",class:!0===e.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):e._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===e.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},e277:function(e,t,i){var n=i("0e28");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1af9284c",n,!0,{sourceMap:!1,shadowMode:!1})},e4cf:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2f62"),a={name:"Home",props:{},data:function(){return{top:"545"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(e){var t=this;e.touches[0].clientY<545&&e.touches[0].clientY>66&&(t.top=e.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};t.default=a},e4fa:function(e,t,i){"use strict";i.r(t);var n=i("ccf2"),a=i("cb73");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("057d");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4bff0b6f",null,!1,n["a"],o);t["default"]=s.exports},ecf9:function(e,t,i){var n=i("c1e1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("5332eb80",n,!0,{sourceMap:!1,shadowMode:!1})},ee4b:function(e,t,i){"use strict";var n=i("4ea4");i("a15b"),Object.defineProperty(t,"__esModule",{value:!0}),t.getCartCounts=r,t.getCartList=o,t.getResetCart=c,t.changeCartNum=s,t.cartDel=d,t.getOrderList=u,t.orderProduct=l,t.orderComment=f,t.orderPay=v,t.orderData=p,t.orderCancel=h,t.orderDel=g,t.getOrderDetail=m,t.orderAgain=w,t.orderTake=b,t.express=_,t.ordeRefundReason=x,t.orderRefundVerify=C,t.orderConfirm=k,t.getCouponsOrderPrice=y,t.orderCreate=L,t.postOrderComputed=I,t.orderCoupon=z,t.offlineCheckPrice=O,t.offlineCreate=T,t.orderOfflinePayType=E,t.orderInvoiceList=M,t.orderInvoiceDetail=$,t.aliPay=P;var a=n(i("0e3b"));function r(e){return a.default.get("cart/count",{numType:void 0===e?0:e})}function o(e){return a.default.get("cart/list",e)}function c(e){return a.default.post("v2/reset_cart",e)}function s(e,t){return a.default.post("cart/num",{id:e,number:t})}function d(e){return"object"===typeof e&&(e=e.join(",")),a.default.post("cart/del",{ids:e})}function u(e){return a.default.get("order/list",e)}function l(e){return a.default.post("order/product",{unique:e})}function f(e){return a.default.post("order/comment",e)}function v(e){return a.default.post("order/pay",e)}function p(){return a.default.get("order/data")}function h(e){return a.default.post("order/cancel",{id:e})}function g(e){return a.default.post("order/del",{uni:e})}function m(e){return a.default.get("order/detail/"+e)}function w(e){return a.default.post("order/again",{uni:e})}function b(e){return a.default.post("order/take",{uni:e})}function _(e){return a.default.get("order/express/"+e)}function x(){return a.default.get("order/refund/reason")}function C(e){return a.default.post("order/refund/verify",e)}function k(e,t){return a.default.post("order/confirm",{cartId:e,new:t})}function y(e,t){return a.default.get("coupons/order/"+e,t)}function L(e,t){return a.default.post("order/create/"+e,t)}function I(e,t){return a.default.post("order/computed/"+e,t)}function z(e){return a.default.post("v2/order/product_coupon/"+e)}function O(e){return a.default.post("order/offline/check/price",e)}function T(e){return a.default.post("order/offline/create",e)}function E(){return a.default.get("order/offline/pay/type")}function M(e){return a.default.get("v2/order/invoice_list",e)}function $(e){return a.default.get("v2/order/invoice_detail/".concat(e))}function P(e,t){return a.default.get("ali_pay",{key:e,quitUrl:t},{noAuth:!0})}},f4ce:function(e,t,i){"use strict";i.r(t);var n=i("a84d"),a=i("fb8c");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("10e8");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"47c082da",null,!1,n["a"],o);t["default"]=s.exports},fb8c:function(e,t,i){"use strict";i.r(t);var n=i("5696"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a}}]);