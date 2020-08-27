//Llamar librería fs
const fs = require("fs");
console.log(fs.readdirSync('./'));

//Importar librería llamada calculadora
const calculadora = require('./calculadora');

const num1 = Math.floor(Math.random()*(9+1));
const num2 = Math.floor(Math.random()*(9+1));

//Generar archivo de texto

const archivo = 'log.txt';

let suma = calculadora.sumar(num1,num2);
console.log(suma);

let resta = calculadora.restar(num1,num2);
console.log(resta);

let multiplicacion = calculadora.multiplicar(num1,num2);
console.log(multiplicacion);

let division = calculadora.dividir(num1,num2);
console.log(division);

let operaciones = {suma, resta, multiplicacion, division};

fs.writeFile(archivo, operaciones, (err) =>{
    if(err) throw('No se pudo adjuntar el texto');
        console.log ('se ha adjuntado con éxtito');
    }
)
