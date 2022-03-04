/*Javascript es un lenguaje que posee un paradigma
orientado a objetos y a funciones, por tal motivo 
presenta una particularidad la cual es 

NO TIPADO

no existen int, double, float, String, etc...

Dentro de JS, todo es VAR-> Variable

De acuerdo al estandar de ES6 se manejan 3 tipos de variables:

VAR
LET -> Variable de tipo protected
CONST

*/

function validar(formulario){

    if(formulario.nombre.value.lenght < 5){
        alert("Escriba por lo menos cinco caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK="QWERTYUIOPASDFGHJKLÑZXCVBNM"
    +"qwertyuiopasdfghjklñzxcvbnm";

    var checkStr=formulario.nombre.value;

    var allValido=true;

    for(var i=0; i<checkStr; i++){
        var ch=checkStr.charAt(i)
        for(var j=0; j<checkOK.length; j++){
            if(ch==checkOK.charAt(j))
            break;
        }
        if(j==checkOK.length){
            allValido=false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    

    var checkOK="0123456789";
    var checkStr=formulario.edad.value;

    var allValido=true;

    for(var i=0;i<checkStr; i++){
        var ch=checkStr.charAt(i)
        for(var j=0;j<checkOK.length;j++){
            if(ch==checkOK.charAt(j))
            break;
        }
        if(j==checkOK.length){
            allValido=false;
            break
        }
    }

    if(allValido){
        alert("Escriba uncamente letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    /*
    Es necesario que busquen cmo crear expresiones regulares
    para poder haber uso de uan expresión regular
    */

    var txt=formulario.email.value;
    
    //Crear expresión

    var b = /^[^@s]+^+(.)+/;

    alert("Email" + (b.test(txt)?" ":"no")+"valido");

    return b.test;

}