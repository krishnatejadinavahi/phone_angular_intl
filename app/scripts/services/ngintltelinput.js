'use strict';

/**
 * @ngdoc service
 * @name phoneAngularIntlApp.ngIntlTelInput
 * @description
 * # ngIntlTelInput
 * Provider in the phoneAngularIntlApp.
 */
angular.module('phoneAngularIntlApp')
  .provider('ngIntlTelInput', function () {

    // Private variables
    var me = this;
    var props = {};
    var setFn = function (obj) {
      if (typeof obj === 'object') {
        for (var key in obj) {
          props[key] = obj[key];
        }
      }
    };
    me.set = setFn;

    me.$get = ['$log', function ($log) {
      return Object.create(me, {
        init: {
          value: function (elm) {
            if (!window.intlTelInputUtils) {
              $log.warn('intlTelInputUtils is not defined. Formatting and validation will not work.');
            }
            elm.intlTelInput(props);
          }
        },
      });
    }];
  });
