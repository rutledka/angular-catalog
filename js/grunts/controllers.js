"use strict";

angular.module('storeApp')
.controller ('mainCtrl', function($scope, dataService) {
  //get the products
  dataService.getProducts(function(response) {
    console.log(response.data);
    $scope.products = response.data;
  });

  $scope.addToCart = function(product) {
    console.log(product);
  }
});
