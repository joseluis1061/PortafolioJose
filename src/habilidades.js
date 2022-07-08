import "./styles/main.css";
import "./styles/normalize.css";
import tecnologiasList from "./tecnologiasList";

const getTecnologia = () => {
  const tecnologiasContainer = document.createElement('DIV');
  tecnologiasContainer.className = 'tecnologias-container';

  const tegnologiasGenerator = tecnologiasList.map(item=>{

    if (item.type === 'fontawesome'){
      const tecnologia = document.createElement('DIV');
      tecnologia.className = 'tecnologia';
      const tecnologiaIcon = document.createElement('I');
      tecnologiaIcon.className = item.class;
      const tecnologiaP = document.createElement('P');
      const text = document.createTextNode(item.text);
      tecnologiaP.append(text);
      tecnologia.append(tecnologiaIcon, tecnologiaP)

      return tecnologia;
    }
    if(item.type === 'imagen'){
      const tecnologia = document.createElement('DIV');
      tecnologia.className = 'tecnologia';
      const tecnologiaImage = document.createElement('IMG');
      tecnologiaImage.className = item.class;
      tecnologiaImage.alt = item.alt;
      tecnologiaImage.src = item.src;
      const tecnologiaP = document.createElement('P');
      const text = document.createTextNode(item.text);
      tecnologiaP.append(text);
      tecnologia.append(tecnologiaImage, tecnologiaP)

      return tecnologia;
    }
  })

  tecnologiasContainer.append(...tegnologiasGenerator);
  return tecnologiasContainer;  
};


const Habilidades = ()=>{

  const habilidades = document.querySelector('.habilidades');
  console.log()
  const habilidadesContainer = document.createElement('DIV');
  habilidadesContainer.className = 'habilidades-container pd-container container';

  const habilidadesH2 = document.createElement('H2');
  let text = document.createTextNode('Habilidades');
  habilidadesH2.appendChild(text);

  const habilidadesText = document.createElement('DIV');
  habilidadesText.className = 'habilidades-text';
  const habilidadesTextP = document.createElement('P');
  text = document.createTextNode('Para desarrollo/codificar, uso diferentes herramientas que permiten una ejecución rápida y eficiente. De acuerdo, a las necesidades del proyecto.');
  habilidadesTextP.append(text);
  habilidadesText.append(habilidadesTextP);

  const tecnologiasContainer = getTecnologia();
  
  habilidadesContainer.append(habilidadesH2, habilidadesText, tecnologiasContainer);

  habilidades.append(habilidadesContainer);
  return habilidades;
};

export default Habilidades;