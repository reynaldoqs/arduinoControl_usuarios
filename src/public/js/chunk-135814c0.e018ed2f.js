(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-135814c0"],{"475d":function(t,e,a){"use strict";var s=a("93d1"),i=a.n(s);i.a},"93d1":function(t,e,a){},cd96:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"p-20 pt-10 container mx-auto grid"},t._l(t.objetos,(function(t,e){return a("card",{key:e,attrs:{imgUrl:t.urlImagen,title:t.objeto,description:t.estado}})})),1),t._m(1),t._m(2),t._m(3)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto container pt-20"},[a("h3",{staticClass:"text-sm font-bold"},[t._v("OBJETOS ENCONTRADOS")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-20 pb-20 container mx-auto"},[a("h3",{staticClass:"text-sm font-bold mb-4"},[t._v("INSTRUCCIONES")]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus, quam ducimus obcaecati necessitatibus officiis iusto. Velit possimus quod harum iure omnis, officiis praesentium fuga, veritatis molestias, sapiente illo eaque! ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto container pb-10"},[a("h3",{staticClass:"text-sm font-bold"},[t._v("CONTACTO")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-20 container mx-auto"},[a("form",{staticClass:"w-full max-w-lg mx-auto"},[a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[a("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v(" Nombres ")]),a("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"grid-first-name",type:"text",placeholder:"Nombres"}})]),a("div",{staticClass:"w-full md:w-1/2 px-3"},[a("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-last-name"}},[t._v(" Email ")]),a("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-last-name",type:"text",placeholder:"Email"}})])]),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[t._v(" Reclamo ")]),a("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-password",type:"text",placeholder:"Reclamo"}}),a("p",{staticClass:"text-gray-600 text-xs italic"},[t._v("Lotem")])])]),a("button",{staticClass:"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"}},[t._v(" Enviar ")])])])}],r=(a("d3b7"),a("96cf"),a("52c5")),n=Object(r["a"])("http://127.0.0.1:3000"),o=n("objetos"),c=function(t){return o.get(t)},l=a("ae8d"),u={name:"atencion",data:function(){return{objetos:null,isLoading:!1,error:null}},methods:{fetch:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,this.isLoading=!0,a.next=4,regeneratorRuntime.awrap(c());case 4:t=a.sent,e=t.data,this.objetos=e.docs,this.isLoading=!1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),this.error=a.t0;case 13:case"end":return a.stop()}}),null,this,[[0,10]])}},mounted:function(){this.fetch()},components:{Card:l["a"]}},d=u,p=(a("475d"),a("2877")),m=Object(p["a"])(d,s,i,!1,null,"1750a4fa",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-135814c0.e018ed2f.js.map