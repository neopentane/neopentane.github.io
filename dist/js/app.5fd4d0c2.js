(function(t){function e(e){for(var i,r,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("8a23"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-app",{attrs:{id:"c"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Dashboard")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("group")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Candidates")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("work")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Jobs")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("message")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Mailbox")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("settings")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Settings")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("waves")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Pools")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("bar_chart")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Assesments")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("supervised_user_circle")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Team Member")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("attach_money")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Billing")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("assignment")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Guidlines")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("feedback")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Feedback")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[t._v("contact_support")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Contact us")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer"),a("v-toolbar-title",[a("div",[a("v-breadcrumbs",{attrs:{items:t.items,large:""}})],1)]),a("v-spacer"),t._v(" BACK ")],1),a("v-content",[a("v-container",{attrs:{"grid-list-md":"","text-xs-start":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md8:"",sm12:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xl2:"",lg3:"",md4:"",sm6:""}},[a("v-avatar",{attrs:{size:"144"}},[a("img",{attrs:{src:"https://www.w3schools.com/howto/img_avatar.png",alt:"John"}})])],1),a("v-flex",{attrs:{xl10:"",lg9:"",md8:"",sm6:""}},[a("p",{staticClass:"display-1 text--primary font-weight-bold"},[t._v(" Kamal Pratap ")]),a("p",{staticClass:"headline text--secondary"},[t._v("full stack developer")]),a("p",{staticClass:"headline text--secondary"},[t._v("last activity")])])],1),a("v-toolbar",{staticClass:"ma-8",attrs:{flat:""}},[a("v-tabs",{staticClass:"elivation-0",attrs:{color:"#11acfa","background-color":"white",grow:""},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[a("v-tab",{key:1},[t._v(" Overview ")]),a("v-tab",{key:"2"},[t._v(" Activity ")]),a("v-tab",{key:3},[t._v(" Assesments ")]),a("v-tab",{key:4},[t._v(" Files ")]),a("v-tab",{key:5},[t._v(" Resume ")])],1)],1),a("v-card",{staticClass:"rounded-card ma-8",attrs:{shaped:!0}},[a("v-card-title",[t._v(" Information "),a("v-spacer"),a("v-btn",{staticClass:"elevation-0",attrs:{"x-small":"",fab:"",ripple:"",color:"white"}},[a("v-icon",[t._v("add_circle_outline")])],1)],1),a("v-data-table",{attrs:{headers:t.headers,items:t.desserts,"items-per-page":5,"hide-default-footer":!0,"disable-sort":!0}})],1),a("v-card",{staticClass:"rounded-card ma-8",attrs:{shaped:!0}},[a("v-card-title",[t._v(" Experience ")]),a("v-card-subtitle",[t._v(" Lead Design")]),a("v-card-text",[t._v(" Google Inc. "),a("v-spacer"),t._v(" Spet, 2019- Dec 2019 "),a("v-spacer"),t._v(" During my internship , I developed UI and UX for android app called google Keep . I completl redisgned the application")],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xl6:"",lg6:""}},[a("v-card",{staticClass:"rounded-card ma-4",attrs:{shaped:!0}},[a("v-card-title",[t._v(" Education ")]),a("v-card-subtitle",{staticClass:"font-weight-medium"},[t._v(" SSC ")]),a("v-card-text",[t._v(" St mary highschool "),a("v-spacer"),t._v(" Spet, 2019- Dec 2019 "),a("v-spacer"),t._v(" During my internship , I developed UI and UX for android app called google Keep . I completl redisgned the application "),a("v-spacer"),t._v(" CGPA: 9.2 ")],1),a("v-card-subtitle",{staticClass:"font-weight-medium"},[t._v(" HSC ")]),a("v-card-text",[t._v(" St mary highschool "),a("v-spacer"),t._v(" Spet, 2019- Dec 2019 "),a("v-spacer"),t._v(" During my internship , I developed UI and UX for android app called google Keep . I completl redisgned the application "),a("v-spacer"),t._v(" Percentage : 95.6% ")],1)],1)],1),a("v-flex",{attrs:{xl6:"",lg6:""}},[a("v-card",{staticClass:"rounded-card ma-4",attrs:{shaped:!0}},[a("v-card-title",[t._v(" Skills ")]),a("v-card-subtitle",[t._v(" Lead Design")]),a("v-card-text",[a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("Web Development")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0 "}},[t._v("Python")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("CSS")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("Python")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("CSS")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("Web Development")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("Web Development")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0 "}},[t._v("Python")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("CSS")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("Python")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("CSS")]),a("v-btn",{attrs:{rounded:"",large:"",color:"black--text font-weight-light info pa-5 ma-2 elevation-0"}},[t._v("Web Development")])],1)],1)],1)],1)],1),a("v-flex",{attrs:{md4:"",sm12:""}},[a("v-card",{staticClass:"rounded-card ma-8",attrs:{shaped:!0}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[t._v("Evalution")]),a("td",[a("v-icon",{attrs:{small:"",color:"#11acfa"}},[t._v("event")]),a("span",{staticClass:"blue--text"},[t._v("shedule")])],1),a("td",[a("v-icon",{attrs:{small:""}},[t._v("share")])],1),a("td",[a("v-icon",{attrs:{small:""}},[t._v(" send ")])],1),a("td",[t._v("More")])]),a("tr",[a("td",[t._v("Job name")]),a("td"),a("td",[a("v-icon",{attrs:{color:"#11acfa"}},[t._v("done")]),a("span",{staticClass:"blue--text"},[t._v("Proceed")])],1),a("td",[a("v-icon",[t._v("block")])],1),a("td",[a("v-icon",[t._v("more_horiz")])],1),a("td")]),a("tr",[a("td",[t._v("Job name")]),a("td"),a("td",[a("v-icon",{attrs:{color:"#11acfa"}},[t._v("done")]),a("span",{staticClass:"blue--text"},[t._v("Proceed")])],1),a("td",[a("v-icon",[t._v("block")])],1),a("td",[a("v-icon",[t._v("more_horiz")])],1),a("td")])])]},proxy:!0}])})],1),a("v-card",{staticClass:"rounded-card ma-8",attrs:{shaped:!0}},[a("v-card-title",[t._v("Team Notes "),a("v-spacer"),a("v-btn",{staticClass:"elevation-0",attrs:{"x-small":"",fab:"",ripple:"",color:"white"}},[a("v-icon",[t._v("add_circle_outline")])],1)],1),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1),a("td",[t._v(" Kamal Peterson"),a("span",{staticClass:"caption font-weight-thin"},[t._v(" •10:30 pm ")]),a("p",{staticClass:"caption"},[t._v(" Hey guys I pushed my progress to master branch ")])])]),a("tr",[a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1),a("td",[t._v(" Kamal Peterson"),a("span",{staticClass:"caption font-weight-thin"},[t._v(" •10:30 pm ")]),a("p",{staticClass:"caption"},[t._v(" Hey guys I pushed my progress to master branch ")])])]),a("tr",[a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1),a("td",[t._v(" Kamal Peterson"),a("span",{staticClass:"caption font-weight-thin"},[t._v(" •10:30 pm ")]),a("p",{staticClass:"caption"},[t._v(" Hey guys I pushed my progress to master branch ")])])]),a("tr",[a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1),a("td",[t._v(" Kamal Peterson"),a("span",{staticClass:"caption font-weight-thin"},[t._v(" •10:30 pm ")]),a("p",{staticClass:"caption"},[t._v(" Hey guys I pushed my progress to master branch ")])])])])]},proxy:!0}])})],1),a("v-card",{staticClass:"rounded-card ma-8",attrs:{shaped:!0}},[a("v-card-title",[t._v(" Tasks "),a("v-spacer"),a("v-btn",{staticClass:"elevation-0",attrs:{"x-small":"",fab:"",ripple:"",color:"white"}},[a("v-icon",[t._v("add_circle_outline")])],1)],1),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[a("v-checkbox",{attrs:{color:"#11acfa",label:"Add Checkout Button"},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}}),a("p",{staticClass:"caption font-weight-thin"},[t._v(" 2 Min ago "),a("v-icon",{attrs:{small:""}},[t._v("event")]),t._v(" Due 03:00 pm 02/06/2020 ")],1)],1),a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1)]),a("tr",[a("td",[a("v-checkbox",{attrs:{color:"#11acfa",label:"Add Checkout Button"},model:{value:t.checkbox2,callback:function(e){t.checkbox2=e},expression:"checkbox2"}}),a("p",{staticClass:"caption font-weight-thin"},[t._v(" 2 Min ago "),a("v-icon",{attrs:{small:""}},[t._v("event")]),t._v(" Due 03:00 pm 02/06/2020 ")],1)],1),a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1)]),a("tr",[a("td",[a("v-checkbox",{attrs:{color:"#11acfa",label:"Add Checkout Button"},model:{value:t.checkbox3,callback:function(e){t.checkbox3=e},expression:"checkbox3"}}),a("p",{staticClass:"caption font-weight-thin"},[t._v(" 2 Min ago "),a("v-icon",{attrs:{small:""}},[t._v("event")]),t._v(" Due 03:00 pm 02/06/2020 ")],1)],1),a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1)]),a("tr",[a("td",[a("v-checkbox",{attrs:{color:"#11acfa",label:"Add Checkout Button"},model:{value:t.checkbox4,callback:function(e){t.checkbox4=e},expression:"checkbox4"}}),a("p",{staticClass:"caption font-weight-thin"},[t._v(" 2 Min ago "),a("v-icon",{attrs:{small:""}},[t._v("event")]),t._v(" Due 03:00 pm 02/06/2020 ")],1)],1),a("td",[a("v-avatar",{attrs:{color:"#11acfa",size:"36"}},[a("span",{staticClass:"white--text"},[t._v("KP")])])],1)])])]},proxy:!0}])})],1)],1)],1)],1)],1)],1)],1)],1)},o=[],r={name:"App",data:function(){return{drawer:!1,active_tab:"2",checkbox1:!1,checkbox2:!1,checkbox3:!1,checkbox4:!1,checkbox5:!1,items:[{text:"EMPLOYEES",disabled:!1,href:"#"},{text:"PROFILES",disabled:!0,href:"#"}],headers:[{text:"Email",value:"1"},{text:"Shreeramkelkar7@gmail.com",value:"2"}],desserts:[{1:"Phone",2:"+91 877877778"},{1:"Socail",2:"shreeramkelkar7@gmail.com"},{1:"Links",2:"codepen.io/kamal"}]}}},n=r,l=(a("034f"),a("2877")),c=a("6544"),v=a.n(c),d=a("7496"),p=a("40dc"),m=a("5bc1"),u=a("8212"),h=a("2bc5"),b=a("8336"),f=a("b0af"),_=a("99d9"),g=a("ac7c"),x=a("a523"),k=a("a75b"),w=a("8fea"),y=a("ce7e"),C=a("0e8f"),P=a("132d"),S=a("a722"),V=a("8860"),I=a("da13"),D=a("1800"),K=a("5d23"),A=a("f774"),T=a("1f4f"),O=a("2fa4"),M=a("71a3"),z=a("fe57"),B=a("71d9"),F=a("2a7f"),L=Object(l["a"])(n,s,o,!1,null,null,null),j=L.exports;v()(L,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:m["a"],VAvatar:u["a"],VBreadcrumbs:h["a"],VBtn:b["a"],VCard:f["a"],VCardSubtitle:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCheckbox:g["a"],VContainer:x["a"],VContent:k["a"],VDataTable:w["a"],VDivider:y["a"],VFlex:C["a"],VIcon:P["a"],VLayout:S["a"],VList:V["a"],VListItem:I["a"],VListItemAction:D["a"],VListItemContent:K["a"],VListItemTitle:K["b"],VNavigationDrawer:A["a"],VSimpleTable:T["a"],VSpacer:O["a"],VTab:M["a"],VTabs:z["a"],VToolbar:B["a"],VToolbarTitle:F["a"]});var E=a("8c4f"),J=(a("d1e78"),a("f309"));i["a"].use(J["a"]);var U=new J["a"]({theme:{options:{customProperties:!0},icons:{iconfont:"md"},themes:{light:{primary:"#000000",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#c7ddeb",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");i["a"].config.productionTip=!1,i["a"].use(E["a"]),new i["a"]({vuetify:U,render:function(t){return t(j)}}).$mount("#app")},"8a23":function(t,e,a){}});
//# sourceMappingURL=app.5fd4d0c2.js.map