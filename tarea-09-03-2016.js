//Ejercicio 1
/**
 * Realizar una pagina web donde se pueda mostrar los números primos de 1 a 200
 */


// Ejercicio 2
/**
 * Crear conversor de monedas usando un objeto que contenga un listado de monedas
 * y su taza de cambio contra el quetzal...
 * Necesito que sea una funcion que yo le pueda pasar los parametros:
 * moneda y monto (en quetzales) y me devuelva el monto (en la moneda que he pasado de parametro)
 */
/*function conversor(y, convert) {
  switch (convert) {
    case 'dolar':
    console.log(7.70*y);
    break;
    case 'euro':
    console.log(10.80 *y);
    break;
    case 'libra':
    console.log(12.25*y);
    break;
    default:
    console.log('Tipo de Cambio de moneda no disponible en su país');
  }
}

conversor(10,'libra');*/

// Ejercicio 3
/**
 * Calculadora
 * Realizar una calculadora que reciba como parametros dos numeros y una operación
 * las operaciones posibles son todas las que tiene disponible Javascript en su objeto Math
 * Primer resultado de google: http://artistasdigitales.com/javascript-operaciones-y-funciones-matematicas-basicas/
 * mejor sitio según mi criterio: http://devdocs.io/javascript/global_objects/math
 * Segundo mejor sitio: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math
 */


function calculadora (x,y,operacion){
  switch (operacion) {
    case '+':
    console.log(x+y);
    break;
    case '-':
    console.log(x-y);
    break;
    case '*':
    console.log(x*y);
    break;
    case '/':
    console.log(x/y);
    break;
    case 'raiz':
    console.log(Math.sqrt(x+y));
    break;
    case 'raizCubica':
    console.log(Math.cbrt(x+y));
    break;
    case 'absoluto':
    console.log(Math.abs(x/y));
    break;
    case 'coseno':
    console.log(Math.cos(x));
    break;
    case 'seno':
    console.log(Math.sin(x));
    break;
    case 'enteroIgual':
    console.log(Math.ceil(x+y));
    break;
    case 'exponente':
    console.log(Math.exp(x));
    break;
    case 'PI':
    console.log(Math.PI);
    break;
    case 'potencia':
    console.log(Math.pow(x));
    break;
  }
}
calculadora(30,0,'coseno');