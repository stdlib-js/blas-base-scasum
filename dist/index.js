"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(B,m){
var o=require('@stdlib/math-base-special-absf/dist'),R=require('@stdlib/strided-base-reinterpret-complex64/dist');function _(e,r,a,l){var i,u,s,c,t;if(i=0,e<=0||a<=0)return i;for(u=R(r,0),c=a*2,s=l*2,t=0;t<e;t++)i+=o(u[s])+o(u[s+1]),s+=c;return i}m.exports=_
});var f=v(function(C,p){
var b=n();function w(e,r,a){return b(e,r,a,0)}p.exports=w
});var d=v(function(D,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=f(),O=n();E(x,"ndarray",O);y.exports=x
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),z=d(),q,j=h(g(__dirname,"./native.js"));k(j)?q=z:q=j;module.exports=q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
