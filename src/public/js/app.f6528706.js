(function(e){function t(t){for(var a,r,o=t[0],s=t[1],l=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1cfacbe4":"4dbb2fa2","chunk-7abedfbf":"9f841c48","chunk-135814c0":"e018ed2f","chunk-1c251c1e":"ea6c20b3","chunk-6dfb1f0f":"dfa04b4c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1cfacbe4":1,"chunk-135814c0":1,"chunk-6dfb1f0f":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1cfacbe4":"bac3f0e1","chunk-7abedfbf":"31d6cfe0","chunk-135814c0":"0f8ef7df","chunk-1c251c1e":"31d6cfe0","chunk-6dfb1f0f":"057735f4"}[e]+".css",i=s.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/public/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1044:function(e,t,n){"use strict";var a=n("9b2b"),r=n.n(a);r.a},"397f":function(e,t,n){e.exports=n.p+"img/terminal.1cc30b00.jpg"},"3d2c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-bar",{staticClass:"fixed bg-aud-black"}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"a-navbar"},[n("div",{staticClass:"container mx-auto h-full"},[n("ul",{staticClass:"flex justify-between h-full w-full font-bold text-xs text-gray-300 cursor-pointer"},[n("router-link",{class:[e.currentPage.includes("home")?e.activeClass:"","flex items-center justify-center w-1/5 hover:bg-black hover:text-white"],attrs:{to:"/home",tag:"li"}},[e._v("INICIO")]),n("router-link",{class:[e.currentPage.includes("destinos")?e.activeClass:"","flex items-center justify-center w-1/5 hover:bg-black hover:text-white"],attrs:{to:"/destinos",tag:"li"}},[e._v("DESTINOS")]),n("router-link",{class:[e.currentPage.includes("cooperativas")?e.activeClass:"","flex items-center justify-center w-1/5 hover:bg-black hover:text-white"],attrs:{to:"cooperativas",tag:"li"}},[e._v("COOPERATIVAS")]),n("router-link",{class:[e.currentPage.includes("atencion")?e.activeClass:"","flex items-center justify-center w-1/5 hover:bg-black hover:text-white"],attrs:{to:"atencion",tag:"li"}},[e._v("ATENCION AL CIUDADANO")]),n("router-link",{class:[e.currentPage.includes("servicios")?e.activeClass:"","flex items-center justify-center w-1/5 hover:bg-black hover:text-white"],attrs:{to:"servicios",tag:"li"}},[e._v("SERVICIOS")])],1)])])},o=[],s={name:"navbar",data:function(){return{activeClass:"active"}},computed:{currentPage:function(){return this.$route.path}}},l=s,u=(n("8fd4"),n("2877")),f=Object(u["a"])(l,c,o,!1,null,"1d661c41",null),d=f.exports,p={components:{NavBar:d}},h=p,m=(n("034f"),Object(u["a"])(h,r,i,!1,null,null,null)),v=m.exports,b=(n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{staticClass:"object-cover w-full home-banner",attrs:{src:n("397f"),alt:"terminal"}}),e._m(0),a("div",{staticClass:"sites py-4 px-20 container mx-auto"},[a("card",{attrs:{description:"Soemthing like this",title:"Copacabana",imgUrl:"http://www.eldiario.net/noticias/2014/2014_10/nt141010/f_2014-10-10_45.jpg"}}),a("card",{attrs:{title:"Tiquina",imgUrl:"https://rcbolivia.com/wp-content/uploads/2018/08/barcaza-estrecho-de-tiquina.jpg"}}),a("card",{attrs:{title:"San Jacinto",imgUrl:"https://www.noticiasfides.com/images/news/2019/07/c-tiquina-399387-9895.jpg"}})],1)])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info p-10 container mx-auto text-left"},[n("h3",{staticClass:"font-bold text-lg"},[e._v("MISION")]),n("p",{staticClass:"pl-10 my-4"},[e._v("Facilitamos uan experiencia integral de viajes y compras con calidad, calidez y conomia.")]),n("h3",{staticClass:"font-bold text-lg"},[e._v("VISION")]),n("p",{staticClass:"pl-10 mt-4"},[e._v("Ser la mejor terminal terrestre del pais y una de las mejores de America bajo modelo de autogestion.")]),n("p",{staticClass:"pl-10 mt-4"},[e._v("la FUNDACION TERMINAL TERRESTRE GUAYAQUIL, es una persona juridica, sin fines de lucro, de accion social y civica, cuyo objeto consiste principalmente, en la administracion, transformacion y mejoramiento de la Terminal Terrestre de esta ciudad, sus socios fundadores son:")])])}],w=n("ae8d"),x={name:"home",components:{Card:w["a"]}},k=x,C=(n("1044"),Object(u["a"])(k,g,y,!1,null,"eeb231ec",null)),_=C.exports;a["a"].use(b["a"]);var j=[{path:"*",redirect:"/home"},{path:"/home",name:"home",component:_},{path:"/destinos",name:"destinos",component:function(){return Promise.all([n.e("chunk-7abedfbf"),n.e("chunk-6dfb1f0f")]).then(n.bind(null,"7f74"))}},{path:"/cooperativas",name:"cooperativas",component:function(){return Promise.all([n.e("chunk-7abedfbf"),n.e("chunk-1c251c1e")]).then(n.bind(null,"3e75"))}},{path:"/atencion",name:"atencion",component:function(){return Promise.all([n.e("chunk-7abedfbf"),n.e("chunk-135814c0")]).then(n.bind(null,"cd96"))}},{path:"/servicios",name:"servicios",component:function(){return n.e("chunk-1cfacbe4").then(n.bind(null,"0f4c"))}}],O=new b["a"]({routes:j}),S=O,E=n("2f62");a["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("def6");a["a"].config.productionTip=!1,new a["a"]({router:S,store:P,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},"8fd4":function(e,t,n){"use strict";var a=n("3d2c"),r=n.n(a);r.a},"9b2b":function(e,t,n){},ae8d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overflow-hidden"},[n("img",{staticClass:"w-full h-64 object-cover",attrs:{src:e.imgUrl,alt:"Sunset in the mountains"}}),n("div",{staticClass:"px-4 py-3 pb-1 text-left flex justify-between"},[n("div",{staticClass:"font-bold text-ls mb-2 leading-tight"},[e._v(e._s(e.title))]),n("p",{staticClass:"text-xs leading-tight uppercase font-bold text-gray-600"},[e._v(" "+e._s(e.description)+" ")])])])},r=[],i={name:"card",props:{imgUrl:String,title:String,description:String,tags:Array}},c=i,o=n("2877"),s=Object(o["a"])(c,a,r,!1,null,null,null);t["a"]=s.exports},def6:function(e,t,n){}});
//# sourceMappingURL=app.f6528706.js.map