!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=document.createElement("script");o.src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js",document.documentElement.appendChild(o);var r=function(){function e(){}return e.prototype.addComment=function(){var e=new Date;$("#main").append("<div><span>new comment pushed at."+e.toTimeString()+"</span></div>")},e}();n.App=r;var c=new r;o.onload=function(){console.log(333333),$("#btn-add").click(c.addComment)}}]);
//# sourceMappingURL=app.js.map