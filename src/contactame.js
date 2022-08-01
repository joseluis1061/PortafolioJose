import socialesList from "./socialesList";
import Formulario from "./formulario";

const getSociales = () => {

  const sociales = document.createElement('DIV');
  sociales.className = 'sociales';

  const socialGenerator = socialesList.map(item=>{
    if(item.type === 'DIV'){
      const social = document.createElement('DIV');
      social.className = 'social';

      const socialA = document.createElement('A');
      socialA.href = item.href;
      console.log('item.href');
      console.log(item.href);
      socialA.target = '_blank';
      const socialIcon = document.createElement('I');
      socialIcon.className = item.iClass;
      socialA.append(socialIcon);

      const socialP = document.createElement('P');
      const texto = document.createTextNode(item.text);
      socialP.append(texto);

      social.append(socialA, socialP);

      return social;
    }
    else if(item.type === 'LABEL'){
      const social = document.createElement('LABEL');
      social.className = 'social';
      social.forHtml = item.forHtml;


      const socialIcon = document.createElement('I');
      socialIcon.className = item.iClass;
      const socialP = document.createElement('P');
      const texto = document.createTextNode(item.text);
      socialP.append(texto);

      social.append(socialIcon, socialP);

      return social;
    }
  });

  sociales.append(...socialGenerator);

  return sociales;
};

const Contactame = ()=>{
  const contactame = document.querySelector('.contactame');

  const contactameContainer = document.createElement('DIV');
  contactameContainer.className = 'contactame-container pd-container container';

  const contactameH2 = document.createElement('H2');
  let text = document.createTextNode('Contactame');
  contactameH2.appendChild(text);

  const sociales = getSociales();

  const formulario = Formulario();

  contactameContainer.append(contactameH2,sociales, formulario);

  contactame.append(contactameContainer);

  return contactame;
};

export default Contactame;