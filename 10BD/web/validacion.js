/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function registrar(){

    var nom = document.getElementById('nombre').value;
    var appat = document.getElementById('appat').value;
    var apmat = document.getElementById('apmat').value;
    var bol = document.getElementById('boleta').value;
    var tel = document.getElementById('telefono').value;
    
    var letras = /^[a-zA-Z\s]*$/;
    var numeros = /^[0-9]+$/;

    

    if((nom=="")||(appat=="")||(apmat=="")||(bol=="")||(tel=="")){
       
        alert("Debes llenar todos los campos")

    }else if((!(nom.match(letras))) || (!(appat.match(letras))) || (!(apmat.match(letras)))){
        
        alert("Introduzca únicamente letras en el nombre y apellidos");

    }else if(!(bol.match(numeros)) || !(tel.match(numeros))){

        alert("Introduzca únicamente números en la boleta y el teléfono");

    }else if( !(bol.length==10) ){

        alert("Introduzca la boleta correctamente");

    }else if( !(tel.length==10) ){

        alert("Introduzca el teléfono correctamente");

    }else{
        
        document.formulario.submit();
        
    }
    
    /*
    else if((nom=="")||(appat=="")||(apmat=="")||(bol=="")||(tel=="")){

        alert("Debes llenar todos los campos")
    }

    /*
    else if (!str.search("/[A-Z][a-z]+\s/",nom)&&!str.search("/[A-Z][a-z]+\s/",appat)&&
    !str.search("/[A-Z][a-z]+\s/",apmat)&&!str.search("\d\d\d\d\d\d\d\d\d\d",bol)&&
    !str.search("\d\d\d\d\d\d\d\d\d\d",tel)){
        alert("Datos invalidos")
    */
        
}

function eliminar(){

    var bolel = document.getElementById('boletaelimina').value;
    
    var numeros = /^[0-9]+$/;


    if(bolel==""){
       
        alert("Llena el campo");

    }else if( !(bolel.match(numeros)) ){

        alert("Introduzca únicamente números");

    }else if( !(bolel.length==10)  ){

        alert("Introduzca la boleta correctamente");

    }else{
        
        document.elimina.submit();
        
    }
        
}


function actualizar(){

    var datact = document.getElementById('nombr').value;
    var bolact = document.getElementById('boletaact').value;
    var opcion = document.getElementById('dato').value;

    var opc = parseInt(opcion);
    
    var letras = /^[a-zA-Z\s]*$/;
    var numeros = /^[0-9]+$/;


    if(datact=="" || bolact==""){
       
        alert("Llena todos los campos");

    }else if(opc==1 || opc==2 || opc==3){

        if( !(datact.match(letras)) ){

            alert("Introduzca únicamente letras en el nuevo nombre o apellido");
        
        }else{

            document.actualiza.submit();

        }
        
    }else if(opc==4){

        if( !(datact.match(numeros)) ){

            alert("Introduzca únicamente números en la nueva boleta");

        }else if( !(datact.length==10) ){

            alert("Introduca la nueva boleta correctamente")

        }else{
        
            document.actualiza.submit();
            
        }

    }else if(opc==5){

        if( !(datact.match(numeros)) ){

            alert("Introduzca únicamente números en el nuevo teléfono");

        }else if( !(datact.length==10) ){
        
            alert("Introduzca el nuevo teléfono correctamente");
        
        }else{
        
            document.actualiza.submit();

        }

    }
        
}