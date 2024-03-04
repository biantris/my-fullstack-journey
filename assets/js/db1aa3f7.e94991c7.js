"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[750],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={id:"this-js",title:"This em JavaScript",tags:["this","javascript","content","pt-br"],slug:"this-js",group:"javascript/"},p=void 0,l={unversionedId:"javascript/this-js",id:"javascript/this-js",title:"This em JavaScript",description:"Em JavaScript, a palavra this \xe9 usada para se referir ao objeto atual em que o c\xf3digo est\xe1 sendo executado. O valor de this pode mudar dependendo de como uma fun\xe7\xe3o \xe9 chamada ou como um objeto \xe9 criado.",source:"@site/docs/javascript/this-js.md",sourceDirName:"javascript",slug:"/javascript/this-js",permalink:"/braintris/docs/javascript/this-js",draft:!1,tags:[{label:"this",permalink:"/braintris/docs/tags/this"},{label:"javascript",permalink:"/braintris/docs/tags/javascript"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"pt-br",permalink:"/braintris/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1709562946,formattedLastUpdatedAt:"4 de mar. de 2024",frontMatter:{id:"this-js",title:"This em JavaScript",tags:["this","javascript","content","pt-br"],slug:"this-js",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"setTimeout",permalink:"/braintris/docs/javascript/set-timeout"},next:{title:"Tipos de dados no JS(mais utilizados)",permalink:"/braintris/docs/javascript/tipos-de-dados"}},c={},d=[{value:"Leia mais sobre <code>this</code>",id:"leia-mais-sobre-this",level:4}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Em JavaScript, a palavra ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \xe9 usada para se ",(0,o.kt)("strong",{parentName:"p"},"referir")," ao objeto atual em que o c\xf3digo est\xe1 sendo executado. O valor de ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," pode mudar dependendo de como uma fun\xe7\xe3o \xe9 chamada ou como um objeto \xe9 criado."),(0,o.kt)("p",null,"Ex de como o ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"pode ser usado em JavaScript:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Referenciando o objeto atual em um m\xe9todo:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nconst obj = {\n  name: 'Jo\xe3o',\n  greet() {\n    console.log(`Ol\xe1, meu nome \xe9 ${this.name}.`);\n  }\n};\n\nobj.greet(); // output: Ol\xe1, meu nome \xe9 Jo\xe3o.\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote",start:2},(0,o.kt)("li",{parentName:"ol"},'Utilizando "this" em uma fun\xe7\xe3o construtora:'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction Pessoa(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nconst pessoa1 = new Pessoa('Maria', 25);\nconsole.log(pessoa1.name); // output: Maria\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote",start:3},(0,o.kt)("li",{parentName:"ol"},'Utilizando "this" dentro de uma fun\xe7\xe3o an\xf4nima:'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nconst obj = {\n  name: 'Jo\xe3o',\n  greet() {\n    setTimeout(function() {\n      console.log(`Ol\xe1, meu nome \xe9 ${this.name}.`);\n    }, 1000);\n  }\n};\n\nobj.greet(); // output: Ol\xe1, meu nome \xe9 undefined.\n\n")),(0,o.kt)("p",null,"No exemplo acima, a fun\xe7\xe3o an\xf4nima que \xe9 passada para fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," n\xe3o est\xe1 vinculada ao objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"obj"),", portanto, o valor de ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \xe9 underfined. Para resolver esse problema, podemos utilizar ",(0,o.kt)("inlineCode",{parentName:"p"},"arrow functions")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"bind()")," para de definir o valor de ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"dentro da fun\xe7\xe3o."),(0,o.kt)("h4",{id:"leia-mais-sobre-this"},"Leia mais sobre ",(0,o.kt)("inlineCode",{parentName:"h4"},"this")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this"},"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.webdevdrops.com/javascript-this-71dd763aad52/"},"https://www.webdevdrops.com/javascript-this-71dd763aad52/"))))}m.isMDXComponent=!0}}]);