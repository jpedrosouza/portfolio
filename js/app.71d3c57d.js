(function(t){function e(e){for(var c,o,i=e[0],r=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);b&&b(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],c=!0,o=1;o<a.length;o++){var r=a[o];0!==s[r]&&(c=!1)}c&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var c={},s={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e8449b60"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,c){a=s[t]=[e,c]}));e.push(a[2]=c);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=o(t);var l=new Error;n=function(e){r.onerror=r.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var c=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+n+")",l.name="ChunkLoadError",l.type=c,l.request=n,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:r})}),12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(a,c,function(e){return t[e]}.bind(null,c));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/",i.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var b=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0050":function(t,e,a){t.exports=a.p+"img/joao.2ff2f71b.png"},"0c65":function(t,e,a){"use strict";a("a0b4")},"14f6":function(t,e,a){t.exports=a.p+"img/github.84e3a2b3.svg"},1755:function(t,e,a){t.exports=a.p+"img/chevron-down.b91bfc7b.svg"},"19cc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgBvVU7UuswFJUdLyCvykwmhVnBM0nzOpwVvJcVkNfRAR0dUFECKyCsgGQHos7PrCCmSxn6fDjHXIEsQphxMpyZG8lXV+f+JMVTDhqNxh2GNiSBdBaLRS9JklR9gSiKyr7vH3OP53khxtZwOOyadc8xDkul0sThSCF6tVrFIChjTpmJnhKL7h3L5TIcj8fPnPsOWSijBlmTo+hMdIaIYwT5J3Njn0WOjPYNYc4BojcEL4PBQCPVJiL/T+EmlOsXdB5HflNPYtrR3gQA3cxwBrYDbEzhhNMDoxuNRh3lAD0hQSJiI3Jt3QyuZdpVxdDjDzI7/+QADab3GIspMrlUBYB9J+rtAMTC9+EANY05on5607HcBJYOJ6hn89klyhqEDJ7VFkCAqc3nr7Epqx3CdpBKBKHaAtj/W8Yk5wC10zI94PVXBcCXQL3dbDY870AaqyHlIAjOVQGgsYdKbrY5KCXboFarPaHJR5j+qVarYaVSeZpOp7PviJkx7K9QljOJvmn2ea5xvV7nu3NnqfjQPbKEiEpbpDEy/Yu17P5Qh/kMl/W03+93jF3mAE/0RAwuTS9geIHh0HKU4s3ZswKZOAdCI/JTBJF7PgIhzk4PIwcxU+vCmA4u8P3AgLF27yR7C7nmzUdQ+/I+fULWZDxoe7KBYJPa/F+AsFTZlZ/P5zf2RpB2shIgsK/I3x0QSJ/viHbWYzNxSTaRrnVAoCwtDPdqh8g5YFTIpA1HLFlLZCsE65RySSg8YWrnDmzwlBRZ+zG8ArTzFvBOrF6MAAAAAElFTkSuQmCC"},"1b06":function(t,e,a){"use strict";a("7b0d")},2553:function(t,e,a){t.exports=a.p+"img/pedro.a28cc5f2.png"},"3ae9":function(t,e,a){t.exports=a.p+"img/mail.852d66f7.svg"},"3e21":function(t,e,a){t.exports=a.p+"img/vinicius.12b2272f.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function s(t,e){var a=Object(c["u"])("router-view");return Object(c["o"])(),Object(c["c"])(a)}a("ff1c");const n={};n.render=s;var o=n,i=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),r=a("2553"),l=a.n(r),u=a("0050"),b=a.n(u),d=a("e80e"),f=a.n(d),m=a("3e21"),p=a.n(m),g=a("b504"),j=a.n(g),O=a("fc43"),v=a.n(O),h=a("1755"),A=a.n(h),_=a("14f6"),x=a.n(_),w=a("3ae9"),y=a.n(w),I={class:"home"},P=Object(c["f"])("div",{class:"welcome-container"},[Object(c["f"])("div",{class:"welcome_message"},[Object(c["f"])("span",{class:"message_welcome"},[Object(c["e"])("Bem-vindo "),Object(c["f"])("span",{class:"non_negrite"},"ao")]),Object(c["f"])("span",{class:"message_below"},"nosso portfolio")]),Object(c["f"])("div",{class:"photos"},[Object(c["f"])("img",{class:"author_image",src:l.a,alt:"Imagem de Pedro Henrique"}),Object(c["f"])("img",{class:"author_image",src:b.a,alt:"Imagem de João Pedro"}),Object(c["f"])("img",{class:"author_image",src:f.a,alt:"Imagem de Henrique"}),Object(c["f"])("img",{class:"author_image",src:p.a,alt:"Imagem default"}),Object(c["f"])("img",{class:"author_image",src:j.a,alt:"Imagem default"}),Object(c["f"])("img",{class:"author_image",src:v.a,alt:"Imagem default"})])],-1),C=Object(c["f"])("img",{class:"down_icon",src:A.a,alt:"Mais conteúdo abaixo"},null,-1),S=Object(c["f"])("div",{class:"about_us"},[Object(c["f"])("span",{class:"about_title"},"Sobre nós"),Object(c["f"])("p",{class:"about_text"}," Somos um grupo de estudantes da Universidade do Vale do Itajaí | Univali, cursando Análise e Desenvolvimento de Sistemas. Reunimos nesse portfólio alguns de nossos projetos. ")],-1),k=Object(c["f"])("div",{class:"contact"},[Object(c["f"])("span",{class:"contact_title"}," Contato "),Object(c["f"])("div",{class:"users_contacts"},[Object(c["f"])("div",{class:"contact_container"},[Object(c["f"])("div",{class:"image_buttons"},[Object(c["f"])("img",{class:"author_image",src:l.a,alt:"",srcset:""}),Object(c["f"])("div",{class:"buttons"},[Object(c["f"])("img",{class:"github_social_icon",src:x.a,alt:"GitHub"})])]),Object(c["f"])("div",{class:"email"},[Object(c["f"])("img",{src:y.a,alt:"",srcset:""}),Object(c["f"])("span",null,"psouza.1650@gmail.com")])]),Object(c["f"])("div",{class:"contact_container"},[Object(c["f"])("div",{class:"image_buttons"},[Object(c["f"])("img",{class:"author_image",src:b.a,alt:"",srcset:""}),Object(c["f"])("div",{class:"buttons"},[Object(c["f"])("img",{class:"github_social_icon",src:x.a,alt:"GitHub"})])]),Object(c["f"])("div",{class:"email"},[Object(c["f"])("img",{src:y.a,alt:"",srcset:""}),Object(c["f"])("span",null,"jsouza.1650@gmail.com")])]),Object(c["f"])("div",{class:"contact_container"},[Object(c["f"])("div",{class:"image_buttons"},[Object(c["f"])("img",{class:"author_image",src:f.a,alt:"",srcset:""}),Object(c["f"])("div",{class:"buttons"},[Object(c["f"])("img",{class:"github_social_icon",src:x.a,alt:"GitHub"})])]),Object(c["f"])("div",{class:"email"},[Object(c["f"])("img",{src:y.a,alt:"",srcset:""}),Object(c["f"])("span",null,"Paulo.Henrique.tjk@gmail.com")])]),Object(c["f"])("div",{class:"contact_container"},[Object(c["f"])("div",{class:"image_buttons"},[Object(c["f"])("img",{class:"author_image",src:j.a,alt:"",srcset:""}),Object(c["f"])("div",{class:"buttons"},[Object(c["f"])("img",{class:"github_social_icon",src:x.a,alt:"GitHub"})])]),Object(c["f"])("div",{class:"email"},[Object(c["f"])("img",{src:y.a,alt:"",srcset:""}),Object(c["f"])("span",null,"emanuelricardokichel@hotmail.com")])]),Object(c["f"])("div",{class:"contact_container"},[Object(c["f"])("div",{class:"image_buttons"},[Object(c["f"])("img",{class:"author_image",src:p.a,alt:"",srcset:""}),Object(c["f"])("div",{class:"buttons"},[Object(c["f"])("img",{class:"github_social_icon",src:x.a,alt:"GitHub"})])]),Object(c["f"])("div",{class:"email"},[Object(c["f"])("img",{src:y.a,alt:"",srcset:""}),Object(c["f"])("span",null,"viniaviana@gmail.com")])]),Object(c["f"])("div",{class:"contact_container"},[Object(c["f"])("div",{class:"image_buttons"},[Object(c["f"])("img",{class:"author_image",src:v.a,alt:"",srcset:""}),Object(c["f"])("div",{class:"buttons"},[Object(c["f"])("img",{class:"github_social_icon",src:x.a,alt:"GitHub"})])]),Object(c["f"])("div",{class:"email"},[Object(c["f"])("img",{src:y.a,alt:"",srcset:""}),Object(c["f"])("span",null,"mauriciocasanova@yahoo.com.br")])])])],-1);function H(t,e,a,s,n,o){var i=Object(c["u"])("Header"),r=Object(c["u"])("Slider");return Object(c["o"])(),Object(c["c"])("div",I,[Object(c["f"])(i),P,C,Object(c["f"])(r,{class:"projects_slider"}),S,k])}var B=a("9d64"),E=a.n(B),J=a("19cc"),Y=a.n(J),T=Object(c["y"])("data-v-0ecce0dc");Object(c["r"])("data-v-0ecce0dc");var V={class:"header"},Q=Object(c["f"])("div",{class:"images"},[Object(c["f"])("img",{src:E.a,alt:"Portfólio logo"}),Object(c["f"])("img",{class:"github_icon",src:Y.a,alt:"Github logo"})],-1);Object(c["p"])();var R=T((function(t,e,a,s,n,o){return Object(c["o"])(),Object(c["c"])("div",V,[Q])})),D={name:"Header"};a("ff4d");D.render=R,D.__scopeId="data-v-0ecce0dc";var F=D,U=a("ab16"),z=a.n(U),M=a("823f"),G=a.n(M),K=a("c2cd"),L=a.n(K),N=Object(c["y"])("data-v-856cb2f2");Object(c["r"])("data-v-856cb2f2");var q={id:"carouselExampleIndicators",class:"carousel","data-bs-ride":"carousel"},Z=Object(c["f"])("div",{class:"carousel-indicators"},[Object(c["f"])("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(c["f"])("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(c["f"])("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1),X=Object(c["f"])("div",{class:"carousel-item active"},[Object(c["f"])("img",{src:z.a,class:"d-block w-100",alt:"..."})],-1),W=Object(c["f"])("img",{src:G.a,class:"d-block w-100",alt:"..."},null,-1),$=Object(c["f"])("img",{src:L.a,class:"d-block w-100",alt:"..."},null,-1),tt=Object(c["d"])('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-856cb2f2><span class="carousel-control-prev-icon" aria-hidden="true" data-v-856cb2f2></span><span class="visually-hidden" data-v-856cb2f2>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-856cb2f2><span class="carousel-control-next-icon" aria-hidden="true" data-v-856cb2f2></span><span class="visually-hidden" data-v-856cb2f2>Next</span></button>',2);Object(c["p"])();var et=N((function(t,e,a,s,n,o){return Object(c["o"])(),Object(c["c"])("div",q,[Z,Object(c["f"])("div",{class:"carousel-inner",onClick:e[3]||(e[3]=function(t){return o.go_link("ouv-me")})},[X,Object(c["f"])("div",{class:"carousel-item",onClick:e[1]||(e[1]=function(t){return o.go_link("calculator")})},[W]),Object(c["f"])("div",{class:"carousel-item",onClick:e[2]||(e[2]=function(t){return o.go_link("letter")})},[$])]),tt])})),at={name:"Slider",methods:{go_link:function(t){"ouv-me"==t?window.open("http://ouvme.com/"):"calculator"==t?window.open("https://uzaha.github.io/calculators/compoundInterestCalculator/"):"letter"==t&&window.open("https://paulohenr945.github.io/atividade-2/")}}};a("1b06");at.render=et,at.__scopeId="data-v-856cb2f2";var ct=at,st={name:"Home",components:{Slider:ct,Header:F}};a("0c65");st.render=H;var nt=st,ot=[{path:"/",name:"Home",component:nt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],it=Object(i["a"])({history:Object(i["b"])("/portfolio/"),routes:ot}),rt=it;Object(c["b"])(o).use(rt).mount("#app")},"676e":function(t,e,a){},"7b0d":function(t,e,a){},"823f":function(t,e,a){t.exports=a.p+"img/second_slide.83dc765d.png"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.cc44c3fe.png"},a0b4:function(t,e,a){},a48b:function(t,e,a){},ab16:function(t,e,a){t.exports=a.p+"img/first_slide.db8dde1c.png"},b504:function(t,e,a){t.exports=a.p+"img/emanuel.5b1d9846.jpg"},c2cd:function(t,e,a){t.exports=a.p+"img/third_slide.5bc3c9bc.jpg"},e80e:function(t,e,a){t.exports=a.p+"img/henrique.2092716f.png"},fc43:function(t,e,a){t.exports=a.p+"img/mauricio.3a6a5409.png"},ff1c:function(t,e,a){"use strict";a("676e")},ff4d:function(t,e,a){"use strict";a("a48b")}});
//# sourceMappingURL=app.71d3c57d.js.map