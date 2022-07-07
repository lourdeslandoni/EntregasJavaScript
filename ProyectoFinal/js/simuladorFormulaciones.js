const productosComerciales = [];

const boton1 = document.getElementById("botonListado");
boton1.addEventListener("click", () => {
  mostrarProductosComerciales(productosComerciales);
});

const boton2 = document.getElementById("botonIngredientes");
boton2.addEventListener("click", () => {
  const contenedor = document.querySelector(".contenedor");
  const existe = document.getElementById("myInput");
  if (!existe) {
    let titulo = document.createElement("h2");
    titulo.innerHTML =
      "Ingresa el ingrediente por el cual deseas filtrar los productos comerciales";
    contenedor.appendChild(titulo);
    let inputIngrediente = document.createElement("input");
    contenedor.appendChild(inputIngrediente);
    inputIngrediente.setAttribute("id", "myInput");
    let filtrar = document.createElement("button");
    filtrar.setAttribute("class", "botonBuscar");
    filtrar.innerHTML = "Buscar";
    contenedor.appendChild(filtrar);

    filtrar.addEventListener("click", () => {
      let filtrados = filtrarPorIngrediente(productosComerciales);
      console.log(filtrados);
      mostrarProductosComerciales(filtrados);
    });
  }
});

const boton3 = document.getElementById("botonAPI");
boton3.addEventListener("click", () => {
  const contenedor = document.querySelector(".contenedor");
  const existe = document.getElementById("myInput");
  if (!existe) {
    let titulo = document.createElement("h2");
    titulo.innerHTML =
      "Ingresa el ingrediente del cual desees obtener información (en INGLÉS)";
    contenedor.appendChild(titulo);
    let inputIngrediente = document.createElement("input");
    contenedor.appendChild(inputIngrediente);
    inputIngrediente.setAttribute("id", "myInput");
    let filtrar = document.createElement("button");
    filtrar.setAttribute("class", "botonBuscar");
    filtrar.innerHTML = "Buscar";
    contenedor.appendChild(filtrar);
    filtrar.addEventListener("click", () => {
      const existe = document.getElementById("resultadosAPI");
      console.log(existe);
      if (!existe) {
        getApi();
      }
    });
  }
});

function getApi() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let inputIngrediente = document.getElementById("myInput").value;

  fetch(
    "https://api.spoonacular.com/food/ingredients/search?apiKey=e58802fd9f744e2cb8df44e72dc5c148&query=" +
      inputIngrediente +
      "&number=5&sort=calories&sortDirection=desc\n",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => mostrarDatosAPI(data))
    .catch((error) => console.log("error", error));

  const contenedor = document.querySelector(".contenedor");
  contenedor.appendChild(filtrar);
}

function mostrarDatosAPI(elemento) {
  const contenedor = document.querySelector(".contenedor");

  elemento.results.forEach((results) => {
    const { name, image } = results;

    const divPost = document.createElement("div");
    divPost.setAttribute("id", "resultadosAPI");

    divPost.innerHTML = `<h2>${name}</h2>
                           <img src= https://spoonacular.com/cdn/ingredients_100x100/${image}>
       `;
    contenedor.appendChild(divPost);
  });

  console.log(elemento.results);
}

function mostrarProductosComerciales(listaProductos) {
  let productos = document.querySelector("#listaProductos");
  if (!productos) {
    productos = document.createElement("table");
    productos.setAttribute("id", "listaProductos");
  }
  productos.innerHTML = "";

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

  listaProductos.forEach((productoComercial) => {
    const nodotr = document.createElement("tr");
    let nodotd = document.createElement("td");

    nodotd.innerHTML = `${productoComercial.marcaComercial}`;
    nodotr.appendChild(nodotd);

    nodotd = document.createElement("td");
    nodotd.innerHTML = `${productoComercial.denominacionDeVenta}`;
    nodotr.appendChild(nodotd);

    nodotd = document.createElement("td");
    nodotd.innerHTML = `${productoComercial.paisDeOrigen}`;
    nodotr.appendChild(nodotd);

    nodotd = document.createElement("td");
    nodotd.innerHTML = `${productoComercial.ingredientesDeclarados}`;
    nodotr.appendChild(nodotd);

    productos.appendChild(nodotr);
  });

  let contenedor = document.getElementById("main");
  contenedor.appendChild(productos);
}

function filtrarPorIngrediente(todosLosProductos) {
  let inputIngrediente = document.getElementById("myInput").value;
  let encontrados = todosLosProductos.filter(
    (productoComercial) =>
      productoComercial.ingredientesDeclarados
        .toLowerCase()
        .indexOf(inputIngrediente.toLocaleLowerCase()) !== -1
  );
  return encontrados;
}

/* CONSTRUCCION DE CLASES */
class ProductoComercial {
  constructor(
    marcaComercial,
    denominacionDeVenta,
    paisDeOrigen,
    ingredientesDeclarados
  ) {
    this.marcaComercial = marcaComercial;
    this.denominacionDeVenta = denominacionDeVenta;
    this.paisDeOrigen = paisDeOrigen;
    this.ingredientesDeclarados = ingredientesDeclarados;
  }
}

productosComerciales.push(
  new ProductoComercial(
    "Violife",
    "Preparado alimenticio a base de aceite de coco",
    "España",
    "Agua, aceite de coco (23%), almidón, sal marina, glucono-delta-lactona, aromas, extracto de oliva, vitamina B12"
  )
);
productosComerciales.push(
  new ProductoComercial(
    "Miyoko's",
    "Queso crema a base de leche de castañas de cajú orgánicas sabor original",
    "Estados Unidos",
    "Castañas de cajú orgánicas, agua filtrada, crema orgánica de coco, sal marina, cultivos"
  )
);
productosComerciales.push(
  new ProductoComercial(
    "Felices Las Vacas",
    "Alimento untable a base de almendras",
    "Argentina",
    "Agua, almendras, aceite de coco, almidón, sal, goma guar, ácido cítrico"
  )
);
productosComerciales.push(
  new ProductoComercial(
    "Vivet",
    "Crema vegetal a base de castañas de cajú",
    "Argentina",
    "Agua, Castañas de Caju, Aceite de Girasol, Sal"
  )
);
productosComerciales.push(
  new ProductoComercial(
    "Brew",
    "Queso untable a base de castañas de cajú sabor clásico",
    "Argentina",
    "Castañas de Caju, agua, sal, probióticos, acidulante: ácido cítrico (INS 330) y ácido láctico (INS 270)"
  )
);
productosComerciales.push(
  new ProductoComercial(
    "Brew",
    "Queso untable a base de castañas de cajú sabor Spicy Cheddar",
    "Argentina",
    "Castañas de cajú, agua, aceite de coco, pasta de soja organica, levadura, pimentón, cúrcuma, sal y fermento"
  )
);

localStorage.setItem(
  "PRODUCTOS COMERCIALES",
  JSON.stringify(productosComerciales)
);
