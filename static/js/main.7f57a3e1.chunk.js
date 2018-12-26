(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(43)},32:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n.n(o),i=n(16),s=n.n(i),l=(n(32),n(4)),u=n(5),m=n(12),p=n(11),h=n(13),f=(n(34),n(6)),d=Object(f.inject)("store")(a=Object(f.observer)(a=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).userStore=n.props.store.UserStore,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.userStore.loadUser()}},{key:"render",value:function(){var e=this.userStore.user;return c.a.createElement("div",{className:"flex center"},e&&c.a.createElement("div",{className:"home-container"},c.a.createElement("h2",null,"Hello ",e.name),c.a.createElement("h4",null,"Coins: ",e.coins),c.a.createElement("h4",null,e.moves)))}}]),t}(o.Component))||a)||a,v=n(3),b=n.n(v),y=n(9),g=function(e){var t=e.contact;return c.a.createElement("div",{className:"contact-prev"},c.a.createElement("span",null,t.name),c.a.createElement("img",{className:"img-contact",src:"https://robohash.org/".concat(t.name,".png")}))},E=n(39),O=function(e){var t=e.contacts;e.onSetSelected;return c.a.createElement("div",{className:"full"},c.a.createElement("ul",null,t.map(function(e){return c.a.createElement(E.a,{to:"/contact/".concat(e._id),key:e._id},c.a.createElement("li",null,c.a.createElement(g,{contact:e})))})))},j=n(2),w=Object(f.inject)("store")(r=Object(f.observer)(r=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).store=n.props.store,n.contactStore=n.props.store.ContactStore,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.contactStore.fetchContacts()}},{key:"setFilter",value:function(){var e=Object(y.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.contactStore.fetchContacts({term:t.target.value});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.contactStore.contacts;return c.a.createElement("div",null,c.a.createElement("div",{className:"flex center column"},c.a.createElement(E.a,{to:"/contact/edit"},c.a.createElement("button",{className:"btn"},"Add Contact")),c.a.createElement("input",{className:"search",placeholder:"Search",id:"inputFilter",onChange:this.setFilter.bind(this),type:"text"}),e&&c.a.createElement(O,{contacts:e})))}}]),t}(o.Component))||r)||r;function C(){return(C=Object(y.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://blockchain.info/tobtc?currency=USD&value=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function k(){return(k=Object(y.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.blockchain.info/charts/market-price?format=json&cors=true");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var S={getRate:function(e){return C.apply(this,arguments)},getMarketPrice:function(){return k.apply(this,arguments)}},_=n(22),N=function(e){var t=e.chart.values.reduce(function(e,t){return e.push(t.y),e},[]);return c.a.createElement("div",null,c.a.createElement(_.Sparklines,{data:t},c.a.createElement(_.SparklinesBars,{style:{stroke:"white",fill:"#41c3f9",fillOpacity:".25"}}),c.a.createElement(_.SparklinesLine,{style:{stroke:"#41c3f9",fill:"green"}})))},x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={rate:null,chart:null},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getRate(10);case 2:return t=e.sent,this.setState({rate:t}),e.next=6,S.getMarketPrice();case 6:n=e.sent,console.log(n),this.setState({chart:n});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.rate,n=e.chart;return c.a.createElement("div",{className:"statistic-container"},t&&c.a.createElement("h4",null,"BTC: ",t),n&&c.a.createElement(N,{chart:n}))}}]),t}(o.Component),L=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function U(e){return new Promise(function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),L.push(e),t(e)})}var z={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(t,n){var a=L;if(e){var r=e.term.toLocaleLowerCase();a=L.filter(function(e){return e.name.toLocaleLowerCase().includes(r)||e.phone.toLocaleLowerCase().includes(r)||e.email.toLocaleLowerCase().includes(r)})}t(a.sort(function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))})},getContactById:function(e){return new Promise(function(t,n){var a=L.find(function(t){return t._id===e});a?t(a):n("Contact id ".concat(e," not found!"))})},deleteContact:function(e){return new Promise(function(t,n){var a=L.findIndex(function(t){return t._id===e});-1!==a&&L.splice(a,1),t(L)})},filter:function(e){return e=e.toLocaleLowerCase(),new Promise(function(t,n){t(L.filter(function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))})},saveContact:function(e){return e._id?function(e){return new Promise(function(t,n){var a=L.findIndex(function(t){return e._id===t._id});-1!==a&&(L[a]=e),t(e)})}(e):U(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}};var P=function(e){var t=e.contact,n=e.onTransferCoin,a=0;return c.a.createElement("div",null,c.a.createElement("h2",null,"Transfer coins to ",t.name),"Amount: ",c.a.createElement("input",{className:"signup-input",name:"amount",type:"text",onChange:function(e){return a=e.target.value}}),c.a.createElement("button",{className:"signup-btn",onClick:function(){return n(a)}},"Transfer"))},M={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=localStorage[e]||"null";return JSON.parse(t)}};var D,A={loadUser:function(){return D=M.load("user")},signup:function(e){return D={name:e,coins:100,moves:[]},M.store("user",D),D},addMove:function(e,t){var n=t._id,a=t.name;D.moves.push({_id:n,to:a,at:Date.now(),amount:e}),function(e){D.coins-=e,M.store("user",D)}(e),M.store("user",D)},getMoves:function(e){return D.moves.filter(function(t){return t._id===e})}};var T,I,B,R,W,F,H,J=function(e){var t=e.moves;return c.a.createElement("div",null,c.a.createElement("h2",null,"Your Moves:"),t.map(function(e){return c.a.createElement("div",{key:e._id},c.a.createElement("h4",null,e.amount))}))},G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contact:null},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,z.getContactById(t);case 3:n=e.sent,this.setState({contact:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"TransferCoin",value:function(e){A.addMove(e,this.state.contact)}},{key:"getMoves",value:function(){return this.state.contact?A.getMoves(this.state.contact._id):[]}},{key:"render",value:function(){var e=this.state.contact,t=this.getMoves();return c.a.createElement("div",{className:"details-container"},e&&c.a.createElement("div",null,c.a.createElement("img",{className:"img-contact",src:"https://robohash.org/".concat(e.name,".png")}),c.a.createElement("h2",null,e.name),c.a.createElement("h4",null,e.email),c.a.createElement("h4",null,e.phone),c.a.createElement(P,{onTransferCoin:this.TransferCoin.bind(this),contact:e}),c.a.createElement(J,{moves:t}),c.a.createElement(E.a,{to:"/contact"},c.a.createElement("button",{className:"signup-btn",onClick:this.props.onClose},"back to list")),c.a.createElement(E.a,{to:"/contact/edit/".concat(e._id)},c.a.createElement("button",{className:"signup-btn"},"Edit contact"))))}}]),t}(o.Component),q=Object(f.inject)("store")(T=Object(f.observer)(T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).userStore=n.props.store.UserStore,n.user="",n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"saveUser",value:function(e){this.user=e.target.value}},{key:"signupUser",value:function(e){e.preventDefault(),this.userStore.saveUser(this.user),this.props.history.push("/")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{className:"flex center column",onSubmit:this.signupUser.bind(this)},c.a.createElement("input",{className:"signup-input",onChange:this.saveUser.bind(this),type:"text",placeholder:"Enter your name"}),c.a.createElement("button",{className:"signup-btn"},"Signup")))}}]),t}(o.Component))||T)||T,V=n(17),Y=n(18),K=n(14),Q=(n(23),function(e){return c.a.createElement("input",{className:"signup-input full",type:e.type||"text",name:e.name,value:e.value,onChange:function(t){return e.onChangeInput(e.name,t.target.value)}})}),X=Object(f.inject)("store")(I=Object(f.observer)((B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).contactStore=n.props.store.ContactStore,Object(V.a)(n,"contact",R,Object(Y.a)(Object(Y.a)(n))),n.inputs=Object.keys(n.contact),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.contactStore.getContactById(t);case 5:this.contact=e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveContact",value:function(){var e=Object(y.a)(b.a.mark(function e(t){var n=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.contactStore.updateContact(this.contact).then(function(e){n.props.history.push("/contact/".concat(e._id||""))});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteContact",value:function(){this.contactStore.deleteContact(this.contact._id),this.props.history.push("/contact")}},{key:"changeValue",value:function(e,t){this.contact[e]=t}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"edit-contact flex center column"},c.a.createElement("form",{className:"flex center column full",onSubmit:this.saveContact.bind(this)},this.inputs.map(function(t){return c.a.createElement(Q,{name:t,value:e.contact[t],onChangeInput:e.changeValue.bind(e)})}),c.a.createElement("button",{className:"signup-btn"},this.contact._id?"save":"add")),c.a.createElement("div",null,c.a.createElement(E.a,{to:"/contact/".concat(this.contact._id||"")},c.a.createElement("button",{className:"signup-btn"},"Back")),this.contact._id&&c.a.createElement("button",{className:"signup-btn",onClick:this.deleteContact.bind(this)},"Delete")))}}]),t}(o.Component),R=Object(K.a)(B.prototype,"contact",[j.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",email:"",phone:""}}}),I=B))||I)||I,Z=n(44),$=n(46),ee=n(47),te=n(45),ne=n(48),ae=function(e){return e.user?c.a.createElement(Z.a,e):c.a.createElement($.a,{to:"/signup"})},re=Object(f.inject)("store")(W=Object(f.observer)(W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).userStore=n.props.store.UserStore,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.userStore.loadUser()}},{key:"render",value:function(){var e=this.userStore.user;return c.a.createElement(ee.a,null,c.a.createElement("div",{className:"App full"},c.a.createElement("nav",{className:"full"},c.a.createElement("ul",{className:"navbar-container"},c.a.createElement("li",null,c.a.createElement(te.a,{exact:!0,to:"/"},c.a.createElement("img",{className:"logo",src:"./img/coin.png",alt:"coin"}))),c.a.createElement(te.a,{exact:!0,to:"/"},c.a.createElement("li",null,"HOME")),c.a.createElement(te.a,{to:"/contact"},c.a.createElement("li",null,"CONTACTS")),c.a.createElement(te.a,{to:"/StatisticPage"},c.a.createElement("li",null,"STATISTIC")))),c.a.createElement(ne.a,null,c.a.createElement(ae,{user:e,path:"/",exact:!0,component:d}),c.a.createElement(ae,{user:e,path:"/StatisticPage",component:x}),c.a.createElement(ae,{user:e,path:"/contact/edit/:id?",render:function(e){return c.a.createElement(X,e)}}),c.a.createElement(ae,{user:e,path:"/contact/:id",render:function(e){return c.a.createElement(G,e)}}),c.a.createElement(Z.a,{path:"/signup",render:function(e){return c.a.createElement(q,e)}}),c.a.createElement(ae,{user:e,path:"/contact",component:w}))))}}]),t}(o.Component))||W)||W,oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ie,se,le=(F=function(){function e(t){Object(l.a)(this,e),Object(V.a)(this,"contacts",H,this),this.rootStore=t}return Object(u.a)(e,[{key:"fetchContacts",value:function(){var e=Object(y.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getContacts(t);case 2:this.contacts=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteContact",value:function(e){z.deleteContact(e)}},{key:"updateContact",value:function(e){return z.saveContact(e)}},{key:"getContactById",value:function(){var e=Object(y.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getContactById(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),H=Object(K.a)(F.prototype,"contacts",[j.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(K.a)(F.prototype,"fetchContacts",[j.action],Object.getOwnPropertyDescriptor(F.prototype,"fetchContacts"),F.prototype),Object(K.a)(F.prototype,"deleteContact",[j.action],Object.getOwnPropertyDescriptor(F.prototype,"deleteContact"),F.prototype),Object(K.a)(F.prototype,"updateContact",[j.action],Object.getOwnPropertyDescriptor(F.prototype,"updateContact"),F.prototype),Object(K.a)(F.prototype,"getContactById",[j.action],Object.getOwnPropertyDescriptor(F.prototype,"getContactById"),F.prototype),F),ue=(ie=function(){function e(t){Object(l.a)(this,e),Object(V.a)(this,"user",se,this),this.rootStore=t}return Object(u.a)(e,[{key:"loadUser",value:function(){this.user=A.loadUser()}},{key:"saveUser",value:function(e){this.user=A.signup(e)}}]),e}(),se=Object(K.a)(ie.prototype,"user",[j.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(K.a)(ie.prototype,"loadUser",[j.action],Object.getOwnPropertyDescriptor(ie.prototype,"loadUser"),ie.prototype),Object(K.a)(ie.prototype,"saveUser",[j.action],Object.getOwnPropertyDescriptor(ie.prototype,"saveUser"),ie.prototype),ie),me=n(24),pe=new function e(){Object(l.a)(this,e),this.ContactStore=new le(this),this.UserStore=new ue(this)};Object(me.configureDevtool)({logEnabled:!0}),s.a.render(c.a.createElement(f.Provider,{store:pe},c.a.createElement(c.a.Fragment,null,c.a.createElement(re,null),!1)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/misterbitcoin",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/misterbitcoin","/service-worker.js");oe?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ce(t,e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.7f57a3e1.chunk.js.map