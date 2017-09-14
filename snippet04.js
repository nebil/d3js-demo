/*
Copyright (c) 2016, Nebil Kawas García
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPL at <https://www.mozilla.org/MPL/2.0/>.

snippet04.js -- Escalas, colores
*/

// Primero, definamos un nuevo _dataset_ extendido.
// const dataset = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,
//                     8, 9, 7, 9, 3, 2, 3, 8, 4, 6,
//                     2, 6, 4, 3, 3, 8, 3, 2, 7, 9,
//                    5, 10, 2, 8, 8, 4, 1, 9, 7, 1];

// Definamos el ancho y la altura del elemento SVG.
// const WIDTH  = 800;
// const HEIGHT = 500;

// Luego, elaboremos un contenedor.
// const container = d3.select('body')
//                     .append('svg')           // Añade elemento SVG,
//                     .attr('width', WIDTH)    // le ajusta su ancho,
//                     .attr('height', HEIGHT); // y también su altura.


// =================
// Las escalas en D3
// =================

// Las escalas nos permiten _mapear_
// desde un dominio...   (los datos)
// hasta un recorrido.   (los pixeles)

// const scale = d3.scaleLinear()                 // Forma una escala lineal.
//                 .domain([0, d3.max(dataset)])  // En este caso: 0 -->  10
//                 .range([0, HEIGHT]);           //               0 --> 500

// console.log(scale(10));  // 10 * 50 = 500
// console.log(scale(2));   //  2 * 50 = 100
// console.log(scale(7));   //  7 * 50 = 350

// container.selectAll('rect')  // Los elementos del documento -- DOM.
//          .data(dataset)      // Los elementos de los datos.
//          .enter()            // (¡El momento de la verdad!)
//        .append('rect')       // Añade un <rect> por cada dato entrante.
//          .attr('width', 15)
//          .attr('height', datum => datum * 30)
//         //  .attr('height', scale)
//          .attr('x', (datum, index) => index * 20)
//          .attr('y', 0)
//         //  .attr('y', datum => HEIGHT - scale(datum))
//          .attr('fill', 'brown');

// Ahora, definamos una función que _mapea_
// de números (del 1 al 10) a tres colores.
// En este caso: {1, 2, 3} --> rojo
//               {4, 5, 6} --> amarillo
//           {7, 8, 9, 10} --> verde

// const numberColor = digit => {
//     if (digit <= 3) {
//         return 'red';
//     }
//     else if (digit <= 6) {
//         return 'yellow';
//     }
//     else {
//         return 'green';
//     }
// }

// Finalmente, definamos más escalas: bicolor y tricolor.
// Estas escalas permiten transformar números en colores,
// obteniendo, en este ejemplo, una interpolación lineal.

// const bicolor = d3.scaleLinear()
//                   .domain([0, d3.max(dataset)])
//                   .range(['red', 'blue']);

// const tricolor = d3.scaleLinear()
//                    .domain([0, d3.max(dataset)/2, d3.max(dataset)])
//                    .range(['red', 'yellow', 'green']);

// console.log(bicolor(0));   // '#FF0000' (rojo)
// console.log(bicolor(5));   // '#800080' (púrpura)
// console.log(bicolor(10));  // '#0000FF' (azul)

// container.selectAll('rect')  // Los elementos del documento -- DOM.
//          .data(dataset)      // Los elementos de los datos.
//          .enter()            // (¡El momento de la verdad!)
//        .append('rect')       // Añade un <rect> por cada dato entrante.
//          .attr('width', 15)
//          .attr('height', scale)
//          .attr('x', (datum, index) => index * 20)
//          .attr('y', datum => HEIGHT - scale(datum))
//          .attr('fill', bicolor);
