/*Lista de teconologías que se usar*/
import webpack from './assets/img/webpack.svg';
import c from './assets/img/c++.svg';
const tecnologiasList = [
  {
    type: 'fontawesome',
    class: 'fa-brands fa-js-square',
    text: 'JavaScript'
  },
  {
    type: 'fontawesome',
    class: 'fa-brands fa-html5',
    text: 'HTML5'
  },
  {
    type: 'fontawesome',
    class: 'fa-brands fa-css3',
    text: 'CSS3'
  },
  {
    type: 'fontawesome',
    class: 'fa-brands fa-python',
    text: 'Python'
  },
  {
    type: 'fontawesome',
    class: 'fa-brands fa-sass',
    text: 'SASS'
  },
  {
    type: 'fontawesome',
    class: 'fa-brands fa-gulp',
    text: 'Gulp'
  },
  {
    type: 'fontawesome',
    class: 'fa-brands fa-react',
    text: 'React.Js'
  },
  {
    type: 'imagen',
    class: 'webpack',
    text: 'WebPack',
    alt: 'Webpack',
    src: webpack
  },
  {
    type: 'imagen',
    class: 'fa-brands fa-js-square',
    text: 'JavaScript',
    alt: 'C++',
    src: c,
  },
];

export default tecnologiasList;