'use strict';

angular.module('myApp.search', ['ngRoute', 'angularUtils.directives.dirPagination'])

.controller('SearchCtrl', ['$scope', '$http', '$route', 'NgTableParams', function($scope, $http, $route, NgTableParams) {

  $scope.results = '';

  // Fetch issues
  $scope.searchForItem = function() {
    $http({
      method: 'GET',
      url: 'https://api.github.com/repos/npm/npm/issues?page=1&per_page=100' // Note - max number of results API can serve is 100
    }).then(function (response) {
      $scope.results = response.data;
    }, function (response) {
      console.log('Error: ' + response);
    });
  
  };

}]);