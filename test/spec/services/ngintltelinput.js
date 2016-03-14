'use strict';

describe('Service: ngIntlTelInput', function () {

  // instantiate service
  var ngIntlTelInput,
    init = function () {
      inject(function (_ngIntlTelInput_) {
        ngIntlTelInput = _ngIntlTelInput_;
      });
    };

  // load the service's module
  beforeEach(module('phoneAngularIntlApp'));

  it('should do something', function () {
    init();

    expect(!!ngIntlTelInput).toBe(true);
  });

  it('should be configurable', function () {
    module(function (ngIntlTelInputProvider) {
      ngIntlTelInputProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(ngIntlTelInput.greet()).toEqual('Lorem ipsum');
  });

});
