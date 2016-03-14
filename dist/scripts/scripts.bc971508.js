"use strict";angular.module("phoneAngularIntlApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("phoneAngularIntlApp").controller("MainCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],this.intl_display=function(){return"working"}}]),angular.module("phoneAngularIntlApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("phoneAngularIntlApp").directive("ngIntlTelInput",["ngIntlTelInput","$log",function(a,b){return{restrict:"ACEM",require:"ngModel",link:function(c,d,e,f){return e.type&&"text"!==e.type&&"tel"!==e.type||"INPUT"!==d[0].tagName?void b.warn("ng-intl-tel-input can only be applied to a *text* or *tel* input"):(e.defaultCountry&&a.set({defaultCountry:e.defaultCountry}),a.init(d),f.$validators.ngIntlTelInput=function(a){return a||d[0].value.length>0?d.intlTelInput("isValidNumber"):!0},f.$parsers.push(function(a){return console.log(a),d.intlTelInput("getNumber").replace(/[^\d]/,"")}),void f.$formatters.push(function(a){return a&&("+"!==a.charAt(0)&&(a="+"+a),d.intlTelInput("setNumber",a)),a}))}}}]),angular.module("phoneAngularIntlApp").provider("ngIntlTelInput",function(){var a=this,b={},c=function(a){if("object"==typeof a)for(var c in a)b[c]=a[c]};a.set=c,a.$get=["$log",function(c){return Object.create(a,{init:{value:function(a){window.intlTelInputUtils||c.warn("intlTelInputUtils is not defined. Formatting and validation will not work."),a.intlTelInput(b)}}})}]}),angular.module("phoneAngularIntlApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'Enter the number below <input type="text" ng-model="tel" ng-intl-tel-input>{{tel}}')}]);