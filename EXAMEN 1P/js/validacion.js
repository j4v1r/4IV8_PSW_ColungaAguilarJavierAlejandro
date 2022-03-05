/* Validar "valor del automóvil", debe ser mínimo de 100,000 y
máximo de 1,000,000*/


function validar(formulario){

    if(formulario.valorau.value < 100000 || formulario.valorau.value >1000000){
        alert("El valor del auto debe estar entre 100,000 y 1,000,000");
        formulario.valorau.focus();
        return false;
    }

    var checkOK="0123456789";

    var checkStr=formulario.valorau.value;

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
        formulario.valorau.focus();
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