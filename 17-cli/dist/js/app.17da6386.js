(function(e){function t(t){for(var s,a,u=t[0],i=t[1],c=t[2],d=0,l=[];d<u.length;d++)a=u[d],n[a]&&l.push(n[a][0]),n[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);_&&_(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},n={app:0},o=[];function u(e){return i.p+"js/"+({"home~users":"home~users",home:"home",users:"users"}[e]||e)+"."+{"home~users":"94dc3243",home:"e621d1b8",users:"8fef97c3"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"home~users":1,home:1,users:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var s="css/"+({"home~users":"home~users",home:"home",users:"users"}[e]||e)+"."+{"home~users":"5617e1a1",home:"75a58ff6",users:"e5e918e7"}[e]+".css",n=i.p+s,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===n))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===s||d===n)return t()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=t,_.onerror=function(t){var s=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],_.parentNode.removeChild(_),r(o)},_.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(_)}).then(function(){a[e]=0}));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise(function(t,r){s=n[e]=[t,r]});t.push(s[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e),c=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=n[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,r[1](o)}n[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var _=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"41cb":function(e,t,r){"use strict";var s=r("2b0e"),a=r("8c4f");s["a"].use(a["a"]),t["a"]=new a["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.all([r.e("home~users"),r.e("home")]).then(r.bind(null,"a164"))}},{path:"/users",name:"users",component:function(){return Promise.all([r.e("home~users"),r.e("users")]).then(r.bind(null,"ffdc"))}}]})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("router-view"),r("api-loader",{attrs:{dialog:e.get_loader.status,message:e.get_loader.message}})],1)],1)},n=[],o=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",[e._v("\n        "+e._s(e.message)+"\n        "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},i=[],c={name:"api-loader",props:{dialog:{type:Boolean,default:!1},message:{type:String}}},d=c,l=r("2877"),_=r("6544"),f=r.n(_),p=r("b0af"),m=r("99d9"),E=r("169a"),g=r("8e36"),h=Object(l["a"])(d,u,i,!1,null,null,null),S=h.exports;f()(h,{VCard:p["a"],VCardText:m["b"],VDialog:E["a"],VProgressLinear:g["a"]});var O=r("2f62");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var T={name:"App",data:function(){return{}},components:{ApiLoader:S},computed:b({},Object(O["c"])(["get_loader"]))},P=T,y=r("7496"),A=r("a75b"),R=Object(l["a"])(P,a,n,!1,null,null,null),L=R.exports;f()(R,{VApp:y["a"],VContent:A["a"]});var D=r("41cb"),w=r("75fc"),U=r("bc3a"),j=r.n(U),N={state:{create_user_dialog:!1,users:[],user:{id:null,username:null,modules:[],token:null},user_to_update:{dialog:!1,user:{id:0,username:"",modules:[],created_at:""}},user_to_delete:{dialog:!1,id:0,username:""}},getters:{get_user:function(e){return e.user},get_users:function(e){return e.users},get_user_edit:function(e){return e.user_to_update},get_user_delete:function(e){return e.user_to_delete},get_create_user_create_dialog:function(e){return e.create_user_dialog}},mutations:{SET_USERS:function(e,t){var r;e.users=[],(r=e.users).push.apply(r,Object(w["a"])(t))},SET_NEW_USER:function(e,t){e.users.unshift(t)},SET_USER_LOGIN:function(e,t){e.user.id=t.id,e.user.username=t.username,e.user.modules=t.modules,e.user.token=t.token},SET_USER_UPDATE:function(e,t){e.user_to_update.dialog=!0,e.user_to_update.user.id=t.id,e.user_to_update.user.username=t.username,e.user_to_update.user.modules=t.modules,e.user_to_update.user.created_at=t.created_at},SET_DELETE_USER:function(e,t){e.user_to_delete.dialog=!0,e.user_to_delete.id=t.id,e.user_to_delete.username=t.username},UPDATE_USER:function(e,t){var r=-1;e.users.map(function(e,s){e.id===t.id&&(r=s)}),-1!=r&&Object.assign(e.users[r],t)},DELETE_USER:function(e,t){e.users=e.users.filter(function(e){return e.id!=t.id})},CLOSE_DIALOG_USER:function(e){e.user_to_update.dialog=!1,e.user_to_update.user.id=0,e.user_to_update.user.username="",e.user_to_update.user.modules=[],e.user_to_update.user.created_at=""},CLOSE_CONFIRM_DIALOG_USER:function(e){e.user_to_delete.dialog=!1,e.user_to_delete.id=0,e.user_to_delete.username=""},HANDLE_CREATE_DIALOG:function(e){e.create_user_dialog=!e.create_user_dialog}},actions:{createUser:function(e,t){var r=e.commit,s=e.state;j.a.post("/users/register",t,{headers:{Authorization:"Bearer ".concat(s.user.token)}}).then(function(e){r("SET_API_RESPONSE",{status:e.status,data:e.data}),r("SET_LOADER",{status:!1,message:"Exitoso"}),r("SET_NEW_USER",e.data)}).catch(function(e){r("SET_API_RESPONSE",{status:e.response.status,data:e.response.data}),r("SET_LOADER",{status:!1,message:"Error"})})},getAllUsers:function(e){var t=e.commit;j.a.get("/users").then(function(e){t("SET_API_RESPONSE",{status:e.status,data:e.data}),t("SET_LOADER",{status:!1,message:"Exitoso"}),t("SET_USERS",e.data)}).catch(function(e){t("SET_API_RESPONSE",{status:e.response.status,data:e.response.data}),t("SET_LOADER",{status:!1,message:"Error"})})},loginUser:function(e,t){var r=e.commit;j.a.post("/users/login",t).then(function(e){r("SET_API_RESPONSE",{status:e.status,data:e.data}),r("SET_LOADER",{status:!1,message:"Exitoso"}),r("SET_USER_LOGIN",e.data)}).catch(function(e){r("SET_API_RESPONSE",{status:e.response.status,data:e.response.data}),r("SET_LOADER",{status:!1,message:"Error"})})},updateUser:function(e,t){var r=e.commit;j.a.put("/users/".concat(t.user.id),{username:t.user.username,modules:t.modules}).then(function(e){r("SET_API_RESPONSE",{status:e.status,data:e.data}),r("SET_LOADER",{status:!1,message:"Exitoso"}),r("CLOSE_DIALOG_USER"),r("UPDATE_USER",e.data)}).catch(function(e){r("SET_API_RESPONSE",{status:e.response.status,data:e.response.data}),r("SET_LOADER",{status:!1,message:"Error"})})},deleteUser:function(e,t){var r=e.commit,s=e.state;j.a.delete("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(s.user.token)}}).then(function(e){r("SET_API_RESPONSE",{status:e.status,data:e.data}),r("SET_LOADER",{status:!1,message:"Exitoso"}),r("CLOSE_CONFIRM_DIALOG_USER"),r("DELETE_USER",e.data)}).catch(function(e){r("SET_API_RESPONSE",{status:e.response.status,data:e.response.data}),r("SET_LOADER",{status:!1,message:"Error"})})}}};s["a"].use(O["a"]);var I=new O["a"].Store({state:{loader:{status:!1,message:null},api_response:null},getters:{get_api_response:function(e){return e.api_response},get_loader:function(e){return e.loader}},mutations:{SET_API_RESPONSE:function(e,t){e.api_response=t},SET_LOADER:function(e,t){e.loader.status=t.status,e.loader.message=t.message}},actions:{},modules:{usersModule:N}}),x=r("f309");s["a"].use(x["a"]);var C=new x["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,j.a.defaults.baseURL="http://localhost:3030/api",new s["a"]({router:D["a"],store:I,vuetify:C,render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.17da6386.js.map