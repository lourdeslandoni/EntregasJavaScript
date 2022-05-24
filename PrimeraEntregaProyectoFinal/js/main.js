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

function mostrarProductosComerciales(){
console.log("LISTADO DE PRODUCTOS COMERCIALES CARGADOS");
productosComerciales.forEach((productoComercial)=>{
console.log(productoComercial);
})
}

function buscarProductosComerciales()
{
    let marca = prompt("Ingresa la marca comercial del producto que quieras buscar");
    let encontrados = productosComerciales.find((productoComercial)=>productoComercial.marcaComercial.toLowerCase().indexOf(marca.toLocaleLowerCase())!==-1);
    console.log("PRODUCTOS ENCONTRADOS POR MARCA COMERCIAL", encontrados);
}

function filtrarProductosPorIngrediente()
{
    let ingrediente = prompt("Ingresa el ingrediente por el cual quiere filtrar los productos");
    let ingredientesEncontrados = productosComerciales.filter((productoComercial)=>productoComercial.ingredientesDeclarados.toLowerCase().indexOf(ingrediente.toLocaleLowerCase())!==-1);
    console.log("PRODUCTOS ENCONTRADOS POR MARCA COMERCIAL", ingredientesEncontrados);
}

//Construccion de clases

class ProductoComercial {
    constructor(marcaComercial, denominacionDeVenta, paisDeOrigen, ingredientesDeclarados){
        this.marcaComercial = marcaComercial;
        this.denominacionDeVenta = denominacionDeVenta;
        this.paisDeOrigen = paisDeOrigen;
        this.ingredientesDeclarados = ingredientesDeclarados;
      }
    }

class Ingrediente {
    constructor(nombre, valorEnergetico, carbohidratos, proteinas, grasasTotales, grasasSaturadas, grasasTrans, fibraAlimentaria, sodio, calcio){
        this.nombre = nombre;
        this.valorEnergetico = valorEnergetico;
        this.carbohidratos = carbohidratos;
        this.proteinas = proteinas;
        this.grasasTotales = grasasTotales;
        this.grasasSaturadas = grasasSaturadas;
        this.grasasTrans = grasasTrans;
        this.fibraAlimentaria = fibraAlimentaria;
        this.sodio = sodio;
        this.calcio = calcio;
      }
    }

//Declaro arrays para almacenar objetos
const productosComerciales = [];
const ingredientes = [];

//Creo nuevos objetos para incluir en los arrays
productosComerciales.push(new ProductoComercial("Violife", "Preparado alimenticio a base de aceite de coco", "Espana", "Agua, aceite de coco (23%), almidon, sal marina, glucono-delta-lactona, aromas, extracto de oliva, vitamina B12"));
productosComerciales.push(new ProductoComercial("Miyoko's", "Queso crema a base de leche de castanas de caju organicas sabor original", "Estados Unidos", "Castanas de caju organicas, agua filtrada, crema organica de coco, sal marina, cultivos"));
productosComerciales.push(new ProductoComercial("Felices Las Vacas", "Alimento untable a base de almendras", "Argentina", "Agua, almendras, aceite de coco, almidon, sal, goma guar, acido citrico"));
productosComerciales.push(new ProductoComercial("Vivet", "Crema vegetal a base de castanas de caju", "Argentina", "Agua, Castanas de Caju, Aceite de Girasol, Sal"));
productosComerciales.push(new ProductoComercial("Brew", "Queso untable a base de castanas de caju sabor clasico", "Argentina", "Castanas de Caju, agua, sal, probioticos, acidulante: acido citrico (INS 330) y acido lactico (INS 270)"));
productosComerciales.push(new ProductoComercial("Brew", "Queso untable a base de castanas de caju sabor Spicy Cheddar", "Argentina", "Castanas de caju, agua, aceite de coco, pasta de soja organica, levadura, pimenton, curcuma, sal y fermento"));

ingredientes.push(new Ingrediente("Castanas de Caju", 553, 26.9, 18.2, 43.8, 7.78, 0, 3.3, 12, 37));
ingredientes.push(new Ingrediente("Almendras", 579, 9.1, 21.2, 49.9, 3.8, 0, 12.5, 1, 269));
ingredientes.push(new Ingrediente("Aceite de Coco", 895, 0.84, 0, 99.1, 82.5, 0, 0, 0, 1));
ingredientes.push(new Ingrediente("Aceite de Girasol Alto Oleico", 884, 0, 0, 100, 9.86, 0, 0, 0, 0));
ingredientes.push(new Ingrediente("Proteina de Garbanzo (80%)", 373, 10.4, 73.6, 3, 0, 0, 5, 0, 0));
ingredientes.push(new Ingrediente("Proteina de Haba (90%)", 377, 5.04, 80.96, 3, 0,  0, 3, 0, 0));
ingredientes.push(new Ingrediente("Proteina de Poroto Mungo (80%)", 383, 8.4, 73.6, 5, 0, 0, 5, 0, 0));
ingredientes.push(new Ingrediente("Proteina de Arveja (85%)", 377, 7.8, 78.2, 3, 0, 0, 3, 0, 0));
ingredientes.push(new Ingrediente("Sal", 0, 0, 0, 0, 0, 0, 0, 24, 38800));

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
                                7. Mostrar listado de productos comerciales
                                8. Buscar productos comerciales por marca
                                9. Filtrar productos comerciales por ingredientes
                                10. SALIR`));

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

            case 7:
                mostrarProductosComerciales();
                break

            case 8:
                buscarProductosComerciales();     
                break

             case 9:
                filtrarProductosPorIngrediente();
                break
        }
}

