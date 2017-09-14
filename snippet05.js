/*
Copyright (c) 2016, Nebil Kawas García
This source code is subject to the terms of the Mozilla Public License.
You can obtain a copy of the MPL at <https://www.mozilla.org/MPL/2.0/>.

snippet05.js -- Ejemplo: mapa de Santiago
*/

// Intentaremos construir algo (un poco) más interesante que un _bar chart_.
// Usaremos D3 para presentar información demográfica sobre nuestra capital.

const WIDTH  = 800;
const HEIGHT = 800;
const FILEPATH = 'data/santiago.geojson';

// Definamos algunos parámetros relacionados con la población.
const MINPOP =  50000;
const MEDPOP = 120000;
const MAXPOP = 500000;
const PREFIX = 'https://es.wikipedia.org/wiki/';

d3.select('#d3-header').text("Provincia de Santiago");
d3.selectAll('p').remove();

const body = d3.select('body');
body.append('p').text("Que no es lo mismo que el Gran Santiago.");
body.append('p').text("Comuna: ")
                .attr('id', 'region')
                .style('font-weight', 'bold');

const container = body.append('svg')
                      .attr('width', WIDTH)
                      .attr('height', HEIGHT);

// Definamos una escala de dos colores (amarillo-rojo) para visualizar
// la diferencia de población que existe entre las comunas de Santiago.
// const populationScale = d3.scaleLinear()
//                           .domain([MINPOP, MAXPOP])
//                           .range(['yellow', 'red']);

// Es posible utilizar una escala con más colores —tres, en este caso—
// para representar, de forma más clara, las diferencias demográficas.
const populationScale = d3.scaleLinear()
                          .domain([MINPOP, MEDPOP, MAXPOP])
                          .range(['white', 'yellow', 'red']);

const getMapParameters = bounds => {
    // Adaptado desde http://stackoverflow.com/a/14691788.

    // Obtenemos las coordenadas de ambos puntos: b0 y b1.
    // Estos puntos encuadran este mapa, en una caja.
    const [[b0x, b0y], [b1x, b1y]] = bounds;

    // Luego, utilizamos estos puntos para hallar los parámetros adecuados.
    const scale = 0.95 / Math.max((b1x - b0x) / WIDTH, (b1y - b0y) / HEIGHT);
    const translate = [(WIDTH - scale * (b1x + b0x)) / 2,
                -75 + (HEIGHT - scale * (b1y + b0y)) / 2];
    return [scale, translate];
};

// Obtengamos los datos desde el archivo en formato JSON.
d3.json(FILEPATH, json => {
    // Antes de dibujar un mapa, debemos primero escoger una proyección,
    // ya que no es posible representar —sin provocar alguna distorsión—
    // nuestro magnífico y esférico planeta Tierra      (tridimensional)
    // en la plana superficie de nuestro navegador.      (bidimensional)
    // (Más información en: https://www.youtube.com/watch?v=kIID5FDi2JQ)

    // En este caso, usaremos la proyección de Gerardus Mercator.
    const projection = d3.geoMercator().scale(1).translate([0, 0]);
    const path = d3.geoPath().projection(projection);

    // Busquemos parámetros apropiados de 'scale' y 'translate'.
    const [s, t] = getMapParameters(path.bounds(json));

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
        .attr('fill', datum => populationScale(datum.properties.POP));
});

const setName = datum => {
    const box = d3.select('#region');
    const name = datum.properties.NAME;
    const population = datum.properties.POP.toLocaleString();
    box.text(`Comuna: ${name} [${population}]`);
};

const getWiki = datum => PREFIX + datum.properties.WIKI;
