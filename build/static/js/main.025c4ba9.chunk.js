(this.webpackJsonpscrolling=this.webpackJsonpscrolling||[]).push([[0],{17:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),i=n(2),u=n(6),s=n(5),l=n.n(s);var b=function(e,t){var n=Object(a.useState)(!0),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(!1),b=Object(i.a)(s,2),f=b[0],d=b[1],g=Object(a.useState)([]),h=Object(i.a)(g,2),j=h[0],O=h[1],m=Object(a.useState)(!1),v=Object(i.a)(m,2),p=v[0],E=v[1];return Object(a.useEffect)((function(){O([])}),[e]),Object(a.useEffect)((function(){var n;return o(!0),d(!1),l()({method:"GET",url:"https://openlibrary.org/search.json",params:{q:e,page:t},cancelToken:new l.a.CancelToken((function(e){return n=e}))}).then((function(e){O((function(t){return Object(u.a)(new Set([].concat(Object(u.a)(t),Object(u.a)(e.data.docs.map((function(e){return e.title}))))))})),E(e.data.docs.length>0),o(!1),console.log("Lengthis: "+e.data.docs.length)})).catch((function(e){l.a.isCancel(e)||d(!0)})),function(){return n()}}),[e,t]),{loading:r,error:f,books:j,hasMore:p}};var f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("1"),u=Object(i.a)(o,2),s=(u[0],u[1]),l=b(n,s),f=l.books,d=l.hasMore,g=l.loading,h=l.error,j=Object(a.useRef)(),O=Object(a.useCallback)((function(e){g||(j.current&&j.current.disconnect(),j.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d&&(s((function(e){return e+1})),console.log("Pagination Visable"))})),e&&j.current.observe(e))}),[g,d]);return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:n,onChange:function(e){r(e.target.value),s(1)}}),f.map((function(e,t){return f.length===t+1?c.a.createElement("div",{ref:O,key:e},e):c.a.createElement("div",{key:e},e)})),c.a.createElement("div",null,g&&"Loading..."),c.a.createElement("div",null,h&&"Error"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.025c4ba9.chunk.js.map