import "./styles/main.css";
import "./styles/normalize.css";

import Header from "./header";
import Main from "./main";
import SobreMi from "./sobreMI";
import Habilidades from "./habilidades";
import Proyectos from "./proyectos";
//import Contactame from  "./contactame";
import formValidation from "./formValidation";


import Footer from "./footer";

Header();
Main();
SobreMi();
Habilidades();
Proyectos();
const formContacto = document.querySelector('.form__contacto');
formContacto.addEventListener('submit', () => formValidation(event));
//Contactame();
Footer();