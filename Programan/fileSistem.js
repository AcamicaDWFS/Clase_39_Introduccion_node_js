const fs = require('fs');

fs.writeFile('texto.txt', 'Placeholder', function (err) {
    if (err) throw err;
    console.log('Listo!');
});