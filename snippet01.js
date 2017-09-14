/*
Copyright (c) 2016, Nebil Kawas García
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPL at <https://www.mozilla.org/MPL/2.0/>.

snippet01.js -- Introducción a JavaScript
*/

// Primero, probaremos si es que el código está siendo ejecutado.
// Para conseguir esto, veamos si es que se imprime lo siguiente.

// console.log("Hello, world!");  // Comencemos con un clásico mensaje.
// console.log(d3.version);       // Luego, la versión de D3 utilizada.

// Definamos una función.
// const addOne = datum => {      // Ella recibe un número (i.e. 'datum')
//     console.log(datum + 1);    // para imprimir su sucesor en consola.
// }

// addOne(2);                     // Debería imprimir 3.
// addOne(41);                    // Debería imprimir 42.


// ============ =========
// Programación funcional
// ============ =========

// Definamos nuestro _dataset_ a partir de algunos pocos pokémones.
// const pokedex = ["Bulbasaur", "Ivysaur", "Venasaur", "Charmander",
//                  "Charmeleon", "Charizard", "Squirtle",
//                  "Wartortle", "Blastoise", "Caterpie"];
// console.log(pokedex);

// El método 'forEach' toma cada elemento definido en el arreglo
// para, entonces, aplicarle la función entregada como argumento.

// pokedex.forEach(name => {  // En este caso, definimos una función
//     console.log(name);     // anónima (porque... no tiene nombre)
// });                        // para imprimir cada elemento.

// pokedex.forEach((name, index) => {  // Asimismo, puede recibir como
//     console.log(index, "-", name);  // segundo argumento, el índice
// });                                 // de cada elemento.

// Ahora, definamos un flamante _dataset_ aurífero.
// const goldenData = [1, 6, 1, 8, 0, 3, 3, 9, 8, 8];

// Además, de forma conveniente, podemos llamar al método 'forEach',
// entregándole, como argumento, una función definida anteriormente.
// goldenData.forEach(addOne);
