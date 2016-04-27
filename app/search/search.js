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

  // Truncate the body of the issue if its over 140 chars and end on a clean word
  $scope.truncateBody = function(body) {
    var trimmedString = body.substr(0, 140);

    //re-trim if we are in the middle of a word
    return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
  }

}]);