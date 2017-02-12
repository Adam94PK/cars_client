/**
 * Created by adam on 12.02.2017.
 */
angular.module('service.auth', []);

angular.module('service.auth')
  .factory('AuthService', ['$http', function ($http) {
    var currentUser;
    var addres = 'http://localhost:8080';

    var login = function (user) {
      $http.post(addres + '/user/login', user).then(function (response) {
        currentUser = response.data;
      })
    }

    var createUser = function (user) {
      $http.post(addres+'/user/new', user).then(function (response) {
        currentUser = response.data;
      })
    }

    return{
      createUser: function(user) { return createUser(user) },
      login: function (user) { return login(user) },
      logout: function () { currentUser = null },
      address: addres,
      isLoggedIn: function() {
        if(currentUser){
          return true;
        } else {
          return false;
        }
      },
      currentUser: currentUser
    };
  }
  ]);