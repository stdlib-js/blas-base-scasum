// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";function i(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function o(e,r){for(var t=0,n=e.length-1;n>=0;n--){var s=e[n];"."===s?e.splice(n,1):".."===s?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return u.exec(e).slice(1)};function l(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,r="/"===n.charAt(0))}return(r?"/":"")+(e=o(j(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function f(e){var r=c(e),t="/"===g(e,-1);return(e=o(j(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e}function c(e){return"/"===e.charAt(0)}function p(){return f(j(Array.prototype.slice.call(arguments,0),(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function m(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=l(e).substr(1),r=l(r).substr(1);for(var n=t(e.split("/")),s=t(r.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}var a=[];for(u=o;u<n.length;u++)a.push("..");return(a=a.concat(s.slice(o))).join("/")}function h(e){var r=a(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function b(e,r){var t=a(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function d(e){return a(e)[3]}var v={extname:d,basename:b,dirname:h,sep:"/",delimiter:":",relative:m,join:p,isAbsolute:c,normalize:f,resolve:l};function j(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var g="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},y=i(Object.freeze({__proto__:null,basename:b,default:v,delimiter:":",dirname:h,extname:d,isAbsolute:c,join:p,normalize:f,relative:m,resolve:l,sep:"/"}));function x(e,r,t,i){var o,u,a,l,f;if(o=0,e<=0||t<=0)return o;for(u=s(r,0),l=2*t,a=2*i,f=0;f<e;f++)o+=n(u[a])+n(u[a+1]),a+=l;return o}function _(e,r,t){return x(e,r,t,0)}t(_,"ndarray",x);var A,w=e((0,y.join)("/home/runner/work/blas-base-scasum/blas-base-scasum/lib","./native.js")),O=A=r(w)?_:w;const{ndarray:k}=A;export{O as default,k as ndarray};
//# sourceMappingURL=index.mjs.map
