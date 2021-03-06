/* add main sitewide js here */
var app = angular.module('storeApp', []);

"use strict";

angular.module('storeApp')
.controller('mainCtrl', function($scope, dataService, cartService) {
  //initialize our cart and overlay variables
  $scope.overlay = {
    "isActive": false,
  }

  $scope.cart = cartService.cart;

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
  // $scope.addToCart = function(product) {
  //   $scope.cart.push(product);
  // };

  $scope.addToCart = cartService.addToCart;
})

.controller('cartCtrl', function($scope, dataService, cartService) {
  $scope.cart = cartService.cart;

  //remove method here separates cart objects in mainCtrl and cartCtrl
  // $scope.removeFromCart = function(product) {
  //   $scope.cart = $scope.cart.filter(function(el, index, array) {
  //     if(product.name == el.name){
  //       console.log('removing product from cart');
  //       return false;
  //     }
  //     return true;
  //   });
  // };

});

"use strict";

angular.module('storeApp')
.service('dataService', function($http) {
  this.getProducts = function(callback) {
    $http.get('../mock/products.json')
    .then(callback);
  }
})
.service('cartService', function() {
  self = this;
  self.cart = [];

  this.addToCart = function(product) {
    self.cart.push(product);
  }

  this.removeFromCart = function(product) {
    self.cart = self.cart.filter(function(el, index, array) {
      if(product.name == el.name){
        console.log('removing product from cart');
        return false;
      }
      return true;
    });
    console.log(self.cart);
    return self.cart;
  };
});
