(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{MHnU:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o=n("q1tI"),r=n.n(o),i=(n("lfCk"),n("yBGC")),s=n("sEfC"),a=n.n(s),c=n("PlF/"),d=n("srL5"),l=n("Jql3");const u=function({children:e}){const[t,n]=Object(o.useState)(Object(d.a)().matches),i=Object(o.useCallback)(a()((()=>{t!==Object(d.a)().matches&&n(!t)}),40,{trailing:!0,leading:!0,maxWait:40}),[t]);return Object(o.useEffect)((()=>{n(Object(d.a)().matches)}),[]),r.a.createElement(c.a.Provider,{value:{isNavigationCollapsed:t}},r.a.createElement(l.a,{event:"resize",handler:i}),e)};var m=n("rCox"),v=n("MneB");const f=Object(o.createContext)(void 0);function h({children:e}){const[t,n]=Object(o.useState)([]),i=Object(o.useCallback)((e=>{n((t=>[...t,e]))}),[]),s=Object(o.useCallback)((e=>{let t=!0;return n((n=>{const o=[...n],r=o.indexOf(e);return-1===r?t=!1:o.splice(r,1),o})),t}),[]),a=Object(o.useMemo)((()=>({trapFocusList:t,add:i,remove:s})),[i,t,s]);return r.a.createElement(f.Provider,{value:a},e)}var E=n("BLvk");function p(e,t){return r.a.createElement("div",{id:"PolarisPortalsContainer",ref:t})}const b=Object(o.forwardRef)(p);function L({children:e,container:t}){const[n,i]=Object(o.useState)(null),s=null!=t?t:n,a=Object(o.useMemo)((()=>({container:s})),[s]);return r.a.createElement(E.a.Provider,{value:a},e,t?null:r.a.createElement(b,{ref:i}))}var y=n("tsxB");const w=/\[(.*?)\]|(\w+)/g;function k(e,t,n){if(null==e)return;const o=Array.isArray(t)?t:function(e){const t=[];let n;for(;n=w.exec(e);){const[,e,o]=n;t.push(e||o)}return t}(t);let r=e;for(let i=0;i<o.length;i++){const e=r[o[i]];if(void 0===e)return n;r=e}return r}var g=n("Vcon");function O(e,t){const n=Array.isArray(e)?[...e]:Object(g.a)({},e);for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(C(t[o])&&C(n[o])?n[o]=O(n[o],t[o]):n[o]=t[o]);return n}function C(e){return null!==e&&"object"===typeof e}const j=/{([^}]*)}/g;class A{constructor(e){this.translation={},this.translation=Array.isArray(e)?function(...e){let t={};for(const n of e)t=O(t,n);return t}(...e.slice().reverse()):e}translate(e,t){const n=k(this.translation,e,"");return n?t?n.replace(j,(n=>{const o=n.substring(1,n.length-1);if(void 0===t[o]){const n=JSON.stringify(t);throw new Error(`Error in translation for key '${e}'. No replacement found for key '${o}'. The following replacements were passed: '${n}'`)}return t[o]})):n:""}translationKeyExists(e){return Boolean(k(this.translation,e))}}const N=Object(o.createContext)(void 0),M="undefined"===typeof window||"undefined"===typeof document,P="data-lock-scrolling",x="data-lock-scrolling-wrapper";let T=0;class S{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(M)return;const{scrollLocks:e}=this,{body:t}=document,n=t.firstElementChild;0===e?(t.removeAttribute(P),n&&n.removeAttribute(x),window.scroll(0,T),this.locked=!1):e>0&&!this.locked&&(T=window.pageYOffset,t.setAttribute(P,""),n&&(n.setAttribute(x,""),n.scrollTop=T),this.locked=!0)}resetScrollPosition(){T=0}}var F=n("GZNA"),G=n("p1Fn"),B=n("+Nxv");const D=Object(o.createContext)(void 0);class _ extends o.Component{constructor(e){super(e),this.stickyManager=void 0,this.scrollLockManager=void 0,this.uniqueIdFactory=void 0,this.stickyManager=new G.a,this.scrollLockManager=new S,this.uniqueIdFactory=new v.a(v.b);const{i18n:t,linkComponent:n}=this.props;this.state={link:n,intl:new A(t)}}componentDidMount(){null!=document&&this.stickyManager.setContainer(document)}componentDidUpdate({i18n:e,linkComponent:t}){const{i18n:n,linkComponent:o}=this.props;n===e&&o===t||this.setState({link:o,intl:new A(n)})}render(){const{theme:e={},children:t}=this.props,{intl:n,link:o}=this.state;return r.a.createElement(D.Provider,{value:this.props.features||{}},r.a.createElement(y.a.Provider,{value:n},r.a.createElement(N.Provider,{value:this.scrollLockManager},r.a.createElement(F.a.Provider,{value:this.stickyManager},r.a.createElement(m.a.Provider,{value:this.uniqueIdFactory},r.a.createElement(B.a.Provider,{value:o},r.a.createElement(i.a,{theme:e},r.a.createElement(u,null,r.a.createElement(L,null,r.a.createElement(h,null,t))))))))))}}},MneB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));class o{constructor(e){this.idGeneratorFactory=void 0,this.idGenerators={},this.idGeneratorFactory=e}nextId(e){return this.idGenerators[e]||(this.idGenerators[e]=this.idGeneratorFactory(e)),this.idGenerators[e]()}}function r(e=""){let t=1;return()=>`Polaris${e}${t++}`}},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!r[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function d(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&a(e.activeElement),t=!0)}function l(e){t=!1}function u(e){i(e.target)&&(t||s(e.target))&&a(e.target)}function m(e){i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),c(e.target))}function v(e){"hidden"===document.visibilityState&&(n&&(t=!0),f())}function f(){document.addEventListener("mousemove",E),document.addEventListener("mousedown",E),document.addEventListener("mouseup",E),document.addEventListener("pointermove",E),document.addEventListener("pointerdown",E),document.addEventListener("pointerup",E),document.addEventListener("touchmove",E),document.addEventListener("touchstart",E),document.addEventListener("touchend",E)}function h(){document.removeEventListener("mousemove",E),document.removeEventListener("mousedown",E),document.removeEventListener("mouseup",E),document.removeEventListener("pointermove",E),document.removeEventListener("pointerdown",E),document.removeEventListener("pointerup",E),document.removeEventListener("touchmove",E),document.removeEventListener("touchstart",E),document.removeEventListener("touchend",E)}function E(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,h())}document.addEventListener("keydown",d,!0),document.addEventListener("mousedown",l,!0),document.addEventListener("pointerdown",l,!0),document.addEventListener("touchstart",l,!0),document.addEventListener("visibilitychange",v,!0),f(),e.addEventListener("focus",u,!0),e.addEventListener("blur",m,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!==typeof window&&"undefined"!==typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!==typeof document&&e(document)}()}}]);