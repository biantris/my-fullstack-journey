(()=>{"use strict";var e,a,c,f,r,t={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=t,b.c=d,e=[],b.O=(a,c,f,r)=>{if(!c){var t=1/0;for(i=0;i<e.length;i++){for(var[c,f,r]=e[i],d=!0,o=0;o<c.length;o++)(!1&r||t>=r)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,r<t&&(t=r));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var t={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,b.d(r,t),r},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",80:"f6a5c1ad",113:"9ab8291e",645:"e47fedfe",801:"5abbbfe1",828:"2c80a394",1209:"e37c061e",1231:"266f4309",1397:"61a42701",1664:"eea93275",1693:"4b6285f9",1859:"e771a441",2016:"c62d9ac5",2140:"6cd383aa",2272:"10ed0ca2",3291:"d3b876b0",3425:"8addd731",3612:"3f35055a",3751:"3720c009",3882:"cb8cf04c",4121:"55960ee5",4195:"c4f5d8e4",4545:"f699199a",4879:"1ac7a526",4884:"0eeacac3",4895:"44956bb4",5e3:"abacb3d1",5108:"cf9c5781",5269:"d2847151",5444:"2fa00540",5722:"77d2723b",5814:"10e06348",6129:"7a8cf4ab",6264:"8438b363",6269:"cfa216ca",6279:"6b6693bf",6535:"3d8d21df",6549:"235257e8",6566:"5cfcab96",7261:"950d23a6",7294:"30c7459b",7493:"0cd1924f",7569:"a63f9c89",7613:"d4056cc5",7810:"34fe4300",7918:"17896441",8537:"11fad8c4",8621:"2fe8adb2",9514:"1be78505",9817:"14eb3368",9924:"df203c0f",9970:"97019d68"}[e]||e)+"."+{53:"7b55457a",80:"6e410515",113:"22493aca",645:"922f7427",801:"8dd19e09",828:"c7d2cc73",845:"17875744",1209:"18690ebd",1231:"de37ff69",1397:"b4ffbfa5",1664:"334fecbb",1693:"ce5f5d9f",1811:"006132bc",1859:"d0e48772",2016:"87d537c5",2140:"2586a33d",2272:"6754c0ad",2694:"bb6a6e5b",3098:"1c4d3bc0",3291:"417781ef",3294:"8d26505b",3425:"539d5c29",3612:"9c8d3c5f",3751:"877a3090",3882:"ca95c629",4121:"25a4a1b5",4195:"db93239f",4416:"9f9ca6cd",4545:"ceb17fa8",4879:"2b0dfca3",4884:"2b171cf6",4895:"80076f11",4972:"6a32f009",5e3:"be1e22cb",5108:"863cc413",5269:"2ae8cf73",5341:"431d3e59",5444:"4f3b5aa2",5722:"1022abd6",5814:"5e8d57b6",6129:"07b031de",6213:"6d4b2b7f",6264:"88fcd539",6269:"995cfa57",6279:"f13febb2",6409:"c69475a9",6535:"47d8c01e",6549:"74bda0da",6566:"dfd27613",6595:"f4534128",7261:"c35e0d52",7294:"d60423e4",7486:"2dc771df",7493:"04365555",7539:"b74a1597",7569:"0a3adf87",7613:"692e7b84",7766:"9015b425",7810:"8447874f",7918:"eb2d9b02",8328:"90ea56bb",8391:"3e72457f",8537:"aaebee48",8621:"37897600",9184:"60d4f061",9456:"1966df10",9514:"32d4062d",9817:"ba5d7078",9924:"1f96c780",9970:"b97241cf"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="braintris:",b.l=(e,a,c,t)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+c),d.src=e),f[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/braintris/en/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",f6a5c1ad:"80","9ab8291e":"113",e47fedfe:"645","5abbbfe1":"801","2c80a394":"828",e37c061e:"1209","266f4309":"1231","61a42701":"1397",eea93275:"1664","4b6285f9":"1693",e771a441:"1859",c62d9ac5:"2016","6cd383aa":"2140","10ed0ca2":"2272",d3b876b0:"3291","8addd731":"3425","3f35055a":"3612","3720c009":"3751",cb8cf04c:"3882","55960ee5":"4121",c4f5d8e4:"4195",f699199a:"4545","1ac7a526":"4879","0eeacac3":"4884","44956bb4":"4895",abacb3d1:"5000",cf9c5781:"5108",d2847151:"5269","2fa00540":"5444","77d2723b":"5722","10e06348":"5814","7a8cf4ab":"6129","8438b363":"6264",cfa216ca:"6269","6b6693bf":"6279","3d8d21df":"6535","235257e8":"6549","5cfcab96":"6566","950d23a6":"7261","30c7459b":"7294","0cd1924f":"7493",a63f9c89:"7569",d4056cc5:"7613","34fe4300":"7810","11fad8c4":"8537","2fe8adb2":"8621","1be78505":"9514","14eb3368":"9817",df203c0f:"9924","97019d68":"9970"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>f=e[a]=[c,r]));c.push(f[2]=r);var t=b.p+b.u(a),d=new Error;b.l(t,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=c&&("load"===c.type?"missing":c.type),t=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+t+")",d.name="ChunkLoadError",d.type=r,d.request=t,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,r,[t,d,o]=c,n=0;if(t.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<t.length;n++)r=t[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},c=self.webpackChunkbraintris=self.webpackChunkbraintris||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();