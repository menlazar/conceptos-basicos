// Primer forma de usar funciones
// function operacionBasica(x, y, operacion) {
//   switch (operacion) {
//     case '+':
//       console.log(x+y);
//       break;
//     case '-':
//       console.log(x-y);
//       break;
//     case '*':
//       console.log(x*y);
//       break;
//     case '/':
//       console.log(x/y);
//       break;
//     default:
//       console.log('Operacion desconocida o no permitida');
//       break;
//   }
// }
sqrt
// operacionBasica(1,1,'/');

// variables como funciones
// var operacionBasica2 = function (x, y, operacion) {
//   switch (operacion) {
//     case '+':
//       console.log(x+y);
//       break;
//     case '-':
//       console.log(x-y);
//       break;
//     case '*':
//       console.log(x*y);
//       break;
//     case '/':
//       console.log(x/y);
//       break;
//     default:
//       console.log('Operacion desconocida o no permitida');
//       break;
//   }
// }

// operacionBasica2(3,2,'*');
// console.log(typeof operacionBasica2);


// funciones anonimas
// (function(){
//   var x = 3;
//   function f1() {
//     x++;
//   }
//   console.log('el valor de x es ', x);
// })();

// (function(){
//   var x = 6;
//   function f1() {
//     x++;
//   }
//   console.log('el valor de x es en otra f anomima es ', x);
// })();

// funciones con return
// function suma (x, y) {
//   return x + y;
// }

// var resultado = suma(2,4);

// console.log(resultado);
// console.log('tipo de variable resultado', typeof resultado);

// Usando Ecmascript 6 = Javascript 2015
// var resultado = (x,y) => x+y;
// console.log(resultado(2,4));