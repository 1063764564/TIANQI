webpackJsonp([1],{"4ml/":function(e,a){},K0al:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("7+uW"),r={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=t("VU/8")({name:"App"},r,!1,function(e){t("K0al")},null,null).exports,i=t("/ocq"),o=t("Dd8w"),c=t.n(o),p=t("//Fk"),l=t.n(p),u=t("mtWM"),_=t.n(u),v=(t("mw3O"),_.a.create({baseURL:"https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather",timeout:2e3}));v.interceptors.request.use(function(e){return e.headers["Content-Type"]="application/json;charset=UTF-8",e},function(e){return console.log(e),l.a.reject(e)}),v.interceptors.response.use(function(e){return l.a.resolve(e.data)},function(e){return l.a.reject(e.response)});var h=v;var m={name:"Home",data:function(){return{city:"",weatherData:{},earlywarn:{}}},created:function(){console.log("process.env.BASE_API:","https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather"),this.hetrequest("深圳"),document.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()});var e=0;document.addEventListener("touchend",function(a){var t=(new Date).getTime();t-e<=300&&a.preventDefault(),e=t},!1)},methods:{onSearch:function(e){console.log("搜索val:",e),this.hetrequest(e)},hetrequest:function(e){var a=this;(function(e){return h({url:"https://hn216.api.yesapi.cn/?s=App.Common_Weather.LiveWeather&app_key=B62F573DA64D74D8EF8493FE2AFC9FCF&sign=&city="+e,method:"get"})})(e).then(function(e){console.log("天氣查询res:",e),200==e.ret?(a.weatherData=c()({},e.data.weather),a.earlywarn=e.data.weather.alarm):a.$message.error(e.msg)}).catch(function(e){a.$message.error(e.msg)})}}},d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("van-search",{attrs:{shape:"round",background:"#a0c5e8",placeholder:"请输入搜索关键词"},on:{search:e.onSearch},model:{value:e.city,callback:function(a){e.city=a},expression:"city"}}),e._v(" "),t("div",{staticClass:"main"},[t("h2",[e._v("天气实况:")]),e._v(" "),t("ul",[t("li",[t("p",[t("i",{staticClass:"iconfont icon-tianqi-duoyunlan blue ft-25"}),t("span",[e._v(e._s(e.weatherData.city))]),t("span",{staticClass:"mar-20"},[e._v(e._s(e.weatherData.weather))]),t("i",{staticClass:"iconfont icon-wendu3 yello"}),t("span",{staticClass:"mar-20"},[e._v("温度:"+e._s(e.weatherData.tem))])]),e._v(" "),t("p",[t("span",{staticClass:"mar-20"},[e._v("日期:"+e._s(e.weatherData.date))]),t("i",{staticClass:"iconfont blue icon-tianqi"}),e._v(" "),t("span",[e._v("风向:"+e._s(e.weatherData.win))])]),e._v(" "),t("p",[t("span",[e._v("风速等级:"+e._s(e.weatherData.win_meter))])]),e._v(" "),t("p",[t("span",{staticClass:"mar-20"},[e._v("湿度:"+e._s(e.weatherData.humidity))]),t("span",[e._v("气压:"+e._s(e.weatherData.pressure)+" hPa")])]),e._v(" "),t("p",[t("span",{staticClass:"mar-20"},[e._v("空气质量:"+e._s(e.weatherData.air))]),t("span",[e._v("PM2.5:"+e._s(e.weatherData.air_pm25))])]),e._v(" "),t("p",[t("span",{staticClass:"mar-20"},[e._v("空气质量等级:"+e._s(e.weatherData.air_level))])]),e._v(" "),t("p",[t("span",{staticClass:"mar-20 fw-600"},[e._v("空气质量描述:"+e._s(e.weatherData.air_tips))])]),e._v(" "),t("p",[t("span",[e._v("预警级别:"+e._s(e.earlywarn.alarm_level?e.earlywarn.alarm_level:"无"))])]),e._v(" "),t("p",[t("span",[e._v("预警类型:"+e._s(e.earlywarn.alarm_type?e.earlywarn.alarm_type:"无"))])]),e._v(" "),t("p",[t("span",[e._v("预警信息:"+e._s(e.earlywarn.alarm_content?e.earlywarn.alarm_content:"无"))])])])])])],1)},staticRenderFns:[]};var w=t("VU/8")(m,d,!1,function(e){t("zpUJ")},null,null).exports;n.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"Home",component:w}]}),y=(t("muQq"),t("Fd2+"));t("4ml/");n.a.use(y.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},muQq:function(e,a){},zpUJ:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.aa7da0e7a3c3f86309f9.js.map