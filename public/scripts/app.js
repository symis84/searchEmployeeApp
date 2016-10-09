'use strict';


var app = angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
]);


app.factory('Ajax', ['$http', function($http) {

  var _searchEmployeeResults = function() {
    var url = "/getEmployee";
    return $http.get(url);
  }; 

  return {    
    searchEmployeeResults: function() { return _searchEmployeeResults() }
  };

}]);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/search.html',
      controller: 'searchCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});


