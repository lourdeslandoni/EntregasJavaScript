let nombreUsuario = prompt("Ingrese su nombre");

alert ("Hola " + nombreUsuario);

let edadUsuario = Number(prompt("Ingrese su edad"));
if (edadUsuario<18)
{
alert("ACCESO DENEGADO");
}
else{
    let opcionSitio = prompt(`Indique la pagina que desea visitar: 
                                1. Gancia 
                                2. Dr. Lemon
                                3. Martini
                                4. Fernet 1882
                                5. Amarula
                                6. SALIR`);

    while(opcionSitio!=='SALIR'){
        opcionSitio = prompt(`Indique la pagina que desea visitar: 
        1. Gancia 
        2. Dr. Lemon
        3. Martini
        4. Fernet 1882
        5. Amarula
        6. SALIR`);
}
}


