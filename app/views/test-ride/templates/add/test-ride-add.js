/**
 * Created by adam on 07.02.2017.
 */
angular.module('testRide')
  .component('testRideAdd', {
    templateUrl: 'viewS/test-ride/templates/add/add.html',
    controller: ['$scope', '$http', 'CarService', function ($scope, $http, CarService) {
      $scope.testRide;
      $scope.user;
      CarService.getCars().then(function (response){
        $scope.cars = response.data;
      });
      $scope.saveTestRide = function(user, testRide, selectedCar){
        testRide.user = user;
        testRide.car = selectedCar;
        $http.post(CarService.addres + '/test-ride/add', testRide)
          .then(function (response) {
            $scope.testRide = response.data;
          });
      }
    }]
  });