//Declaro arrays para almacenar objetos
const productosComerciales = [];
const ingredientes = [];

//Botones

const boton1 = document.getElementById("botonListado");
boton1.addEventListener("click", ()=>{
  mostrarProductosComerciales(productosComerciales);
});

const boton2 = document.getElementById("botonIngredientes");
boton2.addEventListener("click", ()=>{
    let filtrados = filtrarPorIngrediente(productosComerciales);
    mostrarProductosComerciales(filtrados);
});

const boton3 = document.getElementById("botonFormula");
boton3.addEventListener("click", ()=>{
formulacionPrototipo();
});

// FUNCIONES
function calcularSelloCalorias(kcalTotales) {
  if(kcalTotales / 100 >= 3) {
      return "Producto lleva sello de EXCESO EN CALORIAS"
  } else {
      return "Producto no lleva sello"
  }
}

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

function mostrarProductosComerciales(listaProductos)
{
  let productos = document.querySelector("#listaProductos");
  if(!productos)
  {
   productos=document.createElement("table");
   productos.setAttribute("id", "listaProductos");
  }
  productos.innerHTML="";

  const encabezado = document.createElement("tr");

  const tdMarca = document.createElement("th");
  tdMarca.innerHTML = "Marca Comercial";
  encabezado.appendChild(tdMarca);

  const tdDenominacion = document.createElement("th");
  tdDenominacion.innerHTML = "Denominaci??n de Venta";
  encabezado.appendChild(tdDenominacion);

  const tdPais = document.createElement("th");
  tdPais.innerHTML = "Pa??s de Origen";
  encabezado.appendChild(tdPais);

  const tdIngredientes = document.createElement("th");
  tdIngredientes.innerHTML = "Ingredientes";
  encabezado.appendChild(tdIngredientes);

  productos.appendChild(encabezado);

  listaProductos.forEach((productoComercial)=>{
      const nodotr = document.createElement("tr");
      let nodotd = document.createElement("td");

      nodotd.innerHTML=`${productoComercial.marcaComercial}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML=`${productoComercial.denominacionDeVenta}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML=`${productoComercial.paisDeOrigen}`;
      nodotr.appendChild(nodotd);

      nodotd = document.createElement("td");
      nodotd.innerHTML=`${productoComercial.ingredientesDeclarados}`;
      nodotr.appendChild(nodotd);

      productos.appendChild(nodotr);
 });

 let contenedor = document.getElementById("main")
 contenedor.appendChild(productos)

//  document.body.appendChild(productos);
}

function filtrarPorIngrediente(todosLosProductos)
{  
    let ingrediente = prompt("Ingresa el igrediente por el cual deseas filtrar los productos comerciales");
    let encontrados = todosLosProductos.filter((productoComercial)=>productoComercial.ingredientesDeclarados.toLowerCase().indexOf(ingrediente.toLocaleLowerCase())!==-1);
    return encontrados;
}

function formulacionPrototipo()
{
    let exist = document.getElementById("subtituloH2")
    console.log(exist)

    if (!exist) {
        const subtituloH2 = document.createElement("h2");
        subtituloH2.setAttribute("id", "subtituloH2");
        subtituloH2.innerHTML = "Teniendo en cuenta los ingredientes cargados en el sistema, introduzca la formulaci??n te??rica de su alimento:";
        document.body.appendChild(subtituloH2);
    }

    

    let formulacion = document.querySelector("#formulaTeorica");

    if(!formulacion) {
        const newLabel = document.createElement("label");
        newLabel.innerHTML = "Ingrediente";

        const newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", 'text');

        var selectList = document.createElement("select");
        selectList.setAttribute("id", "mySelect");
        for (var i = 0; i < ingredientes.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", ingredientes[i].nombre);
        option.text = ingredientes[i].nombre;
        selectList.appendChild(option);
    }

    let contenedor = document.getElementById("main")
    contenedor.appendChild(newLabel)
    contenedor.appendChild(newCheckbox)
    contenedor.appendChild(selectList)
    contenedor.appendChild(formulaTeorica)

    // document.body.appendChild(newLabel);
    // document.body.appendChild(newCheckbox);
    // document.body.appendChild(selectList);
    }
    formulacion.innerHTML="";

/*     productosComerciales.forEach((productoComercial)=>{
        const nodoLI=document.createElement("li");
        nodoLI.innerHTML=`<b>Marca Comercial:</b>${productoComercial.marcaComercial}<br> 
                          <b>Denominacion de venta:</b>${productoComercial.denominacionDeVenta}<br>
                          <b>Pais de Origen:</b>${productoComercial.paisDeOrigen}<br>
                          <b>Ingredientes:</b>${productoComercial.ingredientesDeclarados}
                          <br>
                          <br>
                          `;
        listaProductos.appendChild(nodoLI);
   }); */
//    document.body.appendChild(formulaTeorica);
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


//Creo nuevos objetos para incluir en los arrays
productosComerciales.push(new ProductoComercial("Violife", "Preparado alimenticio a base de aceite de coco", "Espa??a", "Agua, aceite de coco (23%), almid??n, sal marina, glucono-delta-lactona, aromas, extracto de oliva, vitamina B12"));
productosComerciales.push(new ProductoComercial("Miyoko's", "Queso crema a base de leche de casta??as de caj?? org??nicas sabor original", "Estados Unidos", "Casta??as de caj?? org??nicas, agua filtrada, crema org??nica de coco, sal marina, cultivos"));
productosComerciales.push(new ProductoComercial("Felices Las Vacas", "Alimento untable a base de almendras", "Argentina", "Agua, almendras, aceite de coco, almid??n, sal, goma guar, ??cido c??trico"));
productosComerciales.push(new ProductoComercial("Vivet", "Crema vegetal a base de casta??as de caj??", "Argentina", "Agua, Casta??as de Caju, Aceite de Girasol, Sal"));
productosComerciales.push(new ProductoComercial("Brew", "Queso untable a base de casta??as de caj?? sabor cl??sico", "Argentina", "Casta??as de Caju, agua, sal, probi??ticos, acidulante: ??cido c??trico (INS 330) y ??cido l??ctico (INS 270)"));
productosComerciales.push(new ProductoComercial("Brew", "Queso untable a base de casta??as de caj?? sabor Spicy Cheddar", "Argentina", "Casta??as de caj??, agua, aceite de coco, pasta de soja organica, levadura, piment??n, c??rcuma, sal y fermento"));

ingredientes.push(new Ingrediente("Casta??as de Caj??", 553, 26.9, 18.2, 43.8, 7.78, 0, 3.3, 12, 37));
ingredientes.push(new Ingrediente("Almendras", 579, 9.1, 21.2, 49.9, 3.8, 0, 12.5, 1, 269));
ingredientes.push(new Ingrediente("Aceite de Coco", 895, 0.84, 0, 99.1, 82.5, 0, 0, 0, 1));
ingredientes.push(new Ingrediente("Aceite de Girasol Alto Oleico", 884, 0, 0, 100, 9.86, 0, 0, 0, 0));
ingredientes.push(new Ingrediente("Prote??na de Garbanzo (80%)", 373, 10.4, 73.6, 3, 0, 0, 5, 0, 0));
ingredientes.push(new Ingrediente("Prote??na de Haba (90%)", 377, 5.04, 80.96, 3, 0,  0, 3, 0, 0));
ingredientes.push(new Ingrediente("Prote??na de Poroto Mungo (80%)", 383, 8.4, 73.6, 5, 0, 0, 5, 0, 0));
ingredientes.push(new Ingrediente("Prote??na de Arveja (85%)", 377, 7.8, 78.2, 3, 0, 0, 3, 0, 0));
ingredientes.push(new Ingrediente("Sal", 0, 0, 0, 0, 0, 0, 0, 24, 38800));