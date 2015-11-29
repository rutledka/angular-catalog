"use strict";

angular.module('storeApp')
.service('dataService', function($http) {
  this.getProducts = function(callback) {
    $http.get('../mock/products.json')
    .then(callback);
  }
});
