function validar(e){

    teclado= (document.all)?e.keyCode: e.which;
    /*Vamos a aplicar una prueba lógica a todo el teclado a partir de un patrón, este
    patrón debe ser númerico y solo acepta del 0 a 9. Todo lo demás lo deja escapar*/
    if (teclado==8) return true;
    var patrón= /[0_9\d .]/;

    var probar = String.fromCharCode(teclado);
    return probar.test(probar);

}