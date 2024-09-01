const {Schema, model} = require('mongoose');

const esquema = new Schema({
nombre: String,
ciudad:String,
pais:String,
mensaje: String,

})

const Comentario = model('Comentario', esquema);
module.exports = Comentario;