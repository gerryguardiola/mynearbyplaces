(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{23:function(t,e){},29:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),s=n.n(c),r=n(21),i=n.n(r),o=(n(29),n(17)),u=n(8),j=n(2),b=n(11),h=n(12),d=n(14),l=n(13),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).loginCheck=function(){a.setState({loggedIn:!0})},a.state={loggedIn:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var t="",e=this.props.location;return e&&e.state&&e.state.user&&(t=e.state.user),Object(a.jsxs)("div",{children:[this.state.loggedIn?Object(a.jsxs)("div",{children:[Object(a.jsx)(u.b,{to:"/add",children:"Add Location"})," ",t]}):Object(a.jsx)("div",{children:Object(a.jsx)(u.b,{to:"/login",children:"Login to Continue"})}),this.loginCheck]})}}]),n}(s.a.Component),g=n(10),m=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).onSubmit=function(t){a.state.username.trim().length>0&&a.setState({authenticated:!0}),t.preventDefault()},a.onInputChnage=function(t){var e=t.target.value,n=t.target.name;a.setState(Object(g.a)({},n,e))},a.state={username:"",authenticated:!1},a}return Object(h.a)(n,[{key:"render",value:function(){var t={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?Object(a.jsx)(j.a,{to:t}):Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsx)("lable",{children:"Username:"}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChnage}),Object(a.jsx)("button",{type:"submit",children:"Login"})]})})}}]),n}(s.a.Component),x=n(23),p=n.n(x);n(35);var f=function(){return Object(a.jsx)(u.a,{basename:"/mynearbyplaces",children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",render:function(t){return Object(a.jsx)(O,Object(o.a)({},t))}}),Object(a.jsx)(j.b,{path:"/login",children:Object(a.jsx)(m,{})}),Object(a.jsx)(j.b,{path:"/add",render:function(t){return Object(a.jsx)(p.a,Object(o.a)({},t))}})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),v()}},[[36,1,2]]]);
//# sourceMappingURL=main.514d0803.chunk.js.map