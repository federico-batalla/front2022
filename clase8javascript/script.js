"use sctrict";

let btnTirarDados = document.getElementById("btnTirarDados");
btnTirarDados.addEventListener("click",tirarDados);





function tirarDados(){

    let cantidad7 = 0;

for (let i = 0; i < 1000; i++) {
    let numeroAzar=(Math.trunc(Math.random()*10));
    
    
    if (numeroAzar == 7) {
        cantidad7++
    }
    
    
}

console.log(cantidad7);



}

