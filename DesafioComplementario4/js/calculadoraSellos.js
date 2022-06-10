
// Obs: Ver tema de querySelector para radioButton en "Calculadora de sellos"
 
/* BOTONES */
const boton4 = document.getElementById("botonSellos");
boton4.addEventListener("click", ()=>{   
calcularSellos();
});

/* FUNCIONES */
function calcularSelloCalorias() {
let kcalTotales = document.querySelector("#kcalTotales").value;

let selloCal = kcalTotales / 100 >= 3? "Producto lleva sello de EXCESO EN CALORÍAS" : "Producto no lleva sello de EXCESO EN CALORÍAS"
return selloCal;
}

function calcularSelloAzucaresAnadidos() {
    let kcalTotales = document.querySelector("#kcalTotales").value;
    let azucaresAnadidos = document.querySelector("#inputAzucares").value;

    let selloAz = azucaresAnadidos * 4 >= kcalTotales * 0.2? "Producto lleva sello de EXCESO EN AZÚCARES" : "Producto no lleva sello de EXCESO EN AZÚCARES";
    return selloAz;
}


function calcularSelloGrasasTotales() {
    let kcalTotales = document.querySelector("#kcalTotales").value;
    let grasasTot = document.querySelector("#inputGrasasTot").value;

    let selloGrasTot = grasasTot * 9 >= kcalTotales * 0.35? "Producto lleva sello de EXCESO EN GRASAS TOTALES" : "Producto no lleva sello de EXCESO EN GRASAS TOTALES"
    return selloGrasTot;
}

function calcularSelloGrasasSat() {
    let kcalTotales = document.querySelector("#kcalTotales").value;
    let grasasSat = document.querySelector("#inputGrasasSat").value;

    let selloGrasasSat = grasasSat * 9 >= kcalTotales * 0.12? "Producto lleva sello de EXCESO EN GRASAS SATURADAS" : "Producto no lleva sello de EXCESO EN GRASAS SATURADAS"
    return selloGrasasSat;
}

function calcularSelloSodio() {
    let kcalTotales = document.querySelector("#kcalTotales").value;
    let sodio = document.querySelector("#inputSodio").value;

    let selloSodio = (sodio / kcalTotales) >= 5? "Producto lleva sello de EXCESO EN SODIO" : "Producto no lleva sello de EXCESO EN SODIO"
    return selloSodio;
}

/* function calcularSelloEdulCafe(){
    let edulCafe = document.querySelector('input[name="gridRadios"]:checked').value;
} */

function calcularSellos (){
    const resultadoSellos = document.querySelector('.calculadoraSellos');

    let resultadoSelloCalorias = calcularSelloCalorias();
    let resultadoCalorias = document.createElement("p");
    resultadoCalorias.innerHTML = resultadoSelloCalorias;
    resultadoSellos.appendChild(resultadoCalorias);

    let resultadoSelloAzucares = calcularSelloAzucaresAnadidos();
    let resultadoAzucares = document.createElement("p");
    resultadoAzucares.innerHTML = resultadoSelloAzucares;
    resultadoSellos.appendChild(resultadoAzucares);

    let resultadoSelloGrasasTot = calcularSelloGrasasTotales();
    let resultadoGrasasTot = document.createElement("p");
    resultadoGrasasTot.innerHTML = resultadoSelloGrasasTot;
    resultadoSellos.appendChild(resultadoGrasasTot);

    let resultadoSelloGrasasSat = calcularSelloGrasasTotales();
    let resultadoGrasasSat = document.createElement("p");
    resultadoGrasasSat.innerHTML = resultadoSelloGrasasSat;
    resultadoSellos.appendChild(resultadoGrasasSat);

    let resultadoSelloSodio = calcularSelloSodio();
    let resultadoSodio = document.createElement("p");
    resultadoSodio.innerHTML = resultadoSelloSodio;
    resultadoSellos.appendChild(resultadoSodio);
}
