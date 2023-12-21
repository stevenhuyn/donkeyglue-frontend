var Fe=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var x=(e,t,n)=>(Fe(e,t,"read from private field"),n?n.call(e):t.get(e)),K=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},q=(e,t,n,r)=>(Fe(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ft=(e,t)=>e===t,de=Symbol("solid-proxy"),he={equals:ft};let Ve=tt;const k=1,ge=2,Xe={owned:null,cleanups:null,context:null,owner:null};var h=null;let xe=null,m=null,C=null,L=null,we=0;function ze(e,t){const n=m,r=h,s=e.length===0,o=t===void 0?r:t,i=s?Xe:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=s?e:()=>e(()=>E(()=>be(i)));h=i,m=null;try{return G(l,!0)}finally{m=n,h=r}}function N(e,t){t=t?Object.assign({},he,t):he;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),et(n,s));return[Ze.bind(n),r]}function $(e,t,n){const r=ke(e,t,!1,k);re(r)}function dt(e,t,n){Ve=bt;const r=ke(e,t,!1,k);(!n||!n.render)&&(r.user=!0),L?L.push(r):re(r)}function v(e,t,n){n=n?Object.assign({},he,n):he;const r=ke(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,re(r),Ze.bind(r)}function E(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Ye(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(o){o=!1;return}const c=E(()=>t(l,s,i));return s=l,c}}function ht(e){dt(()=>E(e))}function Te(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function gt(){return h}function mt(e,t){const n=h,r=m;h=e,m=null;try{return G(t,!0)}catch(s){Be(s)}finally{h=n,m=r}}function yt(e){const t=m,n=h;return Promise.resolve().then(()=>{m=t,h=n;let r;return G(e,!1),m=h=null,r?r.done:void 0})}function Qe(e,t){const n=Symbol("context");return{id:n,Provider:vt(n),defaultValue:e}}function je(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function _e(e){const t=v(e),n=v(()=>$e(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Ze(){if(this.sources&&this.state)if(this.state===k)re(this);else{const e=C;C=null,G(()=>ye(this),!1),C=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function et(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&G(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=xe&&xe.running;i&&xe.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?C.push(o):L.push(o),o.observers&&nt(o)),i||(o.state=k)}if(C.length>1e6)throw C=[],new Error},!1)),t}function re(e){if(!e.fn)return;be(e);const t=h,n=m,r=we;m=h=e,pt(e,e.value,r),m=n,h=t}function pt(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(be),e.owned=null),e.updatedAt=n+1,Be(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?et(e,r):e.value=r,e.updatedAt=n)}function ke(e,t,n,r=k,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==Xe&&(h.owned?h.owned.push(o):h.owned=[o]),o}function me(e){if(e.state===0)return;if(e.state===ge)return ye(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<we);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)re(e);else if(e.state===ge){const r=C;C=null,G(()=>ye(e,t[0]),!1),C=r}}function G(e,t){if(C)return e();let n=!1;t||(C=[]),L?n=!0:L=[],we++;try{const r=e();return wt(n),r}catch(r){n||(L=null),C=null,Be(r)}}function wt(e){if(C&&(tt(C),C=null),e)return;const t=L;L=null,t.length&&G(()=>Ve(t),!1)}function tt(e){for(let t=0;t<e.length;t++)me(e[t])}function bt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:me(r)}for(t=0;t<n;t++)me(e[t])}function ye(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===k?r!==t&&(!r.updatedAt||r.updatedAt<we)&&me(r):s===ge&&ye(r,t)}}}function nt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ge,n.pure?C.push(n):L.push(n),n.observers&&nt(n))}}function be(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)be(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function St(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Be(e,t=h){throw St(e)}function $e(e){if(typeof e=="function"&&!e.length)return $e(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=$e(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function vt(e,t){return function(r){let s;return $(()=>s=E(()=>(h.context={...h.context,[e]:r.value},_e(()=>r.children))),void 0),s}}function S(e,t){return E(()=>e(t||{}))}function ue(){return!0}const Re={get(e,t,n){return t===de?n:e.get(t)},has(e,t){return t===de?!0:e.has(t)},set:ue,deleteProperty:ue,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ue,deleteProperty:ue}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)?e:{}}function xt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Oe(...e){let t=!1;for(let o=0;o<e.length;o++){const i=e[o];t=t||!!i&&de in i,e[o]=typeof i=="function"?(t=!0,v(i)):i}if(t)return new Proxy({get(o){for(let i=e.length-1;i>=0;i--){const l=Ae(e[i])[o];if(l!==void 0)return l}},has(o){for(let i=e.length-1;i>=0;i--)if(o in Ae(e[i]))return!0;return!1},keys(){const o=[];for(let i=0;i<e.length;i++)o.push(...Object.keys(Ae(e[i])));return[...new Set(o)]}},Re);const n={},r={},s=new Set;for(let o=e.length-1;o>=0;o--){const i=e[o];if(!i)continue;const l=Object.getOwnPropertyNames(i);for(let c=0,u=l.length;c<u;c++){const a=l[c];if(a==="__proto__"||a==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,a);if(!s.has(a))f.get?(s.add(a),Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:xt.bind(r[a]=[f.get.bind(i)])})):(f.value!==void 0&&s.add(a),n[a]=f.value);else{const d=r[a];d?f.get?d.push(f.get.bind(i)):f.value!==void 0&&d.push(()=>f.value):n[a]===void 0&&(n[a]=f.value)}}}return n}function At(e,...t){if(de in e){const s=new Set(t.length>1?t.flat():t[0]),o=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Re));return o.push(new Proxy({get(i){return s.has(i)?void 0:e[i]},has(i){return s.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!s.has(i))}},Re)),o}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,s),i=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,c=0;for(const u of t)u.includes(s)&&(l=!0,i?r[c][s]=o.value:Object.defineProperty(r[c],s,o)),++c;l||(i?n[s]=o.value:Object.defineProperty(n,s,o))}return[...r,n]}const Ct=e=>`Stale read from <${e}>.`;function Ie(e){const t=e.keyed,n=v(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return v(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?E(()=>s(t?r:()=>{if(!E(n))throw Ct("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Pt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],$t=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Pt]),Rt=new Set(["innerHTML","textContent","innerText","children"]),Ot=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Et=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Lt(e,t){const n=Et[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Nt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function jt(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,c=t[s-1].nextSibling,u=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const a=o<r?l?n[l-1].nextSibling:n[o-l]:c;for(;l<o;)e.insertBefore(n[l++],a)}else if(o===l)for(;i<s;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!u){u=new Map;let f=l;for(;f<o;)u.set(n[f],f++)}const a=u.get(t[i]);if(a!=null)if(l<a&&a<o){let f=i,d=1,p;for(;++f<s&&f<o&&!((p=u.get(t[f]))==null||p!==a+d);)d++;if(d>a-l){const b=t[i];for(;l<a;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Ke="_$DX_DELEGATE";function _t(e,t,n,r={}){let s;return ze(o=>{s=o,t===document?e():U(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function O(e,t,n){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},o=t?()=>E(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function se(e,t=window.document){const n=t[Ke]||(t[Ke]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Mt))}}function Ee(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function kt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Z(e,t){t==null?e.removeAttribute("class"):e.className=t}function Le(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function Bt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,i;for(o=0,i=s.length;o<i;o++){const l=s[o];!l||l==="undefined"||t[l]||(qe(e,l,!1),delete n[l])}for(o=0,i=r.length;o<i;o++){const l=r[o],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(qe(e,l,!0),n[l]=c)}return n}function It(e,t,n){if(!t)return n?Ee(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function Ut(e,t={},n,r){const s={};return r||$(()=>s.children=V(e,t.children,s.children)),$(()=>t.ref&&t.ref(e)),$(()=>Dt(e,t,n,!0,s,!0)),s}function U(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,n);$(s=>V(e,t(),s,n),r)}function Dt(e,t,n,r,s={},o=!1){t||(t={});for(const i in s)if(!(i in t)){if(i==="children")continue;s[i]=We(e,i,null,s[i],n,o)}for(const i in t){if(i==="children"){r||V(e,t.children);continue}const l=t[i];s[i]=We(e,i,l,s[i],n,o)}}function Gt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function qe(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function We(e,t,n,r,s,o){let i,l,c,u,a;if(t==="style")return It(e,n,r);if(t==="classList")return Bt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);r&&e.removeEventListener(f,r),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=Nt.has(f);if(!d&&r){const p=Array.isArray(r)?r[0]:r;e.removeEventListener(f,p)}(d||n)&&(Le(e,f,n,d),d&&se([f]))}else if(t.slice(0,5)==="attr:")Ee(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(c=Rt.has(t))||!s&&((u=Lt(t,e.tagName))||(l=$t.has(t)))||(i=e.nodeName.includes("-")))a&&(t=t.slice(5),l=!0),t==="class"||t==="className"?Z(e,n):i&&!l&&!c?e[Gt(t)]=n:e[u||t]=n;else{const f=s&&t.indexOf(":")>-1&&Tt[t.split(":")[0]];f?kt(e,f,t,n):Ee(e,Ot[t]||t,n)}return n}function Mt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=W(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=W(e,n,r);else{if(o==="function")return $(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(Ne(l,t,n,s))return $(()=>n=V(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=W(e,n,r),i)return n}else c?n.length===0?He(e,l,r):jt(e,n,l):(n&&W(e),He(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=W(e,n,r,t);W(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Ne(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let l=t[o],c=n&&n[o],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Ne(e,l,c)||s;else if(u==="function")if(r){for(;typeof l=="function";)l=l();s=Ne(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else e.push(l),s=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return s}function He(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function W(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const c=l.parentNode===e;!o&&!i?c?e.replaceChild(s,l):e.insertBefore(s,n):c&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Ft=!1;function Kt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function qt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Wt(e){try{return document.querySelector(e)}catch{return null}}function Ht(e,t){const n=Wt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Jt(e,t,n,r){let s=!1;const o=l=>typeof l=="string"?{value:l}:l,i=qt(N(o(e()),{equals:(l,c)=>l.value===c.value}),void 0,l=>(!s&&t(l),l));return n&&Te(n((l=e())=>{s=!0,i[1](o(l)),s=!1})),{signal:i,utils:r}}function Vt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function Xt(){return Jt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Ht(window.location.hash.slice(1),n)},e=>Kt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function zt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:c=>{c&&(n=!0),l.navigate(s,o)}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}const Yt=/^(?:[a-z0-9]+:)?\/\//i,Qt=/^\/+|(\/)\/+$/g;function I(e,t=!1){const n=e.replace(Qt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function fe(e,t,n){if(Yt.test(t))return;const r=I(e),s=n&&I(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+I(t,!o)}function Zt(e,t){if(e==null)throw new Error(t);return e}function rt(e,t){return I(e).replace(/\/*(\*.*)?$/g,"")+I(t)}function en(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function tn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return l=>{const c=l.split("/").filter(Boolean),u=c.length-i;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:i?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const p=o[d],b=c[d],w=p[0]===":",B=w?p.slice(1):p;if(w&&Ce(b,f(B)))a.params[B]=b;else if(w||!Ce(b,p))return null;a.path+=`/${b}`}if(s){const d=u?c.slice(-u).join("/"):"";if(Ce(d,f(s)))a.params[s]=d;else return null}return a}}function Ce(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function nn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function st(e){const t=new Map,n=gt();return new Proxy({},{get(r,s){return t.has(s)||mt(n,()=>t.set(s,v(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ot(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return ot(r).reduce((o,i)=>[...o,...s.map(l=>l+i)],[])}const rn=100,it=Qe(),Se=Qe(),ve=()=>Zt(je(it),"Make sure your app is wrapped in a <Router />");let ee;const Ue=()=>ee||je(Se)||ve().base,sn=e=>{const t=Ue();return v(()=>t.resolvePath(e()))},on=e=>{const t=ve();return v(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},ln=()=>ve().location;function cn(e,t="",n){const{component:r,data:s,children:o}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,element:r?()=>S(r,{}):()=>{const{element:c}=e;return c===void 0&&n?S(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return lt(e.path).reduce((c,u)=>{for(const a of ot(u)){const f=rt(t,a),d=i?f:f.split("/*",1)[0];c.push({...l,originalPath:a,pattern:d,matcher:tn(d,!i,e.matchFilters)})}return c},[])}function an(e,t=0){return{routes:e,score:nn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function lt(e){return Array.isArray(e)?e:[e]}function ct(e,t="",n,r=[],s=[]){const o=lt(e);for(let i=0,l=o.length;i<l;i++){const c=o[i];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=cn(c,t,n);for(const a of u){r.push(a);const f=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!f)ct(c.children,a.pattern,n,r,s);else{const d=an([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((i,l)=>l.score-i.score)}function un(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function fn(e,t){const n=new URL("http://sar"),r=v(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=v(()=>r().pathname),o=v(()=>r().search,!0),i=v(()=>r().hash),l=v(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:st(Ye(o,()=>en(r())))}}function dn(e,t="",n,r){const{signal:[s,o],utils:i={}}=Vt(e),l=i.parsePath||(y=>y),c=i.renderPath||(y=>y),u=i.beforeLeave||zt(),a=fe("",t),f=void 0;if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&o({value:a,replace:!0,scroll:!1});const[d,p]=N(!1),b=async y=>{p(!0);try{await yt(y)}finally{p(!1)}},[w,B]=N(s().value),[M,ie]=N(s().state),le=fn(w,M),z=[],F={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(y){return fe(a,y)}};if(n)try{ee=F,F.data=n({data:void 0,params:{},location:le,navigate:Me(F)})}finally{ee=void 0}function Ge(y,g,A){E(()=>{if(typeof g=="number"){g&&(i.go?u.confirm(g,A)&&i.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:ce,resolve:ae,scroll:T,state:Y}={replace:!1,resolve:!0,scroll:!0,...A},j=ae?y.resolvePath(g):fe("",g);if(j===void 0)throw new Error(`Path '${g}' is not a routable path`);if(z.length>=rn)throw new Error("Too many redirects");const Q=w();if((j!==Q||Y!==M())&&!Ft){if(u.confirm(j,A)){const ut=z.push({value:Q,replace:ce,scroll:T,state:M()});b(()=>{B(j),ie(Y)}).then(()=>{z.length===ut&&at({value:j,state:Y})})}}})}function Me(y){return y=y||je(Se)||F,(g,A)=>Ge(y,g,A)}function at(y){const g=z[0];g&&((y.value!==g.value||y.state!==g.state)&&o({...y,replace:g.replace,scroll:g.scroll}),z.length=0)}$(()=>{const{value:y,state:g}=s();E(()=>{y!==w()&&b(()=>{B(y),ie(g)})})});{let y=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const A=g.composedPath().find(Q=>Q instanceof Node&&Q.nodeName.toUpperCase()==="A");if(!A||!A.hasAttribute("link"))return;const ce=A.href;if(A.target||!ce&&!A.hasAttribute("state"))return;const ae=(A.getAttribute("rel")||"").split(/\s+/);if(A.hasAttribute("download")||ae&&ae.includes("external"))return;const T=new URL(ce);if(T.origin!==window.location.origin||a&&T.pathname&&!T.pathname.toLowerCase().startsWith(a.toLowerCase()))return;const Y=l(T.pathname+T.search+T.hash),j=A.getAttribute("state");g.preventDefault(),Ge(F,Y,{resolve:!1,replace:A.hasAttribute("replace"),scroll:!A.hasAttribute("noscroll"),state:j&&JSON.parse(j)})};var Wn=y;se(["click"]),document.addEventListener("click",y),Te(()=>document.removeEventListener("click",y))}return{base:F,out:f,location:le,isRouting:d,renderPath:c,parsePath:l,navigatorFactory:Me,beforeLeave:u}}function hn(e,t,n,r,s){const{base:o,location:i,navigatorFactory:l}=e,{pattern:c,element:u,preload:a,data:f}=r().route,d=v(()=>r().path);a&&a();const p={parent:t,pattern:c,get child(){return n()},path:d,params:s,data:t.data,outlet:u,resolvePath(b){return fe(o.path(),b,d())}};if(f)try{ee=p,p.data=f({data:t.data,params:s,location:i,navigate:l(p)})}finally{ee=void 0}return p}const gn=O("<a link>"),mn=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,i=t||Xt(),l=dn(i,r,s);return S(it.Provider,{value:l,get children(){return e.children}})},yn=e=>{const t=ve(),n=Ue(),r=_e(()=>e.children),s=v(()=>ct(r(),rt(n.pattern,e.base||""),pn)),o=v(()=>un(s(),t.location.pathname)),i=st(()=>{const a=o(),f={};for(let d=0;d<a.length;d++)Object.assign(f,a[d].params);return f});t.out&&t.out.matches.push(o().map(({route:a,path:f,params:d})=>({originalPath:a.originalPath,pattern:a.pattern,path:f,params:d})));const l=[];let c;const u=v(Ye(o,(a,f,d)=>{let p=f&&a.length===f.length;const b=[];for(let w=0,B=a.length;w<B;w++){const M=f&&f[w],ie=a[w];d&&M&&ie.route.key===M.route.key?b[w]=d[w]:(p=!1,l[w]&&l[w](),ze(le=>{l[w]=le,b[w]=hn(t,b[w-1]||n,()=>u()[w+1],()=>o()[w],i)}))}return l.splice(a.length).forEach(w=>w()),d&&p?d:(c=b[0],b)}));return S(Ie,{get when(){return u()&&c},keyed:!0,children:a=>S(Se.Provider,{value:a,get children(){return a.outlet()}})})},Pe=e=>{const t=_e(()=>e.children);return Oe(e,{get children(){return t()}})},pn=()=>{const e=Ue();return S(Ie,{get when(){return e.child},keyed:!0,children:t=>S(Se.Provider,{value:t,get children(){return t.outlet()}})})};function Je(e){e=Oe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=At(e,["href","state","class","activeClass","inactiveClass","end"]),n=sn(()=>e.href),r=on(n),s=ln(),o=v(()=>{const i=n();if(i===void 0)return!1;const l=I(i.split(/[?#]/,1)[0]).toLowerCase(),c=I(s.pathname).toLowerCase();return e.end?l===c:c.startsWith(l)});return(()=>{const i=gn();return Ut(i,Oe(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o(),[e.activeClass]:o(),...t.classList}},get"aria-current"(){return o()?"page":void 0}}),!1,!1),i})()}var X=(e=>(e.RedOperative="RedOperative",e.RedSpymaster="RedSpymaster",e))(X||{}),P=(e=>(e.Red="Red",e.Blue="Blue",e.Assassin="Assassin",e.Bystander="Bystander",e.Hidden="Hidden",e))(P||{});function H(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}const oe=window.location.host.includes("donkeyglue")?new URL("https://donkeyglue-backend-production.up.railway.app"):new URL("http://localhost:3000"),wn=async e=>{const t=new URL("/game",oe);return await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({role:e})}).then(r=>r.json()).then(r=>r.game_id)},bn=async e=>{const t=new URL(`/game/${e}`,oe);return new EventSource(t)},Sn=async e=>{const t=new URL(`/game/start/${e}`,oe);return(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"}})).ok},vn=async(e,t)=>{const n=new URL(`/clue/${e}`,oe);return(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok},xn=async(e,t)=>{const n=new URL(`/guess/${e}`,oe);return(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok};var J,te,ne,R,_;const pe=class pe{constructor(){K(this,te,N(null));K(this,ne,N(null));K(this,R,null);K(this,_,null)}get gameState(){return x(this,te)[0]}get role(){return x(this,ne)[0]}get setRole(){return x(this,ne)[1]}get setGameState(){return x(this,te)[1]}static Instance(){return x(this,J)||q(this,J,new pe),x(this,J)}reset(){var t;this.setGameState(null),this.setRole(null),q(this,R,null),(t=x(this,_))==null||t.close(),q(this,_,null)}async initialise(){this.reset(),await new Promise(r=>setTimeout(r,200));const n=new URLSearchParams(window.location.search).get("role");n&&(q(this,R,await wn(n)),q(this,_,await bn(x(this,R))),this.setRole(n),x(this,_)&&(x(this,_).onmessage=r=>{const s=JSON.parse(r.data);this.setGameState(s.gameState)}))}async start(){x(this,R)&&Sn(x(this,R))}async makeGuess(t){x(this,R)&&xn(x(this,R),t)}async provideClue(t){x(this,R)&&vn(x(this,R),t)}};J=new WeakMap,te=new WeakMap,ne=new WeakMap,R=new WeakMap,_=new WeakMap,K(pe,J,void 0);let D=pe;const An=O('<div class="flex flex-col items-center justify-center"><div class="grid grid-cols-5 gap-4">'),Cn=O("<div>"),Pn=()=>{const e=D.Instance();return(()=>{const t=An(),n=t.firstChild;return U(n,()=>{var r;return(r=e.gameState())==null?void 0:r.board.map((s,o)=>S($n,{get phase(){var i;return(i=e.gameState())==null?void 0:i.phase},get word(){return s.word},get guessed(){return s.guessed},get identity(){return s.identity},get role(){return e.role()}}))}),t})()},$n=e=>{const t=D.Instance(),{word:n,guessed:r,identity:s,role:o}=e,i=()=>{n&&t.makeGuess({guess:n})},l=()=>{var u,a;return((a=(u=t.gameState())==null?void 0:u.phase)==null?void 0:a.type)==="Guess"?"cursor-pointer":"cursor-not-allowed"},c=()=>{if(o===X.RedOperative)return H(s===P.Assassin&&"bg-gray-400",s===P.Red&&"bg-red-200",s===P.Blue&&"bg-blue-200",s===P.Bystander&&"bg-orange-200",s===P.Hidden&&"bg-gray-200");if(o===X.RedSpymaster)return H(r&&s===P.Assassin&&"bg-gray-400 text-black",r&&s===P.Red&&"bg-red-200 text-black",r&&s===P.Blue&&"bg-blue-200 text-black",r&&s===P.Bystander&&"bg-orange-200 text-black",!r&&s===P.Assassin&&"bg-gray-600 text-white font-medium",!r&&s===P.Red&&"bg-gray-200 text-red-600",!r&&s===P.Blue&&"bg-gray-200 text-blue-600",!r&&s===P.Bystander&&"bg-gray-200 text-black-600")};return(()=>{const u=Cn();return u.$$click=i,U(u,n),$(()=>Z(u,H("w-full p-4 text-center rounded text-black border border-black select-none","font-light",l(),c()))),u})()};se(["click"]);const Rn=O('<div class="join join-horizontal"><button>-</button><div class="join-item bg-base-200 px-3 w-7 flex justify-center items-center z-10"><span class="select-none"></span></div><button>+'),On=e=>{const t=D.Instance(),{count:n,setCount:r,decrement:s,increment:o}=e,i=()=>{var u;let l=(u=t.gameState())==null?void 0:u.board;if(!l)return 1;let c=l.filter(a=>a.identity===P.Red).length;return r(Math.min(n(),c)),c};return(()=>{const l=Rn(),c=l.firstChild,u=c.nextSibling,a=u.firstChild,f=u.nextSibling;return Le(c,"click",s,!0),U(a,n),Le(f,"click",o,!0),$(d=>{const p=H("join-item btn w-11",n()<=1&&"btn-disabled"),b=H("join-item btn w-11",n()>=i()&&"btn-disabled");return p!==d._v$&&Z(c,d._v$=p),b!==d._v$2&&Z(f,d._v$2=b),d},{_v$:void 0,_v$2:void 0}),l})()};se(["click"]);var De=(e=>(e.Red="Red",e.Blue="Blue",e))(De||{});const En=O("<h2>"),Ln=()=>{const e=D.Instance(),t=()=>{var r;return Tn((r=e.gameState())==null?void 0:r.phase)},n=()=>{var r;return Nn((r=e.gameState())==null?void 0:r.phase,e.role())};return(()=>{const r=En();return U(r,n),$(()=>Z(r,H("font-light text-xl m-6",t()))),r})()},Nn=(e,t)=>e?e.type==="Clue"?`${e.team} Spymaster ${t===X.RedSpymaster?"(You)":""} to give a Clue`:e.type==="Guess"?`${e.team} Operative ${t===X.RedOperative?"(You)":""} to Guess - Clue: ${e.clue.word} - Remaining ${e.clue.remaining}`:"Game Ended":"Loading",Tn=e=>e?e.type==="Clue"||e.type==="Guess"?e.team===De.Red?"text-red-600":"text-blue-600":"Game Ended":"",jn=O('<h1 class="font-light text-4xl m-6">Welcome to Donkey Glue'),_n=O('<input type="text" placeholder="Single Clue Word" class="m-10 input input-bordered w-full max-w-xs" enterkeyhint="send">'),kn=O('<button class="btn mx-10">Submit'),Bn=()=>{const[e,t]=N(1),[n,r]=N(""),s=D.Instance();ht(()=>{s.initialise().then(()=>{console.log("Initialised"),s.start()})}),Te(()=>{s.reset()});const o=()=>{var u;let c=(u=s.gameState())==null?void 0:u.phase;return(c==null?void 0:c.type)==="Clue"&&(c==null?void 0:c.team)===De.Red},i=()=>!(n().length===0||/[^a-zA-Z]/.test(n())),l=()=>{s.provideClue({word:n(),count:e()})};return[jn(),S(Ln,{}),S(Pn,{}),S(Ie,{get when(){return s.role()===X.RedSpymaster},get children(){return[(()=>{const c=_n();return c.$$input=u=>r(u.currentTarget.value),$(()=>c.disabled=!o()),$(()=>c.value=n()),c})(),S(On,{decrement:()=>t(c=>c-1),increment:()=>t(c=>c+1),setCount:t,count:e}),(()=>{const c=kn();return c.$$click=l,$(()=>c.disabled=!o()||!i()),c})()]}})]};se(["input","click"]);const In=O('<h1 class="font-light text-4xl m-6">Welcome to Donkey Glue'),Un=O('<h2 class="font-light text-2xl m-8">Choose your Role'),Dn=O("<div>"),Gn=()=>[In(),Un(),(()=>{const e=Dn();return U(e,S(Je,{role:"button",class:"btn mx-3",href:"/game?role=RedSpymaster",children:"Red Spymaster"}),null),U(e,S(Je,{role:"button",class:"btn mx-3",href:"/game?role=RedOperative",children:"Red Operative"}),null),e})()],Mn=O('<h1 class="font-light text-4xl m-6">404 Not Found'),Fn=()=>Mn(),Kn=()=>S(yn,{get children(){return[S(Pe,{path:"/",component:Gn}),S(Pe,{path:"/game",component:Bn}),S(Pe,{path:"/*",component:Fn})]}}),qn=document.getElementById("root");_t(()=>S(mn,{get children(){return S(Kn,{})}}),qn);