var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mongoProductoCtrl = require('./controllers/mongoProductoCtrl');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(express.static('public'));
var router = express.Router();

//API routes
var Productos = express.Router();

Productos.route('/productos').get(mongoProductoCtrl.mostrarProductos).post(mongoProductoCtrl.agregarProducto);
Productos.route('/productos/:Nombre').get(mongoProductoCtrl.mostrarUnProducto);

app.set('views', path.join(__dirname, 'views'));
app.engine("html",require("ejs").renderFile);
app.set('view engine', 'html');

router.get('/', function(req, res) {  
   res.render("index");
});

app.use('/',router);
app.use('/api',Productos);

mongoose.connect('mongodb://admin:1111@ds021999.mlab.com:21999/db_carrito', function(err,res){
	if (err){
		console.log('ERROR: No se pudo conectar a la base de datos' + err);
	}
	else{
		console.log('EXITO: Conexión establecida con la base de datos');
    }

	app.listen(3000, function() {  
        console.log("Servidor escuchando en el puerto 3000");
    });

});