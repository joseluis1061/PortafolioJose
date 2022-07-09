(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var t=e.g.document;if(!a&&t&&(t.currentScript&&(a=t.currentScript.src),!a)){var n=t.getElementsByTagName("script");n.length&&(a=n[n.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=e.p+"assets/img/e6eb28be9931d653c8b1.svg";const t=function(){var e=document.querySelector(".header"),t=document.createElement("DIV");t.className="header_main .container pd-container";var n=document.createElement("FIGURE");n.className="logo-header";var r=document.createElement("A");r.href="#Home";var c=document.createElement("IMG");c.alt="logo Perfil",c.src=a,r.appendChild(c),n.append(r);var o=document.createElement("LABEL");o.htmlFor="check-menu",o.className="label-menu";var d=document.createElement("I");d.className="fa-solid fa-bars",o.append(d);var m=document.createElement("INPUT");m.id="check-menu",m.className="check-menu",m.type="checkbox";var s=document.createElement("NAV");s.className="header_nav";var l=document.createElement("A");l.href="#Home";var p=document.createTextNode("HOME");l.appendChild(p);var i=document.createElement("A");i.href="#Sobre-mi",p=document.createTextNode("Sobre mí"),i.appendChild(p);var u=document.createElement("A");u.href="#Habilidades",p=document.createTextNode("Habilidades"),u.appendChild(p);var f=document.createElement("A");f.href="#Proyectos",p=document.createTextNode("Proyectos"),f.appendChild(p);var v=document.createElement("A");return v.href="#Contactame",p=document.createTextNode("Contactame"),v.appendChild(p),s.append(l,i,u,f,v),t.append(n,o,m,s),e.append(t),e},n=e.p+"assets/img/ae23d0d3c1f7f2579965.png";const r=function(){var e=document.querySelector(".main"),a=document.createElement("DIV");a.className="overlay pd-container";var t=document.createElement("SECTION");t.className="main_information mgt-25";var r=document.createElement("PICTURE");r.className="main_img-container";var c=document.createElement("IMG");c.alt="imagen Perfil",c.src=n,r.appendChild(c);var o=document.createElement("H1"),d=document.createTextNode("JOSÉ LÚIS ZúÑIGA");o.append(d);var m=document.createElement("H3");m.className="subtitle-main",d=document.createTextNode("Frontend Developer"),m.append(d);var s=document.createElement("P");return s.className="legend-main",d=document.createTextNode("I build web apps by meet your dreams"),s.append(d),t.append(r,o,m,s),a.append(t),e.append(a),e};function c(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(e){if("string"==typeof e)return c(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,a):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const d=[{class:"fa-solid fa-brain",text:"Planeación"},{class:"fa-solid fa-handshake-angle",text:"Colaborativo"},{class:"fa-solid fa-dice",text:"Dinamico"},{class:"fa-solid fa-dna",text:"Evolutivo"}];const m=function(){var e=document.querySelector(".sobre-mi"),a=document.createElement("DIV");a.className="sobre_mi-container pd-container container";var t=document.createElement("H2"),n=document.createTextNode("Sobre mí");t.appendChild(n);var r=document.createElement("P");n=document.createTextNode("Hola, soy "),r.appendChild(n);var c=document.createElement("Span");c.className="color-yellow",n=document.createTextNode("Jose Luis Zúñiga"),c.append(n),r.append(c),n=document.createTextNode(", soy un programador con múltiples experiencias y me desempeño como "),r.append(n);var m=document.createElement("Span");m.className="color-yellow",n=document.createTextNode("Frontend."),m.append(n),r.append(m);var s=document.createElement("P");n=document.createTextNode("Cuento con otras experiencias como "),s.appendChild(n);var l=document.createElement("Span");l.className="color-yellow",n=document.createTextNode("desarrollador de software"),l.append(n),s.append(l),n=document.createTextNode(", en aplicaciones de "),s.append(n);var p=document.createElement("Span");p.className="color-yellow",n=document.createTextNode("visión artificial"),p.append(n),s.append(p),n=document.createTextNode("  para la automatización industrial y el desarrollo de "),s.append(n);var i=document.createElement("Span");i.className="color-yellow",n=document.createTextNode("drivers para microcontroladores."),i.append(n),s.append(i);var u=document.createElement("P");n=document.createTextNode("Mi profesión es "),u.appendChild(n);var f=document.createElement("Span");f.className="color-yellow",n=document.createTextNode("ingeniero Físico"),f.append(n),u.append(f),n=document.createTextNode(" graduado de la Universidad del Cauca. Una carrera de conocimiento transversal que permite incorporar diversas tecnologías, en especial la programación que es el área donde me gusta trabajar."),u.append(n);var v=function(){var e=document.createElement("DIV");e.className="actitudes";var a=d.map((function(e){var a=document.createElement("DIV");a.className="actitud";var t=document.createElement("I");t.className=e.class;var n=document.createElement("P"),r=document.createTextNode(e.text);return n.append(r),a.append(t,n),a}));return e.append.apply(e,o(a)),e}();return a.append(t,r,s,u,v),e.append(a),e};const s=[{type:"fontawesome",class:"fa-brands fa-js-square",text:"JavaScript"},{type:"fontawesome",class:"fa-brands fa-html5",text:"HTML5"},{type:"fontawesome",class:"fa-brands fa-css3",text:"CSS3"},{type:"fontawesome",class:"fa-brands fa-python",text:"Python"},{type:"fontawesome",class:"fa-brands fa-sass",text:"SASS"},{type:"fontawesome",class:"fa-brands fa-gulp",text:"Gulp"},{type:"fontawesome",class:"fa-brands fa-react",text:"React.Js"},{type:"imagen",class:"webpack",text:"WebPack",alt:"Webpack",src:e.p+"assets/img/bb1509c480450c76edf5.svg"},{type:"imagen",class:"fa-brands fa-js-square",text:"JavaScript",alt:"C++",src:e.p+"assets/img/d09a61d20296278e6d7c.svg"}];const l=function(){var e=document.querySelector(".habilidades");console.log();var a=document.createElement("DIV");a.className="habilidades-container pd-container container";var t=document.createElement("H2"),n=document.createTextNode("Habilidades");t.appendChild(n);var r=document.createElement("DIV");r.className="habilidades-text";var c=document.createElement("P");n=document.createTextNode("Para desarrollo/codificar, uso diferentes herramientas que permiten una ejecución rápida y eficiente. De acuerdo, a las necesidades del proyecto."),c.append(n),r.append(c);var d=function(){var e=document.createElement("DIV");e.className="tecnologias-container";var a=s.map((function(e){if("fontawesome"===e.type){var a=document.createElement("DIV");a.className="tecnologia";var t=document.createElement("I");t.className=e.class;var n=document.createElement("P"),r=document.createTextNode(e.text);return n.append(r),a.append(t,n),a}if("imagen"===e.type){var c=document.createElement("DIV");c.className="tecnologia";var o=document.createElement("IMG");o.className=e.class,o.alt=e.alt,o.src=e.src;var d=document.createElement("P"),m=document.createTextNode(e.text);return d.append(m),c.append(o,d),c}}));return e.append.apply(e,o(a)),e}();return a.append(t,r,d),e.append(a),e},p=e.p+"assets/img/8b0f156695a4b7311e53.png",i=e.p+"assets/img/c5a86f19ab263858e62b.png";const u=[{image:p,title:"La Veterinaria",description:"Oraginizador de citas veterinarias puedes agregar pacientes, síntomas y un contacto del paciente",urlPage:"https://laveterinaria.netlify.app/",urlCode:"https://github.com/joseluis1061/citas_veterinaria"},{image:e.p+"assets/img/cc75e6f4372b58250df8.png",title:"Blog De Café",description:"Landing Page diseñada para los amantes de un buen café que quieran saber todos los secretos para su preparación",urlPage:"https://dulcet-mooncake-c8416a.netlify.app/",urlCode:"https://github.com/joseluis1061/BlogDeCaffe"},{image:e.p+"assets/img/4fdfeb60236f4f5f8038.png",title:"FreeLancerPage",description:"Landing Page diseñada para un freeLancer facil de adaptar en diseño e información",urlPage:"https://portafoliofrontendweb.netlify.app/",urlCode:"https://github.com/joseluis1061/sitioFrelancer"},{image:i,title:"Batata Bit",description:"Landing Page con diseño para consultar el valor de criptomonedas en líena",urlPage:"https://luminous-gingersnap-397aa2.netlify.app",urlCode:"https://github.com/joseluis1061/batataBit"}];const f=function(){var e=document.querySelector(".proyectos"),a=document.createElement("DIV");a.className="proyectos-container pd-container container";var t=document.createElement("H2"),n=document.createTextNode("Proyectos");t.append(n);var r=document.createElement("P");n=document.createTextNode("Estos son algunos de los proyectos en los que he trabajado, puedes ver el código y la pagina. Contactame para saber más "),r.append(n);var c=document.createElement("A");c.href="#Contactame",c.className="color-blue",n=document.createTextNode("acerca "),c.append(n),r.append(c),n=document.createTextNode("de mí."),r.append(n);var d=function(){var e=document.createElement("DIV");e.className="proyectos-card";var a=u.map((function(e){var a=document.createElement("ARTICLE");a.className="proyecto";var t=document.createElement("FIGURE");t.style.backgroundImage="url(".concat(e.image,")"),t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover";var n=document.createElement("DIV");n.className="text-proyecto";var r=document.createElement("DIV");r.className="proyecto-encabezado";var c=document.createElement("H3"),o=document.createTextNode(e.title);c.append(o);var d=document.createElement("P"),m=document.createTextNode(e.description);d.append(m);var s=document.createElement("P"),l=document.createTextNode("Mobile / tablet / laptop");s.append(l),r.append(c,d,s);var p=document.createElement("DIV");p.className="enlace-trabajo";var i=document.createElement("BUTTON");i.className="button button-black";var u=document.createTextNode("Página"),f=document.createElement("A");f.href=e.urlPage,f.target="_blank",f.append(u),i.append(f);var v=document.createElement("BUTTON");v.className="button button-blue";var b=document.createTextNode("Código"),E=document.createElement("A");return E.href=e.urlCode,E.target="_blank",E.append(b),v.append(E),p.append(i),p.append(v),n.append(c,d,s,p),a.append(t,n),a}));return e.append.apply(e,o(a)),e}();return a.append(t,r,d),e.append(a),e};const v=[{type:"DIV",href:"https://www.linkedin.com/in/jose-zu%C3%B1iga-2b174b131/",iClass:"fa-brands fa-linkedin",text:"Linkedin"},{type:"DIV",href:"https://github.com/joseluis1061",iClass:"fa-brands fa-github-square",text:"Github"},{type:"DIV",href:"https://t.me/JoseLuisZuniga1",iClass:"fa-brands fa-telegram",text:"Telegram"},{type:"LABEL",forHtml:"name",iClass:"fa-solid fa-envelope",text:"Mail"}];var b=function(e,a){""===e.value.trim()?(e.style.border="2px solid red",a.innerHTML="Todos los campos * son obligatorios"):(e.style.border="2px solid green",a.innerHTML="")};const E=function(){var e=document.querySelector(".contactame"),a=document.createElement("DIV");a.className="contactame-container pd-container container";var t=document.createElement("H2"),n=document.createTextNode("Contactame");t.appendChild(n);var r=function(){var e=document.createElement("DIV");e.className="sociales";var a=v.map((function(e){if("DIV"===e.type){var a=document.createElement("DIV");a.className="social";var t=document.createElement("A");t.href=e.href,t.target="_blank";var n=document.createElement("I");n.className=e.iClass,t.append(n);var r=document.createElement("P"),c=document.createTextNode(e.text);return r.append(c),a.append(t,r),a}if("LABEL"===e.type){var o=document.createElement("LABEL");o.className="social",o.forHtml=e.forHtml;var d=document.createElement("I");d.className=e.iClass;var m=document.createElement("P"),s=document.createTextNode(e.text);return m.append(s),o.append(d,m),o}}));return e.append.apply(e,o(a)),e}(),c=function(){var e=document.createElement("FORM");e.className="form__contacto",e.name="form__contacto",e.method="POST",e.dataNetlify=!0,e.setAttribute("data-netlify","true"),e.addEventListener("submit",(function(e){e.preventDefault(),b(n,s),b(c,s),b(d,s)}));var a=document.createElement("LABEL");a.className="campo__label",a.forHtml="name";var t=document.createTextNode("*Nombre");a.append(t);var n=document.createElement("INPUT");n.className="campo__field",n.setAttribute("type","text"),n.id="name",n.name="name",n.placeholder="Nombre",a.append(n);var r=document.createElement("LABEL");r.className="campo__label",r.forHtml="email",t=document.createTextNode("*Email"),r.append(t);var c=document.createElement("INPUT");c.className="campo__field",c.setAttribute("type","text"),c.id="email",c.name="email",c.placeholder="*Email",r.append(c);var o=document.createElement("LABEL");o.className="campo__label",o.forHtml="mesage",t=document.createTextNode("*Mensaje:"),o.append(t);var d=document.createElement("TEXTAREA");d.className="campo__field campo__field-textarea",d.setAttribute("type","text"),d.id="textarea",d.name="mesage",d.placeholder="Mensaje...",o.append(d);var m=document.createElement("BUTTON");m.className="button button-blue button-mail",m.type="submit",m.id="enviar",t=document.createTextNode("Enviar"),m.append(t);var s=document.createElement("P");return s.className="text-center",s.style.color="red",e.append(a,r,o,s,m),e}();return a.append(t,r,c),e.append(a),e};const N=function(){var e=document.querySelector(".footer"),t=document.createElement("DIV");t.className="footer-container pd-container container";var n=document.createElement("A");n.className="footer-logo",n.href="#Home";var r=document.createElement("IMG");r.src=a,r.alt="Logo Perfil",n.append(r);var c=document.createElement("DIV");c.className="footer-text";var o=document.createElement("P"),d=document.createTextNode("Todos los derechos reservados ©.");return o.append(d),c.append(o),t.append(n,c),e.append(t),e};t(),r(),m(),l(),f(),E(),N()})();