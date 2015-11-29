/* add main sitewide js here */
var app = angular.module('storeApp', [])
.controller ('mainCtrl', function($scope, dataService) {
  //get the products
  dataService.getProducts(function(response) {
    console.log(response.data);
    $scope.products = response.data;
  });

});

"use strict";

angular.module('storeApp')
.service('dataService', function($http) {
  this.getProducts = function(callback) {
    $http.get('../mock/products.json')
    .then(callback);
  }
});
