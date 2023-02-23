"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9883],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>b});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},i=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(o),b=n,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return o?r.createElement(d,c(c({ref:t},i),{},{components:o})):r.createElement(d,c({ref:t},i))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=o[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5091:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),c=["components"],l={id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},s=void 0,p={unversionedId:"javascript/scope-block-statement",id:"javascript/scope-block-statement",title:"Scope, Block Statement",description:"Scope: Escopo determina a visibilidade de alguma vari\xe1vel no javaScript",source:"@site/docs/javascript/scope-block-statement.md",sourceDirName:"javascript",slug:"/javascript/scope-block-statement",permalink:"/docs/javascript/scope-block-statement",draft:!1,tags:[{label:"scope-block-statement",permalink:"/docs/tags/scope-block-statement"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"content",permalink:"/docs/tags/content"},{label:"notes",permalink:"/docs/tags/notes"},{label:"pt-BR",permalink:"/docs/tags/pt-br"}],version:"current",frontMatter:{id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/docs/javascript/promise"},next:{title:"setTimeout",permalink:"/docs/javascript/set-timeout"}},i={},m=[],u={toc:m};function b(e){var t=e.components,o=(0,n.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scope"),": Escopo determina a visibilidade de alguma vari\xe1vel no javaScript"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block Statement:")," Declara\xe7\xe3o de bloco"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// vamos iniciar um bloco\n{\n    // aqui dentro \xe9 um bloco e posso colocar qualquer c\xf3digo\n} // aqui fechamos o bloco\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"O bloco tamb\xe9m criar\xe1 um novo ",(0,a.kt)("strong",{parentName:"li"},"escopo")," . Chamamos de ",(0,a.kt)("strong",{parentName:"li"},"block scoped"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"var:")," var \xe9 global e poder\xe1 funcionar fora de um escopo de bloco"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"var \xe9 global e tamb\xe9m local"),(0,a.kt)("li",{parentName:"ul"},"hoisting")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scope let e const:")," const e let s\xe3o locais e s\xf3 funcionam no escopo onde foi criado"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{ \n    let y = 0; // escopo local ( dentro das chaves )\n    console.log(y)\n}\n")))}b.isMDXComponent=!0}}]);