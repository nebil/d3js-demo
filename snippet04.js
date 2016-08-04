var dataset = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,
                  8, 9, 7, 9, 3, 2, 3, 8, 4, 6,
                  2, 6, 4, 3, 3, 8, 3, 2, 7, 9,
                 5, 10, 2, 8, 8, 4, 1, 9, 7, 1];

var WIDTH  = 800;
var HEIGHT = 500;

var container = d3.select('body')
                  .append('svg')
                  .attr('width', WIDTH)
                  .attr('height', HEIGHT);

var scale = d3.scaleLinear()
              .domain([0, d3.max(dataset)])
              .range([0, HEIGHT]);

console.log(scale(10));
console.log(scale(2));
console.log(scale(7));

container.selectAll('rect')
         .data(dataset)
         .enter()
       .append('rect')
         .attr('width', 15)
         .attr('height', function(datum) { return datum * 30; })
        //  .attr('height', scale)
         .attr('x', function(datum, index) { return index * 20; })
         .attr('y', 0)
        //  .attr('y', function(datum) { return HEIGHT - scale(datum); })
         .attr('fill', 'brown');

function numberColor(digit) {
    if (digit <= 3) {
        return 'red';
    }
    else if (digit <= 6) {
        return 'yellow';
    }
    else {
        return 'green';
    }
}

var bicolor = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range(['red', 'blue']);

var tricolor = d3.scaleLinear()
                 .domain([0, d3.max(dataset)/2, d3.max(dataset)])
                 .range(['red', 'yellow', 'green']);

console.log(bicolor(0));
console.log(bicolor(5));
console.log(bicolor(10));

container.selectAll('rect')
         .data(dataset)
         .enter()
       .append('rect')
         .attr('width', 15)
         .attr('height', scale)
         .attr('x', function(datum, index) { return index * 20; })
         .attr('y', function(datum) { return HEIGHT - scale(datum); })
         .attr('fill', bicolor);
