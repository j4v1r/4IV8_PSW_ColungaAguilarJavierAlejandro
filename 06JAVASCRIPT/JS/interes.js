//Función que se encargue de validar por expresión regular

function validarn(e){

    var teclado = (document.all)?e.keyCode : e.which;
    /*Vamos a aplicar una prueba lógica a todo el teclado a partir 
    de un patrón, este patrón debe ser númerico y solo acepta del 
    0 a 9. Todo lo demás lo deja escapar*/
    if (teclado==8) return true;
    var patron= /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}

function interes(){

    var valor = document.formulario1.cantidad.value;

    //Tipo de dato

    var resul = parseInt(valor);

    var interes = resul*0.025;

    var total = resul+interes;

    document.formulario1.sueldoI.value = "$" + total;
}

function borrar(){

    document.formulario1.sueldoI.value = "";
    document.formulario1.cantidad.value = "";

}