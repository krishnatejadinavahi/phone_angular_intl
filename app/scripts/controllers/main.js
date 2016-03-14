'use strict';

/**
 * @ngdoc function
 * @name phoneAngularIntlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phoneAngularIntlApp
 */
angular.module('phoneAngularIntlApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.intl_display=function(){
    	return "working";
    }
  });
