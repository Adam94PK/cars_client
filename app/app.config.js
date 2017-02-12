'use strict';

angular.
  module('carShowroom').
  config(['$locationProvider' ,'$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $httpProvider.defaults.useXDomain = true;

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
        when('/car/add', {
          template: '<z-add-cars></z-add-cars>'
        }).
        when('/test-ride/add', {
          template: '<test-ride-add></test-ride-add>'
        }).
        when('/test-ride/all', {
          template: '<test-ride-all></test-ride-all>'
      }).
        otherwise('/home');
    }
  ]);
