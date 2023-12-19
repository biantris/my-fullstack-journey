"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[8860],{4137:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):n(n({},a),e)),r},p=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return r?t.createElement(f,n(n({ref:a},p),{},{components:r})):t.createElement(f,n({ref:a},p))}));function m(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var d=2;d<s;d++)n[d]=r[d];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5129:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(7462),o=r(3366),s=(r(7294),r(4137)),n=["components"],i={id:"layers-rest-apis",title:"Camadas em APIs REST",tags:["api","layers-rest","content","notes","pt-PR"],slug:"layers-rest-apis",group:"api/"},l=void 0,d={unversionedId:"api/layers-rest-apis",id:"api/layers-rest-apis",title:"Camadas em APIs REST",description:"Camadas de uma API Rest",source:"@site/docs/api/layers-rest-apis.md",sourceDirName:"api",slug:"/api/layers-rest-apis",permalink:"/braintris/en/docs/api/layers-rest-apis",draft:!1,tags:[{label:"api",permalink:"/braintris/en/docs/tags/api"},{label:"layers-rest",permalink:"/braintris/en/docs/tags/layers-rest"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"pt-PR",permalink:"/braintris/en/docs/tags/pt-pr"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1702996822,formattedLastUpdatedAt:"Dec 19, 2023",frontMatter:{id:"layers-rest-apis",title:"Camadas em APIs REST",tags:["api","layers-rest","content","notes","pt-PR"],slug:"layers-rest-apis",group:"api/"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/braintris/en/docs/category/api"},next:{title:"CS",permalink:"/braintris/en/docs/category/cs"}},p={},c=[{value:"Camadas de uma API Rest",id:"camadas-de-uma-api-rest",level:3},{value:"CONTROLLES(Controladores):",id:"controllescontroladores",level:4},{value:"REPOSITORIES(Reposit\xf3rios):",id:"repositoriesreposit\xf3rios",level:4},{value:"DOMAIN(Dom\xednio):",id:"domaindom\xednio",level:4},{value:"ENTITIES(Entidades):",id:"entitiesentidades",level:4},{value:"MODULES (M\xf3dulos):",id:"modules-m\xf3dulos",level:4},{value:"FACTORY(F\xe1brica):",id:"factoryf\xe1brica",level:4},{value:"DTO(Objeto de transfer\xeancia de dados):",id:"dtoobjeto-de-transfer\xeancia-de-dados",level:4}],u={toc:c};function m(e){var a=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"camadas-de-uma-api-rest"},"Camadas de uma API Rest"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Essas nomenclaturas geralmente fazem parte de arquitetura de software usada em APIs RESTful, presentes em arquiteturas de ",(0,s.kt)("a",{parentName:"li",href:"https://pt.wikipedia.org/wiki/Arquitetura_multicamada"},"camadas")," ou ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"hexagonal"),":")),(0,s.kt)("h4",{id:"controllescontroladores"},"CONTROLLES(Controladores):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"S\xe3o respons\xe1veis por receber as requisi\xe7\xf5es HTTP e controlar o fluxo de dados dentro da aplica\xe7\xe3o. Eles s\xe3o respons\xe1veis por receber as requisi\xe7\xf5es e enviar as respostas adequadas ao cliente.")),(0,s.kt)("h4",{id:"repositoriesreposit\xf3rios"},"REPOSITORIES(Reposit\xf3rios):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"S\xe3o respons\xe1veis por gerenciar o acesso e manipula\xe7\xe3o de dados. Eles s\xe3o respons\xe1veis por criar, ler, atualizar e excluir (CRUD) registros em um banco de dados ou qualquer outro tipo de armazenamento de dados.")),(0,s.kt)("h4",{id:"domaindom\xednio"},"DOMAIN(Dom\xednio):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\xc9 a camada que cont\xe9m as regras de neg\xf3cio da aplica\xe7\xe3o. \xc9 aqui que as regras de valida\xe7\xe3o e l\xf3gica de neg\xf3cio s\xe3o implementadas.")),(0,s.kt)("h4",{id:"entitiesentidades"},"ENTITIES(Entidades):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"S\xe3o objetos que representam os dados da aplica\xe7\xe3o, como usu\xe1rios, produtos, pedidos, etc. Esses objetos s\xe3o usados para transferir dados entre as camadas da aplica\xe7\xe3o.")),(0,s.kt)("h4",{id:"modules-m\xf3dulos"},"MODULES (M\xf3dulos):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"S\xe3o pacotes que cont\xeam funcionalidades relacionadas. Por exemplo, um m\xf3dulo de autentica\xe7\xe3o pode conter rotas, controladores, servi\xe7os e reposit\xf3rios relacionados \xe0 autentica\xe7\xe3o.")),(0,s.kt)("h4",{id:"factoryf\xe1brica"},"FACTORY(F\xe1brica):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\xc9 um padr\xe3o de projeto utilizado para criar objetos de forma din\xe2mica. A camada de f\xe1brica \xe9 respons\xe1vel por instanciar e configurar objetos complexos, como controladores, servi\xe7os e reposit\xf3rios, e fornec\xea-los para outras partes da aplica\xe7\xe3o.")),(0,s.kt)("h4",{id:"dtoobjeto-de-transfer\xeancia-de-dados"},"DTO(Objeto de transfer\xeancia de dados):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\xc9 uma estrutura de dados que representa os dados relevantes para transfer\xeancia entre diferentes partes do sistema, ajudando a manter a coes\xe3o, desacoplamento e efici\xeancia da comunica\xe7\xe3o entre os componentes.")))}m.isMDXComponent=!0}}]);