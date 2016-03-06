// las constantes por 'code style guide' deben de ir siempre en MAYUSCULAS
// var PI = 3.14;
// var s = '3.14';
// console.log(typeof PI);
// console.log(typeof s);
// console.log(PI == s);

// la clase Number(string) convierte el texto a numero.
// console.log(PI === Number(s));

// console.log(Number('123'));
// console.log(parseInt('123a'));


// console.log(typeof 'PRUE' == typeof 'PRUEBA');


// if ( typeof 'PRUE' == typeof 123123123 ) {
// 	console.log('el if dio true');
// } else {
// 	console.log('el if dio false');
// }


// var valor = 3;

// if (valor > 0 && valor < 30) {
// 	console.log(' mayor a 0 y menor a 30');
// } else if (valor >=30 && valor <90) {
// 	console.log(' mayor a 30 y menor a 90');
// } else {
// 	console.log('cualquier otro valor');
// }

// if (valor > 0 && valor < 30) {
// 	console.log(' mayor a 0 y menor a 30');
// } 
// if (valor >=30 && valor <90) {
// 	console.log(' mayor a 30 y menor a 90');
// }


// var letra = 'F';

// if (letra === 'A' ) {
//   console.log('Juan');
// } else if (letra === 'B') {
//   console.log('Ivan');
// } else if( letra  === 'C') {
//   console.log('Jacky');
// } else {
//   console.log('Desconocido');
// }

// switch (letra) {
//   case 'A':
//     console.log('Juan');
//     break;
//   case 'B':
//     console.log('Ivan');
//     break;
//   case 'C':
//     console.log('Jacky');
//     break;
//   default:
//     console.log('Desconocido');
//     break;
// }
// 

/** Hacer switch case para reconocer marca de carro segun la linea
*   datos posibles: Pilot -> Honda, Corolla -> Toyota, M3 -> BMW
**/
  var marca = 'm7';
  switch (marca) {
    case 'Pilot':
      console.log('Honda');
      break;
    case 'Corolla':
      console.log('Toyota');
      break;
    case 'M3':
      console.log('BMW');
      break;
    default:
      console.log('Desconocido');
      break;
  }