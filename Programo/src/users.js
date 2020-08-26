const faker = require('faker');
const User = require('./user_module');
//onst { random } = require('faker');
let person = new User("Juan", "Perez", "asdads@ffd.com", "456783434"); 

//Inprimo objeto completo
console.log(person);

//Imprimo propiedad
console.log(person._nombre);

//Ejecuto metodo
console.log(person.fullName());


const randomName = faker.name.findName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
const randomPhone = faker.phone.phoneNumber();

console.log("randomName: ", randomName);
console.log("randomLastName: ", randomLastName);
console.log("randomEmail: ", randomEmail);
console.log("randomPhone: ", randomPhone);

let fakerUser = new User(randomName, randomLastName, randomEmail, randomPhone);

console.log(fakerUser);