import "./styles/main.css";
import "./styles/normalize.css";

import logoJoseNombre from './assets/img/logoJoseNombre.svg';

const Header = () => {
  const header = document.querySelector('.header');

  const headerMain = document.createElement('DIV');
  headerMain.className = 'header_main .container pd-container';

  const logoHeader = document.createElement('FIGURE');
  logoHeader.className = 'logo-header';
  const enlaceLogoPerfil = document.createElement('A');
  enlaceLogoPerfil.href = '#Home';
  const imagenLogoPerfil = document.createElement('IMG');
  imagenLogoPerfil.alt = 'logo Perfil';
  imagenLogoPerfil.src = logoJoseNombre;
  enlaceLogoPerfil.appendChild(imagenLogoPerfil);
  logoHeader.append(enlaceLogoPerfil)

  const labelMenu = document.createElement('LABEL');
  labelMenu.htmlFor = 'check-menu';
  const faBars = document.createElement('I');
  faBars.className = 'fa-solid fa-bars';
  labelMenu.append(faBars);
  faBars.style.color= 'var(--white)';
  faBars.style.fontSize = '3.5rem';

  const checkMenu = document.createElement('INPUT');
  checkMenu.id = 'check-menu';  
  checkMenu.className = 'check-menu';
  checkMenu.type = 'checkbox';

  const headerNav = document.createElement('NAV');
  headerNav.className = 'header_nav';
  const aHome = document.createElement('A');
  aHome.href = '#Home';
  let texto = document.createTextNode('HOME');
  aHome.appendChild(texto);
  const aSobreMi = document.createElement('A');
  aSobreMi.href = '#Sobre-mi';
  texto = document.createTextNode('Sobre mí');
  aSobreMi.appendChild(texto);

  const aHabilidades = document.createElement('A');
  aHabilidades.href = '#Habilidades';
  texto = document.createTextNode('Habilidades');
  aHabilidades.appendChild(texto);

  const aProyectos = document.createElement('A');
  aProyectos.href = '#Proyectos';
  texto = document.createTextNode('Proyectos');
  aProyectos.appendChild(texto);

  const aContactame = document.createElement('A');
  aContactame.href = '#Contactame';
  texto = document.createTextNode('Contactame');
  aContactame.appendChild(texto);


  headerNav.append(aHome, aSobreMi, aHabilidades, aProyectos, aContactame);


  headerMain.append(logoHeader, labelMenu, checkMenu, headerNav);

  header.append(headerMain);

  return header;
};

export default Header;
