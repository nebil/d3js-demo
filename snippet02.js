
// Estilo imperativo: digo cómo debe hacerlo.
// ====== ===========      ====

// ===============================
// “Selecciona todos los párrafos;
//  luego, recórrelos uno por uno,
//  y cámbiales su color a verde.”

//                   -- JavaScript

// var paragraphs = document.getElementsByTagName('p');
// for (var i = 0; i < paragraphs.length; i++) {
//     var paragraph = paragraphs.item(i);
//     paragraph.style.setProperty('color', 'green');
// }

// Estilo declarativo: digo qué debe hacer.
// ====== ============      ===

// ==========================================
// “Todos los párrafos serán de color verde.”

//                                   -- D3.js

// d3.selectAll('p').style('color', 'green');

// Asimismo, con 'select', podemos seleccionar un único elemento.
// De forma análoga a la librería jQuery, es posible escoger por:
// • id       --> #selector
// • class    --> .selector
// • etiqueta -->  etiqueta

// var header = d3.select('#d3-header');             // Seleccionamos por 'id'.
// header.style('color', 'blue');                    // Cambia el color a azul.
// header.text("Mi versión de D3: v" + d3.version);  // Cambia el texto.

// Sin embargo, en D3 usaremos el concepto de _method chaining_.
// Esto nos permitirá simplificar la notación considerablemente.
// var header = d3.select('#d3-header')
//                .style('color', 'blue')
//                .text("Mi versión de D3: v" + d3.version);


// === = ======== ====== ========
// SVG - Scalable Vector Graphics
// === = ======== ====== ========

// Definamos el ancho y la altura del elemento SVG.
// var WIDTH  = 800;
// var HEIGHT = 500;

// Definamos un nuevo contenedor, añadiendo una etiqueta <svg>.
// Es importante inicializar ambas dimensiones: ancho y altura.
// var container = d3.select('body')
//                   .append('svg')                 // Añade elemento SVG,
//                   .attr('width', WIDTH)          // le ajusta su ancho,
//                   .attr('height', HEIGHT);       // y también su altura.

// Asociemos un nuevo rectángulo al contenedor.
// SVG ofrece más figuras que sólo rectángulos:
// <circle>, <ellipse>, <polygon>, entre otras.
// container.append('rect')                         // Añade un rectángulo,
//          .attr('width', 80)                      // le ajusta su ancho,
//          .attr('height', 50)                     // también su altura,
//          .attr('fill', 'teal')                   // también su color,
//          .attr('stroke', '#222')                 // también su borde,
//          .attr('stroke-width', 3)                // también su grosor,
//          .attr('x', 30)                          // también su 'x',
//          .attr('y', 50);                         // también su 'y'.
