/**
 * Created by adam on 12.02.2017.
 */
angular.module('loging')
  .component('login', {
    templateUrl: 'views/loging/login/login.html',
    controller: ['$scope', '$http', 'AuthService', function ($scope, $http, AuthService) {
      $scope.user;
      $scope.login = AuthService.login;
    }]
  });