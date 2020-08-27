// Llamar librería fs
const fs = require("fs");

// Generar nuevo archivo

const archivo = 'texto.txt';
const contenido = 'Holaaaaa Node JS :D !!!';

fs.writeFile(archivo, contenido, (err) => {
    if(err) throw ('No fue posible crear el archivo');
    console.log('Se ha creado el archivo con éxito');
})