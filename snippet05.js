/*
Copyright (c) 2016, Nebil Kawas García
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPL at <https://www.mozilla.org/MPL/2.0/>.

snippet05.js -- Ejemplo: mapa de Santiago
*/

// Intentaremos construir algo (un poco) más interesante que un _bar chart_.
// Usaremos D3 para presentar información demográfica sobre nuestra capital.

var WIDTH  = 800;
var HEIGHT = 800;
var FILEPATH = 'data/santiago.geojson';

// Definamos algunos parámetros relacionados con la población.
var MINPOP =  50000;
var MEDPOP = 120000;
var MAXPOP = 500000;
var PREFIX = 'https://es.wikipedia.org/wiki/';

d3.select('#d3-header').text("Provincia de Santiago");
d3.selectAll('p').remove();

var body = d3.select('body');
body.append('p').text("Que no es lo mismo que el Gran Santiago.");
body.append('p').text("Comuna: ")
                .attr('id', 'region')
                .style('font-weight', 'bold');

var container = body.append('svg')
                    .attr('width', WIDTH)
                    .attr('height', HEIGHT);

// Definamos una escala de dos colores (amarillo-rojo) para visualizar
// la diferencia de población que existe entre las comunas de Santiago.
// var populationScale = d3.scaleLinear()
//                         .domain([MINPOP, MAXPOP])
//                         .range(['yellow', 'red']);

// Es posible utilizar una escala con más colores —tres, en este caso—
// para representar, de forma más clara, las diferencias demográficas.
var populationScale = d3.scaleLinear()
                        .domain([MINPOP, MEDPOP, MAXPOP])
                        .range(['white', 'yellow', 'red']);

function getMapParameters(bounds) {
    // Adaptado desde http://stackoverflow.com/a/14691788.

    // Obtenemos las coordenadas de ambos puntos: b0 y b1.
    // Estos puntos encuadran este mapa, en una caja.
    var [[b0x, b0y], [b1x, b1y]] = bounds; // (¡ES6!)

    // Luego, utilizamos estos puntos para hallar los parámetros adecuados.
    var scale = 0.95 / Math.max((b1x - b0x) / WIDTH, (b1y - b0y) / HEIGHT);
    var translate = [(WIDTH - scale * (b1x + b0x)) / 2,
              -75 + (HEIGHT - scale * (b1y + b0y)) / 2];
    return [scale, translate];
}

// Obtengamos los datos desde el archivo en formato JSON.
d3.json(FILEPATH, function(json) {
    // Antes de dibujar un mapa, debemos primero escoger una proyección,
    // ya que no es posible representar —sin provocar alguna distorsión—
    // nuestro magnífico y esférico planeta Tierra      (tridimensional)
    // en la plana superficie de nuestro navegador.      (bidimensional)

    // En este caso, usaremos la proyección de Gerardus Mercator.
    var projection = d3.geoMercator().scale(1).translate([0, 0]);
    var path = d3.geoPath().projection(projection);

    // Busquemos parámetros apropiados de 'scale' y 'translate'.
    var [s, t] = getMapParameters(path.bounds(json)); // (¡ES6!)

    // Luego, actualicémoslos en la proyección.
    projection.scale(s).translate(t);

    // Hagamos, finalmente, entrar a los datos.
    container.selectAll('path')
        .data(json.features)
        .enter()
      .append('a')
        .attr('xlink:href', getWiki)
      .append('path')
        .on('mouseover', setName)
        .attr('d', path)
        .attr('fill', function(datum) {
            return populationScale(getPopulation(datum));
        });
});

function setName(datum) {
    var box = d3.select('#region');
    var name = datum.properties.NAME;
    var population = getPopulation(datum).toLocaleString();
    box.text(`Comuna: ${name} [${population}]`); // (¡ES6!)
}

function getWiki(datum) {
    return PREFIX + datum.properties.WIKI;
}

function getPopulation(datum) {
    return datum.properties.POP;
}
