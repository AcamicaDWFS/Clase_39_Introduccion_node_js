let fs = require('fs');

fs.readFile('archivo.txt', 'utf-8', (error, data) => {
    if(error) {
      console.error('error: ', 'No fue encontrado el archivo archivo.txt');

      fs.writeFile('./archivo.txt', 'Archivo creado con File System', error => {
        if (error)
          console.log('No se pudo crear el archivo archivo.txt');
        else
          console.log('El archivo archivo.txt fue creado');
      });

    } else {
      console.log('Texto en archivo.txt: ', data);
    }
  });