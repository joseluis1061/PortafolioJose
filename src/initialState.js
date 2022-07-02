/*Información de proyectos para el portafolio */
import laVeterinaria from './assets/img/laVeterinaria.png';
import batataBit from './assets/img/batataBit.png';
import blogDeCafe from './assets/img/blogDeCafe.png';
import pageFreelancer from './assets/img/pageFreelancer.png';

const initialState = [
  {
    image: laVeterinaria, 
    title: 'La Veterinaria', 
    description: 'Oraginizador de citas veterinarias puedes agregar pacientes, síntomas y un contacto del paciente',
    urlPage: 'https://laveterinaria.netlify.app/',
    urlCode: 'https://github.com/joseluis1061/citas_veterinaria'
  },
  {
    image: blogDeCafe, 
    title: 'Blog De Café', 
    description: 'Landing Page diseñada para los amantes de un buen café que quieran saber todos los secretos para su preparación',
    urlPage: 'https://dulcet-mooncake-c8416a.netlify.app/',
   urlCode: 'https://github.com/joseluis1061/BlogDeCaffe'
  },
  {
    image: pageFreelancer, 
    title: 'FreeLancerPage', 
    description: 'Landing Page diseñada para un freeLancer facil de adaptar en diseño e información',
    urlPage: 'https://portafoliofrontendweb.netlify.app/',
    urlCode: 'https://github.com/joseluis1061/sitioFrelancer'
  },
  {
    image: batataBit, 
    title: 'Batata Bit', 
    description: 'Landing Page con diseño para consultar el valor de criptomonedas en líena',
    urlPage: 'https://luminous-gingersnap-397aa2.netlify.app',
    urlCode: 'https://github.com/joseluis1061/batataBit'
  },

]

export default initialState;





