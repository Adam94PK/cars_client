/**
 * Created by adam on 07.02.2017.
 */
angular.module('testRide', ['service.car']);

angular.module('testRide')
  .component('testRide', {
    templateUrl: 'viewS/test-ride/templates/add.html',
    controller: ['$scope', '$http', 'CarService', function ($scope, $http, CarService) {
      $scope.testRide;
      $scope.user;
      $scope.saveTestRide = function(user, testRide){
        $http.post(CarService.addres + '/test-ride/add', [user, testRide])
          .then(function (response) {
            $scope.testRide = response.data;
          });
      }
    }]
  });