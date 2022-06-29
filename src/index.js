import "./styles/main.css";
import "./styles/normalize.css";

import logoJoseNombre from './assets/img/logoJoseNombre.svg';
import PerfilSinFondo from './assets/img/PerfilSinFondo.png';
import webpack from './assets/img/webpack.svg';
import c from './assets/img/c++.svg';
import proyecto1 from './assets/img/batataBit.png';

/* Imqgen logo Perfil */
const logoPerfil = document.querySelector('.logo-header img');
logoPerfil.src = logoJoseNombre;
/* Imagen menu Header */
// const checkMenuImg = document.querySelector('.header_main label img');
// checkMenuImg.src = logoJoseNombre;

/* Imagen perfil main */
const mainImgPerfil = document.querySelector('.main_img-container img');
mainImgPerfil.src = PerfilSinFondo;

/* Imagen Webpack */
const webpackImg = document.querySelector('.webpack');
webpackImg.src = webpack;

/* Imagen c++ */
const cImage = document.querySelector('.c');
cImage.src = c;

/* Imagen logo footer */
const footerLogo = document.querySelector('.footer-logo img');
footerLogo.src = logoJoseNombre;

/* Imagenes proyectos */
const proyectoImg1 = document.querySelector('.proyecto :nth-child(1) img');
console.log(proyectoImg1);
proyectoImg1.src = proyecto1;




