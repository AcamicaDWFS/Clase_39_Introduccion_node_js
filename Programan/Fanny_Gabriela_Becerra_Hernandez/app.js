//let opp = prompt('Selecciona qué operación quieres realizar: \n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division');
const mainFunction = (logger) => {
    let opperation = 0,
        counter = 1,
        arrNum = [],
        res = '',
        separator = '\n----------\n';
    const readline = require("readline"),
        fs = require('./fileSystem'),
        calc = require('./calculator'),
        opp = {
            1: ['Suma', '+'],
            2: ['Resta', '-'],
            3: ['Multiplicación', '*'],
            4: ['División', '/']
        },
        interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        }),

        start = () => {
            interface.question(`${separator}Selecciona la operación que quieres realizar:\n1. ${opp[1][0]}\n2. ${opp[2][0]}\n3. ${opp[3][0]}\n4. ${opp[4][0]}\n\nSelección: `, function(oppType) {
                let val = parseInt(oppType);
                if (val > 4) {
                    console.log('\n!!!Sólo puedes ingresar una de las cuatro opciones. Intenta nuevamente.');
                    start();
                } else {
                    number(val);
                }
            })
        },

        number = (oppType) => interface.question(`${separator}${counter}. Para realizar la ${opp[oppType][0]} ingresa un número o presiona cualquier otra tecla para finalizar.\n\nSelección: `, function(num) {
            let val = parseInt(num);
            if (num == '' && arrNum.length == 0) {
                console.log('\n!!!Debes ingresar al menos un número.');
                number(oppType);
            } else if (isNaN(val) && val != null) {
                let answ = '';
                if (arrNum.length < 2) {
                    answ = arrNum[0];
                } else {
                    let resp = calc.opp(oppType, arrNum, opp);
                    answ = resp;
                }
                console.log(`SALIR\n${separator}Resultado: ${answ}${separator}`);
                res = arrNum.join(` ${opp[oppType][1]} `) + ' = ' + answ;
                logger.write(`${res}\n`);
                restart();
            } else if (!isNaN(val)) {
                if (arrNum.length > 0 && val == 0 && oppType == 4) {
                    console.log('\n!!!No es posible dividir sobre 0. Intenta nuevamente.');
                    number(oppType);
                } else {
                    counter++;
                    arrNum.push(val);
                    number(oppType);
                }
            }
        }),

        restart = () => {
            interface.question(`${separator}Ingresa un número para volver a calcular o presiona cualquier otra tecla para finalizar.\n\nSelección: `, function(selection) {
                let val = parseInt(selection);
                if (isNaN(val) && val != null) {
                    interface.close();
                } else if (!isNaN(val)) {
                    mainFunction(logger);
                }
            })
        }

    interface.on('close', function() {
        process.exit(0);
    });

    start();
}

module.exports = { mainFunction };