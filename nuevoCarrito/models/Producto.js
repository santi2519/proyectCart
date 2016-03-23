var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = {
	Nombre: String,
	Precio: Number,
	Imagen: String
}

var modeloProductos = mongoose.model('productos',Schema);

exports = modeloProductos;