/**
 * Created by adam on 22.01.2017.
 */
angular.module('service.car', []);

angular.module('service.car')
  .factory('CarService', ['$http', function ($http) {
    var getCars = function () {
      return $http.get('http://localhost:8080/get-cars');
    };

    return {
      getCars: function(){ return getCars(); }
    };
  }]);