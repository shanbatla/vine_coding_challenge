'use strict';

angular.module('myApp.search', ['ngRoute', 'angularUtils.directives.dirPagination'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', '$location', '$route', 'NgTableParams', function($scope, $http, $location, $route, NgTableParams) {

  $scope.results = '';

  $scope.searchForItem = function() {

    $http({
      method: 'GET',
      url: 'https://api.github.com/repos/npm/npm/issues?page=1&per_page=100' //Note - max number of results API can serve is 100
    }).then(function (response) {
      $scope.results = response.data;

      $location.update_path('/?search=' + $scope.searchInput, true); 

    }, function (response) {
      console.log('Error: ' + response);
    });
  
  };

}]);