const fileSystem = require('fs');

class Calculator {
  sum(a, b) {
    const result = `${a} + ${b} = ${a + b}`;
    console.log(result);
    this.saveToFile(result);
  }

  subtract(a, b) {
    const result = `${a} - ${b} = ${a - b}`;
    console.log(result);
    this.saveToFile(result);
  }

  multiply(a, b) {
    const result = `${a} x ${b} = ${a * b}`;
    console.log(result);
    this.saveToFile(result);
  }

  divide(a, b) {
    if (b === 0) {
      return;
    }

    const result = `${a} / ${b} = ${a / b}`;
    console.log(result);
    this.saveToFile(result);
  }

  saveToFile(result) {
    result = result + '\n';

    fileSystem.appendFile('log.txt', result, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }
}

module.exports = Calculator;
