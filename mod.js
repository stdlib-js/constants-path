// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,l){var c,f,s,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=l.value,e.__proto__=c):e[t]=l.value),s="get"in l,p="set"in l,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,t,l.get),p&&i&&i.call(e,t,l.set),e};function c(e,t,r){l(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}function f(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var s="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function p(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}var m=p,_=d;function v(e){if(m===setTimeout)return setTimeout(e,0);if((m===p||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(t){try{return m.call(null,e,0)}catch(t){return m.call(this,e,0)}}}"function"==typeof s.setTimeout&&(m=setTimeout),"function"==typeof s.clearTimeout&&(_=clearTimeout);var w,h=[],b=!1,y=-1;function g(){b&&w&&(b=!1,w.length?h=w.concat(h):y=-1,h.length&&T())}function T(){if(!b){var e=v(g);b=!0;for(var t=h.length;t;){for(w=h,h=[];++y<t;)w&&w[y].run();y=-1,t=h.length}w=null,b=!1,function(e){if(_===clearTimeout)return clearTimeout(e);if((_===d||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(e);try{_(e)}catch(t){try{return _.call(null,e)}catch(t){return _.call(this,e)}}}(e)}}function E(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new I(e,t)),1!==h.length||b||v(T)}function I(e,t){this.fun=e,this.array=t}I.prototype.run=function(){this.fun.apply(null,this.array)};var P={},j=[],O={},S={},L={};function D(){}var k=D,M=D,N=D,A=D,R=D,x=D,W=D;function X(e){throw new Error("process.binding is not supported")}function z(){return"/"}function G(e){throw new Error("process.chdir is not supported")}function V(){return 0}var C=s.performance||{},F=C.now||C.mozNow||C.msNow||C.oNow||C.webkitNow||function(){return(new Date).getTime()};function q(e){var t=.001*F.call(C),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var B=new Date;function H(){return(new Date-B)/1e3}var J={nextTick:E,title:"browser",browser:true,env:P,argv:j,version:"",versions:O,on:k,addListener:M,once:N,off:A,removeListener:R,removeAllListeners:x,emit:W,binding:X,cwd:z,chdir:G,umask:V,hrtime:q,platform:"browser",release:S,config:L,uptime:H},K="win32"===f(Object.freeze({__proto__:null,addListener:M,argv:j,binding:X,browser:true,chdir:G,config:L,cwd:z,default:J,emit:W,env:P,hrtime:q,nextTick:E,off:A,on:k,once:N,platform:"browser",release:S,removeAllListeners:x,removeListener:R,title:"browser",umask:V,uptime:H,version:"",versions:O})).platform,Q=";",U=":",Y=K?";":":",Z="\\",$="/",ee=K?"\\":"/",te={};c(te,"DELIMITER",Y),c(te,"DELIMITER_POSIX",":"),c(te,"DELIMITER_WIN32",";"),c(te,"SEP",ee),c(te,"SEP_POSIX","/"),c(te,"SEP_WIN32","\\");export{Y as DELIMITER,U as DELIMITER_POSIX,Q as DELIMITER_WIN32,ee as SEP,$ as SEP_POSIX,Z as SEP_WIN32,te as default};
//# sourceMappingURL=mod.js.map
