var mongoose = require('mongoose');
var Producto = require('../models/Producto');

exports.mostrarProductos = function(req,res){
	Producto.find(function(err,productos){
          if(err){
          	return res.send(500,err.message);
          }
          console.log('GET /productos');
          res.status(200).jsonp(productos);
	});
}

exports.mostrarUnProducto = function(req,res){
      Producto.findOne(req.params.name,function(err,producto){
        if(err){
        	return res.send(500,err.message);
        }
        console.log('GET /producto' + req.params.name);
        res.status(200).jsonp(producto);
      });
}

exports.agregarProducto = function(req,res){
	 console.log('POST');
	 console.log(req.body);

     nuevoProducto = new Producto({
          Nombre: req.body.Nombre,
          Precio: req.body.Precio,
          Imagen: req.body.Imagen
     });

     nuevoProducto.save(function(err,producto){
        if(err){
        	return res.send(500,err.message);
        }
        res.status(200).jsonp(producto);
     });
}