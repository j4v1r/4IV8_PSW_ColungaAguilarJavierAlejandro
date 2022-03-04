/* Validar "valor del automóvil", debe ser mínimo de 100,000 y
máximo de 1,000,000*/


function validar(examen){

    if(formulario.valor.value > 1000000){
        alert("El valor del automóvil debe ser mínimo de 100,00 y máximo de 1,000,000");
        formulario.nombre.focus();
        return false;
    }

    var checkOK="0123456789";
    var checkStr=formulario.valor.value;

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