(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-orderDetail-index"],{"024d":function(e,n,t){var a=t("7819");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("452b5e18",a,!0,{sourceMap:!1,shadowMode:!1})},"102a":function(e,n,t){"use strict";t.r(n);var a=t("aa4a"),i=t("2e80");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("68cd");var o,s=t("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"aeb1ca7c",null,!1,a["a"],o);n["default"]=d.exports},"126b":function(e,n,t){var a=t("d0e2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("79328566",a,!0,{sourceMap:!1,shadowMode:!1})},"1de5":function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},2891:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"PriceChange",components:{},props:{change:Boolean,orderInfo:Object,status:String},data:function(){return{focus:!1,price:0,refund_price:0,remark:""}},watch:{orderInfo:function(e){this.price=this.orderInfo.pay_price,this.refund_price=this.orderInfo.pay_price,this.remark=""}},mounted:function(){},methods:{priceChange:function(){this.focus=!0},close:function(){this.price=this.orderInfo.pay_price,this.$emit("closechange",!1)},save:function(){var e=this;e.$emit("savePrice",{price:e.price,refund_price:e.refund_price,type:1,remark:e.remark})},refuse:function(){var e=this;e.$emit("savePrice",{price:e.price,refund_price:e.refund_price,type:2,remark:e.remark})}}};n.default=a},"2e80":function(e,n,t){"use strict";t.r(n);var a=t("97de"),i=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=i.a},"418b":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-view",{staticClass:"priceChange",class:!0===e.change?"on":""},[t("v-uni-view",{staticClass:"priceTitle"},[e._v(e._s(0==e.status?1===e.orderInfo.refund_status?"立即退款":"一键改价":"订单备注")),t("span",{staticClass:"iconfont icon-guanbi",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.close.apply(void 0,arguments)}}})]),0==e.status?t("v-uni-view",{staticClass:"listChange"},[0===e.orderInfo.refund_status?t("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[t("v-uni-view",[e._v("商品总价(¥)")]),t("v-uni-view",{staticClass:"money"},[e._v(e._s(e.orderInfo.total_price)),t("span",{staticClass:"iconfont icon-suozi"})])],1):e._e(),0===e.orderInfo.refund_status?t("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[t("v-uni-view",[e._v("原始邮费(¥)")]),t("v-uni-view",{staticClass:"money"},[e._v(e._s(e.orderInfo.pay_postage)),t("span",{staticClass:"iconfont icon-suozi"})])],1):e._e(),0===e.orderInfo.refund_status?t("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[t("v-uni-view",[e._v("实际支付(¥)")]),t("v-uni-view",{staticClass:"money"},[t("v-uni-input",{class:!0===e.focus?"on":"",attrs:{type:"text"},on:{focus:function(n){arguments[0]=n=e.$handleEvent(n),e.priceChange.apply(void 0,arguments)}},model:{value:e.price,callback:function(n){e.price=n},expression:"price"}})],1)],1):e._e(),1===e.orderInfo.refund_status?t("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[t("v-uni-view",[e._v("实际支付(¥)")]),t("v-uni-view",{staticClass:"money"},[e._v(e._s(e.orderInfo.pay_price)),t("span",{staticClass:"iconfont icon-suozi"})])],1):e._e(),1===e.orderInfo.refund_status?t("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[t("v-uni-view",[e._v("退款金额(¥)")]),t("v-uni-view",{staticClass:"money"},[t("v-uni-input",{class:!0===e.focus?"on":"",attrs:{type:"text"},on:{focus:function(n){arguments[0]=n=e.$handleEvent(n),e.priceChange.apply(void 0,arguments)}},model:{value:e.refund_price,callback:function(n){e.refund_price=n},expression:"refund_price"}})],1)],1):e._e()],1):t("v-uni-view",{staticClass:"listChange"},[t("v-uni-textarea",{attrs:{placeholder:e.orderInfo.remark?e.orderInfo.remark:"请填写备注信息..."},model:{value:e.remark,callback:function(n){e.remark=n},expression:"remark"}})],1),t("v-uni-view",{staticClass:"modify",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.save.apply(void 0,arguments)}}},[e._v(e._s(1===e.status||0==e.orderInfo.refund_status?"立即修改":"确认退款"))]),1==e.orderInfo.refund_status&&0==e.status?t("v-uni-view",{staticClass:"modify1",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.refuse.apply(void 0,arguments)}}},[e._v("拒绝退款")]):e._e()],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!0===e.change,expression:"change === true"}],staticClass:"mask",on:{touchmove:function(n){n.preventDefault(),arguments[0]=n=e.$handleEvent(n)}}})],1)},r=[]},"68cd":function(e,n,t){"use strict";var a=t("024d"),i=t.n(a);i.a},"744a":function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.getStatisticsInfo=r,n.getStatisticsMonth=o,n.getAdminOrderList=s,n.setAdminOrderPrice=d,n.setAdminOrderRemark=c,n.getAdminOrderDetail=l,n.getAdminOrderDelivery=u,n.setAdminOrderDelivery=f,n.getStatisticsTime=v,n.setOfflinePay=p,n.setOrderRefund=g,n.getLogistics=h,n.orderVerific=b,n.orderExportTemp=m,n.orderDeliveryInfo=w,n.orderOrderDelivery=C;var i=a(t("0e3b"));function r(){return i.default.get("/admin/order/statistics",{},{login:!0})}function o(e){return i.default.get("/admin/order/data",e,{login:!0})}function s(e){return i.default.get("/admin/order/list",e,{login:!0})}function d(e){return i.default.post("/admin/order/price",e,{login:!0})}function c(e){return i.default.post("/admin/order/remark",e,{login:!0})}function l(e){return i.default.get("/admin/order/detail/"+e,{},{login:!0})}function u(e){return i.default.get("/admin/order/delivery/gain/"+e,{},{login:!0})}function f(e,n){return i.default.post("/admin/order/delivery/keep/"+e,n,{login:!0})}function v(e){return i.default.get("/admin/order/time",e,{login:!0})}function p(e){return i.default.post("/admin/order/offline",e,{login:!0})}function g(e){return i.default.post("/admin/order/refund",e,{login:!0})}function h(){return i.default.get("/logistics",{},{login:!1})}function b(e,n){return i.default.post("order/order_verific",{verify_code:e,is_confirm:n})}function m(e){return i.default.get("admin/order/export_temp",e)}function w(){return i.default.get("admin/order/delivery_info")}function C(){return i.default.get("admin/order/delivery")}},"74d6":function(e,n,t){"use strict";t.r(n);var a=t("418b"),i=t("b8fd");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("c2e0d");var o,s=t("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"84533bba",null,!1,a["a"],o);n["default"]=d.exports},7819:function(e,n,t){var a=t("24fb");n=a(!1),n.push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*商户管理订单详情*/.pos-order-details .header[data-v-aeb1ca7c]{background:-webkit-gradient(linear,left top,right top,from(#2291f8),to(#1cd1dc));background:-webkit-linear-gradient(left,#2291f8,#1cd1dc);background:linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-webkit-linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-moz-linear-gradient(to right,#2291f8 0,#1cd1dc 100%)}.pos-order-details .header .state[data-v-aeb1ca7c]{font-size:%?36?%;color:#fff}.pos-order-details .header .data[data-v-aeb1ca7c]{margin-left:%?35?%;font-size:%?28?%}.pos-order-details .header .data .order-num[data-v-aeb1ca7c]{font-size:%?30?%;margin-bottom:%?8?%}.pos-order-details .remarks[data-v-aeb1ca7c]{width:100%;height:%?86?%;background-color:#fff;padding:0 %?30?%}.pos-order-details .remarks .iconfont[data-v-aeb1ca7c]{font-size:%?40?%;color:#2a7efb}.pos-order-details .remarks uni-input[data-v-aeb1ca7c]{width:%?630?%;height:100%;font-size:%?30?%}.pos-order-details .remarks uni-input[data-v-aeb1ca7c]::-webkit-input-placeholder{color:#666}.pos-order-details .remarks uni-input[data-v-aeb1ca7c]::placeholder{color:#666}.pos-order-details .orderingUser[data-v-aeb1ca7c]{font-size:%?26?%;color:#282828;padding:0 %?30?%;height:%?67?%;background-color:#fff;margin-top:%?16?%;border-bottom:1px solid #f5f5f5}.pos-order-details .orderingUser .iconfont[data-v-aeb1ca7c]{font-size:%?40?%;color:#2a7efb;margin-right:%?15?%}.pos-order-details .address[data-v-aeb1ca7c]{margin-top:0}.pos-order-details .pos-order-goods[data-v-aeb1ca7c]{margin-top:%?17?%}.pos-order-details .footer .more[data-v-aeb1ca7c]{font-size:%?27?%;color:#aaa;width:%?100?%;height:%?64?%;text-align:center;line-height:%?64?%;margin-right:%?25?%;position:relative}.pos-order-details .footer .delivery[data-v-aeb1ca7c]{background:-webkit-gradient(linear,left top,right top,from(#2291f8),to(#1cd1dc));background:-webkit-linear-gradient(left,#2291f8,#1cd1dc);background:linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-webkit-linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-moz-linear-gradient(to right,#2291f8 0,#1cd1dc 100%)}.pos-order-details .footer .more .order .arrow[data-v-aeb1ca7c]{width:0;height:0;border-left:%?11?% solid transparent;border-right:%?11?% solid transparent;border-top:%?20?% solid #e5e5e5;position:absolute;left:%?15?%;bottom:%?-18?%}.pos-order-details .footer .more .order .arrow[data-v-aeb1ca7c]:before{content:"";width:0;height:0;border-left:%?9?% solid transparent;border-right:%?9?% solid transparent;border-top:%?19?% solid #fff;position:absolute;left:%?-10?%;bottom:0}.pos-order-details .footer .more .order[data-v-aeb1ca7c]{width:%?200?%;background-color:#fff;border:1px solid #eee;-webkit-border-radius:%?10?%;border-radius:%?10?%;position:absolute;top:%?-200?%;z-index:9}.pos-order-details .footer .more .order .item[data-v-aeb1ca7c]{height:%?77?%;line-height:%?77?%}.pos-order-details .footer .more .order .item~.item[data-v-aeb1ca7c]{border-top:1px solid #f5f5f5}.pos-order-details .footer .more .moreName[data-v-aeb1ca7c]{width:100%;height:100%}\n/*订单详情*/.order-details .header[data-v-aeb1ca7c]{padding:0 %?30?%;height:%?150?%}.order-details .header.on[data-v-aeb1ca7c]{background-color:#666!important}.order-details .header .pictrue[data-v-aeb1ca7c]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-aeb1ca7c]{width:100%;height:100%}.order-details .header .data[data-v-aeb1ca7c]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header.on .data[data-v-aeb1ca7c]{margin-left:0}.order-details .header .data .state[data-v-aeb1ca7c]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}\n/* .order-details .header .data .time{margin-left:20upx;} */.order-details .nav[data-v-aeb1ca7c]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-aeb1ca7c]{padding:0 %?40?%}.order-details .nav .navCon .on[data-v-aeb1ca7c]{font-weight:700;color:#e93323}.order-details .nav .progress[data-v-aeb1ca7c]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-aeb1ca7c]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-aeb1ca7c]{font-size:%?25?%;color:#939390;margin-top:%?-2?%;width:%?30?%;height:%?30?%;line-height:%?33?%;text-align:center;margin-right:0!important}.order-details .address[data-v-aeb1ca7c]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?25?% %?30?% %?30?% %?30?%}.order-details .address .name[data-v-aeb1ca7c]{font-size:%?30?%;color:#282828;margin-bottom:.1rem}.order-details .address .name .phone[data-v-aeb1ca7c]{margin-left:%?40?%}.order-details .line[data-v-aeb1ca7c]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-aeb1ca7c]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-aeb1ca7c]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-aeb1ca7c]{font-size:%?28?%;color:#282828}.order-details .wrapper .item~.item[data-v-aeb1ca7c]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-aeb1ca7c]{color:#868686;width:%?500?%;text-align:right}.order-details .wrapper .item .conter .copy[data-v-aeb1ca7c]{font-size:%?20?%;color:#333;-webkit-border-radius:%?3?%;border-radius:%?3?%;border:1px solid #666;padding:%?0?% %?15?%;margin-left:%?24?%;height:%?40?%}.order-details .wrapper .actualPay[data-v-aeb1ca7c]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-aeb1ca7c]{font-weight:700;font-size:%?30?%}.order-details .footer[data-v-aeb1ca7c]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;border-top:1px solid #eee}.order-details .footer .bnt[data-v-aeb1ca7c]{width:auto;height:%?60?%;line-height:%?60?%;text-align:center;line-height:upx;-webkit-border-radius:%?50?%;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%}.order-details .footer .bnt.cancel[data-v-aeb1ca7c]{color:#aaa;border:1px solid #ddd}.order-details .footer .bnt.default[data-v-aeb1ca7c]{color:#444;border:1px solid #444}.order-details .footer .bnt~.bnt[data-v-aeb1ca7c]{margin-left:%?18?%}.pos-order-goods[data-v-aeb1ca7c]{padding:0 %?30?%;background-color:#fff}.pos-order-goods .goods[data-v-aeb1ca7c]{height:%?185?%}.pos-order-goods .goods~.goods[data-v-aeb1ca7c]{border-top:1px dashed #e5e5e5}.pos-order-goods .goods .picTxt[data-v-aeb1ca7c]{width:%?515?%}.pos-order-goods .goods .picTxt .pictrue[data-v-aeb1ca7c]{width:%?130?%;height:%?130?%}.pos-order-goods .goods .picTxt .pictrue uni-image[data-v-aeb1ca7c]{width:100%;height:100%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.pos-order-goods .goods .picTxt .text[data-v-aeb1ca7c]{width:%?365?%;height:%?130?%}.pos-order-goods .goods .picTxt .text .info[data-v-aeb1ca7c]{font-size:%?28?%;color:#282828}.pos-order-goods .goods .picTxt .text .attr[data-v-aeb1ca7c]{font-size:%?24?%;color:#999}.pos-order-goods .goods .money[data-v-aeb1ca7c]{width:%?164?%;text-align:right;font-size:%?28?%}.pos-order-goods .goods .money .x-money[data-v-aeb1ca7c]{color:#282828}.pos-order-goods .goods .money .num[data-v-aeb1ca7c]{color:#ff9600;margin:%?5?% 0}.pos-order-goods .goods .money .y-money[data-v-aeb1ca7c]{color:#999;text-decoration:line-through}.public-total[data-v-aeb1ca7c]{font-size:%?28?%;color:#282828;border-top:1px solid #eee;height:%?92?%;line-height:%?92?%;text-align:right;padding:0 %?30?%;background-color:#fff}.public-total .money[data-v-aeb1ca7c]{color:#ff4c3c}',""]),e.exports=n},"97de":function(e,n,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var i=a(t("1da1")),r=a(t("74d6")),o=a(t("d537")),s=t("744a"),d=t("add2"),c={name:"AdminOrder",components:{PriceChange:r.default},props:{},data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",clickNum:1,goname:""}},watch:{"$route.params.oid":function(e){var n=this;void 0!=e&&(n.order_id=e,n.getIndex())}},onLoad:function(e){var n=this;this.order_id=e.id,this.goname=e.goname,this.getIndex(),this.$nextTick((function(){var e=new o.default(".copy-data");e.on("success",(function(e){n.$util.Tips({title:"复制成功"})})),e.on("error",(function(e){n.$util.Tips({title:"复制失败"})}))}))},methods:{more:function(){this.order=!this.order},modify:function(e){this.change=!0,this.status=e},changeclose:function(e){this.change=e},getIndex:function(){var e=this;(0,s.getAdminOrderDetail)(e.order_id).then((function(n){e.orderInfo=n.data,e.types=n.data._status._type,e.title=n.data._status._title,e.payType=n.data._status._payType}),(function(n){e.$util.Tips({title:n},{tab:3,url:1})}))},savePrice:function(e){var n=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,i,r,o,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=n,i={},r=e.price,o=e.refund_price,c=a.orderInfo.refund_status,l=e.remark,i.order_id=a.orderInfo.order_id,0!=a.status||0!==c){t.next=9;break}if((0,d.isMoney)(r)){t.next=5;break}return t.abrupt("return",a.$util.Tips({title:"请输入正确的金额"}));case 5:i.price=r,(0,s.setAdminOrderPrice)(i).then((function(){a.change=!1,a.$util.Tips({title:"改价成功",icon:"success"}),a.getIndex()}),(function(){a.change=!1,a.$util.Tips({title:"改价失败",icon:"none"})})),t.next=21;break;case 9:if(0!=a.status||1!==c){t.next=17;break}if((0,d.isMoney)(o)){t.next=12;break}return t.abrupt("return",a.$util.Tips({title:"请输入正确的金额"}));case 12:i.price=o,i.type=e.type,(0,s.setOrderRefund)(i).then((function(e){a.change=!1,a.$util.Tips({title:e.msg}),a.getIndex()}),(function(e){a.change=!1,a.$util.Tips({title:e})})),t.next=21;break;case 17:if(l){t.next=19;break}return t.abrupt("return",n.$util.Tips({title:"请输入备注"}));case 19:i.remark=l,(0,s.setAdminOrderRemark)(i).then((function(e){a.change=!1,n.$util.Tips({title:e.msg,icon:"success"}),a.getIndex()}),(function(e){a.change=!1,a.$util.Tips({title:e})}));case 21:case"end":return t.stop()}}),t)})))()},offlinePay:function(){var e=this;(0,s.setOfflinePay)({order_id:this.orderInfo.order_id}).then((function(n){e.$util.Tips({title:n.msg,icon:"success"}),e.getIndex()}),(function(n){e.$util.Tips({title:n})}))},webCopy:function(e,n){var t=e,a=n,i=this;1==i.clickNum&&(i.clickNum+=1,i.webCopy(t,a))}}};n.default=c}).call(this,t("5a52")["default"])},aa4a:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"order-details pos-order-details"},[t("v-uni-view",{staticClass:"header acea-row row-middle"},[t("v-uni-view",{staticClass:"state"},[e._v(e._s(e.title))]),t("v-uni-view",{staticClass:"data"},[t("v-uni-view",{staticClass:"order-num"},[e._v("订单："+e._s(e.orderInfo.order_id))]),t("v-uni-view",[t("span",{staticClass:"time"},[e._v(e._s(e.orderInfo._add_time))])])],1)],1),"looks"!=e.goname?t("v-uni-view",{staticClass:"remarks acea-row row-between-wrapper"},[t("span",{staticClass:"iconfont icon-zhinengkefu-"}),t("v-uni-input",{staticClass:"line1",staticStyle:{"text-align":"left"},attrs:{value:e.orderInfo.remark?e.orderInfo.remark:"订单未备注，点击添加备注信息",disabled:!0},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.modify("1")}}})],1):e._e(),t("v-uni-view",{staticClass:"orderingUser acea-row row-middle"},[t("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.orderInfo.nickname))]),t("v-uni-view",{staticClass:"address"},[t("v-uni-view",{staticClass:"name"},[e._v(e._s(e.orderInfo.real_name)),t("span",{staticClass:"phone"},[e._v(e._s(e.orderInfo.user_phone))])]),t("v-uni-view",[e._v(e._s(e.orderInfo.user_address))])],1),t("v-uni-view",{staticClass:"line"},[t("v-uni-image",{attrs:{src:"/static/images/line.jpg"}})],1),t("v-uni-view",{staticClass:"pos-order-goods"},e._l(e.orderInfo.cartInfo,(function(n,a){return t("v-uni-navigator",{key:a,staticClass:"goods acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+n.productInfo.id,"hover-class":"none"}},[t("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[t("v-uni-view",{staticClass:"pictrue"},[t("v-uni-image",{attrs:{src:n.productInfo.image}})],1),t("v-uni-view",{staticClass:"text acea-row row-between row-column"},[t("v-uni-view",{staticClass:"info line2"},[e._v(e._s(n.productInfo.store_name))]),t("v-uni-view",{staticClass:"attr"},[e._v(e._s(n.productInfo.suk))])],1)],1),t("v-uni-view",{staticClass:"money"},[t("v-uni-view",{staticClass:"x-money"},[e._v("￥"+e._s(n.productInfo.price))]),t("v-uni-view",{staticClass:"num"},[e._v("x"+e._s(n.cart_num))]),t("v-uni-view",{staticClass:"y-money"},[e._v("￥"+e._s(n.productInfo.ot_price))])],1)],1)})),1),t("v-uni-view",{staticClass:"public-total"},[e._v("共"+e._s(e.orderInfo.total_num)+"件商品，应支付"),t("span",{staticClass:"money"},[e._v("￥"+e._s(e.orderInfo.pay_price))]),e._v("( 邮费 ¥"+e._s(e.orderInfo.pay_postage)+"\n\t\t\t)")]),t("v-uni-view",{staticClass:"wrapper"},[t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("订单编号：")]),t("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.order_id)),t("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.orderInfo.order_id}},[e._v("复制")])])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("下单时间：")]),t("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.add_time))])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("支付状态：")]),t("v-uni-view",{staticClass:"conter"},[e._v(e._s(1==e.orderInfo.paid?"已支付":"未支付"))])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("支付方式：")]),t("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.payType))])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("买家留言：")]),t("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.mark))])],1)],1),t("v-uni-view",{staticClass:"wrapper"},[t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("支付金额：")]),t("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.total_price))])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("优惠券抵扣：")]),t("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.coupon_price))])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("运费：")]),t("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.freight_price))])],1),t("v-uni-view",{staticClass:"actualPay acea-row row-right"},[e._v("实付款："),t("span",{staticClass:"money font-color-red"},[e._v("￥"+e._s(e.orderInfo.pay_price))])])],1),"fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type?t("v-uni-view",{staticClass:"wrapper"},[t("v-uni-view",{staticClass:"item acea-row row-between"},[t("v-uni-view",[e._v("配送方式：")]),"express"===e.orderInfo.delivery_type?t("v-uni-view",{staticClass:"conter"},[e._v("快递")]):e._e(),"send"===e.orderInfo.delivery_type?t("v-uni-view",{staticClass:"conter"},[e._v("送货")]):e._e()],1),t("v-uni-view",{staticClass:"item acea-row row-between"},["express"===e.orderInfo.delivery_type?t("v-uni-view",[e._v("快递公司：")]):e._e(),"send"===e.orderInfo.delivery_type?t("v-uni-view",[e._v("送货人：")]):e._e(),t("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name))])],1),t("v-uni-view",{staticClass:"item acea-row row-between"},["express"===e.orderInfo.delivery_type?t("v-uni-view",[e._v("快递单号：")]):e._e(),"send"===e.orderInfo.delivery_type?t("v-uni-view",[e._v("送货人电话：")]):e._e(),t("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_id)),t("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.orderInfo.delivery_id}},[e._v("复制")])])],1)],1):e._e(),t("v-uni-view",{staticStyle:{height:"120upx"}}),"looks"!=e.goname?t("v-uni-view",{staticClass:"footer acea-row row-right row-middle"},[t("v-uni-view",{staticClass:"more"}),0==e.types?t("v-uni-view",{staticClass:"bnt cancel",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.modify("0")}}},[e._v("一键改价")]):e._e(),-1==e.types?t("v-uni-view",{staticClass:"bnt cancel",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.modify("0")}}},[e._v("立即退款")]):e._e(),t("v-uni-view",{staticClass:"bnt cancel",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.modify("1")}}},[e._v("订单备注")]),"offline"===e.orderInfo.pay_type&&0===e.orderInfo.paid?t("v-uni-view",{staticClass:"bnt cancel",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.offlinePay.apply(void 0,arguments)}}},[e._v("确认付款")]):e._e(),1==e.types&&1===e.orderInfo.shipping_type?t("v-uni-navigator",{staticClass:"bnt delivery",attrs:{url:"/pages/admin/delivery/index?id="+e.orderInfo.order_id}},[e._v("去发货")]):e._e()],1):e._e(),t("PriceChange",{attrs:{change:e.change,orderInfo:e.orderInfo,status:e.status},on:{closechange:function(n){arguments[0]=n=e.$handleEvent(n),e.changeclose(n)},savePrice:function(n){arguments[0]=n=e.$handleEvent(n),e.savePrice.apply(void 0,arguments)}}})],1)},r=[]},add2:function(e,n,t){"use strict";function a(e){var n=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!n.test(e)}function i(e){var n=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!n.test(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.isMoney=a,n.checkPhone=i},b8fd:function(e,n,t){"use strict";t.r(n);var a=t("2891"),i=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=i.a},c2e0d:function(e,n,t){"use strict";var a=t("126b"),i=t.n(a);i.a},cb78:function(e,n){e.exports="data:image/jpeg;base64,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"},d0e2:function(e,n,t){var a=t("24fb"),i=t("1de5"),r=t("cb78");n=a(!1);var o=i(r);n.push([e.i,".priceChange[data-v-84533bba]{position:fixed;width:%?580?%;height:%?670?%;background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;top:50%;left:50%;margin-left:%?-290?%;margin-top:%?-335?%;z-index:666;-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s;-webkit-transform:scale(0);transform:scale(0);opacity:0}.priceChange.on[data-v-84533bba]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.priceChange .priceTitle[data-v-84533bba]{background:url("+o+") no-repeat;background-size:100% 100%;width:100%;height:%?160?%;-webkit-border-radius:%?10?% %?10?% 0 0;border-radius:%?10?% %?10?% 0 0;text-align:center;font-size:%?40?%;color:#fff;line-height:%?160?%;position:relative}.priceChange .priceTitle .iconfont[data-v-84533bba]{position:absolute;font-size:%?40?%;right:%?26?%;top:%?23?%;width:%?40?%;height:%?40?%;line-height:%?40?%}.priceChange .listChange[data-v-84533bba]{padding:0 %?40?%}.priceChange .listChange uni-textarea[data-v-84533bba]{-webkit-box-sizing:border-box;box-sizing:border-box}.priceChange .listChange .item[data-v-84533bba]{height:%?103?%;border-bottom:1px solid #e3e3e3;font-size:%?32?%;color:#333}.priceChange .listChange .item .money[data-v-84533bba]{color:#666;width:%?300?%;text-align:right}.priceChange .listChange .item .money .iconfont[data-v-84533bba]{font-size:%?32?%;margin-left:%?20?%}.priceChange .listChange .item .money uni-input[data-v-84533bba]{width:100%;height:100%;text-align:right;color:#ccc}.priceChange .listChange .item .money uni-input.on[data-v-84533bba]{color:#666}.priceChange .modify[data-v-84533bba]{font-size:%?32?%;color:#fff;width:%?490?%;height:%?90?%;text-align:center;line-height:%?90?%;-webkit-border-radius:%?45?%;border-radius:%?45?%;background-color:#2291f8;margin:%?53?% auto 0 auto}.priceChange .modify1[data-v-84533bba]{font-size:%?32?%;color:#312b2b;width:%?490?%;height:%?90?%;text-align:center;line-height:%?90?%;-webkit-border-radius:%?45?%;border-radius:%?45?%;background-color:#eee;margin:%?30?% auto 0 auto}.priceChange .listChange uni-textarea[data-v-84533bba]{border:1px solid #eee;width:100%;height:%?200?%;margin-top:%?50?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;color:#333;padding:%?20?%}",""]),e.exports=n}}]);