/**
 * Created by adam on 12.02.2017.
 */
angular.module('testRide')
  .component('testRideAll', {
    templateUrl: 'views/test-ride/templates/show-all/show.html',
    controller: ['$scope', '$http', 'CarService', function TestRideAll($scope, $http, CarService) {
      $scope.test = "BUBHAHAHAHAH";
      $http.post(CarService.addres + '/test-ride/get-all', {'admin': true}).then(function (response) {
        $scope.testRides = response.data;
      })
    }]
  });