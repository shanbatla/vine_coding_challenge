'use strict';

angular.module('myApp.issue', ['ngRoute', 'angularUtils.directives.dirPagination'])

.controller('IssueCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  var issueNumber = $routeParams.number;

  $http({
      method: 'GET',
      url: 'https://api.github.com/repos/npm/npm/issues/' + issueNumber
    }).then(function (response) {
      $scope.results = response.data;
      console.log($scope.results);

    }, function (response) {
      console.log('Error: ' + response);
    });

}]);