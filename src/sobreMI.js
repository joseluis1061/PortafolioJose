/*Header SobreMi */
import "./styles/main.css";
import "./styles/normalize.css";
import actitudList from "./actitudList";

const getActitudes = () => {  
  const actitudes = document.createElement('DIV');
  actitudes.className = 'actitudes';

  const actitudGenerator = actitudList.map((item) => {    

    const actitud = document.createElement('DIV');
    actitud.className = 'actitud';

    const actitudIcon = document.createElement('I');
    actitudIcon.className = item.class;
    
    const actitudP = document.createElement('P');
    const texto = document.createTextNode(item.text);
    actitudP.append(texto);   

    actitud.append(actitudIcon, actitudP);
    return actitud;
  })

  actitudes.append(...actitudGenerator);

  return actitudes;
};


const SobreMi = () => {
  const sobreMi = document.querySelector(".sobre-mi");

  const sobreMiContainer = document.createElement('DIV');
  sobreMiContainer.className = 'sobre_mi-container pd-container container';

  const sobreMiH2 = document.createElement('H2');
  let text = document.createTextNode('Sobre mí');
  sobreMiH2.appendChild(text);

  /*Parrafo 1*/
  const sobreMiP1 = document.createElement('P');
  text = document.createTextNode('Hola, soy ');
  sobreMiP1.appendChild(text); 
  const sobreMiSpan1P1 = document.createElement('Span');
  sobreMiSpan1P1.className = 'color-yellow';
  text = document.createTextNode('Jose Luis Zúñiga');
  sobreMiSpan1P1.append(text);
  sobreMiP1.append(sobreMiSpan1P1);

  text = document.createTextNode(', soy un programador con múltiples experiencias y me desempeño como ');
  sobreMiP1.append(text);

  const sobreMiSpan2P1 = document.createElement('Span');
  sobreMiSpan2P1.className = 'color-yellow';
  text = document.createTextNode('Frontend.');
  sobreMiSpan2P1.append(text);
  sobreMiP1.append(sobreMiSpan2P1);

  /*Parrafo 2*/
  const sobreMiP2 = document.createElement('P');
  text = document.createTextNode('Cuento con otras experiencias como ');
  sobreMiP2.appendChild(text); 
  const sobreMiSpan1P2 = document.createElement('Span');
  sobreMiSpan1P2.className = 'color-yellow';
  text = document.createTextNode('desarrollador de software');
  sobreMiSpan1P2.append(text);
  sobreMiP2.append(sobreMiSpan1P2);

  text = document.createTextNode(', en aplicaciones de ');
  sobreMiP2.append(text);

  const sobreMiSpan2P2 = document.createElement('Span');
  sobreMiSpan2P2.className = 'color-yellow';
  text = document.createTextNode('visión artificial');
  sobreMiSpan2P2.append(text);
  sobreMiP2.append(sobreMiSpan2P2);

  text = document.createTextNode('  para la automatización industrial y el desarrollo de ');
  sobreMiP2.append(text);

  const sobreMiSpan3P2 = document.createElement('Span');
  sobreMiSpan3P2.className = 'color-yellow';
  text = document.createTextNode('drivers para microcontroladores.');
  sobreMiSpan3P2.append(text);
  sobreMiP2.append(sobreMiSpan3P2);

  /*Parrafo  3*/
  const sobreMiP3 = document.createElement('P');
  text = document.createTextNode('Mi profesión es ');
  sobreMiP3.appendChild(text); 
  const sobreMiSpan1P3 = document.createElement('Span');
  sobreMiSpan1P3.className = 'color-yellow';
  text = document.createTextNode('ingeniero Físico');
  sobreMiSpan1P3.append(text);
  sobreMiP3.append(sobreMiSpan1P3);

  text = document.createTextNode(' graduado de la Universidad del Cauca. Una carrera de conocimiento transversal que permite incorporar diversas tecnologías, en especial la programación que es el área donde me gusta trabajar.');
  sobreMiP3.append(text);

  /*Actitudes */
  const actitudes = getActitudes();

  sobreMiContainer.append(sobreMiH2,sobreMiP1, sobreMiP2, sobreMiP3, actitudes);

  sobreMi.append(sobreMiContainer);
  
  return sobreMi;
};

export default SobreMi;