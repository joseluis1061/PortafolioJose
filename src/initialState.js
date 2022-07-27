/*Información de proyectos para el portafolio */
import confMerge from './assets/img/confMerge.png';
import laVeterinaria from './assets/img/laVeterinaria.png';
import batataBit from './assets/img/batataBit.png';
import blogDeCafe from './assets/img/blogDeCafe.png';
import pageFreelancer from './assets/img/pageFreelancer.png';
import yardSale from './assets/img/YardSale.png';

const initialState = [
  {
    image: laVeterinaria, 
    title: 'La Veterinaria', 
    description: 'Oraginizador de citas veterinarias puedes agregar pacientes, síntomas y un contacto del paciente',
    urlPage: 'https://laveterinaria.netlify.app/',
    urlCode: 'https://github.com/joseluis1061/citas_veterinaria'
  },
  {
    image: yardSale, 
    title: 'Yard Sale', 
    description: 'Tienda en línea, implementada como una PWA. Puedes agregar productos a tu carrito de compra y eliminarlos si no quieres comprarlo',
    urlPage: 'https://yard-sale-next-js.vercel.app/',
    urlCode: 'https://github.com/joseluis1061/YardSaleNextJS'
  },
  {
    image: batataBit, 
    title: 'Batata Bit', 
    description: 'Landing Page con diseño para consultar el valor de criptomonedas en líena',
    urlPage: 'https://luminous-gingersnap-397aa2.netlify.app',
    urlCode: 'https://github.com/joseluis1061/batataBit'
  },
  {
    image: confMerge, 
    title: 'Conf Merge', 
    description: 'Tienda en línea donde puedes pagar vía Paypal. De manera facíl podras ver tu geolocalización de llegada de tú producto',
    urlPage: 'https://store-merge.web.app/',
    urlCode: 'https://github.com/joseluis1061/conf-merch'
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
  

]

export default initialState;





