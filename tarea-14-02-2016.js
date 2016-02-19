// practicando con tipos de variables

// EJERCICIO 1:
/**
 * Crear un array que contenga los números del 1 al 10.
 * Después imprimir la posición que contenga el número 1, 4, 6, 10.
 */

 /*var arr = [1,2,3,4,5,6,7,8,9,10];

 console.log('numero: ' + arr [0]);
 console.log('numero: ' + arr [3]);
 console.log('numero: ' + arr [5]);
 console.log('numero: ' + arr [9]);
 */

// EJERCICIO 2:
/**
 * Crear un objeto de tipo persona que contenga todas las propiedades de una persona
 * como nombre, apellido, edad, DPI
 * Imprimir en la consola un saludo de la forma: Hola {NOMBRE} {APELLIDO}, te recuerdo que tu DPI es
 * {DPI}
 */

 /*var persona = {
 	nombre : 'Fernando',
 	apellido: 'Barrios',
 	edad: '24',
 	dpi: '2819 54739 0101'
 }


 var concatenar = 'Hola ' + persona.nombre + ' ' + persona.apellido + ', te recuerdo que tu DPI es: ' + persona.dpi + ',' +
  ' No olvides que tu edad es: ' + persona.edad;

 console.log(concatenar)*/

//EJERCICIO 3:
/**
 * crear N cantidad de variables y luego imprimirlas de forma que en la consola
 * de nodejs se muestre lo siguiente: A1B2C3D4E5-1234567890
 *
 * Nota: No es posible crear más de dos carácteres por variable
 */

var a = 'A';
var b = 'B';
var c = 'C';
var d = 'D';
var e = 'E';
var n1 = 1;
var n2 = 2;
var n3 = 3;
var n4 = 4;
var n5 = 5;
var n6 = 6;
var n7 = 7;
var n8 = 8;
var n9 = 9;
var n0 = 0;
var signo = '-';

console.log('el resultado del codigo es: ' + a + n1 + b + n2 + c + n3 + d + n4 + e + n5 + signo 
+ n1 + n2 + n3 + n4 + n5+ n6 + n7 + n8+ n9+ n0);
