import "./styles/main.css";
import "./styles/normalize.css";
import initialState from "./initialState";
import Header from "./header";
import Main from "./main";
import SobreMi from "./sobreMI";

import logoJoseNombre from './assets/img/logoJoseNombre.svg';
import PerfilSinFondo from './assets/img/PerfilSinFondo.png';
import webpack from './assets/img/webpack.svg';
import c from './assets/img/c++.svg';



Header();
Main();
SobreMi();
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
// function getCards(imgProyecto, tituloProyecto, descripcion){
//   const articleProyecto = document.createElement('ARTICLE');
//   articleProyecto.className = "proyecto";

//   const articleFigure = document.createElement('FIGURE');
//   const articleImg = document.createElement('IMG');
//   articleImg.src = imgProyecto;
//   articleImg.alt = "Imagen del proyecto";
//   articleFigure.append(articleImg);

//   /*Texto proyectos */
//   const articleTextProyecto = document.createElement('DIV');
//   articleTextProyecto.className = "text-proyecto";

//   const articleH3 = document.createElement('H3');
//   const textoH3 = document.createTextNode(tituloProyecto);
//   articleH3.append(textoH3);

//   const articleP1 = document.createElement('P');
//   const textoP1 = document.createTextNode(descripcion)
//   articleP1.append(textoP1);

//   const articleP2 = document.createElement('P');
//   const textoP2 = document.createTextNode("Mobile / tablet / laptop")
//   articleP2.append(textoP2);

//   /*Enlaces */
//   const articleEnlaceTrabajo = document.createElement('DIV');
//   articleEnlaceTrabajo.className = "enlace-trabajo";

//   const articleButtonBlack = document.createElement('BUTTON');
//   articleButtonBlack.className = "button button-black";
//   const textoButtonBlack = document.createTextNode("Página");
//   articleButtonBlack.append(textoButtonBlack);

//   const articleButtonBlue = document.createElement('BUTTON');
//   articleButtonBlue.className = "button button-blue";
//   const textoButtonBlue = document.createTextNode("Código");
//   articleButtonBlue.append(textoButtonBlue);

//   /* Union de elementos */
//   articleEnlaceTrabajo.append(articleButtonBlack);
//   articleEnlaceTrabajo.append(articleButtonBlue);

//   articleTextProyecto.append(articleH3, articleP1, articleP2, articleEnlaceTrabajo);

//   articleProyecto.append(articleFigure, articleTextProyecto);

//   const proyectosCard = document.querySelector('.proyectos-card');
//   proyectosCard.append(articleProyecto);
// }

function getCards(){

  const cards = initialState.map(card =>{
    const articleProyecto = document.createElement('ARTICLE');
    articleProyecto.className = "proyecto";
  
    const articleFigure = document.createElement('FIGURE');

    articleFigure.style.backgroundImage =  `url(${card.image})`;
  
    articleFigure.style.backgroundPosition = "center";
    articleFigure.style.backgroundRepeat = "no-repeat";
    articleFigure.style.backgroundSize = "cover";
    
    // const articleImg = document.createElement('IMG');
    // articleImg.src = card.image;
    // articleImg.alt = "Imagen del proyecto";
    // articleFigure.append(articleImg);
  
    /*Texto proyectos */
    const articleTextProyecto = document.createElement('DIV');
    articleTextProyecto.className = "text-proyecto";

    const proyectoEncabezado = document.createElement('DIV');
    proyectoEncabezado.className = "proyecto-encabezado";
  
    const articleH3 = document.createElement('H3');
    const textoH3 = document.createTextNode(card.title);
    articleH3.append(textoH3);
  
    const articleP1 = document.createElement('P');
    const textoP1 = document.createTextNode(card.description);
    articleP1.append(textoP1);
  
    const articleP2 = document.createElement('P');
    const textoP2 = document.createTextNode("Mobile / tablet / laptop")
    articleP2.append(textoP2);

    proyectoEncabezado.append(articleH3, articleP1, articleP2);
  
    /*Enlaces */
    const articleEnlaceTrabajo = document.createElement('DIV');
    articleEnlaceTrabajo.className = "enlace-trabajo";
  
    const articleButtonBlack = document.createElement('BUTTON');
    articleButtonBlack.className = "button button-black";
    const textoButtonBlack = document.createTextNode("Página");
    const linkPage = document.createElement('A');
    linkPage.href = card.urlPage;
    linkPage.target="_blank";
    linkPage.append(textoButtonBlack);
    articleButtonBlack.append(linkPage);
  
    const articleButtonBlue = document.createElement('BUTTON');
    articleButtonBlue.className = "button button-blue";
    const textoButtonBlue = document.createTextNode("Código");
    const linkCode = document.createElement('A');
    linkCode.href = card.urlCode;
    linkCode.target="_blank";
    linkCode.append(textoButtonBlue);
    articleButtonBlue.append(linkCode);
  
    /* Union de elementos */
    articleEnlaceTrabajo.append(articleButtonBlack);
    articleEnlaceTrabajo.append(articleButtonBlue);
  
    articleTextProyecto.append(articleH3, articleP1, articleP2, articleEnlaceTrabajo);
  
    articleProyecto.append(articleFigure, articleTextProyecto);
  
    return articleProyecto
  });

  const proyectosCard = document.querySelector('.proyectos-card');
  proyectosCard.append(...cards);
}
getCards()


