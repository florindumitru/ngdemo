'use strict';

/**
 * @ngdoc function
 * @name ngdemoApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the ngdemoApp
 */
angular.module('ngdemoApp')
  .controller('ProductCtrl', function ($scope, $routeParams, myApi, comments) {
    
    var pid = $routeParams.id;
    var product = myApi.get({ id: pid }, function() {
      $scope.p = product;
    }); 
    
    $scope.formActive = false;
    
    $scope.showForm = function(){
        $scope.formActive = !$scope.formActive;
    };
    
    $scope.formData = {};
    $scope.cc = comments.query({'filter[where][prodId]': pid });
    
    $scope.addComment = function(){
      this.formData.id = 0; 
      this.formData.prodId = pid;
      $scope.newdata = comments.save(this.formData,function(){
        $scope.cc = $scope.cc.concat($scope.newdata);
        $scope.formData = {};
      });
    };
    
  });
