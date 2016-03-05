// EJERCICIO 1.

/**
 * Utilizar los ciclos forEach con N cantidad de arrays donde N sea
 * el menor numero posible para imprimir 
 * A9B8C7D6E5+123654789
 */

var arrayL = ['A', 'B', 'C', 'D', 'E'];
var arrayN = [9,8,7,6,5,4,3,2,1];
var s = '';
for(var i=0; i<5; i++){
 	s += arrayL[i] + arrayN[i];
}

 	console.log(s);


// EJERCICIO 2.
// *
//  * Leer sobre el ciclo for in para objetos de la forma:
  
 /* var obj = {
    nombre: ': Fernando',
    apellido: ': Barrios',
    edad: 25,
    estado: ': soltero'
  };
  for (var i in obj ){
  	console.log(i+obj[i])
  }*/
 

// EJERCICIO 3
/**
 * Crear una función que reciba dos números y que devuelva la suma de ambos
 */

/*var x = 0
var obj	= {
	num1: 2,
	num2: 4,
};
for (var i in obj){
	x += obj[i];
}
console.log('la suma de ambos numeros es: ' + x);*/

// suma(2,8);

// function suma(x, y) {
// 	console.log('La suma de ambos numeros es: ', x+y);
// }


	
// EJERCICIO 4
/**
 * Crear una función que reciba un array y que devuela la suma de sus elementos
 */
// var array = [2,3,4,5];
// var array2 = [2,3];
// sum(array2);


// function sum(x){
// 	var suma = 0;
// 	for (var i=0; i<x.length; i++) {
// 		suma += x[i];
// 	}
// 	console.log('La suma de todos los numeros es: ', suma);
// }





/*var z ='';
var arrayE = {	
	letra1: 'A', 
	letra2: 'B', 
	letra3: 'C'};
	for (var i in arrayE){	
		z += i +'.' + '=' + ' ' + arrayE[i];
	}
console.log('La suma de los elementos es: ' + z)*/