/**
 * Created by adam on 22.01.2017.
 */
angular.module('zAddCars', ['service.car']);

angular.module('zAddCars')
  .component('zAddCars', {
    templateUrl: 'views/cars/add/z-add-cars.html',
    controller: ['$scope', 'CarService', function ZAddCarsController($scope, CarService) {
      $scope.car = CarService.createCarObject();

      $scope.uploadFiles = function(files, car){
        CarService.uploadPhotos(files, car).then(function (response) {
          $scope.result = response.data;
        }, function (response) {
          console.log("response" + response);
        }, function (evt) {
          $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
      }

      $scope.saveCar = function (car) {
        CarService.saveCar(car).then(function (response) {
          $scope.car = response.data;
        });
      }
    }]
  });