"use sctrict";

let btnTirarDados = document.getElementById("btnTirarDados");
btnTirarDados.addEventListener("click",informe);




function tirarDados(){
    let dado=(Math.floor(Math.random()*(7-1)+1));
    return dado;
}




function informe(){

let cantidad7 = 0;
let dado1 = 0;
let dado2 = 0;
let sumaDosDados = 0;
for (let i = 0; i < 1000; i++) {
    dado1= tirarDados();
    dado2= tirarDados();
    sumaDosDados = dado1 + dado2 
    
    if (sumaDosDados == 7) {
        cantidad7++
    }
}

console.log("Cantidad de numeros 7 Salidos : "+cantidad7);

}

