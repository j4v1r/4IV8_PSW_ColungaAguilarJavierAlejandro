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



//Formulario 1

function interes(){

    var valor = document.formulario1.cantidad.value;

    //Tipo de dato

    var resul = parseInt(valor);

    var interes = resul*0.02;

    var total = resul+interes;

    document.formulario1.sueldoI.value = "$" + total;
}

//borrar() no funciona, sino borrarn(), ¿por que? quien sabe
function borrarn(){

    document.formulario1.cantidad.value = " ";
    document.formulario1.sueldoI.value = " ";
    
}



//Formulario2

function ventan(){

    //Sueldo base
    var valors = document.formulario2.sueldo.value;
    var sueldo = parseFloat(valors)

    //Venta1

    var valor1 = document.formulario2.venta1.value;
    var vent1 = parseFloat(valor1);
    var comision1 = vent1*0.1;
    var total1 = vent1+comision1;

    //Venta2

    var valor2 = document.formulario2.venta2.value;
    var vent2 = parseFloat(valor2);
    var comision2 = vent2*0.1;
    var total2 = vent2+comision2;

    //Venta3

    var valor3 = document.formulario2.venta3.value;
    var vent3 = parseFloat(valor3);
    var comision3 = vent3*0.1;
    var total3 = vent3+comision3;

    //Comisiones
    var com = total1 + total2 + total3;

    //Ingreso final
    var full = sueldo + total1 + total2 + total3;

    document.formulario2.comisionI.value = "$" + com;
    document.formulario2.ingresoI.value = "$" + full;
}

function borrar2n(){

    document.formulario2.sueldo.value = " ";
    document.formulario2.venta1.value = " ";
    document.formulario2.venta2.value = " ";
    document.formulario2.venta3.value = " ";
    document.formulario2.comisionI.value = " ";
    document.formulario2.ingresoI.value = " ";

}