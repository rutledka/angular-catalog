"use strict";

angular.module('storeApp')
.controller ('mainCtrl', function($scope, dataService) {
  //initialize our cart and overlay variables
  $scope.overlay = {
    "isActive": false,
  }

  $scope.cart = [];

  //get the products
  dataService.getProducts(function(response) {
    $scope.products = response.data;
  });

  //view product details - accepts product object as argument - replaces overlay.product object with new product
  $scope.viewDetails = function(product) {
    $scope.overlay.isActive = !$scope.overlay.isActive;
    $scope.overlay.product = product;
  };

  //add to cart - accepts product object as argument - pushes that object into our cart array
  $scope.addToCart = function(product) {
    $scope.cart.push(product);
  };

  $scope.removeFromCart = function(item) {
    console.log(item);
    $scope.cart = $scope.cart.filter(function(el, index, array) {
      console.log(el);
      if(item.name == el.name){
        console.log('same name');
        return false;
      }
      return true;
    });
  };
});
