const formContacto = document.querySelector('.form__contacto');
//formContacto.addEventListener('submit', formValidation);
const inputNombre = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMesage = document.querySelector('#textarea');
const errorText = document.querySelector('.error_text');

const formInputs = [inputNombre, inputEmail,inputMesage]
let enviar = false;

const formValidation= (event) =>{
  event.preventDefault();
  formInputs.forEach(formInput => {   
    if (formInput.value.trim() === "") {    
      formInput.style.border = "2px solid red";
      errorText.innerHTML = 'Todos los campos * son obligatorios';
      enviar = false;
    } else {
      formInput.style.border = "2px solid green";
      errorText.innerHTML = '';
      enviar = true;
    }
  });

  if(enviar){
    let formData = new FormData(formContacto);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));

    }
}

export default formValidation;