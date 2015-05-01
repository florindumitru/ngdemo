'use strict';

/**
 * @ngdoc overview
 * @name ngdemoApp
 * @description
 * # ngdemoApp
 *
 * Main module of the application.
 */
angular
  .module('ngdemoApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
