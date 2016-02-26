'use strict';
// EJERCICIO 1:

/**
 * Leer sobre los ciclos: for, forEach, do while y while
 * y Hacer un ejemplo de cada uno explicando que hace cada linea de codigo
 */

// var  array = [1,2,3,4,5,6,'a','b','c','d','e'];

// CICLO FOR
// for ( var i = 0 ; i < array.length ; i++ ) {
//   console.log('valor: ' + array[i]);
// }


// CICLO FOREACH
// array.forEach(callback);

// function callback (valor) {
//   console.log('valor: ' + valor);
// }

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


// var numeroInicial = 1000;

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
for (var i=0; i<5; i++) {
  var numero = i+1;
  s += arrayL[i] + numero;
}

s += '-';

for (var i = 1 ; i < 10 ; i++) {
  s += i;
}
s += 0;

console.log(s);