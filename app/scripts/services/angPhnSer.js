'use strict';

/**
 * @ngdoc service
 * @name phoneAngularIntlApp.ngIntlTelInput
 * @description
 * # ngIntlTelInput
 * Provider in the phoneAngularIntlApp.
 */
angular.module('phoneAngularIntlApp')
  .service('angPhnSer', function () {

    // Private variables
   /* var me = this;
    var props = {};
    var setFn = function (obj) {
      if (typeof obj === 'object') {
        for (var key in obj) {

          props[key] = obj[key];
        }
      }
    };
    me.set = setFn;

    console.log(me);


    me.$get = ['$log', function ($log) {
      return Object.create(me, {
        init: {
          value: function (elm) {
           /* if (!window.intlTelInputUtils) {
              $log.warn('intlTelInputUtils is not defined. Formatting and validation will not work.');
            }*/
            /*console.log(props)
            elm.intlTelInput(props);

          }
        },
      });
    }];*/

    var input_prop={};
    this.set=function (obj) {
      if (typeof obj === 'object') {
        for (var key in obj) {
          input_prop[key] = obj[key];
        }
      }
    };
    this.send_req=function(elm){
        elm.intlTelInput(input_prop);
    }



  });
