import initialState from "./initialState";


function getCards(){

  const proyectosCard = document.createElement('DIV');
  proyectosCard.className = 'proyectos-card';

  const cards = initialState.map(card =>{
    const articleProyecto = document.createElement('ARTICLE');
    articleProyecto.className = "proyecto";
  
    const articleFigure = document.createElement('FIGURE');

    articleFigure.style.backgroundImage =  `url(${card.image})`;
  
    articleFigure.style.backgroundPosition = "center";
    articleFigure.style.backgroundRepeat = "no-repeat";
    articleFigure.style.backgroundSize = "cover";
    
  
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

  
  proyectosCard.append(...cards);

  return proyectosCard;
}


const Proyectos = ()=>{
  const proyectos = document.querySelector('.proyectos');

  const proyectosContainer = document.createElement('DIV');
  proyectosContainer.className = 'proyectos-container pd-container container';

  const proyectosH2 = document.createElement('H2');
  let texto = document.createTextNode('Proyectos');
  proyectosH2.append(texto);

  const proyectosP = document.createElement('P');
  texto = document.createTextNode('Estos son algunos de los proyectos en los que he trabajado, puedes ver el código y la pagina. Contactame para saber más ');
  proyectosP.append(texto);

  const proyectosPContactame = document.createElement('A');
  proyectosPContactame.href = '#Contactame';
  proyectosPContactame.className = 'color-blue';
  texto = document.createTextNode('acerca ');
  proyectosPContactame.append(texto);

  proyectosP.append(proyectosPContactame);

  texto = document.createTextNode('de mí.');
  proyectosP.append(texto);

  const proyectosCard = getCards();

  proyectosContainer.append(proyectosH2, proyectosP, proyectosCard)

  proyectos.append(proyectosContainer);
  return proyectos;
};

export default Proyectos;