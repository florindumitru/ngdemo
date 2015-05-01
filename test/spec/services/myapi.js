'use strict';

describe('Service: myapi', function () {

  // load the service's module
  beforeEach(module('ngdemoApp'));

  // instantiate service
  var myapi;
  beforeEach(inject(function (_myapi_) {
    myapi = _myapi_;
  }));

  it('should do something', function () {
    expect(!!myapi).toBe(true);
  });

});
