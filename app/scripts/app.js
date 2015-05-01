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
      .otherwise({
        redirectTo: '/'
      });
  });
