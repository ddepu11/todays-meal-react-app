(this["webpackJsonpnew-react"]=this["webpackJsonpnew-react"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(17),s=c.n(r),j=(c(24),c(7)),a=c(2),i=c(12),l=c.n(i),o=c(18),b=c(15),u=c(1),h=Object(n.createContext)(),d=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(b.a)(c,2),s=r[0],j=r[1],a=Object(n.useState)(""),i=Object(b.a)(a,2),l=i[0],o=i[1];return Object(u.jsx)(h.Provider,{value:{menu:s,setMenu:j,keyword:l,setKeyword:o},children:t})},O=function(){return Object(n.useContext)(h)},x=function(e,t){var c=O().keyword,r=O().setMenu;function s(){return(s=Object(o.a)(l.a.mark((function n(){var s,j,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return""===c&&(c="Chicken"),null!==t&&void 0!==t&&(c=t.toString()),n.prev=2,n.next=5,fetch(e+c);case 5:return s=n.sent,n.next=8,s.json();case 8:j=n.sent,a=j.meals,console.log(a),r(null===a?[]:a),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0),r([]);case 18:case"end":return n.stop()}}),n,null,[[2,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return function(){return s.apply(this,arguments)}()}),[c]),O()},p=c.p+"static/media/logo.3266670f.png";function f(){return Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("ul",{className:"nav-ul flex",children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("img",{src:p,alt:""})})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/contact",children:"Contact Us"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/services",children:"Services"})})]})})}function m(){var e=O(),t=e.setKeyword,c=e.menu,r=(e.keword,Object(n.useRef)(null));return x("https://www.themealdb.com/api/json/v1/1/filter.php?c="),Object(n.useEffect)((function(){r.current.focus()}),[]),Object(u.jsxs)("main",{className:"hero",children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r.current.value.trim().toUpperCase())},children:[Object(u.jsx)("input",{ref:r,type:"text",placeholder:"Search Meal"}),Object(u.jsx)("button",{type:"submit",children:"Search"})]}),Object(u.jsx)("section",{className:"meals grid",children:c.map((function(e,t){var c=e.idMeal,n=e.strMeal,r=e.strMealThumb;return Object(u.jsxs)(j.b,{to:"/meal/".concat(c),className:"meal card",children:[Object(u.jsx)("img",{src:r,alt:n}),Object(u.jsx)("p",{children:n})]},t)}))})]})}function v(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"About"})})}function w(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Contact"})})}function g(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"Services"})})}function k(){var e=Object(a.f)().id;return x("https://www.themealdb.com/api/json/v1/1/lookup.php?i=",e),Object(u.jsx)("main",{className:"hero",children:Object(u.jsx)("h1",{children:"Meal"})})}var y=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{exact:!0,path:"/",children:Object(u.jsx)(m,{})}),Object(u.jsx)(a.a,{path:"/about",children:Object(u.jsx)(v,{})}),Object(u.jsx)(a.a,{path:"/contact",children:Object(u.jsx)(w,{})}),Object(u.jsx)(a.a,{path:"/meal/:id",component:k}),Object(u.jsx)(a.a,{path:"/services",children:Object(u.jsx)(g,{})})]})]})})};s.a.render(Object(u.jsx)(d,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cf962fde.chunk.js.map