(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[3],{72:function(e,t,c){e.exports={goBack:"UserPage_goBack__3iPx-",info:"UserPage_info__1bS1B",bio:"UserPage_bio__2MUYF",searchbar:"UserPage_searchbar__3apXF",repos:"UserPage_repos__29zM5"}},73:function(e,t,c){e.exports={container:"Repo_container__ptl6e"}},75:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(15),r=c.n(a),s=c(18),o=c(10),i=c(0),l=c(72),j=c.n(l),u=c(2),b=c(19),p=c(11),h=c(73),O=c.n(h),f=function(e){var t=e.repo;return Object(n.jsx)("a",{href:t.html_url,target:"_blank",rel:"noreferrer",children:Object(n.jsxs)("div",{className:O.a.container,children:[Object(n.jsx)("span",{children:t.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"".concat(t.forks," Forks")}),Object(n.jsx)("span",{children:"".concat(t.stargazers_count," Stars")})]})]})})};t.default=function(){var e=Object(u.h)(),t=Object(u.g)(),c=Object(i.useState)(null),a=Object(o.a)(c,2),l=a[0],h=a[1],O=Object(i.useState)(null),d=Object(o.a)(O,2),x=d[0],g=d[1],v=Object(i.useState)(""),_=Object(o.a)(v,2),m=_[0],k=_[1],w=Object(i.useState)(!1),U=Object(o.a)(w,2),N=U[0],P=U[1];Object(i.useEffect)((function(){(function(){var t=Object(s.a)(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(!0),t.next=4,b.API.getUser(e.login);case 4:c=t.sent,h(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:return t.prev=11,P(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}})()()}),[e.login]),Object(i.useEffect)((function(){l&&function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.API.getRepos(l.login);case 3:t=e.sent,g(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[l]);var F=x;return x&&m&&(F=x.filter((function(e){return e.name.toUpperCase().includes(m.toUpperCase())}))),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("hr",{}),Object(n.jsx)("span",{onClick:function(){return t.push("/")},className:j.a.goBack,children:"Go back"}),N&&Object(n.jsx)(p.a,{}),l&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:j.a.info,children:[Object(n.jsx)("img",{src:l.avatar_url,alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Name: ".concat(l.name?l.name:"-")}),Object(n.jsx)("span",{children:"Email: ".concat(l.email?l.email:"-")}),Object(n.jsx)("span",{children:"Location: ".concat(l.location?l.location:"-")}),Object(n.jsx)("span",{children:"Join Date: ".concat(l.created_at?l.created_at.slice(0,10):"-")}),Object(n.jsx)("span",{children:"Followers: ".concat(l.followers)}),Object(n.jsx)("span",{children:"Following: ".concat(l.following)})]})]}),Object(n.jsx)("div",{className:j.a.bio,children:!!l.bio&&l.bio}),Object(n.jsx)("div",{className:j.a.searchbar,children:Object(n.jsx)("input",{placeholder:"search repo...",value:m,onChange:function(e){k(e.target.value)}})}),Object(n.jsx)("div",{className:j.a.repos,children:F&&F.length?F.map((function(e,t){return Object(n.jsx)(f,{repo:e},t)})):Object(n.jsx)("span",{children:"No repositories"})})]})]})}}}]);
//# sourceMappingURL=3.b672f973.chunk.js.map