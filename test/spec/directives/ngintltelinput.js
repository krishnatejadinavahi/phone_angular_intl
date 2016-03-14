'use strict';

describe('Directive: ngIntlTelInput', function () {

  // load the directive's module
  beforeEach(module('phoneAngularIntlApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-intl-tel-input></ng-intl-tel-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngIntlTelInput directive');
  }));
});
