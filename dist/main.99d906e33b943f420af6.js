(()=>{"use strict";var e={};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function a(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(e){if("string"==typeof e)return t(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,a):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var r=a.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const r=[{image:"./assets/img/laVeterinaria.png",title:"La Veterinaria",description:"Oraginizador de citas veterinarias puedes agregar pacientes, sintomas y un contacto del paciente",urlPage:"https://laveterinaria.netlify.app/",urlCode:"https://github.com/joseluis1061/citas_veterinaria"},{image:"./assets/img/batataBit.png",title:"Batata Bit",description:"Landing Page con diseño para consultar el valor de criptomonedas en líena",urlPage:"https://laveterinaria.netlify.app/",urlCode:"https://github.com/joseluis1061/batataBit"},{image:"./assets/img/blogDeCafe.png",title:"Blog De Café",description:"Landing Page diseñada para los amantes de un buen café",urlPage:"https://dulcet-mooncake-c8416a.netlify.app/",urlCode:"https://github.com/joseluis1061/BlogDeCaffe"}],n=e.p+"assets/img/e6eb28be9931d653c8b1.svg",o=e.p+"assets/img/ae23d0d3c1f7f2579965.png",c=e.p+"assets/img/bb1509c480450c76edf5.svg",i=e.p+"assets/img/d09a61d20296278e6d7c.svg";e.p,e.p,e.p;var s,l;document.querySelector(".logo-header img").src=n,document.querySelector(".main_img-container img").src=o,document.querySelector(".webpack").src=c,document.querySelector(".c").src=i,document.querySelector(".footer-logo img").src=n,s=r.map((function(e){var t=document.createElement("ARTICLE");t.className="proyecto";var a=document.createElement("FIGURE");a.style.backgroundImage="url(".concat(e.image,")"),a.style.backgroundPosition="center",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="cover";var r=document.createElement("DIV");r.className="text-proyecto";var n=document.createElement("DIV");n.className="proyecto-encabezado";var o=document.createElement("H3"),c=document.createTextNode(e.title);o.append(c);var i=document.createElement("P"),s=document.createTextNode(e.description);i.append(s);var l=document.createElement("P"),p=document.createTextNode("Mobile / tablet / laptop");l.append(p),n.append(o,i,l);var u=document.createElement("DIV");u.className="enlace-trabajo";var d=document.createElement("BUTTON");d.className="button button-black";var m=document.createTextNode("Página"),g=document.createElement("A");g.href=e.urlPage,g.target="_blank",g.append(m),d.append(g);var b=document.createElement("BUTTON");b.className="button button-blue";var f=document.createTextNode("Código"),y=document.createElement("A");return y.href=e.urlCode,y.target="_blank",y.append(f),b.append(y),u.append(d),u.append(b),r.append(o,i,l,u),t.append(a,r),t})),(l=document.querySelector(".proyectos-card")).append.apply(l,a(s))})();