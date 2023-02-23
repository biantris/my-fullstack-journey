"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||a;return n?o.createElement(d,c(c({ref:t},i),{},{components:n})):o.createElement(d,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],l={id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},s=void 0,p={unversionedId:"javascript/scope-block-statement",id:"javascript/scope-block-statement",title:"Scope, Block Statement",description:"Scope: Escopo determina a visibilidade de alguma vari\xe1vel no javaScript",source:"@site/docs/javascript/scope-block-statement.md",sourceDirName:"javascript",slug:"/javascript/scope-block-statement",permalink:"/en/docs/javascript/scope-block-statement",draft:!1,tags:[{label:"scope-block-statement",permalink:"/en/docs/tags/scope-block-statement"},{label:"javascript",permalink:"/en/docs/tags/javascript"},{label:"content",permalink:"/en/docs/tags/content"},{label:"notes",permalink:"/en/docs/tags/notes"},{label:"pt-BR",permalink:"/en/docs/tags/pt-br"}],version:"current",frontMatter:{id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/en/docs/javascript/promise"},next:{title:"setTimeout",permalink:"/en/docs/javascript/set-timeout"}},i={},m=[],u={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scope"),": Escopo determina a visibilidade de alguma vari\xe1vel no javaScript"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block Statement:")," Declara\xe7\xe3o de bloco"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// vamos iniciar um bloco\n{\n    // aqui dentro \xe9 um bloco e posso colocar qualquer c\xf3digo\n} // aqui fechamos o bloco\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"O bloco tamb\xe9m criar\xe1 um novo ",(0,a.kt)("strong",{parentName:"li"},"escopo")," . Chamamos de ",(0,a.kt)("strong",{parentName:"li"},"block scoped"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"var:")," var \xe9 global e poder\xe1 funcionar fora de um escopo de bloco"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"var \xe9 global e tamb\xe9m local"),(0,a.kt)("li",{parentName:"ul"},"hoisting")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scope let e const:")," const e let s\xe3o locais e s\xf3 funcionam no escopo onde foi criado"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{ \n    let y = 0; // escopo local ( dentro das chaves )\n    console.log(y)\n}\n")))}b.isMDXComponent=!0}}]);