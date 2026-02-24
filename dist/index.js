"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(D,p){
var f=require('@stdlib/math-base-special-absf/dist'),_=require('@stdlib/strided-base-reinterpret-complex64/dist'),m=require('@stdlib/number-float64-base-to-float32/dist');function b(e,r,i,u){var a,t,s,c,v;if(a=0,e<=0)return a;for(t=_(r,0),c=i*2,s=u*2,v=0;v<e;v++)a=m(a+m(f(t[s])+f(t[s+1]))),s+=c;return a}p.exports=b
});var d=n(function(F,x){
var w=require('@stdlib/strided-base-stride2offset/dist'),E=q();function O(e,r,i){var u=w(e,i);return E(e,r,i,u)}x.exports=O
});var l=n(function(G,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=d(),h=q();g(y,"ndarray",h);j.exports=y
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),o,R=z(k(__dirname,"./native.js"));A(R)?o=B:o=R;module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
