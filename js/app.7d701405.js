(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)r=i[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"1b7a":function(e,t,s){},"26d1":function(e,t,s){"use strict";var n=s("bc2e"),a=s.n(n);a.a},"30f7":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return s(t)}function o(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),s("b-navbar-brand",{attrs:{href:"/"}},[e._v("Home")]),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{href:"/newResult"}},[e._v("New Result")])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"New User"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),s("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm"},on:{click:function(t){e.post()}}},[e._v("Join us!")])],1)],1)],1)],1),s("router-view")],1)},o=[],r=s("bc3a"),i=s.n(r),c=function(){return i.a.create({baseURL:"https://hidden-retreat-76148.herokuapp.com/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}})},l={name:"app",data:function(){return{user:""}},methods:{post:function(){var e=this;c().post("users/register",{username:this.user,results:[],decks:[]}).then(function(t){e.user=""})}}},u=l,d=(s("034f"),s("2877")),p=Object(d["a"])(u,a,o,!1,null,null,null);p.options.__file="App.vue";var f=p.exports,m=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[e._l(e.alerts,function(t){return[s("b-alert",{key:e.alerts.indexOf(t),attrs:{show:t.dismiss,dismissible:"",variant:t.type}},[s("h4",["success"===t.type||"warning"===t.type?s("i",{staticClass:"icon fa fa-check"}):s("i",{staticClass:"icon fa fa-ban"}),e._v(e._s(t.type)+"!")]),e._v("\n      "+e._s(t.message)+"\n    ")])]}),s("b-modal",{ref:"myModalRef",attrs:{id:"myModal",title:"Add New Deck for "+e.selectedUser.name},on:{ok:function(t){e.addDeck(e.selectedUser.id,e.selectedDeck)}},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[s("b-input-group",{attrs:{prepend:"Deck"}},[s("b-form-input",{model:{value:e.selectedDeck,callback:function(t){e.selectedDeck=t},expression:"selectedDeck"}})],1)],1),s("main",[s("b-container",{attrs:{fluid:""}},[s("header",{staticClass:"section-header main-header text-center"},[s("b-row",[s("b-col",{attrs:{cols:"12",xs:"12"}},[s("b-img",{staticStyle:{width:"10%"},attrs:{fluid:"",src:"logo.png"}})],1)],1),s("b-row",[s("b-col",{attrs:{cols:"12",xs:"12"}},[s("h2",[e._v("Modern Liga 2019")]),s("p",[e._v("Let's play Magic like Garfield meant it")])])],1)],1),s("hr"),s("b-row",[s("b-col",{attrs:{xs:"12"}},[s("b-table",{attrs:{striped:"",hover:"",responsive:"",items:e.items,fields:e.fields,"sort-by.sync":"position"},scopedSlots:e._u([{key:"username",fn:function(t){return[s("b-row",[s("b-col",[s("router-link",{attrs:{to:"user/results/"+t.item.id}},[e._v(e._s(t.item.username))])],1)],1)]}},{key:"payout",fn:function(t){return[s("i",{staticClass:"fa fa-euro"}),e._v(" "+e._s(e.payout[t.index])+"\n          ")]}},{key:"topPositions",fn:function(t){return e._l(t.item.topPositions,function(n,a){return s("span",[e._v(e._s(n.points)+"/"+e._s(n.position)+e._s(a+1<t.item.topPositions.length?", ":""))])})}},{key:"sameDeckWins",fn:function(t){return[e._v("\n            Deck: "+e._s(t.item.sameDeckWins.deck)+", Points: "+e._s(t.item.sameDeckWins.points)+"\n          ")]}}])})],1)],1),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"4",md:"4"}},[s("router-link",{attrs:{to:"newResult"}},[s("button",{staticClass:"btn btn-info"},[e._v("New Result")])])],1)],1),s("hr"),s("b-row",[s("b-col",[s("h4",[e._v("Latest Results")]),s("b-table",{attrs:{striped:"",hover:"",responsive:"",items:e.results}})],1)],1)],1)],1)],2)},v=[],h=(s("20d6"),s("55dd"),s("7f7f"),s("ac6a"),s("28a5"),{name:"app",data:function(){return{selectedDeck:"",showModal:!1,selectedUser:{},fields:[{key:"position",sortable:!0},{key:"payout",sortable:!1},{key:"username",sortable:!0,label:"Player Name"},{key:"points",sortable:!0,label:"Total Points"},{key:"avgPoints",sortable:!0,label:"Ø Points"},{key:"topPositions",sortable:!0,label:"TOP 9 Pts/Plz"},{key:"gamesWon",sortable:!0,label:"GW (%)"},{key:"decks",sortable:!0,label:"Total Decks"},{key:"sameDeckWins",sortable:!0,label:"Same Deck Points"}],users:[],items:[],alerts:[],results:[],payout:[135,100,70,50,45,35,30,25,20,10,5,5,0,0]}},methods:{registerUser:function(){var e=this;c().post("users/register",{firstName:this.username.split(" ")[0],lastName:this.username.split(" ")[1],email:this.email,password:this.password,ageGroup:this.ageGroup}).then(function(t){e.isLoggedIn=!0}).catch(function(t){e.alerts.push({type:"danger",dismiss:4,message:t.response.data.message})})},getLatestResults:function(){var e=this;c().get("results/latest").then(function(t){t.data.forEach(function(t){t.deck=t.deck.name,t.user=t.user.username,t.event=t.event.name,delete t._v,delete t.id,e.results.push(t)})})},getUsers:function(){var e=this;c().get("users").then(function(t){e.items=[],t.data.forEach(function(s){var n={position:t.data.indexOf(s)+1,decks:0,gamesWon:0,gamesPlayed:0,worstPosition:0,topPositions:[],avgPoints:0,points:0,username:s.username,sameDeckWins:0};n.id=s._id,n.worstPosition=e.getWorstPosition(s.results),e.calculateTopPositions(n,s.results),e.items.push(n),e.items.sort(function(e,t){return e.points===t.points?e.gamesWon===t.gamesWon?e.avgPoints-t.avgPoints:e.gamesWon-t.gamesWon:e.points-t.points}),e.items.reverse(),e.items.forEach(function(t){t.position=e.items.indexOf(t)+1})})})},getSameDeckWins:function(e,t){var s=[];e.reduce(function(e,t){return e[t.deck]||(e[t.deck]={deck:t.deck,points:0},s.push(e[t.deck])),e[t.deck].points+=t.points,e},{});var n=Math.max.apply(Math,s.map(function(e){return e.points}));return t.decks=s.length,s[s.findIndex(function(e){return e.points==n})]},calculateTopPositions:function(e,t){if(0===t.length)return!0;var s=[];if(t.forEach(function(t){e.gamesWon+=parseFloat(t.gwpct),s.push({deck:t.deck.name,points:t.points})}),e.sameDeckWins=this.getSameDeckWins(s,e),e.gamesWon/=t.length,t.sort(function(e,t){if(e.points>t.points)return-1;if(e.points<t.points)return 1;if(e.points===t.points){if(e.position>t.position)return 1;if(e.position<t.position)return-1}}),t.length>9)for(var n=0;n<9;n++)e.topPositions.push({points:t[n].points,position:t[n].position});else for(var a in t)e.topPositions.push({points:t[a].points,position:t[a].position});e.topPositions.forEach(function(t){e.points+=t.points}),e.avgPoints=e.points/e.topPositions.length},onlyUnique:function(e,t,s){return s.indexOf(e)===t},getWorstPosition:function(e){var t=Math.max.apply(Math,e.map(function(e){return e.position}));console.log(e.findIndex(function(e){return e.position==t}))},prepareModal:function(e,t){this.selectedUser={name:e,id:t},this.showModal=!0},addDeck:function(e,t){var s=this;c().post("decks/create",{user:e,name:t}).then(function(e){s.getUsers()})}},mounted:function(){this.getUsers(),this.getLatestResults()}}),g=h,k=Object(d["a"])(g,b,v,!1,null,null,null);k.options.__file="Home.vue";var _=k.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-modal",{ref:"myModalRef",attrs:{id:"myModal2",title:"Add New Deck for "+e.result.user.username},on:{ok:function(t){e.addDeck(e.result.user.id,e.selectedDeck)}},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[s("b-input-group",{attrs:{prepend:"Deck"}},[s("b-form-input",{model:{value:e.selectedDeck,callback:function(t){e.selectedDeck=t},expression:"selectedDeck"}})],1)],1),s("main",[s("b-container",{attrs:{fluid:""}},[e._l(e.alerts,function(t){return[s("b-alert",{key:e.alerts.indexOf(t),attrs:{show:t.dismiss,dismissible:"",variant:t.type}},[s("h4",["success"===t.type||"warning"===t.type?s("i",{staticClass:"icon fa fa-check"}):s("i",{staticClass:"icon fa fa-ban"}),e._v(e._s(t.type)+"!")]),e._v("\n          "+e._s(t.message)+"\n        ")])]}),s("header",{staticClass:"section-header"},[s("h2",[e._v("Create New Result")]),s("p",[e._v("Load your own results for the event of your choice.")])]),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("Event:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.result.event,expression:"result.event"}],staticClass:"form-control",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.result,"event",t.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",value:"0"}},[e._v("----Select One----")]),e._l(e.events,function(t){return s("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])})],2)])],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("User:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.result.user,expression:"result.user"}],staticClass:"form-control",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.result,"user",t.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",value:"0"}},[e._v("----Select One----")]),e._l(e.users,function(t){return s("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.username))])})],2)])],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"8"}},[s("label",[e._v("Deck:")]),s("b-btn",{attrs:{size:"sm",variant:"link",disabled:"0"===e.result.user},on:{click:function(t){e.showModal=!0}}},[e._v(" Add deck")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.result.deck,expression:"result.deck"}],staticClass:"form-control",attrs:{disabled:""===e.result.user},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.result,"deck",t.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",value:"0"}},[e._v("----Select One----")]),e._l(e.result.user.decks,function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)],1),s("b-col",{attrs:{md:"4"}})],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("Points:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.result.points,expression:"result.points"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.result.points},on:{input:function(t){t.target.composing||e.$set(e.result,"points",t.target.value)}}})])],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("Position:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.result.position,expression:"result.position"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.result.position},on:{input:function(t){t.target.composing||e.$set(e.result,"position",t.target.value)}}})])],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("GW (%):")]),s("b-input-group",[s("b-input-group-text",{attrs:{slot:"append"},slot:"append"},[s("strong",[e._v("%")])]),s("b-form-input",{model:{value:e.result.gwpct,callback:function(t){e.$set(e.result,"gwpct",t)},expression:"result.gwpct"}})],1)],1)],1),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("button",{staticClass:"btn btn-success",on:{click:e.post}},[e._v("Submit")])])],1)],2)],1)],1)},y=[],w={name:"addProduct",data:function(){return{result:{user:"0",event:"0",deck:"0",points:"",position:"",rounds:"",gwpct:""},showModal:!1,selectedDeck:"",users:[],events:[],alerts:[],decks:[]}},methods:{post:function(){var e=this;c().post("results/create",this.result).then(function(t){e.alerts.push({type:"success",dismiss:4,message:"Result posted succesfully!"})}).catch(function(t){e.alerts.push({type:"danger",dismiss:4,message:t.response.data.message})})},getDecks:function(){console.log(this.result.user)},getEvents:function(){var e=this;c().get("events").then(function(t){e.events=t.data,c().get("users").then(function(t){e.users=t.data})})},addDeck:function(e,t){var s=this;c().post("decks/create",{user:e,name:t}).then(function(e){s.alerts.push({type:"success",dismiss:4,message:"Deck ".concat(t," Created Succesfully!")}),s.result.user.decks.push(e.data.deck)}).catch(function(e){s.alerts.push({type:"danger",dismiss:4,message:e.response.data.message})})}},mounted:function(){this.getEvents()}},C=w,x=(s("26d1"),Object(d["a"])(C,j,y,!1,null,null,null));x.options.__file="LoadResult.vue";var P=x.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("router-link",{attrs:{to:"/"}},[s("b-btn",{staticClass:"btn btn-info"},[e._v("Go Back")])],1),s("main",[s("b-container",{attrs:{fluid:""}},[e._l(e.alerts,function(t){return[s("b-alert",{key:e.alerts.indexOf(t),attrs:{show:t.dismiss,dismissible:"",variant:t.type}},[s("h4",["success"===t.type||"warning"===t.type?s("i",{staticClass:"icon fa fa-check"}):s("i",{staticClass:"icon fa fa-ban"}),e._v(e._s(t.type)+"!")]),e._v("\n          "+e._s(t.message)+"\n        ")])]}),s("header",{staticClass:"section-header"},[s("h2",[e._v("Create New Event")]),s("p",[e._v("Add a new event for other players to post results into")])]),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.event.name,expression:"event.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.event.name},on:{input:function(t){t.target.composing||e.$set(e.event,"name",t.target.value)}}})])],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("Date: ")]),s("datepicker",{attrs:{"input-class":"form-control"},model:{value:e.event.date,callback:function(t){e.$set(e.event,"date",t)},expression:"event.date"}})],1)],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("Format:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.event.format,expression:"event.format"}],staticClass:"form-control",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.event,"format",t.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",value:"modern"}},[e._v("Modern")]),s("option",{attrs:{selected:"",value:"standard"}},[e._v("Standard")]),s("option",{attrs:{selected:"",value:"legacy"}},[e._v("Legacy")])])])],1),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("label",[e._v("# of Rounds:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.event.rounds,expression:"event.rounds"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.event.rounds},on:{input:function(t){t.target.composing||e.$set(e.event,"rounds",t.target.value)}}})])],1),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12",md:"12"}},[s("button",{staticClass:"btn btn-success",on:{click:e.post}},[e._v("Submit")])])],1)],2)],1)],1)},M=[],W={name:"CreateEvent",data:function(){return{event:{name:"",results:[],rounds:"",date:"",format:"modern",users:[]},users:[]}},methods:{post:function(){c().post("events/create",this.event)}},mounted:function(){var e=this;c().get("users").then(function(t){e.users=t.data})}},U=W,O=(s("60bc"),s("9680"),Object(d["a"])(U,D,M,!1,null,null,null));O.options.__file="CreateEvent.vue";var z=O.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("b-modal",{ref:"myModalRef",attrs:{id:"myModal2",title:"Add New Deck for "+e.user.username},on:{ok:function(t){e.addDeck(e.user.id,e.selectedDeck)}},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[s("b-input-group",{attrs:{prepend:"Deck"}},[s("b-form-input",{model:{value:e.selectedDeck,callback:function(t){e.selectedDeck=t},expression:"selectedDeck"}})],1)],1),s("main",[s("b-container",{attrs:{fluid:""}},[e._l(e.alerts,function(t){return[s("b-alert",{key:e.alerts.indexOf(t),attrs:{show:t.dismiss,dismissible:"",variant:t.type}},[s("h4",["success"===t.type||"warning"===t.type?s("i",{staticClass:"icon fa fa-check"}):s("i",{staticClass:"icon fa fa-ban"}),e._v(e._s(t.type)+"!")]),e._v("\n          "+e._s(t.message)+"\n        ")])]}),s("header",{staticClass:"section-header text-center"},[s("h2",[e._v("User Info:")]),s("p",[e._v("Check how much you sucked")])]),s("hr"),s("div",{staticClass:"container bootstrap snippet"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-10"},[s("h1",[s("img",{staticStyle:{"max-width":"3%"},attrs:{src:"/pw-symbol.png"}}),e._v(" "+e._s(e.user.username))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"text-center"},[s("b-img",{attrs:{thumbnail:"",fluid:"",src:"/jace.jpg"}})],1),s("hr"),s("span",[s("b-col",[s("b-btn",{staticClass:"btn btn-sm btn-info ml-5",on:{click:function(t){e.showModal=!0}}},[e._v("Add new deck")])],1)],1),s("br"),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item text-muted"},[s("i",{staticClass:"ss ss-uma ss-3x ss-grad"}),e._v(" League Data")]),s("li",{staticClass:"list-group-item text-right"},[s("span",{staticClass:"pull-left"},[s("strong",[e._v("Total Points")])]),s("br"),s("span",{staticClass:"text-muted"},[e._v(e._s(e.calculatedUser.points))])]),s("li",{staticClass:"list-group-item text-right"},[s("span",{staticClass:"pull-left"},[s("strong",[e._v(" Ø Points")])]),s("br"),s("span",{staticClass:"text-muted"},[e._v(" "+e._s(e.calculatedUser.avgPoints))])]),s("li",{staticClass:"list-group-item text-right"},[s("span",{staticClass:"pull-left"},[s("i",{}),s("strong",[e._v("Decks Played")])]),s("br"),s("span",{staticClass:"text-muted"},[e._v(e._s(e.calculatedUser.decks))])]),s("li",{staticClass:"list-group-item text-right"},[s("span",{staticClass:"pull-left"},[s("strong",[e._v("Most wins with Same Deck")])]),s("br"),s("span",{staticClass:"text-muted"},[e._v(" Deck: "+e._s(e.calculatedUser.sameDeckWins.deck)+", Points: "+e._s(e.calculatedUser.sameDeckWins.points))])]),s("li",{staticClass:"list-group-item text-right"},[s("span",{staticClass:"pull-left"},[s("i",{staticClass:"fa fa-percent fa-1x"}),s("strong",[e._v(" Games Won")])]),s("br"),s("span",{staticClass:"text-muted"},[e._v(" "+e._s(e.calculatedUser.gamesWon))])]),s("li",{staticClass:"list-group-item text-right"},[s("span",{staticClass:"pull-left"},[s("i",{staticClass:"fa fa-thumbs-up fa-1x"}),s("strong",[e._v(" Top 9")])]),s("br"),s("span",{staticClass:"text-muted"},e._l(e.calculatedUser.topPositions,function(t,n){return s("span",[e._v(e._s(t.points)+"/"+e._s(t.position)+e._s(n+1<e.calculatedUser.topPositions.length?", ":""))])}))])]),s("div",{staticClass:"panel panel-default"})]),s("div",{staticClass:"col-sm-9"},[s("b-tabs",{attrs:{fill:"",tabs:""}},[s("b-tab",{attrs:{title:"Info",active:""}},[s("b-table",{attrs:{striped:"",hover:"",responsive:"",items:e.user.results,fields:["event","deck","points","position","gwpct"],"sort-by.sync":"position"},scopedSlots:e._u([{key:"event",fn:function(t){return[s("b-row",[s("b-col",[e._v("\n                        Name: "+e._s(t.item.event.name)),s("br"),e._v("\n                        Date: "+e._s(t.item.event.date)),s("br"),e._v("\n                        Format: "+e._s(t.item.event.format)+"\n                      ")])],1)]}},{key:"deck",fn:function(t){return[e._v("\n                    "+e._s(e.user.decks.filter(function(e){return e._id===t.item.deck})[0].name)+"\n                  ")]}},{key:"gwpct",fn:function(t){return[e._v("\n                    "+e._s(t.item.gwpct)+" %\n                  ")]}},{key:"topPositions",fn:function(t){return e._l(t.item.topPositions,function(n,a){return s("span",[e._v(e._s(n.points)+"/"+e._s(n.position)+e._s(a+1<t.item.topPositions.length?", ":""))])})}},{key:"sameDeckWins",fn:function(t){return[e._v("\n                    Deck: "+e._s(t.item.sameDeckWins.deck)+", Points: "+e._s(t.item.sameDeckWins.points)+"\n                  ")]}}])})],1),s("b-tab",{attrs:{title:"Most Played Decks"}},[s("canvas",{attrs:{id:"deckStats"}})])],1)],1)])])],2)],1)],1)},E=[],N=(s("456d"),s("5b20")),$=s.n(N),R={name:"addProduct",data:function(){return{user:{},showModal:!1,calculatedUser:{decks:0,gamesWon:0,gamesPlayed:0,worstPosition:0,topPositions:[],avgPoints:0,points:0,sameDeckWins:0},selectedDeck:"",alerts:[],id:this.$route.params.id,decks:[]}},methods:{post:function(){var e=this;c().post("results/create",this.result).then(function(t){e.alerts.push({type:"success",dismiss:4,message:"Result posted succesfully!"})}).catch(function(t){e.alerts.push({type:"danger",dismiss:4,message:t.response.data.message})})},getSameDeckWins:function(e,t){var s=[];e.reduce(function(e,t){return e[t.deck]||(e[t.deck]={deck:t.deck,points:0},s.push(e[t.deck])),e[t.deck].points+=t.points,e},{});var n=Math.max.apply(Math,s.map(function(e){return e.points}));return t.decks=s.length,s[s.findIndex(function(e){return e.points==n})]},getDecks:function(){console.log(this.result.user)},getUser:function(){var e=this;c().get("users/".concat(this.id)).then(function(t){e.user=t.data,e.calculateTopPositions(e.calculatedUser,e.user.results),e.createChart("deckStats")}).catch(function(t){e.alerts.push({type:"danger",dismiss:4,message:t.response.data.message})})},createChart:function(e){var t=document.getElementById(e),s={};this.decks.forEach(function(e){s[e.deck]=(s[e.deck]||0)+1});var n={data:[],labels:[],backgroundColor:[]};Object.keys(s).forEach(function(e){n.labels.push(e),n.data.push(s[e]),n.backgroundColor.push("rgba(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", .5)"))});new $.a(t,{type:"doughnut",data:{datasets:[{label:"Most played Decks",data:n.data,backgroundColor:n.backgroundColor}],labels:n.labels},options:{}})},calculateTopPositions:function(e,t){var s=this;if(0===t.length)return!0;var n=[];if(t.forEach(function(t){e.gamesWon+=parseFloat(t.gwpct),n.push({deck:s.user.decks.filter(function(e){return e._id===t.deck})[0].name,points:t.points})}),this.decks=n,e.sameDeckWins=this.getSameDeckWins(n,e),e.gamesWon/=t.length,t.sort(function(e,t){if(e.points>t.points)return-1;if(e.points<t.points)return 1;if(e.points===t.points){if(e.position>t.position)return 1;if(e.position<t.position)return-1}}),t.length>9)for(var a=0;a<9;a++)e.topPositions.push({points:t[a].points,position:t[a].position});else for(var o in t)e.topPositions.push({points:t[o].points,position:t[o].position});e.topPositions.forEach(function(t){e.points+=t.points}),e.avgPoints=e.points/e.topPositions.length},addDeck:function(e,t){var s=this;c().post("decks/create",{user:e,name:t}).then(function(e){s.alerts.push({type:"success",dismiss:4,message:"Deck ".concat(t," Created Succesfully!")}),s.result.user.decks.push(e.data.deck)}).catch(function(e){s.alerts.push({type:"danger",dismiss:4,message:e.response.data.message})})}},mounted:function(){this.getUser()}},T=R,A=(s("7732"),Object(d["a"])(T,S,E,!1,null,null,null));A.options.__file="UserView.vue";var L=A.exports;n["a"].use(m["a"]);var G=new m["a"]({linkActiveClass:"active",mode:"history",routes:[{path:"/",component:_},{path:"/newResult",component:P},{path:"/newEvent",component:z},{path:"/user/results/:id",component:L}]}),I=s("9f7b"),F=(s("f9e3"),s("2dd8"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",[e._v("New User")]),s("b-row",[s("b-col",[s("label",[e._v("Username:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})])],1),s("hr"),s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("button",{staticClass:"btn btn-success",on:{click:e.post}},[e._v("Submit")])])],1)],1)}),q=[],J={name:"addProduct",data:function(){return{user:""}},methods:{post:function(){var e=this;c().post("users/register",{username:this.user,results:[],decks:[]}).then(function(t){e.user="",e.$emit("refresh")})}}},B=J,H=(s("618b"),Object(d["a"])(B,F,q,!1,null,null,null));H.options.__file="CreateUser.vue";var V=H.exports,K=s("8e5f"),Q=s.n(K),X=s("fa33");n["a"].config.productionTip=!1,n["a"].use(I["a"]),n["a"].component("Multiselect",Q.a),n["a"].component("createUser",V),n["a"].component("Datepicker",X["a"]),new n["a"]({render:function(e){return e(f)},router:G}).$mount("#app")},"618b":function(e,t,s){"use strict";var n=s("30f7"),a=s.n(n);a.a},"64a9":function(e,t,s){},7732:function(e,t,s){"use strict";var n=s("1b7a"),a=s.n(n);a.a},"896e":function(e,t,s){},9680:function(e,t,s){"use strict";var n=s("896e"),a=s.n(n);a.a},bc2e:function(e,t,s){}});
//# sourceMappingURL=app.7d701405.js.map