(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{5915:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return n(6914)}])},9988:function(e,t,n){"use strict";var r=n(5893),o=n(3578),i=n(9633),c=n.n(i),a=n(1121);let l=e=>{let{icon:t,value:n}=e;return(0,r.jsxs)("div",{className:c().boxItemBanner,children:[(0,r.jsx)("div",{className:c().icon,children:t||null}),(0,r.jsx)(o.Z,{className:c().value,children:n})]})},s=()=>(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("img",{alt:"banner",className:c().imageBanner,src:"https://t3.ftcdn.net/jpg/04/87/00/24/240_F_487002444_c68D38jVD8KIpDSCQFYvU2lBjBlIoNxo.jpg"}),(0,r.jsxs)("div",{className:c().boxContent,children:[(0,r.jsx)(o.Z,{className:c().welcome,children:"Ch\xe0o mừng bạn đến với Bem"}),(0,r.jsx)(l,{value:"T\xecm Mua Xe",icon:(0,r.jsx)(a.OEZ,{color:"#fff",size:20})}),(0,r.jsx)(l,{value:"Gửi B\xe1n Xe",icon:(0,r.jsx)(a.OEZ,{color:"#fff",size:20})}),(0,r.jsx)(l,{value:"Sửa Chữa/Bảo Dưỡng",icon:(0,r.jsx)(a.OEZ,{color:"#fff",size:20})}),(0,r.jsx)(l,{value:"Tư Vấn",icon:(0,r.jsx)(a.OEZ,{size:20,color:"#fff"})})]})]});t.Z=s},6914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(5152),i=n.n(o),c=n(9988);let a=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:"ServiceLayout"})})]});var l=n(9008),s=n.n(l);let u=i()(()=>n.e(260).then(n.bind(n,7260)),{loadableGenerated:{webpack:()=>[7260]},ssr:!1}),f=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:"Dịch vụ"})}),(0,r.jsx)(a,{})]});f.getLayout=function(e){return(0,r.jsx)(u,{children:(0,r.jsx)(r.Fragment,{children:e})})};var v=f},9633:function(e){e.exports={container:"Banner_container__ipNg0",imageBanner:"Banner_imageBanner__M5VXi",boxContent:"Banner_boxContent__opqdx",welcome:"Banner_welcome__18QYG",boxItemBanner:"Banner_boxItemBanner__h_v1_",value:"Banner_value__SdOQl",icon:"Banner_icon__ofd_8"}},5054:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,o,i;r=e,o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(f,a({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:o,size:i,title:l}=e,u=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c),f=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[817,150,942,598,774,888,179],function(){return e(e.s=5915)}),_N_E=e.O()}]);