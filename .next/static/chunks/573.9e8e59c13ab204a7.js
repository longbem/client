(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{3507:function(e,t){"use strict";let o=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}});t.Z=o},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,l=n(o(7294)),a=o(4532),i=o(3353),u=o(1410),s=o(9064),c=o(370),f=o(9955),d=o(4224),p=o(508),h=o(1516),v=o(4266);let m=new Set;function b(e,t,o,n,r){if(r||i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:u.formatUrl(e)}let y=l.default.forwardRef(function(e,t){let o,n;let{href:u,as:m,children:y,prefetch:_,passHref:M,replace:j,shallow:x,scroll:k,locale:C,onClick:E,onMouseEnter:w,onTouchStart:O,legacyBehavior:I=!1}=e,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,I&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let P=!1!==_,D=l.default.useContext(f.RouterContext),H=l.default.useContext(d.AppRouterContext),N=null!=D?D:H,R=!D,{href:S,as:$}=l.default.useMemo(()=>{if(!D){let e=g(u);return{href:e,as:m?g(m):e}}let[e,t]=a.resolveHref(D,u,!0);return{href:e,as:m?a.resolveHref(D,m):t||e}},[D,u,m]),T=l.default.useRef(S),B=l.default.useRef($);I&&(n=l.default.Children.only(o));let U=I?n&&"object"==typeof n&&n.ref:t,[Z,z,K]=p.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(B.current!==$||T.current!==S)&&(K(),B.current=$,T.current=S),Z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[$,U,S,K,Z]);l.default.useEffect(()=>{N&&z&&P&&b(N,S,$,{locale:C},R)},[$,S,z,C,P,null==D?void 0:D.locale,N,R]);let Y={ref:A,onClick(e){I||"function"!=typeof E||E(e),I&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,o,n,r,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!i.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:s,scroll:u}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,N,S,$,j,x,k,C,R,P)},onMouseEnter(e){I||"function"!=typeof w||w(e),I&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(P||!R)&&b(N,S,$,{locale:C,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){I||"function"!=typeof O||O(e),I&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(P||!R)&&b(N,S,$,{locale:C,priority:!0,bypassPrefetchedCheck:!0},R)}};if(s.isAbsoluteUrl($))Y.href=$;else if(!I||M||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==D?void 0:D.locale,t=(null==D?void 0:D.isLocaleDomain)&&h.getDomainLocale($,e,null==D?void 0:D.locales,null==D?void 0:D.domainLocales);Y.href=t||v.addBasePath(c.addLocale($,e,null==D?void 0:D.defaultLocale))}return I?l.default.cloneElement(n,Y):l.default.createElement("a",Object.assign({},L,Y),o)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:u}=e,s=u||!l,[c,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=a.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},i.push(o),a.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!c){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[s,o,t,c,d.current]);let h=n.useCallback(()=>{f(!1)},[]);return[p,c,h]};var n=o(7294),r=o(29);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2085:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return g}});var n=o(5893),r=o(7294),l=o(7462),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},i=o(2135),u=r.forwardRef(function(e,t){return r.createElement(i.Z,(0,l.Z)({},e,{ref:t,icon:a}))}),s=o(860),c=o.n(s),f=o(1163),d=o(1664),p=o.n(d),h=o(17),v=o(9060);let m=[{label:(0,n.jsx)(p(),{href:"/car-sale",className:c().labelMenu,children:"Sản phẩm"}),key:"/car-sale"},{label:(0,n.jsx)(p(),{href:"/services",className:c().labelMenu,children:"Dịch vụ"}),key:"/services"},{label:(0,n.jsx)(p(),{href:"/about",className:c().labelMenu,children:"Th\xf4ng tin"}),key:"/about"}],b=()=>{let e=(0,f.useRouter)(),t=(0,r.useMemo)(()=>{let e=0;for(let t=0;t<=100;t++)e=t;return e},[]);return console.log("\uD83D\uDE80 ~ file: index.tsx:77 ~ percent ~ percent:",t),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:c().header,children:[(0,n.jsx)("div",{className:c().logo,children:(0,n.jsx)(p(),{href:"/",children:(0,n.jsx)(h.Z,{width:100,alt:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/BEM_logo.svg/686px-BEM_logo.svg.png?20210313041543",preview:!1})})}),(0,n.jsx)("div",{className:c().linkList,children:(0,n.jsx)(v.Z,{style:{minWidth:0,flex:"auto",justifyContent:"flex-end",borderBottom:0},defaultSelectedKeys:(()=>{switch(e.pathname){case"/":case"/home":return["/home"];case"/car-sale":return["/car-sale"];case"/services":return["/services"];case"/about":return["/about"]}})(),inlineIndent:20,overflowedIndicator:(0,n.jsx)(u,{rev:void 0}),mode:"horizontal",items:m})})]})})};var g=b},860:function(e){e.exports={header:"MenuHeader_header__c8UiL",logo:"MenuHeader_logo__UB5FN",linkList:"MenuHeader_linkList__Y5cPI",labelMenu:"MenuHeader_labelMenu__aYjfy",progress:"MenuHeader_progress__eQj_Y"}},1664:function(e,t,o){e.exports=o(5569)}}]);