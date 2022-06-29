import "./styles/main.css";
import "./styles/normalize.css";

import logoJoseNombre from './assets/img/logoJoseNombre.svg';
import PerfilSinFondo from './assets/img/PerfilSinFondo.png';
import webpack from './assets/img/webpack.svg';
import c from './assets/img/c++.svg';
import proyecto1 from './assets/img/batataBit.png';
import proyecto2 from './assets/img/laVeterinaria.png';
import proyecto3 from './assets/img/pageFreelancer.png';
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

/* Cards de proyecto*/ 
function getCards(imgProyecto, tituloProyecto, descripcion){
  const articleProyecto = document.createElement('ARTICLE');
  articleProyecto.className = "proyecto";

  const articleFigure = document.createElement('FIGURE');
  const articleImg = document.createElement('IMG');
  articleImg.src = imgProyecto;
  articleImg.alt = "Imagen del proyecto";
  articleFigure.append(articleImg);

  /*Texto proyectos */
  const articleTextProyecto = document.createElement('DIV');
  articleTextProyecto.className = "text-proyecto";

  const articleH3 = document.createElement('H3');
  const textoH3 = document.createTextNode(tituloProyecto);
  articleH3.append(textoH3);

  const articleP1 = document.createElement('P');
  const textoP1 = document.createTextNode(descripcion)
  articleP1.append(textoP1);

  const articleP2 = document.createElement('P');
  const textoP2 = document.createTextNode("Mobile / tablet / laptop")
  articleP2.append(textoP2);

  /*Enlaces */
  const articleEnlaceTrabajo = document.createElement('DIV');
  articleEnlaceTrabajo.className = "enlace-trabajo";

  const articleButtonBlack = document.createElement('BUTTON');
  articleButtonBlack.className = "button button-black";
  const textoButtonBlack = document.createTextNode("Página");
  articleButtonBlack.append(textoButtonBlack);

  const articleButtonBlue = document.createElement('BUTTON');
  articleButtonBlue.className = "button button-blue";
  const textoButtonBlue = document.createTextNode("Código");
  articleButtonBlue.append(textoButtonBlue);

  /* Union de elementos */
  articleEnlaceTrabajo.append(articleButtonBlack);
  articleEnlaceTrabajo.append(articleButtonBlue);

  articleTextProyecto.append(articleH3, articleP1, articleP2, articleEnlaceTrabajo);

  articleProyecto.append(articleFigure, articleTextProyecto);

  const proyectosCard = document.querySelector('.proyectos-card');
  proyectosCard.append(articleProyecto);
}

getCards(proyecto2, 'La Veterinaria', 'Gestion de citas para pacientes de una veterinaria');
getCards(proyecto3, 'FreeLancer Page', 'Landing Page para un desarrollador FreeLancer');
getCards(proyecto1, 'Batata Bit', 'Landind Page para obtener los precios de critomonedas');