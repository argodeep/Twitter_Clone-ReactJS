(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{GLqo:function(e,t,n){},GuQl:function(e,t,n){"use strict";t.a=n.p+"static/media/88d497ccd95f265768e5018dcea1f886.svg"},Sgu1:function(e,t,n){},gFSH:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return g})),n.d(t,"a",(function(){return p})),n.d(t,"h",(function(){return m})),n.d(t,"j",(function(){return S})),n.d(t,"e",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return E})),n.d(t,"i",(function(){return O}));var r=n("o0o1"),o=n.n(r),a=n("yXPU"),i=n.n(a),u=n("RIqP"),l=n.n(u),c=n("hGp9");function s(e){return function(t){var n=Object.values(JSON.parse(localStorage.getItem("users"))).find((function(t){return atob(t.password)===e.password&&(t.email===e.identifier||t.username===e.identifier||t.phone===e.identifier)}));if(void 0!==n){localStorage.setItem("user",JSON.stringify(n));return h(n,(function(){return t(Object(c.b)(n))}))}return h("USER_NOT_FOUND")}}function f(){return function(e){var t=JSON.parse(localStorage.getItem("tweets"))||[];if(t&&t.length>0){t.forEach((function(t){e(d(t.id))}));return h(t,(function(){return e(Object(c.g)(t))}))}return h("NO_TWEETS_FOUND")}}function g(){return function(e){var t=JSON.parse(localStorage.getItem("users"))||null;if(t){return h(t,(function(){return e(Object(c.a)(t))}))}return h("NO_USERS_FOUND")}}function d(e){return function(t){var n=JSON.parse(localStorage.getItem("likes"))[e]||{},r=(Object.keys(n||{})||[]).length||0,o=JSON.parse(localStorage.getItem("tweets")).filter((function(t){return t.forPost===e})),a=JSON.parse(localStorage.getItem("tweets")).filter((function(t){return t.forPost===e})).length||0;return h({likes:n,likeCount:r,comments:o,commentsCount:a},(function(){return t(Object(c.f)(e,{likes:n,likeCount:r,comments:o,commentsCount:a}))}))}}function p(e,t){return function(n){var r=JSON.parse(localStorage.getItem("likes"));void 0!==r[e]||(r[e]={}),r[e][t]={date:(new Date).toLocaleString()},localStorage.setItem("likes",JSON.stringify(r)),n(d(e))}}function m(e,t){return function(n){var r=JSON.parse(localStorage.getItem("likes"));delete r[e][t],localStorage.setItem("likes",JSON.stringify(r)),n(d(e))}}function S(e,t,n){return function(r){var o={id:(new Date).getTime()+1e4*Math.random(),forPost:e||null,content:n,userId:t,date:(new Date).toLocaleString()},a=JSON.parse(localStorage.getItem("tweets"));if(e){var i=a.findIndex((function(t){return t.id===e}))+1;a=[].concat(l()(a.slice(0,i)),[o],l()(a.slice(i)))}else a.unshift(o);localStorage.setItem("tweets",JSON.stringify(a));var u=JSON.parse(localStorage.getItem("users"));return u[t].tweets=u[t].tweets+1,localStorage.setItem("users",JSON.stringify(u)),r(f()),r(d(e||o.id)),h("TWEET_HAS_BEEN_POSTED",null)}}function v(e){return function(t){var n=Object.values(JSON.parse(localStorage.getItem("users"))).find((function(t){return t.username===e}));if(void 0!==n){t(Object(c.d)({title:n.name,subTitle:n.tweets+" Tweet"+(n.tweets>1?"s":"")})),t(function(e){return function(t){if(void 0!==e){var n=(JSON.parse(localStorage.getItem("tweets"))||[]).filter((function(t){return t.userId===e.id}));n.forEach((function(e){t(d(e.id))}));return h(n,(function(){return t(Object(c.h)(n))}))}return h("USER_TWEETS_NOT_FOUND")}}(n));return h(n,(function(){return t(Object(c.e)(n))}))}return h("USER_NOT_FOUND")}}function w(e){return function(t){var n=JSON.parse(localStorage.getItem("following"));return h(n[e],(function(){return t(Object(c.c)(e,n[e]))}))}}function E(e,t){return function(n){var r=JSON.parse(localStorage.getItem("following"));r[e]={},r[e][t]={date:(new Date).toLocaleString()},localStorage.setItem("following",JSON.stringify(r));var o=JSON.parse(localStorage.getItem("users"));o[e].following=o[e].following+1,localStorage.setItem("users",JSON.stringify(o)),n(w(e))}}function O(e,t){return function(n){var r=JSON.parse(localStorage.getItem("following"));delete r[e][t],localStorage.setItem("following",JSON.stringify(r));var o=JSON.parse(localStorage.getItem("users"));o[e].following=o[e].following-1,localStorage.setItem("users",JSON.stringify(o)),n(w(e))}}function h(e){return b.apply(this,arguments)}function b(){return(b=i()(o.a.mark((function e(t){var n,r,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,e.next=3,new Promise((function(e,n){setTimeout((function(){e(t)}),2e3)}));case 3:return r=e.sent,e.abrupt("return",n?n():r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},hGp9:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"c",(function(){return s}));function r(e){return{type:"GET_HEADER",header:e}}function o(e){return{type:"CURRENT_USER",user:e}}function a(e){return{type:"GET_TIMELINE_TWEETS",tweets:e}}function i(e){return{type:"GET_USERS",users:e}}function u(e,t){return{type:"GET_STATS",id:e,data:t}}function l(e){return{type:"GET_USER",user:e}}function c(e){return{type:"GET_USER_TWEETS",tweets:e}}function s(e,t){return{type:"FOLLOWING",id:e,data:t}}},kq8Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("AwEm"),i=n("GuQl");function u(e){var t=e.type,n=void 0===t?"spinner":t,r=e.errorText,u=void 0===r?"":r;return"logo"===n?o.a.createElement("div",{className:"layout-centered"},o.a.createElement(a.a,{alt:"logo",src:i.a})):"spinner"===n?o.a.createElement("div",{className:"layout-flex"},o.a.createElement("div",{className:"spinner"}),u&&o.a.createElement("p",null,u)):void 0}},tjUo:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("i8i4"),i=n.n(a),u=n("ANjH"),l=n("/MKj"),c=n("sINF"),s=n("55Ip"),f={};var g={},d={};var p=Object(u.c)({timelineTweets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TIMELINE_TWEETS":return t.tweets;default:return e}},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_USER":return t.user;default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"Home",subTtitle:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HEADER":return t.header;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return t.users;default:return e}},stats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STATS":return f[t.id]=t.data,f;default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return t.user;default:return e}},userTweets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_TWEETS":return t.tweets;default:return e}},following:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOWING":return g[t.id]=t.data,g;default:return e}},followers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOWER":return d[t.id]=t.data,d;default:return e}}}),m=n("J4zp"),S=n.n(m),v=n("Ty5D"),w=n("o0o1"),E=n.n(w),O=n("lSNA"),h=n.n(O),b=n("yXPU"),y=n.n(b),N=n("AwEm"),I=(n("Sgu1"),n("gFSH")),T={101:{id:101,username:"argodeep",email:"abc@example.com",phone:"9876543210",name:"Arghyadeep Majumder",tweets:1,followers:15,following:5,location:"Bangalore",bio:"React guy who knows Angular",profile_image:"https://avatars1.githubusercontent.com/u/40262562?s=512&v=4",cover_url:"https://images.unsplash.com/photo-1472190649224-495422e1b602?auto=format&fit=crop&w=1051&q=80",joined_at:"01/03/2018",password:"MTIzNDU2"},1:{id:1,username:"stevejob",email:"steve@example.com",phone:"987654321011",name:"Steve Job",tweets:1,followers:15e6,following:1,location:"California",bio:"Stay foolish stay hungry",profile_image:"https://cdn.pixabay.com/photo/2018/04/17/08/52/steve-jobs-3326938_960_720.jpg",cover_url:"https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=1051&q=80",joined_at:"13/09/2007",password:"MTIzNDU2"}},j=[{id:1,forPost:null,content:"Hello World! from Apple",userId:1,date:"9/13/2012, 4:35:45 PM"},{id:2,forPost:1,content:"Welcome Apple!",userId:101,date:"9/13/2018, 6:37:45 PM"}],_={1:{101:{date:"9/13/2018, 6:35:45 PM"}}},J={101:{1:{date:"9/13/2018, 6:34:45 PM"}}},U=n("GuQl");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(){var e=Object(r.useState)({identifier:"",password:""}),t=S()(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),u=S()(i,2),c=u[0],f=u[1],g=Object(r.useState)(""),d=S()(g,2),p=d[0],m=d[1],w=Object(l.b)(),O=Object(v.g)();function h(){return(h=y()(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),f(!0),t.preventDefault(),e.next=5,w(Object(I.g)(n));case 5:"USER_NOT_FOUND"===e.sent?(m("Wrong user identifier. Check your email/username/phone with password"),f(!1)):O.replace("/home");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){return localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(T)),localStorage.getItem("tweets")||localStorage.setItem("tweets",JSON.stringify(j)),localStorage.getItem("likes")||localStorage.setItem("likes",JSON.stringify(_)),localStorage.getItem("following")||localStorage.setItem("following",JSON.stringify(J)),function(){console.log("Login unmounted")}}),[]),o.a.createElement("div",{className:"login-wrapper"},o.a.createElement(N.a,{alt:"logo",src:U.a,className:"logo"}),o.a.createElement("h2",null,"Login into Twitter"),p&&o.a.createElement("p",null,p),o.a.createElement("form",{onSubmit:function(e){return function(e){return h.apply(this,arguments)}(e)}},o.a.createElement("input",{placeholder:"Phone, email or username",value:n.identifier,type:"text",onChange:function(e){return a(k(k({},n),{},{identifier:e.target.value}))},disabled:c}),o.a.createElement("input",{placeholder:"password",type:"password",value:n.password,autoComplete:"password",onChange:function(e){return a(k(k({},n),{},{password:e.target.value}))},disabled:c}),o.a.createElement("button",{type:"submit",className:"login"+(c?"-validating":""),disabled:0===n.identifier.length||0===n.password.length},c?"":"Login",c&&o.a.createElement("div",{className:"spinner"}))),o.a.createElement("div",{className:"login-action"},o.a.createElement("span",null,o.a.createElement(s.b,{to:"/"},"Forgot Password?")),o.a.createElement("span",null," · ",o.a.createElement(s.b,{to:"/"},"Signup for Twitter"))))}function D(){return o.a.createElement(v.d,null,o.a.createElement(v.b,{exact:!0,path:"/login",component:R}),o.a.createElement(v.a,{exact:!0,from:"/",to:"/login"}))}var G=n("kq8Z"),L=n("hGp9"),W=(n("GLqo"),o.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"MDAh"))}))),A=function(){return o.a.createElement(o.a.Suspense,{fallback:""},o.a.createElement(W,null))};function F(){var e=Object(r.useState)(!0),t=S()(e,2),n=t[0],a=t[1],i=Object(l.c)((function(e){return e.currentUser})),u=Object(l.b)(),c=Object(v.h)(),s=Object(v.g)();return Object(r.useEffect)((function(){var e=new URLSearchParams(c.search);e.has("logout")&&"true"===e.get("logout")&&(localStorage.removeItem("user"),s.replace("/login"));var t=JSON.parse(localStorage.getItem("user"));return t?(u(Object(L.b)(t)),a(!1)):(a(!1),s.replace("/login")),function(){console.log("App unmounted")}}),[]),n?o.a.createElement(G.a,{type:"logo"}):o.a.createElement(o.a.Fragment,null,i&&!n?o.a.createElement(A,null):o.a.createElement(D,null))}var x=Object(u.d)(p,Object(u.a)(c.a));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:x},o.a.createElement(s.a,null,o.a.createElement(F,null)))),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("SW registered")})).catch((function(e){console.log("SW registration failed")}))}))}},[["tjUo",2,0]]]);