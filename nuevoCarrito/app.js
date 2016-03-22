var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var ProductoApi = require('./api/Productos');
var app = express();



app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

//API routes
var Productos = express.Router();

Productos.route('/productos').get(ProductoApi.mostrarProductos).post(ProductoApi.agregarProducto);
Productos.route('/productos/:Nombre').get(ProductoApi.mostrarUnProducto);

router.get('/', function(req, res) {  
   res.send("Welcome to Express");
});

app.use(router);
app.use('/api',Productos);

mongoose.connect('mongodb://localhost/dbCarrito', function(err,res){
	if (err){
		console.log('ERROR: No se pudo conectar a la base de datos' + err);
	}
	else{
		console.log('Conexión establecida con MongoDB');
    }

	app.listen(3000, function() {  
        console.log("Servidor escuchando en el puerto 3000");
    });

});