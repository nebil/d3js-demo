
# d3js-demo

> Esta rama contiene una nueva versión del _demo_,
  con todos los _snippets_ traducidos hacia [ES6]. :sparkles:  
  En el [_default branch_](https://github.com/nebil/d3js-demo),
  puedes estudiar los ejemplos originales, publicados en [ES5].  
  Sin embargo, la pregunta es… ¿por qué querrías hacer eso?
  :thinking:

## Descripción

Este repositorio almacenará los archivos del _demo_ sobre [D3.js]. :grinning:  
El objetivo de esta presentación es comprender
los conceptos esenciales de esta librería,  
mediante la construcción guiada de un sencillo
—pero siempre fiel— [diagrama de barras](
https://es.wikipedia.org/wiki/Diagrama_de_barras).

## Requisitos

Es recomendable que los participantes de este _demo_ lleven sus computadores  
con un _full-featured_ editor de texto —como [Atom]— y un navegador moderno.  
De preferencia, la última versión de Mozilla [Firefox] o de Google [Chrome].

## Lanzar un _web server_

Para trabajar con el [ejemplo] del mapa de forma local,
es posible que necesites un servidor web _ad hoc_.  
Por motivos de seguridad,
algunos navegadores (_e.g._ Chrome) no cargarán ciertos archivos locales.  
Y por lo tanto, en este contexto, el navegador no querrá abrir los datos
ubicados en [este archivo](data/santiago.geojson).  
Luego, la idea es invocar un sencillo _web server_
que sea capaz de servir archivos locales vía HTTP.

### ¿Cómo?

Nos podemos servir de las “baterías incluidas” de Python 3
(usualmente conocido como [Python])  
que tienen lo suficiente para crear un servidor.
De hecho, sólo nos bastará con seguir dos pasos.
:relieved:

1. :snake:
   Ejecuta este elegante _one-liner_.

   ```sh
   $ python3 -m http.server [port]
   ```
   **Nota:** el parámetro `port` permite especificar un puerto alternativo
   (por defecto, abrirá el 8000).

2. :fox_face:
   Abre tu [navegador favorito](https://www.mozilla.org/firefox/new/)
   y ve hacia http://localhost:8000.

## Contenido

Nombre         | Descripción
-------------- | ----------------------------
`README.md`    | `this`.
`index.html`   | Documento base del _demo_.
`style.css`    | Hoja de estilos principal.
`snippet01.js` | Breve repaso de JavaScript.
`snippet02.js` | Primeros pasos con [D3.js].
`snippet03.js` | _Enter_, _update_, _exit_.
`snippet04.js` | Escalas, colores.
`snippet05.js` | [Ejemplo]: mapa de Santiago.
`data/`        | Datos para el ejemplo final.

## Referencias

- [_Thinking with joins_](https://bost.ocks.org/mike/join/) — Mike Bostock
- [_Let’s make a bar chart_](https://bost.ocks.org/mike/bar/) — Mike Bostock

## Licencias

- El código de este repositorio está bajo el [Mozilla Public License v2.0](
  https://www.mozilla.org/MPL/2.0/).
- El documento `santiago.geojson` fue adaptado a partir del archivo
  encontrado en [este repositorio](https://github.com/jlhonora/geo).

[/]:# (Referencias implícitas)

[es5]:     https://www.ecma-international.org/ecma-262/5.1/
[es6]:     https://www.ecma-international.org/ecma-262/6.0/
[d3.js]:   https://d3js.org
[atom]:    https://atom.io
[chrome]:  https://www.google.com/chrome/
[firefox]: https://www.mozilla.org/firefox/new/
[python]:  http://www.pyzo.org/_images/xkcd_python.png
[ejemplo]: https://nebil.github.io/d3js-demo/
