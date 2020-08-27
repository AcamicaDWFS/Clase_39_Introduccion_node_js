class User {

    constructor(nombre, apellido, email, telefono) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._telefono = telefono;
    }
    
    fullName(){
        return this._nombre + ' ' + this._apellido;
    }
}
//Exporto la  clase User
module.exports = User; 