//Hola Mundo 
console.log("Hola Mundo");

//Creamos un array de frutas
var Lang = ['Pera', 'Banana', 'Limones'];

//muestro las frutas
console.log(Lang);

//verificamos cuantos items tiene el array 
var cant = Lang.length
console.log(cant);

Lang.forEach(fruta => console.log(fruta));

//Buscamos la fruta que esta antes de Banana
var found = Lang.find(element => element === 'Banana');
console.log("Fruta encontrada: ", found);

//agregamos un nueva fruta 
Lang.push('Naranja');
console.log(Lang);

Lang.push('uva');
console.log(Lang);

const os = require('os');
console.log(os.cpus());

const fs = require("fs");
console.log(fs.readdirSync('./'));

const lib = require('./biblioteca');

console.log(lib.a);
console.log(lib.b);

console.log(lib.suma(1, 2));