(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{gcOT:function(t,e,n){"use strict";var r,i=function(t){return t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS",t}({}),o=function(t){return t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl",t}({}),s=function(t){return t.Application="APPLICATION",t.Documents="DOCUMENTS",t.Data="DATA",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE",t}({}),a=function(t){return t.Camera="camera",t.Photos="photos",t.Geolocation="geolocation",t.Notifications="notifications",t.ClipboardRead="clipboard-read",t.ClipboardWrite="clipboard-write",t}({}),u=((r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Capacitor=r.Capacitor||new(function(){function t(){var t=this;this.platform="web",this.isNative=!1,this.Plugins={},this.Plugins=new Proxy(this.Plugins,{get:function(e,n){if(void 0===e[n]){var r=t;return new Proxy({},{get:function(t,e){return void 0===t[e]?r.pluginMethodNoop.bind(r,t,e,n):t[e]}})}return e[n]}})}return t.prototype.pluginMethodNoop=function(t,e,n){return Promise.reject(n+" does not have web implementation.")},t.prototype.getPlatform=function(){return this.platform},t.prototype.isPluginAvailable=function(t){return this.Plugins.hasOwnProperty(t)},t.prototype.convertFileSrc=function(t){return t},t.prototype.handleError=function(t){console.error(t)},t}())).Plugins,c=new(function(){function t(){this.plugins={},this.loadedPlugins={}}return t.prototype.addPlugin=function(t){this.plugins[t.config.name]=t},t.prototype.getPlugin=function(t){return this.plugins[t]},t.prototype.loadPlugin=function(t){var e=this.getPlugin(t);e?e.load():console.error("Unable to load web plugin "+t+", no such plugin found.")},t.prototype.getPlugins=function(){var t=[];for(var e in this.plugins)t.push(this.plugins[e]);return t},t}()),d=function(){function t(t,e){this.config=t,this.loaded=!1,this.listeners={},this.windowListeners={},e?e.addPlugin(this):c.addPlugin(this)}return t.prototype.addWindowListener=function(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0},t.prototype.removeWindowListener=function(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)},t.prototype.addListener=function(t,e){var n=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e);var r=this.windowListeners[t];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(t,e)}}},t.prototype.removeListener=function(t,e){var n=this.listeners[t];if(n){var r=n.indexOf(e);this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}},t.prototype.notifyListeners=function(t,e){var n=this.listeners[t];n&&n.forEach((function(t){return t(e)}))},t.prototype.hasListeners=function(t){return!!this.listeners[t].length},t.prototype.registerWindowListener=function(t,e){var n=this;this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:function(t){n.notifyListeners(e,t)}}},t.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},t.prototype.load=function(){this.loaded=!0},t}(),l=function(t,e){t.hasOwnProperty(e.config.name)&&!function(t){return t.config.platforms&&t.config.platforms.indexOf(Capacitor.platform)>=0}(e)||(t[e.config.name]=e)},h=n("mrSG"),p=(new(function(t){function e(){return t.call(this,{name:"Accessibility",platforms:["web"]})||this}return h.c(e,t),e.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")},e.prototype.speak=function(t){if(!("speechSynthesis"in window))return Promise.reject("Browser does not support the Speech Synthesis API");var e=new SpeechSynthesisUtterance(t.value);return t.language&&(e.lang=t.language),window.speechSynthesis.speak(e),Promise.resolve()},e}(d)),new(function(t){function e(){var e=t.call(this,{name:"App",platforms:["web"]})||this;return"undefined"!=typeof document&&document.addEventListener("visibilitychange",e.handleVisibilityChange.bind(e),!1),e}return h.c(e,t),e.prototype.exitApp=function(){throw new Error("Method not implemented.")},e.prototype.canOpenUrl=function(t){return Promise.resolve({value:!0})},e.prototype.openUrl=function(t){return Promise.resolve({completed:!0})},e.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})},e.prototype.handleVisibilityChange=function(){var t={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",t)},e}(d)),new(function(t){function e(){return t.call(this,{name:"Browser",platforms:["web"]})||this}return h.c(e,t),e.prototype.open=function(t){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return this._lastWindow=window.open(t.url,t.windowName||"_blank"),[2,Promise.resolve()]}))}))},e.prototype.prefetch=function(t){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return[2,Promise.resolve()]}))}))},e.prototype.close=function(){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]}))}))},e}(d)),new(function(t){function e(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return h.c(e,t),e.prototype.getPhoto=function(t){return h.b(this,void 0,void 0,(function(){var e=this;return h.d(this,(function(n){return[2,new Promise((function(n,r){return h.b(e,void 0,void 0,(function(){var e,i=this;return h.d(this,(function(o){switch(o.label){case 0:return e=document.createElement("pwa-camera-modal"),document.body.appendChild(e),[4,e.componentOnReady()];case 1:return o.sent(),e.addEventListener("onPhoto",(function(o){return h.b(i,void 0,void 0,(function(){var i,s;return h.d(this,(function(a){switch(a.label){case 0:return null!==(i=o.detail)?[3,1]:(r("User cancelled photos app"),[3,4]);case 1:return i instanceof Error?(r(i.message),[3,4]):[3,2];case 2:return s=n,[4,this._getCameraPhoto(i,t)];case 3:s.apply(void 0,[a.sent()]),a.label=4;case 4:return e.dismiss(),document.body.removeChild(e),[2]}}))}))})),e.present(),[2]}}))}))}))]}))}))},e.prototype._getCameraPhoto=function(t,e){return new Promise((function(n,r){var i=new FileReader,s=t.type.split("/")[1];e.resultType==o.Uri?n({webPath:URL.createObjectURL(t),format:s}):(i.readAsDataURL(t),i.onloadend=function(){var t=i.result;n(e.resultType==o.DataUrl?{dataUrl:t,format:s}:{base64String:t.split(",")[1],format:s})},i.onerror=function(t){r(t)})}))},e}(d)),new(function(t){function e(){return t.call(this,{name:"Clipboard",platforms:["web"]})||this}return h.c(e,t),e.prototype.write=function(t){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){switch(e.label){case 0:return navigator.clipboard?t.string||t.url?[4,navigator.clipboard.writeText(t.string||t.url)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return e.sent(),[3,3];case 2:if(t.image)return[2,Promise.reject("Setting images not supported on the web")];e.label=3;case 3:return[2,Promise.resolve()]}}))}))},e.prototype.read=function(t){return h.b(this,void 0,void 0,(function(){var e,n,r,i,o;return h.d(this,(function(s){switch(s.label){case 0:return navigator.clipboard?"string"!==t.type&&"url"!==t.type?[3,2]:[4,navigator.clipboard.readText()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return e=s.sent(),[2,Promise.resolve({value:e})];case 2:return[4,navigator.clipboard.read()];case 3:for(n=s.sent(),r=0,i=n.items;r<i.length;r++)if("text/plain"===(o=i[r]).type)return[2,Promise.resolve({value:o.getAs("text/plain")})];s.label=4;case 4:return[2,Promise.reject("Unable to get data from clipboard")]}}))}))},e}(d)),new(function(t){function e(){var e=t.call(this,{name:"Filesystem",platforms:["web"]})||this;return e.DEFAULT_DIRECTORY=s.Data,e.DB_VERSION=1,e.DB_NAME="Disc",e._writeCmds=["add","put","delete"],e}return h.c(e,t),e.prototype.initDb=function(){return h.b(this,void 0,void 0,(function(){var t=this;return h.d(this,(function(n){if(void 0!==this._db)return[2,this._db];if(!("indexedDB"in window))throw new Error("This browser doesn't support IndexedDB");return[2,new Promise((function(n,r){var i=indexedDB.open(t.DB_NAME,t.DB_VERSION);i.onupgradeneeded=e.doUpgrade,i.onsuccess=function(){t._db=i.result,n(i.result)},i.onerror=function(){return r(i.error)},i.onblocked=function(){console.warn("db blocked")}}))]}))}))},e.doUpgrade=function(t){var e=t.target.result;switch(t.oldVersion){case 0:case 1:default:e.objectStoreNames.contains("FileStorage")&&e.deleteObjectStore("FileStorage"),e.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}},e.prototype.dbRequest=function(t,e){return h.b(this,void 0,void 0,(function(){var n;return h.d(this,(function(r){return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",[2,this.initDb().then((function(r){return new Promise((function(i,o){var s=r.transaction(["FileStorage"],n).objectStore("FileStorage"),a=s[t].apply(s,e);a.onsuccess=function(){return i(a.result)},a.onerror=function(){return o(a.error)}}))}))]}))}))},e.prototype.dbIndexRequest=function(t,e,n){return h.b(this,void 0,void 0,(function(){var r;return h.d(this,(function(i){return r=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly",[2,this.initDb().then((function(i){return new Promise((function(o,s){var a=i.transaction(["FileStorage"],r).objectStore("FileStorage").index(t),u=a[e].apply(a,n);u.onsuccess=function(){return o(u.result)},u.onerror=function(){return s(u.error)}}))}))]}))}))},e.prototype.getPath=function(t,e){t=t||this.DEFAULT_DIRECTORY;var n=void 0!==e?e.replace(/^[/]+|[/]+$/g,""):"",r="/"+t;return""!==e&&(r+="/"+n),r},e.prototype.clear=function(){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){switch(t.label){case 0:return[4,this.initDb()];case 1:return t.sent().transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear(),[2,{}]}}))}))},e.prototype.readFile=function(t){return h.b(this,void 0,void 0,(function(){var e,n;return h.d(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:if(void 0===(n=r.sent()))throw Error("File does not exist.");return[2,{data:n.content}]}}))}))},e.prototype.writeFile=function(t){return h.b(this,void 0,void 0,(function(){var e,n,r,i,o,s,a;return h.d(this,(function(u){switch(u.label){case 0:return e=this.getPath(t.directory,t.path),n=t.data,[4,this.dbRequest("get",[e])];case 1:if((r=u.sent())&&"directory"===r.type)throw"The supplied path is a directory.";return i=e.substr(0,e.lastIndexOf("/")),[4,this.dbRequest("get",[i])];case 2:return void 0!==u.sent()?[3,4]:-1===(o=i.indexOf("/",1))?[3,4]:(s=i.substr(o),[4,this.mkdir({path:s,directory:t.directory,createIntermediateDirectories:!0})]);case 3:u.sent(),u.label=4;case 4:return a=Date.now(),[4,this.dbRequest("put",[{path:e,folder:i,type:"file",size:n.length,ctime:a,mtime:a,content:n}])];case 5:return u.sent(),[2,{}]}}))}))},e.prototype.appendFile=function(t){return h.b(this,void 0,void 0,(function(){var e,n,r,i,o,s,a;return h.d(this,(function(u){switch(u.label){case 0:return e=this.getPath(t.directory,t.path),n=t.data,r=e.substr(0,e.lastIndexOf("/")),i=Date.now(),o=i,[4,this.dbRequest("get",[e])];case 1:if((s=u.sent())&&"directory"===s.type)throw"The supplied path is a directory.";return[4,this.dbRequest("get",[r])];case 2:return void 0!==u.sent()?[3,4]:(a=r.substr(r.indexOf("/",1)),[4,this.mkdir({path:a,directory:t.directory,createIntermediateDirectories:!0})]);case 3:u.sent(),u.label=4;case 4:return void 0!==s&&(n=s.content+n,o=s.ctime),[4,this.dbRequest("put",[{path:e,folder:r,type:"file",size:n.length,ctime:o,mtime:i,content:n}])];case 5:return u.sent(),[2,{}]}}))}))},e.prototype.deleteFile=function(t){return h.b(this,void 0,void 0,(function(){var e;return h.d(this,(function(n){switch(n.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:if(void 0===n.sent())throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)])];case 2:if(0!==n.sent().length)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[e])];case 3:return n.sent(),[2,{}]}}))}))},e.prototype.mkdir=function(t){return h.b(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,u;return h.d(this,(function(c){switch(c.label){case 0:return e=this.getPath(t.directory,t.path),n=t.createIntermediateDirectories,r=e.substr(0,e.lastIndexOf("/")),i=(e.match(/\//g)||[]).length,[4,this.dbRequest("get",[r])];case 1:return o=c.sent(),[4,this.dbRequest("get",[e])];case 2:if(s=c.sent(),1===i)throw Error("Cannot create Root directory");if(void 0!==s)throw Error("Current directory does already exist.");if(!n&&2!==i&&void 0===o)throw Error("Parent directory must exist");return n&&2!==i&&void 0===o?(a=r.substr(r.indexOf("/",1)),[4,this.mkdir({path:a,directory:t.directory,createIntermediateDirectories:n})]):[3,4];case 3:c.sent(),c.label=4;case 4:return u=Date.now(),[4,this.dbRequest("put",[{path:e,folder:r,type:"directory",size:0,ctime:u,mtime:u}])];case 5:return c.sent(),[2,{}]}}))}))},e.prototype.rmdir=function(t){return h.b(this,void 0,void 0,(function(){var e,n,r,i,o,s,a,u,c;return h.d(this,(function(d){switch(d.label){case 0:return r=t.recursive,i=this.getPath(n=t.directory,e=t.path),[4,this.dbRequest("get",[i])];case 1:if(void 0===(o=d.sent()))throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");return[4,this.readdir({path:e,directory:n})];case 2:if(0!==(s=d.sent()).files.length&&!r)throw Error("Folder is not empty");a=0,u=s.files,d.label=3;case 3:return a<u.length?[4,this.stat({path:c=e+"/"+u[a],directory:n})]:[3,9];case 4:return"file"!==d.sent().type?[3,6]:[4,this.deleteFile({path:c,directory:n})];case 5:return d.sent(),[3,8];case 6:return[4,this.rmdir({path:c,directory:n,recursive:r})];case 7:d.sent(),d.label=8;case 8:return a++,[3,3];case 9:return[4,this.dbRequest("delete",[i])];case 10:return d.sent(),[2,{}]}}))}))},e.prototype.readdir=function(t){return h.b(this,void 0,void 0,(function(){var e,n;return h.d(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:if(n=r.sent(),""!==t.path&&void 0===n)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)])];case 2:return[2,{files:r.sent().map((function(t){return t.substring(e.length+1)}))}]}}))}))},e.prototype.getUri=function(t){return h.b(this,void 0,void 0,(function(){var e,n;return h.d(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[e+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{uri:n.path}]}}))}))},e.prototype.stat=function(t){return h.b(this,void 0,void 0,(function(){var e,n;return h.d(this,(function(r){switch(r.label){case 0:return e=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[e])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[e+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path}]}}))}))},e.prototype.rename=function(t){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return[2,this._copy(t,!0)]}))}))},e.prototype.copy=function(t){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return[2,this._copy(t,!1)]}))}))},e.prototype._copy=function(t,e){return void 0===e&&(e=!1),h.b(this,void 0,void 0,(function(){var n,r,i,o,s,a,u,c,d,l,p,f,v,m,w,y,g=this;return h.d(this,(function(b){switch(b.label){case 0:if(r=t.from,i=t.directory,o=t.toDirectory,!(n=t.to)||!r)throw Error("Both to and from must be provided");if(o||(o=i),s=this.getPath(i,r),a=this.getPath(o,n),s===a)return[2,{}];if(a.startsWith(s))throw Error("To path cannot contain the from path");b.label=1;case 1:return b.trys.push([1,3,,6]),[4,this.stat({path:n,directory:o})];case 2:return u=b.sent(),[3,6];case 3:return b.sent(),(c=n.split("/")).pop(),d=c.join("/"),c.length>0?[4,this.stat({path:d,directory:o})]:[3,5];case 4:if("directory"!==b.sent().type)throw new Error("Parent directory of the to path is a file");b.label=5;case 5:return[3,6];case 6:if(u&&"directory"===u.type)throw new Error("Cannot overwrite a directory with a file");return[4,this.stat({path:r,directory:i})];case 7:switch(l=b.sent(),p=function(t,e,n){return h.b(g,void 0,void 0,(function(){var r,i;return h.d(this,(function(s){switch(s.label){case 0:return r=this.getPath(o,t),[4,this.dbRequest("get",[r])];case 1:return(i=s.sent()).ctime=e,i.mtime=n,[4,this.dbRequest("put",[i])];case 2:return s.sent(),[2]}}))}))},l.type){case"file":return[3,8];case"directory":return[3,15]}return[3,28];case 8:return[4,this.readFile({path:r,directory:i})];case 9:return f=b.sent(),e?[4,this.deleteFile({path:r,directory:i})]:[3,11];case 10:b.sent(),b.label=11;case 11:return[4,this.writeFile({path:n,directory:o,data:f.data})];case 12:return b.sent(),e?[4,p(n,l.ctime,l.mtime)]:[3,14];case 13:b.sent(),b.label=14;case 14:return[2,{}];case 15:if(u)throw Error("Cannot move a directory over an existing object");b.label=16;case 16:return b.trys.push([16,20,,21]),[4,this.mkdir({path:n,directory:o,createIntermediateDirectories:!1})];case 17:return b.sent(),e?[4,p(n,l.ctime,l.mtime)]:[3,19];case 18:b.sent(),b.label=19;case 19:return[3,21];case 20:return b.sent(),[3,21];case 21:return[4,this.readdir({path:r,directory:i})];case 22:v=b.sent().files,m=0,w=v,b.label=23;case 23:return m<w.length?[4,this._copy({from:r+"/"+(y=w[m]),to:n+"/"+y,directory:i,toDirectory:o},e)]:[3,26];case 24:b.sent(),b.label=25;case 25:return m++,[3,23];case 26:return e?[4,this.rmdir({path:r,directory:i})]:[3,28];case 27:b.sent(),b.label=28;case 28:return[2,{}]}}))}))},e._debug=!0,e}(d)),function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.forEach((function(e){if(e&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})),t});new(function(t){function e(){return t.call(this,{name:"Geolocation",platforms:["web"]})||this}return h.c(e,t),e.prototype.getCurrentPosition=function(t){var e=this;return new Promise((function(n,r){return e.requestPermissions().then((function(e){window.navigator.geolocation.getCurrentPosition((function(t){n(t)}),(function(t){r(t)}),p({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))}))}))},e.prototype.watchPosition=function(t,e){return""+window.navigator.geolocation.watchPosition((function(t){e(t)}),(function(t){e(null,t)}),p({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))},e.prototype.clearWatch=function(t){return window.navigator.geolocation.clearWatch(parseInt(t.id,10)),Promise.resolve()},e}(d)),new(function(t){function e(){return t.call(this,{name:"Device",platforms:["web"]})||this}return h.c(e,t),e.prototype.getInfo=function(){return h.b(this,void 0,void 0,(function(){var t,e,n;return h.d(this,(function(r){switch(r.label){case 0:t=navigator.userAgent,e=this.parseUa(t),n={},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return n=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,Promise.resolve({model:e.model,platform:"web",appVersion:"",osVersion:e.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:n.level,isCharging:n.charging,uuid:this.getUid()})]}}))}))},e.prototype.getLanguageCode=function(){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return[2,{value:navigator.language}]}))}))},e.prototype.parseUa=function(t){var e={},n=t.indexOf("(")+1,r=t.indexOf(") AppleWebKit");-1!==t.indexOf(") Gecko")&&(r=t.indexOf(") Gecko"));var i=t.substring(n,r);if(-1!==t.indexOf("Android"))e.model=i.replace("; wv","").split("; ").pop().split(" Build")[0],e.osVersion=i.split("; ")[1];else if(e.model=i.split("; ")[0],navigator.oscpu)e.osVersion=navigator.oscpu;else if(-1!==t.indexOf("Windows"))e.osVersion=i;else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");e.osVersion=o[o.length-1].replace(/_/g,".")}return e},e.prototype.getUid=function(){var t=window.localStorage.getItem("_capuid");return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})),window.localStorage.setItem("_capuid",t),t)},e}(d)),new(function(t){function e(){var e=t.call(this,{name:"LocalNotifications",platforms:["web"]})||this;return e.pending=[],e}return h.c(e,t),e.prototype.sendPending=function(){var t=this,e=[],n=+new Date;this.pending.forEach((function(r){r.schedule&&r.schedule.at&&+r.schedule.at<=n&&(t.buildNotification(r),e.push(r))})),console.log("Sent pending, removing",e),this.pending=this.pending.filter((function(t){return!e.find((function(e){return e===t}))}))},e.prototype.sendNotification=function(t){var e=this,n=t;if(t.schedule&&t.schedule.at){var r=+t.schedule.at-+new Date;return this.pending.push(n),void setTimeout((function(){e.sendPending()}),r)}this.buildNotification(t)},e.prototype.buildNotification=function(t){return new Notification(t.title,{body:t.body})},e.prototype.schedule=function(t){var e=this,n=[];return t.notifications.forEach((function(t){n.push(e.sendNotification(t))})),Promise.resolve({notifications:n.map((function(t){return{id:""}}))})},e.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map((function(t){return{id:""+t.id}}))})},e.prototype.registerActionTypes=function(t){throw new Error("Method not implemented.")},e.prototype.cancel=function(t){return console.log("Cancel these",t),this.pending=this.pending.filter((function(e){return!t.notifications.find((function(t){return t.id===""+e.id}))})),Promise.resolve()},e.prototype.areEnabled=function(){throw new Error("Method not implemented.")},e.prototype.requestPermissions=function(){return new Promise((function(t,e){Notification.requestPermission().then((function(n){"denied"!==n&&"default"!==n?t({results:[n]}):e(n)})).catch((function(t){e(t)}))}))},e}(d)),new(function(t){function e(){return t.call(this,{name:"Share",platforms:["web"]})||this}return h.c(e,t),e.prototype.share=function(t){return navigator.share?navigator.share({title:t.title,text:t.text,url:t.url}):Promise.reject("Web Share API not available")},e}(d)),new(function(t){function e(){return t.call(this,{name:"Modals",platforms:["web"]})||this}return h.c(e,t),e.prototype.alert=function(t){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return window.alert(t.message),[2,Promise.resolve()]}))}))},e.prototype.prompt=function(t){return h.b(this,void 0,void 0,(function(){var e;return h.d(this,(function(n){return e=window.prompt(t.message,t.inputPlaceholder||""),[2,Promise.resolve({value:e,cancelled:null===e})]}))}))},e.prototype.confirm=function(t){return h.b(this,void 0,void 0,(function(){var e;return h.d(this,(function(n){return e=window.confirm(t.message),[2,Promise.resolve({value:e})]}))}))},e.prototype.showActions=function(t){return h.b(this,void 0,void 0,(function(){var e=this;return h.d(this,(function(n){return[2,new Promise((function(n,r){return h.b(e,void 0,void 0,(function(){var e,r;return h.d(this,(function(i){switch(i.label){case 0:return(e=document.querySelector("ion-action-sheet-controller"))||(e=document.createElement("ion-action-sheet-controller"),document.body.appendChild(e)),[4,e.componentOnReady()];case 1:return i.sent(),r=t.options.map((function(t,e){return{text:t.title,role:t.style&&t.style.toLowerCase()||"",icon:t.icon||"",handler:function(){n({index:e})}}})),[4,e.create({title:t.title,buttons:r})];case 2:return[4,i.sent().present()];case 3:return i.sent(),[2]}}))}))}))]}))}))},e}(d)),new(function(t){function e(){var e=t.call(this,{name:"Motion"})||this;return e.registerWindowListener("devicemotion","accel"),e.registerWindowListener("deviceorientation","orientation"),e}return h.c(e,t),e}(d)),new(function(t){function e(){var e=t.call(this,{name:"Network",platforms:["web"]})||this;return e.listenerFunction=null,e}return h.c(e,t),e.prototype.getStatus=function(){return new Promise((function(t,e){if(window.navigator){var n=window.navigator.onLine,r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;t({connected:n,connectionType:n?r?r.type||r.effectiveType:"wifi":"none"})}else e("Network info not available")}))},e.prototype.addListener=function(t,e){var n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,r=e.bind(this,{connected:!0,connectionType:n?n.type||n.effectiveType:"wifi"}),i=e.bind(this,{connected:!1,connectionType:"none"});if(0===t.localeCompare("networkStatusChange"))return window.addEventListener("online",r),window.addEventListener("offline",i),{remove:function(){window.removeEventListener("online",r),window.removeEventListener("offline",i)}}},e}(d)),new(function(t){function e(){return t.call(this,{name:"Permissions"})||this}return h.c(e,t),e.prototype.query=function(t){return h.b(this,void 0,void 0,(function(){var e;return h.d(this,(function(n){switch(n.label){case 0:return(e=window.navigator).permissions?[4,e.permissions.query({name:t.name===a.Photos?"camera":t.name})]:[2,Promise.reject("This browser does not support the Permissions API")];case 1:return[2,{state:n.sent().state}]}}))}))},e}(d)),new(function(t){function e(){return t.call(this,{name:"SplashScreen",platforms:["web"]})||this}return h.c(e,t),e.prototype.show=function(t,e){return Promise.resolve()},e.prototype.hide=function(t,e){return Promise.resolve()},e}(d)),new(function(t){function e(){var e=t.call(this,{name:"Storage",platforms:["web"]})||this;return e.KEY_PREFIX="_cap_",e}return h.c(e,t),e.prototype.get=function(t){var e=this;return new Promise((function(n,r){n({value:window.localStorage.getItem(e.makeKey(t.key))})}))},e.prototype.set=function(t){var e=this;return new Promise((function(n,r){window.localStorage.setItem(e.makeKey(t.key),t.value),n()}))},e.prototype.remove=function(t){var e=this;return new Promise((function(n,r){window.localStorage.removeItem(e.makeKey(t.key)),n()}))},e.prototype.keys=function(){var t=this;return new Promise((function(e,n){e({keys:Object.keys(localStorage).filter((function(e){return t.isKey(e)})).map((function(e){return t.getKey(e)}))})}))},e.prototype.clear=function(){var t=this;return new Promise((function(e,n){Object.keys(localStorage).filter((function(e){return t.isKey(e)})).forEach((function(t){return window.localStorage.removeItem(t)})),e()}))},e.prototype.makeKey=function(t){return this.KEY_PREFIX+t},e.prototype.isKey=function(t){return 0===t.indexOf(this.KEY_PREFIX)},e.prototype.getKey=function(t){return t.substr(this.KEY_PREFIX.length)},e}(d)),new(function(t){function e(){return t.call(this,{name:"Toast",platforms:["web"]})||this}return h.c(e,t),e.prototype.show=function(t){return h.b(this,void 0,void 0,(function(){var e,n;return h.d(this,(function(r){return e=3e3,t.duration&&(e="long"===t.duration?5e3:3e3),(n=document.createElement("pwa-toast")).duration=e,n.message=t.text,document.body.appendChild(n),[2]}))}))},e}(d)),function(t){for(var e=0,n=c.getPlugins();e<n.length;e++)l(t,n[e])}(u),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u}))}}]);