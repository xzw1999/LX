(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-live_list-index"],{"092c":function(e,t,i){"use strict";(function(e){i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i("9dc2"),a={name:"liveBroadcast",props:{dataConfig:{type:Object,default:function(){}}},data:function(){return{page:1,limit:10,listStyle:1,isScroll:!0,liveList:[]}},created:function(){},mounted:function(){this.getLiveList()},methods:{getLiveList:function(){var e=this;this.$config.LIMIT;this.isScroll&&(0,r.getLiveList)(this.page,this.limit).then((function(t){e.isScroll=t.data.length>=e.limit,e.page++,e.liveList=e.liveList.concat(t.data)})).catch((function(e){e.msg}))}},onReachBottom:function(){this.getLiveList()}};t.default=a}).call(this,i("5a52")["default"])},"5adc":function(e,t,i){"use strict";i.r(t);var r=i("092c"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},"9cc0":function(e,t,i){"use strict";i.r(t);var r=i("f897"),a=i("5adc");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("e68c");var o,l=i("f0c5"),d=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,"e3900540",null,!1,r["a"],o);t["default"]=d.exports},"9dc2":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getIndexData=n,t.getLogo=o,t.setFormId=l,t.setCouponReceive=d,t.getCoupons=u,t.getUserCoupons=f,t.getNewCoupon=s,t.getArticleCategoryList=p,t.getArticleList=c,t.getArticleHotList=b,t.getArticleBannerList=g,t.getArticleDetails=w,t.loginMobile=v,t.verifyCode=h,t.registerVerify=k,t.phoneRegister=m,t.phoneRegisterReset=x,t.phoneLogin=y,t.switchH5Login=A,t.bindingPhone=j,t.bindingUserPhone=L,t.logout=_,t.getTemlIds=z,t.pink=C,t.getCity=I,t.getLiveList=M,t.getDiy=P,t.follow=R,t.updatePhone=S,t.getCouponV2=B,t.getCouponNewUser=O,t.category=U,t.searchList=D,t.clearSearch=T;var a=r(i("0e3b"));function n(){return a.default.get("v2/index",{},{noAuth:!0})}function o(){return a.default.get("wechat/get_logo",{},{noAuth:!0})}function l(e){return a.default.post("wechat/set_form_id",{formId:e})}function d(e){return a.default.post("coupon/receive",{couponId:e})}function u(e){return a.default.get("v2/coupons",e,{noAuth:!0})}function f(e,t){return a.default.get("coupons/user/"+e,t)}function s(){return a.default.get("v2/new_coupon")}function p(){return a.default.get("article/category/list",{},{noAuth:!0})}function c(e,t){return a.default.get("article/list/"+e,t,{noAuth:!0})}function b(){return a.default.get("article/hot/list",{},{noAuth:!0})}function g(){return a.default.get("article/banner/list",{},{noAuth:!0})}function w(e){return a.default.get("article/details/"+e,{},{noAuth:!0})}function v(e){return a.default.post("login/mobile",e,{noAuth:!0})}function h(){return a.default.get("verify_code",{},{noAuth:!0})}function k(e,t,i,r){return a.default.post("register/verify",{phone:e,type:void 0===t?"reset":t,key:i,code:r},{noAuth:!0})}function m(e){return a.default.post("register",e,{noAuth:!0})}function x(e){return a.default.post("register/reset",e,{noAuth:!0})}function y(e){return a.default.post("login",e,{noAuth:!0})}function A(){return a.default.post("switch_h5",{from:"wechat"})}function j(e){return a.default.post("binding",e,{noAuth:!0})}function L(e){return a.default.post("user/binding",e)}function _(){return a.default.get("logout")}function z(){return a.default.get("wechat/teml_ids",{},{noAuth:!0})}function C(){return a.default.get("pink",{},{noAuth:!0})}function I(){return a.default.get("city_list",{},{noAuth:!0})}function M(e,t){return a.default.get("wechat/live",{page:e,limit:t},{noAuth:!0})}function P(){return a.default.get("v2/diy/get_diy/moren",{},{noAuth:!0})}function R(){return a.default.get("wechat/follow",{},{noAuth:!0})}function S(e){return a.default.post("user/updatePhone",e,{noAuth:!0})}function B(){return a.default.get("v2/get_today_coupon",{},{noAuth:!0})}function O(){return a.default.get("v2/new_coupon",{},{noAuth:!0})}function U(e){return a.default.get("category",e,{noAuth:!0})}function D(e){return a.default.get("v2/user/search_list",e,{noAuth:!0})}function T(){return a.default.get("v2/user/clean_search")}},bd5f:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.live-wrapper[data-v-e3900540]{position:relative;width:100%;overflow:hidden;-webkit-border-radius:%?16?%;border-radius:%?16?%}.live-wrapper uni-image[data-v-e3900540]{width:100%;height:%?400?%}.live-wrapper .live-top[data-v-e3900540]{z-index:20;position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;width:%?180?%;height:%?54?%;-webkit-border-radius:%?0?% 0 %?18?% 0;border-radius:%?0?% 0 %?18?% 0}.live-wrapper .live-top uni-image[data-v-e3900540]{width:%?30?%;height:%?30?%;margin-right:%?10?%;display:block}.live-wrapper .live-title[data-v-e3900540]{position:absolute;left:0;bottom:%?6?%;width:100%;height:%?70?%;line-height:%?70?%;text-align:center;font-size:%?30?%;color:#fff;background:rgba(0,0,0,.35)}.live-wrapper.mores[data-v-e3900540]{width:100%}.live-wrapper.mores .item[data-v-e3900540]{position:relative;width:%?320?%;display:inline-block;-webkit-border-radius:%?16?%;border-radius:%?16?%;overflow:hidden;margin-right:%?20?%}.live-wrapper.mores .item uni-image[data-v-e3900540]{width:%?320?%;height:%?180?%;-webkit-border-radius:%?16?%;border-radius:%?16?%}.live-wrapper.mores .item .live-title[data-v-e3900540]{height:%?40?%;line-height:%?40?%;text-align:center;font-size:%?22?%}.live-wrapper.mores .item .live-top[data-v-e3900540]{width:%?120?%;height:%?36?%;font-size:%?22?%}.live-wrapper.mores .item .live-top uni-image[data-v-e3900540]{width:%?20?%;height:%?20?%}.live-wrapper-a[data-v-e3900540]{padding:%?0?% %?20?% 0}.live-wrapper-a .live-item-a[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;margin-bottom:%?20?%;-webkit-border-radius:%?16?%;border-radius:%?16?%;overflow:hidden}.live-wrapper-a .live-item-a[data-v-e3900540]:last-child{margin-bottom:0}.live-wrapper-a .live-item-a .img-box[data-v-e3900540]{position:relative;width:%?340?%;height:%?270?%}.live-wrapper-a .live-item-a .img-box uni-image[data-v-e3900540]{width:100%;height:100%}.live-wrapper-a .live-item-a .info[data-v-e3900540]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?15?% %?20?%}.live-wrapper-a .live-item-a .info .title[data-v-e3900540]{font-size:%?30?%;color:#333}.live-wrapper-a .live-item-a .info .people[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;font-size:%?24?%;margin-top:%?10?%}.live-wrapper-a .live-item-a .info .people uni-image[data-v-e3900540]{width:%?32?%;height:%?32?%;-webkit-border-radius:50%;border-radius:50%;margin-right:%?10?%}.live-wrapper-a .live-item-a .info .goods-wrapper[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item[data-v-e3900540]{position:relative;width:%?96?%;height:%?96?%;margin-right:%?20?%;overflow:hidden;-webkit-border-radius:%?16?%;border-radius:%?16?%}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item[data-v-e3900540]:last-child{margin-right:0}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item uni-image[data-v-e3900540]{width:100%;height:100%;-webkit-border-radius:%?16?%;border-radius:%?16?%}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item .bg[data-v-e3900540]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-border-radius:%?16?%;border-radius:%?16?%;background:rgba(0,0,0,.3)}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item uni-text[data-v-e3900540]{position:absolute;left:0;bottom:0;width:100%;height:%?60?%;line-height:%?70?%;color:#fff;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.75)));background:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.75));background:linear-gradient(180deg,transparent,rgba(0,0,0,.75))}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item .num[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);color:#fff;font-size:%?28?%}.live-wrapper-a .live-item-a .info .empty-goods[data-v-e3900540]{width:%?96?%;height:%?96?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;background-color:#b2b2b2;color:#fff;font-size:%?20?%;text-align:center;line-height:%?96?%}.live-wrapper-a.live-wrapper-c .live-item-a[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.live-wrapper-a.live-wrapper-c .live-item-a .img-box[data-v-e3900540]{width:100%;-webkit-border-radius:8px 8px 0 0;border-radius:8px 8px 0 0}.live-wrapper-a.live-wrapper-c .live-item-a .info[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:initial;-webkit-box-direction:initial;-webkit-flex-direction:initial;flex-direction:row}.live-wrapper-a.live-wrapper-c .live-item-a .info .left[data-v-e3900540]{width:69%}.live-wrapper-a.live-wrapper-c .live-item-a .info .goods-wrapper[data-v-e3900540]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.live-wrapper-b[data-v-e3900540]{padding:%?20?% %?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.live-wrapper-b .live-item-b[data-v-e3900540]{width:%?345?%;background-color:#fff;-webkit-border-radius:%?16?%;border-radius:%?16?%;overflow:hidden;margin-bottom:%?20?%;overflow:hidden}.live-wrapper-b .live-item-b .img-box[data-v-e3900540]{position:relative}.live-wrapper-b .live-item-b .img-box uni-image[data-v-e3900540]{width:100%;height:%?274?%}.live-wrapper-b .live-item-b .info[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?20?%}.live-wrapper-b .live-item-b .info .title[data-v-e3900540]{font-size:%?30?%;color:#333}.live-wrapper-b .live-item-b .info .people[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?10?%;color:#999}.live-wrapper-b .live-item-b .info .people uni-image[data-v-e3900540]{width:%?36?%;height:%?36?%;-webkit-border-radius:50%;border-radius:50%;margin-right:%?10?%}.label[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;left:%?20?%;top:%?20?%;-webkit-border-radius:%?22?% 0 %?22?% %?22?%;border-radius:%?22?% 0 %?22?% %?22?%;font-size:%?24?%;color:#fff}.label uni-image[data-v-e3900540]{margin-right:%?10?%}.label uni-text[data-v-e3900540]{font-size:%?22?%}.bgred[data-v-e3900540]{width:%?132?%;height:%?38?%;background:-webkit-gradient(linear,right top,left top,from(#f5742f),to(#ff1717));background:-webkit-linear-gradient(right,#f5742f,#ff1717);background:linear-gradient(270deg,#f5742f,#ff1717)}.bggary[data-v-e3900540]{width:%?108?%;height:%?38?%;background:-webkit-gradient(linear,right top,left top,from(#999),to(#666));background:-webkit-linear-gradient(right,#999,#666);background:linear-gradient(270deg,#999,#666)}.bgblue[data-v-e3900540]{width:%?220?%;height:%?38?%;background:rgba(0,0,0,.36);overflow:hidden}.bgblue .txt[data-v-e3900540]{position:relative;left:%?-5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:38px;height:100%;text-align:center;background:-webkit-gradient(linear,right top,left top,from(#2fa1f5),to(#0076ff));background:-webkit-linear-gradient(right,#2fa1f5,#0076ff);background:linear-gradient(270deg,#2fa1f5,#0076ff)}.title-box[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;font-size:%?32?%}.title-box .more[data-v-e3900540]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#666}.title-box .more .iconfont[data-v-e3900540]{font-size:%?26?%;margin-top:%?8?%}.empty-txt[data-v-e3900540]{height:%?60?%;line-height:%?60?%;text-align:center;font-size:%?24?%;color:#999}',""]),e.exports=t},e68c:function(e,t,i){"use strict";var r=i("fe73"),a=i.n(r);a.a},f897:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},n=[]},fe73:function(e,t,i){var r=i("bd5f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("6d4e2902",r,!0,{sourceMap:!1,shadowMode:!1})}}]);