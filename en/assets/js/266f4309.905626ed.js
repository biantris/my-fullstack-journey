"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[1231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(n),f=a,m=b["".concat(l,".").concat(f)]||b[f]||u[f]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],o={id:"callback",title:"Callback",tags:["callback","javascript","content"]},l=void 0,s={unversionedId:"javascript/callback",id:"javascript/callback",title:"Callback",description:"A function that is passed to another function as an argument to another function, which is called within an external function to complete some kind of routine or action.",source:"@site/docs/javascript/callback.md",sourceDirName:"javascript",slug:"/javascript/callback",permalink:"/braintris/en/docs/javascript/callback",draft:!1,tags:[{label:"callback",permalink:"/braintris/en/docs/tags/callback"},{label:"javascript",permalink:"/braintris/en/docs/tags/javascript"},{label:"content",permalink:"/braintris/en/docs/tags/content"}],version:"current",frontMatter:{id:"callback",title:"Callback",tags:["callback","javascript","content"]},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/braintris/en/docs/category/javascript"},next:{title:"Eventos no JavaScript",permalink:"/braintris/en/docs/javascript/eventos-javascript"}},p={},u=[],b={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A function that is passed to another function as an argument to another function, which is called within an external function to complete some kind of routine or action."),(0,i.kt)("p",null,"ex.: ",(0,i.kt)("a",{parentName:"p",href:"https://replit.com/@beatrizoliveiir/ex-callback-ts"},"https://replit.com/@beatrizoliveiir/ex-callback-ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface definitionInterface {\n  (message: string): void;\n}\n\nconst greeting = (message: string) => console.log(`Hello ${message}`);\n\nconst sayHello = (callback: definitionInterface) => {\n  callback('World!');\n};\nsayHello(greeting);\n")),(0,i.kt)("p",null,"The example above is of a ",(0,i.kt)("strong",{parentName:"p"},"synchronous callback"),", since it is executed immediately."),(0,i.kt)("div",{align:"center",id:"top"},(0,i.kt)("img",{width:"500",src:"https://raw.githubusercontent.com/biantris/braintris/main/static/img/callback.png"})))}f.isMDXComponent=!0}}]);