var paragraphs = document.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs.item(i);
    paragraph.style.setProperty('color', 'green');
}

d3.selectAll('p').style('color', 'green');

var header = d3.select('#d3-header');
header.style('color', 'blue');
header.text("Mi versión de D3: v" + d3.version);

var header = d3.select('#d3-header')
               .style('color', 'blue')
               .text("Mi versión de D3: v" + d3.version);

var WIDTH  = 800;
var HEIGHT = 500;

var container = d3.select('body')
                  .append('svg')
                  .attr('width', WIDTH)
                  .attr('height', HEIGHT);

container.append('rect')
         .attr('width', 80)
         .attr('height', 50)
         .attr('fill', 'teal')
         .attr('stroke', '#222')
         .attr('stroke-width', 3)
         .attr('x', 30)
         .attr('y', 50);
