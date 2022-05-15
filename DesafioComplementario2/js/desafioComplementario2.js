// Ejemplo de arrays simples y aplicacion de propiedades

const nutrientesCriticos = ["Azucares anadidos", "Grasas totales", "Grasas saturadas", "Sodio", "Edulcorantes y/o cafeina", "Calorias"];

console.log ("LISTADO DE NUTRIENTES CRITICOS", nutrientesCriticos);

const azucaresTotales = ["Sacarosa", "Glucosa", "Fructosa", "Galactosa", "Lactosa"];

console.log ("DESGLOSE DE AZUCARES TOTALES POSIBLES EN UN ALIMENTO", azucaresTotales);

console.log ("ESTAN INCLUIDOS LOS POLIALCOHOLES EN LA LISTA DE AZUCARES TOTALES?", azucaresTotales.includes("Polialcoholes"));

azucaresTotales.push("Polialcoholes");

console.log("AGREGO ELEMENTO 'POLIALCOHOLES' A LA LISTA", azucaresTotales);

console.log ("ESTAN INCLUIDOS LOS POLIALCOHOLES EN LA LISTA DE AZUCARES TOTALES?", azucaresTotales.includes("Polialcoholes"));

console.log("Ejemplo de arrays simples y aplicacion de propiedades");

//Ejemplo de array de objetos

//Construccion de clase "Alimento"
class Alimento {
    constructor(nombre, marcaComercial, valorEnergetico, carbohidratos, proteinas, grasasTotales, grasasSaturadas, grasasTrans, sodio, calcio, vitaminaA, vitaminaC, vitaminaD, vitaminaE ){
        this.nombre = nombre;
        this.marcaComercial = marcaComercial;
        this.valorEnergetico = valorEnergetico;
        this.carbohidratos = carbohidratos;
        this.proteinas = proteinas;
        this.grasasTotales = grasasTotales;
        this.grasasSaturadas = grasasSaturadas;
        this.grasasTrans = grasasTrans;
        this.sodio = sodio;
        this.calcio = calcio;
        this.vitaminaA = vitaminaA;
        this.vitaminaC = vitaminaC;
        this.vitaminaD = vitaminaD;
        this.vitaminaE = vitaminaE;
    }
}

//Declaro array de Alimentos para almacenar objetos
const alimentos = [];

//Creo 3 nuevos objetos para incluir en el array

alimentos.push(new Alimento("Leche Clasica 3%", "La Serenisima", 57, 4.5, 3.0, 3.0, 1.9, 0, 49, 105, 97.5, 3.35, 1.0, 0.75));

alimentos.push(new Alimento("Leche Liviana 1%", "La Serenisima", 40, 4.8, 3.0, 1.0, 0.6, 0, 49, 105, 78, 3.35, 1.0, 0.75));

alimentos.push(new Alimento("Leche UAT 0%", "La Serenisima", 36, 4.9, 3.0, 0.5, 0.3, 0, 49, 105, 64, 3.35, 1.0, 0.75));

//Imprimo el array con los 3 objetos definidos
console.log(alimentos);