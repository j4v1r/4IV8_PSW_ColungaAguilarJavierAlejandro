//Problema 1

function problema1n(){

    var p1_input = document.querySelector('#p1-input').value;

    if(!/^[a-zA-Z,\s, ñ, Ñ]*$/g.test(p1_input)){

        alert("Introduzca únicamente letras y palabras sin acento");

    }else{
        
        var p1_palabras = p1_input.split(' ');

        document.querySelector('#p1-output').textContent = p1_palabras.reverse();

    }
}


//Problema 2

function problema2n(){

   var tx1 = document.getElementById("p2-x1").value;
   var tx2 = document.getElementById("p2-x2").value;
   var tx3 = document.getElementById("p2-x3").value;
   var tx4 = document.getElementById("p2-x4").value;
   var tx5 = document.getElementById("p2-x5").value;
   var ty1 = document.getElementById("p2-y1").value;
   var ty2 = document.getElementById("p2-y2").value;
   var ty3 = document.getElementById("p2-y3").value;
   var ty4 = document.getElementById("p2-y4").value;
   var ty5 = document.getElementById("p2-y5").value;

   var x1 = parseFloat(tx1);
   var x2 = parseFloat(tx2);
   var x3 = parseFloat(tx3);
   var x4 = parseFloat(tx4);
   var x5 = parseFloat(tx5);
   var y1 = parseFloat(ty1);
   var y2 = parseFloat(ty2);
   var y3 = parseFloat(ty3);
   var y4 = parseFloat(ty4);
   var y5 = parseFloat(ty5);

   if(tx1=="" || tx2=="" || tx3=="" || tx4=="" || tx5=="" ||
   ty1=="" || ty2=="" || ty3=="" || ty4=="" || ty5==""){

       alert("Introduzca un valor de vector");

   }else{

    var producto = (x1*y1) + (x2*y2) + (x3*y3) + (x4*y4) + (x5*y5);
 
    document.getElementById('p2-output').textContent = "El producto escalar es " + producto;

   }

}


//Problema 3

function problema3n(){

    //Definir un alfabeto 
    var alfabeto = ['A', 'B', 'C','D', 'E', 'F',
    'G','H','I','J','K','L','M','N','Ñ','O','P',
    'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

    //Vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    if(!/^[a-zA-Z,\s, ñ, Ñ]*$/g.test(p3_input)){

        alert("Introduzca únicamente letras y palabras sin acento");

    }else{

        var p3_palabras = p3_input.split(',');

    //Tengo que eliminar los espacios
    p3_palabras = p3_palabras.map(function (palabra){

        //Crear una expresión que me recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase();

    });

    //Tengo que calcular cuantos carácteres únicos hay
    var p3_res = '';
    
    p3_palabras.forEach(function (palabra, i){

        //Separar las palabras actuales del array que
        //contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //Iteración
        alfabeto.forEach(function (letra, j){

            //Itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //Comprobar que la letras este dentro del alfabeto
                if(letras_palabras == letra){

                    //Si la letra no la hemos contado
                    //la agregamos a un array para contar
                    //las letras únicas
                    if(letras_unicas.indexOf(letra)<0){

                        letras_unicas.push(letra);

                    } 

                }

            });

        });

        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';

    });

    document.querySelector('#p3-output').textContent = p3_res;

    } 
    
}