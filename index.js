// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLucasSeq=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function V(r){var e,t,n;if(!P(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,R=N.__defineSetter__,B=N.__lookupGetter__,L=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var G=F;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&M.call(r,e)}var U="function"==typeof Symbol?Symbol:void 0;var X="function"==typeof U&&"symbol"==typeof U("foo")&&W(U,"iterator")&&"symbol"==typeof U.iterator?Symbol.iterator:null;var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return q&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D="function"==typeof U?U.toStringTag:"";var H=Y()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[D],e=W(r,D);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)};var J=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var K=/./;function Q(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString;var tr=Y();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function ir(r){return Q(r)||nr(r)}function or(){return new Function("return this;")()}Z(ir,"isPrimitive",Q),Z(ir,"isObject",nr);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="object"==typeof global?global:null,fr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(fr)return fr;if(ar)return ar;if(cr)return cr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr=/^\s*function\s*([^(]*)/i;function br(r){return null!==r&&"object"==typeof r}function yr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return br(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(gr,"REGEXP",dr),Z(br,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!J(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br));var vr="function"==typeof K||"object"==typeof pr||"function"==typeof sr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};function hr(r){return"function"===vr(r)}var wr,mr=Object,jr=Object.getPrototypeOf;wr=hr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr;var Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!J(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&hr(e.constructor)&&"[object Function]"===H(e.constructor)&&W(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function Sr(r){return"number"==typeof r}var xr=Number,Tr=xr.prototype.toString;var kr=Y();function Ir(r){return"object"==typeof r&&(r instanceof xr||(kr?function(r){try{return Tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Ar(r){return Sr(r)||Ir(r)}Z(Ar,"isPrimitive",Sr),Z(Ar,"isObject",Ir);var Pr=Number.POSITIVE_INFINITY,Vr=xr.NEGATIVE_INFINITY,Fr=Math.floor;function Nr(r){return r<Pr&&r>Vr&&Fr(e=r)===e;var e}function $r(r){return Sr(r)&&Nr(r)}function Cr(r){return Ir(r)&&Nr(r.valueOf())}function Rr(r){return $r(r)||Cr(r)}function Br(r){return $r(r)&&r>=0}function Lr(r){return Cr(r)&&r.valueOf()>=0}function Gr(r){return Br(r)||Lr(r)}function Zr(r,e){if(!Or(e))return new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",e));if(W(e,"iter")){if(r.iter=e.iter,!Br(e.iter))return new TypeError(V("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter));if(e.iter>77)return new RangeError(V("invalid option. `%s` option must be less than or equal to 77. Option: `%u`.","iter",e.iter))}return null}Z(Rr,"isPrimitive",$r),Z(Rr,"isObject",Cr),Z(Gr,"isPrimitive",Br),Z(Gr,"isObject",Lr);return function r(e){var t,n,i,o,a,c,u,f;if(t={iter:77},arguments.length&&(o=Zr(t,e)))throw o;return a=2,c=1,u=0,f=0,Z(n={},"next",l),Z(n,"return",s),X&&Z(n,X,p),n;function l(){return f+=1,i||f>t.iter?{done:!0}:(1===f?u=2:2===f?u=1:(u=a+c,a=c,c=u),{value:u,done:!1})}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return r(t)}}}));
//# sourceMappingURL=index.js.map
