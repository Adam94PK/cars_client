/**
 * Created by adam on 22.01.2017.
 */
angular.module('zCars').
  component('zCars', {
    templateUrl: 'views/cars/z-cars.tempalte.html',
    controller: ['$scope', 'CarService', function ZCarsController($scope, CarService){
      CarService.getCars().then( function (response) {
        $scope.cars = response.data;
      });
    }]
});