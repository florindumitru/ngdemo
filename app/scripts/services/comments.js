'use strict';

/**
 * @ngdoc service
 * @name ngdemoApp.comments
 * @description
 * # comments
 * Factory in the ngdemoApp.
 */
angular.module('ngdemoApp')
  .factory('comments', function ($resource, url) {

  return $resource(url+'Comments/:id');

  });
