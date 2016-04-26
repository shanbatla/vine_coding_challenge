'use strict';

angular.module('myApp.issue', ['ngRoute', 'angularUtils.directives.dirPagination'])

.controller('IssueCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  // Fetch issue number from route param
  var issueNumber = $routeParams.number;

  // Fetch issue from GitHub API
  $http({
      method: 'GET',
      url: 'https://api.github.com/repos/npm/npm/issues/' + issueNumber
    }).then(function (response) {
      $scope.results = response.data;
      console.log($scope.results);

      // If comments exist, get them
      if(response.data.comments > 0) {

        // Fetch comments
        $http({
            method: 'GET',
            url: response.data.comments_url
        }).then(function (response) {
            console.log(response.data);
        }, function (response) {
          console.log('Error: ' + response);    
          });

      }

    }, function (response) {
      console.log('Error: ' + response);
    });

}]);