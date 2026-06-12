"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=n(function(D,p){
var f=require('@stdlib/math-base-special-absf/dist'),_=require('@stdlib/strided-base-reinterpret-complex64/dist'),m=require('@stdlib/number-float64-base-to-float32/dist');function b(e,r,a,u){var i,t,s,c,v;if(i=0,e<=0)return i;for(t=_(r,0),c=a*2,s=u*2,v=0;v<e;v++)i=m(i+m(f(t[s])+f(t[s+1]))),s+=c;return i}p.exports=b
});var d=n(function(F,x){
var w=require('@stdlib/strided-base-stride2offset/dist'),E=q();function O(e,r,a){var u=w(e,a);return E(e,r,a,u)}x.exports=O
});var l=n(function(G,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=d(),h=q();g(y,"ndarray",h);j.exports=y
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),o,R=z(k(__dirname,"./native.js"));A(R)?o=B:o=R;module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
