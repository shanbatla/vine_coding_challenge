'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', '$location', 'NgTableParams', function($scope, $http, $location, NgTableParams) {

  $scope.results = '';
  $scope.paginatedResults = '';

  $scope.searchForItem = function() {

    $http({
      method: 'GET',
      url: 'http://api.vip.supplyhub.com:19000/products' + '?search=' + $scope.searchInput
    }).then(function (response) {
      $scope.results = response.data;
      $scope.paginatedResults = $scope.results.slice(0, 10);
    }, function (response) {
      console.log('Error: ' + response);
    });

    // $scope.resultsTable = new NgTableParams({
    //   count: 10
    // }, 
    // {
    //   // page size buttons (right set of buttons in demo)
    //   counts: [],
    //   // determines the pager buttons (left set of buttons in demo)
    //   paginationMaxBlocks: 13,
    //   paginationMinBlocks: 2,
    //   dataset: dataSet
      
    // });
  
  };

}]);