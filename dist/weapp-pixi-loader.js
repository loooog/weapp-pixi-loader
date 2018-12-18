!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("pixi.js"),require("spark-md5")):"function"==typeof define&&define.amd?define(["pixi.js","spark-md5"],e):"object"==typeof exports?exports.ResLoader=e(require("pixi.js"),require("spark-md5")):t.ResLoader=e(t["pixi.js"],t["spark-md5"])}(window,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=86)}([function(t,e,n){t.exports=n(80)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(33)("wks"),o=n(34),i=n(1).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(16);function o(t,e,n,o,i,c,u){try{var a=t[c](u),s=a.value}catch(t){return void n(t)}a.done?e(s):r.resolve(s).then(o,i)}t.exports=function(t){return function(){var e=this,n=arguments;return new r(function(r,i){var c=t.apply(e,n);function u(t){o(c,r,i,u,a,"next",t)}function a(t){o(c,r,i,u,a,"throw",t)}u(void 0)})}}},function(t,e,n){var r=n(9),o=n(31);t.exports=n(7)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(30)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(3),i=n(12),c=n(6),u=n(14),a=function(t,e,n){var s,f,l,p=t&a.F,h=t&a.G,v=t&a.S,y=t&a.P,d=t&a.B,m=t&a.W,x=h?o:o[e]||(o[e]={}),g=x.prototype,_=h?r:v?r[e]:(r[e]||{}).prototype;for(s in h&&(n=e),n)(f=!p&&_&&void 0!==_[s])&&u(x,s)||(l=f?_[s]:n[s],x[s]=h&&"function"!=typeof _[s]?n[s]:d&&f?i(l,r):m&&_[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((x.virtual||(x.virtual={}))[s]=l,t&a.R&&g&&!g[s]&&c(g,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(4),o=n(51),i=n(52),c=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){t.exports=n(48)},function(t,e,n){var r=n(44);t.exports=function(t,e,n){return e in t?r(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(e,n){e.exports=t},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!0},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(59),o=n(20);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(33)("keys"),o=n(34);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(9).f,o=n(14),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(13);function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},function(t,e,n){t.exports=n(82)},function(t,e,n){"use strict";var r=n(50)(!0);n(29)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(21),o=n(8),i=n(53),c=n(6),u=n(11),a=n(54),s=n(25),f=n(62),l=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,y,d,m){a(n,e,v);var x,g,_,w=function(t){if(!p&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",S="values"==y,P=!1,E=t.prototype,T=E[l]||E["@@iterator"]||y&&E[y],L=T||w(y),k=y?S?w("entries"):L:void 0,j="Array"==e&&E.entries||T;if(j&&(_=f(j.call(new t)))!==Object.prototype&&_.next&&(s(_,b,!0),r||"function"==typeof _[l]||c(_,l,h)),S&&T&&"values"!==T.name&&(P=!0,L=function(){return T.call(this)}),r&&!m||!p&&!P&&E[l]||c(E,l,L),u[e]=L,u[b]=h,y)if(x={values:S?L:w("values"),keys:d?L:w("keys"),entries:k},m)for(g in x)g in E||i(E,g,x[g]);else o(o.P+o.F*(p||P),e,x);return x}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(3),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){n(64);for(var r=n(1),o=n(6),i=n(11),c=n(2)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var s=u[a],f=r[s],l=f&&f.prototype;l&&!l[c]&&o(l,c,s),i[s]=i.Array}},function(t,e,n){var r=n(15),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(38),o=n(2)("iterator"),i=n(11);t.exports=n(3).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(4),o=n(13),i=n(2)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c=n(12),u=n(72),a=n(36),s=n(22),f=n(1),l=f.process,p=f.setImmediate,h=f.clearImmediate,v=f.MessageChannel,y=f.Dispatch,d=0,m={},x=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){x.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++d]=function(){u("function"==typeof t?t:Function(t),e)},r(d),d},h=function(t){delete m[t]},"process"==n(15)(l)?r=function(t){l.nextTick(c(x,t,1))}:y&&y.now?r=function(t){y.now(c(x,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=g,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),x.call(t)}}:function(t){setTimeout(c(x,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(4),o=n(10),i=n(26);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){t.exports=n(84)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(44);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,n){t.exports=e},function(t,e,n){n(49),n(28),n(37),n(67),n(78),n(79),t.exports=n(3).Promise},function(t,e){},function(t,e,n){var r=n(19),o=n(20);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=!n(7)&&!n(30)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";var r=n(55),o=n(31),i=n(25),c={};n(6)(c,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(56),i=n(35),c=n(24)("IE_PROTO"),u=function(){},a=function(){var t,e=n(22)("iframe"),r=i.length;for(e.style.display="none",n(36).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[c]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(9),o=n(4),i=n(57);t.exports=n(7)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,a=0;u>a;)r.f(t,n=c[a++],e[n]);return t}},function(t,e,n){var r=n(58),o=n(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(14),o=n(23),i=n(60)(!1),c=n(24)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)n!=c&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(23),o=n(32),i=n(61);t.exports=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(14),o=n(63),i=n(24)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(65),o=n(66),i=n(11),c=n(23);t.exports=n(29)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,c,u=n(21),a=n(1),s=n(12),f=n(38),l=n(8),p=n(10),h=n(13),v=n(68),y=n(69),d=n(40),m=n(41).set,x=n(73)(),g=n(26),_=n(42),w=n(74),b=n(43),S=a.TypeError,P=a.process,E=P&&P.versions,T=E&&E.v8||"",L=a.Promise,k="process"==f(P),j=function(){},O=o=g.f,F=!!function(){try{var t=L.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(j,j)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof e&&0!==T.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;x(function(){for(var r=t._v,o=1==t._s,i=0,c=function(e){var n,i,c,u=o?e.ok:e.fail,a=e.resolve,s=e.reject,f=e.domain;try{u?(o||(2==t._h&&C(t),t._h=1),!0===u?n=r:(f&&f.enter(),n=u(r),f&&(f.exit(),c=!0)),n===e.promise?s(S("Promise-chain cycle")):(i=R(n))?i.call(n,a,s):a(n)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};n.length>i;)c(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)})}},A=function(t){m.call(a,function(){var e,n,r,o=t._v,i=N(t);if(i&&(e=_(function(){k?P.emit("unhandledRejection",o,t):(n=a.onunhandledrejection)?n({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=k||N(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){m.call(a,function(){var e;k?P.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},G=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=R(t))?x(function(){var r={_w:n,_d:!1};try{e.call(t,s(G,r,1),s(I,r,1))}catch(t){I.call(r,t)}}):(n._v=t,n._s=1,M(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};F||(L=function(t){v(this,L,"Promise","_h"),h(t),r.call(this);try{t(s(G,this,1),s(I,this,1))}catch(t){I.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(75)(L.prototype,{then:function(t,e){var n=O(d(this,L));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?P.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(G,t,1),this.reject=s(I,t,1)},g.f=O=function(t){return t===L||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!F,{Promise:L}),n(25)(L,"Promise"),n(76)("Promise"),c=n(3).Promise,l(l.S+l.F*!F,"Promise",{reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!F),"Promise",{resolve:function(t){return b(u&&this===c?L:this,t)}}),l(l.S+l.F*!(F&&n(77)(function(t){L.all(t).catch(j)})),"Promise",{all:function(t){var e=this,n=O(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,c=1;y(t,!1,function(t){var u=i++,a=!1;n.push(void 0),c++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=O(e),r=n.reject,o=_(function(){y(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(12),o=n(70),i=n(71),c=n(4),u=n(32),a=n(39),s={},f={};(e=t.exports=function(t,e,n,l,p){var h,v,y,d,m=p?function(){return t}:a(t),x=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>g;g++)if((d=e?x(c(v=t[g])[0],v[1]):x(t[g]))===s||d===f)return d}else for(y=m.call(t);!(v=y.next()).done;)if((d=o(y,x,v.value,e))===s||d===f)return d}).BREAK=s,e.RETURN=f},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(11),o=n(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(1),o=n(41).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==n(15)(c);t.exports=function(){var t,e,n,s=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(a)n=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(1).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(6);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(1),o=n(3),i=n(9),c=n(7),u=n(2)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(2)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(8),o=n(3),i=n(1),c=n(40),u=n(43);r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(8),o=n(26),i=n(42);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(81),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=_;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",y={},d={};d[c]=function(){return this};var m=Object.getPrototypeOf,x=m&&m(m(F([])));x&&x!==r&&o.call(x,c)&&(d=x);var g=P.prototype=b.prototype=Object.create(d);S.prototype=g.constructor=P,P.constructor=S,P[a]=S.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},f.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[u]=function(){return this},f.AsyncIterator=T,f.async=function(t,e,n,r){var o=new T(_(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(g),g[a]="Generator",g[c]=function(){return this},g.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=F,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var a=o.call(c,"catchLoc"),s=o.call(c,"finallyLoc");if(a&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function _(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new O(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return R()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var a=w(t,e,n);if("normal"===a.type){if(r=n.done?v:p,a.arg===y)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=v,n.method="throw",n.arg=a.arg)}}}(t,n,c),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function S(){}function P(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,c){var u=w(t[n],t,r);if("throw"!==u.type){var a=u.arg,s=a.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},function(t){return e("throw",t,i,c)})}c(u.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function F(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,n){n(37),n(28),t.exports=n(83)},function(t,e,n){var r=n(4),o=n(39);t.exports=n(3).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){n(85);var r=n(3).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(8);r(r.S+r.F*!n(7),"Object",{defineProperty:n(9).f})},function(t,e,n){"use strict";n.r(e);var r=n(16),o=n.n(r),i=n(0),c=n.n(i),u=n(27),a=n.n(u),s=n(5),f=n.n(s),l=n(45),p=n.n(l),h=n(46),v=n.n(h),y=n(17),d=n.n(y),m=n(18),x=n(47),g=n.n(x),_=function(){function t(e,n,r){p()(this,t),wx.cloud.init({env:e}),this.cloudPath=n,this.localPath=wx.env.USER_DATA_PATH,this.entryFileName=r,this.fs=wx.getFileSystemManager(),this.resources=[]}return v()(t,[{key:"_syncLocalFile",value:function(){var t=f()(c.a.mark(function t(e,n){var r,o,i,u,s,f,l,p,h,v,y,d=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=this.localPath+"/"+e,o=this.cloudPath+"/"+e,i=!1;try{this.fs.accessSync(r)}catch(t){i=!0}if(i||((new g.a.ArrayBuffer).append(this.fs.readFileSync(r)).end(!1)===n?i=!1:(this.fs.unlinkSync(r),i=!0)),!i){t.next=29;break}for(u=e.split("/").slice(0,-1),s=this.localPath+"/",f=!0,l=!1,p=void 0,t.prev=11,h=a()(u);!(f=(v=h.next()).done);f=!0){y=v.value,s+="/"+y;try{this.fs.accessSync(s)}catch(t){this.fs.mkdirSync(s)}}t.next=19;break;case 15:t.prev=15,t.t0=t.catch(11),l=!0,p=t.t0;case 19:t.prev=19,t.prev=20,f||null==h.return||h.return();case 22:if(t.prev=22,!l){t.next=25;break}throw p;case 25:return t.finish(22);case 26:return t.finish(19);case 27:return t.next=29,wx.cloud.downloadFile({fileID:o}).then(function(t){d.fs.saveFileSync(t.tempFilePath,r)}).catch(console.error);case 29:case"end":return t.stop()}},t,this,[[11,15,19,27],[20,,22,26]])}));return function(e,n){return t.apply(this,arguments)}}()},{key:"sync",value:function(t){var e=this;"function"==typeof onComplete&&(this.onSyncComplete=t),wx.cloud.downloadFile({fileID:this.cloudPath+"/"+this.entryFileName,success:function(t){e.fs.saveFile({tempFilePath:t.tempFilePath,filePath:e.localPath+"/"+e.entryFileName,success:function(t){e.fs.readFile({filePath:t.savedFilePath,encoding:"utf-8",success:function(){var t=f()(c.a.mark(function t(n){var r,o,i,u,s,f,l,p;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.assetList=JSON.parse(n.data),r=0,o=e.assetList.length,i=!0,u=!1,s=void 0,t.prev=6,f=a()(e.assetList);case 8:if(i=(l=f.next()).done){t.next=16;break}return p=l.value,t.next=12,e._syncLocalFile(p.filename,p.md5);case 12:"function"==typeof e.onSyncProgress&&e.onSyncProgress(p.filename,++r/o);case 13:i=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),u=!0,s=t.t0;case 22:t.prev=22,t.prev=23,i||null==f.return||f.return();case 25:if(t.prev=25,!u){t.next=28;break}throw s;case 28:return t.finish(25);case 29:return t.finish(22);case 30:"function"==typeof e.onSyncComplete&&e.onSyncComplete();case 31:case"end":return t.stop()}},t,this,[[6,18,22,30],[23,,25,29]])}));return function(e){return t.apply(this,arguments)}}(),fail:console.error})},fail:console.error})},fail:console.error})}},{key:"addTexture",value:function(e,n){return this.resources.push({id:e.trim().length>0?e.trim():n.trim(),file:n.trim(),type:t.RES_TYPE_TEXTURE}),this}},{key:"addSpriteSheet",value:function(e,n){return this.resources.push({id:e,file:n.trim(),type:t.RES_TYPE_SPRITE_SHEET}),this}},{key:"addFont",value:function(e,n){return this.resources.push({id:e,file:n.trim(),type:t.RES_TYPE_FONT}),this}},{key:"_getFilePath",value:function(t){var e=t;try{this.fs.accessSync(e)}catch(n){e=this.localPath+"/"+t}try{this.fs.accessSync(e)}catch(e){return"function"==typeof this.onLoadError&&this.onLoadError(t,"resource file does not found"),!1}return e}},{key:"_loadBaseTexture",value:function(){var t=f()(c.a.mark(function t(e){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=this._getFilePath(e))){t.next=3;break}return t.abrupt("return",new o.a(function(t){var e=wx.createImage();e.src=n,e.onload=function(){return t(m.BaseTexture.from(e))}}));case 3:return t.abrupt("return",!1);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"loadTexture",value:function(){var t=f()(c.a.mark(function t(e,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._loadBaseTexture(n);case 2:if(!(r=t.sent)){t.next=6;break}return m.Texture.addToCache(r,e),t.abrupt("return",!0);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"loadSpritesheet",value:function(){var t=f()(c.a.mark(function t(e,n){var r,i,u=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this._getFilePath(e),i=this._loadBaseTexture(n),!r||!i){t.next=6;break}return t.next=5,new o.a(function(t){new m.Spritesheet(i,JSON.parse(u.fs.readFileSync(r,"utf-8"))).parse(t)});case 5:return t.abrupt("return",t.sent);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"load",value:function(){var e=f()(c.a.mark(function e(n){var r,o,i,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"function"==typeof n&&(this.onLoadComplete=n),r=this.resources.length,o=0,i=0;case 4:if(!(i<this.resources.length)){e.next=23;break}if((u=this.resources[i]).type!==t.RES_TYPE_TEXTURE){e.next=11;break}return e.next=9,this.loadTexture(u.id,u.file);case 9:e.next=19;break;case 11:if(u.type!==t.RES_TYPE_SPRITE_SHEET){e.next=16;break}return e.next=14,this.loadSpritesheet(u.id,u.file);case 14:e.next=19;break;case 16:if(u.type!==t.RES_TYPE_FONT){e.next=19;break}return e.next=19,this.loadFont(u.id,u.file);case 19:"function"==typeof this.onLoadProgress&&this.onLoadProgress(u,++o/r);case 20:i++,e.next=4;break;case 23:"function"==typeof this.onLoadComplete&&this.onLoadComplete();case 24:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}();d()(_,"RES_TYPE_TEXTURE",0),d()(_,"RES_TYPE_SPRITE_SHEET",1),d()(_,"RES_TYPE_FONT",2);e.default=_}])});
//# sourceMappingURL=weapp-pixi-loader.js.map