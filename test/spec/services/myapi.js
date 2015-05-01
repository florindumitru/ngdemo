'use strict';

describe('Service: myApi', function () {

  // load the service's module
  beforeEach(module('ngdemoApp'));

  // instantiate service
  var myapi;
  beforeEach(inject(function (_myApi_) {
    myApi = _myApi_;
  }));

});
