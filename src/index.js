import "./styles/main.css";
import "./styles/normalize.css";
import initialState from "./initialState";

import Header from "./header";
import Main from "./main";
import SobreMi from "./sobreMI";
import Habilidades from "./habilidades";

import logoJoseNombre from './assets/img/logoJoseNombre.svg';
import Proyectos from "./proyectos";


Header();
Main();
SobreMi();
Habilidades();
Proyectos();
/* Imagen logo footer */
const footerLogo = document.querySelector('.footer-logo img');
footerLogo.src = logoJoseNombre;




