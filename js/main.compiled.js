/* add main sitewide js here */
var app = angular.module('storeApp', []);

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
    console.log(response.data);
    $scope.products = response.data;
  });

  //view product details - accepts product object as argument - replaces overlay.product object with new product
  $scope.viewDetails = function(product) {
    console.log(product);
    $scope.overlay.isActive = !$scope.overlay.isActive;
    $scope.overlay.product = product;
    console.log($scope.overlay);
  };

  //add to cart - accepts product object as argument - pushes that object into our cart array
  $scope.addToCart = function(product) {
    $scope.cart.push(product);
  };
});

"use strict";

angular.module('storeApp')
.service('dataService', function($http) {
  this.getProducts = function(callback) {
    $http.get('../mock/products.json')
    .then(callback);
  }
});
