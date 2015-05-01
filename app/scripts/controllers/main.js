'use strict';

/**
 * @ngdoc function
 * @name ngdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngdemoApp
 */
angular.module('ngdemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
