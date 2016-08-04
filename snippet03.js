
// Definamos un nuevo _dataset_: los dígitos de pi.
var dataset = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Definamos el ancho y la altura del elemento SVG.
var WIDTH  = 800;
var HEIGHT = 500;

// Definamos un nuevo contenedor, añadiendo una etiqueta <svg>.
// Es importante inicializar ambas dimensiones: ancho y altura.
var container = d3.select('body')
                  .append('svg')           // Añade elemento SVG,
                  .attr('width', WIDTH)    // le ajusta su ancho,
                  .attr('height', HEIGHT); // y también su altura.


// ==============
// El ciclo de D3
// ==============

// Este es uno de los conceptos esenciales que subyacen a D3.
// El ciclo cuenta con tres fases: 'enter', 'update', 'exit'.

// 'enter'
// =======

container.selectAll('rect')  // Los elementos del documento -- DOM.
         .data(dataset)      // Los elementos de los datos.
         .enter()            // (¡El momento de la verdad!)
       .append('rect')       // Añade un <rect> por cada dato entrante.
         .attr('width', 20)
         .attr('height', 20)
        //  .attr('height', function(datum) { return datum * 30; })
         .attr('x', 10)
        //  .attr('x', function(datum, index) { return index * 50; })
         .attr('y', 10)
         .attr('fill', 'maroon');

// Añadamos tres números al arreglo.
dataset.push(8);
dataset.push(9);
dataset.push(7);
console.log(dataset);

// Con estas nuevas incorporaciones, apliquemos (casi) los mismos métodos.
// La diferencia es que los elementos entrantes tendrán un color distinto.
container.selectAll('rect')
         .data(dataset)
         .enter()
       .append('rect')
         .attr('width', 20)
         .attr('height', function(datum) { return datum * 30; })
         .attr('x', function(datum, index) { return index * 50; })
         .attr('y', 10)
         .attr('fill', 'olive');

// 'exit'
// ======

// Ahora, eliminemos dos datos.
dataset.pop();
dataset.pop();
console.log(dataset);

container.selectAll('rect')  // Los elementos del documento -- DOM.
         .data(dataset)      // Los elementos de los datos.
         .exit()             // Toma el conjunto de salida.
         .remove();          // Finalmente, borra sus elementos.

// 'update'
// ========

// La fase de 'update' no tiene un método asociado.
// Al tener la misma cantidad de rectángulos como de datos,
// sólo basta con aplicar los mismos atributos a cada ítem.
container.selectAll('rect')
         .data(dataset)
         .attr('width', 20)
         .attr('height', function(datum) { return datum * 30; })
         .attr('x', function(datum, index) { return index * 50; })
         .attr('y', 10)
         .attr('fill', 'navy');
