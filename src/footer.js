/* Imagen logo footer */
import logoJoseNombre from './assets/img/logoJoseNombre.svg';

const Footer = () =>{
  const footer = document.querySelector('.footer');

  const footerContainer = document.createElement('DIV');
  footerContainer.className = 'footer-container pd-container container';

  const aHome = document.createElement('A');
  aHome.className = 'footer-logo';
  aHome.href = '#Home';
  const aHomeImage = document.createElement('IMG');
  aHomeImage.src = logoJoseNombre;
  aHomeImage.alt = 'Logo Perfil';
  aHome.append(aHomeImage);

  const footerText = document.createElement('DIV');
  footerText.className = 'footer-text';
  const footerTextP = document.createElement('P');
  const text = document.createTextNode('Todos los derechos reservados ©.')
  footerTextP.append(text);
  footerText.append(footerTextP);

  footerContainer.append(aHome, footerText);
  footer.append(footerContainer);
  return footer;
};

export default Footer;