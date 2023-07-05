(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Zr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},kt=[],Oe=()=>{},bs=()=>!1,ys=/^on[^a-z]/,qn=e=>ys.test(e),Gr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xs=Object.prototype.hasOwnProperty,H=(e,t)=>xs.call(e,t),M=Array.isArray,At=e=>cn(e)==="[object Map]",Jn=e=>cn(e)==="[object Set]",Ra=e=>cn(e)==="[object Date]",j=e=>typeof e=="function",ee=e=>typeof e=="string",Jt=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Bi=e=>V(e)&&j(e.then)&&j(e.catch),Yi=Object.prototype.toString,cn=e=>Yi.call(e),_s=e=>cn(e).slice(8,-1),Ki=e=>cn(e)==="[object Object]",ea=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ws=/-(\w)/g,Me=Zn(e=>e.replace(ws,(t,n)=>n?n.toUpperCase():"")),ks=/\B([A-Z])/g,Rt=Zn(e=>e.replace(ks,"-$1").toLowerCase()),Gn=Zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),mr=Zn(e=>e?`on${Gn(e)}`:""),Zt=(e,t)=>!Object.is(e,t),Fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$n=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Or=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const Er=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Cs(r):ta(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(V(e))return e}}const As=/;(?![^(]*\))/g,Os=/:([^]+)/,Es=/\/\*[^]*?\*\//g;function Cs(e){const t={};return e.replace(Es,"").split(As).forEach(n=>{if(n){const r=n.split(Os);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Gt(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=Gt(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ps="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ss=Zr(Ps);function Wi(e){return!!e||e===""}function Ts(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=St(e[r],t[r]);return n}function St(e,t){if(e===t)return!0;let n=Ra(e),r=Ra(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Jt(e),r=Jt(t),n||r)return e===t;if(n=M(e),r=M(t),n||r)return n&&r?Ts(e,t):!1;if(n=V(e),r=V(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!St(e[o],t[o]))return!1}}return String(e)===String(t)}function Vi(e,t){return e.findIndex(n=>St(n,t))}const Is=e=>ee(e)?e:e==null?"":M(e)||V(e)&&(e.toString===Yi||!j(e.toString))?JSON.stringify(e,Xi,2):String(e),Xi=(e,t)=>t&&t.__v_isRef?Xi(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Jn(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!M(t)&&!Ki(t)?String(t):t;let xe;class Ns{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ms(e,t=xe){t&&t.active&&t.effects.push(e)}function Fs(){return xe}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qi=e=>(e.w&Ze)>0,Ji=e=>(e.n&Ze)>0,Rs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Ls=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];qi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},Cr=new WeakMap;let Bt=0,Ze=1;const Pr=30;let we;const ut=Symbol(""),Sr=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ms(this,r)}run(){if(!this.active)return this.fn();let t=we,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,qe=!0,Ze=1<<++Bt,Bt<=Pr?Rs(this):ja(this),this.fn()}finally{Bt<=Pr&&Ls(this),Ze=1<<--Bt,we=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Zi=[];function Lt(){Zi.push(qe),qe=!1}function jt(){const e=Zi.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&we){let r=Cr.get(e);r||Cr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=na()),Gi(a)}}function Gi(e,t){let n=!1;Bt<=Pr?Ji(e)||(e.n|=Ze,n=!qi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function De(e,t,n,r,a,i){const o=Cr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?ea(n)&&s.push(o.get("length")):(s.push(o.get(ut)),At(e)&&s.push(o.get(Sr)));break;case"delete":M(e)||(s.push(o.get(ut)),At(e)&&s.push(o.get(Sr)));break;case"set":At(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&Tr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Tr(na(l))}}function Tr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Da(r);for(const r of n)r.computed||Da(r)}function Da(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const js=Zr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Jt)),Ds=aa(),zs=aa(!1,!0),$s=aa(!0),za=Hs();function Hs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Lt();const r=U(this)[t].apply(this,n);return jt(),r}}),e}function Us(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}function aa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?al:ao:t?ro:no).get(r))return r;const o=M(r);if(!e){if(o&&H(za,a))return Reflect.get(za,a,i);if(a==="hasOwnProperty")return Us}const s=Reflect.get(r,a,i);return(Jt(a)?Qi.has(a):js(a))||(e||me(r,"get",a),t)?s:se(s)?o&&ea(a)?s:s.value:V(s)?e?io(s):sa(s):s}}const Bs=eo(),Ys=eo(!0);function eo(e=!1){return function(n,r,a,i){let o=n[r];if(Tt(o)&&se(o)&&!se(a))return!1;if(!e&&(!Hn(a)&&!Tt(a)&&(o=U(o),a=U(a)),!M(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=M(n)&&ea(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Zt(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ks(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Ws(e,t){const n=Reflect.has(e,t);return(!Jt(t)||!Qi.has(t))&&me(e,"has",t),n}function Vs(e){return me(e,"iterate",M(e)?"length":ut),Reflect.ownKeys(e)}const to={get:Ds,set:Bs,deleteProperty:Ks,has:Ws,ownKeys:Vs},Xs={get:$s,set(e,t){return!0},deleteProperty(e,t){return!0}},qs=ne({},to,{get:zs,set:Ys}),ia=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function bn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Qn(a),s=r?ia:n?fa:Qt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function yn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function xn(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",ut),Reflect.get(e,"size",e)}function $a(e){e=U(e);const t=U(this);return Qn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Ha(e,t){t=U(t);const n=U(this),{has:r,get:a}=Qn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Zt(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function Ua(e){const t=U(this),{has:n,get:r}=Qn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Ba(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function _n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ia:e?fa:Qt;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function wn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=At(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ia:t?fa:Qt;return!t&&me(i,"iterate",l?Sr:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Js(){const e={get(i){return bn(this,i)},get size(){return xn(this)},has:yn,add:$a,set:Ha,delete:Ua,clear:Ba,forEach:_n(!1,!1)},t={get(i){return bn(this,i,!1,!0)},get size(){return xn(this)},has:yn,add:$a,set:Ha,delete:Ua,clear:Ba,forEach:_n(!1,!0)},n={get(i){return bn(this,i,!0)},get size(){return xn(this,!0)},has(i){return yn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:_n(!0,!1)},r={get(i){return bn(this,i,!0,!0)},get size(){return xn(this,!0)},has(i){return yn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=wn(i,!1,!1),n[i]=wn(i,!0,!1),t[i]=wn(i,!1,!0),r[i]=wn(i,!0,!0)}),[e,n,t,r]}const[Zs,Gs,Qs,el]=Js();function oa(e,t){const n=t?e?el:Qs:e?Gs:Zs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const tl={get:oa(!1,!1)},nl={get:oa(!1,!0)},rl={get:oa(!0,!1)},no=new WeakMap,ro=new WeakMap,ao=new WeakMap,al=new WeakMap;function il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ol(e){return e.__v_skip||!Object.isExtensible(e)?0:il(_s(e))}function sa(e){return Tt(e)?e:la(e,!1,to,tl,no)}function sl(e){return la(e,!1,qs,nl,ro)}function io(e){return la(e,!0,Xs,rl,ao)}function la(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=ol(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return Tt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function Tt(e){return!!(e&&e.__v_isReadonly)}function Hn(e){return!!(e&&e.__v_isShallow)}function oo(e){return Ot(e)||Tt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function so(e){return $n(e,"__v_skip",!0),e}const Qt=e=>V(e)?sa(e):e,fa=e=>V(e)?io(e):e;function lo(e){qe&&we&&(e=U(e),Gi(e.dep||(e.dep=na())))}function fo(e,t){e=U(e);const n=e.dep;n&&Tr(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function rt(e){return ll(e,!1)}function ll(e,t){return se(e)?e:new fl(e,t)}class fl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Qt(t)}get value(){return lo(this),this._value}set value(t){const n=this.__v_isShallow||Hn(t)||Tt(t);t=n?t:U(t),Zt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Qt(t),fo(this))}}function cl(e){return se(e)?e.value:e}const ul={get:(e,t,n)=>cl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function co(e){return Ot(e)?e:new Proxy(e,ul)}class dl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return lo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ml(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new dl(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){er(i,t,n)}return a}function Ee(e,t,n,r){if(j(e)){const i=Je(e,t,n,r);return i&&Bi(i)&&i.catch(o=>{er(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function er(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}pl(e,n,a,r)}function pl(e,t,n,r=!0){console.error(e)}let en=!1,Ir=!1;const oe=[];let Ie=0;const Et=[];let Le=null,ot=0;const uo=Promise.resolve();let ca=null;function hl(e){const t=ca||uo;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=Ie+1,n=oe.length;for(;t<n;){const r=t+n>>>1;tn(oe[r])<e?t=r+1:n=r}return t}function ua(e){(!oe.length||!oe.includes(e,en&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?oe.push(e):oe.splice(gl(e.id),0,e),mo())}function mo(){!en&&!Ir&&(Ir=!0,ca=uo.then(ho))}function vl(e){const t=oe.indexOf(e);t>Ie&&oe.splice(t,1)}function bl(e){M(e)?Et.push(...e):(!Le||!Le.includes(e,e.allowRecurse?ot+1:ot))&&Et.push(e),mo()}function Ya(e,t=en?Ie+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function po(e){if(Et.length){const t=[...new Set(Et)];if(Et.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>tn(n)-tn(r)),ot=0;ot<Le.length;ot++)Le[ot]();Le=null,ot=0}}const tn=e=>e.id==null?1/0:e.id,yl=(e,t)=>{const n=tn(e)-tn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ho(e){Ir=!1,en=!0,oe.sort(yl);const t=Oe;try{for(Ie=0;Ie<oe.length;Ie++){const n=oe[Ie];n&&n.active!==!1&&Je(n,null,14)}}finally{Ie=0,oe.length=0,po(),en=!1,ca=null,(oe.length||Et.length)&&ho()}}function xl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||X;v&&(a=n.map(k=>ee(k)?k.trim():k)),m&&(a=n.map(Or))}let s,l=r[s=mr(t)]||r[s=mr(Me(t))];!l&&i&&(l=r[s=mr(Rt(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function go(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=go(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):ne(o,i),V(e)&&r.set(e,o),o)}function tr(e,t){return!e||!qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Rt(t))||H(e,t))}let ve=null,vo=null;function Un(e){const t=ve;return ve=e,vo=e&&e.type.__scopeId||null,t}function _l(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ti(-1);const i=Un(t);let o;try{o=e(...a)}finally{Un(i),r._d&&ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:E}=e;let D,y;const A=Un(e);try{if(n.shapeFlag&4){const T=a||r;D=Te(d.call(T,T,m,i,k,v,F)),y=l}else{const T=t;D=Te(T.length>1?T(i,{attrs:l,slots:s,emit:c}):T(i,null)),y=t.props?l:wl(l)}}catch(T){Vt.length=0,er(T,e,1),D=ce(mt)}let R=D;if(y&&E!==!1){const T=Object.keys(y),{shapeFlag:B}=R;T.length&&B&7&&(o&&T.some(Gr)&&(y=kl(y,o)),R=It(R,y))}return n.dirs&&(R=It(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,Un(A),D}const wl=e=>{let t;for(const n in e)(n==="class"||n==="style"||qn(n))&&((t||(t={}))[n]=e[n]);return t},kl=(e,t)=>{const n={};for(const r in e)(!Gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Al(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ka(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!tr(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ka(r,o,c):!0:!!o;return!1}function Ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!tr(n,i))return!0}return!1}function Ol({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const El=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):bl(e)}const kn={};function Ct(e,t,n){return bo(e,t,n)}function bo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){var s;const l=Fs()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(se(e)?(c=()=>e.value,d=Hn(e)):Ot(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(T=>Ot(T)||Hn(T)),c=()=>e.map(T=>{if(se(T))return T.value;if(Ot(T))return lt(T);if(j(T))return Je(T,l,2)})):j(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ee(e,l,3,[k])}:c=Oe,t&&r){const T=c;c=()=>lt(T())}let v,k=T=>{v=A.onStop=()=>{Je(T,l,4)}},F;if(rn)if(k=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,k]):c(),a==="sync"){const T=Ef();F=T.__watcherHandles||(T.__watcherHandles=[])}else return Oe;let E=m?new Array(e.length).fill(kn):kn;const D=()=>{if(A.active)if(t){const T=A.run();(r||d||(m?T.some((B,ae)=>Zt(B,E[ae])):Zt(T,E)))&&(v&&v(),Ee(t,l,3,[T,E===kn?void 0:m&&E[0]===kn?[]:E,k]),E=T)}else A.run()};D.allowRecurse=!!t;let y;a==="sync"?y=D:a==="post"?y=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),y=()=>ua(D));const A=new ra(c,y);t?n?D():E=A.run():a==="post"?de(A.run.bind(A),l&&l.suspense):A.run();const R=()=>{A.stop(),l&&l.scope&&Qr(l.scope.effects,A)};return F&&F.push(R),R}function Pl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?yo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=re;Nt(this);const s=bo(a,i.bind(r),n);return o?Nt(o):dt(),s}function yo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))lt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(Jn(e)||At(e))e.forEach(n=>{lt(n,t)});else if(Ki(e))for(const n in e)lt(e[n],t);return e}function bt(e,t){const n=ve;if(n===null)return e;const r=ir(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=X]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Lt(),Ee(l,n,8,[e.el,s,e,t]),jt())}}function Sl(e,t){return j(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Rn=e=>!!e.type.__asyncLoader,xo=e=>e.type.__isKeepAlive;function Tl(e,t){_o(e,"a",t)}function Il(e,t){_o(e,"da",t)}function _o(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(nr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)xo(a.parent.vnode)&&Nl(r,t,n,a),a=a.parent}}function Nl(e,t,n,r){const a=nr(t,e,r,!0);ko(()=>{Qr(r[t],a)},n)}function nr(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Lt(),Nt(n);const s=Ee(t,n,e,o);return dt(),jt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=re)=>(!rn||e==="sp")&&nr(e,(...r)=>t(...r),n),Ml=Ue("bm"),wo=Ue("m"),Fl=Ue("bu"),Rl=Ue("u"),Ll=Ue("bum"),ko=Ue("um"),jl=Ue("sp"),Dl=Ue("rtg"),zl=Ue("rtc");function $l(e,t=re){nr("ec",e,t)}const Ao="components";function Hl(e,t){return Bl(Ao,e,!0,t)||e}const Ul=Symbol.for("v-ndc");function Bl(e,t,n=!0,r=!1){const a=ve||re;if(a){const i=a.type;if(e===Ao){const s=wf(i,!1);if(s&&(s===t||s===Me(t)||s===Gn(Me(t))))return i}const o=Wa(a[e]||i[e],t)||Wa(a.appContext[e],t);return!o&&r?i:o}}function Wa(e,t){return e&&(e[t]||e[Me(t)]||e[Gn(Me(t))])}function Yl(e,t,n,r){let a;const i=n&&n[r];if(M(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Nr=e=>e?Lo(e)?ir(e)||e.proxy:Nr(e.parent):null,Wt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nr(e.parent),$root:e=>Nr(e.root),$emit:e=>e.emit,$options:e=>da(e),$forceUpdate:e=>e.f||(e.f=()=>ua(e.update)),$nextTick:e=>e.n||(e.n=hl.bind(e.proxy)),$watch:e=>Pl.bind(e)}),hr=(e,t)=>e!==X&&!e.__isScriptSetup&&H(e,t),Kl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(hr(r,t))return o[t]=1,r[t];if(a!==X&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==X&&H(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const d=Wt[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&H(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,H(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return hr(a,t)?(a[t]=n,!0):r!==X&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&H(e,o)||hr(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Wt,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Va(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Mr=!0;function Wl(e){const t=da(e),n=e.proxy,r=e.ctx;Mr=!1,t.beforeCreate&&Xa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:E,deactivated:D,beforeDestroy:y,beforeUnmount:A,destroyed:R,unmounted:T,render:B,renderTracked:ae,renderTriggered:ie,errorCaptured:be,serverPrefetch:ge,expose:Fe,inheritAttrs:zt,components:pn,directives:hn,filters:cr}=t;if(c&&Vl(c,r,null),o)for(const Z in o){const K=o[Z];j(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);V(Z)&&(e.data=sa(Z))}if(Mr=!0,i)for(const Z in i){const K=i[Z],tt=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Oe,gn=!j(K)&&j(K.set)?K.set.bind(n):Oe,nt=Ve({get:tt,set:gn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ce=>nt.value=Ce})}if(s)for(const Z in s)Oo(s[Z],r,n,Z);if(l){const Z=j(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Ql(K,Z[K])})}d&&Xa(d,e,"c");function le(Z,K){M(K)?K.forEach(tt=>Z(tt.bind(n))):K&&Z(K.bind(n))}if(le(Ml,m),le(wo,v),le(Fl,k),le(Rl,F),le(Tl,E),le(Il,D),le($l,be),le(zl,ae),le(Dl,ie),le(Ll,A),le(ko,T),le(jl,ge),M(Fe))if(Fe.length){const Z=e.exposed||(e.exposed={});Fe.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:tt=>n[K]=tt})})}else e.exposed||(e.exposed={});B&&e.render===Oe&&(e.render=B),zt!=null&&(e.inheritAttrs=zt),pn&&(e.components=pn),hn&&(e.directives=hn)}function Vl(e,t,n=Oe){M(e)&&(e=Fr(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=Ln(a.from||r,a.default,!0):i=Ln(a.from||r):i=Ln(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Xa(e,t,n){Ee(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const a=r.includes(".")?yo(n,r):()=>n[r];if(ee(e)){const i=t[e];j(i)&&Ct(a,i)}else if(j(e))Ct(a,e.bind(n));else if(V(e))if(M(e))e.forEach(i=>Oo(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Ct(a,i,e)}}function da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Bn(l,c,o,!0)),Bn(l,t,o)),V(t)&&i.set(t,l),l}function Bn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Bn(e,i,n,!0),a&&a.forEach(o=>Bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Xl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Xl={data:qa,props:Ja,emits:Ja,methods:Yt,computed:Yt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Yt,directives:Yt,watch:Jl,provide:qa,inject:ql};function qa(e,t){return t?e?function(){return ne(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function ql(e,t){return Yt(Fr(e),Fr(t))}function Fr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Yt(e,t){return e?ne(Object.create(null),e,t):t}function Ja(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ne(Object.create(null),Va(e),Va(t??{})):t}function Jl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function Eo(){return{app:null,config:{isNativeTag:bs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zl=0;function Gl(e,t){return function(r,a=null){j(r)||(r=ne({},r)),a!=null&&!V(a)&&(a=null);const i=Eo(),o=new Set;let s=!1;const l=i.app={_uid:Zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Cf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ce(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ir(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Yn=l;try{return c()}finally{Yn=null}}};return l}}let Yn=null;function Ql(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Ln(e,t,n=!1){const r=re||ve;if(r||Yn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function ef(e,t,n,r=!1){const a={},i={};$n(i,ar,1),e.propsDefaults=Object.create(null),Co(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:sl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function tf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(tr(e.emitsOptions,v))continue;const k=t[v];if(l)if(H(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const F=Me(v);a[F]=Rr(l,s,F,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{Co(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=Rt(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Rr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function Co(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const c=t[l];let d;a&&H(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:tr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Rr(a,l,m,c[m],e,!H(c,m))}}return o}function Rr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Nt(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}function Po(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,k]=Po(m,t,!0);ne(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,kt),kt;if(M(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Za(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Me(d);if(Za(m)){const v=i[d],k=o[m]=M(v)||j(v)?{type:v}:ne({},v);if(k){const F=ei(Boolean,k.type),E=ei(String,k.type);k[0]=F>-1,k[1]=E<0||F<E,(F>-1||H(k,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Za(e){return e[0]!=="$"}function Ga(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qa(e,t){return Ga(e)===Ga(t)}function ei(e,t){return M(t)?t.findIndex(n=>Qa(n,e)):j(t)&&Qa(t,e)?0:-1}const So=e=>e[0]==="_"||e==="$stable",ma=e=>M(e)?e.map(Te):[Te(e)],nf=(e,t,n)=>{if(t._n)return t;const r=_l((...a)=>ma(t(...a)),n);return r._c=!1,r},To=(e,t,n)=>{const r=e._ctx;for(const a in e){if(So(a))continue;const i=e[a];if(j(i))t[a]=nf(a,i,r);else if(i!=null){const o=ma(i);t[a]=()=>o}}},Io=(e,t)=>{const n=ma(t);e.slots.default=()=>n},rf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),$n(t,"_",n)):To(t,e.slots={})}else e.slots={},t&&Io(e,t);$n(e.slots,ar,1)},af=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,To(t,a)),o=t}else t&&(Io(e,t),o={default:1});if(i)for(const s in a)!So(s)&&!(s in o)&&delete a[s]};function Lr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,k)=>Lr(v,t&&(M(t)?t[k]:t),n,r,a));return}if(Rn(r)&&!a)return;const i=r.shapeFlag&4?ir(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,H(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),j(l))Je(l,s,12,[o,d]);else{const v=ee(l),k=se(l);if(v||k){const F=()=>{if(e.f){const E=v?H(m,l)?m[l]:d[l]:l.value;a?M(E)&&Qr(E,i):M(E)?E.includes(i)||E.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,de(F,n)):F()}}}const de=Cl;function of(e){return sf(e)}function sf(e,t){const n=Er();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Oe,insertStaticContent:F}=e,E=(f,u,p,g=null,h=null,_=null,O=!1,x=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ut(f,u)&&(g=vn(f),Ce(f,h,_,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case rr:D(f,u,p,g);break;case mt:y(f,u,p,g);break;case gr:f==null&&A(u,p,g,O);break;case _e:pn(f,u,p,g,h,_,O,x,w);break;default:P&1?B(f,u,p,g,h,_,O,x,w):P&6?hn(f,u,p,g,h,_,O,x,w):(P&64||P&128)&&b.process(f,u,p,g,h,_,O,x,w,gt)}I!=null&&h&&Lr(I,f&&f.ref,_,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},y=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},A=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},R=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},T=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},B=(f,u,p,g,h,_,O,x,w)=>{O=O||u.type==="svg",f==null?ae(u,p,g,h,_,O,x,w):ge(f,u,h,_,O,x,w)},ae=(f,u,p,g,h,_,O,x)=>{let w,b;const{type:I,props:P,shapeFlag:N,transition:L,dirs:$}=f;if(w=f.el=o(f.type,_,P&&P.is,P),N&8?d(w,f.children):N&16&&be(f.children,w,null,g,h,_&&I!=="foreignObject",O,x),$&&at(f,null,g,"created"),ie(w,f,f.scopeId,O,g),P){for(const Y in P)Y!=="value"&&!Mn(Y)&&i(w,Y,null,P[Y],_,f.children,g,h,Re);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Se(b,g,f)}$&&at(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&L&&!L.persisted;W&&L.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||W||$)&&de(()=>{b&&Se(b,g,f),W&&L.enter(w),$&&at(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let _=0;_<g.length;_++)k(f,g[_]);if(h){let _=h.subTree;if(u===_){const O=h.vnode;ie(f,O,O.scopeId,O.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,_,O,x,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=x?We(f[b]):Te(f[b]);E(null,I,u,p,g,h,_,O,x)}},ge=(f,u,p,g,h,_,O)=>{const x=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=u;w|=f.patchFlag&16;const P=f.props||X,N=u.props||X;let L;p&&it(p,!1),(L=N.onVnodeBeforeUpdate)&&Se(L,p,u,f),I&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const $=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,x,p,g,$,_):O||K(f,u,x,null,p,g,$,_,!1),w>0){if(w&16)zt(x,u,P,N,p,g,h);else if(w&2&&P.class!==N.class&&i(x,"class",null,N.class,h),w&4&&i(x,"style",P.style,N.style,h),w&8){const W=u.dynamicProps;for(let Y=0;Y<W.length;Y++){const Q=W[Y],ye=P[Q],vt=N[Q];(vt!==ye||Q==="value")&&i(x,Q,ye,vt,h,f.children,p,g,Re)}}w&1&&f.children!==u.children&&d(x,u.children)}else!O&&b==null&&zt(x,u,P,N,p,g,h);((L=N.onVnodeUpdated)||I)&&de(()=>{L&&Se(L,p,u,f),I&&at(u,f,p,"updated")},g)},Fe=(f,u,p,g,h,_,O)=>{for(let x=0;x<u.length;x++){const w=f[x],b=u[x],I=w.el&&(w.type===_e||!Ut(w,b)||w.shapeFlag&70)?m(w.el):p;E(w,b,I,null,g,h,_,O,!0)}},zt=(f,u,p,g,h,_,O)=>{if(p!==g){if(p!==X)for(const x in p)!Mn(x)&&!(x in g)&&i(f,x,p[x],null,O,u.children,h,_,Re);for(const x in g){if(Mn(x))continue;const w=g[x],b=p[x];w!==b&&x!=="value"&&i(f,x,b,w,O,u.children,h,_,Re)}"value"in g&&i(f,"value",p.value,g.value)}},pn=(f,u,p,g,h,_,O,x,w)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:L}=u;L&&(x=x?x.concat(L):L),f==null?(r(b,p,g),r(I,p,g),be(u.children,p,I,h,_,O,x,w)):P>0&&P&64&&N&&f.dynamicChildren?(Fe(f.dynamicChildren,N,p,h,_,O,x),(u.key!=null||h&&u===h.subTree)&&No(f,u,!0)):K(f,u,p,I,h,_,O,x,w)},hn=(f,u,p,g,h,_,O,x,w)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,O,w):cr(u,p,g,h,_,O,w):Sa(f,u,w)},cr=(f,u,p,g,h,_,O)=>{const x=f.component=vf(f,g,h);if(xo(f)&&(x.ctx.renderer=gt),bf(x),x.asyncDep){if(h&&h.registerDep(x,le),!f.el){const w=x.subTree=ce(mt);y(null,w,u,p)}return}le(x,f,u,p,h,_,O)},Sa=(f,u,p)=>{const g=u.component=f.component;if(Al(f,u,p))if(g.asyncDep&&!g.asyncResolved){Z(g,u,p);return}else g.next=u,vl(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,_,O)=>{const x=()=>{if(f.isMounted){let{next:I,bu:P,u:N,parent:L,vnode:$}=f,W=I,Y;it(f,!1),I?(I.el=$.el,Z(f,I,O)):I=$,P&&Fn(P),(Y=I.props&&I.props.onVnodeBeforeUpdate)&&Se(Y,L,I,$),it(f,!0);const Q=pr(f),ye=f.subTree;f.subTree=Q,E(ye,Q,m(ye.el),vn(ye),f,h,_),I.el=Q.el,W===null&&Ol(f,Q.el),N&&de(N,h),(Y=I.props&&I.props.onVnodeUpdated)&&de(()=>Se(Y,L,I,$),h)}else{let I;const{el:P,props:N}=u,{bm:L,m:$,parent:W}=f,Y=Rn(u);if(it(f,!1),L&&Fn(L),!Y&&(I=N&&N.onVnodeBeforeMount)&&Se(I,W,u),it(f,!0),P&&dr){const Q=()=>{f.subTree=pr(f),dr(P,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=pr(f);E(null,Q,p,g,f,h,_),u.el=Q.el}if($&&de($,h),!Y&&(I=N&&N.onVnodeMounted)){const Q=u;de(()=>Se(I,W,Q),h)}(u.shapeFlag&256||W&&Rn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new ra(x,()=>ua(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,it(f,!0),b()},Z=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,tf(f,u.props,g,p),af(f,u.children,p),Lt(),Ya(),jt()},K=(f,u,p,g,h,_,O,x,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:L}=u;if(N>0){if(N&128){gn(b,P,p,g,h,_,O,x,w);return}else if(N&256){tt(b,P,p,g,h,_,O,x,w);return}}L&8?(I&16&&Re(b,h,_),P!==b&&d(p,P)):I&16?L&16?gn(b,P,p,g,h,_,O,x,w):Re(b,h,_,!0):(I&8&&d(p,""),L&16&&be(P,p,g,h,_,O,x,w))},tt=(f,u,p,g,h,_,O,x,w)=>{f=f||kt,u=u||kt;const b=f.length,I=u.length,P=Math.min(b,I);let N;for(N=0;N<P;N++){const L=u[N]=w?We(u[N]):Te(u[N]);E(f[N],L,p,null,h,_,O,x,w)}b>I?Re(f,h,_,!0,!1,P):be(u,p,g,h,_,O,x,w,P)},gn=(f,u,p,g,h,_,O,x,w)=>{let b=0;const I=u.length;let P=f.length-1,N=I-1;for(;b<=P&&b<=N;){const L=f[b],$=u[b]=w?We(u[b]):Te(u[b]);if(Ut(L,$))E(L,$,p,null,h,_,O,x,w);else break;b++}for(;b<=P&&b<=N;){const L=f[P],$=u[N]=w?We(u[N]):Te(u[N]);if(Ut(L,$))E(L,$,p,null,h,_,O,x,w);else break;P--,N--}if(b>P){if(b<=N){const L=N+1,$=L<I?u[L].el:g;for(;b<=N;)E(null,u[b]=w?We(u[b]):Te(u[b]),p,$,h,_,O,x,w),b++}}else if(b>N)for(;b<=P;)Ce(f[b],h,_,!0),b++;else{const L=b,$=b,W=new Map;for(b=$;b<=N;b++){const pe=u[b]=w?We(u[b]):Te(u[b]);pe.key!=null&&W.set(pe.key,b)}let Y,Q=0;const ye=N-$+1;let vt=!1,Na=0;const $t=new Array(ye);for(b=0;b<ye;b++)$t[b]=0;for(b=L;b<=P;b++){const pe=f[b];if(Q>=ye){Ce(pe,h,_,!0);continue}let Pe;if(pe.key!=null)Pe=W.get(pe.key);else for(Y=$;Y<=N;Y++)if($t[Y-$]===0&&Ut(pe,u[Y])){Pe=Y;break}Pe===void 0?Ce(pe,h,_,!0):($t[Pe-$]=b+1,Pe>=Na?Na=Pe:vt=!0,E(pe,u[Pe],p,null,h,_,O,x,w),Q++)}const Ma=vt?lf($t):kt;for(Y=Ma.length-1,b=ye-1;b>=0;b--){const pe=$+b,Pe=u[pe],Fa=pe+1<I?u[pe+1].el:g;$t[b]===0?E(null,Pe,p,Fa,h,_,O,x,w):vt&&(Y<0||b!==Ma[Y]?nt(Pe,p,Fa,2):Y--)}}},nt=(f,u,p,g,h=null)=>{const{el:_,type:O,transition:x,children:w,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){O.move(f,u,p,gt);return}if(O===_e){r(_,u,p);for(let P=0;P<w.length;P++)nt(w[P],u,p,g);r(f.anchor,u,p);return}if(O===gr){R(f,u,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(_),r(_,u,p),de(()=>x.enter(_),h);else{const{leave:P,delayLeave:N,afterLeave:L}=x,$=()=>r(_,u,p),W=()=>{P(_,()=>{$(),L&&L()})};N?N(_,$,W):W()}else r(_,u,p)},Ce=(f,u,p,g=!1,h=!1)=>{const{type:_,props:O,ref:x,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:N}=f;if(x!=null&&Lr(x,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const L=I&1&&N,$=!Rn(f);let W;if($&&(W=O&&O.onVnodeBeforeUnmount)&&Se(W,u,f),I&6)vs(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}L&&at(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,gt,g):b&&(_!==_e||P>0&&P&64)?Re(b,u,p,!1,!0):(_===_e&&P&384||!h&&I&16)&&Re(w,u,p),g&&Ta(f)}($&&(W=O&&O.onVnodeUnmounted)||L)&&de(()=>{W&&Se(W,u,f),L&&at(f,null,u,"unmounted")},p)},Ta=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===_e){gs(p,g);return}if(u===gr){T(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:O,delayLeave:x}=h,w=()=>O(p,_);x?x(f.el,_,w):w()}else _()},gs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},vs=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:O,um:x}=f;g&&Fn(g),h.stop(),_&&(_.active=!1,Ce(O,f,u,p)),x&&de(x,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,g=!1,h=!1,_=0)=>{for(let O=_;O<f.length;O++)Ce(f[O],u,p,g,h)},vn=f=>f.shapeFlag&6?vn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ia=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):E(u._vnode||null,f,u,null,null,null,p),Ya(),po(),u._vnode=f},gt={p:E,um:Ce,m:nt,r:Ta,mt:cr,mc:be,pc:K,pbc:Fe,n:vn,o:e};let ur,dr;return t&&([ur,dr]=t(gt)),{render:Ia,hydrate:ur,createApp:Gl(Ia,ur)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function No(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||No(o,s)),s.type===rr&&(s.el=o.el)}}function lf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const ff=e=>e.__isTeleport,_e=Symbol.for("v-fgt"),rr=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),Vt=[];let ke=null;function xt(e=!1){Vt.push(ke=e?null:[])}function cf(){Vt.pop(),ke=Vt[Vt.length-1]||null}let nn=1;function ti(e){nn+=e}function Mo(e){return e.dynamicChildren=nn>0?ke||kt:null,cf(),nn>0&&ke&&ke.push(e),e}function Ht(e,t,n,r,a,i){return Mo(z(e,t,n,r,a,i,!0))}function uf(e,t,n,r,a){return Mo(ce(e,t,n,r,a,!0))}function jr(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const ar="__vInternal",Fo=({key:e})=>e??null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||se(e)||j(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fo(t),ref:t&&jn(t),scopeId:vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),nn>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const ce=df;function df(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ul)&&(e=mt),jr(e)){const s=It(e,t,!0);return n&&pa(s,n),nn>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(kf(e)&&(e=e.__vccOpts),t){t=mf(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Gt(s)),V(l)&&(oo(l)&&!M(l)&&(l=ne({},l)),t.style=ta(l))}const o=ee(e)?1:El(e)?128:ff(e)?64:V(e)?4:j(e)?2:0;return z(e,t,n,r,a,o,i,!0)}function mf(e){return e?oo(e)||ar in e?ne({},e):e:null}function It(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?pf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Fo(s),ref:t&&t.ref?n&&a?M(a)?a.concat(jn(t)):[a,jn(t)]:jn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ro(e=" ",t=0){return ce(rr,null,e,t)}function ni(e="",t=!1){return t?(xt(),uf(mt,null,e)):ce(mt,null,e)}function Te(e){return e==null||typeof e=="boolean"?ce(mt):M(e)?ce(_e,null,e.slice()):typeof e=="object"?We(e):ce(rr,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ar in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Ro(t)]):n=8);e.children=t,e.shapeFlag|=n}function pf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Gt([t.class,r.class]));else if(a==="style")t.style=ta([t.style,r.style]);else if(qn(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const hf=Eo();let gf=0;function vf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||hf,i={uid:gf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Po(r,a),emitsOptions:go(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=xl.bind(null,i),e.ce&&e.ce(i),i}let re=null,ha,yt,ri="__VUE_INSTANCE_SETTERS__";(yt=Er()[ri])||(yt=Er()[ri]=[]),yt.push(e=>re=e),ha=e=>{yt.length>1?yt.forEach(t=>t(e)):yt[0](e)};const Nt=e=>{ha(e),e.scope.on()},dt=()=>{re&&re.scope.off(),ha(null)};function Lo(e){return e.vnode.shapeFlag&4}let rn=!1;function bf(e,t=!1){rn=t;const{props:n,children:r}=e.vnode,a=Lo(e);ef(e,n,a,t),rf(e,r);const i=a?yf(e,t):void 0;return rn=!1,i}function yf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=so(new Proxy(e.ctx,Kl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?_f(e):null;Nt(e),Lt();const i=Je(r,e,0,[e.props,a]);if(jt(),dt(),Bi(i)){if(i.then(dt,dt),t)return i.then(o=>{ai(e,o,t)}).catch(o=>{er(o,e,0)});e.asyncDep=i}else ai(e,i,t)}else jo(e,t)}function ai(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=co(t)),jo(e,n)}let ii;function jo(e,t,n){const r=e.type;if(!e.render){if(!t&&ii&&!r.render){const a=r.template||da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=ii(a,c)}}e.render=r.render||Oe}Nt(e),Lt(),Wl(e),jt(),dt()}function xf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function _f(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return xf(e)},slots:e.slots,emit:e.emit,expose:t}}function ir(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(co(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function wf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function kf(e){return j(e)&&"__vccOpts"in e}const Ve=(e,t)=>ml(e,t,rn);function Af(e,t,n){const r=arguments.length;return r===2?V(t)&&!M(t)?jr(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),ce(e,t,n))}const Of=Symbol.for("v-scx"),Ef=()=>Ln(Of),Cf="3.3.4",Pf="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,oi=st&&st.createElement("template"),Sf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(Pf,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r?`<svg>${e}</svg>`:e;const s=oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Tf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function If(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&Dr(r,i,"");for(const i in n)Dr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const si=/\s*!important$/;function Dr(e,t,n){if(M(n))n.forEach(r=>Dr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Nf(e,t);si.test(n)?e.setProperty(Rt(r),n.replace(si,""),"important"):e[r]=n}}const li=["Webkit","Moz","ms"],vr={};function Nf(e,t){const n=vr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return vr[t]=r;r=Gn(r);for(let a=0;a<li.length;a++){const i=li[a]+r;if(i in e)return vr[t]=i}return t}const fi="http://www.w3.org/1999/xlink";function Mf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n);else{const i=Ss(t);n==null||i&&!Wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ff(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Wi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Xe(e,t,n,r){e.addEventListener(t,n,r)}function Rf(e,t,n,r){e.removeEventListener(t,n,r)}function Lf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=jf(t);if(r){const c=i[t]=$f(r,a);Xe(e,s,c,l)}else o&&(Rf(e,s,o,l),i[t]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function jf(e){let t;if(ci.test(e)){t={};let r;for(;r=e.match(ci);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rt(e.slice(2)),t]}let br=0;const Df=Promise.resolve(),zf=()=>br||(Df.then(()=>br=0),br=Date.now());function $f(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Hf(r,n.value),t,5,[r])};return n.value=e,n.attached=zf(),n}function Hf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ui=/^on[a-z]/,Uf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Tf(e,r,a):t==="style"?If(e,n,r):qn(t)?Gr(t)||Lf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bf(e,t,r,a))?Ff(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Mf(e,t,r,a))};function Bf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ui.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ui.test(t)&&ee(n)?!1:t in e}const Mt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>Fn(t,n):t};function Yf(e){e.target.composing=!0}function di(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yr={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Mt(a);const i=r||a.props&&a.props.type==="number";Xe(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Or(s)),e._assign(s)}),n&&Xe(e,"change",()=>{e.value=e.value.trim()}),t||(Xe(e,"compositionstart",Yf),Xe(e,"compositionend",di),Xe(e,"change",di))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Mt(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Or(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Kf={deep:!0,created(e,t,n){e._assign=Mt(n),Xe(e,"change",()=>{const r=e._modelValue,a=Do(e),i=e.checked,o=e._assign;if(M(r)){const s=Vi(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Jn(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(zo(e,i))})},mounted:mi,beforeUpdate(e,t,n){e._assign=Mt(n),mi(e,t,n)}};function mi(e,{value:t,oldValue:n},r){e._modelValue=t,M(t)?e.checked=Vi(t,r.props.value)>-1:Jn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=St(t,zo(e,!0)))}const pi={created(e,{value:t},n){e.checked=St(t,n.props.value),e._assign=Mt(n),Xe(e,"change",()=>{e._assign(Do(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Mt(r),t!==n&&(e.checked=St(t,r.props.value))}};function Do(e){return"_value"in e?e._value:e.value}function zo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Wf=["ctrl","shift","alt","meta"],Vf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Wf.some(n=>e[`${n}Key`]&&!t.includes(n))},Xf=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Vf[t[a]];if(i&&i(n,t))return}return e(n,...r)},qf=ne({patchProp:Uf},Sf);let hi;function Jf(){return hi||(hi=of(qf))}const Zf=(...e)=>{const t=Jf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Gf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Gf(e){return ee(e)?document.querySelector(e):e}const Qf=z("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),ec=z("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),tc=z("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,400;1,500;1,600&display=swap",rel:"stylesheet"},null,-1),nc=z("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",integrity:"sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",crossorigin:"anonymous",referrerpolicy:"no-referrer"},null,-1),rc={class:"app"},ac={class:"greeting"},ic={class:"title"},oc={class:"container"},sc={class:"create-todo"},lc=z("h3",null,"CREATE A TODO",-1),fc=z("h4",null,"Type or click the mic to speak",-1),cc=["onSubmit"],uc=["textContent"],dc=z("h4",null,"Pick a category",-1),mc={class:"options"},pc=z("span",{class:"bubble business"},null,-1),hc=z("div",null,"Business",-1),gc=z("span",{class:"bubble personal"},null,-1),vc=z("div",null,"Personal",-1),bc=z("input",{type:"submit",value:"Add todo"},null,-1),yc={class:"todo-list"},xc=z("h3",null,"TODO LIST",-1),_c={class:"list",id:"todo-list"},wc=["onUpdate:modelValue"],kc={class:"todo-content"},Ac=["onUpdate:modelValue"],Oc={class:"actions"},Ec=["onClick"],Cc={__name:"App",setup(e){const t=rt(""),n=rt(!1),r=rt(!1),a=window.SpeechRecognition||window.webkitSpeechRecognition,i=new a,o=rt([]),s=rt(""),l=rt(""),c=rt(null),d=Ve(()=>o.value.sort((F,E)=>F.createdAt-E.createdAt));Ct(s,F=>{localStorage.setItem("name",F)}),Ct(o,F=>{localStorage.setItem("todos",JSON.stringify(F))},{deep:!0});const m=()=>{l.value.trim()===""||c.value===null||o.value.push({content:l.value,category:c.value,done:!1,editable:!1,createdAt:new Date().getTime()})},v=F=>{o.value=o.value.filter(E=>E!==F)};wo(()=>{s.value=localStorage.getItem("name")||"",o.value=JSON.parse(localStorage.getItem("todos"))||[],i.continuous=!0,i.interimResults=!0,i.onstart=()=>{console.log("Speech recog started"),r.value=!0,n.value=!0},i.onend=()=>{console.log("Speech recog stopped"),r.value=!1,n.value=!1},i.onresult=F=>{const E=Array.from(F.results).map(D=>D[0]).map(D=>D.transcript).join("");t.value=E,l.value=t.value}});const k=()=>{n.value?i.stop():i.start()};return(F,E)=>{const D=Hl("font-awesome-icon");return xt(),Ht(_e,null,[Qf,ec,tc,nc,z("main",rc,[z("section",ac,[z("h2",ic,[Ro(" Hi, "),bt(z("input",{type:"text",id:"name",placeholder:"Name here","onUpdate:modelValue":E[0]||(E[0]=y=>s.value=y)},null,512),[[yr,s.value]])])]),z("div",oc,[z("section",sc,[lc,fc,z("form",{id:"new-todo-form",onSubmit:Xf(m,["prevent"])},[bt(z("input",{type:"text",name:"content",id:"content",placeholder:"e.g. make a video","onUpdate:modelValue":E[1]||(E[1]=y=>l.value=y)},null,512),[[yr,l.value]]),z("div",{class:"transcript",textContent:Is(t.value),hidden:""},null,8,uc),dc,z("div",mc,[z("label",null,[bt(z("input",{type:"radio",name:"category",id:"category1",value:"business","onUpdate:modelValue":E[2]||(E[2]=y=>c.value=y)},null,512),[[pi,c.value]]),pc,hc]),z("label",null,[bt(z("input",{type:"radio",name:"category",id:"category2",value:"personal","onUpdate:modelValue":E[3]||(E[3]=y=>c.value=y)},null,512),[[pi,c.value]]),gc,vc])]),bc],40,cc)]),r.value?ni("",!0):(xt(),Ht("button",{key:0,class:"icon-voice",onClick:E[4]||(E[4]=y=>k())},[ce(D,{icon:"fa-solid fa-microphone-lines",size:"2xl",style:{color:"#cfcfc4"}})])),r.value?(xt(),Ht("button",{key:1,class:"icon-voice",onClick:E[5]||(E[5]=y=>k())},[ce(D,{icon:"fa-solid fa-microphone-lines-slash",size:"2xl",style:{color:"#cfcfc4"}})])):ni("",!0)]),z("section",yc,[xc,z("div",_c,[(xt(!0),Ht(_e,null,Yl(d.value,y=>(xt(),Ht("div",{class:Gt(`todo-item ${y.done&&"done"}`)},[z("label",null,[bt(z("input",{type:"checkbox","onUpdate:modelValue":A=>y.done=A},null,8,wc),[[Kf,y.done]]),z("span",{class:Gt(`bubble ${y.category=="business"?"business":"personal"}`)},null,2)]),z("div",kc,[bt(z("input",{type:"text","onUpdate:modelValue":A=>y.content=A},null,8,Ac),[[yr,y.content]])]),z("div",Oc,[z("button",{class:"delete",onClick:A=>v(y)},"Delete",8,Ec)])],2))),256))])])])],64)}}};function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){"@babel/helpers - typeof";return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function Pc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sc(e,t,n){return t&&vi(e.prototype,t),n&&vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ga(e,t){return Ic(e)||Mc(e,t)||$o(e,t)||Rc()}function un(e){return Tc(e)||Nc(e)||$o(e)||Fc()}function Tc(e){if(Array.isArray(e))return zr(e)}function Ic(e){if(Array.isArray(e))return e}function Nc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function $o(e,t){if(e){if(typeof e=="string")return zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zr(e,t)}}function zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},va={},Ho={},Uo=null,Bo={mark:bi,measure:bi};try{typeof window<"u"&&(va=window),typeof document<"u"&&(Ho=document),typeof MutationObserver<"u"&&(Uo=MutationObserver),typeof performance<"u"&&(Bo=performance)}catch{}var Lc=va.navigator||{},yi=Lc.userAgent,xi=yi===void 0?"":yi,Ge=va,J=Ho,_i=Uo,An=Bo;Ge.document;var Be=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Yo=~xi.indexOf("MSIE")||~xi.indexOf("Trident/"),On,En,Cn,Pn,Sn,ze="___FONT_AWESOME___",$r=16,Ko="fa",Wo="svg-inline--fa",pt="data-fa-i2svg",Hr="data-fa-pseudo-element",jc="data-fa-pseudo-element-pending",ba="data-prefix",ya="data-icon",wi="fontawesome-i2svg",Dc="async",zc=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),q="classic",G="sharp",xa=[q,G];function dn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var an=dn((On={},te(On,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(On,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),On)),on=dn((En={},te(En,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(En,G,{solid:"fass",regular:"fasr",light:"fasl"}),En)),sn=dn((Cn={},te(Cn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(Cn,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Cn)),$c=dn((Pn={},te(Pn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(Pn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pn)),Hc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Xo="fa-layers-text",Uc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bc=dn((Sn={},te(Sn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(Sn,G,{900:"fass",400:"fasr",300:"fasl"}),Sn)),qo=[1,2,3,4,5,6,7,8,9,10],Yc=qo.concat([11,12,13,14,15,16,17,18,19,20]),Kc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ln=new Set;Object.keys(on[q]).map(ln.add.bind(ln));Object.keys(on[G]).map(ln.add.bind(ln));var Wc=[].concat(xa,un(ln),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(qo.map(function(e){return"".concat(e,"x")})).concat(Yc.map(function(e){return"w-".concat(e)})),Xt=Ge.FontAwesomeConfig||{};function Vc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var qc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qc.forEach(function(e){var t=ga(e,2),n=t[0],r=t[1],a=Xc(Vc(n));a!=null&&(Xt[r]=a)})}var Jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ko,replacementClass:Wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xt.familyPrefix&&(Xt.cssPrefix=Xt.familyPrefix);var Ft=C(C({},Jo),Xt);Ft.autoReplaceSvg||(Ft.observeMutations=!1);var S={};Object.keys(Jo).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Ft[e]=n,qt.forEach(function(r){return r(S)})},get:function(){return Ft[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Ft.cssPrefix=t,qt.forEach(function(n){return n(S)})},get:function(){return Ft.cssPrefix}});Ge.FontAwesomeConfig=S;var qt=[];function Jc(e){return qt.push(e),function(){qt.splice(qt.indexOf(e),1)}}var Ke=$r,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zc(e){if(!(!e||!Be)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Gc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fn(){for(var e=12,t="";e-- >0;)t+=Gc[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _a(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zo(e[n]),'" ')},"").trim()}function or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wa(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function eu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function tu(e){var t=e.transform,n=e.width,r=n===void 0?$r:n,a=e.height,i=a===void 0?$r:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Yo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var nu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var e=Ko,t=Wo,n=S.cssPrefix,r=S.replacementClass,a=nu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function xr(){S.autoAddCss&&!ki&&(Zc(Go()),ki=!0)}var ru={mixout:function(){return{dom:{css:Go,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},$e=Ge||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var Ae=$e[ze],Qo=[],au=function e(){J.removeEventListener("DOMContentLoaded",e),Wn=1,Qo.map(function(t){return t()})},Wn=!1;Be&&(Wn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Wn||J.addEventListener("DOMContentLoaded",au));function iu(e){Be&&(Wn?setTimeout(e,0):Qo.push(e))}function mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Zo(e):"<".concat(t," ").concat(Qc(r),">").concat(i.map(mn).join(""),"</").concat(t,">")}function Ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ou=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},_r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ou(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function su(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ur(e){var t=su(e);return t.length===1?t[0].toString(16):null}function lu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,Oi(t)):Ae.styles[e]=C(C({},Ae.styles[e]||{}),i),e==="fas"&&Br("fa",t)}var Tn,In,Nn,_t=Ae.styles,fu=Ae.shims,cu=(Tn={},te(Tn,q,Object.values(sn[q])),te(Tn,G,Object.values(sn[G])),Tn),ka=null,es={},ts={},ns={},rs={},as={},uu=(In={},te(In,q,Object.keys(an[q])),te(In,G,Object.keys(an[G])),In);function du(e){return~Wc.indexOf(e)}function mu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!du(a)?a:null}var is=function(){var t=function(i){return _r(_t,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};es=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ts=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),as=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _t||S.autoFetchSvg,r=_r(fu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ns=r.names,rs=r.unicodes,ka=sr(S.styleDefault,{family:S.familyDefault})};Jc(function(e){ka=sr(e.styleDefault,{family:S.familyDefault})});is();function Aa(e,t){return(es[e]||{})[t]}function pu(e,t){return(ts[e]||{})[t]}function ct(e,t){return(as[e]||{})[t]}function os(e){return ns[e]||{prefix:null,iconName:null}}function hu(e){var t=rs[e],n=Aa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ka}var Oa=function(){return{prefix:null,iconName:null,rest:[]}};function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=an[r][e],i=on[r][e]||on[r][a],o=e in Ae.styles?e:null;return i||o||null}var Ei=(Nn={},te(Nn,q,Object.keys(sn[q])),te(Nn,G,Object.keys(sn[G])),Nn);function lr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,q,"".concat(S.cssPrefix,"-").concat(q)),te(t,G,"".concat(S.cssPrefix,"-").concat(G)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return Ei[q].includes(c)}))&&(s=q),(e.includes(i[G])||e.some(function(c){return Ei[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=mu(S.cssPrefix,d);if(_t[d]?(d=cu[s].includes(d)?$c[s][d]:d,o=d,c.prefix=d):uu[s].indexOf(d)>-1?(o=d,c.prefix=sr(d,{family:s})):m?c.iconName=m:d!==S.replacementClass&&d!==i[q]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?os(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_t.far&&_t.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},Oa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(_t.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var gu=function(){function e(){Pc(this,e),this.definitions={}}return Sc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Br(s,o[s]);var l=sn[q][s];l&&Br(l,o[s]),is()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ci=[],wt={},Pt={},vu=Object.keys(Pt);function bu(e,t){var n=t.mixoutsTo;return Ci=e,wt={},Object.keys(Pt).forEach(function(r){vu.indexOf(r)===-1&&delete Pt[r]}),Ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Kn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){wt[o]||(wt[o]=[]),wt[o].push(i[o])})}r.provides&&r.provides(Pt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Pt[e]?Pt[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ct(n,t)||t,Ai(ss.definitions,n,t)||Ai(Ae.styles,n,t)}var ss=new gu,yu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,ht("noAuto")},xu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ht("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,iu(function(){wu({autoReplaceSvgRoot:n}),ht("watch",t)})}},_u={icon:function(t){if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=sr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Hc))){var a=lr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ct(i,t)||t}}}},he={noAuto:yu,config:S,dom:xu,parse:_u,library:ss,findIconDefinition:Kr,toHtml:mn},wu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ae.styles).length>0||S.autoFetchSvg)&&Be&&S.autoReplaceSvg&&he.dom.i2svg({node:r})};function fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ku(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(wa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=or(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Au(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Ea(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,E=F.width,D=F.height,y=a==="fak",A=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),R={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(D)})},T=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/D*16*.0625,"em")}:{};k&&(R.attributes[pt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||fn())},children:[l]}),delete R.attributes.title);var B=C(C({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},T),m.styles)}),ae=r.found&&n.found?He("generateAbstractMask",B)||{children:[],attributes:{}}:He("generateAbstractIcon",B)||{children:[],attributes:{}},ie=ae.children,be=ae.attributes;return B.children=ie,B.attributes=be,s?Au(B):ku(B)}function Pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=C({},o.styles);wa(a)&&(d.transform=tu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=or(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Ou(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wr=Ae.styles;function Wr(e){var t=e[0],n=e[1],r=e.slice(4),a=ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Eu={found:!1,width:512,height:512};function Cu(e,t){!Vo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&wr[t]&&wr[t][e]){var o=wr[t][e];return r(Wr(o))}Cu(e,t),r(C(C({},Eu),{},{icon:S.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var Si=function(){},Xr=S.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Si,measure:Si},Kt='FA "6.4.0"',Pu=function(t){return Xr.mark("".concat(Kt," ").concat(t," begins")),function(){return ls(t)}},ls=function(t){Xr.mark("".concat(Kt," ").concat(t," ends")),Xr.measure("".concat(Kt," ").concat(t),"".concat(Kt," ").concat(t," begins"),"".concat(Kt," ").concat(t," ends"))},Ca={begin:Pu,end:ls},Dn=function(){};function Ti(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Su(e){var t=e.getAttribute?e.getAttribute(ba):null,n=e.getAttribute?e.getAttribute(ya):null;return t&&n}function Tu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Iu(){if(S.autoReplaceSvg===!0)return zn.replace;var e=zn[S.autoReplaceSvg];return e||zn.replace}function Nu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Mu(e){return J.createElement(e)}function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Nu:Mu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(fs(o,{ceFn:r}))}),a}function Fu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(fs(a),n)}),n.getAttribute(pt)===null&&S.keepOriginalSource){var r=J.createComment(Fu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~_a(n).indexOf(S.replacementClass))return zn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return mn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function Ii(e){e()}function cs(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Ii;S.mutateApproach===Dc&&(r=Ge.requestAnimationFrame||Ii),r(function(){var a=Iu(),i=Ca.begin("mutate");e.map(a),i(),n()})}}var Pa=!1;function us(){Pa=!0}function qr(){Pa=!1}var Vn=null;function Ni(e){if(_i&&S.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Vn=new _i(function(c){if(!Pa){var d=Qe();Dt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~Kc.indexOf(m.attributeName))if(m.attributeName==="class"&&Su(m.target)){var v=lr(_a(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(ba,k||d),F&&m.target.setAttribute(ya,F)}else Tu(m.target)&&a(m.target)})}}),Be&&Vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ru(){Vn&&Vn.disconnect()}function Lu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ju(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=lr(_a(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=pu(a.prefix,e.innerText)||Aa(a.prefix,Ur(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Du(e){var t=Dt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||fn()):(t["aria-hidden"]="true",t.focusable="false")),t}function zu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ju(e),r=n.iconName,a=n.prefix,i=n.rest,o=Du(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?Lu(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var $u=Ae.styles;function ds(e){var t=S.autoReplaceSvg==="nest"?Mi(e,{styleParser:!1}):Mi(e);return~t.extra.classes.indexOf(Xo)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var et=new Set;xa.map(function(e){et.add("fa-".concat(e))});Object.keys(an[q]).map(et.add.bind(et));Object.keys(an[G]).map(et.add.bind(et));et=un(et);function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(wi,"-").concat(m))},a=function(m){return n.remove("".concat(wi,"-").concat(m))},i=S.autoFetchSvg?et:xa.map(function(d){return"fa-".concat(d)}).concat(Object.keys($u));i.includes("fa")||i.push("fa");var o=[".".concat(Xo,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Dt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),c=s.reduce(function(d,m){try{var v=ds(m);v&&d.push(v)}catch(k){Vo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){cs(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ds(e).then(function(n){n&&cs([n],t)})}function Uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var Bu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,E=n.classes,D=E===void 0?[]:E,y=n.attributes,A=y===void 0?{}:y,R=n.styles,T=R===void 0?{}:R;if(t){var B=t.prefix,ae=t.iconName,ie=t.icon;return fr(C({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(v?A["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(F||fn()):(A["aria-hidden"]="true",A.focusable="false")),Ea({icons:{main:Wr(ie),mask:l?Wr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ae,transform:C(C({},Ne),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:A,styles:T,classes:D}})})}},Yu={mixout:function(){return{icon:Uu(Bu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fi,n.nodeCallback=Hu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Fi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([Vr(a,s),d.iconName?Vr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var D=ga(E,2),y=D[0],A=D[1];k([n,Ea({icons:{main:y,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=or(s);l.length>0&&(a.style=l);var c;return wa(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return fr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(un(i)).join(" ")},children:o}]})}}}},Wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return fr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Ou({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(un(s))}})})}}}},Vu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return fr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:C(C({},Ne),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(S.cssPrefix,"-layers-text")].concat(un(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Yo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Xu=new RegExp('"',"ug"),Ri=[1105920,1112319];function qu(e){var t=e.replace(Xu,""),n=lu(t,0),r=n>=Ri[0]&&n<=Ri[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ur(a?t[0]:t),isSecondary:r||a}}function Li(e,t){var n="".concat(jc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Dt(e.children),o=i.filter(function(ie){return ie.getAttribute(Hr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Uc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?on[v][l[2].toLowerCase()]:Bc[v][c],F=qu(m),E=F.value,D=F.isSecondary,y=l[0].startsWith("FontAwesome"),A=Aa(k,E),R=A;if(y){var T=hu(E);T.iconName&&T.prefix&&(A=T.iconName,k=T.prefix)}if(A&&!D&&(!o||o.getAttribute(ba)!==k||o.getAttribute(ya)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var B=zu(),ae=B.extra;ae.attributes[Hr]=t,Vr(A,k).then(function(ie){var be=Ea(C(C({},B),{},{icons:{main:ie,mask:Oa()},prefix:k,iconName:R,extra:ae,watchable:!0})),ge=J.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Fe){return mn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ju(e){return Promise.all([Li(e,"::before"),Li(e,"::after")])}function Zu(e){return e.parentNode!==document.head&&!~zc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ji(e){if(Be)return new Promise(function(t,n){var r=Dt(e.querySelectorAll("*")).filter(Zu).map(Ju),a=Ca.begin("searchPseudoElements");us(),Promise.all(r).then(function(){a(),qr(),t()}).catch(function(){a(),qr(),n()})})}var Gu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&ji(a)}}},Di=!1,Qu={mixout:function(){return{dom:{unwatch:function(){us(),Di=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Yr("mutationObserverCallbacks",{}))},noAuto:function(){Ru()},watch:function(n){var r=n.observeMutationsRoot;Di?qr():Ni(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ed={mixout:function(){return{parse:{transform:function(n){return zi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=zi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},k.outer),children:[{tag:"g",attributes:C({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),k.path)}]}]}}}},kr={x:0,y:0,width:"100%",height:"100%"};function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function td(e){return e.tag==="g"?e.children:[e]}var nd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?lr(a.split(" ").map(function(o){return o.trim()})):Oa();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=eu({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:C(C({},kr),{},{fill:"white"})},E=d.children?{children:d.children.map($i)}:{},D={tag:"g",attributes:C({},k.inner),children:[$i(C({tag:d.tag,attributes:C(C({},d.attributes),k.path)},E))]},y={tag:"g",attributes:C({},k.outer),children:[D]},A="mask-".concat(s||fn()),R="clip-".concat(s||fn()),T={tag:"mask",attributes:C(C({},kr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:td(v)},T]};return r.push(B,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(A,")")},kr)}),{children:r,attributes:a}}}},rd={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ad={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},id=[ru,Yu,Ku,Wu,Vu,Gu,Qu,ed,nd,rd,ad];bu(id,{mixoutsTo:he});he.noAuto;he.config;var od=he.library;he.dom;var Jr=he.parse;he.findIconDefinition;he.toHtml;var sd=he.icon;he.layer;he.text;he.counter;function Hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xn(e){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ld(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function fd(e,t){if(e==null)return{};var n=ld(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ms={exports:{}};(function(e){(function(t){var n=function(y,A,R){if(!c(A)||m(A)||v(A)||k(A)||l(A))return A;var T,B=0,ae=0;if(d(A))for(T=[],ae=A.length;B<ae;B++)T.push(n(y,A[B],R));else{T={};for(var ie in A)Object.prototype.hasOwnProperty.call(A,ie)&&(T[y(ie,R)]=n(y,A[ie],R))}return T},r=function(y,A){A=A||{};var R=A.separator||"_",T=A.split||/(?=[A-Z])/;return y.split(T).join(R)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,R){return R?R.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var A=a(y);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(y,A){return r(y,A).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},E=function(y,A){var R=A&&"process"in A?A.process:A;return typeof R!="function"?y:function(T,B){return R(T,y,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,A){return n(E(a,A),y)},decamelizeKeys:function(y,A){return n(E(o,A),y,A)},pascalizeKeys:function(y,A){return n(E(i,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(cd)})(ms);var ud=ms.exports,dd=["class","style"];function md(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ud.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function pd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ps(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ps(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=pd(d);break;case"style":l.style=md(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=fd(n,dd);return Af(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var hs=!1;try{hs=!0}catch{}function hd(){if(!hs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ar(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function gd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(e){if(e&&Xn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Jr.icon)return Jr.icon(e);if(e===null)return null;if(Xn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var vd=Sl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ve(function(){return Ui(t.icon)}),i=Ve(function(){return Ar("classes",gd(t))}),o=Ve(function(){return Ar("transform",typeof t.transform=="string"?Jr.transform(t.transform):t.transform)}),s=Ve(function(){return Ar("mask",Ui(t.mask))}),l=Ve(function(){return sd(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ct(l,function(d){if(!d)return hd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Ve(function(){return l.value?ps(l.value.abstract[0],{},r):null});return function(){return c.value}}}),bd={prefix:"fas",iconName:"microphone-lines-slash",icon:[640,512,["microphone-alt-slash"],"f539","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24 16c0 21.2-5.1 41.1-14.2 58.7L416 300.8V256H358.9l-34.5-27c2.9-3.1 7-5 11.6-5h80V192H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z"]},yd={prefix:"fas",iconName:"microphone-lines",icon:[384,512,[127897,"microphone-alt"],"f3c9","M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96zM320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"]},xd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};od.add(xd,yd,bd);Zf(Cc).component("font-awesome-icon",vd).mount("#app");
