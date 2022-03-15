//Función que se encargue de validar código ascii

function validarn(e){

    var teclado = (e.which)?e.which : e.keycode;

    if( teclado !==46 && teclado>31 && (teclado<48 || teclado>57) ){

        alert("Introduzca únicamente números");
        return false;
    
    return true;
    }

}



//Formulario 1

function interes(){

    var valor = document.formulario1.cantidad.value;

    //Tipo de dato

    var resul = parseInt(valor);

    if(valor==" " || valor==""){

        alert("Introduzca una cantidad");

    }else if (resul<0){

        alert("Escriba únicamente valores positivos");

    }else if(!/^[0-9]+$/.test(valor)){

        alert("Introduzca únicamente números");

    }else{
        var interes = resul*0.02;

        var total = resul+interes;
    
        document.formulario1.sueldoI.value = "$" + total;
    }

} 

//borrar() no funciona, sino borrarn(), ¿por que? quien sabe
/*function borrarn(){

    document.formulario1.cantidad.value = " ";
    document.formulario1.sueldoI.value = " ";
    
}*/



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


    if (valors==" " || valor1==" " || valor2==" " || valor3==" " || 
    valors=="" || valor1=="" || valor2=="" || valor3==""){

        alert("Introduzca una cantidad");

    }else if (sueldo<0 || vent1<0 || vent2<0 || vent3<0) {

        alert("Introduzca únicamente valores positivos");

    }else if ( (!/^[0-9]+$/.test(valors)) || (!/^[0-9]+$/.test(valor1))
    || (!/^[0-9]+$/.test(valor2)) || (!/^[0-9]+$/.test(valor3))){

        alert("Introduzca únicamente números");

    }else{

        //Comisiones
        var com = total1 + total2 + total3;

        //Ingreso final
        var full = sueldo + total1 + total2 + total3;

        document.formulario2.comisionI.value = "$" + com;
        document.formulario2.ingresoI.value = "$" + full;
    }

}



//Formulario 3

function descuenton(){

    var final = document.formulario3.montof.value;
    var montf = parseFloat(final);

    if(final==" " || final==""){

        alert("Introduzca una cantidad");

    }else if (montf<0){

        alert("Escriba únicamente valores positivos");

    }else if(!/^[0-9]+$/.test(final)){

        alert("Introduzca únicamente números");

    }else{

        var desc = montf*0.85;

        document.formulario3.descuentoI.value = "$" + desc;

    }

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


    if(calif1==" " || calif2==" " || calif3==" " || examen==" " || trab==" "
    || calif1=="" || calif2=="" || calif3=="" || examen=="" || trab==""){

        alert("Introduzca una cantidad");

    }else if(cali1<0 || cali1>10 || cali2<0 || cali2>10 || cali3<0 || cali3>10 || exam<0 || exam>10 || trabf<0 || trabf>10){
        
        alert("Introduza únicamente valores positivos entre 0 y 10");

    }else if(!/^[0-9]+$/.test(calif1) || !/^[0-9]+$/.test(calif2)
    || !/^[0-9]+$/.test(calif3) || !/^[0-9]+$/.test(examen) ||
    !/^[0-9]+$/.test(trab)){

        alert("Introduzca únicamente números")

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
    document.formulario6.parc1.value = " ";
}



//Formulario 5

function porcen(){

    var alumf = document.formulario5.estfem.value;
    var alumnf = parseFloat(alumf);

    var alumm = document.formulario5.estmas.value;
    var alumnm = parseFloat(alumm);

    if(alumf==" " || alumm==" " || alumf=="" || alumm==""){

        alert("Introduzca una cantidad");

    }else if(alumnf<0 || alumnm<0){

        alert("Introduzca únicamente valores positivos");

    }else if(!/^[0-9]+$/.test(alumf) || !/^[0-9]+$/.test(alumm)){

        alert("Introduzca únicamente números");

    }else{

        var alumtot=alumnf+alumnm;

        var alumfem = (alumnf*100)/alumtot;

        var alummas = (alumnm*100)/alumtot;

        document.formulario5.porcfemI.value = alumfem + "%";
        document.formulario5.porcmasI.value = alummas + "%";

    }

}



//Formulario 6

function edadn(){

    //Nacimiento
    var dianacimi = document.formulario6.dianacim.value;
    var dianaci = parseFloat(dianacimi)

    var mesnacimi = document.formulario6.mesnacim.value;
    var mesnaci = parseFloat(mesnacimi)

    var annacimi = document.formulario6.annacim.value;
    var annaci = parseFloat(annacimi);

    
    //Actual
    var diaactua = document.formulario6.diactu.value;
    var diact = parseFloat(diaactua);

    var mesactua = document.formulario6.mesactu.value;
    var mesact = parseFloat(mesactua);
    
    var anactua = document.formulario6.anactu.value;
    var anact = parseFloat(anactua);

    if(dianacimi==" " || dianacimi=="" || diaactua==" " || diaactua=="" ||
        mesnacimi==" " || mesnacimi=="" || mesactua==" " || mesactua=="" ||
        annacimi==" " || anactua==" " || annacimi=="" || anactua==""){

        alert("Introduzca un la fecha completa");

    }else if(dianaci<0 || diact<0 || dianaci>31 || diact>31 ){

        alert("Recuerda que los meses tienen hasta 31 días");

    }else if(mesnaci<0 || mesact<0 || mesnaci>12 || mesact>12 ){

        alert("Recuerda que el año tiene solo 12 meses");

    }else if(annaci<0 || anact<0){

        alert("Introduzca un año válido");

    }else if(anact<annaci){

        alert("El año de nacimiento debe ser menor que el actual");

    }else if( !/^[0-9]+$/.test(dianacimi) || !/^[0-9]+$/.test(diaactua)
    || !/^[0-9]+$/.test(mesnacimi) || !/^[0-9]+$/.test(mesactua) ||
    !/^[0-9]+$/.test(annacimi) || !/^[0-9]+$/.test(anactua) ){

        alert("Introduzca únicamente números");

    }else if(anact>annaci){

        if(mesact<mesnaci){

            var edad = anact-annaci-1;
            document.formulario6.edadI.value = edad + " año/s";

        }else if(mesact=mesnaci && diact<dianaci){

            var edad = anact-annaci-1;
            document.formulario6.edadI.value = edad + " año/s";
            
        }else{

            var edad = anact-annaci;
            document.formulario6.edadI.value = edad + " año/s";

        }

    }else if(anact=annaci){

        if(mesact>mesnaci && diact<dianaci){

            var edad = mesact-mesnaci-1;
            document.formulario6.edadI.value = edad + " mes/es"
        }
    }

}
