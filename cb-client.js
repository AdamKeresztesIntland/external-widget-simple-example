/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CbWidgetApi=t():e.CbWidgetApi=t()}(self,(function(){return(()=>{var e={46:(e,t)=>{(()=>{"use strict";var e={"./src/contract.ts":(e,t,n)=>{var o,r;n.r(t),n.d(t,{EventNames:()=>r,FunctionNames:()=>o}),function(e){e.AUTHENTICATE="authenticate",e.RESIZE="resize",e.GET_SELECTED_ITEM="getSelectedItem",e.RELOAD_ITEM="reloadItem",e.GET_CONFIG="getConfig",e.GET_BASEURL="getBaseURL"}(o||(o={})),function(e){e.SELECTED_ITEM_CHANGED="selectedItemChanged"}(r||(r={}))},"./src/types-utils.ts":(e,t,n)=>{n.r(t)},"./src/types.ts":(e,t,n)=>{n.r(t)}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{o.r(r),o.d(r,{EventNames:()=>e.EventNames,FunctionNames:()=>e.FunctionNames}),o("./src/types-utils.ts"),o("./src/types.ts");var e=o("./src/contract.ts")})(),t.Vy=r.EventNames,t.os=r.FunctionNames})()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n.d(o,{WidgetApi:()=>r});var e=n(46),t=function(){function e(e,t,n){var o=this;this.window=e,this.widgetId=t,this.origin=n,this.nextExchangeId=0,this.eventSubscriptions={},this.conversationCallbacks={},e.addEventListener("message",(function(e){return o.consumeMessageEvent(e)}))}return e.prototype.call=function(e,t){var n=this;return new Promise((function(o,r){var i;n.nextExchangeId++,n.conversationCallbacks[n.nextExchangeId]=(i=n.nextExchangeId,function(t){if("error"===t.type)return r(t.payload);if(s.func!==e)throw new Error('Response type mismatch. Expected: "'.concat(e,'". Actual: "').concat(t.type,'"'));o(t.payload),delete n.conversationCallbacks[i]});var s={type:"RPC",widgetId:n.widgetId,exchangeId:n.nextExchangeId,func:e,payload:t};if(!n.window.parent)throw new Error("window must have a parent");n.window.parent.postMessage(s,n.origin)}))},e.prototype.subscribe=function(e,t){var n=this,o=function(e){return t(e)};return this.eventSubscriptions[e]=this.eventSubscriptions[e]||[],this.eventSubscriptions[e].push(o),function(){var t=n.eventSubscriptions[e].indexOf(o);n.eventSubscriptions[e].splice(t,1)}},e.prototype.consumeMessageEvent=function(e){if("*"===this.origin||e.origin===this.origin){var t=e.data;if("payload"in(n=t)&&n.type){var n;if(function(e){return"event"===e.type&&!!e.event}(t))return this.consumeEvent(t);if(function(e){return"RPC"===e.type&&!!e.func&&!!e.exchangeId}(t)){if(t.widgetId!==this.widgetId)return}else if(!function(e){return"error"===e.type}(t))return void console.warn("Malformed message",t);var o=this.conversationCallbacks[t.exchangeId];if(!o)throw new Error("Widget "+this.widgetId+" is missing callback for exchangeId "+t.exchangeId);o(t)}else console.warn("Is not a message",t)}else console.log('Ignoring message because of origin mismatch. Expected: "'.concat(this.origin,'". Actual: "').concat(e.origin,'".'))},e.prototype.consumeEvent=function(e){(this.eventSubscriptions[e.event]||[]).forEach((function(t){t(e.payload)}))},e}(),r=function(){function n(e,n,o){this.client=new t(e,n,o)}return n.prototype.authenticate=function(){return this.client.call(e.os.AUTHENTICATE,void 0)},n.prototype.resize=function(t){return this.client.call(e.os.RESIZE,{height:t})},n.prototype.getSelectedItem=function(){return this.client.call(e.os.GET_SELECTED_ITEM,void 0)},n.prototype.getConfig=function(){return this.client.call(e.os.GET_CONFIG,void 0)},n.prototype.reloadItem=function(t){return this.client.call(e.os.RELOAD_ITEM,t)},n.prototype.getBaseURL=function(){return this.client.call(e.os.GET_BASEURL,void 0)},n.prototype.onSelectedItemChange=function(t){return this.client.subscribe(e.Vy.SELECTED_ITEM_CHANGED,(function(e){return t(e.itemId)}))},n}()})(),o})()}));
//# sourceMappingURL=cb-client.js.map