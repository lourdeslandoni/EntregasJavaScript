
// Obs: Ver tema de querySelector para radioButton en "Calculadora de sellos"
 
/* BOTONES */
const boton4 = document.getElementById("botonSellos");
boton4.addEventListener("click", ()=>{   
calcularSellos();
});

/* FUNCIONES */
function calcularSelloCalorias() {
let kcalTotales = document.querySelector("#kcalTotales").value;

  if(kcalTotales / 100 >= 3) {
      return "Producto lleva sello de EXCESO EN CALORÍAS"
  } else {
      return "Producto no lleva sello de EXCESO EN CALORÍAS"
  }
}

function calcularSelloAzucaresAnadidos() {
    let azucaresAnadidos = document.querySelector("#inputAzucares").value;
    let kcalTotales = document.querySelector("#kcalTotales").value;


    let kcalAzucaresAnadidos = azucaresAnadidos * 4;
    let kcal20percentage = kcalTotales * 0.2
    if(kcalAzucaresAnadidos >= kcal20percentage) {
        return "Producto lleva sello de EXCESO EN AZÚCARES"
    } else {
        return "Producto no lleva sello de EXCESO EN AZÚCARES"
    }
}

function calcularSelloGrasasTotales() {
    let grasasTot = document.querySelector("#inputGrasasTot").value;
    let kcalTotales = document.querySelector("#kcalTotales").value;


    let kcalGrasasTotales = grasasTot * 9;
    let kcal35percentage = kcalTotales * 0.35
    if(kcalGrasasTotales >= kcal35percentage) {
        return "Producto lleva sello de EXCESO EN GRASAS TOTALES"
    } else {
        return "Producto no lleva sello de EXCESO EN GRASAS TOTALES"
    }
}

function calcularSelloGrasasSat() {
    let grasasSat = document.querySelector("#inputGrasasSat").value;

    let kcalGrasasSat = grasasSat * 9;
    let kcal12percentage = kcalTotales * 0.12
    if(kcalGrasasSat >= kcal12percentage) {
        return "Producto lleva sello de EXCESO EN GRASAS SATURADAS"
    } else {
        return "Producto no lleva sello de EXCESO EN GRASAS SATURADAS"
    }
}

function calcularSelloSodio() {
    let sodio = document.querySelector("#inputSodio").value;

    if(sodio / kcalTotales >= 5) {
        return "Producto lleva sello de EXCESO EN SODIO"
    } else {
        return "Producto no lleva sello de EXCESO EN SODIO"
    }
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
