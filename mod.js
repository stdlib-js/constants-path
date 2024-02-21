// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,m,"$1e"),i=p.call(i,v,"e"),i=p.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,f,"e+0$1"),i=p.call(i,d,"e-0$1"),e.alternate&&(i=p.call(i,g,"$1."),i=p.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function y(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,T=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,i,a,o,s,l,u,p,f,d,g,h;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(i=e[u],"string"==typeof i)s+=i;else{if(r=void 0!==i.precision,!(i=I(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,E(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,d=i.width,g=i.padRight,h=void 0,(h=d-f.length)<0?f:f=g?f+y(h):y(h)+f)),s+=i.arg||"",l+=1}return s}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,i,n;for(t=[],n=0,i=S.exec(e);i;)(r=e.slice(n,S.lastIndex-i[0].length)).length&&t.push(r),t.push(x(i)),n=S.lastIndex,i=S.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function j(e){var r,t;if("string"!=typeof e)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var O=Object.prototype,L=O.toString,R=O.__defineGetter__,V=O.__defineSetter__,A=O.__lookupGetter__,M=O.__lookupSetter__;var N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(A.call(e,r)||M.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&V&&V.call(e,r,t.set),e};function $(e,r,t){N(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function D(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})})),t}var F="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function W(){throw new Error("setTimeout has not been defined")}function C(){throw new Error("clearTimeout has not been defined")}var X=W,Z=C;function G(e){if(X===setTimeout)return setTimeout(e,0);if((X===W||!X)&&setTimeout)return X=setTimeout,setTimeout(e,0);try{return X(e,0)}catch(r){try{return X.call(null,e,0)}catch(r){return X.call(this,e,0)}}}"function"==typeof F.setTimeout&&(X=setTimeout),"function"==typeof F.clearTimeout&&(Z=clearTimeout);var z,U=[],q=!1,B=-1;function H(){q&&z&&(q=!1,z.length?U=z.concat(U):B=-1,U.length&&J())}function J(){if(!q){var e=G(H);q=!0;for(var r=U.length;r;){for(z=U,U=[];++B<r;)z&&z[B].run();B=-1,r=U.length}z=null,q=!1,function(e){if(Z===clearTimeout)return clearTimeout(e);if((Z===C||!Z)&&clearTimeout)return Z=clearTimeout,clearTimeout(e);try{return Z(e)}catch(r){try{return Z.call(null,e)}catch(r){return Z.call(this,e)}}}(e)}}function K(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];U.push(new Q(e,r)),1!==U.length||q||G(J)}function Q(e,r){this.fun=e,this.array=r}Q.prototype.run=function(){this.fun.apply(null,this.array)};var Y="browser",ee="browser",re={},te=[],ie={},ne={},ae={};function oe(){}var ce=oe,se=oe,le=oe,ue=oe,pe=oe,fe=oe,de=oe;function ge(e){throw new Error("process.binding is not supported")}function he(){return"/"}function we(e){throw new Error("process.chdir is not supported")}function ve(){return 0}var me=F.performance||{},be=me.now||me.mozNow||me.msNow||me.oNow||me.webkitNow||function(){return(new Date).getTime()};function ye(e){var r=.001*be.call(me),t=Math.floor(r),i=Math.floor(r%1*1e9);return e&&(t-=e[0],(i-=e[1])<0&&(t--,i+=1e9)),[t,i]}var _e=new Date;function Ee(){return(new Date-_e)/1e3}var Te={nextTick:K,title:Y,browser:true,env:re,argv:te,version:"",versions:ie,on:ce,addListener:se,once:le,off:ue,removeListener:pe,removeAllListeners:fe,emit:de,binding:ge,cwd:he,chdir:we,umask:ve,hrtime:ye,platform:ee,release:ne,config:ae,uptime:Ee},Ie="win32"===D(Object.freeze({__proto__:null,addListener:se,argv:te,binding:ge,browser:true,chdir:we,config:ae,cwd:he,default:Te,emit:de,env:re,hrtime:ye,nextTick:K,off:ue,on:ce,once:le,platform:ee,release:ne,removeAllListeners:fe,removeListener:pe,title:Y,umask:ve,uptime:Ee,version:"",versions:ie})).platform,ke=";",Se=":",xe=Ie?";":":",Pe="\\",je="/",Oe=Ie?"\\":"/",Le={};$(Le,"DELIMITER",xe),$(Le,"DELIMITER_POSIX",":"),$(Le,"DELIMITER_WIN32",";"),$(Le,"SEP",Oe),$(Le,"SEP_POSIX","/"),$(Le,"SEP_WIN32","\\");export{xe as DELIMITER,Se as DELIMITER_POSIX,ke as DELIMITER_WIN32,Oe as SEP,je as SEP_POSIX,Pe as SEP_WIN32,Le as default};
//# sourceMappingURL=mod.js.map