const fileSystem = require('fs');
const Calculator = require('./calculadora');
const myCalc = new Calculator();

myCalc.sum(3, 3);
myCalc.subtract(9, 4);
myCalc.multiply(5, 5);
myCalc.divide(12, 4);
