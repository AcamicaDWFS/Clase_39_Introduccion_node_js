const calculator = require('./calculator');
const fs = require('fs')


let a = 20;
let b = 50;

const [result, operator] = calculator.divide(a, b);
let cadena =  `${a} ${operator} ${b} = ${result}`;

fs.writeFile('log.txt', cadena, function (err) {
    if (err) throw err;
    console.log('Archivo creado');
});