angular.module('mainApp').controller('productController',showProducts);

//LA VARIABLE ESCOPE ES LO QUE MANEJA TODOS LOS ATRIBUTOS DEL CONTROLLADOR,recordar que angularjs son directivas,modulos y controladores....
//esto es lo que vah a llamar las rutas del js, es decir es lo que unje angularjs con el apires(nodjs,express)...

showProducts = function($scope,$http){
    $scope.newproducto = [];

  // Obtenemos todos los datos de la base de datos
   // Cuando se cargue la página, pide del API
	$http.get('http://localhost::3000/api/productos').success(function(data) {
  		$scope.productos = data;
  	})
  	.error(function(data) {
  		console.log('Error: ' + data);
  	});


  	$scope.ordenarPor=function(orden){
  		$scope.ordenSeleccionado=orden;
  	};


// Función para coger el objeto seleccionado en la tabla
	$scope.selectProducto = function(producto) {
$scope.newproducto.push(producto);
       if(!this.verificar(producto)){
        producto.cantidad = 1;
       $scope.newproducto.push(producto);
   }
  };

	$scope.agregarCantidad =function(producto){
		var i;
       for(i=0,len = newproducto.length; i <= len;i++){
            if(newproducto[i].codigo===producto.codigo){
              newproducto[i].cantidad=$scope.nuevacantidad;
              $scope.nuevacantidad="";
              newproducto[i].precio=parseInt($scope.nuevacantidad*newproducto[i].precio);
            }
        }

	};


  $scope.verificar=function(producto){
      var i;
      var len= newproducto.length;
       for(i=0; i <= len;i++){
            if(newproducto[i].codigo===producto.codigo){
              return true ;
            }
        }
        return false;
  };

}