const {Schema, model} = require('mongoose');

const esquema = new Schema({
usuario: String,
clave: String,
})

const Usuario = model('Usuario', esquema);
module.exports = Usuario;