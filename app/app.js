'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.search',
  'ngTable',
  'ngLocationUpdate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/search', {
      templateUrl: 'search/search.html',
      reloadOnSearch: false,
      controller: 'SearchCtrl'
    })

    .otherwise({redirectTo: '/search'});
}]);
