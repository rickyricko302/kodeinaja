(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{293:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{path:""}},mounted:function(){this.path=this.$route.fullPath}},o=r(64),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{staticClass:"shadow-sm",attrs:{toggleable:"lg",type:"light",variant:"white"}},[r("div",{staticClass:"container"},[r("b-navbar-brand",{staticClass:"font-weight-bold",attrs:{to:"/"}},[e._v("KodeInaja")]),e._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{to:"/arsip"}},[r("span",{class:["/arsip"==e.path?"text-dark":""]},[e._v("Arsip")])]),e._v(" "),r("b-nav-item",{attrs:{to:"/kategori"}},[r("span",{class:["/kategori"==e.path?"text-dark":""]},[e._v("Kategori")])]),e._v(" "),r("b-nav-item",{attrs:{to:"/tag"}},[r("span",{class:["/tag"==e.path?"text-dark":""]},[e._v("Tag")])]),e._v(" "),r("b-nav-item",{attrs:{to:"/cari"}},[r("span",{class:["/cari"==e.path?"text-dark":""]},[e._v("Cari")])])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},329:function(e,t,r){"use strict";r.r(t);r(22),r(59),r(46),r(4),r(60),r(67),r(48);var n=r(24);r(65),r(1),r(11),r(124),r(18),r(15),r(26),r(36),r(19);function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var c={data:function(){return{gambar:"",prosesUpImg:!1,errorUpImg:!1,judul:"",deskripsi:"",tag:"",kategori:"",username:""}},head:function(){return{title:"Buat Postingan - Kodeinaja",meta:[{hid:"description",name:"description",content:"Ayo berkontribusi di kodeinaja."},{hid:"og:title",property:"og:title",content:"Buat Postingan - Kodeinaja"},{hid:"og:description",property:"og:description",content:"Ayo berkontribusi di kodeinaja."},{hid:"twitter:title",name:"twitter:title",content:"Buat Postingan - Kodeinaja"},{hid:"twitter:description",name:"twitter:description",content:"Ayo berkontribusi di kodeinaja."}]}},mounted:function(){new EasyMDE({element:document.querySelectorAll("#my-editor")[0],autosave:{enabled:!0,uniqueId:"kodeinaja",delay:500,submit_delay:5e3,timeFormat:{locale:"en-US",format:{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}},text:"Autosaved: "},placeholder:"Ayo menulis..."});this.judul=localStorage.smde_judul?localStorage.smde_judul:"",this.deskripsi=localStorage.smde_deskripsi?localStorage.smde_deskripsi:"",this.tag=localStorage.smde_tag?localStorage.smde_tag:"",this.kategori=localStorage.smde_kategori?localStorage.smde_kategori:"",this.username=localStorage.smde_username?localStorage.smde_username:""},watch:{judul:function(e){localStorage.smde_judul,localStorage.smde_judul=e},deskripsi:function(e){localStorage.smde_deskripsi,localStorage.smde_deskripsi=e},tag:function(e){localStorage.smde_tag,localStorage.smde_tag=e},kategori:function(e){localStorage.smde_kategori,localStorage.smde_kategori=e},username:function(e){localStorage.smde_username,localStorage.smde_username=e}},methods:{uploadGambar:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,c,d,m,v,f,h,_,y,k;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.target.files[0],t.prosesUpImg=!0,t.errorUpImg=!1,l=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))},r.next=6,l(n);case 6:return c=r.sent,d=c.search("base64,"),t.gambar=c.slice(parseInt(d)+7,c.length),r.next=11,fetch("https://limitless-sea-61725.herokuapp.com/https://freeimage.host/api/1/upload",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"key=6d207e02198a847aa98d0a2a901485a5&source="+encodeURIComponent(t.gambar)});case 11:return m=r.sent,r.next=14,m.json();case 14:v=r.sent,f=document.querySelectorAll(".EasyMDEContainer"),h=o(f);try{for(h.s();!(_=h.n()).done;)_.value.remove()}catch(e){h.e(e)}finally{h.f()}y=new EasyMDE({element:document.querySelectorAll("#my-editor")[0],autosave:{enabled:!0,uniqueId:"kodeinaja",delay:500,submit_delay:5e3,timeFormat:{locale:"en-US",format:{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}},text:"Autosaved: "},placeholder:"Ayo menulis..."}),200==v.status_code?(k=y.value(),t.gambar=v.image.url,y.value(k+"\n\n![alt text]("+t.gambar+")"),t.prosesUpImg=!1):(t.errorUpImg=v.error.message,t.prosesUpImg=!1);case 20:case"end":return r.stop()}}),r)})))()},kirim:function(){var e,t=o(document.querySelectorAll(".EasyMDEContainer"));try{for(t.s();!(e=t.n()).done;){e.value.remove()}}catch(e){t.e(e)}finally{t.f()}var r=new EasyMDE({element:document.querySelectorAll("#my-editor")[0],autosave:{enabled:!0,uniqueId:"kodeinaja",delay:500,submit_delay:5e3,timeFormat:{locale:"en-US",format:{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit"}},text:"Autosaved: "},placeholder:"Ayo menulis..."}),n=this.generateSlug(this.judul),l="\n---\ntitle: ".concat(this.judul,"\ndescription: ").concat(this.deskripsi,"\ntag: ").concat(this.generateArr(this.tag),"\ncategory: ").concat(this.generateArr(this.kategori),"\nusername: ").concat(this.username,"\n---\n\n").concat(r.value(),"\n"),c="https://github.com/ricko-v/katanime/new/master/static/new?filename=".concat(n,".md&value=").concat(l);window.open(encodeURI(c),"_self"),this.clearStorage()},generateArr:function(e){for(var a=e.split(","),b="[",i=0;i<a.length;i++)i==a.length-1?b+='"'.concat(a[i].trim(),'"]'):b+='"'.concat(a[i].trim(),'",');return b},generateSlug:function(e){return e.toLowerCase().replace(/[' ']/g,"-")},clearStorage:function(){localStorage.smde_kodeinaja="",localStorage.smde_judul="",localStorage.smde_deskripsi="",localStorage.smde_tag="",localStorage.smde_kategori="",localStorage.smde_username=""}}},d=r(64),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Navbar"),e._v(" "),r("div",{staticClass:"container-fluid min-vh-100 bg-silver pt-5"},[r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2"}),e._v(" "),r("div",{staticClass:"col-lg-8 p-0 mb-5"},[r("div",{staticClass:"card shadow-sm p-3"},[r("h3",{staticClass:"font-weight-bold"},[e._v("Buat Postingan")]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"mt-4"},[r("div",[r("label",[e._v("Judul:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.judul,expression:"judul"}],staticClass:"form-control shadow-none mb-3",domProps:{value:e.judul},on:{input:function(t){t.target.composing||(e.judul=t.target.value)}}}),e._v(" "),r("label",[e._v("Deskripsi:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.deskripsi,expression:"deskripsi"}],staticClass:"form-control shadow-none mb-3",domProps:{value:e.deskripsi},on:{input:function(t){t.target.composing||(e.deskripsi=t.target.value)}}}),e._v(" "),r("label",[e._v("Tag:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.tag,expression:"tag"}],staticClass:"form-control shadow-none",domProps:{value:e.tag},on:{input:function(t){t.target.composing||(e.tag=t.target.value)}}}),e._v(" "),e._m(0),e._v(" "),r("label",[e._v("Kategori:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.kategori,expression:"kategori"}],staticClass:"form-control shadow-none",domProps:{value:e.kategori},on:{input:function(t){t.target.composing||(e.kategori=t.target.value)}}}),e._v(" "),e._m(1),e._v(" "),r("label",[e._v("Username Github:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control shadow-none mb-5",domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("textarea",{attrs:{id:"my-editor"}}),e._v(" "),r("div",{staticClass:"d-flex"},[r("button",{staticClass:"btn btn-success shadow-none",on:{click:e.kirim}},[e._v("Kirim")]),e._v(" "),r("div",{staticClass:"ml-3"},[r("input",{ref:"upgambar",staticClass:"form-control-file shadow-none d-none",attrs:{type:"file"},on:{change:e.uploadGambar}}),e._v(" "),e.prosesUpImg?e._e():r("button",{staticClass:"btn btn-outline-primary shadow-none",on:{click:function(t){return e.$refs.upgambar.click()}}},[e._v("upload gambar")]),e._v(" "),e.prosesUpImg?r("button",{staticClass:"btn btn-primary shadow-none"},[e._v("Loading...")]):e._e(),e._v(" "),e.errorUpImg?r("p",[r("small",{staticClass:"text-danger"},[e._v(e._s(e.errorUpImg))])]):e._e()])])])])])])])])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("small",{staticClass:"text-secondary"},[e._v("contoh: github, open-source")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("small",{staticClass:"text-secondary"},[e._v("contoh: javascript, javascript-dasar")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Navbar:r(293).default})}}]);