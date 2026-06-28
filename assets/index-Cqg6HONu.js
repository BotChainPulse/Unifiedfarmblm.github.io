var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function w(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?w(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var w=new MessageChannel,T=w.port2;w.port1.onmessage=re,ie=function(){T.postMessage(null)}}else ie=function(){_(re,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),w=Symbol.for(`react.activity`),T=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case w:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),A=`__reactFiber$`+mt,ht=`__reactProps$`+mt,gt=`__reactContainer$`+mt,_t=`__reactEvents$`+mt,vt=`__reactListeners$`+mt,yt=`__reactHandles$`+mt,bt=`__reactResources$`+mt,xt=`__reactMarker$`+mt;function St(e){delete e[A],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[A];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[A]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[A])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[A]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return ke.call(Pt,e)?!0:ke.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function j(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Er(e,t){if(e===`click`)return _r(t)}function Dr(e,t){if(e===`input`||e===`change`)return _r(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=_n&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Wt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};_n&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),At(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case w:return e=hi(31,n,t,a),e.elementType=w,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ke(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[A]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=pe(null),Qi=null,$i=null;function ea(e,t,n){k(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,O(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?k(Ca,Ca.current):k(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case ie:return t=Na(t),f(e,t,n)}if(le(t)||oe(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Na(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Na(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Na(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Wl,k(io,e),k(ro,t),Wl=e|t.baseLanes}function oo(){k(io,Wl),k(ro,ro.current)}function so(){Wl=io.current,O(ro),O(io)}var co=pe(null),lo=null;function uo(e){var t=e.alternate;k(F,F.current&1),k(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){k(F,F.current),k(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(k(F,F.current),k(co,e),lo===null&&(lo=e)):mo(e)}function mo(){k(F,F.current),k(co,co.current)}function ho(e){O(co),lo===e&&(lo=null),O(F)}var F=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){E.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[A]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=me.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=me.current,qi(t))Gi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[A]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[A]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[A]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[A]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[A]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(O(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return k(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=F.current,k(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(F),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&O(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:O(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&O(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[A]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[A]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[A]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[A]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?ft():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,E.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=ui(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case qr:case Jr:case Yr:l=zn;break;case $r:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Dr;else{v=j;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Er;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[A]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e,t){return new URL(e,t).href},x={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=b(t,n),t=s(t),t in x)return;x[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:y,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,C=/^[\\/]{2}/;function te(e,t){return t+e.replace(/\\/g,`/`)}var ne=`popstate`;function re(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ie(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=le(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),se(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:ce(t))}function r(e,t){T(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return E(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ae(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function se(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?le(t):t,state:n,key:t&&t.key||r||ae(),mask:i}}function ce({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function le(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function E(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=re(e)?e:se(h.location,e,t);n&&n(r,e),l=u()+1;let d=oe(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=re(e)?e:se(h.location,e,t);n&&n(r,e),l=u();let i=oe(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return D(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ne,d),c=e,()=>{i.removeEventListener(ne,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function D(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),w(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ce(t);return i=i.replace(/ $/,`%20`),!n&&C.test(i)&&(i=r+i),new URL(i,r)}function ue(e,t,n=`/`){return de(e,t,n,!1)}function de(e,t,n,r,i){let a=ke((typeof t==`string`?le(t):t).pathname||`/`,n);if(a==null)return null;let o=i??pe(e),s=null,c=Oe(a);for(let e=0;s==null&&e<o.length;++e)s=we(o[e],c,r);return s}function fe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function pe(e){let t=O(e);return me(t),t}function O(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Le([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),O(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Se(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=De(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of k(e.path))a(e,t,!0,n)}),t}function k(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=k(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function me(e){e.sort((e,t)=>e.score===t.score?Ce(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var he=/^:[\w-]+$/,ge=3,_e=2,ve=1,ye=10,be=-2,xe=e=>e===`*`;function Se(e,t){let n=e.split(`/`),r=n.length;return n.some(xe)&&(r+=be),t&&(r+=_e),n.filter(e=>!xe(e)).reduce((e,t)=>e+(he.test(t)?ge:t===``?ve:ye),r)}function Ce(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function we(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ee(u,l,s.matcher,s.compiledParams):Te(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Te({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Le([a,d.pathname]),pathnameBase:ze(Le([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Le([a,d.pathnameBase]))}return o}function Te(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=De(e.path,e.caseSensitive,e.end);return Ee(e,t,n,r)}function Ee(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function De(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Oe(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ke(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ae(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?le(e):e,a;return n?(n=Ie(n),a=n.startsWith(`/`)?je(n.substring(1),`/`):je(n,t)):a=t,{pathname:a,search:Be(r),hash:Ve(i)}}function je(e,t){let n=Re(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Me(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ne(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pe(e){let t=Ne(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Fe(e,t,n,r=!1){let i;typeof e==`string`?i=le(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Me(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Me(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Me(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ae(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ie=e=>e.replace(/[\\/]{2,}/g,`/`),Le=e=>Ie(e.join(`/`)),Re=e=>e.replace(/\/+$/,``),ze=e=>Re(e).replace(/^\/*/,`/`),Be=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ve=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,He=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ue(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function We(e){return Le(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ge=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ke(e,t){let n=e;if(typeof n!=`string`||!S.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ge)try{let e=new URL(window.location.href),r=C.test(n)?new URL(te(n,e.protocol)):new URL(n),a=ke(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var qe=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(qe);var Je=[`GET`,...qe];new Set(Je);var Ye=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Xe(e){try{return Ye.includes(new URL(e).protocol)}catch{return!1}}var Ze=_.createContext(null);Ze.displayName=`DataRouter`;var Qe=_.createContext(null);Qe.displayName=`DataRouterState`;var $e=_.createContext(!1);function et(){return _.useContext($e)}var tt=_.createContext({isTransitioning:!1});tt.displayName=`ViewTransition`;var nt=_.createContext(new Map);nt.displayName=`Fetchers`;var rt=_.createContext(null);rt.displayName=`Await`;var it=_.createContext(null);it.displayName=`Navigation`;var at=_.createContext(null);at.displayName=`Location`;var ot=_.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName=`Route`;var st=_.createContext(null);st.displayName=`RouteError`;var ct=`REACT_ROUTER_ERROR`,lt=`REDIRECT`,ut=`ROUTE_ERROR_RESPONSE`;function dt(e){if(e.startsWith(`${ct}:${lt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ft(e){if(e.startsWith(`${ct}:${ut}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new He(t.status,t.statusText,t.data)}catch{}}function pt(e,{relative:t}={}){w(mt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(it),{hash:i,pathname:a,search:o}=yt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Le([n,a])),r.createHref({pathname:s,search:o,hash:i})}function mt(){return _.useContext(at)!=null}function A(){return w(mt(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(at).location}var ht=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function gt(e){_.useContext(it).static||_.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=_.useContext(ot);return e?Rt():vt()}function vt(){w(mt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Ze),{basename:t,navigator:n}=_.useContext(it),{matches:r}=_.useContext(ot),{pathname:i}=A(),a=JSON.stringify(Pe(r)),o=_.useRef(!1);return gt(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(T(o.current,ht),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Fe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Le([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function yt(e,{relative:t}={}){let{matches:n}=_.useContext(ot),{pathname:r}=A(),i=JSON.stringify(Pe(n));return _.useMemo(()=>Fe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function bt(e,t){return xt(e,t)}function xt(e,t,n){w(mt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(it),{matches:i}=_.useContext(ot),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=A(),d;if(t){let e=typeof t==`string`?le(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ue(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ot(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Le([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Le([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(at.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function St(){let e=Lt(),t=Ue(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var Ct=_.createElement(St,null),wt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ft(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(ot.Provider,{value:this.props.routeContext},_.createElement(st.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(Et,{error:e},t):t}};wt.contextType=$e;var Tt=new WeakMap;function Et({children:e,error:t}){let{basename:n}=_.useContext(it);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=dt(t.digest);if(e){let r=Tt.get(t);if(r)throw r;let i=Ke(e.location,n),a=i.absoluteURL||i.to;if(Xe(a))throw Error(`Invalid redirect location`);if(Ge&&!Tt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Tt.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Dt({routeContext:e,match:t,children:n}){let r=_.useContext(Ze);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(ot.Provider,{value:e},n)}function Ot(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:We(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ct,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Dt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(wt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function kt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function At(e){let t=_.useContext(Ze);return w(t,kt(e)),t}function jt(e){let t=_.useContext(Qe);return w(t,kt(e)),t}function Mt(e){let t=_.useContext(ot);return w(t,kt(e)),t}function Nt(e){let t=Mt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pt(){return Nt(`useRouteId`)}function Ft(){let e=jt(`useNavigation`);return _.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function It(){let{matches:e,loaderData:t}=jt(`useMatches`);return _.useMemo(()=>e.map(e=>fe(e,t)),[e,t])}function Lt(){let e=_.useContext(st),t=jt(`useRouteError`),n=Nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=At(`useNavigate`),t=Nt(`useNavigate`),n=_.useRef(!1);return gt(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{T(n.current,ht),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,T(!1,n))}_.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return xt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ht(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ut({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!mt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=le(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=ke(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(it.Provider,{value:c},_.createElement(at.Provider,{children:t,value:h}))}function Wt({children:e,location:t}){return bt(Gt(e),t)}_.Component;function Gt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Gt(e.props.children,i));return}w(e.type===Ht,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Gt(e.props.children,i)),n.push(a)}),n}var Kt=`get`,qt=`application/x-www-form-urlencoded`;function Jt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Yt(e){return Jt(e)&&e.tagName.toLowerCase()===`button`}function Xt(e){return Jt(e)&&e.tagName.toLowerCase()===`form`}function Zt(e){return Jt(e)&&e.tagName.toLowerCase()===`input`}function Qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $t(e,t){return e.button===0&&(!t||t===`_self`)&&!Qt(e)}var en=null;function tn(){if(en===null)try{new FormData(document.createElement(`form`),0),en=!1}catch{en=!0}return en}var nn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function rn(e){return e!=null&&!nn.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qt}"`),null):e}function an(e,t){let n,r,i,a,o;if(Xt(e)){let o=e.getAttribute(`action`);r=o?ke(o,t):null,n=e.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`enctype`))||qt,a=new FormData(e)}else if(Yt(e)||Zt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?ke(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Kt,i=rn(e.getAttribute(`formenctype`))||rn(o.getAttribute(`enctype`))||qt,a=new FormData(o,e),!tn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Jt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Kt,r=null,i=qt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var on={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},sn=/[&><\u2028\u2029]/g;function cn(e){return e.replace(sn,e=>on[e])}function ln(e,t){if(e===!1||e==null)throw Error(t)}function un(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&ke(i.pathname,t)===`/`?i.pathname=`${Re(t)}/_root.${r}`:i.pathname=`${Re(i.pathname)}.${r}`,i}async function dn(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fn(e){return e!=null&&typeof e.page==`string`}function pn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function mn(e,t,n){return yn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await dn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(pn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function hn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function gn(e,t,{includeHydrateFallback:n}={}){return _n(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function _n(e){return[...new Set(e)]}function vn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function yn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!fn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(vn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function bn(){let e=_.useContext(Ze);return ln(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function xn(){let e=_.useContext(Qe);return ln(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Sn=_.createContext(void 0);Sn.displayName=`FrameworkContext`;function Cn(){let e=_.useContext(Sn);return ln(e,`You must render this element inside a <HydratedRouter> element`),e}function wn(e,t){let n=_.useContext(Sn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Tn(s,p),onBlur:Tn(c,m),onMouseEnter:Tn(l,p),onMouseLeave:Tn(u,m),onTouchStart:Tn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Tn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function En({page:e,...t}){let n=et(),{nonce:r}=Cn(),{router:i}=bn(),a=_.useMemo(()=>ue(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?_.createElement(On,{page:e,matches:a,...t}):_.createElement(kn,{page:e,matches:a,...t})):null}function Dn(e){let{manifest:t,routeModules:n}=Cn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return mn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function On({page:e,matches:t,...n}){let r=A(),{future:i}=Cn(),{basename:a}=bn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=un(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function kn({page:e,matches:t,...n}){let r=A(),{future:i,manifest:a,routeModules:o}=Cn(),{basename:s}=bn(),{loaderData:c,matches:l}=xn(),u=_.useMemo(()=>hn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>hn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=un(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>gn(d,a),[d,a]),m=Dn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function An(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{jn&&(window.__reactRouterVersion=`7.18.0`)}catch{}function Mn({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=ie({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Ut,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Nn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Ut,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Nn.displayName=`unstable_HistoryRouter`;var Pn=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(it),y=typeof l==`string`&&S.test(l),b=Ke(l,h);l=b.to;let x=pt(l,{relative:r}),ee=A(),C=null;if(o){let e=Fe(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Le([h,e.pathname])),C=g.createHref(e)}let[te,ne,re]=wn(n,p),ie=Vn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function w(t){e&&e(t),t.defaultPrevented||ie(t)}let T=!(b.isExternal||i),ae=_.createElement(`a`,{...p,...re,href:(T?C:void 0)||b.absoluteURL||x,onClick:T?w:e,ref:An(m,ne),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return te&&!y?_.createElement(_.Fragment,null,ae,_.createElement(En,{page:x})):ae});Pn.displayName=`Link`;var Fn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=yt(a,{relative:c.relative}),d=A(),f=_.useContext(Qe),{navigator:p,basename:m}=_.useContext(it),h=f!=null&&Zn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=ke(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return _.createElement(Pn,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Fn.displayName=`NavLink`;var In=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Kt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(it),g=Wn(),v=Gn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&S.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});In.displayName=`Form`;function Ln({getKey:e,storageKey:t,...n}){let r=_.useContext(Sn),{basename:i}=_.useContext(it),a=A(),o=It();Yn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Jn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),_.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${cn(JSON.stringify(t||Kn))}, ${cn(JSON.stringify(s))})`}})}Ln.displayName=`ScrollRestoration`;function Rn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zn(e){let t=_.useContext(Ze);return w(t,Rn(e)),t}function Bn(e){let t=_.useContext(Qe);return w(t,Rn(e)),t}function Vn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=_t(),d=A(),f=yt(e,{relative:o});return _.useCallback(p=>{if($t(p,t)){p.preventDefault();let t=n===void 0?ce(d)===ce(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Hn=0,Un=()=>`__${String(++Hn)}__`;function Wn(){let{router:e}=zn(`useSubmit`),{basename:t}=_.useContext(it),n=Pt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=an(e,t);a.navigate===!1?await r(a.fetcherKey||Un(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Gn(e,{relative:t}={}){let{basename:n}=_.useContext(it),r=_.useContext(ot);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...yt(e||`.`,{relative:t})},o=A();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Le([n,a.pathname])),ce(a)}var Kn=`react-router-scroll-positions`,qn={};function Jn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:ke(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Yn({getKey:e,storageKey:t}={}){let{router:n}=zn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Bn(`useScrollRestoration`),{basename:a}=_.useContext(it),o=A(),s=It(),c=Ft();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Xn(_.useCallback(()=>{if(c.state===`idle`){let t=Jn(o,s,a,e);qn[t]=window.scrollY}try{sessionStorage.setItem(t||Kn,JSON.stringify(qn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Kn);e&&(qn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(qn,()=>window.scrollY,e?(t,n)=>Jn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Xn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Zn(e,{relative:t}={}){let n=_.useContext(tt);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zn(`useViewTransitionState`),i=yt(e,{relative:t});if(!n.isTransitioning)return!1;let a=ke(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ke(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Te(i.pathname,o)!=null||Te(i.pathname,a)!=null}var Qn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),$n=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),er=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),tr=e=>{let t=er(e);return t.charAt(0).toUpperCase()+t.slice(1)},nr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},rr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ir=(0,_.createContext)({}),ar=()=>(0,_.useContext)(ir),or=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ar()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...nr,width:t??l??nr.width,height:t??l??nr.height,stroke:e??f,strokeWidth:m,className:Qn(`lucide`,p,i),...!a&&!rr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),sr=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(or,{ref:i,iconNode:t,className:Qn(`lucide-${$n(tr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=tr(e),n},cr=sr(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),lr=sr(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),ur=sr(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),dr=sr(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),fr=sr(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),pr=sr(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),mr=sr(`leaf`,[[`path`,{d:`M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,key:`nnexq3`}],[`path`,{d:`M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`,key:`mt58a7`}]]),hr=sr(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),gr=sr(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),_r=sr(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),vr=sr(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),yr=sr(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),br=sr(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),xr=sr(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Sr=sr(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Cr=[{id:1,title:`How to Start a Poultry Farm in Uganda: A Complete Beginner's Guide`,category:`Getting Started`,readTime:`8 min read`,summary:`Starting a poultry farm in Uganda is one of the most practical and profitable decisions a farmer can make. With growing demand for chicken meat and eggs across the Central Region and beyond, there has never been a better time to enter this business. Whether you are in Mpigi district, Wakiso, or Mukono, the fundamentals remain the same: good planning, proper management, and consistent care will set you apart.`,content:`# How to Start a Poultry Farm in Uganda: A Complete Beginner's Guide

Starting a poultry farm in Uganda is one of the most practical and profitable decisions a farmer can make. With growing demand for chicken meat and eggs across the Central Region and beyond, there has never been a better time to enter this business. Whether you are in Mpigi district, Wakiso, or Mukono, the fundamentals remain the same: good planning, proper management, and consistent care will set you apart.

This guide walks you through everything you need to know to start your poultry farm from scratch — even if you have never raised a single chicken before.

## Why Poultry Farming in Uganda Makes Sense

Uganda's poultry industry is growing fast. Urban centres like Kampala, Entebbe, and Jinja consume thousands of chickens and eggs daily. Restaurants, schools, hospitals, and households are reliable buyers. Unlike crops that depend heavily on rainfall, poultry farming gives you control over production year-round. A well-managed small-scale farm can earn a farmer between UGX 1,500,000 and UGX 4,000,000 per cycle depending on the scale.

## Step 1: Choose the Right Location

Your farm location will affect your success more than you think. In Mpigi district and surrounding areas of the Central Region, look for land that meets these criteria:

- **Accessibility:** Choose a site reachable by motorcycle or vehicle for easy delivery of feed and collection of mature birds or eggs.
- **Drainage:** Avoid swampy or flood-prone land. Good drainage prevents disease and keeps litter dry.
- **Security:** The site should be fenced or easy to secure against thieves and predators like dogs, cats, and wild birds.
- **Water availability:** Chickens drink a lot of water. A reliable borehole, well, or piped water source is essential.
- **Distance from neighbours:** Place your poultry house at least 10 metres from residential homes to reduce odour complaints and disease spread.
- **Electricity:** While not mandatory, electricity helps with lighting, especially for layers and broilers during the first weeks.

A quarter-acre plot in Mpigi district can cost between UGX 5,000,000 and UGX 15,000,000 depending on proximity to the main road. For starters, leasing land is a smart option at roughly UGX 300,000 to UGX 600,000 per year.

## Step 2: Plan Your Starting Capital

One advantage of poultry farming is that you can start small and grow over time. Here is a realistic budget for a beginner raising 200 broilers:

| Item | Estimated Cost (UGX) |
|------|---------------------|
| Day-old chicks (200 x UGX 3,500) | 700,000 |
| Chicken house construction (simple) | 1,500,000 |
| Feed for 6-7 weeks (approx. 25 bags) | 2,500,000 |
| Drinkers and feeders | 250,000 |
| Wood shavings / litter | 150,000 |
| Medicines and vaccines | 300,000 |
| Labour (optional, part-time) | 300,000 |
| Miscellaneous | 200,000 |
| **Total** | **5,900,000** |

With proper management, 200 broilers can generate UGX 8,000,000 to UGX 10,000,000 at sale, leaving you with a decent profit after your first cycle. Many successful farmers in the Central Region started with exactly this scale.

## Step 3: Build a Simple but Effective Chicken House

You do not need an expensive structure to begin. A well-ventilated, secure house is enough. Key features include:

- **Orientation:** Position the house east-west to reduce direct sun exposure and heat buildup.
- **Ventilation:** Use wire mesh on the upper walls to allow airflow while keeping predators out.
- **Floor:** A concrete floor or compacted earth covered with wood shavings works well. Wood shavings cost about UGX 15,000 to UGX 25,000 per bag in Mpigi and nearby towns.
- **Space:** Allow at least 1 square foot per broiler chick, increasing to 2 square feet per bird as they grow. For 200 broilers, a house measuring roughly 15 feet by 30 feet is adequate.
- **Brooder section:** In the first two weeks, chicks need a smaller, warmer section within the house. You can partition this with cardboard or plastic sheeting.

Raise the house at least 1 foot off the ground if possible. This improves ventilation and protects against flooding during Uganda's heavy rainy seasons.

## Step 4: Buy Your First Chicks

Buy day-old chicks only from reputable hatcheries. Trusted suppliers in Uganda include Ugachick, Biyinzika Poultry International, and other certified hatcheries in and around Kampala and Jinja. Healthy chicks should:

- Be active and alert
- Have clean, bright eyes
- Show no signs of pasting (droppings stuck to the vent)
- Weigh between 35 and 45 grams each

Always inspect your chicks immediately upon delivery. Weak or lethargic chicks rarely recover. Do not accept birds that look sickly, no matter what the supplier says.

## Step 5: Essential Equipment You Need

Before your chicks arrive, have the following ready:

1. **Drinkers:** Start with chick fountains (small drinkers) and upgrade to bell drinkers or nipple drinkers as the birds grow. You need at least 10 chick drinkers for 200 chicks.
2. **Feeders:** Trough feeders or round hanging feeders work well. Provide enough feeder space so all chicks can eat at once.
3. **Heat source:** In the first 2 to 3 weeks, chicks need warmth. Use charcoal stoves (locally called "sigiri"), infrared bulbs, or electric brooders. Maintain a temperature of 32–35°C in week one.
4. **Thermometer:** A simple wall thermometer helps you monitor house temperature.
5. **Foot bath:** Place a disinfectant-filled foot bath at the entrance to reduce disease introduction.
6. **Record book:** Track feed consumption, deaths, vaccinations, and expenses from day one.

Most of this equipment is available at agricultural supply shops in Kampala, Nakasero Market, and major towns in the Central Region.

## Step 6: Managing the First 8 Weeks

The first eight weeks are the most critical period. Here is what to focus on:

### Week 1–2: Brooding Period
- Maintain temperature at 32–35°C for the first 3 days, then reduce by 2–3°C each week.
- Provide chick starter feed ( crumble type) ad libitum — always available.
- Use clean, fresh water with glucose or electrolytes for the first 3 days.
- Ensure 24 hours of light during the first week to help chicks find feed and water.
- Watch for pasting and clean affected chicks gently with warm water.

### Week 3–4: Transition Period
- Begin reducing temperature gradually. By week 4, the house should be at around 24–26°C.
- Switch to grower feed gradually over 3 days.
- Increase floor space if the birds look overcrowded.
- Continue Newcastle Disease (ND) vaccination as scheduled.

### Week 5–8: Growing Out
- Broilers will consume large amounts of feed now. Ensure feeders never run empty.
- Maintain good litter condition. Wet litter causes disease and reduces bird comfort.
- Monitor for signs of illness: drooping wings, reduced feeding, laboured breathing, or diarrhoea.
- Plan your market. Contact local traders, restaurants, or neighbouring households before birds reach maturity.

## Common Mistakes Beginners Make

- **Starting too big:** Begin with 100 to 300 birds. Learn first, then expand.
- **Poor biosecurity:** Never allow visitors into your poultry house without disinfecting their feet.
- **Skipping vaccines:** A single outbreak of Newcastle Disease can wipe out your entire flock. Follow the vaccination schedule strictly.
- **Buying cheap feed:** Low-quality feed leads to poor growth and high mortality. Stick to trusted brands.
- **Ignoring records:** You cannot improve what you do not measure. Write everything down.

## Conclusion

Starting a poultry farm in Uganda is achievable with proper planning and commitment. The Central Region — including Mpigi, Wakiso, and Mukono — offers excellent conditions for poultry production thanks to its climate, market access, and growing infrastructure. Start with a manageable number of birds, build a simple but functional house, buy quality chicks and feed, and follow biosecurity practices from day one.

Your first cycle will teach you more than any book or article can. Start today, learn as you go, and grow your farm into a thriving business.

---

*Ready to start your poultry journey? Contact us to learn more about quality day-old chicks, feed supplies, and farm management support across Uganda's Central Region.*
`},{id:2,title:`Broiler Chicken Feeding Guide: From Day-Old to Market Ready`,category:`Feeding`,readTime:`7 min read`,summary:`Feeding is the single most important factor in successful broiler production in Uganda. Feed accounts for 65% to 75% of your total production cost, so getting it right determines whether your farm makes a profit or a loss. This guide gives you a practical, week-by-week feeding plan from the day your chicks arrive until they reach market weight.`,content:`# Broiler Chicken Feeding Guide: From Day-Old to Market Ready

Feeding is the single most important factor in successful broiler production in Uganda. Feed accounts for 65% to 75% of your total production cost, so getting it right determines whether your farm makes a profit or a loss. This guide gives you a practical, week-by-week feeding plan from the day your chicks arrive until they reach market weight.

Whether you are farming in Mpigi, Masaka, or Jinja, these principles apply across Uganda and the wider East African region.

## Understanding Broiler Nutrition Basics

Broilers are bred to grow fast. A well-fed broiler can reach 1.8 to 2.2 kilograms live weight in just 6 to 7 weeks. But this rapid growth depends on receiving the right nutrients at the right time. The three main types of commercial broiler feed used in Uganda are:

| Feed Type | Protein Content | Used During |
|-----------|----------------|-------------|
| Starter | 22–24% crude protein | Day 1 to Day 21 (Week 1–3) |
| Grower | 20–22% crude protein | Day 22 to Day 35 (Week 4–5) |
| Finisher | 18–20% crude protein | Day 36 to market (Week 6–7) |

Major feed brands available in Uganda include Unga Farm Care, Biyinzika Feeds, Pembe Feeds, and Ugachick Feeds. Always buy from authorised dealers to avoid counterfeit products.

## Week-by-Week Feeding Schedule

### Week 1 (Day 1 to Day 7): The Critical First Week

This is the foundation week. Chicks that eat well in the first 7 days will outperform those that do not.

- **Feed type:** Broiler starter crumbles
- **Feed per bird:** Approximately 180 to 200 grams total for the week
- **Feeding method:** Scatter feed on paper or flat trays for the first 3 days so chicks can find it easily. Then transition to proper feeders.
- **Feed access:** 24 hours a day. Never let feeders go empty.
- **Water:** Fresh, clean water must be available at all times. Clean drinkers twice daily.
- **Additives:** Many farmers add glucose or liquid electrolytes to drinking water for the first 3 days to boost energy and reduce stress after transportation.

**Tip:** Chicks are naturally attracted to the sound of pecking. Gently tap the feed with your finger to encourage hesitant chicks to start eating.

### Week 2 (Day 8 to Day 14): Establishing Appetite

Chicks grow rapidly in week two. You will notice a visible increase in body size.

- **Feed type:** Broiler starter crumbles
- **Feed per bird:** Approximately 350 to 400 grams total for the week
- **Feed access:** Continue ad libitum (always available)
- **Observation:** Watch for uniform growth. Smaller chicks may need extra attention — place them in a separate section with additional feed.
- **Water:** Clean drinkers at least twice daily. Broiler chicks drink roughly 2 to 3 times the volume of feed they eat.

### Week 3 (Day 15 to Day 21): Transition to Grower Feed

By week three, your chicks have grown significantly. This is when you transition to grower feed.

- **Feed type:** Gradually mix starter and grower feed over 3 days, then feed 100% grower pellets or mash
- **Feed per bird:** Approximately 500 to 550 grams total for the week
- **Feeder space:** Increase feeder space. Overcrowded feeders lead to uneven growth.
- **Important:** Administer any pending vaccinations before stress levels rise.

### Week 4 (Day 22 to Day 28): Rapid Growth Phase

This is when broilers really start putting on weight. Feed consumption increases sharply.

- **Feed type:** Broiler grower feed
- **Feed per bird:** Approximately 650 to 700 grams total for the week
- **House management:** Ensure good ventilation. The birds generate more heat and moisture now.
- **Litter condition:** Check daily. Wet litter causes footpad problems and respiratory diseases.

### Week 5 (Day 29 to Day 35): Approaching Market Weight

Many Ugandan farmers begin selling birds in week 5 or 6, depending on the market demand and feed costs.

- **Feed type:** Broiler finisher feed
- **Feed per bird:** Approximately 750 to 850 grams total for the week
- **Feed conversion:** By now, each kilogram of weight gain requires roughly 1.8 to 2.0 kg of feed consumed.
- **Marketing:** Contact your buyers. Arrange for collection before birds become too heavy and start dying from stress.

### Week 6 to 7 (Day 36 onwards): Finishing and Market Sale

If your target market prefers heavier birds, continue feeding finisher for one more week.

- **Feed type:** Broiler finisher feed
- **Feed per bird:** Approximately 850 to 1,000 grams per week
- **Expected weight:** 1.8 kg to 2.5 kg live weight depending on breed and management
- **Critical:** Do not keep birds beyond 8 weeks unless you have a confirmed market. Feed costs will eat into your profits rapidly.

## Summary Feed Table (Per Bird)

| Week | Feed Type | Approx. Feed per Bird (grams) | Cumulative Feed (grams) |
|------|-----------|------------------------------|------------------------|
| 1 | Starter | 180–200 | 200 |
| 2 | Starter | 350–400 | 580 |
| 3 | Grower | 500–550 | 1,130 |
| 4 | Grower | 650–700 | 1,800 |
| 5 | Finisher | 750–850 | 2,600 |
| 6 | Finisher | 850–1,000 | 3,500 |
| 7 | Finisher | 900–1,100 | 4,500 |

For 500 broilers, you will need approximately 35 to 45 bags of 70kg feed over a 6 to 7 week cycle. At UGX 85,000 to UGX 100,000 per bag, feed alone will cost UGX 2,975,000 to UGX 4,500,000 depending on brand and feeding efficiency.

## Water Management: The Forgotten Nutrient

Water is the most critical nutrient for broilers, yet many farmers in Uganda underestimate its importance. Here are practical guidelines:

- **Quantity:** Broilers drink roughly 1.5 to 2 times the weight of feed consumed. In hot weather, this can double.
- **Quality:** Water must be clean, odourless, and free from contaminants. Test borehole water regularly.
- **Temperature:** In very hot conditions, slightly cool water encourages more drinking and reduces heat stress.
- **Cleaning:** Wash drinkers thoroughly every day. Algae and slime build-up harbour bacteria.
- **Nipple drinkers:** If you can afford them, nipple drinkers reduce spillage, keep litter drier, and improve biosecurity. A basic nipple drinker line costs UGX 200,000 to UGX 400,000 depending on length.

Never ration water. Even a few hours without water will permanently stunt growth and increase mortality.

## Understanding Feed Conversion Ratio (FCR)

Feed Conversion Ratio is the amount of feed required to produce 1 kg of live body weight. It is the most important efficiency measure in broiler farming.

**Formula:** FCR = Total Feed Consumed (kg) ÷ Total Live Weight Gained (kg)

A good FCR for broilers in Uganda ranges from 1.7 to 2.1 by the time birds reach market weight. For example:

- If your 500 birds consume 2,250 kg of feed (32 bags x 70kg)
- And gain a total of 1,125 kg live weight
- Your FCR = 2,250 ÷ 1,125 = **2.0**

An FCR above 2.2 suggests problems: poor feed quality, disease, heat stress, or bad management. Track your FCR for every batch and use it to compare performance over time.

## Common Feeding Mistakes That Cost You Money

1. **Switching feed brands mid-cycle:** Different brands have different formulations. Sudden changes cause digestive upset. If you must change, do it gradually over 3–4 days.

2. **Allowing feed to run out:** Empty feeders for even a few hours cause birds to gorge when feed returns, leading to digestive problems and uneven growth.

3. **Storing feed poorly:** Uganda's humid climate spoils feed quickly. Store bags on pallets off the floor, in a cool, dry, well-ventilated room. Never store feed for more than 3 weeks.

4. **Ignoring mouldy feed:** Mould produces toxins that damage the liver, suppress immunity, and reduce growth. Discard any feed with a musty smell or visible mould. Do not try to save money by feeding mouldy feed.

5. **Poor feeder management:** Adjust feeder height as birds grow. Feeders should always be at the level of the birds' backs. Too low causes wastage; too high reduces intake.

6. **Not weighing birds regularly:** Weigh a sample of 20 to 30 birds weekly. This tells you if your feeding program is working before it is too late to correct.

## Practical Tips for Ugandan Farmers

- **Buy feed in bulk:** Some suppliers offer discounts for orders of 50 bags or more. Coordinate with neighbouring farmers if your individual order is small.
- **Monitor weather:** During hot months (December to February), reduce feeding during midday heat and provide more water. Birds eat less when overheated.
- **Record everything:** Note daily feed consumption, water intake, mortality, and bird weights. These records are your farm's report card.
- **Plan cash flow:** You need to buy feed before you sell birds. Many beginners fail because they run out of money for feed in week 4 or 5. Have enough capital to complete the full cycle.

## Conclusion

Feeding broilers successfully is not complicated, but it requires discipline and attention to detail. Follow the week-by-week plan, use quality feed from trusted suppliers, never restrict water, and track your FCR. Avoid the common mistakes that drain profits, and your broiler farm will grow into a sustainable business.

With good management, a batch of 500 broilers in Uganda can yield a net profit of UGX 2,000,000 to UGX 4,000,000 in just 6 to 7 weeks. That is the power of proper feeding.

---

*Looking for quality broiler feed and expert advice? We supply tested, high-performance feed across Uganda's Central Region — from Mpigi to Kampala to Jinja. Contact us today.*
`},{id:3,title:`Layer Management: Maximizing Egg Production on Your Farm`,category:`Getting Started`,readTime:`8 min read`,summary:`Raising layer chickens for egg production is one of the most rewarding branches of poultry farming in Uganda. A well-managed layer can produce 280 to 320 eggs in her first laying cycle, making layers a reliable source of daily income for committed farmers. However, consistent egg production does not happen by accident.`,content:`# Layer Management: Maximizing Egg Production on Your Farm

Raising layer chickens for egg production is one of the most rewarding branches of poultry farming in Uganda. A well-managed layer can produce 280 to 320 eggs in her first laying cycle, making layers a reliable source of daily income for committed farmers. However, consistent egg production does not happen by accident. It requires careful attention to housing, lighting, nutrition, water quality, and daily management practices.

This article covers everything you need to know to keep your layers productive, whether you are farming in Mpigi district, Wakiso, or anywhere else across Uganda.

## Housing Your Layers: Build for Comfort and Production

The laying house is where your hens will spend most of their lives. Poor housing leads to stress, disease, and reduced egg output. Here is what to consider:

### Space Requirements
Each layer hen needs adequate floor space to move freely, access feed and water, and rest comfortably. The recommended space is:

- **Deep litter system:** 1.5 to 2 square feet per bird
- **Cage system:** 450 to 500 square centimetres per bird

For a flock of 500 layers on deep litter, you need a house measuring at least 25 feet by 40 feet. Most small-scale farmers in Uganda's Central Region prefer deep litter because it has lower startup costs and is easier to manage without specialised equipment.

### Ventilation and Temperature
Layers perform best at temperatures between 18°C and 24°C. In Uganda's warm climate, natural ventilation usually suffices if your house is designed correctly:

- Install wire mesh windows on the long sides of the house, at least 3 feet above the ground.
- Orient the house east-west to minimise direct sun.
- Use a raised roof with an overhang to promote airflow.
- In the hot months of December through February, consider placing shade nets above the roof.

### Litter Management
Use dry wood shavings or chopped straw as litter material. In Mpigi and surrounding areas, wood shavings cost UGX 15,000 to UGX 25,000 per bag. Keep the litter dry at all times. Wet litter produces ammonia, which irritates the respiratory system and reduces egg production. Turn the litter weekly and replace it completely every 2 to 3 months.

### Nest Boxes
Provide one nest box for every 4 to 5 hens. Nest boxes should be dark, private, and lined with clean nesting material. Place them 1 to 2 feet off the ground with a perch in front so hens can step in easily. Poor nest box design leads to floor eggs, which get dirty and reduce egg quality.

### Perches
Install perches 1 to 2 feet above the litter floor, with 6 to 8 inches of perch space per bird. Perches reduce stress and keep birds comfortable at night.

## Lighting: The Secret to Consistent Egg Production

Light is the most powerful tool for controlling egg production in layers. Hens need a minimum of 14 to 16 hours of light per day to maintain peak laying. Here is how to manage it:

### For Young Pullets (Weeks 1–16)
- Provide 24 hours of light in the first 3 to 4 days to help chicks find feed and water.
- Gradually reduce to 8 to 10 hours of light by week 8.
- Maintain this light level until week 16. This prevents early maturity and ensures the bird's body is fully developed before laying begins.

### For Laying Hens (Week 17 onwards)
- Increase light gradually from week 17. Add 15 to 30 minutes of light per week until you reach 16 hours per day.
- Maintain 16 hours of light throughout the laying period.
- Never decrease light hours during the laying cycle. A reduction signals the bird's body to stop laying.

In Uganda, where daylight hours are fairly consistent year-round (roughly 12 hours), you will need artificial lighting to supplement morning or evening hours. A single 60-watt bulb can illuminate approximately 200 square feet. LED bulbs are more energy-efficient and recommended for farmers with electricity access.

For farmers without electricity, solar lighting kits available in Kampala and major towns provide an affordable alternative, costing between UGX 150,000 and UGX 400,000 depending on capacity.

## Feeding Your Layers: Nutrition for Peak Performance

Feeding layers properly is essential for high egg production and strong eggshells. Layer nutrition is divided into three phases:

| Feed Type | Protein Content | Used During |
|-----------|----------------|-------------|
| Chick starter | 20–22% crude protein | Day 1 to Week 8 |
| Grower / Developer | 16–18% crude protein | Week 9 to Week 16 |
| Layer mash | 16–17% crude protein | Week 17 onwards |

### Layer Feeding Schedule

- **Point of lay (Week 17–18):** Begin transitioning to layer mash. The calcium content in layer feed (3.5% to 4%) supports eggshell formation.
- **Peak production (Week 25–35):** This is when hens produce the most eggs. Ensure feed is always available. A layer at peak production eats 110 to 120 grams of feed per day.
- **Mid to late laying (Week 36 onwards):** Continue feeding layer mash. Monitor body condition and adjust if birds become overweight.

### Additional Calcium
Provide oyster shell or calcite grit in separate feeders so hens can supplement their calcium intake freely. Weak or thin eggshells are usually a sign of calcium deficiency. Crushed eggshells (baked and sterilised) can also be fed back to hens as a calcium source.

### Fresh Greens and Supplements
When available, provide fresh greens like cabbage leaves, chopped banana leaves, or grass. These improve gut health, reduce boredom, and add vitamins to the diet. A handful per 20 birds, offered 2 to 3 times per week, is sufficient.

## Water: Never Underestimate Its Importance

Layers need constant access to clean, fresh water. A laying hen drinks 250 to 400 millilitres of water per day depending on temperature and egg production level. During Uganda's hot afternoons, water consumption increases significantly.

- **Clean drinkers daily.** Slimy drinkers harbour harmful bacteria.
- **Test water quality.** Salty or contaminated water reduces egg production and shell quality.
- **Water placement.** Position drinkers so that hens never have to walk more than 3 metres to reach water.
- **Pipe or nipple drinkers** are ideal as they keep water clean and reduce spillage.

A good rule of thumb: if water intake drops by 20%, egg production will drop by roughly 10% within a few days. Watch your water meters carefully.

## Egg Collection and Handling

Collect eggs at least twice a day — once in the morning and once in the afternoon. In very hot weather, collect three times to prevent eggs from spoiling.

### Best Practices for Egg Collection
1. Handle eggs gently to avoid cracks.
2. Collect into clean plastic trays, not rough baskets that damage shells.
3. Do not wash eggs unless absolutely necessary. Washing removes the protective "bloom" and allows bacteria to enter.
4. If you must wash, use water slightly warmer than the egg, with a mild disinfectant. Dry immediately.
5. Store eggs pointed-end down in a cool room. Ideal storage temperature is 13°C to 16°C.
6. Market eggs within 7 days of collection for best freshness and price.

In Uganda's local markets, clean, well-graded eggs fetch UGX 300 to UGX 400 each at farm gate. Supermarkets and wholesalers may pay UGX 350 to UGX 500 per egg depending on size and cleanliness. A flock of 500 layers producing at 80% production gives you approximately 400 eggs per day — that is UGX 120,000 to UGX 160,000 daily gross income.

## Spotting Problems Early: Warning Signs to Watch For

Early detection of problems saves your flock and your profits. Check your birds daily and look for these warning signs:

### Sudden Drop in Egg Production
If egg production drops by more than 5% in a single day, investigate immediately. Common causes include:
- Feed or water interruption
- Heat stress
- Disease outbreak (Newcastle Disease, Infectious Bronchitis, Egg Drop Syndrome)
- Stress from predators, loud noises, or change in routine
- Moulting (natural but should be managed)

### Changes in Egg Quality
- **Soft-shelled or shell-less eggs:** Usually calcium deficiency, heat stress, or Infectious Bronchitis.
- **Pale yolks:** Diet lacking in carotenoids or intestinal parasites.
- **Blood spots:** Normal in small numbers, but excessive spots suggest stress or certain diseases.
- **Thin shells:** Ageing flock, poor nutrition, or disease.

### Bird Behaviour Changes
- Lethargy, drooping wings, or birds sitting apart from the flock
- Reduced feed or water intake
- Unusual coughing, sneezing, or nasal discharge
- Swollen eyes, combs, or wattles
- Diarrhoea or abnormal droppings (white, green, or bloody)

If you notice any of these signs, isolate affected birds, consult a veterinarian, and act quickly. Disease spreads rapidly in poultry houses.

## Tips for Consistent, Year-Round Egg Production

1. **Maintain a closed flock:** Avoid bringing new birds into an existing laying house. Quarantine any new stock for at least 2 weeks.

2. **Vaccinate on schedule:** Follow a strict vaccination program. The core vaccines for layers in Uganda are Newcastle Disease (ND), Infectious Bronchitis (IB), Gumboro (Infectious Bursal Disease), Fowl Typhoid, and Fowl Pox.

3. **Control internal parasites:** Deworm your flock every 8 to 12 weeks. Roundworms and tapeworms steal nutrients and reduce egg output.

4. **Manage stress:** Sudden changes in feed, lighting, housing, or human activity cause stress that drops production. Make changes gradually.

5. **Cull non-producers:** After 4 to 5 weeks of laying, identify hens that rarely lay (small, pale combs; narrow pelvic bones). Removing them saves feed and reduces competition.

6. **Biosecurity is non-negotiable:** Foot baths at every entrance, restricted visitor access, and regular house disinfection protect your investment.

## Record Keeping: Your Farm's Most Valuable Tool

Every serious layer farmer keeps records. At minimum, track:
- Daily egg production numbers
- Daily feed and water consumption
- Weekly mortality and culling
- Vaccination and medication dates
- Income and expenses per batch

These records help you identify trends, calculate your cost per egg, and make informed decisions about when to cull, expand, or change feed.

## Conclusion

Maximising egg production from your layer flock comes down to discipline and attention to detail. Provide good housing with proper ventilation, maintain a consistent 16-hour lighting schedule, feed quality layer mash with adequate calcium, ensure unlimited clean water, collect eggs carefully, and watch your birds daily for any signs of trouble.

Layer farming is not a get-rich-quick scheme, but it is one of the most reliable agricultural businesses in Uganda. A flock of 1,000 well-managed layers can generate UGX 3,000,000 to UGX 5,000,000 in net profit per month. That is real income for real farmers who do the work right.

Start with strong pullets, follow the management guidelines in this article, and your layers will reward you with hundreds of quality eggs for months to come.

---

*Need quality layer chicks, formulated feed, or expert farm support in the Central Region? We are here to help Ugandan farmers succeed. Reach out to us today.*
`},{id:4,title:`Common Poultry Diseases in Uganda: Prevention and Treatment`,category:`Health`,readTime:`8 min read`,summary:`Poultry farming in Uganda offers tremendous income potential, but disease outbreaks remain one of the biggest threats to farmers' profits. A single outbreak can wipe out an entire flock within days, leaving farmers with devastating losses. Understanding the most common poultry diseases, their symptoms, prevention methods, and treatment options is essential for anyone keeping chickens in Uganda.`,content:`# Common Poultry Diseases in Uganda: Prevention and Treatment

Poultry farming in Uganda offers tremendous income potential, but disease outbreaks remain one of the biggest threats to farmers' profits. A single outbreak can wipe out an entire flock within days, leaving farmers with devastating losses. Understanding the most common poultry diseases, their symptoms, prevention methods, and treatment options is essential for anyone keeping chickens in Uganda.

This guide covers five of the most prevalent poultry diseases in Uganda: Newcastle disease, Gumboro (Infectious Bursal Disease), Fowl Typhoid, Coccidiosis, and Fowl Pox. With the right knowledge and proactive management, you can protect your flock and keep your farm profitable.

## Why Disease Prevention Matters for Ugandan Farmers

Disease outbreaks are responsible for up to 60% of poultry losses in small-scale farms across East Africa. Unlike large commercial operations, smallholder farmers often lack immediate access to veterinary services and cannot afford expensive treatments once a disease takes hold. Prevention is always cheaper than treatment.

Vaccination, biosecurity, and early detection form the foundation of poultry health management. Investing in these areas early will save you money and heartache in the long run.

## 1. Newcastle Disease (NCD)

Newcastle disease is arguably the most devastating poultry disease in Uganda. It is a viral infection that affects birds of all ages and can spread rapidly through a flock, often killing 80-100% of unvaccinated birds.

### Symptoms

- Sudden death with no prior warning signs
- Greenish diarrhea
- Swelling of the head, neck, and eyes
- Difficulty breathing with gasping sounds
- Twisting of the neck (torticollis or star-gazing)
- Drooping wings and paralysis
- Drop in egg production in laying hens
- Soft-shelled or misshapen eggs

### Prevention

Vaccination is the most effective prevention method. In Uganda, Newcastle disease vaccines are readily available at veterinary shops and National Animal Genetic Resources Centre and Data Bank (NAGRC&DB) outlets.

- Vaccinate chicks at day-old with Hitchner B1 or La Sota strain (eye drop)
- Give a booster at 2-3 weeks of age
- Follow up with monthly La Sota vaccinations for commercial layers
- For village chickens, the thermotolerant I-2 vaccine is available and easier to administer
- Practice strict biosecurity: limit visitors, disinfect boots, and control wild bird access

### Treatment

There is no cure for Newcastle disease. Antibiotics can only help control secondary bacterial infections. If you suspect NCD:

1. Immediately isolate sick birds
2. Dispose of dead birds by burning or deep burial
3. Disinfect all equipment and housing
4. Call a veterinary officer to confirm and advise on next steps
5. Do not sell or move birds from the affected farm

## 2. Gumboro (Infectious Bursal Disease)

Gumboro is a highly contagious viral disease that primarily affects young chickens aged 3-6 weeks. The disease attacks the immune system, making birds vulnerable to other infections.

### Symptoms

- Sudden onset with high mortality in young birds
- Whitish or watery diarrhea
- Swollen cloaca (vent) stained with feces
- Depression and huddling together
- Loss of appetite
- Picking at the vent
- Ruffled feathers

### Prevention

- Vaccinate chicks between 12-18 days of age using intermediate or intermediate-plus Gumboro vaccines
- A second booster may be given at 24-28 days depending on the vaccine type
- Maintain proper sanitation in brooding areas
- Avoid overcrowding in chicken houses
- Use all-in, all-out management where possible

### Treatment

Like Newcastle, Gumboro has no specific cure. Supportive care can help:

- Provide multivitamins and electrolytes in drinking water
- Administer broad-spectrum antibiotics to prevent secondary infections
- Keep birds warm and stress-free
- Ensure clean water and feed are always available

## 3. Fowl Typhoid

Fowl Typhoid is a bacterial disease caused by *Salmonella gallinarum*. It affects chickens of all ages but is particularly dangerous for growers and adult birds.

### Symptoms

- Sudden death in acute cases
- Pale comb and wattles (yellowish in color)
- Greenish-yellow diarrhea
- Increased thirst
- Loss of appetite and lethargy
- Swollen purple liver upon post-mortem
- Drop in egg production

### Prevention

- Practice strict biosecurity measures
- Purchase chicks from reputable hatcheries with Salmonella-free parent stock
- Keep wild birds and rodents out of poultry houses
- Regularly disinfect feeders, drinkers, and housing
- Avoid mixing birds of different ages and sources

### Treatment

Fowl Typhoid can be treated with antibiotics, but consult a veterinarian for the right prescription:

- Sulfa drugs and tetracyclines are commonly used
- Provide probiotics after antibiotic treatment to restore gut health
- Cull severely affected birds to prevent further spread
- Dispose of infected birds properly

## 4. Coccidiosis

Coccidiosis is a parasitic disease caused by protozoa of the *Eimeria* species. It is one of the most common diseases affecting poultry in Uganda, especially during the rainy season when moisture levels are high.

### Symptoms

- Bloody diarrhea (in severe cases)
- Ruffled feathers and drooping wings
- Loss of appetite and weight loss
- Pale comb and wattles (sign of anemia)
- Huddling in corners
- Dehydration
- High mortality in young birds

### Prevention

- Keep litter dry at all times: wet litter promotes coccidial oocyst development
- Use deep litter system with proper turning to maintain dryness
- Avoid overcrowding
- Practice good sanitation and regular litter changes
- Use coccidiostats in feed for the first few weeks (amprolium, salinomycin)
- Vaccination with live coccidiosis vaccines is available for commercial operations

### Treatment

- Amprolium is the drug of choice for treating coccidiosis and is available in most agro-vet shops
- Sulfa drugs can also be effective
- Provide vitamin K to help with blood clotting during recovery
- Ensure birds have access to clean, fresh water
- Add electrolytes to drinking water to combat dehydration

## 5. Fowl Pox

Fowl Pox is a viral disease spread by mosquitoes and other biting insects. It is common in many parts of Uganda, particularly in low-lying, swampy areas.

### Symptoms

There are two forms of Fowl Pox:

**Dry form (cutaneous):**
- Raised wart-like lesions on the comb, wattles, eyelids, and other unfeathered areas
- Scabby sores that gradually heal
- Reduced appetite and growth

**Wet form (diphtheritic):**
- Yellowish plaques in the mouth, throat, and trachea
- Difficulty breathing
- Gasping and coughing
- Higher mortality than the dry form

### Prevention

- Vaccinate chicks at 4-6 weeks of age with fowl pox vaccine (wing web method)
- Revaccinate annually for breeder flocks
- Control mosquitoes by eliminating standing water around poultry houses
- Use insect-proof netting on windows and ventilation openings
- Apply insecticides around the poultry house perimeter

### Treatment

- There is no treatment for the viral infection itself
- Apply iodine or gentian violet to dry pox lesions to prevent secondary infection
- Provide antibiotics in drinking water to control secondary bacterial infections
- Remove scabs near the eyes carefully to prevent blindness
- Ensure proper nutrition to support recovery

## The Importance of Vaccination

Vaccination is the single most cost-effective investment you can make in your poultry operation. In Uganda, many farmers lose entire flocks because they skip vaccination to save money. A full vaccination program for a 500-bird flock costs between 50,000-100,000 UGX — far less than the cost of replacing the entire flock.

### Recommended Vaccination Schedule for Layers

| Age | Vaccine | Method |
|-----|---------|--------|
| Day 1 | Marek's Disease | Subcutaneous injection (at hatchery) |
| Day 1-3 | Newcastle Disease (Hitchner B1) | Eye drop |
| 7-10 days | Gumboro | Eye drop or drinking water |
| 14-18 days | Gumboro booster | Eye drop or drinking water |
| 21-28 days | Newcastle (La Sota) | Eye drop or drinking water |
| 4-6 weeks | Fowl Pox | Wing web stab |
| 6-8 weeks | Newcastle (La Sota) | Drinking water |
| 12-14 weeks | Newcastle (Komarov) | Intramuscular injection |
| 16-18 weeks | Newcastle (La Sota) | Drinking water |

For broilers, the schedule is shorter, typically ending at 21 days with the final Newcastle booster.

## When to Call a Veterinarian

Many poultry diseases show similar symptoms, making self-diagnosis risky. Contact a qualified veterinarian or veterinary officer when you notice:

- Sudden death of multiple birds in a short period
- Mortality exceeding 3% per day in any age group
- Respiratory symptoms like gasping, coughing, or nasal discharge
- Neurological signs such as twisted necks or paralysis
- Bloody diarrhea in more than one bird
- A drop in egg production exceeding 10% without obvious cause
- Swollen heads, combs, or wattles
- Failure to respond to initial treatment within 48 hours

In Uganda, you can reach veterinary services through your district veterinary office, private veterinary practitioners, or organizations like the Uganda Veterinary Association. Many agro-vet shops in towns like Kampala, Jinja, Mbarara, and Masaka also have trained staff who can assist.

## Biosecurity: Your First Line of Defense

Beyond vaccination, biosecurity measures are your best protection against disease:

1. **Restrict access**: Limit who enters your poultry house. Provide footbaths with disinfectant at every entrance.
2. **Quarantine new birds**: Isolate new stock for at least two weeks before introducing them to your main flock.
3. **All-in, all-out system**: Raise birds of the same age together and empty the house completely before bringing in a new batch.
4. **Pest control**: Keep rats, wild birds, and stray animals away from your poultry house.
5. **Clean water and feed**: Store feed in rodent-proof containers and change drinking water daily.
6. **Proper disposal**: Burn or bury dead birds deep underground. Never throw dead birds near water sources or your farm.

## Conclusion

Poultry disease management in Uganda requires vigilance, knowledge, and proactive action. The five diseases covered in this article — Newcastle disease, Gumboro, Fowl Typhoid, Coccidiosis, and Fowl Pox — are responsible for the majority of poultry losses in the country. However, with proper vaccination, good biosecurity practices, and timely intervention, you can keep your flock healthy and your farm profitable.

Start by implementing a vaccination schedule today, even if you have a small flock. The cost of prevention is always far lower than the cost of treatment — or the cost of losing your entire investment. Visit your nearest veterinary shop or agro-input dealer to stock up on essential vaccines and medications. Your birds' health is the foundation of your farm's success.

---

*Have you dealt with any of these diseases on your farm? Share your experience and let's learn together. For more poultry farming tips tailored to Ugandan conditions, stay connected with our resources.*
`},{id:5,title:`How to Build a Low-Cost Chicken House in Uganda`,category:`Housing`,readTime:`7 min read`,summary:`Building a proper chicken house is one of the most important investments you will make as a poultry farmer in Uganda. A well-constructed poultry house protects your birds from harsh weather, predators, and diseases while creating an environment where they can grow and produce efficiently. The good news is that you do not need a massive budget to build a functional chicken house.`,content:`# How to Build a Low-Cost Chicken House in Uganda

Building a proper chicken house is one of the most important investments you will make as a poultry farmer in Uganda. A well-constructed poultry house protects your birds from harsh weather, predators, and diseases while creating an environment where they can grow and produce efficiently. The good news is that you do not need a massive budget to build a functional chicken house. With locally available materials and smart planning, you can construct a durable, well-ventilated house at a reasonable cost.

This guide provides a step-by-step approach to building a low-cost chicken house suitable for Ugandan conditions, whether you are raising 100 birds or 1,000.

## Planning Your Chicken House

Before you begin construction, careful planning will save you money and prevent costly mistakes later. Consider the following factors:

### Location

Choose a site that is:
- **Elevated and well-draining**: Avoid swampy or low-lying areas where water collects during the rainy season
- **Accessible**: You will need to transport feed, birds, and manure regularly
- **Away from residential areas**: Poultry houses produce odors and noise
- **Downwind from your home**: Prevailing winds should carry dust and odors away from living spaces
- **Secure**: The site should allow for fencing to keep out thieves, predators, and stray animals

### Space Requirements

Overcrowding leads to stress, poor growth, disease outbreaks, and high mortality. Follow these space guidelines:

| Bird Type | Age | Space per Bird |
|-----------|-----|----------------|
| Day-old chicks | 0-4 weeks | 10-12 birds per square meter |
| Growers | 4-12 weeks | 6-8 birds per square meter |
| Broilers | 0-6 weeks (full cycle) | 8-10 birds per square meter |
| Layers | Adults | 3-4 birds per square meter (deep litter) |
| Layers | Adults | 1 bird per cage (cage system) |

For example, if you plan to raise 500 broilers, you need a house measuring at least 50-60 square meters. If you plan to raise 300 layers on deep litter, aim for 75-100 square meters.

### Orientation

Build the house with the longest side facing east-west. This orientation minimizes direct sunlight entering the house during the hottest parts of the day, keeping temperatures more stable for your birds.

## Materials and Tools You Will Need

Using locally available materials in Uganda will significantly reduce costs:

### Foundation and Floor Materials
- Hardcore or broken bricks for the base
- Cement and sand for concrete floor (optional but recommended)
- Timber posts (eucalyptus or treated pine) for support

### Wall Materials
- Timber frames with wire mesh (chicken wire)
- Bricks or blocks for lower walls (2-3 feet high)
- Plywood or timber offcuts for solid sections
- Polythene sheets for removable curtains during cold weather

### Roofing Materials
- Corrugated iron sheets (galvanized) — 26 or 28 gauge
- Timber purlins and rafters
- Nails, bolts, and wire fasteners

### Tools
- Hammer, saw, tape measure, spade, wheelbarrow, trowel, level

## Step-by-Step Building Guide

### Step 1: Prepare the Foundation

Clear and level the construction site. Remove all grass, tree stumps, and debris.

1. Mark out the dimensions of your house using string lines and pegs
2. Dig trenches for the foundation, approximately 1 foot deep and 1 foot wide
3. Fill the trenches with hardcore or broken bricks and compact well
4. If you have the budget, pour a thin concrete slab (3-4 inches thick) over the entire floor. A concrete floor is easier to clean and disinfect, and it keeps predators from burrowing in
5. If concrete is too expensive, compact the earth floor well and apply a layer of murram. You can upgrade to concrete later when finances allow

### Step 2: Erect the Posts and Frame

1. Set treated timber or eucalyptus posts into the ground at 2-3 meter intervals
2. Posts should be at least 6-7 feet above ground level to allow adequate height inside the house
3. Embed posts in concrete or compacted hardcore for stability
4. Install the roof frame with rafters and purlins. The roof should have a slope to allow rainwater to drain away

### Step 3: Build the Walls

A proper poultry house does not need full walls. The design should prioritize ventilation:

1. Build solid walls up to 2-3 feet from the ground using bricks, blocks, or timber. This solid base:
   - Protects birds from drafts at floor level
   - Keeps out predators like rats, snakes, and dogs
   - Prevents litter from being blown out by wind
   - Provides a barrier against flooding during heavy rains

2. Above the solid base, install wire mesh or chicken wire for the remaining height. This allows:
   - Free flow of fresh air
   - Heat escape during hot weather
   - Natural light to enter the house

3. On the side facing prevailing winds, you can install removable curtains made from polythene, sacks, or canvas. These can be rolled down during cold weather or heavy rain and rolled up during hot periods

### Step 4: Install the Roof

1. Fix corrugated iron sheets onto the purlins using roofing nails or bolts
2. Ensure the roof extends at least 1-2 feet beyond the walls on all sides to prevent rainwater from entering
3. Install a ceiling if your budget allows. A ceiling (made from plywood, papyrus mats, or sisal boards) reduces heat buildup during the day and retains warmth at night
4. If you cannot afford a full ceiling, consider installing an insulating material like dry grass or papyrus between the rafters and the iron sheets

### Step 5: Build Doors and Entrance

1. Construct a door at each end of the house for easy access and ventilation flow
2. The door should be wide enough to allow a wheelbarrow through (for easy litter and manure removal)
3. Cover doors with wire mesh to prevent predators from entering when the solid door is open
4. Build a small footbath at each entrance — a shallow tray filled with disinfectant-soaked sand or sawdust

### Step 6: Install Equipment and Interior Layout

1. **Feeders**: Position feeding troughs along the length of the house. Allow 5-7 cm of feeder space per bird
2. **Drinkers**: Place water drinkers strategically. Allow 1-2 cm of drinker space per bird. Use automatic drinkers if your budget allows
3. **Perches**: For layers, install perches 2-3 feet above the floor. Allow 15-20 cm of perch space per bird
4. **Nesting boxes**: For layers, place nesting boxes in the darkest, quietest corner of the house. Provide one box for every 4-5 hens
5. **Lighting**: Install bulbs for supplemental lighting if you plan to keep layers. Layers need 14-16 hours of light daily for optimal egg production

## Estimated Costs (2024-2025)

Here is a rough cost estimate for building a 100-square-meter chicken house (suitable for 500-800 broilers or 250-300 layers) using locally available materials:

| Item | Estimated Cost (UGX) |
|------|---------------------|
| Timber posts and frames | 800,000 - 1,200,000 |
| Corrugated iron sheets (30-35 pieces) | 1,500,000 - 2,000,000 |
| Nails, wire mesh, fasteners | 400,000 - 600,000 |
| Bricks/blocks for lower walls | 500,000 - 800,000 |
| Cement and sand for floor | 600,000 - 900,000 |
| Labor | 700,000 - 1,000,000 |
| Doors, curtains, and finishing | 300,000 - 500,000 |
| **Total** | **4,800,000 - 7,000,000** |

You can reduce costs by:
- Using timber from your own land
- Purchasing materials in bulk from hardware shops in Kampala or Jinja
- Using second-hand iron sheets in good condition
- Doing some of the labor yourself with family help

## Ventilation: The Key to Healthy Birds

Poor ventilation is one of the leading causes of respiratory diseases in poultry. In Uganda's tropical climate, heat stress can kill birds quickly if air is not moving properly.

### Signs of Poor Ventilation
- Condensation on walls and roof
- Strong ammonia smell from accumulated droppings
- Birds panting with open beaks
- Lethargy and reduced feed intake
- Increased incidence of respiratory diseases

### Ventilation Tips
- Ensure the open-wire portion of your walls is at least 50% of the total wall area
- Place the house in a location that receives natural breezes
- In naturally ventilated houses, air should enter on one side and exit on the other
- During the hot season, all curtains and covers should be rolled up
- During cold or rainy weather, roll down curtains on the windward side while keeping the leeward side open

## Flooring and Litter Management

The floor of your chicken house directly affects bird health and comfort:

### Deep Litter System
The most common system in Uganda involves covering the floor with 4-6 inches of absorbent material:

- **Best litter materials**: Wood shavings, sawdust, dry grass, rice husks, coffee husks, or peanut shells
- **Avoid**: Wet or moldy materials, materials with strong odors
- **Litter maintenance**: Turn the litter weekly to aerate and prevent compaction. Add fresh litter every 2-3 weeks
- **Complete litter change**: Replace all litter between batches of birds

### Benefits of Deep Litter
- Absorbs moisture and reduces disease
- Provides insulation from cold floors
- Composted litter becomes valuable manure for your garden or for sale

## Maintenance Tips for Long-Term Use

A well-maintained chicken house can last 10-15 years. Follow these maintenance practices:

### Between Batches (All-In, All-Out)
1. Remove all birds, feed, and equipment
2. Scrape and remove all old litter
3. Sweep and wash the floor, walls, and equipment with soapy water
4. Disinfect all surfaces with a recommended poultry disinfectant (available at agro-vet shops)
5. Repair any holes in wire mesh, broken feeders, or damaged roofing
6. Allow the house to dry and rest for at least one week before introducing new birds
7. Apply whitewash (lime) to the interior walls to seal cracks and deter insects

### Weekly Maintenance
- Check and clean drinkers and feeders
- Remove wet or caked litter and replace with dry material
- Inspect the roof for leaks and repair immediately
- Check wire mesh for holes where predators might enter
- Replenish footbath disinfectant

### Seasonal Considerations for Uganda

**Rainy season (March-May, September-November):**
- Roll down curtains to prevent rain from entering
- Ensure gutters and drainage channels are clear
- Increase litter depth to absorb extra moisture
- Watch for signs of coccidiosis due to damp conditions

**Dry season (December-February, June-August):**
- Roll up all curtains for maximum ventilation
- Provide extra water to prevent heat stress
- Consider sprinkling water on the roof during extreme heat
- Watch for respiratory issues from dust buildup

## Conclusion

Building a low-cost chicken house in Uganda is achievable with proper planning and the use of local materials. The key elements to remember are adequate space, good ventilation, predator-proof construction, and a floor system that keeps birds dry and comfortable. A well-built chicken house will serve you for many years and pay for itself through healthier birds, better growth rates, and higher egg production.

Start small and scale up as your poultry business grows. Even a modest 50-bird house built correctly will teach you valuable lessons that you can apply when building larger structures. Visit your nearest hardware store today, sketch your design, and begin building. Your birds will thank you for it — and so will your bank account.

---

*Looking for more practical poultry farming advice? Follow our guides for Ugandan farmers and take your poultry business to the next level. Every successful farm starts with the right housing.*
`},{id:6,title:`Understanding FCR and Feed Cost for Poultry Farmers`,category:`Feeding`,readTime:`7 min read`,summary:`Feed is the single largest expense in poultry farming, typically accounting for 60-70% of total production costs in Uganda. If you want to run a profitable poultry business, understanding how to measure feed efficiency and manage feed costs is not optional — it is essential. Two critical tools every poultry farmer must master are Feed Conversion Ratio (FCR) and break-even analysis.`,content:`# Understanding FCR and Feed Cost for Poultry Farmers

Feed is the single largest expense in poultry farming, typically accounting for 60-70% of total production costs in Uganda. If you want to run a profitable poultry business, understanding how to measure feed efficiency and manage feed costs is not optional — it is essential. Two critical tools every poultry farmer must master are Feed Conversion Ratio (FCR) and break-even analysis.

This article explains FCR in simple terms, shows you how to calculate it, explores practical ways to reduce feed costs using locally available options, and walks you through break-even calculations tailored to Ugandan market conditions.

## What is Feed Conversion Ratio (FCR)?

Feed Conversion Ratio (FCR) measures how efficiently your birds convert feed into body weight. It answers a simple but crucial question: How many kilograms of feed does it take to produce one kilogram of meat or eggs?

A lower FCR means your birds are converting feed more efficiently, which directly translates to higher profitability. For example, a broiler with an FCR of 1.8 is more efficient than one with an FCR of 2.2 because it requires less feed to reach the same market weight.

### FCR Targets for Poultry in Uganda

| Category | Good FCR | Average FCR | Poor FCR |
|----------|----------|-------------|----------|
| Broilers (6 weeks) | 1.6 - 1.8 | 1.9 - 2.1 | Above 2.2 |
| Broilers (8 weeks) | 2.0 - 2.2 | 2.3 - 2.5 | Above 2.6 |
| Layers (kg feed per 12 eggs) | 1.4 - 1.6 | 1.7 - 1.9 | Above 2.0 |

These numbers may vary depending on breed, management, and environmental conditions, but they provide a useful benchmark for Ugandan farmers.

## How to Calculate FCR

Calculating FCR is straightforward. You only need two numbers: total feed consumed and total weight gained.

### Formula for Broilers

\`\`\`
FCR = Total Feed Consumed (kg) / Total Weight Gained (kg)
\`\`\`

**Example:**
You raise 100 broilers. Over 6 weeks:
- Total feed consumed: 380 kg
- Starting weight (day-old chicks): 4 kg total (40g × 100 birds)
- Final weight (at sale): 200 kg total (2.0 kg × 100 birds)
- Weight gained: 200 kg - 4 kg = 196 kg
- Mortality: 5 birds, so 95 birds sold

FCR = 380 kg / 196 kg = **1.94**

This is within the average range for broilers in Uganda. With better management and quality feed, you could aim to bring this down to 1.8 or lower.

### Formula for Layers

For layers, FCR is often expressed as the amount of feed required to produce one kilogram of eggs:

\`\`\`
FCR = Total Feed Consumed (kg) / Total Egg Weight (kg)
\`\`\`

**Example:**
You have 200 layers. In one month:
- Total feed consumed: 1,200 kg
- Total eggs collected: 4,800 eggs
- Average egg weight: 58 grams
- Total egg weight: 4,800 × 0.058 kg = 278.4 kg

FCR = 1,200 kg / 278.4 kg = **4.31**

This means it takes 4.31 kg of feed to produce 1 kg of eggs. An excellent layer flock should achieve an FCR closer to 3.8-4.0.

### Daily Tracking Tip

Keep a simple record book on your farm. Every day, note:
- Feed received and feed remaining (to calculate daily consumption)
- Number of birds alive
- Mortality count
- Egg production (for layers) or bird weight (for broilers sampled weekly)

These records will help you track FCR over time and spot problems early.

## Why FCR Matters for Your Profitability

Let us look at a practical example using 2024-2025 feed prices in Uganda:

**Scenario: Raising 500 broilers to 2.0 kg live weight**

| Item | Good FCR (1.8) | Average FCR (2.0) | Poor FCR (2.3) |
|------|---------------|-------------------|----------------|
| Feed per kg of meat | 1.8 kg | 2.0 kg | 2.3 kg |
| Total weight produced (kg) | 950 kg | 950 kg | 950 kg |
| Total feed needed (kg) | 1,710 kg | 1,900 kg | 2,185 kg |
| Feed cost (3,000 UGX/kg) | 5,130,000 | 5,700,000 | 6,555,000 |
| **Difference from best** | Baseline | +570,000 UGX | +1,425,000 UGX |

With an FCR of just 0.5 higher, you spend over 1.4 million shillings more on the same amount of meat. Over a year of multiple batches, this difference becomes enormous.

## Factors That Affect FCR

Several factors influence how efficiently your birds convert feed into body weight:

### 1. Feed Quality
Poor-quality feed with imbalanced nutrients leads to wastage. Ensure your feed has the correct protein, energy, vitamin, and mineral levels for each growth stage.

### 2. Water Quality and Availability
Birds drink approximately twice as much water as the feed they eat. Without adequate clean water, feed consumption drops and FCR worsens.

### 3. Temperature and Housing
Heat stress causes birds to eat less and pant more, burning energy without gaining weight. Poorly ventilated houses raise FCR significantly.

### 4. Disease and Parasites
Sick birds do not grow well. Diseases like coccidiosis, Newcastle, and worms increase FCR dramatically.

### 5. Feed Wastage
Poor-quality feeders, overfilling, and improper feeder height all cause feed to spill onto the floor. Even 5% feed wastage adds up to significant losses.

### 6. Stocking Density
Overcrowded birds compete for feed and water, leading to uneven growth and poor FCR.

## How to Reduce Feed Costs

Here are practical strategies to lower your feed expenses without sacrificing bird performance:

### 1. Buy Feed in Bulk
Purchasing feed in 50 kg bags from reputable manufacturers like Biyinzika, UgaChick, or NASECO is more economical than buying small quantities repeatedly. If you have adequate storage, buying a month's supply at once often comes with discounts.

### 2. Store Feed Properly
Improper storage leads to mold growth, pest infestation, and nutrient degradation:
- Store feed on pallets, not directly on the floor
- Keep feed in a cool, dry, well-ventilated store
- Use older stock first (first-in, first-out)
- Seal opened bags tightly

### 3. Minimize Feed Wastage
- Use proper feeders with rims to prevent scratching
- Adjust feeder height as birds grow — feeders should be at the level of the birds' backs
- Provide enough feeder space so all birds eat at once
- Do not overfill troughs beyond two-thirds full

### 4. Practice Phase Feeding
Do not feed the same ration throughout the bird's life. Use:
- **Starter feed** (high protein, 20-22%) for the first 2-3 weeks
- **Grower feed** (moderate protein, 18-19%) for the next 3-4 weeks
- **Finisher feed** (lower protein, 16-17%) for the final weeks before sale

Phase feeding matches nutrient supply with the bird's actual requirements, preventing expensive protein from being wasted.

### 5. Cull Poor Performers
Remove birds that are stunted, sick, or not growing. These birds consume feed without contributing to the flock's output, driving up your average FCR.

## Local Feed Options vs. Commercial Feed

One of the biggest decisions Ugandan poultry farmers face is whether to use commercial feed or formulate their own using locally available ingredients.

### Commercial Feed

**Advantages:**
- Consistent quality and nutrient balance
- Convenience — ready to use
- Formulated by nutritionists for optimal performance
- Lower risk of nutrient deficiencies

**Disadvantages:**
- Higher cost (typically 2,800-3,500 UGX per kg depending on type)
- Price fluctuations with market conditions
- Less control over ingredients used

### Home-Mixed Feed (Local Formulation)

Common locally available ingredients in Uganda include:
- **Maize**: Primary energy source (can be grown or purchased)
- **Maize bran**: Cheaper energy source, lower digestibility
- **Soybean cake/meal**: Primary protein source
- **Silverfish (mukene)**: Excellent protein source, widely available
- **Cottonseed cake**: Protein source (must be free of gossypol)
- **Sunflower seed cake**: Good protein and energy
- **Bone meal**: Calcium and phosphorus
- **Premixes**: Vitamins and minerals (purchased from agro-vet shops)

**Advantages:**
- Potentially lower cost, especially if you grow some ingredients
- Full control over what goes into the feed
- Can incorporate seasonal ingredients when prices are low

**Disadvantages:**
- Requires knowledge of poultry nutrition to balance properly
- Time-consuming to source, grind, and mix ingredients
- Risk of nutrient imbalances that hurt performance
- Inconsistent quality if not measured accurately

### A Practical Hybrid Approach

Many successful Ugandan farmers use a combination strategy:
- Use commercial starter feed for the first 2-3 weeks when nutrition is most critical
- Mix your own grower and finisher rations using locally sourced ingredients
- Supplement commercial layer mash with maize bran or fresh greens to reduce costs
- Incorporate food waste, vegetable peels, and insects where safe and appropriate

**Sample Home-Grower Ration for Ugandan Farmers:**
- 60 kg maize (or maize bran)
- 20 kg soybean cake
- 10 kg silverfish (mukene) meal
- 5 kg cottonseed cake
- 3 kg lime or bone meal
- 2 kg vitamin-mineral premix

Always consult with a livestock nutritionist or veterinary officer before formulating your own feeds. A small mistake in formulation can cost you more than the savings.

## Break-Even Calculation for Poultry Farmers

Knowing your break-even point tells you the minimum price you must sell your birds or eggs for to cover all costs. This is critical for pricing decisions.

### Broiler Break-Even Example

Let us calculate the break-even for a batch of 500 broilers:

**Fixed Costs (one-time per batch):**
| Item | Cost (UGX) |
|------|-----------|
| Day-old chicks (500 × 3,500) | 1,750,000 |
| Vaccines and medication | 200,000 |
| Labor (6 weeks) | 300,000 |
| Utilities and misc. | 150,000 |
| **Total Fixed Costs** | **2,400,000** |

**Variable Costs:**
| Item | Calculation | Cost (UGX) |
|------|-------------|-----------|
| Feed (2.0 FCR target) | 950 kg gained × 2.0 FCR × 3,000 UGX/kg | 5,700,000 |
| Litter and supplies | | 100,000 |
| **Total Variable Costs** | | **5,800,000** |

**Total Production Cost:** 2,400,000 + 5,800,000 = **8,200,000 UGX**

**Expected Output:**
- 475 birds survive to market (5% mortality)
- Average live weight: 2.0 kg
- Total live weight: 950 kg

**Break-even price per kg live weight:**
8,200,000 UGX / 950 kg = **8,632 UGX per kg**

If market prices are above 8,632 UGX per kg, you make a profit. If prices drop below this, you operate at a loss. This calculation helps you decide whether to sell now or wait, and whether to enter into production at all given current feed and chick prices.

### Layer Break-Even Example (per month)

For 200 layers:

**Monthly Costs:**
| Item | Cost (UGX) |
|------|-----------|
| Feed (1,200 kg at 2,800 UGX/kg) | 3,360,000 |
| Medication and supplements | 100,000 |
| Labor and utilities | 200,000 |
| **Total Monthly Cost** | **3,660,000** |

**Monthly Output:**
- 4,800 eggs (80% production rate)
- 160 trays of 30 eggs

**Break-even price per tray:**
3,660,000 UGX / 160 trays = **22,875 UGX per tray**

If you sell at 25,000 UGX per tray, your monthly profit is:
(25,000 - 22,875) × 160 = **340,000 UGX profit**

## Record Keeping: The Foundation of FCR Management

You cannot improve what you do not measure. Successful poultry farmers keep detailed records including:

1. **Feed records**: Feed purchased, feed consumed daily, feed remaining
2. **Growth records**: Weekly weight checks on a sample of 10-20 birds
3. **Mortality records**: Daily mortality count and suspected cause
4. **Egg records**: Daily egg count, rejects, and abnormal eggs
5. **Financial records**: All costs and sales recorded systematically

Use a simple notebook or create a spreadsheet. These records will help you identify trends, compare batch performance, and make data-driven decisions.

## Conclusion

Mastering FCR and feed cost management separates profitable poultry farmers from those who struggle. Feed will always be your biggest expense, but by tracking FCR, reducing wastage, exploring local feed options wisely, and knowing your break-even point, you can control costs and maximize returns.

Start measuring your FCR today, even if you have a small flock. The discipline of tracking feed consumption and bird performance will pay dividends as your farm grows. Remember: every 0.1 improvement in FCR translates directly to more money in your pocket.

Visit your nearest agro-vet shop to discuss feed options, and consider attending a poultry management training offered by organizations like the National Agricultural Research Organisation (NARO) or private extension services. Knowledge is your most powerful tool for reducing feed costs and building a sustainable poultry business in Uganda.

---

*Start tracking your feed conversion ratio this week. Grab a notebook, weigh your feed, and monitor your results. Small improvements in FCR lead to big improvements in profit. For more poultry farming insights tailored to Ugandan farmers, stay connected.*
`},{id:7,title:`Poultry Farm Budgeting: A Practical Guide for Beginners`,category:`Business`,readTime:`8 min read`,summary:`Starting a poultry farm in Uganda without a clear budget is like driving from Kampala to Gulu without a map — you might get there, but you will waste fuel, time, and money along the way. Whether you are raising 50 layers in your backyard in Mukono or planning a 500-broiler operation in Masaka, a written budget is the single most important tool for turning your poultry dream into a profitable business.`,content:`# Poultry Farm Budgeting: A Practical Guide for Beginners

Starting a poultry farm in Uganda without a clear budget is like driving from Kampala to Gulu without a map — you might get there, but you will waste fuel, time, and money along the way. Whether you are raising 50 layers in your backyard in Mukono or planning a 500-broiler operation in Masaka, a written budget is the single most important tool for turning your poultry dream into a profitable business.

This guide walks you through startup costs, operating expenses, revenue expectations, and sample budgets tailored to the Ugandan market. By the end, you will know exactly how much money you need, where it goes, and how to plan for profit.

## Why Every Poultry Farmer Needs a Budget

Many beginner farmers in Uganda fail not because they lack passion, but because they run out of money halfway through their first batch. A budget helps you:

- Know your total capital requirement before you start
- Track spending and avoid surprises
- Plan for feed purchases, which typically consume 70% of operating costs
- Decide whether to seek a loan, save more, or start smaller
- Measure whether your farm is truly profitable

Even a simple handwritten budget on paper is better than none. But a spreadsheet or notebook with monthly entries will serve you far better as you grow.

## Understanding Startup Costs (One-Time Expenses)

Startup costs are the one-time investments you make before your first birds arrive. These do not repeat every batch, though some items like drinkers and feeders may need replacement after a few cycles.

### Housing and Infrastructure

Your chicken house is your biggest upfront investment. For 100 broilers or 50 layers, you need a simple but well-ventilated structure.

- **Chicken house construction**: UGX 1,500,000 to UGX 4,000,000 depending on size and materials. A raised-floor house with a good roof costs more but lasts longer and reduces disease.
- **Feeders and drinkers**: UGX 150,000 to UGX 300,000 for plastic or metallic equipment. For 100 broilers, you need at least 10 feeders and 10 drinkers.
- **Brooder equipment** (heat source for day-old chicks): UGX 100,000 to UGX 250,000 for infrared bulbs, charcoal stoves, or electric brooders.
- **Lighting**: UGX 50,000 to UGX 100,000 for bulbs and wiring if your area has electricity.
- **Storage area**: UGX 200,000 to UGX 500,000 for a small feed and equipment store to protect bags from rain and pests.

### Chicks and Initial Inputs

- **Day-old chicks**: UGX 3,500 to UGX 5,000 each for broilers; UGX 4,000 to UGX 6,000 for layers depending on the hatchery and breed.
- **Initial vaccines and drugs**: UGX 50,000 to UGX 150,000 for Newcastle, Gumboro, and fowl pox vaccines, plus vitamin supplements and antibiotics for the first cycle.
- **Feed for the first month**: Budget at least UGX 200,000 to UGX 400,000 depending on the number of birds.
- **Wood shavings or bedding**: UGX 50,000 to UGX 100,000 per batch.

**Total estimated startup cost for a small 100-broiler or 50-layer operation: UGX 3,000,000 to UGX 7,000,000.**

## Understanding Operating Costs (Recurring Expenses)

Operating costs repeat every growing cycle or month. For broilers, one cycle is about 6 to 7 weeks. For layers, you budget monthly for the 18 to 20 months they produce eggs.

### Feed Costs (The Biggest Expense)

Feed accounts for 65% to 75% of your total operating budget. In Uganda, a 70kg bag of broiler starter costs roughly UGX 95,000 to UGX 110,000, while broiler finisher costs UGX 85,000 to UGX 100,000. Layer mash costs UGX 70,000 to UGX 85,000 per 70kg bag.

- **100 broilers** will consume approximately 35 to 40 bags of feed from day-old to market weight (8 to 12 bags of starter, 25 to 30 bags of finisher).
- **50 layers** will consume roughly 12 to 15 bags per month once they reach peak production.

### Vaccines and Medication

Budget UGX 100,000 to UGX 200,000 per batch for broilers, covering vaccines at day 1, day 7, day 14, and day 21, plus any treatment for coccidiosis or respiratory infections. For layers, spread this across months — approximately UGX 50,000 to UGX 100,000 monthly.

### Labor

If you hire help, a farm worker in rural Uganda typically earns UGX 150,000 to UGX 300,000 per month. Many small farmers handle labor themselves in the beginning, which reduces costs but increases your personal time investment.

### Utilities and Miscellaneous

- Water: Minimal if you have a well or rainwater harvesting, or UGX 20,000 to UGX 50,000 monthly if you buy water.
- Electricity: UGX 30,000 to UGX 80,000 monthly depending on brooding method.
- Transport: UGX 50,000 to UGX 150,000 per cycle for taking birds to market or collecting feed.
- Bedding: UGX 50,000 to UGX 100,000 per batch for broilers.
- Mortality replacement: Expect 3% to 8% mortality in broilers and plan accordingly.

## Sample Budget: 100 Broilers for One Cycle (7 Weeks)

Here is a realistic breakdown for raising 100 broilers in a typical Ugandan setting. Prices are estimates based on current market rates and may vary by district.

### Startup Costs (First-Time Only)

| Item | Cost (UGX) |
|------|------------|
| Chicken house (basic structure, 12ft x 20ft) | 2,500,000 |
| Feeders (10 units) | 80,000 |
| Drinkers (10 units) | 70,000 |
| Brooder equipment (bulbs/stove) | 150,000 |
| Storage unit | 300,000 |
| **Subtotal: Startup** | **3,100,000** |

### Operating Costs Per Cycle

| Item | Quantity | Unit Cost (UGX) | Total (UGX) |
|------|----------|-----------------|-------------|
| Day-old broiler chicks | 100 | 4,000 | 400,000 |
| Broiler starter feed | 12 bags | 100,000 | 1,200,000 |
| Broiler finisher feed | 28 bags | 92,000 | 2,576,000 |
| Vaccines and drugs | 1 batch | — | 150,000 |
| Wood shavings/bedding | 1 load | — | 70,000 |
| Labor (7 weeks) | — | — | 200,000 |
| Water and electricity | — | — | 50,000 |
| Transport | — | — | 80,000 |
| **Subtotal: Operating** | | | **4,726,000** |

### Revenue Projection

Assuming 95% survival rate (95 birds reaching market weight):

| Item | Calculation | Total (UGX) |
|------|-------------|-------------|
| Average live weight per bird | 2.0 kg | — |
| Dressed weight (65% of live) | 1.3 kg | — |
| Selling price per kg (dressed) | 12,000 | — |
| Revenue from 95 birds | 95 x 1.3 x 12,000 | **1,482,000** |

Or if selling live birds at UGX 15,000 each: 95 x 15,000 = **UGX 1,425,000**

Wait — this shows a loss. That is the reality many beginners face. The key lessons here are:

1. **Selling live birds at low prices is rarely profitable.** Focus on adding value — dress the birds, sell to restaurants, or target holidays when prices spike.
2. **Buying feed in bulk reduces costs.** Join a farmer group to negotiate better prices.
3. **Mortality matters.** Losing 15 birds instead of 5 costs you UGX 225,000 in lost revenue.
4. **Scale improves profitability.** At 500 broilers, the house cost is spread over more birds, and feed margins improve.

### Profitability Tips for Broilers

- Target festive seasons (Christmas, Easter, Eid, Independence Day) when prices rise 20% to 40%.
- Sell directly to restaurants, hotels, and butchers instead of middlemen.
- Formulate your own feed if you can source maize bran, soybean cake, and premixes affordably.
- Keep mortality below 5% through strict biosecurity and vaccination.

## Sample Budget: 50 Layers (Monthly Operating Budget)

Layers require a longer-term view. They start producing eggs at around 18 weeks and continue for 14 to 18 months. Here is a monthly budget once birds reach peak production.

### Startup Costs (First-Time Only)

| Item | Cost (UGX) |
|------|------------|
| Layer house (12ft x 15ft, raised floor) | 2,000,000 |
| Cages or nesting boxes | 400,000 |
| Feeders and drinkers | 100,000 |
| Brooder equipment | 100,000 |
| Water system (simple pipeline) | 250,000 |
| **Subtotal: Startup** | **2,850,000** |

### Monthly Operating Costs (50 Layers at Peak Production)

| Item | Cost (UGX) |
|------|------------|
| Layer mash feed (14 bags x 78,000) | 1,092,000 |
| Vaccines and medication | 75,000 |
| Labor (part-time) | 150,000 |
| Water and electricity | 40,000 |
| Bedding/litter maintenance | 30,000 |
| Miscellaneous | 50,000 |
| **Total Monthly Operating Cost** | **1,437,000** |

### Monthly Revenue Projection

| Item | Calculation | Total (UGX) |
|------|-------------|-------------|
| Average eggs per bird per day | 75% production rate | — |
| Daily eggs from 50 birds | 50 x 0.75 | 37.5 eggs |
| Monthly eggs | 37.5 x 30 | 1,125 eggs |
| Trays per month (30 eggs per tray) | 1,125 / 30 | 37.5 trays |
| Selling price per tray | 12,000 | — |
| Monthly egg revenue | 37.5 x 12,000 | **450,000** |

At first glance, this also shows a monthly shortfall. But remember:

- Layers only eat layer mash during production. Before 18 weeks, they eat cheaper grower mash.
- Egg production peaks at 80% to 90% in months 6 to 12 of laying, improving revenue.
- Selling eggs at farmgate prices (UGX 12,000 to UGX 15,000 per tray) to individual customers is more profitable than selling to traders at UGX 10,000 per tray.
- Spent hens can be sold for UGX 10,000 to UGX 15,000 each at the end of their cycle — that is UGX 500,000 to UGX 750,000 for 50 birds.
- Manure from 50 layers can earn UGX 50,000 to UGX 100,000 per month if sold to crop farmers.

### The Break-Even Reality

Most layer farms in Uganda break even between month 8 and month 12 of the laying cycle. The months before that are an investment. Plan your cash flow so you can cover the first 6 months without depending on egg income alone.

## Financial Planning Tips for Ugandan Poultry Farmers

### 1. Keep a Farm Record Book

Write down every shilling spent and earned. At the end of each month, total your costs and compare them to revenue. This simple habit separates struggling farmers from growing ones. Many successful farmers in Wakiso, Jinja, and Mbarara swear by daily record-keeping.

### 2. Separate Farm Money from Household Money

Open a dedicated mobile money account or bank wallet for your farm. Mixing household and farm finances is the fastest way to lose track of profitability.

### 3. Plan for Feed Price Increases

Feed prices in Uganda have risen steadily over the past three years. When budgeting, add 10% to current feed prices as a buffer. If prices stay stable, you have extra profit. If they rise, you are prepared.

### 4. Build an Emergency Fund

Set aside 10% to 15% of every sale into an emergency fund. Disease outbreaks, equipment repairs, and feed price spikes will happen. Farmers with a reserve survive these shocks. Those without often close down.

### 5. Reinvest Profits Before Taking a Salary

For the first 12 to 18 months, reinvest at least 50% of your profits back into the farm. Use this money to expand housing, buy better equipment, or increase your flock size. The farmers who grow fastest are those who delay personal withdrawals in the early stages.

### 6. Consider Group Purchasing

Joining a poultry farmers' cooperative or association gives you bargaining power. Groups in Luweero, Gulu, and Fort Portal negotiate 5% to 15% discounts on feed and vaccines by buying in bulk. Some groups also share transportation costs and market information.

### 7. Track Your Cost Per Bird or Per Egg

Divide your total costs by the number of birds sold or eggs produced. This gives you a clear cost per unit. If your cost per tray of eggs is UGX 10,000 and you sell for UGX 12,000, your margin is clear. If your cost per broiler is UGX 45,000 and you sell for UGX 18,000, you know exactly how much you need to improve.

## Accessing Capital in Uganda

If your savings are not enough to cover startup costs, consider these options:

- **Microfinance institutions**: Pride Microfinance, BRAC, and Hofokam offer agricultural loans with repayment periods of 6 to 24 months. Interest rates range from 18% to 36% annually, so borrow only what you can repay from projected income.
- **Uganda Development Bank (UDB)**: Offers longer-term agricultural financing for established farmers looking to scale.
- **Government programs**: The Parish Development Model (PDM) and Operation Wealth Creation (OWC) have supported poultry farmers with grants and subsidized inputs in recent years. Check with your local sub-county office.
- **SACCOs**: Savings and credit cooperative societies in your district may offer lower-interest loans to members. Joining a SACCO takes time but pays off in the long run.
- **Family and friends**: Borrowing from relatives often comes with flexible repayment terms, but put the agreement in writing to avoid conflict.

## Conclusion

Poultry farming in Uganda is profitable — but profitability starts with honest budgeting. The sample budgets in this guide show that small-scale operations face tight margins, especially in the beginning. The farmers who succeed are those who plan every shilling, track every expense, and continuously look for ways to reduce costs and increase revenue.

Start with a size you can afford. A 100-broiler or 50-layer operation is a manageable entry point for most Ugandan families. Grow your flock as your experience and capital increase. And above all, write your budget before you buy your first chick. The few hours you spend planning will save you months of financial stress.

**Ready to start your poultry journey?** Pull out a notebook today and write down your own budget using the templates in this guide. Visit your local veterinary office and feed supplier to confirm current prices in your district. Then take that first confident step — because a farmer with a budget is a farmer with a future.
`},{id:8,title:`Organic Chicken Manure: The Best Fertilizer for Your Crops`,category:`Business`,readTime:`7 min read`,summary:`If you are raising chickens in Uganda, you are sitting on a goldmine that many farmers overlook — chicken manure. While eggs and meat are your main products, the manure your birds produce every day is one of the most nutrient-rich organic fertilizers available to Ugandan crop farmers. Whether you keep 50 layers in a backyard coop in Mbale or run a 500-broiler operation in Rakai, that manure has real value.`,content:`# Organic Chicken Manure: The Best Fertilizer for Your Crops

If you are raising chickens in Uganda, you are sitting on a goldmine that many farmers overlook — chicken manure. While eggs and meat are your main products, the manure your birds produce every day is one of the most nutrient-rich organic fertilizers available to Ugandan crop farmers. Whether you keep 50 layers in a backyard coop in Mbale or run a 500-broiler operation in Rakai, that manure has real value. Used correctly, it can boost your crop yields, improve your soil health, and even generate extra income.

This article explains what makes chicken manure special, how to compost it safely, which crops benefit most, and how to turn waste into a second revenue stream.

## Why Chicken Manure Outperforms Other Organic Fertilizers

Not all manure is equal. Chicken manure contains significantly higher levels of nitrogen, phosphorus, and potassium — the three primary nutrients plants need — than cow, goat, or pig manure. This is because chickens digest food efficiently and their manure is concentrated.

### Nutrient Content: The N-P-K Breakdown

Fresh chicken manure typically contains these nutrient levels per ton:

- **Nitrogen (N)**: 10 to 15 kg — promotes leafy growth and deep green color
- **Phosphorus (P)**: 8 to 12 kg — supports root development, flowering, and fruiting
- **Potassium (K)**: 6 to 10 kg — improves disease resistance and overall plant health
- **Calcium**: 30 to 50 kg — essential for cell wall formation, especially in tomatoes and peppers
- **Organic matter**: 250 to 300 kg — improves soil structure, water retention, and microbial activity

Compared to cow manure, which contains roughly 3 kg nitrogen, 2 kg phosphorus, and 3 kg potassium per ton, chicken manure delivers two to five times more nutrients. A single 50kg bag of well-composted chicken manure can replace a significant portion of chemical fertilizer while also improving long-term soil health.

### The Hidden Benefit: Micronutrients

Beyond N-P-K, chicken manure contains valuable micronutrients including magnesium, sulfur, zinc, manganese, copper, and iron. These trace elements are often missing in chemical fertilizers but play a critical role in plant metabolism, enzyme function, and chlorophyll production. Over time, regular application of chicken manure creates a balanced, fertile soil that chemical fertilizers alone cannot match.

## Fresh vs. Composted Manure: Why You Must Compost First

Here is the most important warning in this article: **never apply fresh chicken manure directly to your crops.** Fresh chicken manure is too strong. Its high nitrogen content can "burn" plant roots and seedlings. It also contains pathogens like Salmonella and E. coli, as well as weed seeds that can harm both plants and human health.

Composting solves all these problems. During composting, beneficial microorganisms break down organic matter, the high temperatures kill harmful bacteria and weed seeds, and the nitrogen stabilizes into a form that plants can safely absorb. The result is a dark, crumbly, earthy-smelling fertilizer that is safe, effective, and easy to handle.

### The Composting Process: Step by Step

Composting chicken manure is not complicated. Follow these steps to produce high-quality compost in 6 to 10 weeks.

**Step 1: Collect the Manure**

Gather manure from your chicken house daily or every two days. If you use deep litter, the bedding material (wood shavings, dry grass, or rice husks) mixed with manure is already a good starting point. The carbon in the bedding balances the high nitrogen in the manure.

**Step 2: Choose a Composting Site**

Select a shaded, well-drained location away from your chicken house and any water sources like boreholes or wells. A distance of at least 10 meters prevents contamination. Mark out a composting area of at least 2 meters by 2 meters.

**Step 3: Build the Pile**

Layer your materials in a pile or long heap (windrow):

- First layer: Chicken manure mixed with bedding (the nitrogen source)
- Second layer: Dry materials like maize stalks, banana leaves, or grass (the carbon source)
- Aim for a carbon-to-nitrogen ratio of about 25:1 to 30:1. In practical terms, mix one part fresh manure with two to three parts dry plant material.

The pile should be at least 1 meter high and 1.5 meters wide. This size retains heat effectively.

**Step 4: Moisten the Pile**

Sprinkle water until the mixture feels like a wrung-out sponge — damp but not soggy. In Uganda's sunny climate, you may need to water the pile once or twice a week during dry spells.

**Step 5: Turn the Pile Every 5 to 7 Days**

Turning the pile introduces oxygen, which speeds up decomposition and prevents bad odors. Use a fork or shovel to move the outer material to the center and the center material to the outside. If the pile smells like ammonia, add more dry carbon material. If it is dry and not heating up, add water.

**Step 6: Monitor Temperature**

A properly composting pile will heat up to 55 to 65 degrees Celsius within the first few days. This heat kills pathogens and weed seeds. If you do not have a thermometer, insert a long metal rod — it should feel hot to the touch when pulled out after 10 minutes.

**Step 7: Know When It Is Ready**

Your compost is ready when:

- It is dark brown or black and crumbly in texture
- It smells earthy, like forest soil — not like manure
- The original materials are no longer recognizable
- The pile has cooled down to ambient temperature
- It has been at least 6 weeks since you started

For vegetable crops, compost for a full 8 to 10 weeks to be extra safe. The extra time ensures all pathogens are eliminated.

## Application Methods: How to Use Composted Chicken Manure

Once your compost is ready, apply it using one of these proven methods.

### Method 1: Broadcasting Before Planting

Spread composted manure evenly across your field or garden bed at a rate of 2 to 5 tons per acre (about 5 to 10 kg per square meter). Mix it into the topsoil using a hoe or plough. This is ideal for maize, beans, and vegetable beds. Apply 2 to 3 weeks before planting to allow nutrients to integrate with the soil.

### Method 2: Side-Dressing Growing Crops

Place a ring or line of composted manure 10 to 15 centimeters away from the base of growing plants. Cover lightly with soil and water. This method works well for tomatoes, cabbage, kales, and bananas. Side-dressing provides a mid-season nutrient boost when plants need it most.

### Method 3: Making Manure Tea

Soak a sack of composted chicken manure in a 20-liter drum of water for 3 to 5 days. Stir daily. The resulting "manure tea" is a liquid fertilizer you can apply directly to plant leaves or around roots. This gives crops a quick nutrient boost and is especially useful for vegetables showing signs of deficiency.

### Method 4: Top-Dressing Pastures

Spread composted manure over grazing land at 1 to 2 tons per acre. The nutrients slowly release into the soil, improving grass quality for your livestock over the following months.

## Crops That Benefit Most from Chicken Manure

While almost any crop benefits from composted chicken manure, some respond particularly well due to their high nutrient demands.

### Vegetables

- **Tomatoes**: The high calcium content prevents blossom end rot, a common problem in Ugandan tomato farms. Expect firmer fruit and higher yields.
- **Cabbage and sukuma wiki (kale)**: These leafy greens love nitrogen and respond with larger, darker leaves and faster regrowth after harvesting.
- **Green peppers and hot peppers**: Benefit from phosphorus for flowering and fruit set, plus calcium for strong cell walls.
- **Onions**: Respond well to the sulfur content in chicken manure, which improves flavor and bulb development.
- **Carrots and Irish potatoes**: Need phosphorus for root and tuber development. Side-dressing with composted manure at tuber initiation significantly increases yields.

### Field Crops

- **Maize**: High nitrogen needs make chicken manure an excellent base fertilizer. Apply 3 to 5 tons per acre at planting for taller plants and fuller cobs.
- **Beans and groundnuts**: Benefit from phosphorus and potassium. The organic matter also improves the soil structure for these legumes.
- **Bananas and plantains**: Chicken manure provides the potassium these heavy feeders need for fruit development. Apply a ring around the mat and mulch over it.

### Fruit Trees

- **Mango, avocado, and citrus**: Young trees respond well to composted manure mixed into the planting hole. Mature trees benefit from annual top-dressing at the start of the rainy season.
- **Papaya**: Being a heavy feeder, papaya produces more and larger fruit with regular application of composted manure.

### Coffee

Uganda's prized Arabica and Robusta coffee bushes thrive with the balanced nutrition that composted chicken manure provides. Apply at the beginning of the rainy season, spreading compost in a circle around each tree and covering with mulch. Coffee farmers in Mount Elgon and Rwenzori regions who combine chicken manure with shade management report improved bean size and cup quality.

## Selling Chicken Manure for Extra Income

If you produce more manure than your own crops can use, selling it is an excellent way to diversify your farm income. Here is how to turn waste into cash.

### Packaging for Sale

- Bag composted manure in 50kg sacks, the same size used for cement or feed. These are familiar to Ugandan farmers and easy to transport.
- Clearly label each sack: "Composted Chicken Manure — Organic Fertilizer." Include your farm name and contact number.
- Sell fresh (uncomposted) manure only to farmers who understand they must compost it first. Better yet, only sell fully composted product to protect your reputation.

### Pricing

- Fresh chicken manure: UGX 10,000 to UGX 20,000 per ton, depending on your location
- Composted chicken manure: UGX 50,000 to UGX 100,000 per ton, or UGX 3,000 to UGX 5,000 per 50kg sack
- Manure tea (liquid): UGX 1,000 to UGX 2,000 per liter in small containers

Prices are highest near urban markets like Kampala, Entebbe, Jinja, and Mbale, where demand for organic produce drives demand for organic fertilizers.

### Finding Buyers

- **Nearby crop farmers**: Walk or ride through neighboring villages and talk to vegetable and banana farmers. Word spreads quickly when your product delivers results.
- **Farmers' markets**: Many urban farmers and market gardeners visit agricultural supply markets specifically looking for organic inputs.
- **Online platforms**: Post on local farming WhatsApp groups, Facebook farming communities, and agricultural classified websites.
- **Organic produce exporters**: Companies exporting organic vanilla, coffee, and sesame to European markets often need certified organic inputs. Contact them and ask about their input requirements.
- **Institutions**: Schools, churches, and hospitals with gardens sometimes purchase bulk manure for their grounds.

### Regulatory Note

If you plan to sell large quantities or label your manure as "organic fertilizer," check with the Uganda National Bureau of Standards (UNBS) about registration requirements. For small-scale sales within your district, informal sales are common and accepted.

## Storage and Handling Best Practices

Proper storage keeps your manure valuable and prevents problems.

### Storage Location

- Store fresh manure in a covered pit or sheltered area to prevent nutrient loss from sun and rain.
- Keep stored manure at least 30 meters from any water source and 10 meters from your chicken house.
- Use a concrete floor or compacted earth to prevent nutrients from leaching into groundwater.

### Storage Duration

- Fresh manure should not be stored more than a few days before composting begins. The longer it sits, the more nitrogen escapes as ammonia gas.
- Composted manure, once fully cured, can be stored for 3 to 6 months in a dry, covered place without significant nutrient loss.

### Safety Precautions

- Always wear gloves and boots when handling fresh or partially composted manure.
- Wash hands thoroughly after handling manure, even if you wore gloves.
- Keep children away from manure storage and composting areas.
- Do not apply fresh manure within 90 days of harvesting crops that are eaten raw (lettuce, tomatoes, carrots). Composted manure is safe to apply up to 60 days before harvest.
- During composting, position the pile so runoff does not flow toward wells, streams, or neighbors' property.

### Odor Management

Well-managed composting should not produce strong odors. If your pile smells bad:

- Turn it more frequently to increase oxygen
- Add dry carbon materials like straw, leaves, or sawdust
- Ensure proper moisture — it should be damp, not wet
- Cover fresh manure with a layer of dry material each time you add to the pile

## The Environmental and Long-Term Benefits

Beyond immediate crop yields and income, using chicken manure as fertilizer delivers long-term environmental benefits that matter for Uganda's agricultural future.

- **Soil health**: Chemical fertilizers deplete organic matter over time. Chicken manure rebuilds it, improving water infiltration, reducing erosion, and increasing the soil's ability to hold nutrients.
- **Reduced chemical costs**: As soil health improves, you need fewer chemical inputs over time. Many farmers report a 30% to 50% reduction in fertilizer costs after 3 years of regular organic amendment.
- **Carbon sequestration**: Composted manure stores carbon in the soil, contributing to climate change mitigation. This is increasingly important as Uganda participates in global carbon credit discussions.
- **Waste reduction**: Converting manure into fertilizer keeps waste out of waterways, reducing pollution and disease risk in your community.

## Conclusion

Chicken manure is not waste — it is wealth. Every kilogram your birds produce is a kilogram of nutrients waiting to feed your crops or fill your pocket. The key is composting it properly, applying it correctly, and viewing it as a second product line on your poultry farm.

Start small. If you have 50 chickens, begin by composting your manure and applying it to your home garden or a small vegetable plot. Measure the difference in growth and yield compared to untreated plots. Once you see the results, scale up your composting and consider selling the excess.

Uganda's soil fertility is declining in many districts due to decades of intensive farming without adequate replenishment. By returning composted chicken manure to the soil, you are not just farming smarter — you are farming for the future. Your crops will grow better, your customers will notice the quality, and your bank account will reflect the wisdom of turning waste into wealth.

**Start composting today.** Gather today's manure, mix it with dry grass or leaves, and begin your first pile. In two months, you will hold in your hands one of the best fertilizers Ugandan agriculture has to offer.
`},{id:9,title:`Day-Old Chicks vs. Brooded Chicks: Which Should You Buy?`,category:`Getting Started`,readTime:`7 min read`,summary:`One of the first and most important decisions every poultry farmer in Uganda must make is what type of chicks to buy. Should you purchase day-old chicks directly from the hatchery and raise them from their first moments of life? Or should you pay more for brooded chicks — birds that have already survived the most vulnerable first two to four weeks?.`,content:`# Day-Old Chicks vs. Brooded Chicks: Which Should You Buy?

One of the first and most important decisions every poultry farmer in Uganda must make is what type of chicks to buy. Should you purchase day-old chicks directly from the hatchery and raise them from their first moments of life? Or should you pay more for brooded chicks — birds that have already survived the most vulnerable first two to four weeks?

This choice affects your costs, survival rates, labor requirements, and ultimately your profit. There is no single right answer for every farmer. The best choice depends on your experience level, available time, facilities, and budget. In this article, we break down the pros and cons of each option, compare the real costs, explain when to choose which, and share practical advice on where to buy and how to transport chicks safely across Uganda.

## Understanding Day-Old Chicks

Day-old chicks are birds that hatch at the hatchery and are sold within 24 to 72 hours of birth. They arrive at your farm tiny, fluffy, and entirely dependent on you for warmth, food, water, and protection.

### Advantages of Buying Day-Old Chicks

**Lower purchase price.** Day-old chicks are the cheapest way to stock your farm. A broiler chick at day-old costs roughly UGX 3,500 to UGX 5,000, while a layer chick costs UGX 4,000 to UGX 6,000. This low entry price allows you to buy more birds with the same capital.

**Complete control over brooding.** When you raise chicks from day one, you control every aspect of their early environment. You choose the brooding temperature, the quality of feed, the vaccination schedule, and the hygiene standards. This control is valuable for experienced farmers who know exactly what their birds need.

**Better bonding and handling.** Chicks raised on your farm from day one become accustomed to your presence, your voice, and your management style. This reduces stress throughout their lives and makes them easier to handle during vaccinations and daily management.

**Access to the best breeds.** Hatcheries typically have the widest selection of breeds and the freshest stock at the day-old stage. If you want a specific high-performance hybrid like Cobb 500 broilers or Isa Brown layers, buying day-old gives you the best chance of getting exactly what you ordered.

**Lower disease risk from outside farms.** Brooded chicks come from another farm's brooding house, where they may have been exposed to diseases. Day-old chicks come directly from the controlled hatchery environment, reducing the risk of bringing infections onto your farm.

### Disadvantages of Buying Day-Old Chicks

**High mortality risk.** The first three weeks of a chick's life are the most dangerous. Temperature fluctuations, poor feed quality, dirty water, and disease can kill 10% to 30% of day-old chicks if management is not excellent. For a beginner farmer, this risk is significant.

**Requires brooding expertise.** Day-old chicks need a constant heat source at 32 to 35 degrees Celsius for the first week, gradually reducing by 2 to 3 degrees each week. They need special starter feed with 22% to 24% protein for broilers or 20% for layers. They need clean water with glucose and vitamins for the first few days. Getting any of this wrong leads to stunted growth or death.

**Higher labor and attention.** For the first two weeks, someone needs to check on day-old chicks at least 4 to 6 times per day. They need feed refreshed, water cleaned, temperature monitored, and behavior observed. This is demanding for farmers who also have other jobs or responsibilities.

**More equipment needed.** You need reliable brooding equipment — heat lamps, charcoal stoves, or electric brooders, plus adequate housing that maintains temperature and keeps out drafts and predators. This adds to your startup costs.

## Understanding Brooded Chicks

Brooded chicks, also called "off-layer" or "grower" chicks in some markets, are birds that have already passed through the critical brooding period. They are typically sold at 3 to 6 weeks of age, depending on the supplier and your agreement. By this age, they have feathers, can regulate their body temperature, and have received their first vaccinations.

### Advantages of Buying Brooded Chicks

**Higher survival rates.** The most dangerous period is already behind them. Mortality after the brooding stage typically drops to 2% to 5% for the remainder of the growing period. This predictability is valuable, especially for beginners.

**No brooding equipment needed.** Because the birds no longer need supplemental heat, you save on brooding equipment, electricity or charcoal costs, and the special housing requirements of a brooder house. Your housing can be simpler.

**Less labor intensive.** Brooded chicks need the standard care of growing or laying birds — feed, water, cleaning, and observation — but they do not require the constant attention that day-old chicks demand. This is ideal for farmers who have other employment or farm enterprises.

**Faster time to market or production.** With broilers, buying a 3-week-old chick means you reach market weight in just 3 to 4 more weeks instead of 6 to 7 weeks from day-old. With layers, a 6-week-old chick will start laying in approximately 12 weeks instead of 18. This faster turnaround improves your cash flow.

**Lower overall risk for beginners.** If you are new to poultry farming, buying brooded chicks lets you learn the ropes of daily management without the steep learning curve and high stakes of brooding. Many successful farmers started this way and moved to day-old chicks as their skills improved.

### Disadvantages of Buying Brooded Chicks

**Higher purchase price.** The biggest drawback is cost. A brooded broiler chick at 3 to 4 weeks can cost UGX 7,000 to UGX 10,000 — roughly double the day-old price. A brooded layer at 6 to 8 weeks can cost UGX 8,000 to UGX 12,000. This higher cost directly reduces your profit margin.

**Unknown history.** You are trusting the seller's word about the breed, vaccination history, feed quality, and management conditions during the brooding period. Unscrupulous sellers may misrepresent the age, breed, or health status of the birds. Poorly brooded chicks may be stunted and never reach their full potential.

**Disease risk from the brooding farm.** The chicks have been in another farmer's environment for several weeks. They may have been exposed to diseases, parasites, or poor biosecurity practices that you cannot see when you buy them.

**Limited selection.** Not all hatcheries or suppliers sell brooded chicks, and the selection of breeds may be limited. If you want a specific hybrid, you may need to buy day-old.

**Transport stress at older age.** While day-old chicks travel relatively well because they still have yolk reserves, older chicks experience more transport stress. A long, hot journey from the supplier to your farm can trigger disease or reduce immunity.

## Cost Comparison: Real Numbers for Ugandan Farmers

Let us compare the total costs for a batch of 100 broilers using each approach. These are realistic estimates based on current market conditions in Uganda.

### Scenario A: 100 Day-Old Broiler Chicks

| Item | Cost (UGX) |
|------|------------|
| Day-old chicks (100 x 4,000) | 400,000 |
| Brooding equipment (shared across batches) | 100,000 |
| Charcoal/electricity for heat (3 weeks) | 80,000 |
| Starter feed (12 bags) | 1,200,000 |
| Finisher feed (20 bags) | 1,840,000 |
| Vaccines and drugs | 150,000 |
| Labor (intensive first 3 weeks) | 150,000 |
| **Total estimated cost** | **3,920,000** |
| Expected survivors (92%) | 92 birds |
| Cost per surviving bird | 42,609 |

### Scenario B: 100 Brooded Chicks (4 weeks old)

| Item | Cost (UGX) |
|------|------------|
| Brooded chicks (100 x 8,500) | 850,000 |
| Brooding equipment | 0 |
| Heating costs | 0 |
| Starter feed (already consumed by seller) | 0 |
| Finisher feed (22 bags) | 2,024,000 |
| Vaccines and drugs (fewer needed) | 80,000 |
| Labor (standard growing care) | 80,000 |
| **Total estimated cost** | **3,034,000** |
| Expected survivors (97%) | 97 birds |
| Cost per surviving bird | 31,278 |

Wait — the brooded chick scenario appears cheaper per bird. But notice what is missing: in Scenario B, you paid the seller for the feed, labor, and brooding costs that went into raising those chicks. The seller built those costs into the UGX 8,500 price. The real difference is risk and timing.

With day-old chicks, you spend more total money and accept higher early mortality, but you control every input. With brooded chicks, you spend less total money but pay a premium per bird, and you lose some control over the early rearing period.

The choice is not purely about cost. It is about your risk tolerance, skills, and circumstances.

## When to Choose Day-Old Chicks

Buy day-old chicks if:

- You have brooding experience or are willing to learn intensively before the chicks arrive
- You have reliable electricity or a safe charcoal heating system for maintaining brooder temperature
- You have a well-constructed brooder house that maintains warmth and keeps out drafts
- Your budget is tight and you want the lowest purchase price per chick
- You want complete control over feed quality, vaccination timing, and management practices
- You have enough time to check on chicks multiple times daily for the first 2 to 3 weeks
- You are buying from a reputable hatchery where you trust the breed quality and health status
- You plan to run a large operation where the cost savings of day-old chicks add up significantly

Day-old chicks are the right choice for committed farmers who treat poultry as their primary business and are prepared to invest the time and attention needed for successful brooding.

## When to Choose Brooded Chicks

Buy brooded chicks if:

- You are a complete beginner and want to avoid the high-mortality brooding phase
- You lack reliable heating equipment or electricity for brooding
- You have limited time due to another job or business
- You want faster cash flow — brooded broilers reach market sooner, and brooded layers start producing eggs earlier
- You found a trustworthy supplier with a proven track record of healthy, well-managed brooded chicks
- You are expanding your flock and do not have enough brooder space for additional day-old chicks
- You want to test poultry farming on a small scale before investing in full brooding infrastructure

Brooded chicks are the practical choice for part-time farmers, beginners, and anyone who wants a lower-risk entry into poultry production.

## Where to Buy Quality Chicks in Uganda

Whether you choose day-old or brooded chicks, buying from a reliable source is critical. Here are the main options available to Ugandan farmers.

### Commercial Hatcheries

These are the most reliable sources for day-old chicks, especially if you want specific hybrid breeds with guaranteed performance.

- **Biyinzika Poultry International**: One of Uganda's largest and most established hatcheries. Located in Entebbe with distribution points across the country. Supplies Cobb 500 broilers and Isa Brown layers. Known for consistent quality and reliable delivery.
- **Ugachick Poultry Breeders**: Located in Kajjansi, supplies a range of broiler and layer day-old chicks. Also produces parent stock used by other hatcheries in the region.
- **Bokomo Foods Uganda**: Supplies both chicks and formulated feeds, making them a convenient one-stop option.
- **Hunters Poultry Farm**: Located in Mukono, offers both day-old and brooded chicks with growing popularity among small-scale farmers.

### National Agricultural Research Organization (NARO)

NARO's research stations, including the National Animal Genetic Resources Centre and Data Bank (NAGRC&DB) in Entebbe, supply improved indigenous chicks and parent stock. These are ideal if you want to raise dual-purpose birds that produce both eggs and meat with better disease resistance than pure commercial hybrids.

### Local Breeders and Brooders

Many experienced farmers across Uganda now specialize in brooding chicks for resale. These suppliers are particularly common in:

- **Central Region**: Mukono, Wakiso, Luweero, and Mpigi districts have numerous small-scale brooders
- **Eastern Region**: Iganga, Jinja, and Mbale have active poultry networks where brooded chicks are regularly available
- **Western Region**: Mbarara, Ibanda, and Kabale have growing poultry sectors with local breeders
- **Northern Region**: Gulu, Lira, and Arua are seeing increased hatchery activity

To find local breeders:

- Ask at your district agricultural office or veterinary extension service
- Join poultry farming WhatsApp groups for your region — these often have active sellers posting available batches
- Visit local agricultural markets on market days
- Ask feed suppliers — they usually know who is selling chicks in the area
- Check with your local SACCO or farmers' association for recommendations

### What to Look For in a Supplier

Before buying chicks from any source, do your due diligence:

- Ask for references from other farmers who bought from the same supplier
- Visit the facility if possible. A clean, organized operation is a good sign
- Request vaccination records. Reputable suppliers keep written records of what vaccines were given and when
- Inspect the chicks before purchase. They should be active, alert, with clean vents, bright eyes, and no signs of diarrhea or labored breathing
- For brooded chicks, check that they are the age claimed. Four-week-old broilers should weigh 400 to 600 grams. Six-week-old layers should weigh 350 to 500 grams depending on the breed
- Ask about after-sales support. Good suppliers will answer questions and sometimes offer replacement for birds that die within a few days due to transport stress or pre-existing conditions

## Transporting Chicks Safely

Transport is a critical and often overlooked part of buying chicks. Poor transport can kill birds or weaken them so much that they never recover. Here is how to do it right.

### Timing

- Transport chicks during the coolest parts of the day — early morning or late evening
- Avoid the midday heat, especially in hot districts like Nakasongola, Soroti, and parts of the cattle corridor
- Plan your journey so chicks spend the minimum possible time in transit
- Never leave chicks waiting in direct sunlight, even for 10 minutes

### Packaging

- Day-old chicks should be transported in perforated chick boxes designed for airflow. Each box typically holds 100 day-old chicks
- Brooded chicks need larger, well-ventilated crates with enough space for them to stand without piling on top of each other
- Do not overcrowd. Overcrowding causes heat buildup and smothering
- Line the bottom of transport crates with clean, dry wood shavings or newspaper

### Vehicle Setup

- Use a vehicle with good ventilation. Pickup trucks with canopies work well if the canopy has ventilated sides
- Never transport chicks in the closed trunk of a car — temperatures can become lethal within minutes
- Place boxes or crates securely so they do not slide or tip during the journey
- If travelling more than 2 hours, plan a stop to check on the chicks and ensure they are not overheating

### On Arrival

- Have your brooder house or growing house prepared before the chicks arrive. The house should be pre-heated to the correct temperature, with fresh feed and clean water already in place
- For day-old chicks, add glucose and vitamin electrolytes to their first drinking water. This helps them recover from transport stress and replaces energy reserves
- Dip each chick's beak into the water upon arrival so they learn where to drink
- Observe the chicks closely for the first 24 hours. Any birds that are lethargic, not eating, or showing signs of illness should be isolated immediately
- Continue any vaccination schedule that the supplier started. Do not skip vaccines just because the chicks came from a "good" source

### Transport Costs

Budget for transport costs when planning your purchase:

- Within the same district: UGX 20,000 to UGX 50,000 by boda-boda or taxi
- Between districts (e.g., Kampala to Mbarara): UGX 100,000 to UGX 250,000 depending on quantity and vehicle
- Some hatcheries offer delivery services for large orders, sometimes at a subsidized rate
- If buying from a local breeder within 10 kilometers, you may be able to carry small quantities yourself using ventilated boxes

## Conclusion

Both day-old chicks and brooded chicks have a place in Uganda's poultry industry. Day-old chicks offer lower purchase prices and complete management control, but they demand skill, time, and proper brooding facilities. Brooded chicks cost more upfront but reduce mortality risk, save labor, and get you to market or production faster.

For a beginner farmer with limited experience, brooded chicks are usually the safer and more practical choice. The extra cost is worth the reduced risk and lower labor demands. As you gain experience, confidence, and infrastructure, transitioning to day-old chicks will improve your margins and give you full control over your flock.

The key to success with either option is buying from a reputable source, transporting the birds carefully, and providing excellent care from the moment they arrive on your farm. A healthy chick — whether day-old or brooded — is the foundation of a profitable poultry business.

**Still unsure which to choose?** Start with 50 brooded chicks for your first batch. Learn the daily management of growing birds. Then, for your second batch, try 50 day-old chicks while your confidence is high. Within a year, you will know exactly which approach works best for your farm, your budget, and your goals.
`},{id:10,title:`Vaccination Schedule for Chickens in Uganda`,category:`Health`,readTime:`7 min read`,summary:`Vaccination is one of the most important things you can do to protect your flock from deadly diseases. In Uganda, where poultry diseases like Newcastle, Gumboro (Infectious Bursal Disease), and Fowl Typhoid are common, a proper vaccination program can mean the difference between a thriving farm and heavy losses.`,content:`# Vaccination Schedule for Chickens in Uganda

Vaccination is one of the most important things you can do to protect your flock from deadly diseases. In Uganda, where poultry diseases like Newcastle, Gumboro (Infectious Bursal Disease), and Fowl Typhoid are common, a proper vaccination program can mean the difference between a thriving farm and heavy losses.

This guide gives you a complete week-by-week vaccination schedule, explains how to give vaccines correctly, and helps you avoid common mistakes that many Ugandan farmers make.

## Why Vaccination Matters on Your Farm

Uganda's warm tropical climate creates the perfect environment for many poultry diseases to spread quickly. Without vaccination, a single outbreak of Newcastle disease can wipe out your entire flock within days. Vaccination builds immunity in your birds, reducing death losses and protecting your investment.

Here are the main diseases you should vaccinate against in Uganda:

- **Newcastle Disease (ND)** - Highly contagious, causes high death rates
- **Infectious Bursal Disease (Gumboro/IBD)** - Affects young chicks, damages the immune system
- **Fowl Typhoid** - Caused by Salmonella, leads to septicaemia and death
- **Fowl Pox** - Causes sores on the skin and in the mouth, reduces growth and egg production
- **Infectious Bronchitis** - Respiratory disease that affects breathing and egg quality
- **Avian Influenza (Bird Flu)** - Required by law, controlled by the government
- **Marek's Disease** - A viral tumour disease, especially dangerous for young birds

## Complete Week-by-Week Vaccination Schedule

This schedule applies to both broilers and layers. Always consult your veterinarian for specific advice based on your area and flock health.

### Day 1 (Hatching Day)

**Vaccine:** Marek's Disease Vaccine

- Given at the hatchery or on the farm immediately after hatching
- Administered through subcutaneous injection at the back of the neck
- This is the most critical vaccine - do not skip it

### Day 7 (Week 1)

**Vaccine:** Newcastle Disease + Infectious Bronchitis (ND + IB)

- Use the Lasota strain (eye drop or drinking water method)
- Best given as eye drops for stronger immunity
- If using drinking water, withhold water for 2 hours before vaccination

### Day 10-12 (Week 1-2)

**Vaccine:** Infectious Bursal Disease (Gumboro/IBD)

- Use the intermediate strain for standard protection
- Administered via drinking water
- Ensure all birds drink the vaccine water within 1-2 hours
- Add skimmed milk or vaccine stabiliser to the water to protect the live virus

### Day 14 (Week 2)

**Vaccine:** Newcastle Disease Lasota (booster)

- Second dose to strengthen immunity against ND
- Can be given in drinking water

### Day 18-21 (Week 3)

**Vaccine:** Gumboro (IBD) Intermediate Plus or Booster

- Second Gumboro vaccination for stronger protection
- Use drinking water method
- Follow the same water preparation steps as the first dose

### Day 28 (Week 4)

**Vaccine:** Newcastle Disease Komarov (K) or R2B Strain

- This is a stronger, killed vaccine for long-term protection
- Given as an injection under the skin or into the muscle
- For layers and breeders, this provides lasting immunity

### Day 35 (Week 5)

**Vaccine:** Fowl Pox Vaccine

- Administered through wing web stab method (using a special needle)
- A small scab should form at the site within 7-10 days, showing the vaccine worked
- Do not give during an outbreak of any other disease

### Week 6-8

**Vaccine:** Fowl Typhoid Vaccine

- Administered via drinking water or wing web method
- Especially important for layers and breeders in areas with Salmonella problems
- Common in districts around Kampala, Wakiso, and Mukono

### For Layers (Weeks 12-18)

- **Week 12:** ND Lasota booster in drinking water
- **Week 16-18:** ND + IB killed vaccine injection
- **Every 6-8 weeks thereafter:** ND Lasota booster in drinking water
- **Week 18:** Fowl Typhoid booster if needed

### For Broilers (Up to 6 Weeks)

Broilers have a shorter lifespan, so their vaccination program is simpler:

- Day 1: Marek's Disease (hatchery)
- Day 7: ND + IB (eye drop)
- Day 10-12: Gumboro (drinking water)
- Day 14: ND Lasota booster
- Day 18-21: Gumboro booster
- Day 28: ND Komarov injection
- Day 35: Fowl Pox (if raising beyond 6 weeks)

## How to Administer Vaccines

Giving vaccines correctly is just as important as giving them on time. Here are the main methods:

### Eye Drop Method

Used mainly for Newcastle Disease Lasota in young chicks.

1. Mix the vaccine in cool, clean boiled water (use the amount specified on the label)
2. Use a dropper to place one drop in each chick's eye
3. Hold the chick gently until the drop is absorbed
4. This gives the strongest immunity because the vaccine contacts the respiratory system directly

### Drinking Water Method

The most common method for large flocks.

1. Clean and rinse drinkers thoroughly - no soap or disinfectant residue
2. Withhold water from birds for 1-2 hours before vaccination
3. Prepare vaccine in clean, cool, non-chlorinated water (boiled and cooled water is best)
4. Add vaccine stabiliser or 2 tablespoons of skimmed milk per 10 litres of water
5. Give the vaccine water first thing in the morning
6. Ensure all birds drink within 1-2 hours
7. Do not add anything else to the water during vaccination
8. After 2 hours, return to normal water supply

### Injection Method

Used for killed vaccines like ND Komarov and Marek's Disease.

1. Use sterile syringes and needles
2. For subcutaneous (under the skin) injection: lift the skin at the back of the neck and inject
3. For intramuscular (into the muscle) injection: inject into the breast muscle
4. Use a new needle for every 50-100 birds
5. Disinfect the injection site with spirit before and after

### Wing Web Stab Method

Used for Fowl Pox vaccine.

1. Dip the special double-needle applicator into the vaccine
2. Pierce the wing web (the thin skin under the wing) through to the other side
3. Avoid blood vessels and bones
4. Check for a "take" - a small swelling or scab at the site after 7-10 days

## Record Keeping for Vaccination

Good records help you track your flock's health and plan future vaccinations. Every serious poultry farmer in Uganda should keep a vaccination record book.

Your records should include:

- **Date of vaccination** - When each vaccine was given
- **Vaccine name and batch number** - For tracking and in case of problems
- **Expiry date** - Never use expired vaccines
- **Number of birds vaccinated** - Helps you monitor coverage
- **Method used** - Eye drop, drinking water, injection, or wing web
- **Name of person who vaccinated** - For accountability
- **Any reactions observed** - Some vaccines cause mild reactions
- **Next vaccination date** - So you do not miss boosters

A simple notebook kept near the chicken house is enough. Some farmers also use phone reminders to alert them before the next vaccination date.

## Common Vaccination Mistakes to Avoid

Even experienced farmers make mistakes with vaccination. Here are the most common ones:

### 1. Using Expired Vaccines

Always check the expiry date before buying or using any vaccine. Expired vaccines will not protect your birds. Buy vaccines only from trusted suppliers like National Animal Genetic Resources Centre and Data Bank (NAGRC&DB), veterinary shops, or licensed distributors.

### 2. Giving Vaccines to Sick Birds

Vaccines are meant for healthy birds only. If your flock is showing signs of disease, treat them first and vaccinate after they recover. Sick birds may not develop proper immunity, and the stress of vaccination can make them worse.

### 3. Not Following Cold Chain Storage

Most poultry vaccines are live and must be kept cold from the time they leave the factory until they are used. If vaccines are left in the sun or at room temperature for too long, the live organisms die and the vaccine becomes useless. Transport vaccines in a cooler box with ice packs.

### 4. Using Chlorinated Water

Tap water in Uganda is usually chlorinated, which kills live vaccine organisms. Always use boiled and cooled water, or add vaccine stabiliser or skimmed milk to neutralise the chlorine.

### 5. Skipping the Booster Doses

One dose is often not enough for full protection. Booster doses are essential to build strong, lasting immunity. Follow the schedule and do not skip any dose.

### 6. Vaccinating During Hot Hours

In Uganda's climate, vaccination during the heat of midday causes extra stress. Vaccinate early in the morning or late in the afternoon when temperatures are cooler.

### 7. Not Cleaning Drinkers Before Vaccination

Soap and disinfectant residue in drinkers will kill live vaccines. Clean drinkers thoroughly with plain water only before vaccination.

### 8. Mixing Different Vaccines Without Knowledge

Some vaccines can be combined, but others cannot. Unless a veterinarian advises you, give vaccines separately and at least 3-5 days apart.

## Where to Buy Vaccines in Uganda

You can buy poultry vaccines from:

- Licensed veterinary shops in major towns (Kampala, Jinja, Masaka, Mbarara, Gulu, Mbale)
- National Animal Genetic Resources Centre and Data Bank (NAGRC&DB) - Entebbe
- Regional veterinary offices
- Approved agro-input dealers
- Some large poultry feed suppliers

Always buy from trusted sources. Fake or poorly stored vaccines are a real problem. Keep your receipt and note the batch number.

## Cost of Vaccination

Vaccination is one of the cheapest investments you can make. For a flock of 500 broilers, the total vaccination cost is usually between UGX 50,000 and UGX 100,000 from day old to slaughter. This is very small compared to the cost of losing birds to disease.

For layers, annual vaccination costs range from UGX 5,000 to UGX 15,000 per bird, spread over the laying period. Again, this is far cheaper than replacing dead birds or losing egg production.

## Conclusion

A proper vaccination schedule is the foundation of healthy poultry farming in Uganda. Diseases like Newcastle and Gumboro can destroy your business overnight, but regular vaccination keeps your flock protected. Follow the week-by-week schedule, use the right administration methods, keep good records, and avoid the common mistakes outlined above.

Start vaccinating your flock from day one, and make it a non-negotiable part of your farm management. Your birds will be healthier, your death losses will drop, and your profits will grow. If you are unsure about any step, always consult a qualified veterinarian.

*Stay consistent with your vaccination program, and your poultry farm in Uganda will thrive for years to come.*
`},{id:11,title:`How to Calculate Broiler Profit: A Step-by-Step Guide`,category:`Business`,readTime:`7 min read`,summary:`Broiler farming is one of the fastest ways to earn money in poultry production in Uganda. A batch of broilers can be ready for market in just 6 to 8 weeks. But many farmers struggle to understand whether they are truly making a profit or just breaking even.`,content:`# How to Calculate Broiler Profit: A Step-by-Step Guide

Broiler farming is one of the fastest ways to earn money in poultry production in Uganda. A batch of broilers can be ready for market in just 6 to 8 weeks. But many farmers struggle to understand whether they are truly making a profit or just breaking even. This guide will walk you through every step of calculating broiler profit, using numbers that reflect the reality of farming in Uganda today.

Whether you are raising 100 birds or 5,000, knowing your true profit margin is essential for growing your business.

## Understanding All Your Cost Inputs

To calculate profit accurately, you must first know every single cost that goes into raising your broilers. Many farmers only count feed and chicks, then wonder why their bank account does not reflect their "profit." Do not skip any category below.

### 1. Day-Old Chicks

This is your first major cost. The price of day-old broiler chicks in Uganda ranges from UGX 2,500 to UGX 4,500 per chick depending on the supplier and breed.

- 500 chicks at UGX 3,500 each = UGX 1,750,000
- Always budget for 5-10% extra mortality (so buy slightly more than your target)

### 2. Feed Costs

Feed is the largest expense in broiler production, usually taking 60-70% of your total costs. Broilers in Uganda are typically raised for 6 weeks (42 days).

A broiler consumes approximately:

- Starter feed (0-2 weeks): 1 kg per bird
- Grower feed (3-4 weeks): 1.5 kg per bird
- Finisher feed (5-6 weeks): 2 kg per bird

**Total feed per bird: approximately 4.5 kg over 6 weeks**

With feed prices in Uganda currently ranging from UGX 2,000 to UGX 3,000 per kg for quality commercial feeds:

- Feed per bird: 4.5 kg x UGX 2,500 = UGX 11,250
- For 500 birds: 4.5 kg x 500 = 2,250 kg total feed
- Total feed cost: 2,250 kg x UGX 2,500 = UGX 5,625,000

*Tip: Mixing your own feed using maize bran, silver fish, and soya can reduce this cost by 20-30% if done correctly.*

### 3. Housing and Equipment

If you already have housing, calculate depreciation per batch. If you are starting new, divide the total cost by the expected number of batches over the lifetime of the structure.

Sample housing costs for a 500-bird unit:

- Chicken house construction (semi-permanent): UGX 3,000,000 - UGX 8,000,000
- Brooder setup (heat lamps/charcoal jikos): UGX 200,000 - UGX 500,000
- Drinkers (30 units at UGX 5,000): UGX 150,000
- Feeders (30 units at UGX 5,000): UGX 150,000
- Other equipment: UGX 100,000

**Total equipment: UGX 3,600,000 - UGX 9,400,000**

If your chicken house lasts 5 years (about 40 batches):
- Housing cost per batch: UGX 3,600,000 / 40 = UGX 90,000

### 4. Labour

If you hire someone to manage the birds:

- One worker for 6 weeks: UGX 200,000 - UGX 400,000 depending on location
- If you manage them yourself, still account for your time at a reasonable rate

### 5. Medication and Vaccination

Healthy broilers still need some medical attention:

- Vaccines (Newcastle, Gumboro, etc.): UGX 50,000 - UGX 100,000 for 500 birds
- Multivitamins and stress packs: UGX 50,000 - UGX 80,000
- Antibiotics (if needed): UGX 30,000 - UGX 100,000
- Disinfectants and lime: UGX 30,000

**Total medication: UGX 160,000 - UGX 310,000**

### 6. Bedding Material

Wood shavings or coffee husks are commonly used:

- 4-6 bags of wood shavings at UGX 10,000 each = UGX 40,000 - UGX 60,000

### 7. Utilities (Water and Electricity)

- Water for 500 birds over 6 weeks: UGX 30,000 - UGX 50,000
- Electricity for lighting and heating (if applicable): UGX 50,000 - UGX 100,000

### 8. Transportation

- Transport for chicks from supplier: UGX 30,000 - UGX 100,000
- Transport for feed (multiple trips): UGX 50,000 - UGX 150,000
- Transport to market/abattoir at sale: UGX 50,000 - UGX 150,000

**Total transport: UGX 130,000 - UGX 400,000**

### 9. Other Costs

- Mortality losses (expect 5-10%): For 500 birds, losing 25-50 birds means lost feed and chick investment
- Unexpected expenses: Budget UGX 100,000 - UGX 200,000 as a buffer
- Feed sacks (if you buy in bulk): Sometimes not included in feed price
- Litter/manure disposal: UGX 20,000

## Revenue Calculation

Now let us look at what you earn from your 500-broiler batch.

### Live Weight at Sale

After 6 weeks of good feeding and management:

- Average live weight per bird: 1.8 kg - 2.2 kg
- For 500 birds with 8% mortality (460 survivors)
- Total live weight: 460 birds x 2.0 kg = 920 kg

### Selling Price Per Kg

Broiler prices vary by market:

- Sold live at the farm gate: UGX 7,000 - UGX 9,000 per kg
- Sold to traders/brokers: UGX 6,500 - UGX 8,000 per kg
- Sold processed/dressed to restaurants: UGX 10,000 - UGX 15,000 per kg equivalent

Using a conservative farm gate price of UGX 8,000 per kg:

**Total revenue: 920 kg x UGX 8,000 = UGX 7,360,000**

### Alternative: Selling by Bird

Some farmers prefer to sell whole birds:

- 460 birds x UGX 16,000 per bird = UGX 7,360,000

*Note: Prices fluctuate with season. Christmas, Eid, and Easter typically bring higher prices. Plan your batch to mature during these peak periods.*

## Sample Profit Calculation (500 Birds, 6 Weeks)

Let us put it all together with real numbers:

### Total Costs (UGX)

| Cost Item | Amount (UGX) |
|-----------|-------------|
| Day-old chicks (500 @ UGX 3,500) | 1,750,000 |
| Feed (2,250 kg @ UGX 2,500) | 5,625,000 |
| Housing depreciation | 90,000 |
| Labour (6 weeks) | 250,000 |
| Vaccination and medication | 200,000 |
| Bedding material | 50,000 |
| Utilities | 75,000 |
| Transportation | 200,000 |
| Miscellaneous | 150,000 |
| **TOTAL COSTS** | **8,390,000** |

### Total Revenue (UGX)

| Item | Amount (UGX) |
|------|-------------|
| 460 birds sold at 2.0 kg average @ UGX 8,000/kg | 7,360,000 |
| Manure sales (optional extra income) | 50,000 |
| **TOTAL REVENUE** | **7,410,000** |

### Profit Calculation

Profit = Total Revenue - Total Costs

**Profit = UGX 7,410,000 - UGX 8,390,000 = UGX -980,000 (Loss)**

Wait - this shows a loss! This is what happens when costs are not well controlled. Let us see how to improve this.

## Improved Scenario: Maximising Your Profit

By making key changes, you can turn this loss into profit:

### Reduce Costs:

1. **Mix your own feed** - Reduce feed cost to UGX 2,000/kg: Savings = UGX 1,125,000
2. **Improve management** - Reduce mortality to 5% (475 birds survive): More birds to sell
3. **Buy chicks in bulk** - Get chicks at UGX 3,000 each: Savings = UGX 250,000
4. **Better biosecurity** - Reduce medication costs to UGX 100,000: Savings = UGX 100,000

### Increase Revenue:

5. **Achieve better weights** - 2.3 kg average at 6 weeks through quality feed
6. **Sell at better prices** - Target festive season at UGX 9,000/kg
7. **Sell directly to consumers** - Cut out middlemen

### Improved Calculation (UGX):

| Item | Amount (UGX) |
|------|-------------|
| Day-old chicks (500 @ UGX 3,000) | 1,500,000 |
| Feed (2,500 kg @ UGX 2,000) | 5,000,000 |
| Housing depreciation | 90,000 |
| Labour | 250,000 |
| Vaccination and medication | 100,000 |
| Bedding, utilities, transport | 300,000 |
| Miscellaneous | 100,000 |
| **TOTAL COSTS** | **7,340,000** |

| Item | Amount (UGX) |
|------|-------------|
| 475 birds at 2.3 kg @ UGX 9,000/kg | 9,832,500 |
| Manure sales | 50,000 |
| **TOTAL REVENUE** | **9,882,500** |

**Profit = UGX 9,882,500 - UGX 7,340,000 = UGX 2,542,500**

**Profit margin = 25.7%**

This is a realistic and achievable profit for a well-managed broiler operation in Uganda.

## Break-Even Analysis

Break-even is the point where your revenue equals your costs. To calculate your break-even:

**Break-even price per kg = Total Costs / Total kg produced**

In our improved scenario:
- Break-even = UGX 7,340,000 / (475 birds x 2.3 kg) = UGX 7,340,000 / 1,092.5 kg = UGX 6,719 per kg

This means any selling price above UGX 6,719 per kg is profit. If market prices drop below this, you will make a loss.

**Break-even weight per bird = Total Costs / (Number of birds x Price per kg)**

At UGX 8,000/kg:
- Break-even weight = UGX 7,340,000 / (500 x UGX 8,000) = 1.835 kg per bird

Your birds must average at least 1.84 kg to break even at UGX 8,000/kg.

## Tips to Increase Your Broiler Profit

### 1. Reduce Feed Costs

- Formulate your own feed using locally available ingredients
- Buy feed ingredients in bulk during harvest season when prices are low
- Store maize and other ingredients properly to avoid mould and waste
- Minimise feed wastage by using proper feeders and adjusting feeder height as birds grow

### 2. Improve Feed Conversion Ratio (FCR)

- FCR measures how much feed is needed to produce 1 kg of meat
- Target FCR of 1.7-1.9 (industry standard for broilers)
- Good FCR is achieved through quality feed, clean water, proper temperature, and good ventilation

### 3. Reduce Mortality

- Maintain strict biosecurity - limit visitors, disinfect boots, control rodents
- Follow vaccination schedules strictly
- Keep brooding temperature correct (33-35 degrees Celsius in week 1, reducing gradually)
- Ensure clean, unlimited water supply at all times
- Cull sick birds early to prevent disease spread

### 4. Sell at the Right Time and Place

- Sell during festive seasons (December, Easter, Eid) when prices peak
- Build relationships with restaurants, hotels, and supermarkets for direct sales
- Join farmer cooperatives to negotiate better prices with processors
- Consider value addition - processing and packaging increases profit margins

### 5. Raise More Birds Per Batch

- Fixed costs (housing, equipment, your time) are spread over more birds
- The profit per bird increases as scale increases, up to a manageable limit
- Most profitable small-scale operations in Uganda run 1,000-3,000 birds per batch

### 6. Keep Detailed Records

- Track every shilling spent and earned
- Compare batch performance over time
- Identify which costs are increasing and address them
- Records also help you access loans and partnerships

### 7. Manage Your Cash Flow

- Broiler farming requires upfront investment before you see returns
- Plan your batches so that revenue from one batch funds the next
- Maintain an emergency fund for unexpected costs
- Consider staggering batches (starting a new batch every 2-3 weeks) for continuous income

## Common Profit Killers to Avoid

- **High mortality** (above 10%) - usually due to poor brooding or disease
- **Poor feed quality** - cheap feed that gives poor weight gain costs more in the long run
- **Selling at low prices** - rushing to sell when the market is flooded
- **Feed wastage** - poor feeder management can waste 10-20% of your feed
- **Disease outbreaks** - one outbreak can wipe out an entire batch's profit
- **Poor record keeping** - you cannot improve what you do not measure

## Conclusion

Calculating broiler profit is not complicated once you account for every cost honestly. The key to success in Uganda's broiler market is controlling your feed costs, minimising mortality, achieving good weights, and selling at the best possible price. Use the step-by-step framework in this guide for every batch you raise. Track your numbers, compare batch to batch, and keep improving your management practices.

Broiler farming can be very profitable when done right. A 25-30% profit margin is achievable with good management. Start with a realistic budget, follow this guide, and grow your poultry business one profitable batch at a time.

*Ready to raise your next batch? Start by creating a detailed budget using the template in this guide, and watch your profits grow.*
`},{id:12,title:`Best Chicken Breeds for Egg Production in East Africa`,category:`Breeds`,readTime:`8 min read`,summary:`Choosing the right chicken breed is one of the most important decisions you will make as a poultry farmer. In East Africa, where conditions can be challenging - hot days, seasonal rains, limited feed resources, and disease pressure - not every breed performs equally well. This guide explores the best chicken breeds for egg production in Uganda, Kenya, Tanzania, and the surrounding region, comparing their laying ability, hardiness, feed efficiency, and overall suitability for local conditions.`,content:`# Best Chicken Breeds for Egg Production in East Africa

Choosing the right chicken breed is one of the most important decisions you will make as a poultry farmer. In East Africa, where conditions can be challenging - hot days, seasonal rains, limited feed resources, and disease pressure - not every breed performs equally well. This guide explores the best chicken breeds for egg production in Uganda, Kenya, Tanzania, and the surrounding region, comparing their laying ability, hardiness, feed efficiency, and overall suitability for local conditions.

## What Makes a Good Egg-Laying Breed for East Africa?

Before we look at specific breeds, it helps to understand what traits matter most in our climate:

- **Consistent egg production** - A good layer should give 200+ eggs per year minimum
- **Heat tolerance** - Our tropical climate demands birds that do well in warm conditions
- **Disease resistance** - Birds that can withstand common local diseases are more profitable
- **Feed efficiency** - Converting less feed into more eggs keeps costs down
- **Dual-purpose potential** - Breeds that also produce good meat add value
- **Ability to scavenge** - For free-range systems, birds that forage well reduce feed costs
- **Mothering ability** - Natural brooding is an advantage for farmers who want to hatch their own chicks

## Top Chicken Breeds for Egg Production in East Africa

### 1. Kuroiler

The Kuroiler was developed in India specifically for smallholder farmers and has become extremely popular across East Africa, especially in Uganda.

**Origin and Background**
The Kuroiler was created by crossing coloured broiler males with Rhode Island Red females. It was designed to thrive on low-input systems typical of rural farming in developing countries.

**Egg Production**
- 150-200 eggs per year under scavenging conditions
- 200-250 eggs per year under semi-intensive management
- Egg weight: 55-60 grams (medium to large brown eggs)

**Key Advantages**
- Excellent scavenger - finds much of its own food when free-ranging
- Grows fast and produces a good amount of meat as well
- Tolerates heat very well
- Strong immune system, resistant to common diseases
- Adaptable to various management systems
- The hen can sit on and hatch her own eggs

**Feed Efficiency**
The Kuroiler is among the most feed-efficient dual-purpose breeds. Under scavenging conditions, it needs very little supplementary feed. In confinement, it converts feed to eggs efficiently, though not quite at the level of commercial hybrids.

**Best For:** Rural farmers, free-range systems, and those who want both eggs and meat from their flock.

**Approximate Cost in Uganda:** Day-old chicks cost UGX 3,000-4,000 each.

---

### 2. Sasso

Sasso is a French breed that was specifically developed for traditional, slow-growing free-range production. It has gained massive popularity in East Africa over the past decade.

**Origin and Background**
Sasso was developed in France for outdoor, free-range farming. It is known for its excellent meat quality and reasonable egg production.

**Egg Production**
- 180-220 eggs per year under good management
- 150-180 eggs per year under scavenging/free-range conditions
- Egg weight: 55-58 grams (brown eggs)

**Key Advantages**
- Very hardy and disease resistant
- Excellent forager - thrives on kitchen scraps and free-range conditions
- Produces premium quality meat with excellent taste
- Good heat tolerance
- Strong disease resistance, especially to common field diseases
- Active and alert birds with good survival instincts

**Feed Efficiency**
Sasso birds are efficient converters of feed to body weight and eggs. Their foraging ability means they need less supplementary feed than pure commercial layers when allowed to range freely.

**Best For:** Free-range and semi-intensive systems, farmers targeting premium meat markets, and those seeking a balance between eggs and meat.

**Approximate Cost in Uganda:** Day-old chicks cost UGX 3,500-5,000 each.

---

### 3. Rainbow Rooster

The Rainbow Rooster has become one of the most popular dual-purpose breeds in East Africa since its introduction. It is known for its colourful plumage and excellent performance.

**Origin and Background**
Developed through selective breeding, the Rainbow Rooster was designed for small-scale farmers who need both eggs and meat from their birds.

**Egg Production**
- 200-250 eggs per year under good management
- 160-200 eggs per year under scavenging conditions
- Egg weight: 55-60 grams (tinted to brown eggs)

**Key Advantages**
- Fast growth rate for a dual-purpose breed
- Good egg production for a non-commercial hybrid
- Adaptable to both confinement and free-range systems
- Attractive appearance - the multi-coloured feathers appeal to farmers
- Good mothering instincts
- Strong and active birds

**Feed Efficiency**
Rainbow Roosters are efficient feed converters, especially in the first 16 weeks. Their ability to utilise fibrous feeds makes them economical to raise on locally available feedstuffs.

**Best For:** Small to medium-scale farmers, those who want attractive birds for both home consumption and sale, and farmers seeking a reliable dual-purpose option.

**Approximate Cost in Uganda:** Day-old chicks cost UGX 3,500-4,500 each.

---

### 4. Improved Kienyeji (Kenya) / Improved Indigenous (Uganda)

These are improved versions of the local indigenous chicken, selectively bred to lay more eggs while maintaining the hardiness of local birds.

**Origin and Background**
In Kenya, the Kenya Agricultural and Livestock Research Organisation (KALRO) developed improved indigenous breeds. In Uganda, similar work has been done at NAGRC&DB in Entebbe and various research stations. These birds retain the characteristics of local chickens but with significantly improved productivity.

**Egg Production**
- 180-220 eggs per year (improved strains)
- 120-150 eggs per year (local unimproved indigenous)
- Egg weight: 45-55 grams (smaller, usually tinted or light brown)

**Key Advantages**
- Extremely hardy - can survive with minimal inputs
- Excellent disease resistance - can tolerate conditions that kill exotic breeds
- Superior heat tolerance
- Excellent foragers - need very little supplementary feed when free-ranging
- Natural brooding ability - hens hatch and raise their own chicks
- Meat has excellent flavour and texture, commanding premium prices
- Low investment required

**Feed Efficiency**
No breed is more feed-efficient under low-input conditions. These birds can survive and produce on very little. However, under intensive systems with high-quality feed, they do not match the efficiency of commercial hybrids.

**Best For:** Very small-scale farmers, rural households, farmers with limited capital, free-range systems, and those seeking premium-priced indigenous chicken products.

**Approximate Cost in Uganda:** Day-old chicks cost UGX 2,500-4,000 each. Fertilised eggs for hatching cost UGX 1,000-2,000 each.

---

### 5. Isa Brown (Commercial Hybrid Layer)

For farmers focused purely on maximum egg production, commercial hybrids like the Isa Brown remain the top choice.

**Origin and Background**
Isa Browns are a commercial hybrid developed in France through selective breeding of Rhode Island Reds and other high-producing breeds.

**Egg Production**
- 300-320 eggs in the first laying year (72-week cycle)
- Consistent large brown eggs
- Egg weight: 62-65 grams (large)

**Key Advantages**
- Highest egg production of any breed available in East Africa
- Very efficient feed-to-egg conversion
- Start laying at 18-19 weeks of age
- Produces large, uniform brown eggs that sell well
- Predictable performance if managed correctly

**Challenges in East Africa**
- Requires high-quality, balanced feed at all times
- Needs good housing with temperature control
- More susceptible to heat stress than dual-purpose breeds
- Requires strict vaccination and biosecurity
- Cannot survive on scavenging alone
- Does not go broody (will not sit on eggs)
- Higher initial investment

**Feed Efficiency**
Isa Browns are the most feed-efficient layers available, converting approximately 1.8-2.0 kg of feed into 1 kg of eggs. However, this efficiency is only achieved with high-quality commercial feed.

**Best For:** Commercial layer farms with adequate capital, reliable feed supply, and good housing. Best suited for peri-urban areas near feed suppliers and markets.

**Approximate Cost in Uganda:** Day-old chicks cost UGX 4,500-6,000 each. Point-of-lay pullets (18 weeks) cost UGX 20,000-28,000 each.

---

### 6. Lohmann Brown

Another commercial hybrid that performs well in East Africa, especially on medium to large commercial farms.

**Origin and Background**
Developed in Germany, the Lohmann Brown is similar to the Isa Brown and is widely used globally.

**Egg Production**
- 300+ eggs in the first laying cycle
- Large brown eggs
- Excellent shell quality

**Key Advantages**
- High egg production rate
- Good feed conversion efficiency
- Strong shell quality reduces breakages
- Calm temperament, easy to manage in cages or deep litter
- Good adaptability to different housing systems

**Best For:** Commercial egg producers who need maximum production and have the infrastructure to support intensive systems.

**Approximate Cost in Uganda:** Similar to Isa Brown - UGX 4,500-6,000 for day-old chicks.

---

## Comparison Table: Egg Production in East Africa

| Breed | Eggs/Year | Egg Size | Scavenging Ability | Heat Tolerance | Feed Efficiency | Dual-Purpose |
|-------|-----------|----------|-------------------|----------------|-----------------|--------------|
| Kuroiler | 150-250 | Medium-Large | Excellent | Excellent | Good | Yes |
| Sasso | 150-220 | Medium | Excellent | Excellent | Good | Yes |
| Rainbow Rooster | 160-250 | Medium-Large | Good | Very Good | Good | Yes |
| Improved Kienyeji | 120-220 | Small-Medium | Excellent | Excellent | Moderate | Yes |
| Isa Brown | 300-320 | Large | Poor | Moderate | Excellent | No |
| Lohmann Brown | 300+ | Large | Poor | Moderate | Excellent | No |

## Hardiness in the Local East African Climate

The climate across East Africa varies from hot and dry in the north to wet and tropical around Lake Victoria. Here is how each breed copes:

**Most Heat-Tolerant:**
1. Improved Kienyeji/Indigenous - evolved in this climate
2. Kuroiler - specifically bred for tropical conditions
3. Sasso - excellent heat tolerance for a developed breed

**Moderate Heat Tolerance:**
4. Rainbow Rooster - handles heat well but needs shade and water
5. Isa Brown and Lohmann Brown - need well-ventilated housing, suffer in extreme heat without cooling

For farmers in hot districts like Lira, Gulu, Soroti, or Karamoja, choosing heat-tolerant breeds is essential. In cooler highland areas like Kabale, Kisoro, or parts of Mt. Elgon, commercial hybrids may perform slightly better.

## Feed Efficiency: Getting the Most Eggs Per Kilogram of Feed

Feed is your biggest cost. Here is what to expect:

**Most Feed-Efficient (per egg produced):**
1. Isa Brown / Lohmann Brown - 110-120 grams of feed per egg
2. Kuroiler - 130-150 grams of feed per egg
3. Rainbow Rooster - 130-150 grams of feed per egg
4. Sasso - 140-160 grams of feed per egg
5. Improved Kienyeji - 150-200 grams of feed per egg

However, remember that if you are using a free-range system, the improved indigenous breeds and Kuroiler find much of their own food, so your actual feed cost per egg can be lower despite the poorer technical feed efficiency.

## Which Breed Should You Choose?

The answer depends on your situation:

**Choose Improved Kienyeji, Kuroiler, or Sasso if:**
- You have limited capital
- You want to use a free-range or semi-intensive system
- You want both eggs and meat from your birds
- You want birds that can hatch their own chicks
- Feed costs are a major concern
- You live in a remote area with limited veterinary support

**Choose Isa Brown or Lohmann Brown if:**
- You want maximum egg production as a business
- You can afford quality feed consistently
- You have good housing with ventilation
- You are near reliable veterinary services
- You have a ready market for large brown eggs
- You are prepared for higher initial investment

**Choose Rainbow Rooster if:**
- You want a middle ground between indigenous and commercial
- You have moderate resources
- You want attractive, active birds
- You need reasonable egg production with good meat quality

## Tips for Maximising Egg Production Whatever Breed You Choose

1. **Provide clean water at all times** - Even mild dehydration reduces egg production
2. **Ensure adequate lighting** - Layers need 14-16 hours of light per day; supplement with bulbs if needed
3. **Feed quality, balanced rations** - Do not compromise on feed quality for laying birds
4. **Maintain biosecurity** - Vaccinate, disinfect, and control visitors
5. **Collect eggs frequently** - At least twice daily to keep eggs clean and reduce breakage
6. **Keep stress low** - Handle birds gently, avoid sudden changes, protect from predators
7. **Cull poor performers** - Remove birds that stop laying or lay soft-shelled eggs
8. **Provide calcium supplements** - Crushed oyster shells or crushed eggshells for strong shells
9. **Deworm regularly** - Every 3-4 months, especially for free-range birds
10. **Keep records** - Track which birds are producing so you can select the best for breeding

## Conclusion

East Africa offers opportunities for every type of poultry farmer, from the rural household keeping 20 improved indigenous chickens to the commercial producer managing 10,000 Isa Browns. The key is matching your breed choice to your resources, management system, and market.

For most small to medium-scale farmers in Uganda, the Kuroiler, Sasso, or Rainbow Rooster offer the best balance of egg production, hardiness, and profitability. If you have the resources for intensive production and a reliable market, the Isa Brown will give you the highest number of eggs.

Remember: the best breed on paper is only the best breed for *you* if it matches your farming system. Start with what you can manage well, keep learning, and expand as your experience grows.

*Choose your breed wisely, care for your birds well, and your poultry farm will reward you with a steady supply of fresh eggs and income for years to come.*
`},{id:13,title:`Poultry Feed Formulation: Making Your Own Feed at Home`,category:`Feeding`,readTime:`7 min read`,summary:`Feed is the single largest expense in poultry farming, often consuming 60–70% of your total production costs. For many Ugandan farmers, relying entirely on commercial feeds from manufacturers like Bulemezi, UgaChick, or Biyinzika can squeeze profit margins — especially when global prices for soy and maize fluctuate. The good news? You can formulate high-quality poultry feed at home using locally available ingredients, save significantly on costs, and maintain full control over what your birds consume.`,content:`# Poultry Feed Formulation: Making Your Own Feed at Home

Feed is the single largest expense in poultry farming, often consuming 60–70% of your total production costs. For many Ugandan farmers, relying entirely on commercial feeds from manufacturers like Bulemezi, UgaChick, or Biyinzika can squeeze profit margins — especially when global prices for soy and maize fluctuate. The good news? You can formulate high-quality poultry feed at home using locally available ingredients, save significantly on costs, and maintain full control over what your birds consume.

This guide will walk you through the essential ingredients, simple recipes for broilers and layers, cost comparisons, equipment requirements, and quality control tips to help you produce feed that matches — or even exceeds — the quality of commercial alternatives.

---

## Why Make Your Own Feed?

Before diving into recipes, it is worth understanding why home feed formulation is gaining popularity across Uganda:

- **Cost savings:** Farmers who mix their own feed regularly report saving UGX 200–400 per kilogram compared to buying commercial feed. On a flock of 500 birds consuming roughly 150kg of feed per week, that adds up to UGX 30,000–60,000 saved weekly.
- **Quality control:** You know exactly what ingredients are going into the feed. There are no hidden fillers, no questionable binders, and no expired additives.
- **Customization:** You can adjust protein levels, add supplements, or incorporate alternative ingredients based on what is available in your district — whether you are farming in Mukono, Mbarara, or Gulu.
- **Reduced dependency:** When commercial feed deliveries are delayed or prices spike unexpectedly, your operation does not have to come to a standstill.

---

## Key Ingredients for Poultry Feed in Uganda

Understanding your ingredients is the foundation of good feed formulation. Below are the most commonly used components available across Uganda, along with their primary nutritional contributions.

### Energy Sources

- **Maize:** The backbone of most poultry feeds in Uganda. It provides energy and is widely available. Whole maize should be ground before mixing. Expect to pay roughly UGX 1,200–1,500 per kilogram depending on the harvest season.
- **Maize bran:** A by-product of maize milling that provides fiber and some energy. It is cheaper than whole maize (UGX 600–800/kg) and works well in layer diets.
- **Sorghum/millet:** Good alternatives to maize, especially in drier regions like Karamoja or Teso. These grains are drought-resistant and can reduce your reliance on maize during shortages.
- **Cassava chips:** Dried and chipped cassava can partially replace maize. Limit to 10–15% of the ration to avoid digestive issues.

### Protein Sources

- **Soybean meal:** The gold standard for plant-based protein. Full-fat soybeans should be roasted or heat-treated to destroy anti-nutritional factors. Soybean meal typically contains 44–48% crude protein.
- **Fish meal:** Excellent animal protein source with a protein content of 55–65%. Lake Victoria fish meal is readily available in Kampala, Jinja, and Entebbe markets. However, it is expensive — UGX 4,000–6,000/kg — so use it sparingly.
- **Cottonseed cake:** Widely available in Uganda’s cotton-growing regions (Lira, Oyam, Kasese). Contains 30–40% protein but should be limited to 5–10% of the ration due to gossypol, a compound that can be toxic in large amounts.
- **Sunflower seed cake:** Another locally available protein source, especially popular in northern Uganda. Contains 25–30% protein and works well in layer feeds.
- **Silverfish (mukene):** A popular and affordable protein booster, especially for small-scale farmers. Dried mukene can be ground and added at 5–10%.

### Minerals and Vitamins

- **Limestone/calcium carbonate:** Essential for layer diets to support strong eggshells. Crushed limestone or oyster shells are ideal.
- **Dicalcium phosphate:** Provides both phosphorus and calcium. Critical for bone development in broilers.
- **Premixes:** Commercial vitamin-mineral premixes ensure your birds receive all micronutrients. A 1kg premix is typically sufficient for 100kg of feed.
- **Salt:** Needed in very small amounts (0.25–0.5% of the ration) to support metabolism.

### Additives

- **Methionine and lysine:** Essential amino acids often added to balance the protein profile.
- **Toxin binder:** Highly recommended if you are using feeds prone to aflatoxin contamination, such as maize and cottonseed cake.
- **Coccidiostat:** For broilers especially, this helps prevent coccidiosis during the first few weeks.

---

## Simple Feed Recipes You Can Use Today

### Broiler Starter Feed (Weeks 1–3)

This high-protein diet supports rapid early growth.

| Ingredient | Quantity (per 100kg) |
|---|---|
| Maize (ground) | 55kg |
| Soybean meal (roasted) | 30kg |
| Fish meal | 8kg |
| Maize bran | 3kg |
| Limestone | 1kg |
| Dicalcium phosphate | 1.5kg |
| Salt | 0.25kg |
| Vitamin-mineral premix | 0.5kg |
| Lysine + Methionine | 0.5kg |
| Toxin binder | 0.25kg |

**Crude protein target:** 22–24%

### Broiler Finisher Feed (Weeks 4–7)

Lower protein, higher energy to support weight gain before sale.

| Ingredient | Quantity (per 100kg) |
|---|---|
| Maize (ground) | 62kg |
| Soybean meal (roasted) | 22kg |
| Fish meal | 6kg |
| Maize bran | 6kg |
| Limestone | 0.8kg |
| Dicalcium phosphate | 1.2kg |
| Salt | 0.25kg |
| Vitamin-mineral premix | 0.5kg |
| Lysine + Methionine | 0.25kg |
| Toxin binder | 0.25kg |

**Crude protein target:** 18–20%

### Layer Grower Feed (Weeks 9–18)

Moderate protein for healthy development before laying begins.

| Ingredient | Quantity (per 100kg) |
|---|---|
| Maize (ground) | 58kg |
| Soybean meal (roasted) | 18kg |
| Sunflower/cottonseed cake | 10kg |
| Maize bran | 10kg |
| Limestone | 1.2kg |
| Dicalcium phosphate | 1.5kg |
| Salt | 0.3kg |
| Vitamin-mineral premix | 0.5kg |
| Lysine + Methionine | 0.25kg |
| Toxin binder | 0.25kg |

**Crude protein target:** 15–17%

### Layer Feed (From Week 19 Onwards)

High calcium for strong eggshells and sustained production.

| Ingredient | Quantity (per 100kg) |
|---|---|
| Maize (ground) | 52kg |
| Soybean meal (roasted) | 20kg |
| Sunflower/cottonseed cake | 8kg |
| Maize bran | 10kg |
| Limestone/crushed shells | 4kg |
| Dicalcium phosphate | 1.2kg |
| Salt | 0.3kg |
| Vitamin-mineral premix | 0.5kg |
| Lysine + Methionine | 0.25kg |
| Toxin binder | 0.25kg |

**Crude protein target:** 16–18% | **Calcium target:** 3.5–4%

---

## Equipment You Need

You do not need industrial machinery to start. Here is what you will need, from basic to more advanced setups:

### Basic Setup (Small Scale, Under 500 Birds)

1. **Weighing scale:** A 50kg or 100kg digital or mechanical scale for accurate measurements. Inaccurate weighing is one of the biggest causes of poor feed quality.
2. **Maize grinder/hammer mill:** Many trading centers across Uganda have hammer mills where you can grind your maize for UGX 100–200 per kilogram. Alternatively, invest in a small grinder (UGX 800,000–1,500,000).
3. **Mixing basin or tarpaulin:** For small batches, a large plastic basin or clean tarpaulin on the ground works. Mix thoroughly — uneven mixing leads to some birds getting too much of one nutrient and too little of another.
4. **Plastic containers:** For storing ingredients separately to prevent contamination and spoilage.
5. **Long-handled scoop or shovel:** For mixing larger batches.

### Intermediate Setup (500–2,000 Birds)

- **Mechanical mixer:** A horizontal ribbon mixer or drum mixer saves time and ensures uniform mixing. Second-hand units cost UGX 2,000,000–5,000,000.
- **Sifter:** Removes foreign objects and large particles from ground grains.
- **Storage silos or large drums:** Keeps bulk ingredients dry and pest-free.

### Large-Scale Setup (2,000+ Birds)

- **Industrial hammer mill:** For processing several hundred kilograms per hour.
- **Pellet mill:** Converts mash into pellets, which reduces feed wastage and improves digestion. Pellet mills start at around UGX 10,000,000.
- **Automated bagging scale:** For consistent packaging.

---

## Cost Comparison: Home-Made vs. Commercial Feed

Let us compare the costs honestly. Prices will vary by district and season, but this table gives a realistic picture:

| Feed Type | Commercial Price/kg | Home-Made Cost/kg | Savings per kg |
|---|---|---|---|
| Broiler starter | UGX 2,000–2,400 | UGX 1,600–1,900 | UGX 200–500 |
| Broiler finisher | UGX 1,900–2,200 | UGX 1,500–1,800 | UGX 200–400 |
| Layer feed | UGX 1,800–2,100 | UGX 1,400–1,700 | UGX 200–400 |

For a farmer raising 500 broilers that consume approximately 3.5kg of feed each over their lifecycle, total feed consumption is about 1,750kg. At a saving of UGX 300 per kilogram, that is **UGX 525,000 saved per batch** — a significant amount that can be reinvested into more chicks, better housing, or additional equipment.

---

## Quality Control: Ensuring Your Feed Is Good

Even with the best recipe, poor quality control can lead to disappointing results. Follow these steps to maintain feed quality:

### 1. Source Ingredients Carefully

- Buy maize soon after harvest when quality is highest and aflatoxin risk is lowest.
- Avoid moldy, discolored, or foul-smelling grains.
- Ask your supplier for the moisture content — it should be below 13% for proper storage.
- Store fish meal and soybean meal in cool, dry places. These ingredients spoil quickly.

### 2. Weigh Everything Accurately

A common mistake is eyeballing measurements. A 1kg error in a 100kg batch may seem small, but it can significantly alter the nutrient profile. Use a reliable scale every single time.

### 3. Mix Thoroughly

Poor mixing means some birds eat mostly maize while others get mostly soybean meal. Mix for at least 10–15 minutes for small batches. The final feed should look completely uniform with no visible clumps or color streaks.

### 4. Test Protein Content

If possible, send samples to a laboratory such as the National Animal Genetic Resources Centre and Data Bank (NAGRC&DB) in Entebbe or Makerere University’s College of Agricultural and Environmental Sciences for proximate analysis. The cost is typically UGX 50,000–100,000 per sample — a worthwhile investment to verify your formulation.

For a quick on-farm check, you can use a handheld protein tester, though these are less accurate than lab testing.

### 5. Store Feed Properly

- Keep finished feed in sealed containers or bags off the ground.
- Store in a cool, dry, well-ventilated room.
- Use feed within 2–4 weeks of production to prevent nutrient degradation.
- Add a mold inhibitor or toxin binder during the rainy season when humidity is high.

### 6. Monitor Bird Performance

Your birds are the best indicators of feed quality. Watch for:

- **Consistent weight gain** (broilers should gain 40–50g per day in the first 4 weeks)
- **Good feathering** and bright eyes
- **Steady feed intake** without sudden drops
- **Normal droppings** — not too watery, not overly dry
- **Egg production** in layers reaching 80–90% peak production by week 28

If you notice poor growth, reduced egg production, or unusual droppings, re-evaluate your feed formulation and ingredient quality immediately.

---

## Practical Tips for Ugandan Farmers

1. **Buy in bulk during harvest season:** Maize is cheapest between July and September in most of Uganda. Purchase enough to last several months if you have proper storage.
2. **Join a cooperative:** Buying ingredients as a group reduces costs and gives you bargaining power with suppliers.
3. **Grow your own maize and soybeans:** If you have land, dedicating even one acre to feed crops can dramatically reduce your costs.
4. **Use local by-products creatively:** Brewers’ grains from Nile Breweries or Uganda Breweries, wheat bran from millers, and rice bran from Mbale rice mills are affordable and nutritious additions.
5. **Keep records:** Track your ingredient costs, batch sizes, and bird performance. Over time, you will identify what works best for your specific conditions.

---

## Conclusion

Making your own poultry feed is not only possible — it is profitable, practical, and empowering. With the right ingredients, accurate recipes, basic equipment, and strict quality control, you can produce feed that supports healthy, productive birds while keeping more money in your pocket.

Start small. Mix one 50kg batch using the broiler starter recipe above. Observe your birds closely for two weeks. Adjust as needed. As your confidence and scale grow, your savings will grow too.

Ready to take control of your poultry farming costs? Visit **ShambaNi Marketplace** to find reliable suppliers of quality feed ingredients — from soybean meal and fish meal to vitamin-mineral premixes — at competitive prices. Your journey to self-sufficient poultry feeding starts today.
`},{id:14,title:`Common Mistakes New Poultry Farmers Make (And How to Avoid Them)`,category:`Getting Started`,readTime:`7 min read`,summary:`Poultry farming in Uganda offers tremendous opportunities — growing urban demand in Kampala, Entebbe, and Jinja, rising interest in protein-rich diets, and relatively low barriers to entry. Yet every year, hundreds of new farmers abandon the venture after losing their first or second batch of birds. The reasons are rarely mysterious.`,content:`# Common Mistakes New Poultry Farmers Make (And How to Avoid Them)

Poultry farming in Uganda offers tremendous opportunities — growing urban demand in Kampala, Entebbe, and Jinja, rising interest in protein-rich diets, and relatively low barriers to entry. Yet every year, hundreds of new farmers abandon the venture after losing their first or second batch of birds. The reasons are rarely mysterious. Most failures stem from a handful of avoidable mistakes repeated again and again by beginners.

Having spoken with experienced farmers in Wakiso, Mukono, Mbarara, and beyond, and having observed the patterns that separate successful operations from struggling ones, this article outlines the most common mistakes new poultry farmers make — and exactly how to avoid each one. If you are starting out, consider this your survival guide.

---

## Mistake 1: Overcrowding the Chicken House

### The Problem

New farmers often try to maximize limited space by cramming too many birds into a small house. A common error is fitting 200 broilers into a structure meant for 100. Overcrowding causes stress, aggression, poor air quality, and rapid disease spread. Birds peck each other, growth rates drop, and mortality shoots up.

### The Solution

Follow proper stocking density guidelines:

- **Broilers:** Allow at least 10–12 birds per square meter for deep litter systems, or 15–17 birds per square meter if you use raised slatted floors.
- **Layers:** Provide 3–4 birds per square meter in deep litter systems, or one bird per 450 square centimeters of cage floor space.
- **Day-old chicks:** Start with 40–50 chicks per square meter in the brooder, then gradually expand the space as they grow.

If your current house is too small, either reduce your flock size or build additional space before bringing in more chicks. It is far better to raise 100 healthy birds than 200 sickly ones.

---

## Mistake 2: Poor Ventilation and Housing Design

### The Problem

Many beginners build chicken houses with little thought for airflow. Tightly sealed structures trap ammonia from droppings, accumulate heat, and create perfect conditions for respiratory diseases like Newcastle disease and infectious bronchitis. During the dry season, heat stress can kill birds within hours.

### The Solution

Design your poultry house with ventilation as a top priority:

- Position the house east-west to minimize direct sunlight.
- Install wire mesh windows on opposite walls for cross-ventilation.
- Use curtains that can be raised or lowered depending on the weather.
- Ensure the roof has an overhang to protect birds from rain while still allowing airflow.
- In hot areas like Arua or Mbale, consider a lower roof with reflective insulation material.
- The ideal temperature for adult layers and broilers is 18–24°C. For chicks under two weeks, maintain 32–35°C using brooding lamps or charcoal stoves.

Walk into your chicken house and breathe. If the air burns your eyes or smells strongly of ammonia, your birds are suffering — and their performance will reflect it.

---

## Mistake 3: Using the Wrong Feed (or the Wrong Amount)

### The Problem

Feed errors come in many forms: giving layer feed to broilers, using grower feed for chicks, switching feeds abruptly, or simply not providing enough. New farmers sometimes try to cut costs by buying cheap, unbranded feed of unknown quality. Others allow feeders to run empty for hours, forgetting that even a few hours without feed stresses birds and reduces weight gain.

### The Solution

- Match the feed to the bird and the stage. Chicks need starter feed (20–24% protein). Growing birds need grower feed (16–18% protein). Layers need layer mash (16–18% protein with 3.5–4% calcium).
- Buy feed from reputable manufacturers or formulate your own using proven recipes.
- Ensure feed is available at all times — birds should never run out.
- When switching feed types, transition gradually over 5–7 days. Mix 25% new feed with 75% old for two days, then 50/50, then 75/25.
- Keep feeders clean and prevent droppings from contaminating the feed.

---

## Mistake 4: Skipping or Mishandling Vaccinations

### The Problem

Vaccination schedules intimidate new farmers. Some skip vaccines altogether to save money. Others administer them incorrectly — using expired vaccines, wrong doses, or administering at the wrong age. The result? Devastating disease outbreaks that wipe out entire flocks. Newcastle disease, Gumboro (infectious bursal disease), and fowl pox are still major killers in Uganda largely because of vaccination failures.

### The Solution

Follow a strict vaccination schedule and document every dose:

| Age | Vaccine | Method |
|---|---|---|
| Day 1 | Marek’s disease | Given at hatchery (ensure chicks arrive vaccinated) |
| Day 3–5 | Newcastle disease (NDV) – Hitchner B1 | Eye drop or drinking water |
| Day 7–10 | Gumboro (IBD) – Intermediate strain | Drinking water |
| Day 14–18 | Gumboro – Intermediate plus | Drinking water |
| Day 21–24 | Newcastle – LaSota | Eye drop or drinking water |
| Day 28–30 | Fowl pox | Wing web stab |
| Week 6–8 | Newcastle – LaSota booster | Drinking water |
| Week 16–18 | Newcastle – Komarov or LaSota | Injection or drinking water |

**Critical tips:**
- Buy vaccines only from licensed suppliers and keep them refrigerated.
- Administer in cool weather, preferably early morning or evening.
- Do not use chlorinated water for vaccine administration — it kills the live virus. Use clean, cool water with skimmed milk added (1 teaspoon per liter) to neutralize chlorine.
- Starve birds of water for 1–2 hours before giving a water-based vaccine to ensure they drink it all quickly.
- Record every vaccination date, batch number, and method used.

---

## Mistake 5: Ignoring Biosecurity

### The Problem

New farmers often treat their poultry house like a community gathering place. Visitors walk in freely, neighboring farmers bring birds to compare sizes, and wild birds enter through open vents. These habits introduce diseases that no amount of medicine can fully control.

### The Solution

Implement basic biosecurity from day one:

- Restrict access to the poultry house. Only essential workers should enter.
- Provide footbaths at every entrance. Fill with a disinfectant solution and change it regularly — a footbath full of mud and feathers is useless.
- Quarantine new birds for at least two weeks before introducing them to the main flock.
- Keep wild birds and rodents out by sealing openings and storing feed in closed containers.
- Clean and disinfect the house thoroughly between batches. Allow a minimum 7–10 day resting period.
- Do not return empty feed sacks or egg crates to the farm without disinfecting them.

---

## Mistake 6: Poor Financial Planning

### The Problem

Many beginners calculate only the cost of chicks and feed, forgetting vaccines, equipment, labour, utilities, emergency medication, and feed for the weeks before any income arrives. They run out of money halfway through the cycle, resort to cheap feed, skip vaccines, and end up with dead birds and debt.

### The Solution

Create a complete budget before buying your first chick. Include:

- Cost of day-old chicks
- Feed for the entire production cycle
- Vaccines and medications
- Housing construction or rental
- Equipment (feeders, drinkers, brooders, lighting)
- Labour costs
- Utilities (water, electricity)
- Transport to market
- A contingency fund of at least 15–20% for emergencies

Track every shilling spent. If your calculations show you need UGX 5,000,000, do not start with UGX 3,000,000. Save or borrow the full amount first. Poultry farming rewards the well-prepared and punishes the undercapitalized.

---

## Mistake 7: Failing to Keep Records

### The Problem

"I will remember," says the new farmer. But six weeks later, they cannot recall which vaccine was given on which date, how much feed was consumed weekly, or which batch of birds had the best performance. Without records, you cannot identify problems, track progress, or make informed decisions.

### The Solution

Keep a simple farm diary or spreadsheet recording:

- Date of chick arrival, source, breed, and quantity
- Daily mortality (number and apparent cause)
- Weekly feed consumption
- Weekly body weights (weigh 10–20 birds and calculate the average)
- Vaccination dates, vaccine types, and batch numbers
- Medication given, dosage, and duration
- Temperature readings in the brooder and chicken house
- Egg production numbers (for layers) — daily, weekly, and cumulative
- Income and expenses

This data becomes invaluable when planning your next batch, seeking a loan, or consulting a veterinarian.

---

## Mistake 8: Poor Marketing and Timing

### The Problem

New farmers raise beautiful birds but have no buyers lined up. They sell in panic at low prices to the first broker who shows up, often making a loss. Others try to sell during holidays when the market is flooded and prices have crashed.

### The Solution

- Identify your buyers **before** you buy chicks. Talk to local restaurants, hotels, supermarkets, and individual customers.
- Build relationships with several buyers to avoid dependence on one.
- Time your production to match periods of high demand — festive seasons, school terms, and wedding seasons.
- Use WhatsApp, Facebook, and community groups to market your products early.
- Consider value addition: selling dressed chicken, packaged eggs, or even manure as fertilizer can increase your margins.
- List your products on **ShambaNi Marketplace** to reach buyers beyond your immediate area.

---

## Mistake 9: Trying to Do Everything Alone

### The Problem

Poultry farming involves many skills — animal health, nutrition, finance, marketing, construction. No one person excels at all of them. New farmers who refuse to seek advice waste months making avoidable errors.

### The Solution

- Join a poultry farmers’ association or cooperative in your district.
- Attend training sessions offered by NAGRC&DB, Operation Wealth Creation (OWC), or local NGOs.
- Hire or consult a veterinarian when disease strikes — early professional intervention saves money in the long run.
- Connect with experienced farmers on social media and farming forums.
- Read widely and stay updated on new practices and disease alerts.

---

## Conclusion

Every successful poultry farmer in Uganda today made mistakes along the way. The difference between those who thrive and those who quit is simple: the successful ones learn quickly, adapt, and avoid repeating the same errors. Overcrowding, poor ventilation, wrong feed, skipped vaccines, weak biosecurity, bad financial planning, missing records, poor marketing, and stubborn independence are the nine traps that catch most beginners.

Study them. Avoid them. And when you do make a mistake — because you will — treat it as tuition in the most practical school there is: experience.

Looking for quality chicks, feed, vaccines, and equipment from trusted suppliers? Visit **ShambaNi Marketplace** to connect with verified vendors and fellow farmers who can support your poultry journey from day one.
`},{id:15,title:`How to Market and Sell Poultry Products in Uganda`,category:`Business`,readTime:`7 min read`,summary:`Raising healthy chickens and producing quality eggs is only half the battle. The other half — and the part that separates thriving farms from struggling ones — is getting your products into the hands of paying customers at prices that deliver real profit. Too many Ugandan farmers invest months of effort and capital into excellent poultry production, only to sell at a loss because they never developed a marketing strategy.`,content:`# How to Market and Sell Poultry Products in Uganda

Raising healthy chickens and producing quality eggs is only half the battle. The other half — and the part that separates thriving farms from struggling ones — is getting your products into the hands of paying customers at prices that deliver real profit. Too many Ugandan farmers invest months of effort and capital into excellent poultry production, only to sell at a loss because they never developed a marketing strategy.

Uganda’s poultry market is expanding rapidly. Urban centers like Kampala, Wakiso, Mukono, and Jinja consume millions of eggs and chickens every month. Hotels, restaurants, schools, hospitals, and supermarkets need reliable suppliers. The demand is there. The question is whether you can position your farm to capture it.

This article gives you practical, actionable strategies to market and sell poultry products in Uganda — from pricing and branding to leveraging WhatsApp and digital platforms like ShambaNi Marketplace.

---

## Know Your Market Before You Produce

The first rule of poultry marketing is simple: understand who will buy your product before the birds are ready for sale. Many farmers raise 500 broilers and then start asking, "Where do I sell them?" By then, the birds are eating more feed daily than they are gaining in weight — and every day of delay is money lost.

Before placing an order for chicks, answer these questions:

- Who are my target customers — individual consumers, restaurants, hotels, schools, or retailers?
- Where are they located and how do they currently source poultry products?
- What quantities do they need and how regularly?
- What price are they willing to pay?
- What quality standards do they expect — live weight, dressed chicken, specific egg size, organic certification?

Visit potential buyers in person. Talk to restaurant owners in your town. Speak with the procurement manager at a nearby hotel. Ask questions. Take notes. This research costs nothing but time and can save you from costly missteps.

---

## Finding Buyers: Where to Look

### Direct to Consumers

Selling directly to end consumers typically yields the highest profit margins, though it requires more effort. Channels include:

- **Your farm gate:** Set up a small signboard on the main road indicating chickens and eggs are available. Many successful farmers in Gayaza, Seeta, and Kajjansi attract steady walk-in customers.
- **Word of mouth:** Satisfied customers tell their neighbors, relatives, and colleagues. One good customer can bring ten more.
- **Home delivery:** Offer delivery within a 5–10km radius for orders above a certain minimum. This convenience encourages repeat business.

### Restaurants and Hotels

Restaurants and hotels are excellent bulk buyers. A single restaurant can take 50–100 birds per month. To approach them:

- Visit during off-peak hours — mid-morning or mid-afternoon.
- Bring a sample of your product (a tray of large eggs, a dressed chicken) along with a simple price list.
- Offer a credit period of 7–14 days to build trust, but get a written agreement.
- Maintain consistent quality and supply reliability — missing a delivery without warning is the fastest way to lose a restaurant client.
- Ask for feedback and adjust your product accordingly.

### Schools, Hospitals, and Institutions

These institutions often procure through tenders or recurring supply contracts. Contact the procurement officer or bursar directly. Be prepared to:

- Provide a company profile and samples
- Quote competitive prices with volume discounts
- Submit a formal bid if a tender is announced
- Meet food safety and hygiene standards

### Supermarkets and Retail Shops

Supermarkets like Capital Shoppers, Quality Supermarket, and local franchise outlets stock eggs and frozen chicken. Getting shelf space requires:

- Proper packaging (branded trays, labeled crates)
- Consistent supply volumes
- Competitive pricing
- Product barcodes and basic labeling information

Start with one or two local supermarkets and build the relationship before approaching larger chains.

### Brokers and Middlemen

While brokers often offer the lowest prices, they provide quick cash sales and absorb the transport burden. Use them strategically — for example, when you need to clear stock quickly or when transport costs to distant markets are prohibitive. Never rely on brokers as your only sales channel.

---

## Pricing Strategies That Work

Setting the right price is a balancing act. Too high, and buyers go elsewhere. Too low, and you work hard for little or no profit.

### Know Your Cost of Production

Before setting a price, calculate your true cost per bird or per egg:

**Broiler example (500 birds):**
- Day-old chicks: UGX 4,000 x 500 = UGX 2,000,000
- Feed (3.5kg per bird at UGX 1,800/kg): UGX 3,150,000
- Vaccines and medication: UGX 300,000
- Labour and miscellaneous: UGX 500,000
- **Total cost:** UGX 5,950,000
- **Cost per bird:** UGX 11,900

To make a 25% profit margin, your minimum selling price must be at least **UGX 14,875 per bird**.

### Market-Based Pricing

Check what others are charging. Visit local markets, ask other farmers, and browse online platforms. Prices vary:

- **Live broilers:** UGX 12,000–18,000 depending on weight and location
- **Dressed broilers:** UGX 16,000–22,000
- **Tray of eggs (large):** UGX 12,000–15,000
- **Tray of medium eggs:** UGX 10,000–12,500

Price slightly below established competitors when entering a new market. Once you prove your quality and reliability, you can align with or even exceed market rates.

### Offer Volume Discounts

Encourage bulk purchases with tiered pricing. For example:

- 1–10 trays of eggs: UGX 13,000 per tray
- 11–50 trays: UGX 12,500 per tray
- 51+ trays: UGX 12,000 per tray

This increases your sales volume while still maintaining profitability.

---

## Selling Eggs: Strategies for Layer Farmers

Egg marketing requires a different approach from selling meat birds. Eggs are a daily product, meaning your buyers need consistent supply — not a one-time bulk sale.

### Grade Your Eggs

Sort your eggs by size and quality:

- **Large:** 60g and above — highest price
- **Medium:** 53–59g — standard market size
- **Small/pullet eggs:** Below 53g — sell at a discount or to bakeries

Separate cracked, dirty, and misshapen eggs. Never mix them with grade-one eggs — doing so damages your reputation.

### Use Proper Packaging

Invest in branded egg trays or crates with your farm name and contact information printed on them. Quality packaging:

- Protects eggs during transport
- Makes your product look professional
- Serves as free advertising every time a customer sees your tray in their kitchen
- Costs UGX 500–800 per tray but pays for itself in perceived value

### Build Recurring Revenue

The most profitable egg farmers do not sell trays one at a time — they sign up subscribers. Offer a weekly delivery service where customers receive a set number of trays every week. This gives you predictable income and builds customer loyalty.

### Sell to Bakeries and Processors

Bakeries, confectioneries, and food processors buy eggs in large quantities and are less concerned about shell appearance than restaurants and retailers. Approach them with competitive bulk pricing for your off-grade or excess stock.

---

## Selling Chickens: Strategies for Broiler Farmers

Broilers are a time-sensitive product. After 7–8 weeks, feed efficiency drops and every additional day reduces your profit. Your marketing must therefore be aggressive and planned in advance.

### Pre-Sell Before Maturity

Two to three weeks before your broilers reach target weight, start actively marketing. Post photos, share weights, and announce your expected sale date. Create urgency — "50 healthy broilers available next Friday — book yours now!"

### Offer Dressing Services

Many customers — especially working professionals in urban areas — prefer dressed chicken but lack the time or facilities to process live birds. Partner with a licensed slaughterhouse or learn proper slaughtering and packaging techniques. Dressed chicken commands 30–50% higher prices than live birds.

### Sell in Mixed Lots

Offer flexible purchasing options:

- Whole birds (premium price)
- Half birds or quarter cuts
- Mixed lots (2 large, 3 medium)

The more options you provide, the broader your customer base.

### Target Event-Based Buyers

Weekends, public holidays, Eid, Christmas, and wedding seasons see a surge in chicken demand. Plan your production cycles so your birds mature just before these peak periods. Farmers who time this well can charge premium prices.

---

## Using WhatsApp and Social Media to Sell

Digital marketing is no longer optional — it is essential. In Uganda, WhatsApp is the most powerful sales tool available to small-scale farmers. Facebook and Instagram also offer excellent reach.

### WhatsApp Business

- Create a dedicated WhatsApp Business account for your farm.
- Save customer contacts and organize them by category (restaurants, individuals, retailers).
- Use the catalog feature to display your products with photos and prices.
- Send weekly broadcast messages announcing availability, prices, and special offers.
- Respond promptly to inquiries — a delayed response is a lost sale.
- Share photos and short videos of your healthy birds, clean farm, and fresh eggs. Visual proof builds trust.

### Facebook

- Create a Facebook page for your farm. Post consistently — at least 3 times per week.
- Share photos of your daily farm activities, healthy birds, and customer testimonials.
- Join poultry farming and buy-and-sell groups (there are dozens of active Ugandan poultry groups with thousands of members).
- Use Facebook Marketplace to list your products for free.
- Go live occasionally to show your farm in real time — transparency builds incredible trust.

### Instagram

- Perfect if you are targeting urban, middle-class buyers who value quality and presentation.
- Post high-quality photos of your packaged eggs, dressed chicken, or farm setup.
- Use relevant hashtags: #UgandaPoultry #KampalaEggs #FarmFreshUganda #BroilersForSale

---

## Building Your Brand

A brand is more than a name — it is the promise you make to your customers. Strong branding allows you to charge premium prices and build customer loyalty.

### Choose a Memorable Farm Name

Pick a name that is easy to remember, spell, and pronounce. Examples of effective Ugandan poultry brand names include names that reference freshness, quality, or local identity.

### Invest in Basic Branding Materials

- A simple logo (can be designed affordably by a local graphic designer or even created using free online tools)
- Branded packaging (trays, crates, bags)
- A farm signboard visible from the road
- Business cards to hand to potential buyers

### Deliver Consistent Quality

Your brand lives or dies by the quality of your product. Every tray of eggs, every chicken delivered, every interaction with a customer either strengthens or weakens your brand. Never compromise on:

- Freshness of eggs
- Cleanliness of dressed chicken
- Accuracy of weight and quantity
- Timeliness of delivery
- Professionalism in communication

### Ask for Reviews and Referrals

Satisfied customers are your best marketers. Ask them to recommend your farm to friends, share your posts on social media, or leave a testimonial you can publish. Consider offering a small discount on their next purchase as a thank-you for referrals.

---

## Selling Through ShambaNi Marketplace

While personal networks and social media are powerful, they are limited by your reach. **ShambaNi Marketplace** connects poultry farmers with buyers across Uganda — individuals, restaurants, retailers, and institutions looking for reliable suppliers.

### Why List on ShambaNi?

- Reach buyers beyond your immediate location
- Build credibility through a trusted platform
- Receive inquiries from verified buyers
- Compare your pricing with other sellers
- Access logistics support for deliveries

### How to Succeed on the Platform

1. Create a detailed seller profile with your farm name, location, and contact information.
2. Upload clear, high-quality photos of your products.
3. Write honest, detailed descriptions including weight, quantity, breed, and availability.
4. Price competitively based on market research.
5. Respond to buyer inquiries within a few hours.
6. Deliver exactly what you advertised. Trust is everything in online selling.
7. Encourage satisfied buyers to leave reviews and ratings.

ShambaNi Marketplace is especially valuable during peak production periods when you have more stock than your regular buyers can absorb. It opens a national market for your farm.

---

## Conclusion

Marketing poultry products in Uganda is not about complicated strategies or large advertising budgets. It is about understanding your customer, delivering consistent quality, pricing intelligently, and using the communication tools that Ugandans already rely on — WhatsApp, Facebook, and trusted marketplaces.

Start small. Pick two or three strategies from this article and implement them consistently. Talk to potential buyers today. Set up your Whats Business catalog this week. Create your farm’s Facebook page before your next batch matures. List your first products on ShambaNi Marketplace.

The farmers who succeed are not necessarily the ones with the biggest farms — they are the ones who learned how to sell.

Visit **ShambaNi Marketplace** today to list your poultry products, discover new buyers, and grow your farm’s reach across Uganda.
`}],wr=[`All`,`Getting Started`,`Health`,`Housing`,`Feeding`,`Business`,`Breeds`],Tr=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),j=o(((e,t)=>{t.exports=Tr()}))();function Er(e){return e.replace(/^### (.+)$/gm,`<h3 class="font-serif text-xl mt-6 mb-3" style="color:var(--text-main)">$1</h3>`).replace(/^## (.+)$/gm,`<h2 class="font-serif text-2xl mt-8 mb-4" style="color:var(--text-main);letter-spacing:-0.02em">$1</h2>`).replace(/^# (.+)$/gm,`<h1 class="font-serif text-3xl mt-8 mb-4" style="color:var(--text-main);letter-spacing:-0.03em">$1</h1>`).replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`).replace(/\*(.+?)\*/g,`<em>$1</em>`).replace(/^- (.+)$/gm,`<li class="font-serif text-sm leading-relaxed ml-4 mb-1">$1</li>`).replace(/^\d+\. (.+)$/gm,`<li class="font-serif text-sm leading-relaxed ml-4 mb-1">$1</li>`).replace(/(<li[^>]*>.*<\/li>\n?)+/g,`<ul class="mb-4 space-y-1">$&</ul>`).replace(/^(?!<[hlub]|<ul|<li)(.+)$/gm,`<p class="font-serif text-sm leading-relaxed mb-4" style="color:var(--text-muted)">$1</p>`).replace(/\n/g,``)}function Dr({content:e}){return(0,j.jsx)(`div`,{className:`article-content`,dangerouslySetInnerHTML:{__html:Er(e)}})}function Or(){let[e,t]=(0,_.useState)(`All`),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(null),o=(0,_.useMemo)(()=>Cr.filter(t=>{let r=e===`All`||t.category===e,i=n.toLowerCase(),a=!i||t.title.toLowerCase().includes(i)||t.summary.toLowerCase().includes(i)||t.content.toLowerCase().includes(i);return r&&a}),[e,n]),s={All:`var(--secondary)`,"Getting Started":`#4A7C59`,Health:`#C1121F`,Housing:`#457B9D`,Feeding:`#BC6C25`,Business:`#6B4C9A`,Breeds:`#2A9D8F`};return i?(0,j.jsxs)(`div`,{style:{background:`var(--bg)`,minHeight:`100vh`},children:[(0,j.jsx)(`div`,{className:`border-b`,style:{borderColor:`var(--border)`,background:`var(--bg-alt)`},children:(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6`,children:[(0,j.jsxs)(`button`,{onClick:()=>a(null),className:`btn-secondary mb-4 text-sm py-2 px-4`,children:[(0,j.jsx)(lr,{className:`w-4 h-4 mr-2`}),`Back to Guides`]}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 mb-3`,children:[(0,j.jsx)(`span`,{className:`font-sora text-xs font-semibold px-3 py-1 rounded-full text-white`,style:{background:s[i.category]||`var(--primary)`},children:i.category}),(0,j.jsxs)(`span`,{className:`font-sora text-xs flex items-center gap-1`,style:{color:`var(--text-muted)`},children:[(0,j.jsx)(fr,{className:`w-3 h-3`}),i.readTime]})]}),(0,j.jsx)(`h1`,{className:`font-serif text-3xl sm:text-4xl`,style:{color:`var(--text-main)`,letterSpacing:`-0.03em`},children:i.title})]})}),(0,j.jsxs)(`div`,{className:`max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 section-pad`,children:[(0,j.jsx)(Dr,{content:i.content}),(0,j.jsx)(`div`,{className:`mt-12 pt-8 border-t`,style:{borderColor:`var(--border)`},children:(0,j.jsxs)(`button`,{onClick:()=>a(null),className:`btn-secondary text-sm py-2 px-4`,children:[(0,j.jsx)(lr,{className:`w-4 h-4 mr-2`}),`Back to Guides`]})})]})]}):(0,j.jsxs)(`div`,{style:{background:`var(--bg)`,minHeight:`100vh`},children:[(0,j.jsx)(`div`,{className:`border-b`,style:{borderColor:`var(--border)`,background:`var(--bg-alt)`},children:(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`Knowledge Hub`}),(0,j.jsx)(`h1`,{className:`font-serif text-4xl sm:text-5xl mb-4`,style:{color:`var(--text-main)`,letterSpacing:`-0.03em`},children:`Farming Guides`}),(0,j.jsx)(`p`,{className:`font-serif text-base sm:text-lg max-w-2xl mx-auto leading-relaxed`,style:{color:`var(--text-muted)`},children:`Practical, in-depth poultry farming guides tailored for Ugandan farmers. From getting started to advanced management — learn everything you need to succeed.`})]})}),(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 section-pad`,children:[(0,j.jsx)(`div`,{className:`mb-8`,children:(0,j.jsxs)(`div`,{className:`flex items-center gap-3 px-4 py-3 rounded-xl border`,style:{background:`var(--surface)`,borderColor:`var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:[(0,j.jsx)(vr,{className:`w-5 h-5 flex-shrink-0`,style:{color:`var(--text-muted)`}}),(0,j.jsx)(`input`,{type:`text`,placeholder:`Search articles by title, topic, or keyword...`,value:n,onChange:e=>r(e.target.value),className:`flex-1 bg-transparent border-none outline-none font-sora text-sm`,style:{color:`var(--text-main)`}}),n&&(0,j.jsx)(`button`,{onClick:()=>r(``),children:(0,j.jsx)(Sr,{className:`w-4 h-4`,style:{color:`var(--text-muted)`}})})]})}),(0,j.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-10`,children:wr.map(n=>(0,j.jsx)(`button`,{onClick:()=>t(n),className:`font-sora text-xs font-medium px-4 py-2 rounded-full transition-all duration-200`,style:{background:e===n?s[n]||`var(--primary)`:`transparent`,color:e===n?`#fff`:`var(--text-muted)`,border:`1.5px solid ${e===n?s[n]||`var(--primary)`:`var(--border)`}`},children:n},n))}),(0,j.jsxs)(`div`,{className:`flex items-center gap-4 mb-8`,children:[(0,j.jsx)(dr,{className:`w-4 h-4`,style:{color:`var(--text-muted)`}}),(0,j.jsxs)(`span`,{className:`font-sora text-sm`,style:{color:`var(--text-muted)`},children:[`Showing `,o.length,` of `,Cr.length,` guides`]})]}),o.length===0?(0,j.jsxs)(`div`,{className:`text-center py-16`,children:[(0,j.jsx)(vr,{className:`w-12 h-12 mx-auto mb-4`,style:{color:`var(--border)`}}),(0,j.jsx)(`h3`,{className:`font-serif text-xl mb-2`,style:{color:`var(--text-main)`},children:`No articles found`}),(0,j.jsx)(`p`,{className:`font-serif text-sm`,style:{color:`var(--text-muted)`},children:`Try adjusting your search or category filter.`})]}):(0,j.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:o.map(e=>(0,j.jsxs)(`button`,{onClick:()=>a(e),className:`group text-left rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1`,style:{background:`var(--surface)`,borderColor:`var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},onMouseEnter:e=>{e.currentTarget.style.boxShadow=`0 8px 32px rgba(40,54,24,0.08)`,e.currentTarget.style.borderColor=`var(--accent)`},onMouseLeave:e=>{e.currentTarget.style.boxShadow=`0 2px 16px rgba(40,54,24,0.04)`,e.currentTarget.style.borderColor=`var(--border)`},children:[(0,j.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,j.jsx)(`span`,{className:`font-sora text-xs font-semibold px-3 py-1 rounded-full text-white`,style:{background:s[e.category]||`var(--primary)`},children:e.category}),(0,j.jsxs)(`span`,{className:`font-sora text-xs flex items-center gap-1`,style:{color:`var(--text-muted)`},children:[(0,j.jsx)(fr,{className:`w-3 h-3`}),e.readTime]})]}),(0,j.jsx)(`h3`,{className:`font-serif text-lg mb-3 group-hover:underline`,style:{color:`var(--text-main)`},children:e.title}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed line-clamp-3`,style:{color:`var(--text-muted)`},children:e.summary}),(0,j.jsxs)(`div`,{className:`mt-4 flex items-center gap-1 font-sora text-xs font-medium`,style:{color:`var(--primary)`},children:[(0,j.jsx)(dr,{className:`w-3 h-3`}),`Read full guide`]})]},e.id))})]})]})}function kr(){return(0,j.jsxs)(`div`,{style:{background:`var(--bg)`,minHeight:`100vh`},children:[(0,j.jsx)(`div`,{style:{background:`var(--bg-alt)`,borderBottom:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`Our Story`}),(0,j.jsx)(`h1`,{className:`font-serif text-4xl sm:text-5xl mb-4`,style:{color:`var(--text-main)`,letterSpacing:`-0.03em`},children:`About Unifiedfarm BLM`}),(0,j.jsx)(`p`,{className:`font-serif text-base sm:text-lg max-w-2xl mx-auto leading-relaxed`,style:{color:`var(--text-muted)`},children:`A family-run poultry farm in the heart of Mpigi District, empowering Ugandan farmers with quality products and honest guidance since day one.`})]})}),(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,j.jsx)(`section`,{className:`section-pad`,style:{borderBottom:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-6`,style:{color:`var(--text-main)`},children:`Our Story`}),(0,j.jsxs)(`p`,{className:`font-serif text-sm leading-relaxed mb-4`,style:{color:`var(--text-muted)`},children:[`Unifiedfarm BLM was born from a simple dream and a deep love for the land. Founded by`,(0,j.jsx)(`strong`,{children:` Reagan Lutwama`}),`, our farm sits in the heart of `,(0,j.jsx)(`strong`,{children:`Mpigi District, Central Region, Uganda`}),` — a region known for its fertile soils, favorable climate, and hardworking farming communities.`]}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed mb-4`,style:{color:`var(--text-muted)`},children:`What started as a small family venture with just a handful of chickens has grown into a trusted poultry enterprise serving farmers, households, and businesses across Uganda. Reagan Lutwama, together with his family, has poured years of dedication, learning, and hands-on experience into building Unifiedfarm BLM into what it is today: a farm that does not just sell products, but builds lasting relationships with everyone it serves.`}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed`,style:{color:`var(--text-muted)`},children:`Reagan saw a gap in the market — a need for reliable, high-quality poultry products and honest guidance for farmers in Uganda. Too many aspiring poultry farmers struggled to find healthy day-old chicks, consistent fresh eggs, or trustworthy advice to help them succeed. Unifiedfarm BLM was created to fill that gap.`})]}),(0,j.jsx)(`div`,{className:`rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center`,style:{background:`var(--bg-alt)`,border:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`text-center`,children:[(0,j.jsx)(`div`,{className:`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center`,style:{background:`var(--primary)`},children:(0,j.jsx)(mr,{className:`w-10 h-10 text-white`})}),(0,j.jsx)(`h3`,{className:`font-serif text-xl mb-2`,style:{color:`var(--text-main)`},children:`Family-Run Farm`}),(0,j.jsx)(`p`,{className:`font-serif text-sm`,style:{color:`var(--text-muted)`},children:`Reagan Lutwama works alongside his family every day — feeding the birds, collecting eggs, inspecting chicks, and personally speaking with customers.`})]})})]})}),(0,j.jsxs)(`section`,{className:`section-pad`,style:{borderBottom:`1px solid var(--border)`},children:[(0,j.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`What Drives Us`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-4`,style:{color:`var(--text-main)`},children:`Our Mission`}),(0,j.jsxs)(`p`,{className:`font-serif text-base max-w-2xl mx-auto leading-relaxed`,style:{color:`var(--text-muted)`},children:[`Our mission is straightforward: `,(0,j.jsx)(`strong`,{children:`to empower Ugandan farmers and families with quality poultry products, practical knowledge, and dependable service that supports sustainable livelihoods.`})]})]}),(0,j.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`,children:[{icon:(0,j.jsx)(ur,{className:`w-6 h-6`}),title:`Quality First`,desc:`Strict biosecurity, clean housing, balanced nutrition, and accurate vaccination records for every bird.`},{icon:(0,j.jsx)(xr,{className:`w-6 h-6`}),title:`Community Focus`,desc:`Supporting neighboring farmers, youth agricultural initiatives, and women-led enterprises.`},{icon:(0,j.jsx)(br,{className:`w-6 h-6`}),title:`Farmer Success`,desc:`Practical, field-tested advice tailored to Ugandan conditions for every farmer we serve.`},{icon:(0,j.jsx)(mr,{className:`w-6 h-6`}),title:`Sustainability`,desc:`Building a profitable, respected poultry farming profession for Uganda's agricultural future.`}].map((e,t)=>(0,j.jsxs)(`div`,{className:`rounded-xl p-6 text-center`,style:{background:`var(--surface)`,border:`1px solid var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:[(0,j.jsx)(`div`,{className:`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`,style:{background:`var(--bg-alt)`},children:(0,j.jsx)(`span`,{style:{color:`var(--primary)`},children:e.icon})}),(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-2`,style:{color:`var(--text-main)`},children:e.title}),(0,j.jsx)(`p`,{className:`font-serif text-xs leading-relaxed`,style:{color:`var(--text-muted)`},children:e.desc})]},t))})]}),(0,j.jsx)(`section`,{className:`section-pad`,style:{borderBottom:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-12`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`What We Offer`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-6`,style:{color:`var(--text-main)`},children:`Our Products & Services`}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed mb-6`,style:{color:`var(--text-muted)`},children:`At Unifiedfarm BLM, we pride ourselves on offering a full range of poultry products and services designed to meet the needs of both small-scale and commercial farmers.`}),(0,j.jsx)(`ul`,{className:`space-y-4`,children:[{title:`Fresh Eggs`,desc:`Nutritious, farm-fresh eggs delivered daily for households, restaurants, bakeries, and retailers.`},{title:`Day-Old Chicks`,desc:`Healthy, vaccinated chicks bred with care and ready to thrive under your management.`},{title:`Brooded Chicks`,desc:`Chicks that have passed the delicate early brooding stage — higher survival rate, faster returns.`},{title:`Mature Layers`,desc:`Fully grown, productive hens ready to start or expand your egg production immediately.`},{title:`Poultry Manure`,desc:`Rich, organic fertilizer to boost your crop yields naturally — ideal for gardens and plantations.`},{title:`Consultation Services`,desc:`Practical, field-tested advice tailored to Ugandan conditions for new and scaling farmers.`}].map((e,t)=>(0,j.jsxs)(`li`,{className:`flex gap-4`,children:[(0,j.jsx)(`div`,{className:`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5`,style:{background:`var(--bg-alt)`},children:(0,j.jsx)(`span`,{className:`font-sora text-xs font-bold`,style:{color:`var(--primary)`},children:t+1})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-1`,style:{color:`var(--text-main)`},children:e.title}),(0,j.jsx)(`p`,{className:`font-serif text-xs leading-relaxed`,style:{color:`var(--text-muted)`},children:e.desc})]})]},t))})]}),(0,j.jsx)(`div`,{className:`rounded-2xl p-8 flex items-center justify-center`,style:{background:`var(--bg-alt)`,border:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`text-center`,children:[(0,j.jsx)(`h3`,{className:`font-serif text-2xl mb-4`,style:{color:`var(--text-main)`},children:`Quality is Our Foundation`}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed mb-6`,style:{color:`var(--text-muted)`},children:`Every egg, chick, and layer that leaves our farm carries our family\\'s reputation. We never compromise on quality because we understand that your success depends on the health and productivity of the stock you receive.`}),(0,j.jsx)(`div`,{className:`grid grid-cols-2 gap-4`,children:[{label:`Years of Experience`,value:`10+`},{label:`Happy Customers`,value:`500+`},{label:`Districts Served`,value:`15+`},{label:`Satisfaction Rate`,value:`99%`}].map((e,t)=>(0,j.jsxs)(`div`,{className:`rounded-xl p-4`,style:{background:`var(--surface)`,border:`1px solid var(--border)`},children:[(0,j.jsx)(`div`,{className:`font-sora text-2xl font-bold`,style:{color:`var(--primary)`},children:e.value}),(0,j.jsx)(`div`,{className:`font-sora text-xs mt-1`,style:{color:`var(--text-muted)`},children:e.label})]},t))})]})})]})}),(0,j.jsxs)(`section`,{className:`section-pad`,style:{borderBottom:`1px solid var(--border)`},children:[(0,j.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`The Difference`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-4`,style:{color:`var(--text-main)`},children:`Why Choose Unifiedfarm BLM`})]}),(0,j.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8`,children:[{title:`Family-Run Personal Touch`,desc:`This is not a corporate operation. When you call or message us, you are talking directly to people who live and breathe poultry farming. We understand the challenges you face because we face them too.`},{title:`Proven Track Record`,desc:`Years of hands-on experience raising poultry in Mpigi District. We have learned what works and what does not — and we share that knowledge openly with every customer.`},{title:`Quality You Can Trust`,desc:`Strict biosecurity measures, clean housing, balanced nutrition, and accurate vaccination records. Every product carries our family's reputation.`},{title:`Community Rooted`,desc:`We believe that when local farmers thrive, the entire community benefits. We support farming groups, youth initiatives, and women-led enterprises across Central Region.`}].map((e,t)=>(0,j.jsxs)(`div`,{className:`rounded-xl p-6`,style:{background:`var(--surface)`,border:`1px solid var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:[(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-3`,style:{color:`var(--text-main)`},children:e.title}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed`,style:{color:`var(--text-muted)`},children:e.desc})]},t))})]}),(0,j.jsx)(`section`,{className:`section-pad`,style:{borderBottom:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`rounded-2xl p-8 sm:p-12 text-center`,style:{background:`var(--bg-alt)`,border:`1px solid var(--border)`},children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`Looking Ahead`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-6`,style:{color:`var(--text-main)`},children:`Our Vision for Ugandan Agriculture`}),(0,j.jsxs)(`p`,{className:`font-serif text-base max-w-3xl mx-auto leading-relaxed mb-8`,style:{color:`var(--text-muted)`},children:[`We envision a Uganda where poultry farming is not just a side activity but a `,(0,j.jsx)(`strong`,{children:`profitable, respected profession`}),`. A Uganda where every aspiring farmer has access to quality stock, honest information, and fair markets. A Uganda where agricultural enterprises like ours create jobs, feed families, and strengthen communities.`]}),(0,j.jsx)(`p`,{className:`font-serif text-base max-w-3xl mx-auto leading-relaxed`,style:{color:`var(--text-muted)`},children:`Unifiedfarm BLM is committed to being part of that transformation. We are continuously learning, investing in better practices, and expanding our capacity so that we can serve even more farmers across the country.`})]})}),(0,j.jsxs)(`section`,{className:`section-pad`,children:[(0,j.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`Reach Out`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-4`,style:{color:`var(--text-main)`},children:`Get in Touch`}),(0,j.jsx)(`p`,{className:`font-serif text-base max-w-xl mx-auto`,style:{color:`var(--text-muted)`},children:`Whether you are looking for fresh eggs, healthy chicks, expert advice, or a reliable farming partner, Unifiedfarm BLM is here for you.`})]}),(0,j.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12`,children:[(0,j.jsxs)(`div`,{className:`rounded-xl p-6 text-center`,style:{background:`var(--surface)`,border:`1px solid var(--border)`},children:[(0,j.jsx)(`div`,{className:`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`,style:{background:`var(--bg-alt)`},children:(0,j.jsx)(_r,{className:`w-5 h-5`,style:{color:`var(--primary)`}})}),(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-2`,style:{color:`var(--text-main)`},children:`Phone / WhatsApp`}),(0,j.jsx)(`p`,{className:`font-serif text-sm`,style:{color:`var(--text-muted)`},children:`+256 708 813 419`})]}),(0,j.jsxs)(`div`,{className:`rounded-xl p-6 text-center`,style:{background:`var(--surface)`,border:`1px solid var(--border)`},children:[(0,j.jsx)(`div`,{className:`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`,style:{background:`var(--bg-alt)`},children:(0,j.jsx)(hr,{className:`w-5 h-5`,style:{color:`var(--primary)`}})}),(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-2`,style:{color:`var(--text-main)`},children:`Email`}),(0,j.jsx)(`p`,{className:`font-serif text-sm`,style:{color:`var(--text-muted)`},children:`ryglutwa0@gmail.com`})]}),(0,j.jsxs)(`div`,{className:`rounded-xl p-6 text-center`,style:{background:`var(--surface)`,border:`1px solid var(--border)`},children:[(0,j.jsx)(`div`,{className:`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center`,style:{background:`var(--bg-alt)`},children:(0,j.jsx)(gr,{className:`w-5 h-5`,style:{color:`var(--primary)`}})}),(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-2`,style:{color:`var(--text-main)`},children:`Location`}),(0,j.jsx)(`p`,{className:`font-serif text-sm`,style:{color:`var(--text-muted)`},children:`Mpigi District, Central Region, Uganda`})]})]}),(0,j.jsx)(`div`,{className:`rounded-2xl overflow-hidden`,style:{border:`1px solid var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:(0,j.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32335427117!2d32.15036969726561!3d0.2279762999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d9f0e595e9991%3A0x3eaaa417fbf3c320!2sMpigi%20District!5e0!3m2!1sen!2sug!4v1704067200000!5m2!1sen!2sug`,width:`100%`,height:`400`,style:{border:0,filter:`grayscale(20%)`},allowFullScreen:!0,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`Unifiedfarm BLM Location`})}),(0,j.jsx)(`div`,{className:`text-center mt-8`,children:(0,j.jsx)(`p`,{className:`font-serif text-sm`,style:{color:`var(--text-muted)`},children:`Thank you for choosing Unifiedfarm BLM. We look forward to growing with you.`})})]})]})]})}function Ar(){let e=A(),t=t=>e.pathname===t;return(0,j.jsx)(`nav`,{className:`sticky top-0 z-50 border-b`,style:{background:`rgba(254,250,224,0.95)`,backdropFilter:`blur(8px)`,borderColor:`var(--border)`},children:(0,j.jsx)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`,children:(0,j.jsxs)(`div`,{className:`flex items-center justify-between h-16`,children:[(0,j.jsxs)(Pn,{to:`/`,className:`flex items-center gap-2`,children:[(0,j.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center`,style:{background:`var(--primary)`},children:(0,j.jsx)(`span`,{className:`font-sora text-sm font-bold text-white`,children:`U`})}),(0,j.jsx)(`span`,{className:`font-sora text-sm font-semibold hidden sm:inline`,style:{color:`var(--text-main)`},children:`Unifiedfarm BLM`})]}),(0,j.jsx)(`div`,{className:`flex items-center gap-1`,children:[{path:`/`,label:`Home`,icon:(0,j.jsx)(cr,{className:`w-4 h-4`})},{path:`/guides`,label:`Guides`,icon:(0,j.jsx)(dr,{className:`w-4 h-4`})},{path:`/about`,label:`About`,icon:(0,j.jsx)(pr,{className:`w-4 h-4`})}].map(e=>(0,j.jsxs)(Pn,{to:e.path,className:`flex items-center gap-1.5 px-3 py-2 rounded-lg font-sora text-xs font-medium transition-all`,style:{color:t(e.path)?`var(--primary)`:`var(--text-muted)`,background:t(e.path)?`var(--bg-alt)`:`transparent`},children:[e.icon,(0,j.jsx)(`span`,{className:`hidden sm:inline`,children:e.label})]},e.path))}),(0,j.jsxs)(`a`,{href:`https://wa.me/256708813419`,target:`_blank`,rel:`noopener noreferrer`,className:`btn-primary text-xs py-2 px-3 sm:px-4`,children:[(0,j.jsx)(_r,{className:`w-3 h-3 sm:mr-1.5`}),(0,j.jsx)(`span`,{className:`hidden sm:inline`,children:`Contact Us`})]})]})})})}function jr(){return(0,j.jsxs)(`div`,{style:{background:`var(--bg)`,minHeight:`100vh`},children:[(0,j.jsx)(`div`,{style:{background:`var(--bg-alt)`,borderBottom:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`Welcome to Unifiedfarm BLM`}),(0,j.jsxs)(`h1`,{className:`font-serif text-4xl sm:text-5xl lg:text-6xl mb-6`,style:{color:`var(--text-main)`,letterSpacing:`-0.03em`},children:[`Quality Poultry Products`,(0,j.jsx)(`br`,{className:`hidden sm:block`}),` for Ugandan Farmers`]}),(0,j.jsx)(`p`,{className:`font-serif text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8`,style:{color:`var(--text-muted)`},children:`Fresh eggs, healthy chicks, and expert guidance from our family farm in Mpigi District to your farm across Uganda.`}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-4`,children:[(0,j.jsxs)(Pn,{to:`/guides`,className:`btn-primary`,children:[(0,j.jsx)(dr,{className:`w-4 h-4 mr-2`}),`Browse Farming Guides`]}),(0,j.jsx)(Pn,{to:`/about`,className:`btn-secondary`,children:`Learn About Us`})]})]})}),(0,j.jsx)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8`,children:(0,j.jsx)(`div`,{className:`grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl p-6`,style:{background:`var(--surface)`,border:`1px solid var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:[{label:`Farming Guides`,value:`15+`},{label:`Years Experience`,value:`10+`},{label:`Farmers Helped`,value:`500+`},{label:`Districts Served`,value:`15+`}].map((e,t)=>(0,j.jsxs)(`div`,{className:`text-center`,children:[(0,j.jsx)(`div`,{className:`font-sora text-2xl sm:text-3xl font-bold`,style:{color:`var(--primary)`},children:e.value}),(0,j.jsx)(`div`,{className:`font-sora text-xs mt-1`,style:{color:`var(--text-muted)`},children:e.label})]},t))})}),(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 section-pad`,children:[(0,j.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`Learn From The Best`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-4`,style:{color:`var(--text-main)`},children:`Featured Farming Guides`}),(0,j.jsx)(`p`,{className:`font-serif text-base max-w-xl mx-auto`,style:{color:`var(--text-muted)`},children:`In-depth, practical guides written specifically for poultry farmers in Uganda.`})]}),(0,j.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:[{title:`How to Start a Poultry Farm in Uganda: A Complete Beginner's Guide`,category:`Getting Started`,desc:`Everything you need to know to start your poultry farm from scratch — location, budget, housing, and more.`},{title:`Broiler Chicken Feeding Guide: From Day-Old to Market Ready`,category:`Feeding`,desc:`Week-by-week feeding plan with practical schedules, FCR tracking, and cost-saving strategies.`},{title:`Common Poultry Diseases in Uganda: Prevention and Treatment`,category:`Health`,desc:`Learn to identify, prevent, and treat the 5 most common poultry diseases affecting Ugandan flocks.`}].map((e,t)=>(0,j.jsxs)(`div`,{className:`rounded-xl p-6`,style:{background:`var(--surface)`,border:`1px solid var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:[(0,j.jsx)(`span`,{className:`font-sora text-xs font-semibold px-3 py-1 rounded-full text-white inline-block mb-4`,style:{background:e.category===`Getting Started`?`#4A7C59`:e.category===`Feeding`?`#BC6C25`:`#C1121F`},children:e.category}),(0,j.jsx)(`h3`,{className:`font-serif text-lg mb-3`,style:{color:`var(--text-main)`},children:e.title}),(0,j.jsx)(`p`,{className:`font-serif text-sm leading-relaxed`,style:{color:`var(--text-muted)`},children:e.desc})]},t))}),(0,j.jsx)(`div`,{className:`text-center mt-10`,children:(0,j.jsxs)(Pn,{to:`/guides`,className:`btn-primary`,children:[(0,j.jsx)(dr,{className:`w-4 h-4 mr-2`}),`View All 15 Guides`]})})]}),(0,j.jsx)(`div`,{style:{background:`var(--bg-alt)`,borderTop:`1px solid var(--border)`,borderBottom:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 section-pad`,children:[(0,j.jsxs)(`div`,{className:`text-center mb-12`,children:[(0,j.jsx)(`div`,{className:`eyebrow mb-4`,children:`What We Offer`}),(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-4`,style:{color:`var(--text-main)`},children:`Our Products`}),(0,j.jsx)(`p`,{className:`font-serif text-base max-w-xl mx-auto`,style:{color:`var(--text-muted)`},children:`Quality poultry products and services for small-scale and commercial farmers.`})]}),(0,j.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,children:[{title:`Fresh Eggs`,desc:`Farm-fresh eggs delivered daily for households, restaurants, and retailers.`},{title:`Day-Old Chicks`,desc:`Healthy, vaccinated chicks from trusted hatcheries ready to thrive.`},{title:`Brooded Chicks`,desc:`Chicks past the delicate brooding stage for higher survival rates.`},{title:`Mature Layers`,desc:`Productive hens ready to start or expand your egg production.`},{title:`Poultry Manure`,desc:`Rich organic fertilizer ideal for crops, vegetables, and plantations.`},{title:`Consultation`,desc:`Expert advice on farm setup, management, and disease prevention.`}].map((e,t)=>(0,j.jsxs)(`div`,{className:`rounded-xl p-6 flex items-start gap-4`,style:{background:`var(--surface)`,border:`1px solid var(--border)`,boxShadow:`0 2px 16px rgba(40,54,24,0.04)`},children:[(0,j.jsx)(`div`,{className:`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center`,style:{background:`var(--bg-alt)`},children:(0,j.jsx)(yr,{className:`w-5 h-5`,style:{color:`var(--primary)`}})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:`font-sora text-sm font-semibold mb-1`,style:{color:`var(--text-main)`},children:e.title}),(0,j.jsx)(`p`,{className:`font-serif text-xs leading-relaxed`,style:{color:`var(--text-muted)`},children:e.desc})]})]},t))})]})}),(0,j.jsx)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 section-pad`,children:(0,j.jsxs)(`div`,{className:`rounded-2xl p-8 sm:p-12 text-center`,style:{background:`var(--secondary)`,color:`#fff`},children:[(0,j.jsx)(`h2`,{className:`font-serif text-3xl mb-4`,children:`Ready to Start or Grow Your Poultry Farm?`}),(0,j.jsx)(`p`,{className:`font-serif text-base max-w-xl mx-auto leading-relaxed mb-8 opacity-90`,children:`Whether you need fresh eggs, healthy chicks, or expert advice — we are here to help. Reach out to us today and let us grow together.`}),(0,j.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-4`,children:[(0,j.jsxs)(`a`,{href:`https://wa.me/256708813419`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center px-6 py-3 rounded-lg font-sora text-sm font-medium transition-all`,style:{background:`var(--primary)`,color:`#fff`},children:[(0,j.jsx)(_r,{className:`w-4 h-4 mr-2`}),`WhatsApp Us`]}),(0,j.jsxs)(Pn,{to:`/guides`,className:`inline-flex items-center justify-center px-6 py-3 rounded-lg font-sora text-sm font-medium transition-all border`,style:{background:`transparent`,color:`#fff`,borderColor:`rgba(255,255,255,0.4)`},children:[(0,j.jsx)(dr,{className:`w-4 h-4 mr-2`}),`Read Our Guides`]})]})]})}),(0,j.jsx)(`footer`,{style:{background:`var(--bg-alt)`,borderTop:`1px solid var(--border)`},children:(0,j.jsxs)(`div`,{className:`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12`,children:[(0,j.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,j.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center`,style:{background:`var(--primary)`},children:(0,j.jsx)(`span`,{className:`font-sora text-sm font-bold text-white`,children:`U`})}),(0,j.jsx)(`span`,{className:`font-sora text-sm font-semibold`,style:{color:`var(--text-main)`},children:`Unifiedfarm BLM`})]}),(0,j.jsx)(`p`,{className:`font-serif text-xs leading-relaxed`,style:{color:`var(--text-muted)`},children:`A family-run poultry farm in Mpigi District, Uganda. Quality products and honest guidance for every farmer.`})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:`font-sora text-xs font-semibold uppercase tracking-wider mb-4`,style:{color:`var(--text-main)`},children:`Quick Links`}),(0,j.jsxs)(`ul`,{className:`space-y-2`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(Pn,{to:`/`,className:`font-serif text-xs hover:underline`,style:{color:`var(--text-muted)`},children:`Home`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(Pn,{to:`/guides`,className:`font-serif text-xs hover:underline`,style:{color:`var(--text-muted)`},children:`Farming Guides`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(Pn,{to:`/about`,className:`font-serif text-xs hover:underline`,style:{color:`var(--text-muted)`},children:`About Us`})})]})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:`font-sora text-xs font-semibold uppercase tracking-wider mb-4`,style:{color:`var(--text-main)`},children:`Legal`}),(0,j.jsxs)(`ul`,{className:`space-y-2`,children:[(0,j.jsx)(`li`,{children:(0,j.jsx)(`a`,{href:`/privacy/`,className:`font-serif text-xs hover:underline`,style:{color:`var(--text-muted)`},children:`Privacy Policy`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(`a`,{href:`/terms/`,className:`font-serif text-xs hover:underline`,style:{color:`var(--text-muted)`},children:`Terms & Conditions`})}),(0,j.jsx)(`li`,{children:(0,j.jsx)(`a`,{href:`/disclaimer/`,className:`font-serif text-xs hover:underline`,style:{color:`var(--text-muted)`},children:`Disclaimer`})})]})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:`font-sora text-xs font-semibold uppercase tracking-wider mb-4`,style:{color:`var(--text-main)`},children:`Contact`}),(0,j.jsxs)(`ul`,{className:`space-y-2`,children:[(0,j.jsxs)(`li`,{className:`font-serif text-xs flex items-center gap-2`,style:{color:`var(--text-muted)`},children:[(0,j.jsx)(_r,{className:`w-3 h-3`}),`+256 708 813 419`]}),(0,j.jsxs)(`li`,{className:`font-serif text-xs flex items-center gap-2`,style:{color:`var(--text-muted)`},children:[(0,j.jsx)(hr,{className:`w-3 h-3`}),`ryglutwa0@gmail.com`]}),(0,j.jsxs)(`li`,{className:`font-serif text-xs flex items-center gap-2`,style:{color:`var(--text-muted)`},children:[(0,j.jsx)(gr,{className:`w-3 h-3`}),`Mpigi District, Uganda`]})]})]})]}),(0,j.jsx)(`div`,{className:`pt-8 border-t text-center`,style:{borderColor:`var(--border)`},children:(0,j.jsxs)(`p`,{className:`font-sora text-xs`,style:{color:`var(--text-muted)`},children:[`© `,new Date().getFullYear(),` Unifiedfarm BLM. All rights reserved.`]})})]})})]})}function Mr(){return(0,j.jsxs)(Mn,{children:[(0,j.jsx)(Ar,{}),(0,j.jsxs)(Wt,{children:[(0,j.jsx)(Ht,{path:`/`,element:(0,j.jsx)(jr,{})}),(0,j.jsx)(Ht,{path:`/guides`,element:(0,j.jsx)(Or,{})}),(0,j.jsx)(Ht,{path:`/about`,element:(0,j.jsx)(kr,{})})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(_.StrictMode,{children:(0,j.jsx)(Mr,{})}));