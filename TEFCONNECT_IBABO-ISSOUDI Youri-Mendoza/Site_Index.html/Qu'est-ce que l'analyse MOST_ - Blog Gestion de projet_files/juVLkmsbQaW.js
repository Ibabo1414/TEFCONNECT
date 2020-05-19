if (self.CavalryLogger) { CavalryLogger.start_js(["3\/Sb1"]); }

__d("FBJSON",[],(function(a,b,c,d,e,f){e.exports={parse:JSON.parse,stringify:JSON.stringify}}),null);
__d("BanzaiConsts",[],(function(a,b,c,d,e,f){a={SEND:"Banzai:SEND",OK:"Banzai:OK",ERROR:"Banzai:ERROR",SHUTDOWN:"Banzai:SHUTDOWN",BASIC:"basic",VITAL:"vital",BASIC_WAIT:6e4,BASIC_WAIT_COMET:2e3,VITAL_WAIT:1e3,EXPIRY:30*6e4,LAST_STORAGE_FLUSH:"banzai:last_storage_flush",STORAGE_FLUSH_INTERVAL:12*60*6e4,ODS_ROUTE:"categorized_ods",POST_READY:0,POST_INFLIGHT:1,POST_SENT:2};e.exports=a}),null);
__d("CurrentUser",["Cookie","CurrentUserInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g,h={getID:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID},getAccountID:function(){return(g||(g=b("CurrentUserInitialData"))).ACCOUNT_ID},getWorkUserID:function(){return(g||(g=b("CurrentUserInitialData"))).WORK_USER_ID},getName:function(){return(g||(g=b("CurrentUserInitialData"))).NAME},getShortName:function(){return(g||(g=b("CurrentUserInitialData"))).SHORT_NAME},isLoggedIn:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID!=="0"},isLoggedInNow:function(){if(!h.isLoggedIn())return!1;if((g||(g=b("CurrentUserInitialData"))).IS_INTERN_SITE)return!0;if((g||(g=b("CurrentUserInitialData"))).IS_WORK_USER)return!0;return(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=null&&(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=""?(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID===b("Cookie").get("c_user"):(g||(g=b("CurrentUserInitialData"))).USER_ID===b("Cookie").get("c_user")},isEmployee:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_EMPLOYEE},isTestUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_TEST_USER},hasWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).HAS_WORK_USER},isWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_WORK_USER},isGray:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_GRAY},isUnderage:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_UNDERAGE},isMessengerOnlyUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER},isDeactivatedAllowedOnMessenger:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER},getAppID:function(){return(g||(g=b("CurrentUserInitialData"))).APP_ID}};e.exports=h}),null);
__d("getCrossOriginTransport",["invariant","ExecutionEnvironment","ex"],(function(a,b,c,d,e,f,g){__p&&__p();function h(){if(!b("ExecutionEnvironment").canUseDOM)throw new Error(b("ex")("getCrossOriginTransport: %s","Cross origin transport unavailable in the server environment."));try{var a=new XMLHttpRequest();!("withCredentials"in a)&&typeof XDomainRequest!=="undefined"&&(a=new XDomainRequest());return a}catch(a){throw new Error(b("ex")("getCrossOriginTransport: %s",a.message))}}h.withCredentials=function(){var a=h();"withCredentials"in a||g(0,5150);var b=a.open;a.open=function(){b.apply(this,arguments),this.withCredentials=!0};return a};e.exports=h}),null);
__d("ZeroRewrites",["URI","ZeroRewriteRules","getCrossOriginTransport","getSameOriginTransport","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g,h={rewriteURI:function(a){if(!b("isFacebookURI")(a)||h._isWhitelisted(a))return a;var c=h._getRewrittenSubdomain(a);c!==null&&c!==void 0&&(a=a.setSubdomain(c));return a},getTransportBuilderForURI:function(a){return h.isRewritten(a)?b("getCrossOriginTransport").withCredentials:b("getSameOriginTransport")},isRewriteSafe:function(a){if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a))return!1;var c=h._getCurrentURI().getDomain(),d=new(g||(g=b("URI")))(a).qualify().getDomain();return c===d||h.isRewritten(a)},isRewritten:function(a){a=a.getQualifiedURI();if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a)||h._isWhitelisted(a))return!1;var c=a.getSubdomain(),d=h._getCurrentURI(),e=h._getRewrittenSubdomain(d);return a.getDomain()!==d.getDomain()&&c===e},_isWhitelisted:function(a){a=a.getPath();a.endsWith("/")||(a+="/");return b("ZeroRewriteRules").whitelist&&b("ZeroRewriteRules").whitelist[a]===1},_getRewrittenSubdomain:function(a){a=a.getQualifiedURI().getSubdomain();return b("ZeroRewriteRules").rewrite_rules[a]},_getCurrentURI:function(){return new(g||(g=b("URI")))("/").qualify()}};e.exports=h}),null);
__d("BanzaiAdapter",["Arbiter","BanzaiConsts","CurrentUser","ErrorGuard","Run","URI","UserAgent","ZeroRewrites","getAsyncParams","gkx","once","BanzaiConfig"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j=[],k=new(b("Arbiter"))(),l="/ajax/bz",m="POST",n={config:b("BanzaiConfig"),endpoint:l,useBeacon:!0,getExtraParams:function(a){return b("getAsyncParams")(m)},getUserID:function(){return b("CurrentUser").getID()},inform:function(a){k.inform(a)},subscribe:function(a,b){return k.subscribe(a,b)},cleanup:function(){var a=j;j=[];a.forEach(function(a){a.readyState<4&&a.abort()})},preferredCompressionMethod:b("once")(function(){return(g||(g=b("ErrorGuard"))).applyWithGuard(function(){return b("gkx")("1278639")},null,[])?"snappy":"snappy_base64"}),readyToSend:function(){return b("UserAgent").isBrowser("IE <= 8")||navigator.onLine},send:function(a,c,d,e){__p&&__p();var f=b("ZeroRewrites").rewriteURI(new(h||(h=b("URI")))(l)),g=b("ZeroRewrites").getTransportBuilderForURI(f)();g.open(m,f.toString(),!0);g.onreadystatechange=function(){if(g.readyState>=4){var a=j.indexOf(g);a>=0&&j.splice(a,1);try{a=g.status}catch(b){a=0}a==200?(c&&c(),e||n.inform((i||(i=b("BanzaiConsts"))).OK)):(d&&d(a),e||n.inform((i||(i=b("BanzaiConsts"))).ERROR))}};j.push(g);g.send(a,!1)},setHooks:function(a){},setUnloadHook:function(a){b("Run").onAfterUnload(a._unload)},onUnload:function(a){b("Run").onAfterUnload(a)},isOkToSendViaBeacon:function(){return!0}};e.exports=n}),null);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){return typeof process==="object"&&(typeof process.versions==="object"&&typeof process.versions.node!=="undefined")?!0:!1}function h(a){return a instanceof Uint8Array&&(!g()||!Buffer.isBuffer(a))}function i(a){return a instanceof ArrayBuffer}function j(a){return!g()?!1:Buffer.isBuffer(a)}var k="Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";function a(a){__p&&__p();if(!h(a)&&!i(a)&&!j(a))throw new TypeError(k);var b=!1,c=!1;h(a)?b=!0:i(a)&&(c=!0,a=new Uint8Array(a));a=new A(a);var d=a.readUncompressedLength();if(d===-1)throw new Error("Invalid Snappy bitstream");if(b){b=new Uint8Array(d);if(!a.uncompressToBuffer(b))throw new Error("Invalid Snappy bitstream")}else if(c){b=new ArrayBuffer(d);c=new Uint8Array(b);if(!a.uncompressToBuffer(c))throw new Error("Invalid Snappy bitstream")}else{b=Buffer.alloc(d);if(!a.uncompressToBuffer(b))throw new Error("Invalid Snappy bitstream")}return b}function b(a){__p&&__p();if(!h(a)&&!i(a)&&!j(a))throw new TypeError(k);var b=!1,c=!1;h(a)?b=!0:i(a)&&(c=!0,a=new Uint8Array(a));a=new x(a);var d=a.maxCompressedLength(),e,f,g;b?(e=new Uint8Array(d),g=a.compressToBuffer(e)):c?(e=new ArrayBuffer(d),f=new Uint8Array(e),g=a.compressToBuffer(f)):(e=Buffer.alloc(d),g=a.compressToBuffer(e));if(!e.slice){f=new Uint8Array(Array.prototype.slice.call(e,0,g));if(b)return f;else if(c)return f.buffer;else throw new Error("not implemented")}return e.slice(0,g)}c=16;var l=1<<c,m=14,n=new Array(m+1);function o(a,b){return a*506832829>>>b}function p(a,b){return a[b]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}function q(a,b,c){return a[b]===a[c]&&a[b+1]===a[c+1]&&a[b+2]===a[c+2]&&a[b+3]===a[c+3]}function r(a,b,c,d,e){var f;for(f=0;f<e;f++)c[d+f]=a[b+f]}function s(a,b,c,d,e){c<=60?(d[e]=c-1<<2,e+=1):c<256?(d[e]=60<<2,d[e+1]=c-1,e+=2):(d[e]=61<<2,d[e+1]=c-1&255,d[e+2]=c-1>>>8,e+=3);r(a,b,d,e,c);return e+c}function t(a,b,c,d){__p&&__p();if(d<12&&c<2048){a[b]=1+(d-4<<2)+(c>>>8<<5);a[b+1]=c&255;return b+2}else{a[b]=2+(d-1<<2);a[b+1]=c&255;a[b+2]=c>>>8;return b+3}}function u(a,b,c,d){while(d>=68)b=t(a,b,c,64),d-=64;d>64&&(b=t(a,b,c,60),d-=60);return t(a,b,c,d)}function v(a,b,c,d,e){__p&&__p();var f=1;while(1<<f<=c&&f<=m)f+=1;f-=1;var g=32-f;typeof n[f]==="undefined"&&(n[f]=new Uint16Array(1<<f));f=n[f];var h;for(h=0;h<f.length;h++)f[h]=0;h=b+c;var i=b,j=b,k,l,r,t,v,w=!0,x=15;if(c>=x){c=h-x;b+=1;x=o(p(a,b),g);while(w){t=32;l=b;do{b=l;k=x;v=t>>>5;t+=1;l=b+v;if(b>c){w=!1;break}x=o(p(a,l),g);r=i+f[k];f[k]=b-i}while(!q(a,b,r));if(!w)break;e=s(a,j,b-j,d,e);do{v=b;k=4;while(b+k<h&&a[b+k]===a[r+k])k+=1;b+=k;l=v-r;e=u(d,e,l,k);j=b;if(b>=c){w=!1;break}t=o(p(a,b-1),g);f[t]=b-1-i;v=o(p(a,b),g);r=i+f[v];f[v]=b-i}while(q(a,b,r));if(!w)break;b+=1;x=o(p(a,b),g)}}j<h&&(e=s(a,j,h-j,d,e));return e}function w(a,b,c){do b[c]=a&127,a=a>>>7,a>0&&(b[c]+=128),c+=1;while(a>0);return c}function x(a){this.array=a}x.prototype.maxCompressedLength=function(){var a=this.array.length;return 32+a+Math.floor(a/6)};x.prototype.compressToBuffer=function(a){var b=this.array,c=b.length,d=0,e=0,f;e=w(c,a,e);while(d<c)f=Math.min(c-d,l),e=v(b,d,f,a,e),d+=f;return e};var y=[0,255,65535,16777215,4294967295];function r(a,b,c,d,e){var f;for(f=0;f<e;f++)c[d+f]=a[b+f]}function z(a,b,c,d){var e;for(e=0;e<d;e++)a[b+e]=a[b-c+e]}function A(a){this.array=a,this.pos=0}A.prototype.readUncompressedLength=function(){__p&&__p();var a=0,b=0,c,d;while(b<32&&this.pos<this.array.length){c=this.array[this.pos];this.pos+=1;d=c&127;if(d<<b>>>b!==d)return-1;a|=d<<b;if(c<128)return a;b+=7}return-1};A.prototype.uncompressToBuffer=function(a){__p&&__p();var b=this.array,c=b.length,d=this.pos,e=0,f,g,h,i;while(d<b.length){f=b[d];d+=1;if((f&3)===0){g=(f>>>2)+1;if(g>60){if(d+3>=c)return!1;h=g-60;g=b[d]+(b[d+1]<<8)+(b[d+2]<<16)+(b[d+3]<<24);g=(g&y[h])+1;d+=h}if(d+g>c)return!1;r(b,d,a,e,g);d+=g;e+=g}else{switch(f&3){case 1:g=(f>>>2&7)+4;i=b[d]+(f>>>5<<8);d+=1;break;case 2:if(d+1>=c)return!1;g=(f>>>2)+1;i=b[d]+(b[d+1]<<8);d+=2;break;case 3:if(d+3>=c)return!1;g=(f>>>2)+1;i=b[d]+(b[d+1]<<8)+(b[d+2]<<16)+(b[d+3]<<24);d+=4;break;default:break}if(i===0||i>e)return!1;z(a,e,i,g);e+=g}}return!0};e.exports.uncompress=a;e.exports.compress=b}),null);
__d("SnappyCompressUtil",["SnappyCompress"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={compressUint8ArrayToSnappy:function(c){__p&&__p();if(c==null)return null;var d=null;try{d=b("SnappyCompress").compress(c)}catch(a){return null}c="";for(var e=0;e<d.length;e++)c+=String.fromCharCode(d[e]);return a.btoa(c)},compressStringToSnappy:function(b){__p&&__p();if(a.Uint8Array===void 0||a.btoa===void 0)return null;var c=new a.Uint8Array(b.length);for(var d=0;d<b.length;d++){var e=b.charCodeAt(d);if(e>127)return null;c[d]=e}return g.compressUint8ArrayToSnappy(c)},compressStringToSnappyBinary:function(c){__p&&__p();if(a.Uint8Array===void 0)return null;var d=null;if(a.TextEncoder!==void 0)d=new TextEncoder().encode(c);else{d=new a.Uint8Array(c.length);for(var e=0;e<c.length;e++){var f=c.charCodeAt(e);if(f>127)return null;d[e]=f}}f=null;try{f=b("SnappyCompress").compress(d)}catch(a){return null}return f}};e.exports=g}),null);
__d("BanzaiCompressionUtils",["FBLogger","SnappyCompressUtil","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a={compressWad:function(a,c){__p&&__p();if(a.needs_compression!==!0){delete a.needs_compression;return}var d=(g||(g=b("performanceNow")))(),e=JSON.stringify(a.posts),f;switch(c){case"snappy":f=b("SnappyCompressUtil").compressStringToSnappyBinary(e);break;case"snappy_base64":f=b("SnappyCompressUtil").compressStringToSnappy(e);break;default:break}f!=null&&f.length<e.length?(a.posts=f,a.compression=c,a.snappy_ms=Math.ceil((g||(g=b("performanceNow")))()-d),a.snappy_ms<0&&b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s",a.snappy_ms)):a.compression="";delete a.needs_compression},outOfBandsPosts:function(a){__p&&__p();var b=0,c={};for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f.compression==="snappy";if(g){g=new Blob([f.posts],{type:"application/octet-stream"});f.posts=String(b);c["post_"+String(b)]=g;b++}}return c}};e.exports=a}),null);
__d("BanzaiBase",["BanzaiAdapter","BanzaiCompressionUtils","BanzaiConsts","BanzaiLazyQueue","ErrorGuard","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i="categorized_ods",j="blue_send_via_beacon_failure";c="blue_messages_received";d="blue_messages_sent";var k="blue_total_messages_received",l="blue_total_messages_sent",m=0,n=1,o=2,p={received:c,sent:d},q=null,r,s=[],t=null,u=0,v=0,w=0,x=0;function y(a,b){a.__meta.status=m,a[3]=(a[3]||0)+1,!a.__meta.retry&&b>=400&&b<600&&s.push(a)}var z={_canSend:function(a){return a[2]>=z._getEventTime()-(b("BanzaiAdapter").config.EXPIRY||(g||(g=b("BanzaiConsts"))).EXPIRY)},_clearPostBuffer:function(){s=[]},_gatherWadsAndPostsFromBuffer:function(a,b,c,d,e){__p&&__p();e===void 0&&(e=null);var f={},g=d.length,h=!1;d=d.filter(function(d,i){__p&&__p();if(h)return!0;var j=d.__meta;if(j.status>=o||!z._canSend(d))return!1;if(j.status>=n)return!0;var k=j.compress!=null?j.compress:!0,l=(j.webSessionId!=null?j.webSessionId:"null")+(j.userID!=null?j.userID:"null")+(j.appID!=null?j.appID:"null")+(k?"compress":""),m=f[l];m||(m={user:j.userID,webSessionId:j.webSessionId,app_id:j.appID,posts:[],needs_compression:k},f[l]=m,a.push(m));j.status=n;m.posts.push(d);b.push(d);e!=null&&e>0&&(e--,e==0&&(h=!0,i<g-1&&z._schedule(0)));return c&&j.retry});if(b.length+v+u!==0){u+=2;var i=b.length+v+2;w+=2;x+=b.length+2;z.counterTracker("received",u,a,b);z.counterTracker("sent",i,a,b)}u=0;v=0;return d},_getEventTime:function(){return Date.now()},_getWebSessionId:function(){return"0"},_getPostBuffer:function(){return s},_getStorage:function(){return{store:function(){},restore:function(){},flush:function(){}}},_getUserId:function(){return"0"},_getAppId:function(){return null},_initialize:function(){},_prepForTransit:function(a,c){__p&&__p();var d=new FormData();d.append("ts",String(Date.now()));var e=b("BanzaiAdapter").getExtraParams(c);Object.keys(e).sort().forEach(function(a){var b=e[a];if(b===void 0)return;if(b===null){d.append(a,"");return}d.append(a,String(b))});var f=b("BanzaiCompressionUtils").outOfBandsPosts(a);Object.keys(f).forEach(function(a){d.append(a,f[a])});d.append("q",JSON.stringify(a));return d},_prepWadForTransit:function(a){b("BanzaiCompressionUtils").compressWad(a,b("BanzaiAdapter").preferredCompressionMethod())},_processCallbacksAndSendViaBeacon:function(){var c=[],d=[],e=[];z._gatherWadsAndPostsFromBuffer(d,e,!0,c);if(d.length>0){d[0].send_method="beacon";d.map(z._prepWadForTransit);e=z._prepForTransit(d,!0);c=a.navigator.sendBeacon(z.adapter.endpoint,e);c||b("FBLogger")("banzai").warn("Error sending beacon")}},_resetPostStatus:function(a){a.__meta.status=m},_restore:function(a){a=z._getStorage();(h||(h=b("ErrorGuard"))).applyWithGuard(a.restore,a,[]);z._schedule(b("BanzaiAdapter").config.RESTORE_WAIT||(g||(g=b("BanzaiConsts"))).VITAL_WAIT)},_schedule:function(b){var c=z._getEventTime()+b;if(!r||c<r){r=c;q&&a.clearTimeout(q);q=a.setTimeout(function(){z._sendWithCallbacks()},b);return!0}return!1},_sendWithCallbacks:function(a,c,d){__p&&__p();r=null;z._schedule(z.BASIC.delay);if(!b("BanzaiAdapter").readyToSend()){c&&c();return}if(z.isEnabled("flush_storage_periodically")){var e=z._getStorage();(h||(h=b("ErrorGuard"))).applyWithGuard(e.flush,e,[])}b("BanzaiAdapter").inform((g||(g=b("BanzaiConsts"))).SEND);e=[];var f=[];s=z._gatherWadsAndPostsFromBuffer(e,f,!0,s,d);if(e.length<=0){b("BanzaiAdapter").inform((g||(g=b("BanzaiConsts"))).OK);a&&a();return}e[0].trigger=t;t=null;e[0].send_method="ajax";e.map(z._prepWadForTransit);b("BanzaiAdapter").send(z._prepForTransit(e,!1),function(){f.forEach(function(a){a.__meta.status=o,a.__meta.callback&&a.__meta.callback()}),a&&a()},function(a){f.forEach(function(b){y(b,a)}),c&&c()})},_store:function(a){a=z._getStorage();(h||(h=b("ErrorGuard"))).applyWithGuard(a.store,a,[])},_testState:function(){return{postBuffer:s,triggerRoute:t}},_tryToSendViaBeacon:function(){__p&&__p();if(!(navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon()))return!1;var c=[],d=[];s=z._gatherWadsAndPostsFromBuffer(c,d,!1,s);if(c.length<=0)return!1;c[0].send_method="beacon";c.map(z._prepWadForTransit);c=z._prepForTransit(c,!0);c=a.navigator.sendBeacon(z.adapter.endpoint,c);if(!c){d.forEach(function(a){s.push(a)});s.push(z._wrapData(i,{2979:{banzai:(c={},c[j]=[1],c)}},z._getEventTime()));return!1}return!0},_unload:function(){__p&&__p();var a,c;w+=2;x+=2;a=z._wrapData(i,{2979:{banzai:(a={},a[k]=[w],a)}},z._getEventTime(),!0);c=z._wrapData(i,{2979:{banzai:(c={},c[l]=[x],c)}},z._getEventTime(),!0);s.unshift(a,c);navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon()&&z._processCallbacksAndSendViaBeacon();b("BanzaiAdapter").cleanup();b("BanzaiAdapter").inform((g||(g=b("BanzaiConsts"))).SHUTDOWN);s.length>0&&((!z.adapter.useBeacon||!z._tryToSendViaBeacon())&&z._store(!1))},_wrapData:function(a,b,c,d,e){a=[a,b,c,0,e];a.__meta={webSessionId:z._getWebSessionId(),userID:z._getUserId(),appID:z._getAppId(),retry:d===!0,status:m};return a},BASIC:{delay:b("BanzaiAdapter").config.MAX_WAIT||(g||(g=b("BanzaiConsts"))).BASIC_WAIT},BASIC_WAIT:(g||(g=b("BanzaiConsts"))).BASIC_WAIT,ERROR:g.ERROR,OK:g.OK,SEND:g.SEND,SHUTDOWN:g.SHUTDOWN,VITAL:{delay:b("BanzaiAdapter").config.MIN_WAIT||(g||(g=b("BanzaiConsts"))).VITAL_WAIT},VITAL_WAIT:g.VITAL_WAIT,adapter:b("BanzaiAdapter"),canUseNavigatorBeacon:function(){return Boolean(navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon())},counterTracker:function(a,b,c,d){var e;b=b;a=z._wrapData(i,{2979:{banzai:(e={},e[p[a]]=[b],e)}},z._getEventTime(),!0);d.push(a);c.push({webSessionId:z._getWebSessionId(),posts:[a],needs_compression:!0,user:z._getUserId(),app_id:z._getAppId()})},flush:function(b,c){a.clearTimeout(q),q=null,z._sendWithCallbacks(b,c)},isEnabled:function(a){return Boolean(b("BanzaiAdapter").config.gks&&b("BanzaiAdapter").config.gks[a])},post:function(a,c,d){__p&&__p();var e;a||b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");e=(e=JSON.stringify(c))!=null?e:"";var f=d==null?void 0:d.retry;if(b("BanzaiAdapter").config.disabled)return;var h=b("BanzaiAdapter").config.blacklist;if(h&&(h.indexOf&&(typeof h.indexOf=="function"&&h.indexOf(a)!=-1)))return;h=e.length;u++;w++;var i=z._wrapData(a,c,z._getEventTime(),f,h);(d==null?void 0:d.callback)&&(i.__meta.callback=d==null?void 0:d.callback);(d==null?void 0:d.compress)!=null&&(i.__meta.compress=d==null?void 0:d.compress);e=d==null?void 0:d.delay;e==null&&(e=(g||(g=b("BanzaiConsts"))).BASIC_WAIT);if(d==null?void 0:d.signal){i.__meta.status=n;c=[{user:z._getUserId(),webSessionId:z._getWebSessionId(),app_id:z._getAppId(),posts:[i],trigger:a}];b("BanzaiAdapter").send(z._prepForTransit(c,!1),function(){x++,v++,i.__meta.status=o,i.__meta.callback&&i.__meta.callback()},function(a){y(i,a)},!0);if(!f)return}s.push(i);(z._schedule(e)||!t)&&(t=a);h=b("BanzaiLazyQueue").flushQueue();h.forEach(function(a){return z.post.apply(z,a)})},subscribe:b("BanzaiAdapter").subscribe};e.exports=z}),null);
__d("BanzaiStreamPayloads",[],(function(a,b,c,d,e,f){"use strict";var g={};a={addPayload:function(a,b){g[a]=b},removePayload:function(a){delete g[a]},unload:function(a){Object.keys(g).forEach(function(b){b=g[b];a(b.route,b.payload)})}};e.exports=a}),null);
__d("cancelIdleCallback",["requireCond","cr:692209"],(function(a,b,c,d,e,f){e.exports=b("cr:692209")}),null);
__d("SetIdleTimeoutAcrossTransitions",["NavigationMetrics","cancelIdleCallback","clearTimeout","nullthrows","requestIdleCallbackAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=new Map();c={start:function(a,c){if(g){var d=b("setTimeoutAcrossTransitions")(function(){var c=b("requestIdleCallbackAcrossTransitions")(function(){a(),h["delete"](c)});h.set(d,c)},c);return d}else return b("setTimeoutAcrossTransitions")(a,c)},clear:function(a){b("clearTimeout")(a),h.has(a)&&(b("cancelIdleCallback")(b("nullthrows")(h.get(a))),h["delete"](a))}};b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(b,c){c.event==="all_pagelets_loaded"&&(g=!!a.requestIdleCallback)});e.exports=c}),null);
__d("WebStorageMutex",["WebStorage","clearTimeout","pageID","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h=null,i=!1,j=b("pageID");function k(){i||(i=!0,h=(g||(g=b("WebStorage"))).getLocalStorage());return h}a=function(){"use strict";__p&&__p();function a(a){this.name=a}a.testSetPageID=function(a){j=a};var c=a.prototype;c.$1=function(){if(!k())return j;var a=k().getItem("mutex_"+this.name);a=a?a.split(":"):null;return a&&a[1]>=Date.now()?a[0]:null};c.$2=function(a){if(!k())return;a=Date.now()+(a||1e4);(g||(g=b("WebStorage"))).setItemGuarded(k(),"mutex_"+this.name,j+":"+a)};c.hasLock=function(){return this.$1()==j};c.lock=function(a,c,d){var e=this;this.$3&&b("clearTimeout")(this.$3);j==(this.$1()||j)&&this.$2(d);this.$3=b("setTimeoutAcrossTransitions")(function(){e.$3=null;var b=e.hasLock()?a:c;b&&b(e)},0)};c.unlock=function(){this.$3&&b("clearTimeout")(this.$3),k()&&this.hasLock()&&k().removeItem("mutex_"+this.name)};return a}();e.exports=a}),null);
__d("BanzaiNew",["BanzaiBase","BanzaiConsts","BanzaiStreamPayloads","CurrentUser","ExecutionEnvironment","FBJSON","NavigationMetrics","SetIdleTimeoutAcrossTransitions","TimeSlice","Visibility","WebSession","WebStorage","emptyFunction","isInIframe","lowerFacebookDomain","performanceAbsoluteNow","WebStorageMutex"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j="bz:",k={_getStorage:(c=b("BanzaiBase"))._getStorage,_getWebSessionId:c._getWebSessionId,_getUserId:c._getUserId,_getAppId:c._getAppId,_initialize:c._initialize,_schedule:c._schedule,flush:c.flush,_unload:c._unload,post:c.post},l=b("isInIframe")(),m=null,n,o,p,q,r=!1;function s(){r||(r=!0,q=(g||(g=b("WebStorage"))).getLocalStorage());return q}function t(){var a="check_quota";try{var b=s();if(!b)return!1;b.setItem(a,a);b.removeItem(a);return!0}catch(a){return!1}}c._getStorage=function(){__p&&__p();p||(!l?p={store:function(){var a=s(),c=b("BanzaiBase")._getPostBuffer().filter(function(a){return a.__meta.status<2});if(!a||c.length<=0)return;c=c.map(function(a){return[a[0],a[1],a[2],a[3]||0,a[4],a.__meta]});b("BanzaiBase")._clearPostBuffer();(g||(g=b("WebStorage"))).setItemGuarded(a,j+b("BanzaiBase")._getWebSessionId()+"."+b("BanzaiBase")._getEventTime(),b("FBJSON").stringify(c))},restore:function(){__p&&__p();var a=s();if(!a)return;var c=b("WebStorageMutex"),d=function(c){__p&&__p();var d=[];for(var e=0;e<a.length;e++){var f=a.key(e);f.indexOf(j)===0&&f.indexOf("bz:__")!==0&&d.push(f)}d.forEach(function(c){__p&&__p();var d=a.getItem(c);a.removeItem(c);if(!d)return;c=b("FBJSON").parse(d);c.forEach(function(a){if(!a)return;var c=a.__meta=a.pop(),d=b("BanzaiBase")._canSend(a);if(!d)return;d=b("CurrentUser").getID();(c.userID===d||d==="0")&&(b("BanzaiBase")._resetPostStatus(a),b("BanzaiBase")._getPostBuffer().push(a))})});c&&c.unlock()};t()?new c("banzai").lock(d):b("SetIdleTimeoutAcrossTransitions").start(d,0)},flush:function(){var a=s();if(a){m===null&&(m=parseInt(a.getItem((h||(h=b("BanzaiConsts"))).LAST_STORAGE_FLUSH),10));var c=m&&(i||(i=b("performanceAbsoluteNow")))()-m>=(h||(h=b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;c&&b("BanzaiBase")._restore(!1);(c||!m)&&(m=(i||(i=b("performanceAbsoluteNow")))(),(g||(g=b("WebStorage"))).setItemGuarded(a,(h||(h=b("BanzaiConsts"))).LAST_STORAGE_FLUSH,m.toString()))}}}:p={store:b("emptyFunction"),restore:b("emptyFunction"),flush:b("emptyFunction")});return p};c._getWebSessionId=function(){return b("WebSession").getId()};c._getUserId=function(){return b("CurrentUser").getID()};c._getAppId=function(){return b("CurrentUser").getAppID()};c._initialize=function(){b("ExecutionEnvironment").canUseDOM&&(b("BanzaiBase").adapter.useBeacon&&b("Visibility").isSupported()?(b("Visibility").addListener(b("Visibility").HIDDEN,function(){b("BanzaiBase")._getPostBuffer().length>0&&(b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._store(!1))}),b("BanzaiBase").isEnabled("enable_client_logging_clear_on_visible")&&b("Visibility").addListener(b("Visibility").VISIBLE,function(){b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._restore(!1)})):b("BanzaiBase").adapter.setHooks(b("BanzaiBase")),b("BanzaiBase").adapter.setUnloadHook(b("BanzaiBase")),b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,c){if(c.pageType!=="normal")return;b("BanzaiBase")._restore(!1);b("NavigationMetrics").removeCurrentListener()}))};c._getEventTime=function(){return(i||(i=b("performanceAbsoluteNow")))()};var u=b("TimeSlice").guard(function(){n=null,b("BanzaiBase")._sendWithCallbacks()},"Banzai.send",{propagationType:b("TimeSlice").PropagationType.ORPHAN});c._schedule=function(a){__p&&__p();var c=b("BanzaiBase")._getEventTime()+a;if(!n||c<n){n=c;b("SetIdleTimeoutAcrossTransitions").clear(o);c=function(){o=b("SetIdleTimeoutAcrossTransitions").start(u,a)};c();return!0}return!1};c.flush=function(a,c){b("SetIdleTimeoutAcrossTransitions").clear(o),n=null,b("BanzaiBase")._sendWithCallbacks(a,c)};c._unload=function(){b("BanzaiStreamPayloads").unload(b("BanzaiBase").post),k._unload()};c.post=function(c,d,e){__p&&__p();if(b("BanzaiBase").adapter.config.disabled)return;if(!b("ExecutionEnvironment").canUseDOM)return;if(l&&b("lowerFacebookDomain").isValidDocumentDomain()){var f;try{f=a.top.require("Banzai")}catch(a){f=null}if(f){f.post.apply(f,arguments);return}}k.post(c,d,e)};c._initialize();e.exports=c}),null);
__d("cancelIdleCallbackBlue",["IdleCallbackImplementation","TimerStorage","TimeSlice"],(function(a,b,c,d,e,f){var g=b("TimerStorage").IDLE_CALLBACK;function a(a){b("TimerStorage").unset(g,a);var c=g+String(a);b("TimeSlice").cancelWithToken(c);b("IdleCallbackImplementation").cancelIdleCallback(a)}e.exports=a}),null);