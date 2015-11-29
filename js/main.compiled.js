/* add main sitewide js here */
var app = angular.module('storeApp', []);

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

"use strict";

angular.module('storeApp')
.service('dataService', function($http) {
  this.getProducts = function(callback) {
    $http.get('../mock/products.json')
    .then(callback);
  }
});
