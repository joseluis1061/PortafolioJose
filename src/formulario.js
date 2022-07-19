//Form Component
const formValidation = (id, parrafoError) =>{
  if (id.value.trim() === "") {    
    id.style.border = "2px solid red";
    parrafoError.innerHTML = 'Todos los campos * son obligatorios';
    return false;
  } else {
    id.style.border = "2px solid green";
    parrafoError.innerHTML = '';
    return true;
  }
};

const handleSubmit = (event, inputNombre,inputEmail,inputMesage, parrafoError) => {
  let error1 = formValidation(inputNombre, parrafoError);
  let error2 =formValidation(inputEmail, parrafoError);
  let error3 =formValidation(inputMesage, parrafoError);
  event.preventDefault();
};

const Formulario = ()=>{
  const formulario = document.createElement('FORM');
  formulario.className = 'form__contacto';
  formulario.name = 'form__contacto';
  formulario.method = 'POST';
  formulario.dataNetlify = true;
  formulario.setAttribute('data-netlify', 'true');

  const campoNombre = document.createElement('LABEL');
  campoNombre.className = 'campo__label';
  campoNombre.forHtml = 'name';
  let texto = document.createTextNode('*Nombre');
  campoNombre.append(texto)
  const inputNombre = document.createElement('INPUT');
  inputNombre.className = 'campo__field';
  inputNombre.setAttribute('type', 'text');
  inputNombre.id = 'name';
  inputNombre.name='name';
  inputNombre.placeholder = 'Nombre';
  campoNombre.append(inputNombre);

  const campoEmail = document.createElement('LABEL');
  campoEmail.className = 'campo__label';
  campoEmail.forHtml = 'email';
  texto = document.createTextNode('*Email');
  campoEmail.append(texto)
  const inputEmail = document.createElement('INPUT');
  inputEmail.className = 'campo__field';
  inputEmail.setAttribute('type', 'text');
  inputEmail.id = 'email';
  inputEmail.name='email';
  inputEmail.placeholder = '*Email';
  campoEmail.append(inputEmail);

  const campoMesage = document.createElement('LABEL');
  campoMesage.className = 'campo__label';
  campoMesage.forHtml = 'mesage';
  texto = document.createTextNode('*Mensaje:');
  campoMesage.append(texto)
  const inputMesage = document.createElement('TEXTAREA');
  inputMesage.className = 'campo__field campo__field-textarea';
  inputMesage.setAttribute('type', 'text');
  inputMesage.id = 'textarea';
  inputMesage.name='mesage';
  inputMesage.placeholder = 'Mensaje...';
  campoMesage.append(inputMesage);

  const buttonEmail = document.createElement('BUTTON');
  buttonEmail.className = 'button button-blue button-mail';
  buttonEmail.type = 'submit';
  buttonEmail.id = 'enviar';
  texto = document.createTextNode('Enviar');
  buttonEmail.append(texto)

  const parrafoError = document.createElement('P');
  parrafoError.className = 'text-center';
  parrafoError.style.color = 'red';

  formulario.append(campoNombre, campoEmail, campoMesage, parrafoError, buttonEmail);
  
  //Envio de datos
  formulario.addEventListener('submit', () => handleSubmit(event,inputNombre,inputEmail,inputMesage, parrafoError));
  
  return formulario;
};

export default Formulario;