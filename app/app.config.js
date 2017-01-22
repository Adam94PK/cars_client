'use strict';

angular.
  module('carShowroom').
  config(['$locationProvider' ,'$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/template', {
          templateUrl: 'templates/index.html'
        }).
        when('/home', {
          templateUrl: 'home/z-home.template.html'
        }).
        when('/cars', {
          template: '<z-cars></z-cars>'
        }).
        otherwise('/home');
    }
  ]);
