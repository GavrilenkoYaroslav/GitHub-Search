(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),c=(n(0),n(30)),a=n.n(c),s=function(){return Object(r.jsx)("div",{className:a.a.wrap,children:Object(r.jsx)("span",{children:"Loading..."})})}},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;var r=n(43).default.create({baseURL:"https://api.github.com/",headers:{Accept:"application/vnd.github.v3+json"}});t.API={findUsers:function(e){return r.get("search/users?q="+e+"&per_page=100").then((function(e){return e.data}))},getUser:function(e){return r.get("users/"+e).then((function(e){return e.data}))},getRepos:function(e){return r.get("users/"+e+"/repos").then((function(e){return e.data}))}}},30:function(e,t,n){e.exports={wrap:"Preloader_wrap__3Zp7H"}},31:function(e,t,n){e.exports={searchbar:"HomePage_searchbar__3TsOC"}},32:function(e,t,n){e.exports={container:"User_container__1TDaU"}},34:function(e,t,n){e.exports={title:"Header_title__1jH-T"}},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(29),u=n.n(s),i=(n(41),n(35)),o=n(11),j=function(e){return function(t){return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)(o.a,{}),children:Object(r.jsx)(e,Object(i.a)({},t))})}},l=n(12),b=n(2),d=n(15),f=n.n(d),h=n(18),p=n(10),O=n(31),x=n.n(O),g=n(19),v=n(32),m=n.n(v),_=function(e){var t=e.user,n=Object(b.g)();return Object(r.jsxs)("div",{onClick:function(){return n.push("/user/".concat(t.login))},className:m.a.container,children:[Object(r.jsx)("img",{src:t.avatar_url,alt:""}),Object(r.jsx)("strong",{children:t.login})]})},S=n(69),I=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),u=Object(p.a)(s,2),i=u[0],j=u[1],l=Object(c.useState)(null),b=Object(p.a)(l,2),d=b[0],O=b[1],v=Object(c.useState)(!1),m=Object(p.a)(v,2),I=m[0],k=m[1];Object(c.useEffect)((function(){var e=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,g.API.findUsers(n);case 4:t=e.sent,O(t.items),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();localStorage.getItem("term")&&(j(localStorage.getItem("term")),a(localStorage.getItem("term"))),n?e():O(null)}),[n]);var w=Object(S.a)((function(){a(i),localStorage.setItem("term",i)}),1e3);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:x.a.searchbar,children:Object(r.jsx)("input",{placeholder:"let's find someone...",value:i,onChange:function(e){j(e.target.value),w.callback()}})}),I&&Object(r.jsx)(o.a,{}),Object(r.jsx)("div",{children:d&&d.map((function(e,t){return Object(r.jsx)(_,{user:e},t)}))})]})},k=n(34),w=n.n(k),P=function(){return Object(r.jsx)("span",{className:w.a.title,children:"GitHub Searcher"})},U=a.a.lazy((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,74))})),y=a.a.lazy((function(){return n.e(3).then(n.bind(null,75))})),H=function(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(P,{}),Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(I,{})}}),Object(r.jsx)(b.b,{exact:!0,path:"/user/:login",render:j(y)}),Object(r.jsx)(b.b,{exact:!0,path:"/404",render:j(U)}),Object(r.jsx)(b.b,{path:"*",render:function(){return Object(r.jsx)(b.a,{exact:!0,to:"/404"})}})]})]})})};u.a.render(Object(r.jsx)(H,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e24e5471.chunk.js.map