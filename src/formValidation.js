const formContacto = document.querySelector('.form__contacto');
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
      enviar = false;
    } else {
      formInput.style.border = "2px solid green";
      enviar = true;
    }
  });

  if(enviar=== true){
    let formData = new FormData(formContacto);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })

    .then(() => {
      errorText.innerHTML = 'Tu mensaje ha sido enviado. Pronto te contactare';
      errorText.style.color = 'green';
    })
    .catch((error) => alert('Ha ocurrido un error con le mensaje. Intentalo de nuevo: '+error));   

    setTimeout(() =>{
      errorText.innerHTML = '';
      inputNombre.value = '';
      inputEmail.value = '';
      inputMesage.value = '';
      inputNombre.style.border = "1px solid black";
      inputEmail.style.border = "1px solid black";
      inputMesage.style.border = "1px solid black";
    }, 3000);
  }
  else if(enviar=== false){
    errorText.innerHTML = 'Todos los campos * son obligatorios';
    errorText.style.color = 'red';
  }
}

export default formValidation;