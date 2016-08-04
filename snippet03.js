var dataset = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

var WIDTH  = 800;
var HEIGHT = 500;

var container = d3.select('body')
                  .append('svg')
                  .attr('width', WIDTH)
                  .attr('height', HEIGHT);

container.selectAll('rect')
         .data(dataset)
         .enter()
       .append('rect')
         .attr('width', 20)
         .attr('height', 20)
        //  .attr('height', function(datum) { return datum * 30; })
         .attr('x', 10)
        //  .attr('x', function(datum, index) { return index * 50; })
         .attr('y', 10)
         .attr('fill', 'maroon');

dataset.push(8);
dataset.push(9);
dataset.push(7);
console.log(dataset);

container.selectAll('rect')
         .data(dataset)
         .enter()
       .append('rect')
         .attr('width', 20)
         .attr('height', function(datum) { return datum * 30; })
         .attr('x', function(datum, index) { return index * 50; })
         .attr('y', 10)
         .attr('fill', 'olive');

dataset.pop();
dataset.pop();
console.log(dataset);

container.selectAll('rect')
         .data(dataset)
         .exit()
         .remove();

container.selectAll('rect')
         .data(dataset)
         .attr('width', 20)
         .attr('height', function(datum) { return datum * 30; })
         .attr('x', function(datum, index) { return index * 50; })
         .attr('y', 10)
         .attr('fill', 'navy');
