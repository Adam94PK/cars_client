/**
 * Created by adam on 22.01.2017.
 */
angular.module('service.car', ['ngFileUpload']);

angular.module('service.car')
  .factory('CarService', ['$http', 'Upload', function ($http, Upload) {
    var addres = 'http://localhost:8080';

    var getCars = function () {
      return $http.get(addres+'/get-cars');
    };

    function Car() {
      this.id;
      this.vin;
      this.make;
      this.model;
      this.year;
      this.price;
      this.visible;
      this.photos = [];
      this.testRides = [];
    }

    var saveCar = function (car) {
      return $http.post(addres+'/car/add',  car );
    }

    var uploadCarPhotos = function (files, car) {
      if(files && files.length){
        return Upload.upload({
          url: addres + '/car/pictures/add',
          data: {
            files: files,
            car: car.id
          },
          arrayKey: ''
        });
      }
    }

    return {
      getCars: function(){ return getCars(); },
      createCarObject: function () { return new Car(); },
      saveCar: function (car) { return saveCar(car); },
      uploadPhotos: function(files, car) { return uploadCarPhotos(files, car) },
      addres: addres
    };
  }]);