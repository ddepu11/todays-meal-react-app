(this["webpackJsonpnew-react"]=this["webpackJsonpnew-react"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(17),s=c.n(r),j=(c(24),c(7)),a=c(2),i=c.p+"static/media/logo.3266670f.png",l=c(0);function o(){return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("ul",{className:"nav-ul flex",children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{src:i,alt:""})})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/contact",children:"Contact Us"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/services",children:"Services"})})]})})}var b=c(10),d=Object(n.createContext)(),h=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(b.a)(c,2),s=r[0],j=r[1],a=Object(n.useState)(!0),i=Object(b.a)(a,2),o=i[0],h=i[1],u=Object(n.useState)(""),O=Object(b.a)(u,2),x=O[0],m=O[1],p=Object(n.useState)(!1),f=Object(b.a)(p,2),v=f[0],g=f[1];return Object(l.jsx)(d.Provider,{value:{menu:s,setMenu:j,keyword:x,setKeyword:m,loading:o,setLoading:h,error:v,setError:g},children:t})},u=function(){return Object(n.useContext)(d)},O=c(15),x=c.n(O),m=c(19),p=function(e,t){var c=u(),r=c.keyword,s=c.setMenu,j=c.setLoading,a=c.setError;function i(){return(i=Object(m.a)(x.a.mark((function c(){var n,i,l;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return j(!0),""===r&&(r="Chicken"),null!==t&&void 0!==t&&(r=t.toString()),c.prev=3,c.next=6,fetch(e+r);case 6:return n=c.sent,c.next=9,n.json();case 9:i=c.sent,null===(l=i.meals)?(s([]),j(!1),a(!0)):(s(l),j(!1)),c.next=20;break;case 14:c.prev=14,c.t0=c.catch(3),console.log(c.t0),j(!1),s([]),a(!0);case 20:case"end":return c.stop()}}),c,null,[[3,14]])})))).apply(this,arguments)}Object(n.useEffect)((function(){return function(){return i.apply(this,arguments)}()}),[r])};function f(){return Object(l.jsx)("section",{className:"loading",children:Object(l.jsx)("h1",{children:"Loading..."})})}function v(){p("https://www.themealdb.com/api/json/v1/1/filter.php?c=");var e=u(),t=e.setKeyword,c=e.menu,r=e.loading,s=e.error,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.focus()}),[]),Object(l.jsx)(l.Fragment,{children:s?Object(l.jsx)("h1",{children:"Error"}):Object(l.jsxs)("main",{className:"hero",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a.current.value.trim().toUpperCase())},children:[Object(l.jsx)("input",{ref:a,type:"text",placeholder:"Search Meal"}),Object(l.jsx)("button",{type:"submit",children:"Search"})]}),Object(l.jsx)("section",{className:"meals grid",children:r?Object(l.jsx)(f,{}):c.map((function(e,t){var c=e.idMeal,n=e.strMeal,r=e.strMealThumb;return Object(l.jsxs)(j.b,{to:"/meal/".concat(c),className:"meal card",children:[Object(l.jsx)("img",{src:r,alt:n}),Object(l.jsx)("p",{children:n})]},t)}))})]})})}function g(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"About"})})}function w(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Contact"})})}function N(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Services"})})}function y(){var e=Object(a.f)().id;p("https://www.themealdb.com/api/json/v1/1/lookup.php?i=",e);var t=u(),c=t.menu,n=t.loading,r=!1===n&&c[0],s=r.strMealThumb,j=r.strInstructions,i=r.strArea,o=r.strCategory;return Object(l.jsx)(l.Fragment,{children:n?Object(l.jsx)(f,{}):Object(l.jsxs)("main",{className:"hero one-meal",children:[Object(l.jsx)("img",{src:s,alt:""}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsxs)("div",{className:"flex c common",children:[Object(l.jsx)("h1",{children:"Category:"}),Object(l.jsx)("span",{children:o})]}),Object(l.jsxs)("div",{className:"flex a common",children:[Object(l.jsx)("h1",{children:"Area:"}),Object(l.jsx)("span",{children:i})]}),Object(l.jsxs)("div",{className:"flex l common",children:[Object(l.jsx)("h1",{children:"Instruction:"}),Object(l.jsx)("span",{children:j})]})]})]})})}var S=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/",children:Object(l.jsx)(v,{})}),Object(l.jsx)(a.a,{path:"/about",children:Object(l.jsx)(g,{})}),Object(l.jsx)(a.a,{path:"/contact",children:Object(l.jsx)(w,{})}),Object(l.jsx)(a.a,{path:"/meal/:id",component:y}),Object(l.jsx)(a.a,{path:"/services",children:Object(l.jsx)(N,{})})]})]})})};s.a.render(Object(l.jsx)(h,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.823dd959.chunk.js.map