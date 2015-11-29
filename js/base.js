/* add main sitewide js here */
var app = angular.module('storeApp', [])
.controller ('mainCtrl', function($scope, dataService) {
  //get the products
  dataService.getProducts(function(response) {
    console.log(response.data);
    $scope.products = response.data;
  });

});
