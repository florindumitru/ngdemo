'use strict';

/**
 * @ngdoc service
 * @name ngdemoApp.myapi
 * @description
 * # myapi
 * Factory in the ngdemoApp.
 */
angular.module('ngdemoApp')
  .factory('myApi', function ($resource, url) {

  return $resource(url+'Products/:id');
  
  });