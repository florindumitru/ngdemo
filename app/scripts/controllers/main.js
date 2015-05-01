'use strict';

/**
 * @ngdoc function
 * @name ngdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngdemoApp
 */
angular.module('ngdemoApp')
  .controller('MainCtrl', function ($scope, myApi) {
      var products = myApi.query(function() {
        $scope.products = products;
      });
  });
