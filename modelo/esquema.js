const { Schema, model } = require('mongoose');

const esquema = new Schema({
    nombre: String,
    apellido: String,
    clave: String,
    usuario: String,
    clave: String,
})

const Usuario = model('Usuario', esquema);
module.exports = Usuario;