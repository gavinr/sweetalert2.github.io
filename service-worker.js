"use strict";var precacheConfig=[["images/apple-touch-icon.png","4fb66653e121f005c8511820e5a44266"],["images/favicon.ico","03be26165f012b3fbcec1379ba67caf0"],["images/favicon.png","74f9b8444e4993216df3db95c3d59651"],["images/manifest/192x192.png","4a7de04cf01c50de6dd78266e18eb22d"],["images/manifest/512x512.png","333d9e60c9b78bbc7ffb0b7ac4e27e76"],["images/nyan-cat.gif","ed012259c25cd0a787064216db37c22d"],["images/patreon.png","767d973477dd75db77d69b36069ff2b2"],["images/paypal.png","c778a49ceefcf7c38f5e95b4ce6df31f"],["images/robot.jpg","ce3c34d78ddfb363b8934d24b0f5843b"],["images/swal2-error.png","fa0eff93b6730737daaf911759211444"],["images/swal2-info.png","87c45e343b53ac531b362c885ffb4caf"],["images/swal2-logo.png","de51b00d829faa4446d504267c98c6f3"],["images/swal2-question.png","a618e7e269092e95b42ea54dc59f91ba"],["images/swal2-success.png","dc5c258d746ad9ff58142f21df6ce7ae"],["images/swal2-warning.png","9e6f1911da6137a0e0cfa3d886f87d11"],["images/sweetalert2.gif","f072d119be4822eeeaf6687203c9ecdb"],["images/trees.png","8c3a9c2fb4650bf822f9ffbe0c1cb890"],["images/vs_icon.png","e65e2e9e9afbba5d48663bd463de0b25"],["images/vs_icon@2x.png","e8b6fab3d53d3bcf6e25f65b8345196a"],["js/bundle.js","22262c654c0190d03494d1a07046ad75"],["styles/bootstrap4-buttons.css","32b9f1e04b689e0c4aab5a39e9af7b7e"],["styles/carbon-ads.css","3fe3afde86eb3b5374faf58089845d3e"],["styles/styles.css","c2837267e0cbe86e93411876ebfd90b2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function a(s,c,i){function u(n,e){if(!c[n]){if(!s[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(f)return f(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=c[n]={exports:{}};s[n][0].call(o.exports,function(e){var t=s[n][1][e];return u(t||e)},o,o.exports,a,s,c,i)}return c[n].exports}for(var f="function"==typeof require&&require,e=0;e<i.length;e++)u(i[e]);return u}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||c.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||c.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,c=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,o){var t=(o=o||{}).successResponses||c.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&a(o).then(function(n){n.put(r,e).then(function(){var e,t=o.cache||c.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,o=t.maxAgeSeconds,a=t.maxEntries,s=t.name,c=Date.now();return i("Updating LRU order for "+r+". Max entries is "+a+", max age is "+o),u.getDb(s).then(function(e){return u.setTimestampForUrl(e,r,c)}).then(function(e){return u.expireEntries(e,a,o,c)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),s=s?s.then(e):e())})}),e.clone()})},openCache:a,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return a(e).then(function(e){return e.add(t)})},uncache:function(t,e){return a(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),c.preCacheItems=c.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var o="sw-toolbox-",a=1,u="store",f="url",h="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(o+r,a);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:f}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),s[e];var r},setTimestampForUrl:function(r,o,a){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:a}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return(s=e,c=t,i=r,c?new Promise(function(e,t){var r=1e3*c,o=[],n=s.transaction(u,"readwrite"),a=n.objectStore(u);a.index(h).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&i-r>t.value[h]){var n=t.value[f];o.push(n),a.delete(n),t.continue()}},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(t){return(r=e,i=n,i?new Promise(function(e,t){var o=[],n=r.transaction(u,"readwrite"),a=n.objectStore(u),s=a.index(h),c=s.count();s.count().onsuccess=function(){var r=c.result;i<r&&(s.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[f];o.push(n),a.delete(n),r-o.length>i&&t.continue()}})},n.oncomplete=function(){e(o)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var s,c,i}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(s.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var o=new URL("./",self.location).pathname,a=e("path-to-regexp"),r=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=r,this.handler=n};r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){var u=e("./route"),f=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){var o;r=r||{},t instanceof RegExp?o=RegExp:o=(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var a=new u(e,t,n,r);this.routes.has(o)||this.routes.set(o,new Map);var s=this.routes.get(o);s.has(e)||s.set(e,new Map);var c=s.get(e),i=a.regexp||a.fullUrlRegExp;c.has(i.source)&&f.debug('"'+t+'" resolves to same regex as existing route.'),c.set(i.source,a)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var s=c(a,n);if(0<s.length)return s[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var a=e("../options"),s=e("../helpers");t.exports=function(r,e,o){return o=o||{},s.debug("Strategy: cache first ["+r.url+"]",o),s.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||a.cache,n=Date.now();return s.isResponseFresh(e,t.maxAgeSeconds,n)?e:s.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var o=e("../options"),a=e("../helpers");t.exports=function(t,e,r){return r=r||{},a.debug("Strategy: cache only ["+t.url+"]",r),a.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(s,c,i){return u.debug("Strategy: fastest ["+s.url+"]",i),new Promise(function(t,n){var r=!1,o=[],a=function(e){o.push(e.toString()),r?n(new Error('Both cache and network failed: "'+o.join('", "')+'"')):r=!0},e=function(e){e instanceof Response?t(e):a("No result returned")};u.fetchAndCache(s.clone(),i).then(e,a),f(s,c,i).then(e,a)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var f=e("../options"),h=e("../helpers");t.exports=function(s,e,c){var i=(c=c||{}).successResponses||f.successResponses,u=c.networkTimeoutSeconds||f.networkTimeoutSeconds;return h.debug("Strategy: network first ["+s.url+"]",c),h.openCache(c).then(function(e){var t,n,r=[];if(u){var o=new Promise(function(o){t=setTimeout(function(){e.match(s).then(function(e){var t=c.cache||f.cache,n=Date.now(),r=t.maxAgeSeconds;h.isResponseFresh(e,r,n)&&o(e)})},1e3*u)});r.push(o)}var a=h.fetchAndCache(s,c).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw h.debug("Response was an HTTP error: "+e.statusText,c),n=e,new Error("Bad response")}).catch(function(t){return h.debug("Network or response error, fallback to cache ["+s.url+"]",c),e.match(s).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(a),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),s=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function a(e,t){for(var n,r=[],o=0,a=0,s="",c=t&&t.delimiter||"/";null!=(n=k.exec(e));){var i=n[0],u=n[1],f=n.index;if(s+=e.slice(a,f),a=f+i.length,u)s+=u[1];else{var h=e[a],l=n[2],p=n[3],d=n[4],m=n[5],g=n[6],v=n[7];s&&(r.push(s),s="");var w=null!=l&&null!=h&&h!==l,b="+"===g||"*"===g,x="?"===g||"*"===g,y=n[2]||c,E=d||m;r.push({name:p||o++,prefix:l||"",delimiter:y,optional:x,repeat:b,partial:w,asterisk:!!v,pattern:E?(R=E,R.replace(/([=!:$\/()])/g,"\\$1")):v?".*":"[^"+C(y)+"]+?"})}}var R;return a<e.length&&(s+=e.substr(a)),s&&r.push(s),r}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==typeof f[e]&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?l:encodeURIComponent,a=0;a<f.length;a++){var s=f[a];if("string"!=typeof s){var c,i=r[s.name];if(null==i){if(s.optional){s.partial&&(n+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(m(i)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var u=0;u<i.length;u++){if(c=o(i[u]),!h[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");n+=(0===u?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(i),!h[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');n+=s.prefix+c}}else n+=s}return n}}function C(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function s(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",s=0;s<e.length;s++){var c=e[s];if("string"==typeof c)a+=C(c);else{var i=C(c.prefix),u="(?:"+c.pattern+")";t.push(c),c.repeat&&(u+="(?:"+i+u+")*"),a+=u=c.optional?c.partial?i+"("+u+")?":"(?:"+i+"("+u+"))?":i+"("+u+")"}}var f=C(n.delimiter||"/"),h=a.slice(-f.length)===f;return r||(a=(h?a.slice(0,-f.length):a)+"(?:"+f+"(?=$))?"),a+=o?"$":r&&h?"":"(?="+f+"|$)",p(new RegExp("^"+a,d(n)),t)}function c(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(c(e[o],t,n).source);return p(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):(r=t,s(a(e,o=n),r,o));var r,o}var m=e("isarray");t.exports=c,t.exports.parse=a,t.exports.compile=function(e,t){return r(a(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=s;var k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/",toolbox.networkFirst,{}),toolbox.router.get(/^https:\/\/cdn\.jsdelivr\.net\/npm\/.*/,toolbox.networkFirst,{}),toolbox.router.get(/^https:\/\/unsplash\.it\/400\/200\/\?random/,toolbox.networkFirst,{});