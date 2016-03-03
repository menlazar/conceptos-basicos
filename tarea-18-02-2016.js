'use strict';
// EJERCICIO 1:

/**
 * Leer sobre los ciclos: for, forEach, do while y while
 * y Hacer un ejemplo de cada uno explicando que hace cada linea de codigo
 */
    
//posicion =  0,1,2,3,4,5, 6,  7,  8,  9   10
// var  array = [1,2,3,4,5,6,'a','b','c','d','e'];
//longitud = cantidad de datos = 11
// CICLO FOR
// for ( var i = 0 ; i < array.length ; i++ ) {
//   console.log('i: ' + i + ' valor: ' + array[i]);
                       // array[0]  = 1
                       // array[1]  = 2
                       // array[6]  = a
// }
//i++      =        i = i + 1

// CICLO FOREACH
// array.forEach(function (valor) {
//   console.log('valor con forEach: ' + valor);
// });

// CICLO WHILE
// var i=0;
// while (i < array.length) {
//   console.log('valor: ' + array[i]);
//   i++;
// }

// CICLO DO WHILE
// var i=0;
// do {
//   console.log('valor: ' + array[i]);
//   i++;
// } while (i <  array.length);


// var numeroInicial = 999;

// do {
//   console.log('numeroInicial: ' + numeroInicial);
//   numeroInicial += 10;
// } while (numeroInicial < 1000);

// while (numeroInicial < 1000 ) {
//   console.log('numeroInicial: ' + numeroInicial);
//   numeroInicial += 10;
// }


  // EJERCICIO 2:

/**
 * Crear N cantidad de arrays donde N debe ser el menor numero posible, luego
 * utilizar el ciclo for que recorra los arrays para poder 
 * imprimir: A1B2C3D4E5-1234567890
 */

var arrayL = ['A','B','C','D','E'];
var s = '';
      // i=4
for (var i=0; i<5; i++) {
  var numero = i+1;  //2
  s += arrayL[i] + numero;
       // B         2
  // 'A1B2C3D4' = E    +  5
}
// s = 'A1B2C3D4E5'

s += '-';
//s = 'A1B2C3D4E5-'

for (var i = 1 ; i < 10 ; i++) {
  s += i;
  //s = '123456789'
}
//'A1B2C3D4E5-123456789'
s += 0;
//'A1B2C3D4E5-1234567890'

// console.log(s);