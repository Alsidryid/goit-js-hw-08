!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(t){return t&&t.constructor===Symbol?"symbol":typeof t}var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(t,e,n){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(r);function b(e){var n=i,r=o;return i=o=void 0,l=e,f=t.apply(r,n)}function j(t){return l=t,a=setTimeout(T,e),d?b(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=y();if(w(t))return O(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,u-(t-l)):n}(t))}function O(t){return a=void 0,v&&i?b(t):(i=o=void 0,f)}function x(){var t=y(),n=w(t);if(i=arguments,o=this,c=t,n){if(void 0===a)return j(c);if(s)return a=setTimeout(T,e),b(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=h(e)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(h(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},x.flush=function(){return void 0===a?f:O(y())},x}function g(t){var e=void 0===t?"undefined":i(t);return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":i(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=f.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):u.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:i,maxWait:e,trailing:o})};var j=document.querySelector("iframe"),w=new Vimeo.Player(j);w.on("timeupdate",t(e)((function(t){var e=t.seconds;localStorage.setItem("videoplayer-current-time",e)}),1e3)),w.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(t){})).catch((function(t){t.name}))}();
//# sourceMappingURL=02-video.586a9238.js.map
