'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.search',
  'myApp.issue',
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

    .when('/issue/:number', {
      templateUrl: 'issue/issue.html',
      reloadOnSearch: false,
      controller: 'IssueCtrl'
    })

    .otherwise({redirectTo: '/search'});
}]);
