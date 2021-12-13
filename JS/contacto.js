const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function validar() {
   var nombre, email, telefono, mensaje;
   nombre = document.getElementById("name").value;
   email = document.getElementById("email").value;
   telefono = document.getElementById("phone").value;
   mensaje = document.getElementById("message").value;

   const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    /*telefono: /^\d{7,14}$/ // 7 a 14 numeros.*/
    }

    const style = document.documentElement.style;

   if (nombre == "" || email == "" || telefono == "" || mensaje == "") {
     alert("Debe llenar todos los campos");
     return false;
   }
   else if (nombre.lenght<3 || nombre.lenght>50) {
    alert("El nombre ingresado es muy corto o muy largo");
    document.querySelector('.input[id=name]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   else if (!expresiones.nombre.test(nombre)) {
    alert("Por favor, ingrese un nombre válido");
    document.querySelector('.input[id=name]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   else if (email.lenght>60) {
    alert("El email ingresado es muy largo");
    document.querySelector('.input[id=email]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   else if (!expresiones.correo.test(email)) {
    alert("Por favor, ingrese un email válido");
    document.querySelector('.input[id=email]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   else if (mensaje.lenght>300) {
    alert("El mensaje ingresado es muy largo");
    document.querySelector('.textarea[id=message]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   else if (telefono.lenght<8 || telefono.lenght>15) {
    alert("El telefono ingresado es muy corto o muy largo");
    document.querySelector('.input[id=phone]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   else if (isNaN(telefono)) {
    alert("Por favor, ingrese un telefono válido (no use espacios ni guiones)");
    document.querySelector('.input[id=phone]').style.setProperty('--border', '2px solid #ff3333');
    return false;
   }
   
   alert("¡Muchas gracias! Nos contactaremos a la brevedad");
}