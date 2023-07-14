"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[4745],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=i,f=c["".concat(o,".").concat(p)]||c[p]||m[p]||n;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(7462),i=a(3366),n=(a(7294),a(4137)),s=["components"],l={id:"sistema-de-gerenciamento-de-filas",title:"Sistema de gerenciamento de filas",tags:["filas","content","pt-BR","wip"],slug:"sistema-de-gerenciamento-de-filas",group:"/"},o=void 0,u={unversionedId:"sistema-de-gerenciamento-de-filas",id:"sistema-de-gerenciamento-de-filas",title:"Sistema de gerenciamento de filas",description:"O que \xe9 uma fila?",source:"@site/docs/sistema-de-gerenciamento-de-filas.md",sourceDirName:".",slug:"/sistema-de-gerenciamento-de-filas",permalink:"/braintris/en/docs/sistema-de-gerenciamento-de-filas",draft:!1,tags:[{label:"filas",permalink:"/braintris/en/docs/tags/filas"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"pt-BR",permalink:"/braintris/en/docs/tags/pt-br"},{label:"wip",permalink:"/braintris/en/docs/tags/wip"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1689305004,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"sistema-de-gerenciamento-de-filas",title:"Sistema de gerenciamento de filas",tags:["filas","content","pt-BR","wip"],slug:"sistema-de-gerenciamento-de-filas",group:"/"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/braintris/en/docs/setup"},next:{title:"Squash and merge",permalink:"/braintris/en/docs/squash-and-merge"}},d={},m=[{value:"O que \xe9 uma fila?",id:"o-que-\xe9-uma-fila",level:3},{value:"O que \xe9 \xe1rea de fila?",id:"o-que-\xe9-\xe1rea-de-fila",level:3},{value:"O que \xe9 a teoria de filas?",id:"o-que-\xe9-a-teoria-de-filas",level:3},{value:"Elementos de um sistema de filas:",id:"elementos-de-um-sistema-de-filas",level:3},{value:"Refer\xeancias:",id:"refer\xeancias",level:3}],c={toc:m};function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"o-que-\xe9-uma-fila"},"O que \xe9 uma fila?"),(0,n.kt)("p",null,"\xc9 uma sequ\xeancia de a\xe7\xf5es ou eventos que iram ocorrer em um determinado limite de tempo e com uma organiza\xe7\xe3o definida."),(0,n.kt)("h3",{id:"o-que-\xe9-\xe1rea-de-fila"},"O que \xe9 \xe1rea de fila?"),(0,n.kt)("p",null,"Seria o lugar ou ambiente que ir\xe1 se encontrar a fila."),(0,n.kt)("h3",{id:"o-que-\xe9-a-teoria-de-filas"},"O que \xe9 a teoria de filas?"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wip")),(0,n.kt)("h3",{id:"elementos-de-um-sistema-de-filas"},"Elementos de um sistema de filas:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wip")),(0,n.kt)("div",{align:"center",id:"top"},(0,n.kt)("img",{width:"500",src:"../img/queuing-systems.png"})),(0,n.kt)("h3",{id:"refer\xeancias"},"Refer\xeancias:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ref ",(0,n.kt)("a",{parentName:"li",href:"http://staff.um.edu.mt/jskl1/simweb/intro.htm"},"http://staff.um.edu.mt/jskl1/simweb/intro.htm")),(0,n.kt)("li",{parentName:"ul"},"ref ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Queueing_theory"},"https://en.wikipedia.org/wiki/Queueing_theory"))))}p.isMDXComponent=!0}}]);