(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d44a3470"],{"1ea4":function(t,e,a){},"20c7":function(t,e,a){},6968:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v("发票管理")]),a("div",[t.tablists?a("Tabs",{on:{"on-click":t.onClickTab},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[a("TabPane",{attrs:{label:"全部发票（"+t.tablists.all+"）",name:" "}}),a("TabPane",{attrs:{label:"待开发票（"+t.tablists.noOpened+"）",name:"1"}}),a("TabPane",{attrs:{label:"已开发票（"+t.tablists.opened+"）",name:"2"}}),a("TabPane",{attrs:{label:"退款发票（"+t.tablists.refund+"）",name:"3"}})],1):t._e()],1)])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"table_box"},[a("Form",{ref:"orderData",staticClass:"tabform",attrs:{model:t.orderData,"label-width":80,"label-position":"right"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex",justify:"end"}},[a("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[a("FormItem",{attrs:{label:"创建时间："}},[a("DatePicker",{staticClass:"mr20",staticStyle:{width:"300px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"datetimerange",placement:"bottom-start",placeholder:"自定义时间",options:t.options},on:{"on-change":t.onchangeTime}})],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({staticClass:"mr"},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"搜索：",prop:"real_name","label-for":"real_name"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入","element-id":"name"},on:{"on-search":function(e){return t.orderSearch()}},model:{value:t.orderData.real_name,callback:function(e){t.$set(t.orderData,"real_name",e)},expression:"orderData.real_name"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.orderData.field_key,callback:function(e){t.$set(t.orderData,"field_key",e)},expression:"orderData.field_key"}},[a("Option",{attrs:{value:"all"}},[t._v("全部")]),a("Option",{attrs:{value:"order_id"}},[t._v("订单号")]),a("Option",{attrs:{value:"uid"}},[t._v("UID")]),a("Option",{attrs:{value:"real_name"}},[t._v("用户姓名")]),a("Option",{attrs:{value:"user_phone"}},[t._v("用户电话")])],1)],1)],1)],1)],1)],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.orderList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"pay_price",fn:function(e){var i=e.row;e.index;return[a("div",[t._v("¥ "+t._s(i.pay_price))])]}},{key:"type",fn:function(e){var i=e.row;e.index;return[1===i.type?a("div",[t._v("电子普通发票")]):a("div",[t._v("纸质专用发票")])]}},{key:"is_invoice",fn:function(e){var i=e.row;e.index;return[1===i.is_invoice?a("div",[t._v("已开票")]):a("div",[t._v("未开票")])]}},{key:"status",fn:function(e){var i=e.row;e.index;return[0===i.status?a("div",[t._v("未发货")]):1===i.status?a("div",[t._v("待收货")]):2===i.status?a("div",[t._v("待评价")]):3===i.status?a("div",[t._v("已完成")]):t._e()]}},{key:"header_type",fn:function(e){var i=e.row;e.index;return[1===i.header_type?a("div",[t._v("个人")]):a("div",[t._v("企业")])]}},{key:"action",fn:function(e){var i=e.row;e.index;return[a("a",{on:{click:function(e){return t.edit(i)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.orderInfo(i.id)}}},[t._v("订单信息")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.orderData.page,"show-elevator":"","show-total":"","page-size":t.orderData.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"发票详情",width:"700","footer-hide":""},on:{"on-cancel":t.cancel},model:{value:t.invoiceShow,callback:function(e){t.invoiceShow=e},expression:"invoiceShow"}},[a("Form",{ref:"formInline",attrs:{model:t.formInline,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[1===t.invoiceDetails.header_type&&1===t.invoiceDetails.type?a("div",[a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[t._v("发票信息")]),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("发票抬头: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.name))])]),a("Col",{attrs:{span:"12"}},[t._v("发票类型: "),a("span",{staticClass:"info"},[t._v("电子普通发票")])])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("发票抬头类型: 个人")])],1)],1),a("div",{staticClass:"list"},[a("div",{staticClass:"title row"},[t._v("联系信息")]),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("真实姓名: "+t._s(t.invoiceDetails.real_name))]),a("Col",{attrs:{span:"12"}},[t._v("联系电话: "+t._s(t.invoiceDetails.user_phone))])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("联系邮箱: "+t._s(t.invoiceDetails.email))])],1)],1)]):t._e(),2===t.invoiceDetails.header_type&&1===t.invoiceDetails.type?a("div",[a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[t._v("发票信息")]),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("发票抬头: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.name))])]),a("Col",{attrs:{span:"12"}},[t._v("企业税号: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.duty_number))])])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("发票类型: 电子普通发票")]),a("Col",{attrs:{span:"12"}},[t._v("发票抬头类型: 企业")])],1)],1),a("div",{staticClass:"list"},[a("div",{staticClass:"title row"},[t._v("联系信息")]),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("真实姓名: "+t._s(t.invoiceDetails.real_name))]),a("Col",{attrs:{span:"12"}},[t._v("联系电话: "+t._s(t.invoiceDetails.user_phone))])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("联系邮箱: "+t._s(t.invoiceDetails.email))])],1)],1)]):t._e(),2===t.invoiceDetails.header_type&&2===t.invoiceDetails.type?a("div",[a("div",{staticClass:"list"},[a("div",{staticClass:"title"},[t._v("发票信息")]),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("发票抬头: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.name))])]),a("Col",{attrs:{span:"12"}},[t._v("企业税号: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.duty_number))])])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("发票类型: 纸质专用发票")]),a("Col",{attrs:{span:"12"}},[t._v("发票抬头类型: 企业")])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("开户银行: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.bank))])]),a("Col",{attrs:{span:"12"}},[t._v("银行账号: "),a("span",{staticClass:"info"},[t._v(t._s(t.invoiceDetails.card_number))])])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("企业地址: "+t._s(t.invoiceDetails.address))]),a("Col",{attrs:{span:"12"}},[t._v("企业电话: "+t._s(t.invoiceDetails.drawer_phone))])],1)],1),a("div",{staticClass:"list"},[a("div",{staticClass:"title row"},[t._v("联系信息")]),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("真实姓名: "+t._s(t.invoiceDetails.real_name))]),a("Col",{attrs:{span:"12"}},[t._v("联系电话: "+t._s(t.invoiceDetails.user_phone))])],1),a("Row",{staticClass:"row"},[a("Col",{attrs:{span:"12"}},[t._v("联系邮箱: "+t._s(t.invoiceDetails.email))])],1)],1)]):t._e(),a("FormItem",{staticStyle:{"margin-top":"14px"},attrs:{label:"开票状态："}},[a("RadioGroup",{on:{"on-change":function(e){return t.kaiInvoice(t.formInline.is_invoice)}},model:{value:t.formInline.is_invoice,callback:function(e){t.$set(t.formInline,"is_invoice",e)},expression:"formInline.is_invoice"}},[a("Radio",{attrs:{label:1}},[t._v("已开票")]),a("Radio",{attrs:{label:0}},[t._v("未开票")])],1)],1),1===t.formInline.is_invoice?a("FormItem",{attrs:{label:"发票编号："}},[a("Input",{attrs:{placeholder:"请输入发票编号"},model:{value:t.formInline.invoice_number,callback:function(e){t.$set(t.formInline,"invoice_number",e)},expression:"formInline.invoice_number"}})],1):t._e(),1===t.formInline.is_invoice?a("FormItem",{attrs:{label:"发票备注："}},[a("Input",{attrs:{value:"备注",type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入发票备注"},model:{value:t.formInline.remark,callback:function(e){t.$set(t.formInline,"remark",e)},expression:"formInline.remark"}})],1):t._e(),a("Button",{staticStyle:{width:"100%",margin:"0 10px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v("确定")])],1)],1),a("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"订单详情","footer-hide":"",width:"700"},model:{value:t.orderShow,callback:function(e){t.orderShow=e},expression:"orderShow"}},[t.orderShow?a("orderDetall",{attrs:{orderId:t.orderId},on:{detall:t.detall}}):t._e()],1)],1)},s=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("1da1")),r=a("ade3"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.orderDetail.userInfo?a("div",{staticClass:"order_detail"},[a("div",{staticClass:"msg-box"},[a("div",{staticClass:"box-title"},[t._v("收货信息")]),a("div",{staticClass:"msg-wrapper"},[a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("用户昵称：")]),t._v(t._s(t.orderDetail.userInfo.nickname)+"\n                ")]),a("div",{staticClass:"item"},[a("span",[t._v("收货人：")]),t._v(t._s(t.orderDetail.orderInfo.real_name)+"\n                ")])]),a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("联系电话：")]),t._v(t._s(t.orderDetail.orderInfo.user_phone)+"\n                ")]),a("div",{staticClass:"item"},[a("span",[t._v("收货地址：")]),t._v(t._s(t.orderDetail.orderInfo.user_address)+"\n                ")])])])]),a("div",{staticClass:"msg-box",staticStyle:{border:"none"}},[a("div",{staticClass:"box-title"},[t._v("订单信息")]),a("div",{staticClass:"msg-wrapper"},[a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("订单ID：")]),t._v(t._s(t.orderDetail.orderInfo.order_id)+"\n                ")]),a("div",{staticClass:"item",staticStyle:{color:"red"}},[a("span",{staticStyle:{color:"red"}},[t._v("订单状态：")]),t._v(t._s(t.orderDetail.orderInfo._status._title)+"\n                ")])]),a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("商品总数：")]),t._v(t._s(t.orderDetail.orderInfo.total_num)+"\n                ")]),a("div",{staticClass:"item"},[a("span",[t._v("商品总价：")]),t._v(t._s(t.orderDetail.orderInfo.total_price)+"\n                ")])]),a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("交付邮费：")]),t._v(t._s(t.orderDetail.orderInfo.pay_postage)+"\n                ")]),a("div",{staticClass:"item"},[a("span",[t._v("优惠券金额：")]),t._v(t._s(t.orderDetail.orderInfo.coupon_price)+"\n                ")])]),a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("实际支付：")]),t._v(t._s(t.orderDetail.orderInfo.pay_price)+"\n                ")]),a("div",{staticClass:"item"},[a("span",[t._v("创建时间：")]),t._v(t._s(t.orderDetail.orderInfo.add_time)+"\n                ")])]),a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("支付方式：")]),t._v(t._s(t.orderDetail.orderInfo._status._payType)+"\n                ")]),a("div",{staticClass:"item"},[a("span",[t._v("推广人：")]),t._v(t._s(t.orderDetail.userInfo.spread_name)+"\n                ")])]),a("div",{staticClass:"msg-item"},[a("div",{staticClass:"item"},[a("span",[t._v("商家备注：")]),t._v(t._s(t.orderDetail.orderInfo.mark)+"\n                ")])])])]),a("div",{staticClass:"goods-box"},[a("Table",{attrs:{columns:t.columns1,data:t.orderList},scopedSlots:t._u([{key:"id",fn:function(e){var a=e.row;e.index;return[t._v("\n                "+t._s(a.productInfo.id)+"\n            ")]}},{key:"name",fn:function(e){var i=e.row;e.index;return[a("div",{staticClass:"product_info"},[a("img",{attrs:{src:i.productInfo.image,alt:""}}),a("p",[t._v(t._s(i.productInfo.store_name))])])]}},{key:"className",fn:function(e){var a=e.row;e.index;return[t._v("\n                "+t._s(a.class_name)+"\n            ")]}},{key:"price",fn:function(e){var a=e.row;e.index;return[t._v("\n                "+t._s(a.productInfo.price)+"\n            ")]}},{key:"total_num",fn:function(e){e.row,e.index;return[t._v("\n                "+t._s(t.orderDetail.orderInfo.total_num)+"\n            ")]}}],null,!1,7444805)})],1),t.spinShow?a("Spin",{attrs:{fix:""}}):t._e()],1):t._e()},l=[],c=(a("c5f6"),a("f8b7")),d={name:"order_detail",props:{orderId:{type:String|Number,default:""}},data:function(){return{orderDetail:{},orderList:[],columns1:[{title:"商品ID",slot:"id",maxWidth:80},{title:"商品名称",slot:"name",minWidth:160},{title:"商品分类",slot:"className"},{title:"商品售价",slot:"price"},{title:"商品数量",slot:"total_num"}],spinShow:!1}},mounted:function(){this.getOrderInfo()},methods:{getOrderInfo:function(){var t=this;this.spinShow=!0,Object(c["q"])(this.orderId).then((function(e){t.spinShow=!1,t.orderDetail=e.data,t.orderList=e.data.orderInfo.cartInfo})).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg),t.$emit("detall",!1)}))}}},v=d,u=(a("79b0"),a("2877")),_=Object(u["a"])(v,o,l,!1,null,"453d2109",null),m=_.exports,p=a("2f62");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var w={name:"invoice",components:{orderDetall:m},computed:h(h({},Object(p["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{orderShow:!1,invoiceShow:!1,invoiceDetails:{},formInline:{is_invoice:0,invoice_number:"",remark:""},loading:!1,currentTab:"",tablists:null,timeVal:[],options:{shortcuts:[{text:"今天",value:function(){var t=new Date,e=new Date;return e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[e,t]}},{text:"昨天",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),[e,t]}},{text:"最近7天",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-6))),[e,t]}},{text:"最近30天",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),[e,t]}},{text:"本月",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),1))),[e,t]}},{text:"本年",value:function(){var t=new Date,e=new Date;return e.setTime(e.setTime(new Date((new Date).getFullYear(),0,1))),[e,t]}}]},grid:{xl:8,lg:8,md:8,sm:24,xs:24},columns:[{title:"订单号",key:"order_id",minWidth:170},{title:"订单金额",slot:"pay_price",minWidth:100},{title:"发票类型",slot:"type",minWidth:120,filters:[{label:"电子普通发票",value:1},{label:"纸质专用发票",value:2}],filterMultiple:!1,filterMethod:function(t,e){return 1===t?1===e.type:2===t?2===e.type:void 0}},{title:"发票抬头类型",slot:"header_type",minWidth:110,filters:[{label:"个人",value:1},{label:"企业",value:2}],filterMultiple:!1,filterMethod:function(t,e){return 1===t?1===e.header_type:2===t?2===e.header_type:void 0}},{title:"下单时间",key:"add_time",minWidth:150,sortable:!0},{title:"开票状态",slot:"is_invoice",minWidth:80},{title:"订单状态",slot:"status",minWidth:80},{title:"操作",slot:"action",fixed:"right",minWidth:150,align:"center"}],orderList:[],total:0,orderData:{page:1,limit:10,status:"",data:"",real_name:"",field_key:"",type:""},orderId:0}},created:function(){this.getTabs(),this.getList()},mounted:function(){},methods:{detall:function(t){this.orderShow=t},orderInfo:function(t){this.orderId=t,this.orderShow=!0},empty:function(){this.formInline={is_invoice:1,invoice_number:"",remark:""}},cancel:function(){this.invoiceShow=!1,this.empty()},kaiInvoice:function(t){1!==t&&(this.formInline.invoice_number="",this.formInline.remark="")},handleSubmit:function(){var t=this;if(1===this.formInline.is_invoice&&""===this.formInline.invoice_number.trim())return this.$Message.error("请填写发票编号");Object(c["s"])(this.invoiceDetails.invoice_id,this.formInline).then((function(e){t.$Message.success(e.msg),t.invoiceShow=!1,t.getList(),t.empty()})).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){this.invoiceShow=!0,this.invoiceDetails=t,this.formInline.invoice_number=t.invoice_number,this.formInline.remark=t.invoice_reamrk,this.formInline.is_invoice=t.is_invoice},getList:function(){var t=this;this.loading=!0,Object(c["r"])(this.orderData).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!1,i=a.data,t.orderList=i.list,t.total=i.count;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.orderData.page=t,this.getList()},getTabs:function(){var t=this;Object(c["p"])().then((function(e){t.tablists=e.data})).catch((function(e){t.$Message.error(e.msg)}))},orderSearch:function(){this.orderData.page=1,this.getList()},onchangeTime:function(t){this.orderData.page=1,this.timeVal=t,this.orderData.data=this.timeVal[0]?this.timeVal.join("-"):"",this.getList()},selectChange:function(){this.orderData.page=1,this.getList()},onClickTab:function(){this.orderData.page=1,this.orderData.type=this.currentTab,this.getList()}}},b=w,D=(a("d606"),Object(u["a"])(b,i,s,!1,null,"6d92295b",null));e["default"]=D.exports},"79b0":function(t,e,a){"use strict";var i=a("1ea4"),s=a.n(i);s.a},d606:function(t,e,a){"use strict";var i=a("20c7"),s=a.n(i);s.a}}]);