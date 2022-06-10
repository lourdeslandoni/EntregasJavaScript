// Obs: Ver tema de querySelector para radioButton en "Calculadora de sellos"


/* DECLARO ARRAYS PARA ALMACENAR OBJETOS*/
const productosComerciales = [];
const ingredientes = [];
 
/* BOTONES */
const boton1 = document.getElementById("botonListado");
boton1.addEventListener("click", ()=>{
  mostrarProductosComerciales(productosComerciales);
});

const boton2 = document.getElementById("botonIngredientes");
boton2.addEventListener("click", ()=>{
    const contenedor = document.querySelector('.contenedor');
    // Creo titulo
    let titulo = document.createElement("h2");
    titulo.innerHTML = "Ingresa el ingrediente por el cual deseas filtrar los productos comerciales";
    contenedor.appendChild(titulo);
    // Creo input
    let inputIngrediente = document.createElement("input");
    contenedor.appendChild(inputIngrediente);
    inputIngrediente.setAttribute("id", "myInput");
    let filtrar = document.createElement("button");
    filtrar.setAttribute("class", "botonBuscar");
    filtrar.innerHTML = "Buscar";
    contenedor.appendChild(filtrar);

    filtrar.addEventListener("click", ()=>{
        let filtrados = filtrarPorIngrediente(productosComerciales);
        console.log(filtrados);
        mostrarProductosComerciales(filtrados);
        });
});

const boton3 = document.getElementById("botonFormula");
boton3.addEventListener("click", ()=>{
formulacionPrototipo();
});

/* FUNCIONES */
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
  tdDenominacion.innerHTML = "Denominación de Venta";
  encabezado.appendChild(tdDenominacion);

  const tdPais = document.createElement("th");
  tdPais.innerHTML = "País de Origen";
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
let inputIngrediente = document.getElementById("myInput").value
    let encontrados = todosLosProductos.filter((productoComercial)=>productoComercial.ingredientesDeclarados.toLowerCase().indexOf(inputIngrediente.toLocaleLowerCase())!==-1);
    return encontrados;
}

function formulacionPrototipo()
{
    let exist = document.getElementById("subtituloH2")
    console.log(exist)

    if (!exist) {
        const subtituloH2 = document.createElement("h2");
        subtituloH2.setAttribute("id", "subtituloH2");
        subtituloH2.innerHTML = "Teniendo en cuenta los ingredientes cargados en el sistema, introduzca la formulación teórica de su alimento:";
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
    }
    formulacion.innerHTML="";
}

/* CONSTRUCCION DE CLASES */
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

/* CREO NUEVOS OBJETOS PARA INCLUIR EN LOS ARRAYS */
productosComerciales.push(new ProductoComercial("Violife", "Preparado alimenticio a base de aceite de coco", "España", "Agua, aceite de coco (23%), almidón, sal marina, glucono-delta-lactona, aromas, extracto de oliva, vitamina B12"));
productosComerciales.push(new ProductoComercial("Miyoko's", "Queso crema a base de leche de castañas de cajú orgánicas sabor original", "Estados Unidos", "Castañas de cajú orgánicas, agua filtrada, crema orgánica de coco, sal marina, cultivos"));
productosComerciales.push(new ProductoComercial("Felices Las Vacas", "Alimento untable a base de almendras", "Argentina", "Agua, almendras, aceite de coco, almidón, sal, goma guar, ácido cítrico"));
productosComerciales.push(new ProductoComercial("Vivet", "Crema vegetal a base de castañas de cajú", "Argentina", "Agua, Castañas de Caju, Aceite de Girasol, Sal"));
productosComerciales.push(new ProductoComercial("Brew", "Queso untable a base de castañas de cajú sabor clásico", "Argentina", "Castañas de Caju, agua, sal, probióticos, acidulante: ácido cítrico (INS 330) y ácido láctico (INS 270)"));
productosComerciales.push(new ProductoComercial("Brew", "Queso untable a base de castañas de cajú sabor Spicy Cheddar", "Argentina", "Castañas de cajú, agua, aceite de coco, pasta de soja organica, levadura, pimentón, cúrcuma, sal y fermento"));

ingredientes.push(new Ingrediente("Castañas de Cajú", 553, 26.9, 18.2, 43.8, 7.78, 0, 3.3, 12, 37));
ingredientes.push(new Ingrediente("Almendras", 579, 9.1, 21.2, 49.9, 3.8, 0, 12.5, 1, 269));
ingredientes.push(new Ingrediente("Aceite de Coco", 895, 0.84, 0, 99.1, 82.5, 0, 0, 0, 1));
ingredientes.push(new Ingrediente("Aceite de Girasol Alto Oleico", 884, 0, 0, 100, 9.86, 0, 0, 0, 0));
ingredientes.push(new Ingrediente("Proteína de Garbanzo (80%)", 373, 10.4, 73.6, 3, 0, 0, 5, 0, 0));
ingredientes.push(new Ingrediente("Proteína de Haba (90%)", 377, 5.04, 80.96, 3, 0,  0, 3, 0, 0));
ingredientes.push(new Ingrediente("Proteína de Poroto Mungo (80%)", 383, 8.4, 73.6, 5, 0, 0, 5, 0, 0));
ingredientes.push(new Ingrediente("Proteína de Arveja (85%)", 377, 7.8, 78.2, 3, 0, 0, 3, 0, 0));
ingredientes.push(new Ingrediente("Sal", 0, 0, 0, 0, 0, 0, 0, 24, 38800));

/* LOCAL STORAGE Y JSON */
localStorage.setItem('PRODUCTOS COMERCIALES', JSON.stringify(productosComerciales));
localStorage.setItem('INGREDIENTES DEL SIMULADOR', JSON.stringify(ingredientes));


