const calc = require('./calculadora');
const Calculator = require('./calculadora');
const myCalc = new Calculator();

console.log(`Suma: ${myCalc.sum(3, 3)}`);
console.log(`Resta: ${myCalc.subtract(9, 4)}`);
console.log(`Multiplicación: ${myCalc.multiply(5, 5)}`);
console.log(`División: ${myCalc.divide(12, 4)}`);
