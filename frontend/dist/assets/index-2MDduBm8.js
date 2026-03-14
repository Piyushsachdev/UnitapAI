function lf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Is={exports:{}},kl={},Ms={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),af=Symbol.for("react.portal"),sf=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),df=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),mf=Symbol.for("react.memo"),gf=Symbol.for("react.lazy"),ga=Symbol.iterator;function vf(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var Fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Us=Object.assign,Ds={};function mn(e,t,n){this.props=e,this.context=t,this.refs=Ds,this.updater=n||Fs}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $s(){}$s.prototype=mn.prototype;function yo(e,t,n){this.props=e,this.context=t,this.refs=Ds,this.updater=n||Fs}var xo=yo.prototype=new $s;xo.constructor=yo;Us(xo,mn.prototype);xo.isPureReactComponent=!0;var va=Array.isArray,As=Object.prototype.hasOwnProperty,wo={current:null},Bs={key:!0,ref:!0,__self:!0,__source:!0};function Ws(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)As.call(t,r)&&!Bs.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:fr,type:e,key:i,ref:o,props:l,_owner:wo.current}}function yf(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function xf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ya=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xf(""+e.key):t.toString(36)}function Fr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fr:case af:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Hl(o,0):r,va(l)?(n="",e!=null&&(n=e.replace(ya,"$&/")+"/"),Fr(l,t,n,"",function(u){return u})):l!=null&&(ko(l)&&(l=yf(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ya,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",va(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Hl(i,a);o+=Fr(i,t,n,s,l)}else if(s=vf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Hl(i,a++),o+=Fr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yr(e,t,n){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function wf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Ur={transition:null},kf={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:wo};function Vs(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=mn;O.Fragment=sf;O.Profiler=cf;O.PureComponent=yo;O.StrictMode=uf;O.Suspense=hf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;O.act=Vs;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Us({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=wo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)As.call(t,s)&&!Bs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fr,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ff,_context:e},e.Consumer=e};O.createElement=Ws;O.createFactory=function(e){var t=Ws.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:pf,render:e}};O.isValidElement=ko;O.lazy=function(e){return{$$typeof:gf,_payload:{_status:-1,_result:e},_init:wf}};O.memo=function(e,t){return{$$typeof:mf,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};O.unstable_act=Vs;O.useCallback=function(e,t){return ue.current.useCallback(e,t)};O.useContext=function(e){return ue.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};O.useEffect=function(e,t){return ue.current.useEffect(e,t)};O.useId=function(){return ue.current.useId()};O.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ue.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};O.useRef=function(e){return ue.current.useRef(e)};O.useState=function(e){return ue.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ue.current.useTransition()};O.version="18.3.1";Ms.exports=O;var S=Ms.exports;const Hs=of(S),Sf=lf({__proto__:null,default:Hs},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=S,Ef=Symbol.for("react.element"),Cf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,Pf=Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_f={key:!0,ref:!0,__self:!0,__source:!0};function Qs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)jf.call(t,r)&&!_f.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ef,type:e,key:i,ref:o,props:l,_owner:Pf.current}}kl.Fragment=Cf;kl.jsx=Qs;kl.jsxs=Qs;Is.exports=kl;var c=Is.exports,wi={},Ks={exports:{}},ke={},Ys={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,R){var L=j.length;j.push(R);e:for(;0<L;){var K=L-1>>>1,Z=j[K];if(0<l(Z,R))j[K]=R,j[L]=Z,L=K;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var R=j[0],L=j.pop();if(L!==R){j[0]=L;e:for(var K=0,Z=j.length,gr=Z>>>1;K<gr;){var Nt=2*(K+1)-1,Vl=j[Nt],Et=Nt+1,vr=j[Et];if(0>l(Vl,L))Et<Z&&0>l(vr,Vl)?(j[K]=vr,j[Et]=L,K=Et):(j[K]=Vl,j[Nt]=L,K=Nt);else if(Et<Z&&0>l(vr,L))j[K]=vr,j[Et]=L,K=Et;else break e}}return R}function l(j,R){var L=j.sortIndex-R.sortIndex;return L!==0?L:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],u=[],m=1,h=null,g=3,w=!1,x=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=j)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function y(j){if(v=!1,p(j),!x)if(n(s)!==null)x=!0,Bl(E);else{var R=n(u);R!==null&&Wl(y,R.startTime-j)}}function E(j,R){x=!1,v&&(v=!1,d(z),z=-1),w=!0;var L=g;try{for(p(R),h=n(s);h!==null&&(!(h.expirationTime>R)||j&&!ge());){var K=h.callback;if(typeof K=="function"){h.callback=null,g=h.priorityLevel;var Z=K(h.expirationTime<=R);R=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(s)&&r(s),p(R)}else r(s);h=n(s)}if(h!==null)var gr=!0;else{var Nt=n(u);Nt!==null&&Wl(y,Nt.startTime-R),gr=!1}return gr}finally{h=null,g=L,w=!1}}var P=!1,_=null,z=-1,A=5,T=-1;function ge(){return!(e.unstable_now()-T<A)}function kn(){if(_!==null){var j=e.unstable_now();T=j;var R=!0;try{R=_(!0,j)}finally{R?Sn():(P=!1,_=null)}}else P=!1}var Sn;if(typeof f=="function")Sn=function(){f(kn)};else if(typeof MessageChannel<"u"){var ma=new MessageChannel,rf=ma.port2;ma.port1.onmessage=kn,Sn=function(){rf.postMessage(null)}}else Sn=function(){k(kn,0)};function Bl(j){_=j,P||(P=!0,Sn())}function Wl(j,R){z=k(function(){j(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Bl(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var L=g;g=R;try{return j()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=g;g=j;try{return R()}finally{g=L}},e.unstable_scheduleCallback=function(j,R,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,j){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,j={id:m++,callback:R,priorityLevel:j,startTime:L,expirationTime:Z,sortIndex:-1},L>K?(j.sortIndex=L,t(u,j),n(s)===null&&j===n(u)&&(v?(d(z),z=-1):v=!0,Wl(y,L-K))):(j.sortIndex=Z,t(s,j),x||w||(x=!0,Bl(E))),j},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(j){var R=g;return function(){var L=g;g=R;try{return j.apply(this,arguments)}finally{g=L}}}})(Xs);Ys.exports=Xs;var zf=Ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=S,we=zf;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gs=new Set,Kn={};function Ut(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Gs.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ki=Object.prototype.hasOwnProperty,Tf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xa={},wa={};function Lf(e){return ki.call(wa,e)?!0:ki.call(xa,e)?!1:Tf.test(e)?wa[e]=!0:(xa[e]=!0,!1)}function Of(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,t,n,r){if(t===null||typeof t>"u"||Of(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var So=/[\-:]([a-z])/g;function No(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(So,No);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(So,No);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(So,No);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eo(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(If(t,n,l,r)&&(n=null),r||l===null?Lf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),Co=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),Js=Symbol.for("react.provider"),Zs=Symbol.for("react.context"),jo=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),Po=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),ka=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=ka&&e[ka]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ql;function On(e){if(Ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ql=t&&t[1]||""}return`
`+Ql+e}var Kl=!1;function Yl(e,t){if(!e||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function Mf(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=Yl(e.type,!1),e;case 11:return e=Yl(e.type.render,!1),e;case 1:return e=Yl(e.type,!0),e;default:return""}}function Ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Wt:return"Portal";case Si:return"Profiler";case Co:return"StrictMode";case Ni:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zs:return(e.displayName||"Context")+".Consumer";case Js:return(e._context.displayName||"Context")+".Provider";case jo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Po:return t=e.displayName||null,t!==null?t:Ci(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Ci(e(t))}catch{}}return null}function Ff(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ci(t);case 8:return t===Co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uf(e){var t=bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Uf(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ji(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tu(e,t){t=t.checked,t!=null&&Eo(e,"checked",t,!1)}function Pi(e,t){tu(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_i(e,t.type,n):t.hasOwnProperty("defaultValue")&&_i(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _i(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function zi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(In(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function nu(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,lu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Df=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){Df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function ou(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=iu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $f=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if($f[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function _o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,tn=null,nn=null;function ja(e){if(e=hr(e)){if(typeof Ii!="function")throw Error(N(280));var t=e.stateNode;t&&(t=jl(t),Ii(e.stateNode,e.type,t))}}function au(e){tn?nn?nn.push(e):nn=[e]:tn=e}function su(){if(tn){var e=tn,t=nn;if(nn=tn=null,ja(e),t)for(e=0;e<t.length;e++)ja(t[e])}}function uu(e,t){return e(t)}function cu(){}var Xl=!1;function fu(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return uu(e,t,n)}finally{Xl=!1,(tn!==null||nn!==null)&&(cu(),su())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Mi=!1;if(Ye)try{var En={};Object.defineProperty(En,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Mi=!1}function Af(e,t,n,r,l,i,o,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Dn=!1,Jr=null,Zr=!1,Fi=null,Bf={onError:function(e){Dn=!0,Jr=e}};function Wf(e,t,n,r,l,i,o,a,s){Dn=!1,Jr=null,Af.apply(Bf,arguments)}function Vf(e,t,n,r,l,i,o,a,s){if(Wf.apply(this,arguments),Dn){if(Dn){var u=Jr;Dn=!1,Jr=null}else throw Error(N(198));Zr||(Zr=!0,Fi=u)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pa(e){if(Dt(e)!==e)throw Error(N(188))}function Hf(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Pa(l),e;if(i===r)return Pa(l),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function pu(e){return e=Hf(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var mu=we.unstable_scheduleCallback,_a=we.unstable_cancelCallback,Qf=we.unstable_shouldYield,Kf=we.unstable_requestPaint,Y=we.unstable_now,Yf=we.unstable_getCurrentPriorityLevel,zo=we.unstable_ImmediatePriority,gu=we.unstable_UserBlockingPriority,qr=we.unstable_NormalPriority,Xf=we.unstable_LowPriority,vu=we.unstable_IdlePriority,Sl=null,Ae=null;function Gf(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:qf,Jf=Math.log,Zf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-(Jf(e)/Zf|0)|0}var Sr=64,Nr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Mn(a):(i&=o,i!==0&&(r=Mn(i)))}else o=n&~l,o!==0?r=Mn(o):i!==0&&(r=Mn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function bf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Oe(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=bf(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wu,To,ku,Su,Nu,Di=!1,Er=[],ut=null,ct=null,ft=null,Gn=new Map,Jn=new Map,lt=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function za(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Cn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=hr(t),t!==null&&To(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rd(e,t,n,r,l){switch(t){case"focusin":return ut=Cn(ut,e,t,n,r,l),!0;case"dragenter":return ct=Cn(ct,e,t,n,r,l),!0;case"mouseover":return ft=Cn(ft,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gn.set(i,Cn(Gn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Jn.set(i,Cn(Jn.get(i)||null,e,t,n,r,l)),!0}return!1}function Eu(e){var t=Pt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=du(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){ku(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=hr(n),t!==null&&To(t),e.blockedOn=n,!1;t.shift()}return!0}function Ra(e,t,n){Dr(e)&&n.delete(t)}function ld(){Di=!1,ut!==null&&Dr(ut)&&(ut=null),ct!==null&&Dr(ct)&&(ct=null),ft!==null&&Dr(ft)&&(ft=null),Gn.forEach(Ra),Jn.forEach(Ra)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,ld)))}function Zn(e){function t(l){return jn(l,e)}if(0<Er.length){jn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&jn(ut,e),ct!==null&&jn(ct,e),ft!==null&&jn(ft,e),Gn.forEach(t),Jn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)Eu(n),n.blockedOn===null&&lt.shift()}var rn=Ze.ReactCurrentBatchConfig,el=!0;function id(e,t,n,r){var l=M,i=rn.transition;rn.transition=null;try{M=1,Lo(e,t,n,r)}finally{M=l,rn.transition=i}}function od(e,t,n,r){var l=M,i=rn.transition;rn.transition=null;try{M=4,Lo(e,t,n,r)}finally{M=l,rn.transition=i}}function Lo(e,t,n,r){if(el){var l=$i(e,t,n,r);if(l===null)ii(e,t,r,tl,n),za(e,r);else if(rd(l,e,t,n,r))r.stopPropagation();else if(za(e,r),t&4&&-1<nd.indexOf(e)){for(;l!==null;){var i=hr(l);if(i!==null&&wu(i),i=$i(e,t,n,r),i===null&&ii(e,t,r,tl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var tl=null;function $i(e,t,n,r){if(tl=null,e=_o(r),e=Pt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=du(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tl=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yf()){case zo:return 1;case gu:return 4;case qr:case Xf:return 16;case vu:return 536870912;default:return 16}default:return 16}}var ot=null,Oo=null,$r=null;function ju(){if($r)return $r;var e,t=Oo,n=t.length,r,l="value"in ot?ot.value:ot.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return $r=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Ta(){return!1}function Se(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cr:Ta,this.isPropagationStopped=Ta,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=Se(gn),pr=H({},gn,{view:0,detail:0}),ad=Se(pr),Jl,Zl,Pn,Nl=H({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Jl=e.screenX-Pn.screenX,Zl=e.screenY-Pn.screenY):Zl=Jl=0,Pn=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),La=Se(Nl),sd=H({},Nl,{dataTransfer:0}),ud=Se(sd),cd=H({},pr,{relatedTarget:0}),ql=Se(cd),fd=H({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=Se(fd),pd=H({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=Se(pd),md=H({},gn,{data:0}),Oa=Se(md),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function Mo(){return xd}var wd=H({},pr,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=Se(wd),Sd=H({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ia=Se(Sd),Nd=H({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),Ed=Se(Nd),Cd=H({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=Se(Cd),Pd=H({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_d=Se(Pd),zd=[9,13,27,32],Fo=Ye&&"CompositionEvent"in window,$n=null;Ye&&"documentMode"in document&&($n=document.documentMode);var Rd=Ye&&"TextEvent"in window&&!$n,Pu=Ye&&(!Fo||$n&&8<$n&&11>=$n),Ma=" ",Fa=!1;function _u(e,t){switch(e){case"keyup":return zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Td(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Fa=!0,Ma);case"textInput":return e=t.data,e===Ma&&Fa?null:e;default:return null}}function Ld(e,t){if(Ht)return e==="compositionend"||!Fo&&_u(e,t)?(e=ju(),$r=Oo=ot=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pu&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function Ru(e,t,n,r){au(r),t=nl(t,"onChange"),0<t.length&&(n=new Io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,qn=null;function Id(e){Bu(e,0)}function El(e){var t=Yt(e);if(eu(t))return e}function Md(e,t){if(e==="change")return t}var Tu=!1;if(Ye){var bl;if(Ye){var ei="oninput"in document;if(!ei){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),ei=typeof Da.oninput=="function"}bl=ei}else bl=!1;Tu=bl&&(!document.documentMode||9<document.documentMode)}function $a(){An&&(An.detachEvent("onpropertychange",Lu),qn=An=null)}function Lu(e){if(e.propertyName==="value"&&El(qn)){var t=[];Ru(t,qn,e,_o(e)),fu(Id,t)}}function Fd(e,t,n){e==="focusin"?($a(),An=t,qn=n,An.attachEvent("onpropertychange",Lu)):e==="focusout"&&$a()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(qn)}function Dd(e,t){if(e==="click")return El(t)}function $d(e,t){if(e==="input"||e==="change")return El(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Ad;function bn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ki.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function Aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ba(e,t){var n=Aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aa(n)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=Iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ou(n.ownerDocument.documentElement,n)){if(r!==null&&Uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ba(n,i);var o=Ba(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wd=Ye&&"documentMode"in document&&11>=document.documentMode,Qt=null,Ai=null,Bn=null,Bi=!1;function Wa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bi||Qt==null||Qt!==Gr(r)||(r=Qt,"selectionStart"in r&&Uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&bn(Bn,r)||(Bn=r,r=nl(Ai,"onSelect"),0<r.length&&(t=new Io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},ti={},Mu={};Ye&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Cl(e){if(ti[e])return ti[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mu)return ti[e]=t[n];return e}var Fu=Cl("animationend"),Uu=Cl("animationiteration"),Du=Cl("animationstart"),$u=Cl("transitionend"),Au=new Map,Va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Au.set(e,t),Ut(t,[e])}for(var ni=0;ni<Va.length;ni++){var ri=Va[ni],Vd=ri.toLowerCase(),Hd=ri[0].toUpperCase()+ri.slice(1);wt(Vd,"on"+Hd)}wt(Fu,"onAnimationEnd");wt(Uu,"onAnimationIteration");wt(Du,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt($u,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vf(r,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Ha(l,a,u),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Ha(l,a,u),i=s}}}if(Zr)throw e=Fi,Zr=!1,Fi=null,e}function U(e,t){var n=t[Ki];n===void 0&&(n=t[Ki]=new Set);var r=e+"__bubble";n.has(r)||(Wu(t,e,2,!1),n.add(r))}function li(e,t,n){var r=0;t&&(r|=4),Wu(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Pr]){e[Pr]=!0,Gs.forEach(function(n){n!=="selectionchange"&&(Qd.has(n)||li(n,!1,e),li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,li("selectionchange",!1,t))}}function Wu(e,t,n,r){switch(Cu(t)){case 1:var l=id;break;case 4:l=od;break;default:l=Lo}n=l.bind(null,t,n,e),l=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ii(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Pt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}fu(function(){var u=i,m=_o(n),h=[];e:{var g=Au.get(e);if(g!==void 0){var w=Io,x=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":w=kd;break;case"focusin":x="focus",w=ql;break;case"focusout":x="blur",w=ql;break;case"beforeblur":case"afterblur":w=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=La;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ed;break;case Fu:case Uu:case Du:w=dd;break;case $u:w=jd;break;case"scroll":w=ad;break;case"wheel":w=_d;break;case"copy":case"cut":case"paste":w=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ia}var v=(t&4)!==0,k=!v&&e==="scroll",d=v?g!==null?g+"Capture":null:g;v=[];for(var f=u,p;f!==null;){p=f;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Xn(f,d),y!=null&&v.push(tr(f,y,p)))),k)break;f=f.return}0<v.length&&(g=new w(g,x,null,n,m),h.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Oi&&(x=n.relatedTarget||n.fromElement)&&(Pt(x)||x[Xe]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?Pt(x):null,x!==null&&(k=Dt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(v=La,y="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ia,y="onPointerLeave",d="onPointerEnter",f="pointer"),k=w==null?g:Yt(w),p=x==null?g:Yt(x),g=new v(y,f+"leave",w,n,m),g.target=k,g.relatedTarget=p,y=null,Pt(m)===u&&(v=new v(d,f+"enter",x,n,m),v.target=p,v.relatedTarget=k,y=v),k=y,w&&x)t:{for(v=w,d=x,f=0,p=v;p;p=Bt(p))f++;for(p=0,y=d;y;y=Bt(y))p++;for(;0<f-p;)v=Bt(v),f--;for(;0<p-f;)d=Bt(d),p--;for(;f--;){if(v===d||d!==null&&v===d.alternate)break t;v=Bt(v),d=Bt(d)}v=null}else v=null;w!==null&&Qa(h,g,w,v,!1),x!==null&&k!==null&&Qa(h,k,x,v,!0)}}e:{if(g=u?Yt(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=Md;else if(Ua(g))if(Tu)E=$d;else{E=Ud;var P=Fd}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Dd);if(E&&(E=E(e,u))){Ru(h,E,n,m);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&_i(g,"number",g.value)}switch(P=u?Yt(u):window,e){case"focusin":(Ua(P)||P.contentEditable==="true")&&(Qt=P,Ai=u,Bn=null);break;case"focusout":Bn=Ai=Qt=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,Wa(h,n,m);break;case"selectionchange":if(Wd)break;case"keydown":case"keyup":Wa(h,n,m)}var _;if(Fo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ht?_u(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Pu&&n.locale!=="ko"&&(Ht||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ht&&(_=ju()):(ot=m,Oo="value"in ot?ot.value:ot.textContent,Ht=!0)),P=nl(u,z),0<P.length&&(z=new Oa(z,e,null,n,m),h.push({event:z,listeners:P}),_?z.data=_:(_=zu(n),_!==null&&(z.data=_)))),(_=Rd?Td(e,n):Ld(e,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(m=new Oa("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=_))}Bu(h,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Xn(e,n),i!=null&&r.unshift(tr(e,i,l)),i=Xn(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,l?(s=Xn(n,i),s!=null&&o.unshift(tr(n,s,a))):l||(s=Xn(n,i),s!=null&&o.push(tr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Yd,"")}function _r(e,t,n){if(t=Ka(t),Ka(e)!==t&&n)throw Error(N(425))}function rl(){}var Wi=null,Vi=null;function Hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qi=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(Jd)}:Qi;function Jd(e){setTimeout(function(){throw e})}function oi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Zn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),$e="__reactFiber$"+vn,nr="__reactProps$"+vn,Xe="__reactContainer$"+vn,Ki="__reactEvents$"+vn,Zd="__reactListeners$"+vn,qd="__reactHandles$"+vn;function Pt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xa(e);e!==null;){if(n=e[$e])return n;e=Xa(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[$e]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function jl(e){return e[nr]||null}var Yi=[],Xt=-1;function kt(e){return{current:e}}function D(e){0>Xt||(e.current=Yi[Xt],Yi[Xt]=null,Xt--)}function F(e,t){Xt++,Yi[Xt]=e.current,e.current=t}var xt={},oe=kt(xt),pe=kt(!1),Lt=xt;function sn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function ll(){D(pe),D(oe)}function Ga(e,t,n){if(oe.current!==xt)throw Error(N(168));F(oe,t),F(pe,n)}function Vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,Ff(e)||"Unknown",l));return H({},n,r)}function il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Lt=oe.current,F(oe,e),F(pe,pe.current),!0}function Ja(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Vu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,D(pe),D(oe),F(oe,e)):D(pe),F(pe,n)}var Ve=null,Pl=!1,ai=!1;function Hu(e){Ve===null?Ve=[e]:Ve.push(e)}function bd(e){Pl=!0,Hu(e)}function St(){if(!ai&&Ve!==null){ai=!0;var e=0,t=M;try{var n=Ve;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,Pl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),mu(zo,St),l}finally{M=t,ai=!1}}return null}var Gt=[],Jt=0,ol=null,al=0,Ne=[],Ee=0,Ot=null,He=1,Qe="";function Ct(e,t){Gt[Jt++]=al,Gt[Jt++]=ol,ol=e,al=t}function Qu(e,t,n){Ne[Ee++]=He,Ne[Ee++]=Qe,Ne[Ee++]=Ot,Ot=e;var r=He;e=Qe;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var i=32-Oe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Oe(t)+l|n<<l|r,Qe=i+e}else He=1<<i|n<<l|r,Qe=e}function Do(e){e.return!==null&&(Ct(e,1),Qu(e,1,0))}function $o(e){for(;e===ol;)ol=Gt[--Jt],Gt[Jt]=null,al=Gt[--Jt],Gt[Jt]=null;for(;e===Ot;)Ot=Ne[--Ee],Ne[Ee]=null,Qe=Ne[--Ee],Ne[Ee]=null,He=Ne[--Ee],Ne[Ee]=null}var xe=null,ye=null,$=!1,Le=null;function Ku(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if($){var t=ye;if(t){var n=t;if(!Za(e,t)){if(Xi(e))throw Error(N(418));t=dt(n.nextSibling);var r=xe;t&&Za(e,t)?Ku(r,n):(e.flags=e.flags&-4097|2,$=!1,xe=e)}}else{if(Xi(e))throw Error(N(418));e.flags=e.flags&-4097|2,$=!1,xe=e}}}function qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function zr(e){if(e!==xe)return!1;if(!$)return qa(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hi(e.type,e.memoizedProps)),t&&(t=ye)){if(Xi(e))throw Yu(),Error(N(418));for(;t;)Ku(e,t),t=dt(t.nextSibling)}if(qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?dt(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=ye;e;)e=dt(e.nextSibling)}function un(){ye=xe=null,$=!1}function Ao(e){Le===null?Le=[e]:Le.push(e)}var ep=Ze.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function Xu(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=gt(d,f),d.index=0,d.sibling=null,d}function i(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,y){return f===null||f.tag!==6?(f=hi(p,d.mode,y),f.return=d,f):(f=l(f,p),f.return=d,f)}function s(d,f,p,y){var E=p.type;return E===Vt?m(d,f,p.props.children,y,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nt&&ba(E)===f.type)?(y=l(f,p.props),y.ref=_n(d,f,p),y.return=d,y):(y=Yr(p.type,p.key,p.props,null,d.mode,y),y.ref=_n(d,f,p),y.return=d,y)}function u(d,f,p,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=mi(p,d.mode,y),f.return=d,f):(f=l(f,p.children||[]),f.return=d,f)}function m(d,f,p,y,E){return f===null||f.tag!==7?(f=Tt(p,d.mode,y,E),f.return=d,f):(f=l(f,p),f.return=d,f)}function h(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=hi(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:return p=Yr(f.type,f.key,f.props,null,d.mode,p),p.ref=_n(d,null,f),p.return=d,p;case Wt:return f=mi(f,d.mode,p),f.return=d,f;case nt:var y=f._init;return h(d,y(f._payload),p)}if(In(f)||Nn(f))return f=Tt(f,d.mode,p,null),f.return=d,f;Rr(d,f)}return null}function g(d,f,p,y){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,f,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===E?s(d,f,p,y):null;case Wt:return p.key===E?u(d,f,p,y):null;case nt:return E=p._init,g(d,f,E(p._payload),y)}if(In(p)||Nn(p))return E!==null?null:m(d,f,p,y,null);Rr(d,p)}return null}function w(d,f,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(f,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xr:return d=d.get(y.key===null?p:y.key)||null,s(f,d,y,E);case Wt:return d=d.get(y.key===null?p:y.key)||null,u(f,d,y,E);case nt:var P=y._init;return w(d,f,p,P(y._payload),E)}if(In(y)||Nn(y))return d=d.get(p)||null,m(f,d,y,E,null);Rr(f,y)}return null}function x(d,f,p,y){for(var E=null,P=null,_=f,z=f=0,A=null;_!==null&&z<p.length;z++){_.index>z?(A=_,_=null):A=_.sibling;var T=g(d,_,p[z],y);if(T===null){_===null&&(_=A);break}e&&_&&T.alternate===null&&t(d,_),f=i(T,f,z),P===null?E=T:P.sibling=T,P=T,_=A}if(z===p.length)return n(d,_),$&&Ct(d,z),E;if(_===null){for(;z<p.length;z++)_=h(d,p[z],y),_!==null&&(f=i(_,f,z),P===null?E=_:P.sibling=_,P=_);return $&&Ct(d,z),E}for(_=r(d,_);z<p.length;z++)A=w(_,d,z,p[z],y),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?z:A.key),f=i(A,f,z),P===null?E=A:P.sibling=A,P=A);return e&&_.forEach(function(ge){return t(d,ge)}),$&&Ct(d,z),E}function v(d,f,p,y){var E=Nn(p);if(typeof E!="function")throw Error(N(150));if(p=E.call(p),p==null)throw Error(N(151));for(var P=E=null,_=f,z=f=0,A=null,T=p.next();_!==null&&!T.done;z++,T=p.next()){_.index>z?(A=_,_=null):A=_.sibling;var ge=g(d,_,T.value,y);if(ge===null){_===null&&(_=A);break}e&&_&&ge.alternate===null&&t(d,_),f=i(ge,f,z),P===null?E=ge:P.sibling=ge,P=ge,_=A}if(T.done)return n(d,_),$&&Ct(d,z),E;if(_===null){for(;!T.done;z++,T=p.next())T=h(d,T.value,y),T!==null&&(f=i(T,f,z),P===null?E=T:P.sibling=T,P=T);return $&&Ct(d,z),E}for(_=r(d,_);!T.done;z++,T=p.next())T=w(_,d,z,T.value,y),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?z:T.key),f=i(T,f,z),P===null?E=T:P.sibling=T,P=T);return e&&_.forEach(function(kn){return t(d,kn)}),$&&Ct(d,z),E}function k(d,f,p,y){if(typeof p=="object"&&p!==null&&p.type===Vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var E=p.key,P=f;P!==null;){if(P.key===E){if(E=p.type,E===Vt){if(P.tag===7){n(d,P.sibling),f=l(P,p.props.children),f.return=d,d=f;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nt&&ba(E)===P.type){n(d,P.sibling),f=l(P,p.props),f.ref=_n(d,P,p),f.return=d,d=f;break e}n(d,P);break}else t(d,P);P=P.sibling}p.type===Vt?(f=Tt(p.props.children,d.mode,y,p.key),f.return=d,d=f):(y=Yr(p.type,p.key,p.props,null,d.mode,y),y.ref=_n(d,f,p),y.return=d,d=y)}return o(d);case Wt:e:{for(P=p.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=l(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=mi(p,d.mode,y),f.return=d,d=f}return o(d);case nt:return P=p._init,k(d,f,P(p._payload),y)}if(In(p))return x(d,f,p,y);if(Nn(p))return v(d,f,p,y);Rr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=l(f,p),f.return=d,d=f):(n(d,f),f=hi(p,d.mode,y),f.return=d,d=f),o(d)):n(d,f)}return k}var cn=Xu(!0),Gu=Xu(!1),sl=kt(null),ul=null,Zt=null,Bo=null;function Wo(){Bo=Zt=ul=null}function Vo(e){var t=sl.current;D(sl),e._currentValue=t}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){ul=e,Bo=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Bo!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(ul===null)throw Error(N(308));Zt=e,ul.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var _t=null;function Ho(e){_t===null?_t=[e]:_t.push(e)}function Ju(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ho(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,Ho(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ro(e,n)}}function es(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cl(e,t,n,r){var l=e.updateQueue;rt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,m=u=s=null,a=i;do{var g=a.lane,w=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(g=t,w=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(w,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(w,h,g):x,g==null)break e;h=H({},h,g);break e;case 2:rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=w,s=h):m=m.next=w,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(s=h),l.baseState=s,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=o,e.lanes=o,e.memoizedState=h}}function ts(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var mr={},Be=kt(mr),rr=kt(mr),lr=kt(mr);function zt(e){if(e===mr)throw Error(N(174));return e}function Ko(e,t){switch(F(lr,t),F(rr,e),F(Be,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ri(t,e)}D(Be),F(Be,t)}function fn(){D(Be),D(rr),D(lr)}function qu(e){zt(lr.current);var t=zt(Be.current),n=Ri(t,e.type);t!==n&&(F(rr,e),F(Be,n))}function Yo(e){rr.current===e&&(D(Be),D(rr))}var B=kt(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var si=[];function Xo(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var Wr=Ze.ReactCurrentDispatcher,ui=Ze.ReactCurrentBatchConfig,It=0,W=null,G=null,q=null,dl=!1,Wn=!1,ir=0,tp=0;function re(){throw Error(N(321))}function Go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function Jo(e,t,n,r,l,i){if(It=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?ip:op,e=n(r,l),Wn){i=0;do{if(Wn=!1,ir=0,25<=i)throw Error(N(301));i+=1,q=G=null,t.updateQueue=null,Wr.current=ap,e=n(r,l)}while(Wn)}if(Wr.current=pl,t=G!==null&&G.next!==null,It=0,q=G=W=null,dl=!1,t)throw Error(N(300));return e}function Zo(){var e=ir!==0;return ir=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?W.memoizedState=q=e:q=q.next=e,q}function _e(){if(G===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?W.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(N(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?W.memoizedState=q=e:q=q.next=e}return q}function or(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=_e(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,u=i;do{var m=u.lane;if((It&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,W.lanes|=m,Mt|=m}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=a,Me(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fi(e){var t=_e(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Me(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bu(){}function ec(e,t){var n=W,r=_e(),l=t(),i=!Me(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,qo(rc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,ar(9,nc.bind(null,n,r,l,t),void 0,null),b===null)throw Error(N(349));It&30||tc(n,t,l)}return l}function tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nc(e,t,n,r){t.value=n,t.getSnapshot=r,lc(t)&&ic(e)}function rc(e,t,n){return n(function(){lc(t)&&ic(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function ic(e){var t=Ge(e,1);t!==null&&Ie(t,e,1,-1)}function ns(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=lp.bind(null,W,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function oc(){return _e().memoizedState}function Vr(e,t,n,r){var l=De();W.flags|=e,l.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&Go(r,o.deps)){l.memoizedState=ar(t,n,i,r);return}}W.flags|=e,l.memoizedState=ar(1|t,n,i,r)}function rs(e,t){return Vr(8390656,8,e,t)}function qo(e,t){return _l(2048,8,e,t)}function ac(e,t){return _l(4,2,e,t)}function sc(e,t){return _l(4,4,e,t)}function uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cc(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,uc.bind(null,t,e),n)}function bo(){}function fc(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dc(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pc(e,t,n){return It&21?(Me(n,t)||(n=yu(),W.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function np(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),t()}finally{M=n,ui.transition=r}}function hc(){return _e().memoizedState}function rp(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))gc(t,n);else if(n=Ju(e,t,n,r),n!==null){var l=se();Ie(n,e,r,l),vc(n,t,r)}}function lp(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))gc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Me(a,o)){var s=t.interleaved;s===null?(l.next=l,Ho(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ju(e,t,l,r),n!==null&&(l=se(),Ie(n,e,r,l),vc(n,t,r))}}function mc(e){var t=e.alternate;return e===W||t!==null&&t===W}function gc(e,t){Wn=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ro(e,n)}}var pl={readContext:Pe,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ip={readContext:Pe,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:rs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rp.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:ns,useDebugValue:bo,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ns(!1),t=e[0];return e=np.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=De();if($){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),b===null)throw Error(N(349));It&30||tc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,rs(rc.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,nc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=b.identifierPrefix;if($){var n=Qe,r=He;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:Pe,useCallback:fc,useContext:Pe,useEffect:qo,useImperativeHandle:cc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:dc,useReducer:ci,useRef:oc,useState:function(){return ci(or)},useDebugValue:bo,useDeferredValue:function(e){var t=_e();return pc(t,G.memoizedState,e)},useTransition:function(){var e=ci(or)[0],t=_e().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:ec,useId:hc,unstable_isNewReconciler:!1},ap={readContext:Pe,useCallback:fc,useContext:Pe,useEffect:qo,useImperativeHandle:cc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:dc,useReducer:fi,useRef:oc,useState:function(){return fi(or)},useDebugValue:bo,useDeferredValue:function(e){var t=_e();return G===null?t.memoizedState=e:pc(t,G.memoizedState,e)},useTransition:function(){var e=fi(or)[0],t=_e().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:ec,useId:hc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=mt(e),i=Ke(r,l);i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Ie(t,e,l,r),Br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=mt(e),i=Ke(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Ie(t,e,l,r),Br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=mt(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Ie(t,e,r,n),Br(t,e,r))}};function ls(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(l,i):!0}function yc(e,t,n){var r=!1,l=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(l=he(t)?Lt:oe.current,r=t.contextTypes,i=(r=r!=null)?sn(e,l):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function is(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function qi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Qo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Pe(i):(i=he(t)?Lt:oe.current,l.context=sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Zi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&zl.enqueueReplaceState(l,l.state,null),cl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=Mf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function di(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sp=typeof WeakMap=="function"?WeakMap:Map;function xc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,uo=r),bi(e,t)},n}function wc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bi(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function as(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ss(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var up=Ze.ReactCurrentOwner,de=!1;function ae(e,t,n,r){t.child=e===null?Gu(t,null,n,r):cn(t,e.child,n,r)}function us(e,t,n,r,l){n=n.render;var i=t.ref;return ln(t,l),r=Jo(e,t,n,r,i,l),n=Zo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):($&&n&&Do(t),t.flags|=1,ae(e,t,r,l),t.child)}function cs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,kc(e,t,i,r,l)):(e=Yr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(o,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(bn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Je(e,t,l)}return eo(e,t,n,r,l)}function Sc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(bt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(bt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(bt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(bt,ve),ve|=r;return ae(e,t,l,n),t.child}function Nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,n,r,l){var i=he(n)?Lt:oe.current;return i=sn(t,i),ln(t,l),n=Jo(e,t,n,r,i,l),r=Zo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):($&&r&&Do(t),t.flags|=1,ae(e,t,n,l),t.child)}function fs(e,t,n,r,l){if(he(n)){var i=!0;il(t)}else i=!1;if(ln(t,l),t.stateNode===null)Hr(e,t),yc(t,n,r),qi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pe(u):(u=he(n)?Lt:oe.current,u=sn(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==u)&&is(t,o,r,u),rt=!1;var g=t.memoizedState;o.state=g,cl(t,r,o,l),s=t.memoizedState,a!==r||g!==s||pe.current||rt?(typeof m=="function"&&(Zi(t,n,m,r),s=t.memoizedState),(a=rt||ls(t,n,a,r,g,s,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zu(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Re(t.type,a),o.props=u,h=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=he(n)?Lt:oe.current,s=sn(t,s));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==s)&&is(t,o,r,s),rt=!1,g=t.memoizedState,o.state=g,cl(t,r,o,l);var x=t.memoizedState;a!==h||g!==x||pe.current||rt?(typeof w=="function"&&(Zi(t,n,w,r),x=t.memoizedState),(u=rt||ls(t,n,u,r,g,x,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return to(e,t,n,r,i,l)}function to(e,t,n,r,l,i){Nc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ja(t,n,!1),Je(e,t,i);r=t.stateNode,up.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,a,i)):ae(e,t,a,i),t.memoizedState=r.state,l&&Ja(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?Ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ga(e,t.context,!1),Ko(e,t.containerInfo)}function ds(e,t,n,r,l){return un(),Ao(l),t.flags|=256,ae(e,t,n,r),t.child}var no={dehydrated:null,treeContext:null,retryLane:0};function ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cc(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(B,l&1),e===null)return Gi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ll(o,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ro(n),t.memoizedState=no,e):ea(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return cp(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=gt(a,i):(i=Tt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?ro(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=no,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ea(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Ao(r),cn(t,e.child,null,n),e=ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=di(Error(N(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ll({mode:"visible",children:r.children},l,0,null),i=Tt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,o),t.child.memoizedState=ro(o),t.memoizedState=no,i);if(!(t.mode&1))return Tr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=di(i,r,void 0),Tr(e,t,o,r)}if(a=(o&e.childLanes)!==0,de||a){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),Ie(r,e,l,-1))}return oa(),r=di(Error(N(421))),Tr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=dt(l.nextSibling),xe=t,$=!0,Le=null,e!==null&&(Ne[Ee++]=He,Ne[Ee++]=Qe,Ne[Ee++]=Ot,He=e.id,Qe=e.overflow,Ot=t),t=ea(t,r.children),t.flags|=4096,t)}function ps(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function pi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function jc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ps(e,n,t);else if(e.tag===19)ps(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),pi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}pi(t,!0,n,null,i);break;case"together":pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fp(e,t,n){switch(t.tag){case 3:Ec(t),un();break;case 5:qu(t);break;case 1:he(t.type)&&il(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(sl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Cc(e,t,n):(F(B,B.current&1),e=Je(e,t,n),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Sc(e,t,n)}return Je(e,t,n)}var Pc,lo,_c,zc;Pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lo=function(){};_c=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(Be.current);var i=null;switch(n){case"input":l=ji(e,l),r=ji(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=zi(e,l),r=zi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}Ti(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dp(e,t,n){var r=t.pendingProps;switch($o(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&ll(),le(t),null;case 3:return r=t.stateNode,fn(),D(pe),D(oe),Xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(po(Le),Le=null))),lo(e,t),le(t),null;case 5:Yo(t);var l=zt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)_c(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return le(t),null}if(e=zt(Be.current),zr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[$e]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Fn.length;l++)U(Fn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Sa(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Ea(r,i),U("invalid",r)}Ti(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&_r(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&_r(r.textContent,a,e),l=["children",""+a]):Kn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":wr(r),Na(r,i,!0);break;case"textarea":wr(r),Ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=rl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ru(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[nr]=r,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Li(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fn.length;l++)U(Fn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Sa(e,r),l=ji(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ea(e,r),l=zi(e,r),U("invalid",e);break;default:l=r}Ti(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ou(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&lu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Yn(e,s):typeof s=="number"&&Yn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&Eo(e,i,s,o))}switch(n){case"input":wr(e),Na(e,r,!1);break;case"textarea":wr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=zt(lr.current),zt(Be.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return le(t),null;case 13:if(D(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ye!==null&&t.mode&1&&!(t.flags&128))Yu(),un(),t.flags|=98560,i=!1;else if(i=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[$e]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Le!==null&&(po(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?J===0&&(J=3):oa())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return fn(),lo(e,t),e===null&&er(t.stateNode.containerInfo),le(t),null;case 10:return Vo(t.type._context),le(t),null;case 17:return he(t.type)&&ll(),le(t),null;case 19:if(D(B),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)zn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fl(e),o!==null){for(t.flags|=128,zn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>pn&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304)}else{if(!r)if(e=fl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return le(t),null}else 2*Y()-i.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=B.current,F(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return ia(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function pp(e,t){switch($o(t),t.tag){case 1:return he(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),D(pe),D(oe),Xo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yo(t),null;case 13:if(D(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(B),null;case 4:return fn(),null;case 10:return Vo(t.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var Lr=!1,ie=!1,hp=typeof WeakSet=="function"?WeakSet:Set,C=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function io(e,t,n){try{n()}catch(r){Q(e,t,r)}}var hs=!1;function mp(e,t){if(Wi=el,e=Iu(),Uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break t;if(g===n&&++u===l&&(a=o),g===i&&++m===r&&(s=o),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vi={focusedElem:e,selectionRange:n},el=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,k=x.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:Re(t.type,v),k);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=hs,hs=!1,x}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&io(t,n,i)}l=l.next}while(l!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rc(e){var t=e.alternate;t!==null&&(e.alternate=null,Rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[nr],delete t[Ki],delete t[Zd],delete t[qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}var ee=null,Te=!1;function et(e,t,n){for(n=n.child;n!==null;)Lc(e,t,n),n=n.sibling}function Lc(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:ie||qt(n,t);case 6:var r=ee,l=Te;ee=null,et(e,t,n),ee=r,Te=l,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?oi(e.parentNode,n):e.nodeType===1&&oi(e,n),Zn(e)):oi(ee,n.stateNode));break;case 4:r=ee,l=Te,ee=n.stateNode.containerInfo,Te=!0,et(e,t,n),ee=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&io(n,t,o),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!ie&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,et(e,t,n),ie=r):et(e,t,n);break;default:et(e,t,n)}}function gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hp),t.forEach(function(r){var l=Ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Te=!1;break e;case 3:ee=a.stateNode.containerInfo,Te=!0;break e;case 4:ee=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(ee===null)throw Error(N(160));Lc(i,o,l),ee=null,Te=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(u){Q(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Oc(t,e),t=t.sibling}function Oc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Fe(e),r&4){try{Vn(3,e,e.return),Rl(3,e)}catch(v){Q(e,e.return,v)}try{Vn(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:ze(t,e),Fe(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(ze(t,e),Fe(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Yn(l,"")}catch(v){Q(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&tu(l,i),Li(a,o);var u=Li(a,i);for(o=0;o<s.length;o+=2){var m=s[o],h=s[o+1];m==="style"?ou(l,h):m==="dangerouslySetInnerHTML"?lu(l,h):m==="children"?Yn(l,h):Eo(l,m,h,u)}switch(a){case"input":Pi(l,i);break;case"textarea":nu(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?en(l,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?en(l,!!i.multiple,i.defaultValue,!0):en(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(v){Q(e,e.return,v)}}break;case 6:if(ze(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){Q(e,e.return,v)}}break;case 3:if(ze(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:ze(t,e),Fe(e);break;case 13:ze(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ra=Y())),r&4&&gs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(u=ie)||m,ze(t,e),ie=u):ze(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(C=e,m=e.child;m!==null;){for(h=C=m;C!==null;){switch(g=C,w=g.child,g.tag){case 0:case 11:case 14:case 15:Vn(4,g,g.return);break;case 1:qt(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Q(r,n,v)}}break;case 5:qt(g,g.return);break;case 22:if(g.memoizedState!==null){ys(h);continue}}w!==null?(w.return=g,C=w):ys(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=iu("display",o))}catch(v){Q(e,e.return,v)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Q(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Fe(e),r&4&&gs(e);break;case 21:break;default:ze(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Yn(l,""),r.flags&=-33);var i=ms(e);so(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ms(e);ao(e,a,o);break;default:throw Error(N(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gp(e,t,n){C=e,Ic(e)}function Ic(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Lr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=Lr;var u=ie;if(Lr=o,(ie=s)&&!u)for(C=l;C!==null;)o=C,s=o.child,o.tag===22&&o.memoizedState!==null?xs(l):s!==null?(s.return=o,C=s):xs(l);for(;i!==null;)C=i,Ic(i),i=i.sibling;C=l,Lr=a,ie=u}vs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):vs(e)}}function vs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ts(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ts(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ie||t.flags&512&&oo(t)}catch(g){Q(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ys(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function xs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Q(t,l,s)}}var i=t.return;try{oo(t)}catch(s){Q(t,i,s)}break;case 5:var o=t.return;try{oo(t)}catch(s){Q(t,o,s)}}}catch(s){Q(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var vp=Math.ceil,hl=Ze.ReactCurrentDispatcher,ta=Ze.ReactCurrentOwner,je=Ze.ReactCurrentBatchConfig,I=0,b=null,X=null,te=0,ve=0,bt=kt(0),J=0,sr=null,Mt=0,Tl=0,na=0,Hn=null,fe=null,ra=0,pn=1/0,We=null,ml=!1,uo=null,ht=null,Or=!1,at=null,gl=0,Qn=0,co=null,Qr=-1,Kr=0;function se(){return I&6?Y():Qr!==-1?Qr:Qr=Y()}function mt(e){return e.mode&1?I&2&&te!==0?te&-te:ep.transition!==null?(Kr===0&&(Kr=yu()),Kr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function Ie(e,t,n,r){if(50<Qn)throw Qn=0,co=null,Error(N(185));dr(e,n,r),(!(I&2)||e!==b)&&(e===b&&(!(I&2)&&(Tl|=n),J===4&&it(e,te)),me(e,r),n===1&&I===0&&!(t.mode&1)&&(pn=Y()+500,Pl&&St()))}function me(e,t){var n=e.callbackNode;ed(e,t);var r=br(e,e===b?te:0);if(r===0)n!==null&&_a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_a(n),t===1)e.tag===0?bd(ws.bind(null,e)):Hu(ws.bind(null,e)),Gd(function(){!(I&6)&&St()}),n=null;else{switch(xu(r)){case 1:n=zo;break;case 4:n=gu;break;case 16:n=qr;break;case 536870912:n=vu;break;default:n=qr}n=Wc(n,Mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mc(e,t){if(Qr=-1,Kr=0,I&6)throw Error(N(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=br(e,e===b?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vl(e,r);else{t=r;var l=I;I|=2;var i=Uc();(b!==e||te!==t)&&(We=null,pn=Y()+500,Rt(e,t));do try{wp();break}catch(a){Fc(e,a)}while(!0);Wo(),hl.current=i,I=l,X!==null?t=0:(b=null,te=0,t=J)}if(t!==0){if(t===2&&(l=Ui(e),l!==0&&(r=l,t=fo(e,l))),t===1)throw n=sr,Rt(e,0),it(e,r),me(e,Y()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!yp(l)&&(t=vl(e,r),t===2&&(i=Ui(e),i!==0&&(r=i,t=fo(e,i))),t===1))throw n=sr,Rt(e,0),it(e,r),me(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:jt(e,fe,We);break;case 3:if(it(e,r),(r&130023424)===r&&(t=ra+500-Y(),10<t)){if(br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Qi(jt.bind(null,e,fe,We),t);break}jt(e,fe,We);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Oe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,10<r){e.timeoutHandle=Qi(jt.bind(null,e,fe,We),r);break}jt(e,fe,We);break;case 5:jt(e,fe,We);break;default:throw Error(N(329))}}}return me(e,Y()),e.callbackNode===n?Mc.bind(null,e):null}function fo(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=vl(e,t),e!==2&&(t=fe,fe=n,t!==null&&po(t)),e}function po(e){fe===null?fe=e:fe.push.apply(fe,e)}function yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Me(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~na,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function ws(e){if(I&6)throw Error(N(327));on();var t=br(e,0);if(!(t&1))return me(e,Y()),null;var n=vl(e,t);if(e.tag!==0&&n===2){var r=Ui(e);r!==0&&(t=r,n=fo(e,r))}if(n===1)throw n=sr,Rt(e,0),it(e,t),me(e,Y()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,fe,We),me(e,Y()),null}function la(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(pn=Y()+500,Pl&&St())}}function Ft(e){at!==null&&at.tag===0&&!(I&6)&&on();var t=I;I|=1;var n=je.transition,r=M;try{if(je.transition=null,M=1,e)return e()}finally{M=r,je.transition=n,I=t,!(I&6)&&St()}}function ia(){ve=bt.current,D(bt)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xd(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch($o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:fn(),D(pe),D(oe),Xo();break;case 5:Yo(r);break;case 4:fn();break;case 13:D(B);break;case 19:D(B);break;case 10:Vo(r.type._context);break;case 22:case 23:ia()}n=n.return}if(b=e,X=e=gt(e.current,null),te=ve=t,J=0,sr=null,na=Tl=Mt=0,fe=Hn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}_t=null}return e}function Fc(e,t){do{var n=X;try{if(Wo(),Wr.current=pl,dl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(It=0,q=G=W=null,Wn=!1,ir=0,ta.current=null,n===null||n.return===null){J=1,sr=t,X=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=as(o);if(w!==null){w.flags&=-257,ss(w,o,a,i,t),w.mode&1&&os(i,u,t),t=w,s=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){os(i,u,t),oa();break e}s=Error(N(426))}}else if($&&a.mode&1){var k=as(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ss(k,o,a,i,t),Ao(dn(s,a));break e}}i=s=dn(s,a),J!==4&&(J=2),Hn===null?Hn=[i]:Hn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=xc(i,s,t);es(i,d);break e;case 1:a=s;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ht===null||!ht.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=wc(i,a,t);es(i,y);break e}}i=i.return}while(i!==null)}$c(n)}catch(E){t=E,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Uc(){var e=hl.current;return hl.current=pl,e===null?pl:e}function oa(){(J===0||J===3||J===2)&&(J=4),b===null||!(Mt&268435455)&&!(Tl&268435455)||it(b,te)}function vl(e,t){var n=I;I|=2;var r=Uc();(b!==e||te!==t)&&(We=null,Rt(e,t));do try{xp();break}catch(l){Fc(e,l)}while(!0);if(Wo(),I=n,hl.current=r,X!==null)throw Error(N(261));return b=null,te=0,J}function xp(){for(;X!==null;)Dc(X)}function wp(){for(;X!==null&&!Qf();)Dc(X)}function Dc(e){var t=Bc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?$c(e):X=t,ta.current=null}function $c(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(n=dp(n,t,ve),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function jt(e,t,n){var r=M,l=je.transition;try{je.transition=null,M=1,kp(e,t,n,r)}finally{je.transition=l,M=r}return null}function kp(e,t,n,r){do on();while(at!==null);if(I&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(td(e,i),e===b&&(X=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,Wc(qr,function(){return on(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=M;M=1;var a=I;I|=4,ta.current=null,mp(e,n),Oc(n,e),Bd(Vi),el=!!Wi,Vi=Wi=null,e.current=n,gp(n),Kf(),I=a,M=o,je.transition=i}else e.current=n;if(Or&&(Or=!1,at=e,gl=l),i=e.pendingLanes,i===0&&(ht=null),Gf(n.stateNode),me(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,e=uo,uo=null,e;return gl&1&&e.tag!==0&&on(),i=e.pendingLanes,i&1?e===co?Qn++:(Qn=0,co=e):Qn=0,St(),null}function on(){if(at!==null){var e=xu(gl),t=je.transition,n=M;try{if(je.transition=null,M=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,gl=0,I&6)throw Error(N(331));var l=I;for(I|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(C=u;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Vn(8,m,i)}var h=m.child;if(h!==null)h.return=m,C=h;else for(;C!==null;){m=C;var g=m.sibling,w=m.return;if(Rc(m),m===u){C=null;break}if(g!==null){g.return=w,C=g;break}C=w}}}var x=i.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,C=d;break e}C=i.return}}var f=e.current;for(C=f;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=f;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(E){Q(a,a.return,E)}if(a===o){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(I=l,St(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{M=n,je.transition=t}}return!1}function ks(e,t,n){t=dn(n,t),t=xc(e,t,1),e=pt(e,t,1),t=se(),e!==null&&(dr(e,1,t),me(e,t))}function Q(e,t,n){if(e.tag===3)ks(e,e,n);else for(;t!==null;){if(t.tag===3){ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=dn(n,e),e=wc(t,e,1),t=pt(t,e,1),e=se(),t!==null&&(dr(t,1,e),me(t,e));break}}t=t.return}}function Sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(J===4||J===3&&(te&130023424)===te&&500>Y()-ra?Rt(e,0):na|=n),me(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=Nr,Nr<<=1,!(Nr&130023424)&&(Nr=4194304)):t=1);var n=se();e=Ge(e,t),e!==null&&(dr(e,t,n),me(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function Ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Ac(e,n)}var Bc;Bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,fp(e,t,n);de=!!(e.flags&131072)}else de=!1,$&&t.flags&1048576&&Qu(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=sn(t,oe.current);ln(t,n),l=Jo(null,t,r,e,l,n);var i=Zo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,il(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Qo(t),l.updater=zl,t.stateNode=l,l._reactInternals=t,qi(t,r,e,n),t=to(null,t,r,!0,i,n)):(t.tag=0,$&&i&&Do(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=jp(r),e=Re(r,e),l){case 0:t=eo(null,t,r,e,n);break e;case 1:t=fs(null,t,r,e,n);break e;case 11:t=us(null,t,r,e,n);break e;case 14:t=cs(null,t,r,Re(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),eo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),fs(e,t,r,l,n);case 3:e:{if(Ec(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Zu(e,t),cl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=dn(Error(N(423)),t),t=ds(e,t,r,n,l);break e}else if(r!==l){l=dn(Error(N(424)),t),t=ds(e,t,r,n,l);break e}else for(ye=dt(t.stateNode.containerInfo.firstChild),xe=t,$=!0,Le=null,n=Gu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===l){t=Je(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return qu(t),e===null&&Gi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Hi(r,l)?o=null:i!==null&&Hi(r,i)&&(t.flags|=32),Nc(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&Gi(t),null;case 13:return Cc(e,t,n);case 4:return Ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),us(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,F(sl,r._currentValue),r._currentValue=o,i!==null)if(Me(i.value,o)){if(i.children===l.children&&!pe.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ke(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ji(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ji(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ln(t,n),l=Pe(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),cs(e,t,r,l,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Hr(e,t),t.tag=1,he(r)?(e=!0,il(t)):e=!1,ln(t,n),yc(t,r,l),qi(t,r,l,n),to(null,t,r,!0,e,n);case 19:return jc(e,t,n);case 22:return Sc(e,t,n)}throw Error(N(156,t.tag))};function Wc(e,t){return mu(e,t)}function Cp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Cp(e,t,n,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jo)return 11;if(e===Po)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")aa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vt:return Tt(n.children,l,i,t);case Co:o=8,l|=8;break;case Si:return e=Ce(12,n,t,l|2),e.elementType=Si,e.lanes=i,e;case Ni:return e=Ce(13,n,t,l),e.elementType=Ni,e.lanes=i,e;case Ei:return e=Ce(19,n,t,l),e.elementType=Ei,e.lanes=i,e;case qs:return Ll(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Js:o=10;break e;case Zs:o=9;break e;case jo:o=11;break e;case Po:o=14;break e;case nt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=qs,e.lanes=n,e.stateNode={isHidden:!1},e}function hi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function mi(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sa(e,t,n,r,l,i,o,a,s){return e=new Pp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qo(i),e}function _p(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vc(e){if(!e)return xt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(he(n))return Vu(e,n,t)}return t}function Hc(e,t,n,r,l,i,o,a,s){return e=sa(n,r,!0,e,l,i,o,a,s),e.context=Vc(null),n=e.current,r=se(),l=mt(n),i=Ke(r,l),i.callback=t??null,pt(n,i,l),e.current.lanes=l,dr(e,l,r),me(e,r),e}function Ol(e,t,n,r){var l=t.current,i=se(),o=mt(l);return n=Vc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,o),e!==null&&(Ie(e,l,o,i),Br(e,l,o)),o}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ss(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ua(e,t){Ss(e,t),(e=e.alternate)&&Ss(e,t)}function zp(){return null}var Qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}Il.prototype.render=ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ol(e,t,null,null)};Il.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Ol(null,e,null,null)}),t[Xe]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&Eu(e)}};function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ns(){}function Rp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=yl(o);i.call(u)}}var o=Hc(t,r,e,0,null,!1,!1,"",Ns);return e._reactRootContainer=o,e[Xe]=o.current,er(e.nodeType===8?e.parentNode:e),Ft(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var u=yl(s);a.call(u)}}var s=sa(e,0,!1,null,null,!1,!1,"",Ns);return e._reactRootContainer=s,e[Xe]=s.current,er(e.nodeType===8?e.parentNode:e),Ft(function(){Ol(t,s,n,r)}),s}function Fl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=yl(o);a.call(s)}}Ol(t,o,e,l)}else o=Rp(n,t,e,l,r);return yl(o)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Ro(t,n|1),me(t,Y()),!(I&6)&&(pn=Y()+500,St()))}break;case 13:Ft(function(){var r=Ge(e,1);if(r!==null){var l=se();Ie(r,e,1,l)}}),ua(e,1)}};To=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=se();Ie(t,e,134217728,n)}ua(e,134217728)}};ku=function(e){if(e.tag===13){var t=mt(e),n=Ge(e,t);if(n!==null){var r=se();Ie(n,e,t,r)}ua(e,t)}};Su=function(){return M};Nu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ii=function(e,t,n){switch(t){case"input":if(Pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=jl(r);if(!l)throw Error(N(90));eu(r),Pi(r,l)}}}break;case"textarea":nu(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};uu=la;cu=Ft;var Tp={usingClientEntryPoint:!1,Events:[hr,Yt,jl,au,su,la]},Rn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{Sl=Ir.inject(Lp),Ae=Ir}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(t))throw Error(N(200));return _p(e,t,null,n)};ke.createRoot=function(e,t){if(!fa(e))throw Error(N(299));var n=!1,r="",l=Qc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=sa(e,1,!1,null,null,n,!1,r,l),e[Xe]=t.current,er(e.nodeType===8?e.parentNode:e),new ca(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=pu(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Ft(e)};ke.hydrate=function(e,t,n){if(!Ml(t))throw Error(N(200));return Fl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!fa(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Qc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Hc(t,null,e,1,n??null,l,!1,i,o),e[Xe]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Il(t)};ke.render=function(e,t,n){if(!Ml(t))throw Error(N(200));return Fl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(N(40));return e._reactRootContainer?(Ft(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=la;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Fl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function Kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)}catch(e){console.error(e)}}Kc(),Ks.exports=ke;var Op=Ks.exports,Es=Op;wi.createRoot=Es.createRoot,wi.hydrateRoot=Es.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const Cs="popstate";function Ip(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:a}=r.location;return ho("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:xl(l)}return Fp(t,n,null,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function da(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mp(){return Math.random().toString(36).substr(2,8)}function js(e,t){return{usr:e.state,key:e.key,idx:t}}function ho(e,t,n,r){return n===void 0&&(n=null),ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||Mp()})}function xl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=st.Pop,s=null,u=m();u==null&&(u=0,o.replaceState(ur({},o.state,{idx:u}),""));function m(){return(o.state||{idx:null}).idx}function h(){a=st.Pop;let k=m(),d=k==null?null:k-u;u=k,s&&s({action:a,location:v.location,delta:d})}function g(k,d){a=st.Push;let f=ho(v.location,k,d);u=m()+1;let p=js(f,u),y=v.createHref(f);try{o.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;l.location.assign(y)}i&&s&&s({action:a,location:v.location,delta:1})}function w(k,d){a=st.Replace;let f=ho(v.location,k,d);u=m();let p=js(f,u),y=v.createHref(f);o.replaceState(p,"",y),i&&s&&s({action:a,location:v.location,delta:0})}function x(k){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof k=="string"?k:xl(k);return f=f.replace(/ $/,"%20"),V(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let v={get action(){return a},get location(){return e(l,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Cs,h),s=k,()=>{l.removeEventListener(Cs,h),s=null}},createHref(k){return t(l,k)},createURL:x,encodeLocation(k){let d=x(k);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:w,go(k){return o.go(k)}};return v}var Ps;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ps||(Ps={}));function Up(e,t,n){return n===void 0&&(n="/"),Dp(e,t,n)}function Dp(e,t,n,r){let l=typeof t=="string"?yn(t):t,i=hn(l.pathname||"/",n);if(i==null)return null;let o=Yc(e);$p(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let u=Jp(i);a=Xp(o[s],u)}return a}function Yc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(V(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=vt([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(V(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yc(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Kp(u,i.index),routesMeta:m})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of Xc(i.path))l(i,o,s)}),t}function Xc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Xc(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function $p(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ap=/^:[\w-]+$/,Bp=3,Wp=2,Vp=1,Hp=10,Qp=-2,_s=e=>e==="*";function Kp(e,t){let n=e.split("/"),r=n.length;return n.some(_s)&&(r+=Qp),t&&(r+=Wp),n.filter(l=>!_s(l)).reduce((l,i)=>l+(Ap.test(i)?Bp:i===""?Vp:Hp),r)}function Yp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Xp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=mo({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),g=s.route;if(!h)return null;Object.assign(l,h.params),o.push({params:l,pathname:vt([i,h.pathname]),pathnameBase:th(vt([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=vt([i,h.pathnameBase]))}return o}function mo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:g,isOptional:w}=m;if(g==="*"){let v=a[h]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[h];return w&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Gp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),da(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Jp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return da(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qp=e=>Zp.test(e);function bp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?yn(e):e,i;if(n)if(qp(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),da(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=zs(n.substring(1),"/"):i=zs(n,t)}else i=t;return{pathname:i,search:nh(r),hash:rh(l)}}function zs(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function gi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pa(e,t){let n=eh(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ha(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=yn(e):(l=ur({},e),V(!l.pathname||!l.pathname.includes("?"),gi("?","pathname","search",l)),V(!l.pathname||!l.pathname.includes("#"),gi("#","pathname","hash",l)),V(!l.search||!l.search.includes("#"),gi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}a=h>=0?t[h]:"/"}let s=bp(l,a),u=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),th=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gc=["post","put","patch","delete"];new Set(Gc);const ih=["get",...Gc];new Set(ih);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}const Ul=S.createContext(null),Jc=S.createContext(null),qe=S.createContext(null),Dl=S.createContext(null),be=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Zc=S.createContext(null);function oh(e,t){let{relative:n}=t===void 0?{}:t;xn()||V(!1);let{basename:r,navigator:l}=S.useContext(qe),{hash:i,pathname:o,search:a}=Al(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:vt([r,o])),l.createHref({pathname:s,search:a,hash:i})}function xn(){return S.useContext(Dl)!=null}function $t(){return xn()||V(!1),S.useContext(Dl).location}function qc(e){S.useContext(qe).static||S.useLayoutEffect(e)}function $l(){let{isDataRoute:e}=S.useContext(be);return e?wh():ah()}function ah(){xn()||V(!1);let e=S.useContext(Ul),{basename:t,future:n,navigator:r}=S.useContext(qe),{matches:l}=S.useContext(be),{pathname:i}=$t(),o=JSON.stringify(pa(l,n.v7_relativeSplatPath)),a=S.useRef(!1);return qc(()=>{a.current=!0}),S.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=ha(u,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:vt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,o,i,e])}function sh(){let{matches:e}=S.useContext(be),t=e[e.length-1];return t?t.params:{}}function Al(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(qe),{matches:l}=S.useContext(be),{pathname:i}=$t(),o=JSON.stringify(pa(l,r.v7_relativeSplatPath));return S.useMemo(()=>ha(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function uh(e,t){return ch(e,t)}function ch(e,t,n,r){xn()||V(!1);let{navigator:l}=S.useContext(qe),{matches:i}=S.useContext(be),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=$t(),m;if(t){var h;let k=typeof t=="string"?yn(t):t;s==="/"||(h=k.pathname)!=null&&h.startsWith(s)||V(!1),m=k}else m=u;let g=m.pathname||"/",w=g;if(s!=="/"){let k=s.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=Up(e,{pathname:w}),v=mh(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:vt([s,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:vt([s,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&v?S.createElement(Dl.Provider,{value:{location:cr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:st.Pop}},v):v}function fh(){let e=xh(),t=lh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:l},n):null,null)}const dh=S.createElement(fh,null);class ph extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(be.Provider,{value:this.props.routeContext},S.createElement(Zc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hh(e){let{routeContext:t,match:n,children:r}=e,l=S.useContext(Ul);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(be.Provider,{value:t},r)}function mh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let m=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||V(!1),o=o.slice(0,Math.min(o.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:g,errors:w}=n,x=h.route.loader&&g[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||x){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let w,x=!1,v=null,k=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||dh,s&&(u<0&&g===0?(kh("route-fallback"),x=!0,k=null):u===g&&(x=!0,k=h.route.hydrateFallbackElement||null)));let d=t.concat(o.slice(0,g+1)),f=()=>{let p;return w?p=v:x?p=k:h.route.Component?p=S.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,S.createElement(hh,{match:h,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?S.createElement(ph,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var bc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bc||{}),ef=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ef||{});function gh(e){let t=S.useContext(Ul);return t||V(!1),t}function vh(e){let t=S.useContext(Jc);return t||V(!1),t}function yh(e){let t=S.useContext(be);return t||V(!1),t}function tf(e){let t=yh(),n=t.matches[t.matches.length-1];return n.route.id||V(!1),n.route.id}function xh(){var e;let t=S.useContext(Zc),n=vh(),r=tf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wh(){let{router:e}=gh(bc.UseNavigateStable),t=tf(ef.UseNavigateStable),n=S.useRef(!1);return qc(()=>{n.current=!0}),S.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,cr({fromRouteId:t},i)))},[e,t])}const Rs={};function kh(e,t,n){Rs[e]||(Rs[e]=!0)}function Sh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Nh(e){let{to:t,replace:n,state:r,relative:l}=e;xn()||V(!1);let{future:i,static:o}=S.useContext(qe),{matches:a}=S.useContext(be),{pathname:s}=$t(),u=$l(),m=ha(t,pa(a,i.v7_relativeSplatPath),s,l==="path"),h=JSON.stringify(m);return S.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:l}),[u,h,l,n,r]),null}function tt(e){V(!1)}function Eh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=st.Pop,navigator:i,static:o=!1,future:a}=e;xn()&&V(!1);let s=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:i,static:o,future:cr({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=yn(r));let{pathname:m="/",search:h="",hash:g="",state:w=null,key:x="default"}=r,v=S.useMemo(()=>{let k=hn(m,s);return k==null?null:{location:{pathname:k,search:h,hash:g,state:w,key:x},navigationType:l}},[s,m,h,g,w,x,l]);return v==null?null:S.createElement(qe.Provider,{value:u},S.createElement(Dl.Provider,{children:n,value:v}))}function Ch(e){let{children:t,location:n}=e;return uh(go(t),n)}new Promise(()=>{});function go(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,l)=>{if(!S.isValidElement(r))return;let i=[...t,l];if(r.type===S.Fragment){n.push.apply(n,go(r.props.children,i));return}r.type!==tt&&V(!1),!r.props.index||!r.props.children||V(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=go(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(this,arguments)}function nf(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function jh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ph(e,t){return e.button===0&&(!t||t==="_self")&&!jh(e)}const _h=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Rh="6";try{window.__reactRouterVersion=Rh}catch{}const Th=S.createContext({isTransitioning:!1}),Lh="startTransition",Ts=Sf[Lh];function Oh(e){let{basename:t,children:n,future:r,window:l}=e,i=S.useRef();i.current==null&&(i.current=Ip({window:l,v5Compat:!0}));let o=i.current,[a,s]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},m=S.useCallback(h=>{u&&Ts?Ts(()=>s(h)):s(h)},[s,u]);return S.useLayoutEffect(()=>o.listen(m),[o,m]),S.useEffect(()=>Sh(r),[r]),S.createElement(Eh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xr=S.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:s,to:u,preventScrollReset:m,viewTransition:h}=t,g=nf(t,_h),{basename:w}=S.useContext(qe),x,v=!1;if(typeof u=="string"&&Mh.test(u)&&(x=u,Ih))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=hn(y.pathname,w);y.origin===p.origin&&E!=null?u=E+y.search+y.hash:v=!0}catch{}let k=oh(u,{relative:l}),d=Uh(u,{replace:o,state:a,target:s,preventScrollReset:m,relative:l,viewTransition:h});function f(p){r&&r(p),p.defaultPrevented||d(p)}return S.createElement("a",wl({},g,{href:x||k,onClick:v||i?r:f,ref:n,target:s}))}),Tn=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:o=!1,style:a,to:s,viewTransition:u,children:m}=t,h=nf(t,zh),g=Al(s,{relative:h.relative}),w=$t(),x=S.useContext(Jc),{navigator:v,basename:k}=S.useContext(qe),d=x!=null&&Dh(g)&&u===!0,f=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,p=w.pathname,y=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;l||(p=p.toLowerCase(),y=y?y.toLowerCase():null,f=f.toLowerCase()),y&&k&&(y=hn(y,k)||y);const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let P=p===f||!o&&p.startsWith(f)&&p.charAt(E)==="/",_=y!=null&&(y===f||!o&&y.startsWith(f)&&y.charAt(f.length)==="/"),z={isActive:P,isPending:_,isTransitioning:d},A=P?r:void 0,T;typeof i=="function"?T=i(z):T=[i,P?"active":null,_?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let ge=typeof a=="function"?a(z):a;return S.createElement(Xr,wl({},h,{"aria-current":A,className:T,ref:n,style:ge,to:s,viewTransition:u}),typeof m=="function"?m(z):m)});var vo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vo||(vo={}));var Ls;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ls||(Ls={}));function Fh(e){let t=S.useContext(Ul);return t||V(!1),t}function Uh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,s=$l(),u=$t(),m=Al(e,{relative:o});return S.useCallback(h=>{if(Ph(h,n)){h.preventDefault();let g=r!==void 0?r:xl(u)===xl(m);s(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[u,s,m,r,l,n,e,i,o,a])}function Dh(e,t){t===void 0&&(t={});let n=S.useContext(Th);n==null&&V(!1);let{basename:r}=Fh(vo.useViewTransitionState),l=Al(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=hn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=hn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mo(l.pathname,o)!=null||mo(l.pathname,i)!=null}const Os="#3F6F7E",$h=({children:e})=>{const n=$t().pathname==="/";return c.jsxs("div",{className:"app-root",children:[!n&&c.jsx("header",{className:"app-header",children:c.jsx("div",{className:"app-logo",children:"UNITAP"})}),c.jsx("main",{className:"app-main",children:e}),!n&&c.jsxs("nav",{className:"app-bottom-nav",children:[c.jsxs(Tn,{to:"/dashboard",className:"nav-item",children:[c.jsx("span",{className:"nav-icon",children:"🏠"}),c.jsx("span",{className:"nav-label",children:"Home"})]}),c.jsxs(Tn,{to:"/profiles/new",className:"nav-item",children:[c.jsx("span",{className:"nav-icon",children:"🧾"}),c.jsx("span",{className:"nav-label",children:"Profile"})]}),c.jsxs(Tn,{to:"/scanner",className:"nav-item",children:[c.jsx("span",{className:"nav-icon",children:"📷"}),c.jsx("span",{className:"nav-label",children:"AI Scanner"})]}),c.jsxs(Tn,{to:"/meeting-companion",className:"nav-item",children:[c.jsx("span",{className:"nav-icon",children:"🧠"}),c.jsx("span",{className:"nav-label",children:"Companion"})]}),c.jsxs(Tn,{to:"/settings",className:"nav-item nav-item-disabled",children:[c.jsx("span",{className:"nav-icon",children:"⚙️"}),c.jsx("span",{className:"nav-label",children:"Settings"})]})]}),c.jsx("style",{children:`
        .app-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f5f5f5;
          color: #000;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif;
        }
        .app-header {
          height: 56px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid #e0e0e0;
        }
        .app-logo {
          font-weight: 700;
          letter-spacing: 0.08em;
          font-size: 18px;
          color: ${Os};
        }
        .app-main {
          flex: 1;
          padding: 16px 16px 72px;
        }
        .app-bottom-nav {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: 64px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          border-top: 1px solid #e0e0e0;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: #9e9e9e;
          text-decoration: none;
          gap: 2px;
        }
        .nav-item-active,
        .nav-item.active {
          color: ${Os};
        }
        .nav-item-disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .nav-icon {
          font-size: 18px;
        }
        @media (min-width: 769px) {
          .app-root {
            flex-direction: row;
          }
          .app-header {
            display: none;
          }
          .app-bottom-nav {
            position: static;
            width: 240px;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 16px;
            gap: 8px;
          }
          .nav-item {
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            padding: 8px 12px;
            border-radius: 8px;
          }
          .nav-item.active {
            background: rgba(63, 111, 126, 0.08);
          }
          .app-main {
            padding: 24px;
          }
        }
      `})]})},Ln="#3F6F7E",Ah=()=>{const[e,t]=S.useState(""),n=()=>{if(!e.trim())return;const r=encodeURIComponent("Connect with me on UNITAP: https://unitap.com/demo-user"),l=`https://wa.me/${e.replace(/[^0-9]/g,"")}?text=${r}`;window.open(l,"_blank")};return c.jsxs("div",{className:"home-root",children:[c.jsxs("section",{className:"home-header-card",children:[c.jsxs("div",{className:"home-header-main",children:[c.jsxs("div",{children:[c.jsx("div",{className:"home-welcome",children:"Welcome back,"}),c.jsx("div",{className:"home-name",children:"Demo User"})]}),c.jsxs("div",{className:"home-meetings-pill",children:[c.jsx("span",{className:"dot"}),"0 upcoming meetings"]})]}),c.jsx("div",{className:"home-subtitle",children:"What do you want to do right now?"})]}),c.jsxs("section",{className:"feature-grid",children:[c.jsxs(Xr,{to:"/profiles/new",className:"feature-card profile",children:[c.jsx("div",{className:"feature-icon",children:"🧾"}),c.jsx("div",{className:"feature-title",children:"Online Profile"}),c.jsx("div",{className:"feature-text",children:"Create and share your UNITAP digital profile with QR and link."}),c.jsx("div",{className:"feature-cta",children:"Open profile studio →"})]}),c.jsxs(Xr,{to:"/scanner",className:"feature-card scanner",children:[c.jsx("div",{className:"feature-icon",children:"📷"}),c.jsx("div",{className:"feature-title",children:"AI OCR Scanner"}),c.jsx("div",{className:"feature-text",children:"Scan business cards and QR codes. Auto-extract contacts into UNITAP."}),c.jsx("div",{className:"feature-cta",children:"Start scanning →"})]}),c.jsxs(Xr,{to:"/meeting-companion",className:"feature-card meeting-companion",children:[c.jsx("div",{className:"feature-icon",children:"🧠"}),c.jsx("div",{className:"feature-title",children:"AI Meeting Companion"}),c.jsx("div",{className:"feature-text",children:"Capture conversations, get instant summaries, and never miss a follow-up."}),c.jsx("div",{className:"feature-cta",children:"Open companion →"})]})]}),c.jsxs("section",{className:"home-quick-send",children:[c.jsx("div",{className:"section-title",children:"Quick Send (WhatsApp)"}),c.jsxs("div",{className:"quick-send-row",children:[c.jsx("div",{className:"country-code",children:"+91"}),c.jsx("input",{className:"quick-send-input",placeholder:"Enter WhatsApp number",value:e,onChange:r=>t(r.target.value)}),c.jsx("button",{className:"quick-send-button",type:"button",onClick:n,children:"Send Profile"})]}),c.jsx("div",{className:"helper-text",children:"Opens WhatsApp with a pre-filled message. You just hit send."})]}),c.jsx("style",{children:`
        .home-root {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .home-header-card {
          background: linear-gradient(135deg, ${Ln}, #24404a);
          color: #ffffff;
          border-radius: 16px;
          padding: 16px 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
        }
        .home-header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .home-welcome {
          font-size: 14px;
          opacity: 0.9;
        }
        .home-name {
          font-size: 22px;
          font-weight: 600;
          margin-top: 2px;
        }
        .home-meetings-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          font-size: 12px;
        }
        .home-meetings-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4caf50;
        }
        .home-subtitle {
          margin-top: 10px;
          font-size: 13px;
          opacity: 0.95;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .feature-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 14px 14px 16px;
          border-radius: 16px;
          background: #ffffff;
          color: #000000;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .feature-card.profile {
          border-left: 4px solid ${Ln};
        }
        .feature-card.scanner {
          border-left: 4px solid #ffb300;
        }
        .feature-card.meeting-companion {
          border-left: 4px solid #7b1fa2;
        }
        .feature-icon {
          font-size: 22px;
        }
        .feature-title {
          font-size: 16px;
          font-weight: 600;
        }
        .feature-text {
          font-size: 13px;
          color: #616161;
        }
        .feature-cta {
          margin-top: 4px;
          font-size: 13px;
          color: ${Ln};
          font-weight: 500;
        }
        .home-quick-send {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
        }
        .quick-send-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .country-code {
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          background: #ffffff;
          font-size: 14px;
        }
        .quick-send-input {
          flex: 1;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
        }
        .quick-send-input:focus {
          border-color: ${Ln};
        }
        .quick-send-button {
          border-radius: 8px;
          border: none;
          background: ${Ln};
          color: #ffffff;
          padding: 10px 14px;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }
        .helper-text {
          font-size: 12px;
          color: #616161;
        }
        @media (min-width: 769px) {
          .home-root {
            max-width: 960px;
            margin: 0 auto;
          }
          .home-header-card {
            padding: 20px 22px;
          }
          .home-name {
            font-size: 24px;
          }
          .feature-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `})]})},At="http://localhost:8788";async function wn(e){const t=await e.text(),n=t?JSON.parse(t):{};if(!e.ok){const r=typeof(n==null?void 0:n.error)=="string"?n.error:`Request failed (${e.status})`;throw new Error(r)}return n}async function Bh(e){const t=await fetch(`${At}/api/profiles`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return wn(t)}async function Wh(e){const t=await fetch(`${At}/api/profiles/${encodeURIComponent(e)}`);return wn(t)}async function Vh(e){const t=new FormData;t.set("image",e);const n=await fetch(`${At}/api/scans/business-card`,{method:"POST",body:t});return wn(n)}async function Hh(){const e=await fetch(`${At}/api/scans`);return wn(e)}function Qh(){return`${At}/api/scans/export.xlsx`}async function Kh(e){const t=new FormData;e.title&&t.set("title",e.title),t.set("audio",e.audioFile);const n=await fetch(`${At}/api/meetings`,{method:"POST",body:t});return wn(n)}async function Yh(){const e=await fetch(`${At}/api/meetings`);return wn(e)}const Mr="#3F6F7E",Xh=()=>{const e=$l(),[t,n]=S.useState({fullName:"",email:"",phone:"",organization:"",jobTitle:"",bio:"",username:""}),[r,l]=S.useState(null),[i,o]=S.useState({type:"idle"}),a=(u,m)=>{n(h=>({...h,[u]:m}))},s=async u=>{if(u.preventDefault(),!!t.username.trim()){o({type:"saving"});try{await Bh({username:t.username.trim(),fullName:t.fullName.trim(),email:t.email.trim(),phone:t.phone.trim(),organization:t.organization.trim()||void 0,jobTitle:t.jobTitle.trim()||void 0,bio:t.bio.trim()||void 0});const m=`https://unitap.com/${encodeURIComponent(t.username)}`;l(m),o({type:"success"}),e(`/p/${encodeURIComponent(t.username)}`)}catch(m){o({type:"error",message:m.message})}}};return c.jsxs("div",{className:"page-root",children:[c.jsx("h1",{className:"page-title",children:"Create your profile"}),c.jsx("p",{className:"page-subtitle",children:"Start with the essentials. You can add documents, media, and dual profiles later."}),c.jsxs("form",{className:"form-card",onSubmit:s,children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Username *"}),c.jsx("input",{required:!0,value:t.username,onChange:u=>a("username",u.target.value),placeholder:"username"}),c.jsxs("div",{className:"field-hint",children:["Your profile URL will be"," ",c.jsxs("span",{children:["unitap.com/",t.username||"username"]})]})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Full name *"}),c.jsx("input",{required:!0,value:t.fullName,onChange:u=>a("fullName",u.target.value),placeholder:"Your full name"})]}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Email *"}),c.jsx("input",{required:!0,type:"email",value:t.email,onChange:u=>a("email",u.target.value),placeholder:"you@company.com"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Phone *"}),c.jsx("input",{required:!0,value:t.phone,onChange:u=>a("phone",u.target.value),placeholder:"+91 98765 43210"})]})]}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Organization"}),c.jsx("input",{value:t.organization,onChange:u=>a("organization",u.target.value),placeholder:"Company name"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Job title"}),c.jsx("input",{value:t.jobTitle,onChange:u=>a("jobTitle",u.target.value),placeholder:"Your role"})]})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Bio"}),c.jsx("textarea",{rows:4,value:t.bio,onChange:u=>a("bio",u.target.value),placeholder:"Short intro, what you do, who you help."})]}),c.jsx("button",{className:"primary-button",type:"submit",children:i.type==="saving"?"Publishing...":"Publish & generate QR"}),i.type==="error"&&c.jsx("div",{className:"error-banner",children:i.message})]}),r&&c.jsxs("div",{className:"preview-card",children:[c.jsx("div",{className:"preview-header",children:"Preview"}),c.jsxs("div",{className:"preview-content",children:[c.jsxs("div",{className:"preview-left",children:[c.jsx("div",{className:"preview-avatar",children:t.fullName?t.fullName[0].toUpperCase():"U"}),c.jsxs("div",{children:[c.jsx("div",{className:"preview-name",children:t.fullName||"Your name"}),c.jsxs("div",{className:"preview-meta",children:[t.jobTitle||"Your role"," •"," ",t.organization||"Your company"]}),c.jsx("div",{className:"preview-url",children:r})]})]}),c.jsx("div",{className:"preview-qr",children:c.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(r)}`,alt:"Profile QR"})})]})]}),c.jsx("style",{children:`
        .page-root {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .page-title {
          font-size: 22px;
          font-weight: 600;
          margin: 0;
        }
        .page-subtitle {
          font-size: 13px;
          color: #616161;
          margin: 0 0 8px;
        }
        .form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        label {
          font-size: 13px;
          color: #616161;
        }
        input,
        textarea {
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
          resize: vertical;
        }
        input:focus,
        textarea:focus {
          border-color: ${Mr};
        }
        .field-hint {
          font-size: 12px;
          color: #9e9e9e;
        }
        .field-hint span {
          color: ${Mr};
        }
        .primary-button {
          margin-top: 4px;
          border-radius: 999px;
          border: none;
          padding: 10px 16px;
          background: ${Mr};
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          align-self: flex-start;
        }
        .error-banner {
          margin-top: 8px;
          padding: 10px 12px;
          border-radius: 12px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          color: #b71c1c;
          font-size: 13px;
        }
        .preview-card {
          margin-top: 8px;
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .preview-header {
          font-size: 13px;
          color: #616161;
          margin-bottom: 10px;
        }
        .preview-content {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .preview-left {
          display: flex;
          gap: 10px;
          align-items: center;
          min-width: 0;
        }
        .preview-avatar {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .preview-name {
          font-size: 15px;
          font-weight: 600;
        }
        .preview-meta {
          font-size: 12px;
          color: #616161;
          margin-top: 2px;
        }
        .preview-url {
          font-size: 12px;
          color: ${Mr};
          margin-top: 6px;
          word-break: break-all;
        }
        .preview-qr img {
          width: 112px;
          height: 112px;
          border-radius: 12px;
          border: 1px solid #e0e0e0;
          background: #fafafa;
        }
        @media (min-width: 769px) {
          .field-grid {
            flex-direction: row;
          }
          .field-grid .field {
            flex: 1;
          }
          .form-card {
            padding: 20px 20px 22px;
          }
        }
      `})]})},vi="#3F6F7E",Gh=()=>{const{username:e}=sh(),t=S.useMemo(()=>`https://unitap.com/${encodeURIComponent(e||"username")}`,[e]),[n,r]=S.useState(null),[l,i]=S.useState(null);return S.useEffect(()=>{let o=!1;if(e)return(async()=>{try{const{profile:a}=await Wh(e);o||r(a)}catch(a){o||i(a.message)}})(),()=>{o=!0}},[e]),c.jsxs("div",{className:"profile-view-root",children:[c.jsxs("section",{className:"hero-card",children:[c.jsxs("div",{className:"hero-main",children:[c.jsx("div",{className:"avatar-large",children:((n==null?void 0:n.full_name)||e||"U")[0].toUpperCase()}),c.jsxs("div",{children:[c.jsx("h1",{className:"hero-name",children:(n==null?void 0:n.full_name)||e||"Your name"}),c.jsx("p",{className:"hero-meta",children:((n==null?void 0:n.job_title)||"Job title")+" • "+((n==null?void 0:n.organization)||"Organization")}),c.jsx("p",{className:"hero-bio",children:(n==null?void 0:n.bio)||"Short bio about who you are, what you do, and how you can help."})]})]}),c.jsxs("div",{className:"hero-actions",children:[c.jsx("button",{className:"primary",type:"button",children:"Save Contact"}),c.jsx("button",{className:"secondary",type:"button",children:"Book a Meeting"})]})]}),l&&c.jsx("div",{className:"error-banner",children:l}),c.jsxs("section",{className:"section",children:[c.jsx("h2",{className:"section-title",children:"Profile link & QR"}),c.jsxs("div",{className:"link-row",children:[c.jsx("span",{className:"profile-url",children:t}),c.jsx("button",{className:"chip-button",type:"button",onClick:()=>navigator.clipboard.writeText(t),children:"Copy"})]}),c.jsx("div",{className:"qr-view-box",children:c.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(t)}`,alt:"Profile QR"})})]}),c.jsx("style",{children:`
        .profile-view-root {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .hero-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 18px 18px 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-main {
          display: flex;
          gap: 12px;
        }
        .avatar-large {
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 600;
        }
        .hero-name {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }
        .hero-meta {
          margin: 4px 0 0;
          font-size: 13px;
          color: #616161;
        }
        .hero-bio {
          margin: 8px 0 0;
          font-size: 13px;
          color: #424242;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .hero-actions .primary,
        .hero-actions .secondary {
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          border: none;
        }
        .hero-actions .primary {
          background: ${vi};
          color: #ffffff;
        }
        .hero-actions .secondary {
          background: #ffffff;
          border: 1px solid ${vi};
          color: ${vi};
        }
        .section {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 16px 18px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .section-title {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 600;
        }
        .error-banner {
          padding: 10px 12px;
          border-radius: 12px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          color: #b71c1c;
          font-size: 13px;
        }
        .link-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .profile-url {
          font-size: 13px;
          color: #000000;
          word-break: break-all;
        }
        .chip-button {
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          padding: 6px 10px;
          font-size: 12px;
          background: #fafafa;
          cursor: pointer;
        }
        .qr-view-box {
          margin-top: 14px;
          display: flex;
          justify-content: center;
        }
        .qr-view-box img {
          width: 200px;
          height: 200px;
          border-radius: 16px;
          border: 1px solid #e0e0e0;
          background: #fafafa;
        }
        @media (min-width: 769px) {
          .hero-card {
            padding: 22px 24px 18px;
          }
          .hero-main {
            gap: 16px;
          }
          .hero-name {
            font-size: 22px;
          }
        }
      `})]})},yi="#3F6F7E",Jh=()=>{const e=$l(),t=n=>{n.preventDefault(),e("/dashboard")};return c.jsxs("div",{className:"login-root",children:[c.jsxs("div",{className:"login-card",children:[c.jsx("div",{className:"brand-mark",children:"UNITAP"}),c.jsx("h1",{className:"login-title",children:"Sign in"}),c.jsx("p",{className:"login-subtitle",children:"Access your digital profile, AI scanner, and meeting companion from one place."}),c.jsxs("button",{type:"button",className:"google-button",onClick:()=>e("/dashboard"),children:[c.jsx("span",{className:"google-icon",children:"G"}),c.jsx("span",{children:"Continue with Google"})]}),c.jsxs("div",{className:"divider",children:[c.jsx("span",{}),c.jsx("span",{className:"divider-label",children:"or use email"}),c.jsx("span",{})]}),c.jsxs("form",{className:"login-form",onSubmit:t,children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Email"}),c.jsx("input",{type:"email",required:!0,placeholder:"you@company.com"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Password"}),c.jsx("input",{type:"password",required:!0,placeholder:"••••••••"})]}),c.jsx("button",{className:"primary-button",type:"submit",children:"Continue"})]}),c.jsx("p",{className:"helper-text",children:"By continuing you agree to UNITAP's Terms and Privacy Policy."})]}),c.jsx("style",{children:`
        .login-root {
          min-height: calc(100vh - 56px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .login-card {
          width: 100%;
          max-width: 380px;
          background: #ffffff;
          border-radius: 20px;
          padding: 24px 24px 20px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.12);
        }
        .brand-mark {
          font-size: 14px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${yi};
          font-weight: 600;
          margin-bottom: 10px;
        }
        .login-title {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .login-subtitle {
          margin: 6px 0 18px;
          font-size: 13px;
          color: #616161;
        }
        .google-button {
          width: 100%;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          background: #ffffff;
          cursor: pointer;
        }
        .google-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .divider {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 18px 0 14px;
        }
        .divider span:first-child,
        .divider span:last-child {
          flex: 1;
          height: 1px;
          background: #e0e0e0;
        }
        .divider-label {
          font-size: 12px;
          color: #9e9e9e;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field label {
          font-size: 13px;
          color: #616161;
        }
        .field input {
          border-radius: 10px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          font-size: 14px;
          outline: none;
        }
        .field input:focus {
          border-color: ${yi};
        }
        .primary-button {
          margin-top: 6px;
          width: 100%;
          border-radius: 999px;
          border: none;
          padding: 10px 14px;
          background: ${yi};
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
        .helper-text {
          margin: 14px 0 0;
          font-size: 11px;
          color: #9e9e9e;
          text-align: center;
        }
        @media (min-width: 769px) {
          .login-root {
            min-height: 100vh;
          }
        }
      `})]})},Ue="#3F6F7E",Zh=()=>{const e=S.useRef(null),[t,n]=S.useState({type:"idle"}),[r,l]=S.useState(null),[i,o]=S.useState([]),[a,s]=S.useState({});S.useEffect(()=>{r&&s({name:r.name||"",job_title:r.job_title||"",company:r.company||"",email:r.email||"",phone:r.phone||"",website:r.website||"",raw_text:r.raw_text||""})},[r]);const u=(v,k)=>{s(d=>({...d,[v]:k}))},m=async()=>{if(r){n({type:"loading"});try{if(!(await fetch(`http://localhost:8788/api/scans/${r.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok)throw new Error("Failed to save connection");await g(),n({type:"done"})}catch(v){n({type:"error",message:v.message})}}},h=S.useMemo(()=>Qh(),[]),g=async()=>{const{scans:v}=await Hh();o(v)};S.useEffect(()=>{g().catch(()=>{})},[]);const w=()=>{var v;(v=e.current)==null||v.click()},x=async v=>{n({type:"loading"});try{const{scan:k}=await Vh(v);l(k),await g(),n({type:"done"})}catch(k){n({type:"error",message:k.message})}};return c.jsxs("div",{className:"scanner-root",children:[c.jsxs("section",{className:"scanner-header",children:[c.jsx("h1",{children:"AI Smart Scanner"}),c.jsx("p",{children:"Scan business cards and QR codes. UNITAP will extract contact details so you can save them as connections or create profiles."})]}),c.jsxs("section",{className:"scanner-tabs",children:[c.jsx("div",{className:"tab active",children:"Business card"}),c.jsx("div",{className:"tab",children:"QR code"}),c.jsx("div",{className:"tab",children:"Scan to profile"})]}),c.jsxs("section",{className:"scanner-card",children:[c.jsx("div",{className:"camera-placeholder",children:c.jsx("span",{children:"Upload a business card image"})}),c.jsxs("div",{className:"scanner-actions",children:[c.jsx("button",{type:"button",className:"primary",children:"Capture with camera"}),c.jsx("button",{type:"button",className:"secondary",onClick:w,children:"Upload from device"}),c.jsx("input",{ref:e,type:"file",accept:"image/*",style:{display:"none"},onChange:v=>{var d;const k=(d=v.target.files)==null?void 0:d[0];k&&x(k),v.currentTarget.value=""}})]}),c.jsx("p",{className:"hint",children:"This uses a free OCR provider (OCR.Space). The scan is saved to the database and appended to the Excel export."})]}),c.jsxs("section",{className:"scanner-fields",children:[c.jsx("div",{className:"scanner-fields-header",children:c.jsx("h2",{children:"Extracted details"})}),c.jsxs("div",{className:"field-grid",children:[c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Full name"}),c.jsx("input",{value:a.name||"",onChange:v=>u("name",v.target.value),placeholder:"—"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Job title"}),c.jsx("input",{value:a.job_title||"",onChange:v=>u("job_title",v.target.value),placeholder:"—"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Company"}),c.jsx("input",{value:a.company||"",onChange:v=>u("company",v.target.value),placeholder:"—"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Email"}),c.jsx("input",{value:a.email||"",onChange:v=>u("email",v.target.value),placeholder:"—"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Phone"}),c.jsx("input",{value:a.phone||"",onChange:v=>u("phone",v.target.value),placeholder:"—"})]}),c.jsxs("div",{className:"field",children:[c.jsx("label",{children:"Website"}),c.jsx("input",{value:a.website||"",onChange:v=>u("website",v.target.value),placeholder:"—"})]}),c.jsxs("div",{className:"field full-width",children:[c.jsx("label",{children:"Raw OCR Text (for debugging)"}),c.jsx("textarea",{value:a.raw_text||"",onChange:v=>u("raw_text",v.target.value),placeholder:"No raw text detected yet...",rows:4})]})]}),c.jsxs("div",{className:"scanner-cta-row",children:[c.jsx("button",{type:"button",className:"primary",onClick:m,children:"Save as connection"}),c.jsx("a",{href:h,download:"unitap_scans.xlsx",style:{textDecoration:"none"},children:c.jsx("button",{type:"button",className:"excel-btn",children:"📊 See the excel file"})}),c.jsx("button",{type:"button",className:"ghost",children:"Create UNITAP profile"})]}),t.type==="loading"&&c.jsx("div",{className:"info-banner",children:"Scanning..."}),t.type==="error"&&c.jsx("div",{className:"error-banner",children:t.message})]}),c.jsxs("section",{className:"history",children:[c.jsxs("div",{className:"history-header",children:[c.jsx("h2",{children:"Scan history"}),c.jsx("button",{className:"link-button",type:"button",onClick:()=>g(),children:"Refresh"})]}),i.length===0?c.jsx("div",{className:"history-empty",children:"No scans yet. Upload a card to start."}):c.jsx("div",{className:"history-list",children:i.slice(0,10).map(v=>c.jsxs("button",{type:"button",className:"history-item",onClick:()=>l(v),children:[c.jsxs("div",{className:"history-top",children:[c.jsx("div",{className:"history-name",children:v.name||"Unknown"}),c.jsx("div",{className:"history-date",children:new Date(v.created_at).toLocaleString()})]}),c.jsx("div",{className:"history-meta",children:(v.job_title||"—")+" • "+(v.email||v.phone||"—")})]},v.id))})]}),c.jsx("style",{children:`
        .scanner-root {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .scanner-header h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }
        .scanner-header p {
          margin: 6px 0 0;
          font-size: 13px;
          color: #616161;
        }
        .scanner-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }
        .tab {
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          font-size: 12px;
          white-space: nowrap;
          cursor: pointer;
          background: #ffffff;
        }
        .tab.active {
          background: ${Ue};
          border-color: ${Ue};
          color: #ffffff;
        }
        .scanner-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .camera-placeholder {
          height: 180px;
          border-radius: 16px;
          border: 1px dashed #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9e9e9e;
          font-size: 13px;
          background: #fafafa;
        }
        .scanner-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .scanner-actions .primary,
        .scanner-actions .secondary {
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          border: none;
        }
        .scanner-actions .primary {
          background: ${Ue};
          color: #ffffff;
        }
        .scanner-actions .secondary {
          background: #ffffff;
          border: 1px solid #e0e0e0;
        }
        .excel-btn {
          background: #1D6F42;
          color: #ffffff;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.2s;
        }
        .excel-btn:hover {
          opacity: 0.9;
        }
        .hint {
          font-size: 12px;
          color: #9e9e9e;
        }
        .scanner-fields {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .scanner-fields-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .scanner-fields h2 {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 600;
        }
        .export-link {
          font-size: 13px;
          color: ${Ue};
          text-decoration: none;
          white-space: nowrap;
        }
        .field-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field.full-width {
          grid-column: 1 / -1;
        }
        .field textarea {
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 9px 11px;
          font-size: 14px;
          outline: none;
          resize: vertical;
          font-family: inherit;
        }
        .field textarea:focus {
          border-color: ${Ue};
        }
        .field label {
          font-size: 13px;
          color: #616161;
        }
        .field input {
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          padding: 9px 11px;
          font-size: 14px;
          outline: none;
        }
        .field input:focus {
          border-color: ${Ue};
        }
        .scanner-cta-row {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .scanner-cta-row .primary {
          border-radius: 999px;
          border: none;
          padding: 8px 14px;
          background: ${Ue};
          color: #ffffff;
          font-size: 13px;
          cursor: pointer;
        }
        .scanner-cta-row .ghost {
          border-radius: 999px;
          border: 1px solid ${Ue};
          padding: 8px 14px;
          background: #ffffff;
          color: ${Ue};
          font-size: 13px;
          cursor: pointer;
        }
        .info-banner {
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          background: #e3f2fd;
          border: 1px solid #bbdefb;
          color: #0d47a1;
          font-size: 13px;
        }
        .error-banner {
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          color: #b71c1c;
          font-size: 13px;
        }
        .history {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .history-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .history-header h2 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }
        .link-button {
          border: none;
          background: none;
          padding: 0;
          font-size: 13px;
          color: ${Ue};
          cursor: pointer;
        }
        .history-empty {
          font-size: 13px;
          color: #9e9e9e;
        }
        .history-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .history-item {
          text-align: left;
          border-radius: 14px;
          border: 1px solid #e0e0e0;
          padding: 10px 12px;
          background: #ffffff;
          cursor: pointer;
        }
        .history-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
        }
        .history-name {
          font-size: 13px;
          font-weight: 600;
        }
        .history-date {
          font-size: 11px;
          color: #9e9e9e;
        }
        .history-meta {
          margin-top: 4px;
          font-size: 12px;
          color: #616161;
        }
        @media (min-width: 769px) {
          .scanner-root {
            max-width: 960px;
            margin: 0 auto;
          }
          .field-grid {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .field-grid .field {
            flex: 1 1 45%;
          }
        }
      `})]})},xi="#3F6F7E",qh=()=>{const[e,t]=S.useState(!1),n=S.useRef(null),r=S.useRef([]),[l,i]=S.useState({type:"idle"}),[o,a]=S.useState(""),[s,u]=S.useState(null),[m,h]=S.useState([]),g=S.useMemo(()=>typeof MediaRecorder<"u",[]),w=async()=>{const{meetings:k}=await Yh();h(k)};S.useEffect(()=>{w().catch(()=>{})},[]);const x=async()=>{try{const k=await navigator.mediaDevices.getUserMedia({audio:!0}),d=new MediaRecorder(k);r.current=[],d.ondataavailable=f=>{f.data.size>0&&r.current.push(f.data)},d.onstop=()=>{k.getTracks().forEach(f=>f.stop())},d.start(),n.current=d,t(!0),i({type:"recording"})}catch(k){i({type:"error",message:k.message})}},v=async()=>{const k=n.current;if(!k)return;t(!1),i({type:"processing"}),await new Promise(p=>{k.onstop=()=>p(),k.stop()});const d=new Blob(r.current,{type:"audio/webm"}),f=new File([d],"meeting.webm",{type:"audio/webm"});try{const{meeting:p}=await Kh({title:o.trim()||void 0,audioFile:f});u(p),await w(),i({type:"done"})}catch(p){i({type:"error",message:p.message})}};return c.jsxs("div",{className:"mc-root",children:[c.jsxs("section",{className:"mc-header",children:[c.jsx("h1",{children:"AI Meeting Companion"}),c.jsx("p",{children:"Turn real-world conversations into structured summaries, action items, and follow-ups."})]}),c.jsxs("section",{className:"mc-actions",children:[c.jsx("input",{className:"title-input",value:o,onChange:k=>a(k.target.value),placeholder:"Meeting title (optional)"}),e?c.jsx("button",{type:"button",className:"danger",onClick:v,children:"Stop & generate summary"}):c.jsx("button",{type:"button",className:"primary",onClick:x,disabled:!g||l.type==="processing",children:"Start recording"})]}),l.type==="processing"&&c.jsx("div",{className:"info-banner",children:"Processing audio (free tier can be slow). Keep this tab open."}),l.type==="error"&&c.jsx("div",{className:"error-banner",children:l.message}),s&&c.jsxs("section",{className:"mc-result",children:[c.jsx("h2",{children:"Latest summary"}),c.jsx("div",{className:"mc-summary",children:s.summary}),c.jsx("h3",{children:"Action items"}),(s.action_items||[]).length===0?c.jsx("div",{className:"muted",children:"No action items detected."}):c.jsx("ul",{className:"items",children:(s.action_items||[]).map((k,d)=>c.jsx("li",{children:k},d))})]}),c.jsxs("section",{className:"mc-list",children:[c.jsxs("div",{className:"mc-list-header",children:[c.jsx("h2",{children:"Recent meetings"}),c.jsx("button",{className:"link-button",type:"button",onClick:()=>w(),children:"Refresh"})]}),m.length===0?c.jsx("div",{className:"mc-empty-hint",children:"No meetings yet. Record one to generate a transcript, summary, and action items."}):c.jsx("div",{className:"history-list",children:m.slice(0,10).map(k=>c.jsx("button",{type:"button",className:"mc-card",onClick:()=>u(k),children:c.jsxs("div",{className:"mc-card-main",children:[c.jsx("div",{className:"avatar",children:(k.title||"M")[0].toUpperCase()}),c.jsxs("div",{children:[c.jsx("div",{className:"mc-title",children:k.title||"Untitled meeting"}),c.jsx("div",{className:"mc-meta",children:new Date(k.created_at).toLocaleString()}),c.jsxs("div",{className:"mc-tags",children:[c.jsxs("span",{children:[(k.action_items||[]).length," action items"]}),c.jsx("span",{children:k.transcript?"Transcript":"No transcript"})]})]})]})},k.id))})]}),c.jsx("style",{children:`
        .mc-root {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .mc-header h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }
        .mc-header p {
          margin: 6px 0 0;
          font-size: 13px;
          color: #616161;
        }
        .mc-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .title-input {
          flex: 1;
          min-width: 220px;
          border-radius: 999px;
          border: 1px solid #e0e0e0;
          padding: 8px 12px;
          font-size: 13px;
          outline: none;
          background: #ffffff;
        }
        .title-input:focus {
          border-color: ${xi};
        }
        .mc-actions .primary,
        .mc-actions .secondary {
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          border: none;
        }
        .mc-actions .primary {
          background: ${xi};
          color: #ffffff;
        }
        .mc-actions .danger {
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          border: none;
          background: #c62828;
          color: #ffffff;
        }
        .info-banner {
          padding: 10px 12px;
          border-radius: 12px;
          background: #e3f2fd;
          border: 1px solid #bbdefb;
          color: #0d47a1;
          font-size: 13px;
        }
        .error-banner {
          padding: 10px 12px;
          border-radius: 12px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          color: #b71c1c;
          font-size: 13px;
        }
        .mc-result {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .mc-result h2 {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 600;
        }
        .mc-result h3 {
          margin: 12px 0 8px;
          font-size: 13px;
          font-weight: 600;
        }
        .mc-summary {
          font-size: 13px;
          color: #424242;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        .muted {
          font-size: 12px;
          color: #9e9e9e;
        }
        .items {
          margin: 0;
          padding-left: 18px;
          font-size: 13px;
          color: #424242;
        }
        .mc-list {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .mc-list-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .mc-list-header h2 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }
        .mc-card {
          border-radius: 14px;
          border: 1px solid #e0e0e0;
          padding: 12px 12px 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          text-align: left;
          background: #ffffff;
          cursor: pointer;
        }
        .mc-card-main {
          display: flex;
          gap: 10px;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          background: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
        }
        .mc-title {
          font-size: 14px;
          font-weight: 600;
        }
        .mc-meta {
          font-size: 12px;
          color: #616161;
          margin-top: 2px;
        }
        .mc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
          font-size: 11px;
          color: #616161;
        }
        .mc-tags span {
          padding: 3px 8px;
          border-radius: 999px;
          background: #f5f5f5;
        }
        .mc-card-footer {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }
        .link-button {
          border: none;
          background: none;
          padding: 0;
          font-size: 12px;
          color: ${xi};
          cursor: pointer;
        }
        .mc-empty-hint {
          margin-top: 10px;
          font-size: 12px;
          color: #9e9e9e;
        }
        .history-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (min-width: 769px) {
          .mc-root {
            max-width: 960px;
            margin: 0 auto;
          }
        }
      `})]})},bh=()=>c.jsx($h,{children:c.jsxs(Ch,{children:[c.jsx(tt,{path:"/",element:c.jsx(Jh,{})}),c.jsx(tt,{path:"/dashboard",element:c.jsx(Ah,{})}),c.jsx(tt,{path:"/profiles/new",element:c.jsx(Xh,{})}),c.jsx(tt,{path:"/p/:username",element:c.jsx(Gh,{})}),c.jsx(tt,{path:"/scanner",element:c.jsx(Zh,{})}),c.jsx(tt,{path:"/meeting-companion",element:c.jsx(qh,{})}),c.jsx(tt,{path:"*",element:c.jsx(Nh,{to:"/",replace:!0})})]})});wi.createRoot(document.getElementById("root")).render(c.jsx(Hs.StrictMode,{children:c.jsx(Oh,{children:c.jsx(bh,{})})}));
