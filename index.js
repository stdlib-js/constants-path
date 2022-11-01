// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).constants={})}(this,(function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty,r=Object.prototype,n=r.toString,i=r.__defineGetter__,a=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__;var f=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,t,o){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof o||null===o||"[object Array]"===n.call(o))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+o+"`.");if((c="value"in o)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=r,delete e[t],e[t]=o.value,e.__proto__=f):e[t]=o.value),p="get"in o,_="set"in o,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,o.get),_&&a&&a.call(e,t,o.set),e};function c(e,t,o){f(e,t,{configurable:!1,enumerable:!0,writable:!1,value:o})}var p="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof p.setTimeout&&setTimeout,"function"==typeof p.clearTimeout&&clearTimeout;function _(e,t){this.fun=e,this.array=t}_.prototype.run=function(){this.fun.apply(null,this.array)};var s=p.performance||{};s.now||s.mozNow||s.msNow||s.oNow||s.webkitNow;new Date;var d="win32"==="browser",y=d?";":":",b=d?"\\":"/",w={};c(w,"DELIMITER",y),c(w,"DELIMITER_POSIX",":"),c(w,"DELIMITER_WIN32",";"),c(w,"SEP",b),c(w,"SEP_POSIX","/"),c(w,"SEP_WIN32","\\"),e.DELIMITER=y,e.DELIMITER_POSIX=":",e.DELIMITER_WIN32=";",e.SEP=b,e.SEP_POSIX="/",e.SEP_WIN32="\\",e.default=w,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
