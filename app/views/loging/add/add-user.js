/**
 * Created by adam on 12.02.2017.
 */
angular.module('loging')
  .component('addUser', {
    templateUrl: 'views/loging/add/add-user.html',
    controller: ['$scope', '$http', 'AuthService', function AddUser($scope, $http, AuthService) {
      $scope.user;
      $scope.createUser = function () {
        AuthService.createUser($scope.user);
      }
      $scope.allUsers = [];
      $scope.getAllUsers = function () {
        $http.post(AuthService.address + '/user/all').then(function (response) {
          $scope.allUsers = response.data;
        });
      }
    }]
  })