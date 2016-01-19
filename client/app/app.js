angular.module('supplyhub', [
  'SearchController'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: '/search/search.html',
      controller: 'SearchController'
    })   
});