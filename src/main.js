/*Main Component*/
import "./styles/main.css";
import "./styles/normalize.css";

import PerfilSinFondo from './assets/img/PerfilSinFondo.png';

const Main = () =>{
  const main = document.querySelector('.main');

  const overlay = document.createElement('DIV');
  overlay.className = 'overlay pd-container';

  const mainInformation = document.createElement('SECTION');
  mainInformation.className = 'main_information mgt-25';

  const mainImgContainer = document.createElement('PICTURE');
  mainImgContainer.className = 'main_img-container';
  const mainImgPerfil = document.createElement('IMG');
  mainImgPerfil.alt = 'imagen Perfil';
  mainImgPerfil.src = PerfilSinFondo;
  mainImgContainer.appendChild(mainImgPerfil);

  const h1Title = document.createElement('H1');
  let text = document.createTextNode('JOSÉ LÚIS ZúÑIGA');
  h1Title.append(text);

  const subtitleMain = document.createElement('H3');
  subtitleMain.className = 'subtitle-main';
  text = document.createTextNode('Frontend Developer');
  subtitleMain.append(text);

  const legendMain = document.createElement('P');
  legendMain.className = 'legend-main';
  text = document.createTextNode('I build web apps by meet your dreams');
  legendMain.append(text);

  const cvDiv = document.createElement('DIV');
  cvDiv.className = 'curriculum_container';
  cvDiv.innerHTML = `
  <button class="button button-curriculum">
    <a href="https://drive.google.com/file/d/18UJfHLl_2vZSYzb8s55pPjEpPBpYslaC/view?usp=sharing" target="_blank">
      <i class="fa-solid fa-id-card"></i>
    </a>
  </button>
  <p>Curriculum</p>  
  `;
  
  mainInformation.append(mainImgContainer, h1Title, subtitleMain, legendMain, cvDiv);

  overlay.append(mainInformation);

  main.append(overlay);

  return main;
};

export default Main;