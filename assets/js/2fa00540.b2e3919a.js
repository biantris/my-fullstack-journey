"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[5444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(f,c(c({ref:t},d),{},{components:r})):a.createElement(f,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var a=r(7462),n=r(3366),i=r(7294),c=r(3905),o=r(6010);const s={tweet:"tweet_x2tn",tweetMeta:"tweetMeta_fAxr"};function l(e){var t=e.url,r=e.handle,a=e.name,n=e.content,c=e.avatar,l=e.date;return i.createElement("div",{className:(0,o.Z)("card",s.tweet)},i.createElement("div",{className:"card__header"},i.createElement("div",{className:"avatar"},i.createElement("img",{alt:a,className:"avatar__photo",src:c,width:"48",height:"48",loading:"lazy"}),i.createElement("div",{className:(0,o.Z)("avatar__intro",s.tweetMeta)},i.createElement("strong",{className:"avatar__name"},a),i.createElement("span",null,"@",r)))),i.createElement("div",{className:(0,o.Z)("card__body",s.tweet)},n),i.createElement("div",{className:"card__footer"},i.createElement("a",{className:(0,o.Z)(s.tweetMeta,s.tweetDate),href:t},l)))}var d=["components"],u={id:"recursividade",title:"Recursividade",tags:["recursividade","content"]},p=void 0,m={unversionedId:"recursividade",id:"recursividade",title:"Recursividade",description:"Acontece quando uma fun\xe7\xe3o pode chamar a si pr\xf3pria. Todo cuidado \xe9 pouco ao fazer fun\xe7\xf5es recursivas.",source:"@site/docs/recursividade.mdx",sourceDirName:".",slug:"/recursividade",permalink:"/braintris/docs/recursividade",draft:!1,tags:[{label:"recursividade",permalink:"/braintris/docs/tags/recursividade"},{label:"content",permalink:"/braintris/docs/tags/content"}],version:"current",frontMatter:{id:"recursividade",title:"Recursividade",tags:["recursividade","content"]},sidebar:"tutorialSidebar",previous:{title:"Podcasts",permalink:"/braintris/docs/podcasts"},next:{title:"Talks",permalink:"/braintris/docs/talks"}},f={},v=[],b={toc:v};function y(e){var t=e.components,r=(0,n.Z)(e,d);return(0,c.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Acontece quando uma fun\xe7\xe3o pode chamar a si pr\xf3pria. Todo cuidado \xe9 pouco ao fazer fun\xe7\xf5es recursivas.\nA primeira coisa a se providenciar \xe9 um crit\xe9rio de parada. Este vai determinar quando a fun\xe7\xe3o dever\xe1 parar de chamar a si mesma. Isso impede que a fun\xe7\xe3o se chame infinitas vezes."),(0,c.kt)("p",null,"Veja mais em:"),(0,c.kt)("a",{href:"https://t.co/FyDFEXcH37"},(0,c.kt)(l,{url:"https://twitter.com/biantris_/status/1412039049246875653?ref_src=twsrc%5Etfw",handle:"biantris_",name:"Beatriz Oliveira",date:"July 5, 2021",avatar:"https://pbs.twimg.com/profile_images/1512784290005884933/rj8-BoL7_400x400.jpg",content:"A function capable of calling itself is called a recursive function. A function that calculates the factorial of an integer n is a good example of a recursive function: \ud83e\uddf5",mdxType:"Tweet"}),(0,c.kt)("img",{src:"https://pbs.twimg.com/media/E5iPV1DXMAAFLtG?format=jpg&name=medium"})))}y.isMDXComponent=!0}}]);