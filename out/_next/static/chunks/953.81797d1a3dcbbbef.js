(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953,848,833],{78848:function(){},40260:function(t,e,n){"use strict";n.d(e,{v:function(){return a}});var i=n(18291),r=n(68870),o=n.n(r);class a extends i.J5{async authenticateUser(){var t;if(!this.provider||!(null!==(t=this.chainConfig)&&void 0!==t&&t.chainId))throw i.RM.notConnectedError();let{chainNamespace:e,chainId:n}=this.chainConfig;if(this.status!==i.MP.CONNECTED)throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first");let r=await this.provider.request({method:"getAccounts"});if(r&&r.length>0){let t=(0,i.Cb)(r[0],this.name);if(t){let e=(0,i.$E)(t);if(!e)return{idToken:t}}let a={domain:window.location.origin,uri:window.location.href,address:r[0],chainId:parseInt(n,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},s=await (0,i.tV)(a,e),h=new TextEncoder().encode(s),c=await this.provider.request({method:"signMessage",params:{message:h,display:"utf8"}}),l=await (0,i.rn)(e,o().encode(c),s,this.name,this.sessionTime);return(0,i.Fr)(r[0],this.name,l),{idToken:l}}throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnect(){if(this.status!==i.MP.CONNECTED)throw i.RM.disconnectionError("Not connected with wallet");let t=await this.provider.request({method:"getAccounts"});t&&t.length>0&&(0,i.qz)(t[0],this.name)}}},13248:function(t,e,n){"use strict";n.d(e,{PhantomAdapter:function(){return h}});var i=n(21076),r=n(18291),o=n(40260),a=n(45230);let s=async function(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interval:1e3,count:3},n="undefined"!=typeof window&&!!(null!==(t=window.solana)&&void 0!==t&&t.isPhantom);if(n)return window.solana;let i=await function t(e,n,i){return new Promise((r,o)=>{i>0?setTimeout(async()=>{let a=await e();a&&r(a),a||t(e,n,i-1).then(t=>(r(t),t)).catch(t=>o(t))},n):r(!1)})}(()=>{var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom},e.interval,e.count);return i?window.solana:null};class h extends o.v{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,i.Z)(this,"name",r.rW.PHANTOM),(0,i.Z)(this,"adapterNamespace",r.yk.SOLANA),(0,i.Z)(this,"currentChainNamespace",r.EN.SOLANA),(0,i.Z)(this,"type",r.hN.EXTERNAL),(0,i.Z)(this,"status",r.MP.NOT_READY),(0,i.Z)(this,"_wallet",null),(0,i.Z)(this,"phantomProvider",null),(0,i.Z)(this,"rehydrated",!1),(0,i.Z)(this,"_onDisconnect",()=>{this._wallet&&(this._wallet.off("disconnect",this._onDisconnect),this.rehydrated=!1,this.status=this.status===r.MP.CONNECTED?r.MP.READY:r.MP.NOT_READY,this.emit(r.n2.DISCONNECTED))}),this.chainConfig=t.chainConfig||null,this.sessionTime=t.sessionTime||86400}get isWalletConnected(){var t;return!!(null!==(t=this._wallet)&&void 0!==t&&t.isConnected&&this.status===r.MP.CONNECTED)}get provider(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null}set provider(t){throw Error("Not implemented")}setAdapterSettings(t){this.status!==r.MP.READY&&null!=t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}async init(t){if(super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=(0,r.h2)(r.EN.SOLANA,"0x1")),this._wallet=await s({interval:500,count:3}),!this._wallet)throw r.Ty.notInstalled();this.phantomProvider=new a.kL({config:{chainConfig:this.chainConfig}}),this.status=r.MP.READY,this.emit(r.n2.READY,r.rW.PHANTOM);try{r.cM.debug("initializing phantom adapter"),t.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(t){r.cM.error("Failed to connect with cached phantom provider",t),this.emit("ERRORED",t)}}async connect(){var t=this;try{if(super.checkConnectionRequirements(),this.status=r.MP.CONNECTING,this.emit(r.n2.CONNECTING,{adapter:r.rW.PHANTOM}),!this._wallet)throw r.Ty.notInstalled();if(this._wallet.isConnected)await this.connectWithProvider(this._wallet);else{let e=this._wallet._handleDisconnect;try{await new Promise((n,i)=>{let o=async()=>{await this.connectWithProvider(this._wallet),n(this.provider)};if(!this._wallet)return i(r.Ty.notInstalled());this._wallet.once("connect",o),this._wallet._handleDisconnect=function(){i(r.Ty.windowClosed());for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e.apply(t._wallet,o)},this._wallet.connect().catch(t=>{i(t)})})}catch(t){if(t instanceof r.up)throw t;throw r.RM.connectionError(null==t?void 0:t.message)}finally{this._wallet._handleDisconnect=e}}if(!this._wallet.publicKey)throw r.RM.connectionError();return this._wallet.on("disconnect",this._onDisconnect),this.provider}catch(t){throw this.status=r.MP.READY,this.rehydrated=!1,this.emit(r.n2.ERRORED,t),t}}async disconnect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};await super.disconnect();try{var e;await (null===(e=this._wallet)||void 0===e?void 0:e.disconnect()),t.cleanup&&(this.status=r.MP.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(r.n2.DISCONNECTED)}catch(t){this.emit(r.n2.ERRORED,r.RM.disconnectionError(null==t?void 0:t.message))}}async getUserInfo(){if(!this.isWalletConnected)throw r.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async connectWithProvider(t){if(!this.phantomProvider)throw r.RM.connectionError("No phantom provider");return await this.phantomProvider.setupProvider(t),this.status=r.MP.CONNECTED,this.emit(r.n2.CONNECTED,{adapter:r.rW.PHANTOM,reconnected:this.rehydrated}),this.provider}}},81542:function(t){"use strict";t.exports=function(t){if(t.length>=255)throw TypeError("Alphabet too long");for(var e=new Uint8Array(256),n=0;n<e.length;n++)e[n]=255;for(var i=0;i<t.length;i++){var r=t.charAt(i),o=r.charCodeAt(0);if(255!==e[o])throw TypeError(r+" is ambiguous");e[o]=i}var a=t.length,s=t.charAt(0),h=Math.log(a)/Math.log(256),c=Math.log(256)/Math.log(a);function l(t){if("string"!=typeof t)throw TypeError("Expected String");if(0===t.length)return new Uint8Array;for(var n=0,i=0,r=0;t[n]===s;)i++,n++;for(var o=(t.length-n)*h+1>>>0,c=new Uint8Array(o);t[n];){var l=e[t.charCodeAt(n)];if(255===l)return;for(var d=0,u=o-1;(0!==l||d<r)&&-1!==u;u--,d++)l+=a*c[u]>>>0,c[u]=l%256>>>0,l=l/256>>>0;if(0!==l)throw Error("Non-zero carry");r=d,n++}for(var w=o-r;w!==o&&0===c[w];)w++;for(var f=new Uint8Array(i+(o-w)),v=i;w!==o;)f[v++]=c[w++];return f}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===e.length)return"";for(var n=0,i=0,r=0,o=e.length;r!==o&&0===e[r];)r++,n++;for(var h=(o-r)*c+1>>>0,l=new Uint8Array(h);r!==o;){for(var d=e[r],u=0,w=h-1;(0!==d||u<i)&&-1!==w;w--,u++)d+=256*l[w]>>>0,l[w]=d%a>>>0,d=d/a>>>0;if(0!==d)throw Error("Non-zero carry");i=u,r++}for(var f=h-i;f!==h&&0===l[f];)f++;for(var v=s.repeat(n);f<h;++f)v+=t.charAt(l[f]);return v},decodeUnsafe:l,decode:function(t){var e=l(t);if(e)return e;throw Error("Non-base"+a+" character")}}}},68870:function(t,e,n){let i=n(81542);t.exports=i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}}]);