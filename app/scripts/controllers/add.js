'use strict';

/**
 * @ngdoc function
 * @name ngdemoApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the ngdemoApp
 */
angular.module('ngdemoApp')
  .controller('AddCtrl', function ($scope, myApi, $location) {
    
    $scope.formData = {};
    $scope.addProduct = function(){
    this.formData.id = 0; 
    
    myApi.save(this.formData,function(){
      $location.path('/');
    });
      
  };
  });
