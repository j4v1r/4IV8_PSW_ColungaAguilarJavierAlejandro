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

    if(valor==" "){

        alert("Introduzca una cantidad");

    }else if (resul<0){

        alert("Escriba únicamente valores positivos");

    }else{
        var interes = resul*0.02;

        var total = resul+interes;
    
        document.formulario1.sueldoI.value = "$" + total;
    }

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


    if (valors==" " || valor1==" " || valor2==" " || valor3==" "){

        alert("Introduzca una cantidad");

    }else if (sueldo<0 || vent1<0 || vent2<0 || vent3<0) {

        alert("Introduzca únicamente valores positivos");

    }else{

        //Comisiones
        var com = total1 + total2 + total3;

        //Ingreso final
        var full = sueldo + total1 + total2 + total3;

        document.formulario2.comisionI.value = "$" + com;
        document.formulario2.ingresoI.value = "$" + full;
    }

}

function borrar2n(){

    document.formulario2.sueldo.value = " ";
    document.formulario2.venta1.value = " ";
    document.formulario2.venta2.value = " ";
    document.formulario2.venta3.value = " ";
    document.formulario2.comisionI.value = " ";
    document.formulario2.ingresoI.value = " ";

}



//Formulario 3

function descuenton(){

    var final = document.formulario3.montof.value;
    var montf = parseFloat(final);

    if(final==" "){

        alert("Introduzca una cantidad");

    }else if (montf<0){

        alert("Escriba únicamente valores positivos");

    }else{

        var desc = montf*0.85;

        document.formulario3.descuentoI.value = "$" + desc;

    }

}

function borrar3n(){

    document.formulario3.montof.value = " ";
    document.formulario3.descuentoI.value = " ";
}


//Formulario 4

function califn(){

    //Parciales
    var calif1 = document.formulario4.parc1.value;
    var calif2 = document.formulario4.parc2.value;
    var calif3 = document.formulario4.parc3.value;

    var cali1 = parseFloat(calif1);
    var cali2 = parseFloat(calif2);
    var cali3 = parseFloat(calif3);


    //Examen Final
    var examen = document.formulario4.examf.value;
    var exam = parseFloat(examen);

    
    //Trabajo Final
    var trab = document.formulario4.trabf.value;
    var trabf = parseFloat(trab);


    if(calif1==" " || calif2==" " || calif3==" " || examen==" " || trab==" "){

        alert("Introduzca una cantidad");

    }else if(cali1<0 || cali1>10 || cali2<0 || cali2>10 || cali3<0 || cali3>10 || exam<0 || exam>10 || trabf<0 || trabf>0){
        
        alert("Introduza únicamente valores positivos entre 0 y 10");

    }else{

        var parcsum = cali1+cali2+cali3;
        var parcs = (parcsum*5.5)/30;

        var califexa = (exam*3)/10;

        //Trababajo final
        var trabfin = (trabf*1.5)/10;

        //Calificación final
        var calif = parcs+califexa+trabfin;

        document.formulario4.califI.value = calif;
    }


}

function borrar4n(){

    document.formulario4.parc1.value = " ";
    document.formulario4.parc2.value = " ";
    document.formulario4.parc3.value = " ";
    document.formulario4.examf.value = " ";
    document.formulario4.trabf.value = " ";
    document.formulario4.califI.value = " ";
}


//Formulario 5


function porcen(){

    var alumn = document.formulario5.totalal.value;
    var alumtot = parseFloat(alumn);

    var alumf = document.formulario5.estfem.value;
    var alumnf = parseFloat(alumf);

    var alumm = document.formulario5.estmas.value;
    var alumnm = parseFloat(alumm);

    if(alumn==" " || alumf==" " || alumm==" "){

        alert("Introduzca una cantidad");

    }else if(alumtot<0 || alumnf<0 || alumnm<0){

        alert("Introduzca únicamente valores positivos");

    }else if(alumnf+alumnm!=alumtot){

        alert("Introduzca la cantidad total de estudiantes masculinos y/o femeninos");

    }else{

        var alumfem = (alumnf*100)/alumtot;

        var alummas = (alumnm*100)/alumtot;

        document.formulario5.porcfemI.value = alumfem + "%";
        document.formulario5.porcmasI.value = alummas + "%";

    }

}

function borrar5n(){

    document.formulario5.totalal.value = " ";
    document.formulario5.estfem.value = " ";
    document.formulario5.estmas.value = " ";
    document.formulario5.porcfemI.value = " ";
    document.formulario5.porcmasI.value = " ";

}


//Formulario 6

function edadn(){

    var nacimi = document.formulario6.nacim.value;
    var naci = parseFloat(nacimi);

    var actua = document.formulario6.actu.value;
    var act = parseFloat(actua);

    if(nacimi==" " || actua==" "){

        alert("Introduzca un año");

    }else if(naci<0 || act<0){

        alert("Introduzca únicamente valores positivos")

    }else if(act<naci){

        alert("El año de nacimiento debe ser menor que el actual");

    }else{

        var edad = act-naci;

        document.formulario6.edadI.value = edad;

    }

}

function borrar6n(){

    document.formulario6.nacim.value = " ";
    document.formulario6.actu.value = " ";
    document.formulario6.edadI.value = " ";

}