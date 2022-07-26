"use strict";

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click",saludar);





function saludar() {
    
    let inputEdad = document.getElementById("inputEdad");
    let inputNombre = document.getElementById("inputNombre");
    let inputApellido = document.getElementById("inputApellido");

    let edad = inputEdad.value;
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    

    alert(nombre+" "+apellido+" "+edad);

    
    
}


