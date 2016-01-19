angular.module('supplyhub', [
  'ngRoute',
  'SearchController'
])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: '/search/search.html',
        controller: 'SearchCtrl'
      })

    $locationProvider.html5Mode(true);
}]);