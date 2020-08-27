const fileSystem = require('fs');

fileSystem.appendFile('test.txt', 'Hello World from NodeJS', (err) => {
  if (err) throw err;
  console.log('File successfully created!');
});
