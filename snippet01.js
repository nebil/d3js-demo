console.log("Hello, world!");
console.log(d3.version);

function addOne(datum) {
    console.log(datum + 1);
}

addOne(2);
addOne(41);

var pokedex = ["Bulbasaur", "Ivysaur", "Venasaur", "Charmander", "Charmeleon",
               "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie"];
console.log(pokedex);

pokedex.forEach(function(name) {
    console.log(name);
});

pokedex.forEach(function(name, index) {
    console.log(index, "-", name);
});

var goldenData = [1, 6, 1, 8, 0, 3, 3, 9, 8, 8];
goldenData.forEach(addOne);
