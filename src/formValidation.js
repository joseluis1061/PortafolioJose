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
      //errorText.innerHTML = 'Todos los campos * son obligatorios';
      enviar = false;
    } else {
      formInput.style.border = "2px solid green";
      //errorText.innerHTML = '';
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
      //.then(() => console.log("Form successfully submitted"))
      //.catch((error) => alert(error));

      .then(() => {
        errorText.innerHTML = 'Enviado';
        errorText.style.color = 'green';
      })
      .catch((error) => alert(error));   

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