"use strict";

angular.module('storeApp')
.controller ('mainCtrl', function($scope, dataService) {
  //get the products
  $scope.overlay = {
    "isActive": false,
  }
  dataService.getProducts(function(response) {
    console.log(response.data);
    $scope.products = response.data;
  });

  $scope.addToCart = function(product) {
    console.log(product);
    $scope.overlay.isActive = !$scope.overlay.isActive;
    $scope.overlay.product = product;
    console.log($scope.overlay);
  }
});
