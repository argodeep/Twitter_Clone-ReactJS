(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"H19+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a("o0o1"),c=a.n(n),r=a("cDf5"),l=a.n(r),s=a("RIqP"),i=a.n(s),o=a("yXPU"),m=a.n(o),u=a("J4zp"),d=a.n(u),f=a("q1tI"),p=a.n(f),E=a("/MKj"),v=a("AwEm"),b=a("Ty5D"),g=a("kq8Z"),N=a("eky9"),w=a("gFSH"),j=a.p+"static/media/065113fec1eab67194b8028b2e0266a0.svg",O=a.p+"static/media/c06ad51fa1571deff7425822c8adaf47.svg";a("hLjt");function h(){var e=Object(f.useState)(!0),t=d()(e,2),a=t[0],n=t[1],r=Object(f.useState)(""),s=d()(r,2),o=s[0],u=s[1],h=Object(E.c)((function(e){return e.currentUser})),k=Object(E.c)((function(e){return e.profile})),y=Object(E.c)((function(e){return e.userTweets})),I=Object(E.c)((function(e){return e.following})),S=Object(E.b)(),T=Object(b.i)();function C(){return(C=m()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Profile / Twitter",S(Object(w.f)()),S(Object(w.b)(h.id)),e.next=5,S(Object(w.e)(T.username));case 5:"string"==typeof(t=e.sent)&&"USER_NOT_FOUND"===t&&u("User not found! Reload the page"),"object"===l()(t)&&n(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){var e=I[h.id];return void 0!==e&&void 0!==e[k.id]}function F(e){n(!0),"follow"===e?(S(Object(w.c)(h.id,k.id)),I[h.id]={},I[h.id][k.id]={date:(new Date).toLocaleString()},x()):(S(Object(w.i)(h.id,k.id)),delete I[h.id][k.id]),n((function(){n(!1)}),100)}return Object(f.useEffect)((function(){return function(){C.apply(this,arguments)}(),function(){console.log("Profile unmounted"),S({type:"GET_USER",user:null})}}),[T.username]),k?(document.title="".concat(k.name," (").concat(k.username,") / Twitter"),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"cover",style:{backgroundImage:"url(".concat(k.cover_url,")")}}),p.a.createElement("div",{className:"profile-area"},p.a.createElement("div",{className:"avatar-profile",style:{backgroundImage:"url(".concat(k.profile_image,")")}}),h.id!==k.id&&x()&&p.a.createElement("button",{className:"unfollow",onClick:function(){return F("unfollow")}},"Following"),h.id!==k.id&&!x()&&p.a.createElement("button",{className:"follow",onClick:function(){return F("follow")}},"Follow"),p.a.createElement("div",{className:"profile"},p.a.createElement("span",{className:"profile-column"},p.a.createElement("span",{className:"name"},k.name),p.a.createElement("span",{className:"username"},"@",k.username))),p.a.createElement("p",{className:"bio"},k.bio),p.a.createElement("div",{className:"profile-info"},k.location&&p.a.createElement("span",{className:"actions"},p.a.createElement(v.a,{alt:"location-icon",src:j}),p.a.createElement("span",{className:"value"},k.location)),k.joined_at&&p.a.createElement("span",{className:"actions"},p.a.createElement(v.a,{alt:"calendar-icon",src:O}),p.a.createElement("span",{className:"value"},"Joined ",k.joined_at))),p.a.createElement("div",{className:"profile-stats"},p.a.createElement("span",null,p.a.createElement("span",{className:"value"},k.following),p.a.createElement("span",{className:"unit"},"Following")),p.a.createElement("span",null,p.a.createElement("span",{className:"value"},k.followers),p.a.createElement("span",{className:"unit"},"Followers"))),p.a.createElement("div",{className:"profile-tabs"},p.a.createElement("span",{className:"active"},"Tweets"),p.a.createElement("span",null,"Tweets ","&"," Replies"),p.a.createElement("span",null,"Media"),p.a.createElement("span",null,"Likes")),a&&p.a.createElement("div",{className:"loading-home"},p.a.createElement(g.a,{errorText:o,type:"spinner"})),!a&&y.map((function(e,t){return p.a.createElement(N.a,{content:e,thread:(a=e.id,-1!==i()(y).findIndex((function(e){return e.forPost===a}))),key:"t-"+t+e.id});var a}))))):p.a.createElement(g.a,{errorText:o,type:"spinner"})}},H7QS:function(e,t,a){},cytO:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("o0o1"),c=a.n(n),r=a("yXPU"),l=a.n(r),s=a("J4zp"),i=a.n(s),o=a("q1tI"),m=a.n(o),u=a("/MKj"),d=a("55Ip"),f=a("UUyv"),p=a("gFSH"),E=a("eky9");a("H7QS");function v(e){var t=e.content,a=e.id,n=void 0===a?null:a,r=e.rows,s=void 0===r?2:r,v=e.isPosted,b=Object(o.useState)(""),g=i()(b,2),N=g[0],w=g[1],j=Object(o.useState)(!1),O=i()(j,2),h=O[0],k=O[1],y=Object(o.useState)(""),I=i()(y,2),S=I[0],T=I[1],C=Object(u.c)((function(e){return e.currentUser})),x=Object(u.b)();function F(){return(F=l()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),!(N.length>0&&0===S.length)){e.next=7;break}return T(""),e.next=5,x(Object(p.j)(n,C.id,N));case 5:"string"!=typeof(t=e.sent)||"TWEET_HAS_BEEN_POSTED"!==t||n||(k(!1),w(""),v(!0));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){return function(){console.log("Create Post Unmounted")}}),[]),m.a.createElement(o.Fragment,null,n&&m.a.createElement("div",null,m.a.createElement(E.a,{content:t,thread:!0,forReply:!0}),m.a.createElement("p",null)),m.a.createElement("div",{className:"create-post-wrapper"},m.a.createElement(d.b,{to:C.username},m.a.createElement(f.LazyLoadImage,{alt:"user-avatar",className:"avatar",src:C.profile_image})),m.a.createElement("div",null,m.a.createElement("textarea",{rows:s,value:N,onChange:function(e){w(e.target.value),e.target.value.length>140?T("Post a tweet within 140 characters limit"):T("")},placeholder:n?"Tweet your reply":"What's Happening?"}),m.a.createElement("span",{className:"post-action"},m.a.createElement("span",null,S&&m.a.createElement("span",{className:"error-message"},S),!S&&N.length>0&&m.a.createElement("span",{className:"info-message"},140-N.length," left")),m.a.createElement("button",{className:"add-tweet",disabled:!(!S&&!h&&0!==N.length),onClick:function(){return function(){return F.apply(this,arguments)}()}},h?"Sending Tweet":"Tweet")))))}},eky9:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a("J4zp"),c=a.n(n),r=a("q1tI"),l=a.n(r),s=a("UUyv"),i=a("/MKj"),o=a("55Ip"),m=(a("nlOY"),a("AwEm")),u=a("xGDI"),d=a("cytO"),f=a("E0/h"),p=a.p+"static/media/12b85df85915f2e980c67c0b63469c45.svg",E=a.p+"static/media/dbae9690e75c2a60cddd820992eb973a.svg",v=a.p+"static/media/4b8be79f40d4074c710963f276aaa88e.svg",b=a.p+"static/media/b95dea25792367e68a80d45047fd3e63.svg",g=a.p+"static/media/8b733236e3d1671c23fbf649cd7e123f.svg",N=a.p+"static/media/af875c3218e288dbc3b024e6ddbdd7e5.svg";var w=a("gFSH");function j(e){var t,a,n,j,O,h,k,y=e.content,I=e.thread,S=void 0!==I&&I,T=e.forReply,C=void 0!==T&&T,x=Object(r.useState)(!1),F=c()(x,2),U=F[0],D=F[1],P=Object(r.useState)(!1),_=c()(P,2),H=_[0],L=_[1],R=Object(i.c)((function(e){return e.users})),q=Object(i.c)((function(e){return e.stats})),J=Object(i.c)((function(e){return e.currentUser})),M=Object(i.b)();return Object(r.useEffect)((function(){return function(){console.log("Post unmounted")}}),[q]),l.a.createElement("div",{className:"post-wrapper"+(S||C?" hide-border":"")},l.a.createElement("div",null,l.a.createElement(o.b,{to:R[y.userId].username},l.a.createElement(s.LazyLoadImage,{alt:"user-avatar",className:"avatar",src:R[y.userId].profile_image})),S&&l.a.createElement("div",{className:"thread"})),l.a.createElement("div",null,l.a.createElement("span",{className:"post-row"},l.a.createElement("span",{className:"name"},l.a.createElement(o.b,{to:R[y.userId].username},R[y.userId].name)),l.a.createElement("span",{className:"username"},l.a.createElement(o.b,{to:R[y.userId].username},"@",R[y.userId].username)),l.a.createElement("span",{className:"time"},"· ",(h=y.date,(k=((new Date).getTime()-new Date(h).getTime())/1e3)<=59?k.toFixed()+" Sec":k>=59&&k<120?(k/60).toFixed()+"  Min":k>=119&&k<3600?(k/60).toFixed()+"  Mins":k>=3600&&k<7200?(k/60/60).toFixed()+" Hr":k>=7199&&k<86399?(k/60/60).toFixed()+" Hrs":k>=86400?new Date(h).toDateString().slice(4,10):"")),l.a.createElement(m.a,{alt:"profile-expand-icon",src:f.a})),l.a.createElement("pre",{className:"post-content"},y.content),C&&l.a.createElement("p",{className:"reply-username"},l.a.createElement("span",{className:"username"},"Replying to "),l.a.createElement(o.b,{to:R[y.userId].username},"@",R[y.userId].username)),!C&&l.a.createElement("span",{className:"post-action"},l.a.createElement("span",{className:"actions"},l.a.createElement(m.a,{alt:"comment-icon",src:p,onClick:function(){D((function(e){return!e}))}}),(null===(t=q[y.id])||void 0===t?void 0:t.commentsCount)>0&&l.a.createElement("span",{className:"value"},null===(a=q[y.id])||void 0===a?void 0:a.commentsCount)),l.a.createElement("span",{className:"actions"},l.a.createElement(m.a,{alt:"retweet-icon",src:E})),l.a.createElement("span",{className:"actions"},l.a.createElement(m.a,{alt:"like-icon",src:void 0!==((null===(n=q[y.id])||void 0===n?void 0:n.likes)||{})[J.id]?b:v,onClick:function(){var e,t,a,n;return t=((null===(e=q[y.id])||void 0===e?void 0:e.likes)||{})[J.id],H||(L(!0),void 0!==t?(M(Object(w.h)(y.id,J.id)),delete q[y.id].likes[J.id],q[y.id].likeCount=(null===(a=q[y.id])||void 0===a?void 0:a.likeCount)-1):(M(Object(w.a)(y.id,J.id)),void 0===q[y.id].likes?(q[y.id].likes={},q[y.id].likes[J.id]={date:(new Date).toLocaleString()}):q[y.id].likes[J.id]={date:(new Date).toLocaleString()},q[y.id].likeCount=(null===(n=q[y.id])||void 0===n?void 0:n.likeCount)+1)),void setTimeout((function(){L(!1)}),0)}}),!H&&(null===(j=q[y.id])||void 0===j?void 0:j.likeCount)>0&&l.a.createElement("span",{className:"value"},null===(O=q[y.id])||void 0===O?void 0:O.likeCount)),l.a.createElement("span",{className:"actions"},l.a.createElement(m.a,{alt:"share-icon",src:g})),l.a.createElement("span",{className:"actions not-mobile-visible"},l.a.createElement(m.a,{alt:"analytics-icon",src:N})))),U&&l.a.createElement(u.a,null,l.a.createElement("div",{className:"modal-container"},l.a.createElement("div",{className:"modal-view"},l.a.createElement("div",{className:"modal-header",onClick:function(){return D((function(e){return!e}))}},"×"),l.a.createElement("div",{className:"modal-body"},l.a.createElement(d.a,{content:y,id:y.id,rows:7}))))))}},hLjt:function(e,t,a){},nlOY:function(e,t,a){},xGDI:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),c=a("i8i4");function r(e){var t=e.children,a=document.getElementById("modal-root"),r=document.createElement("div");return Object(n.useEffect)((function(){return a.appendChild(r),function(){return a.removeChild(r)}}),[]),Object(c.createPortal)(t,r)}}}]);