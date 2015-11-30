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
