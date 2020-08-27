const os = require('os'),
    fs = require("fs"),
    app = require('./app');

fs.writeFile('example.txt', 'Archivo nuevo.', err => { if (err) throw err });
//fs.writeFileSync('log.txt', app.mainFunction());

let logger = fs.createWriteStream('log.txt', {
    flags: 'a'
})

app.mainFunction(logger);