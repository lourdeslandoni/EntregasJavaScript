
// FUNCIONES
function calcularSelloAzucaresAnadidos(azucaresAnadidos, kcalTotalesAzucaresAnadidos) {
    let kcalAzucaresAnadidos = azucaresAnadidos * 4;
    let kcal20percentage = kcalTotalesAzucaresAnadidos * 0.2
    if(kcalAzucaresAnadidos >= kcal20percentage) {
        return "Producto lleva sello de EXCESO EN AZUCARES"
    } else {
        return "Producto no lleva sello"
    }
}

function calcularSelloGrasasTotales(grasasTot, kcalTotalesGrasasTot) {
    let kcalGrasasTotales = grasasTot * 9;
    let kcal35percentage = kcalTotalesGrasasTot * 0.35
    if(kcalGrasasTotales >= kcal35percentage) {
        return "Producto lleva sello de EXCESO EN GRASAS TOTALES"
    } else {
        return "Producto no lleva sello"
    }
}

function calcularSelloGrasasSat(grasasSat, kcalTotalesGrasasSat) {
    let kcalGrasasSat = grasasSat * 9;
    let kcal12percentage = kcalTotalesGrasasSat * 0.12
    if(kcalGrasasSat >= kcal12percentage) {
        return "Producto lleva sello de EXCESO EN GRASAS SATURADAS"
    } else {
        return "Producto no lleva sello"
    }
}

function calcularSelloSodio(sodio, kcalTotalesSodio) {
    if(sodio / kcalTotalesSodio >= 5) {
        return "Producto lleva sello de EXCESO EN SODIO"
    } else {
        return "Producto no lleva sello"
    }
}

function calcularSelloCalorias(kcalTotales) {
    if(kcalTotales / 100 >= 3) {
        return "Producto lleva sello de EXCESO EN CALORIAS"
    } else {
        return "Producto no lleva sello"
    }
}
// PROGRAMA PRINCIPAL
alert ("Bienvenid@ a la calculadora de sellos y advertencias nutricionales")

let nombreUsuario = prompt("Ingrese su nombre");

alert ("Hola " + nombreUsuario);

let edadUsuario = Number(prompt("Ingrese su edad"));

if(edadUsuario<18) {
    alert("ACCESO DENEGADO");
    } else {
        let opcionSitio = Number(prompt(`Indique el sello o advertencia nutricional sobre el cual desea realizar la consulta (Ingrese el numero de la opcion deseada): 
                                1. Azucares Anadidos
                                2. Grasas Totales
                                3. Grasas Saturadas
                                4. Sodio
                                5. Edulcorantes y/o Cafeina
                                6. Calorias
                                7. SALIR`));

        switch(opcionSitio) {
            case 1:
                let kcalTotalesAzucaresAnadidos = Number(prompt("Ingrese las kcal totales cada 100 g de su producto"));
                let azucaresAnadidos = Number(prompt("Ingrese la cantidad de azucares anadidos cada 100 g de su producto"));

                let selloAzucares = calcularSelloAzucaresAnadidos(azucaresAnadidos, kcalTotalesAzucaresAnadidos)

                alert(selloAzucares)

                break

            case 2:
                    let kcalTotalesGrasasTot = Number(prompt("Ingrese las kcal totales cada 100 g de su producto"));
                    let grasasTot = Number(prompt("Ingrese las grasas totales que contienen 100 g de su producto"));
        
                    let selloGrasas = calcularSelloGrasasTotales(grasasTot, kcalTotalesGrasasTot)
    
                    alert(selloGrasas)

                    break

                             
            case 3:
                    let kcalTotalesGrasasSat = Number(prompt("Ingrese las kcal totales cada 100 g de su producto"));
                    let grasasSat = Number(prompt("Ingrese las grasas saturadas totales que contienen 100 g de su producto"));
                
                    let selloGrasasSat = calcularSelloGrasasSat(grasasSat, kcalTotalesGrasasSat)
        
                    alert(selloGrasasSat)

                    break

            case 4:
                    let kcalTotalesSodio = Number(prompt("Ingrese las kcal totales cada 100 g de su producto"));
                    let sodio = Number(prompt("Ingrese la cantidad de sodio que contienen 100 g de su producto"));
                    
                    let selloSodio = calcularSelloSodio(sodio, kcalTotalesSodio)
            
                    alert(selloSodio)
    
                    break
                
            case 5:
                let edulcCafe = prompt("Su producto contiene cafeina o edulcorante? Responde Si o No")
                if(edulcCafe.toLowerCase() == "si") {
                    alert("Lleva sello CONTIENE EDULCORANTES Y/O CAFEINA")
                } else {
                    alert("No lleva sello")
                }

            case 6:
                let kcalTotales = Number(prompt("Ingrese las kcal totales cada 100 g de su producto"));
                    
                 let selloCalorias = calcularSelloCalorias(kcalTotales)
            
                alert(selloCalorias)
    
                break
        }
}


