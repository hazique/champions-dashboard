(this["webpackJsonpchampions-dashboard"]=this["webpackJsonpchampions-dashboard"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=(n(27),n(4)),u=n(9),l=n(6),h=n(5),s=n(7),p=(n(28),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).onSubmit=function(e){localStorage.setItem("apiToken",e.getValue()),n.props.history.push("/home")},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{type:"text"}),o.a.createElement("input",{type:"button",value:"Submit",onClick:this.onSubmit}))}}]),t}(o.a.PureComponent)),m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).check(),n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"check",value:function(){console.log("localStorage.getItem",localStorage.getItem("apiToken")),void 0!==typeof Storage&&localStorage.getItem("apiToken")&&null!==localStorage.getItem("apiToken")?this.props.history.push("/home"):this.props.history.push("/tokenInput")}},{key:"render",value:function(){return null}}]),t}(o.a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={enabled:!1},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.PureComponent),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).call(this))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null))}},{key:"getData",value:function(){}}]),t}(o.a.PureComponent),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).call(this))}return Object(s.a)(t,e),t}(o.a.PureComponent);var O=n(19),v=n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=o.a.createElement(O.a,null,o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/",component:m}),o.a.createElement(v.a,{path:"/home",component:f}),o.a.createElement(v.a,{path:"/watchList",component:j}),o.a.createElement(v.a,{path:"/tokenInput",component:p}),o.a.createElement(v.a,{path:"*",component:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Route Not found"))}})));r.a.render(d,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7f7ba469.chunk.js.map