'use strict';

angular.module('myApp.search', ['ngRoute', 'angularUtils.directives.dirPagination'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$rootScope', '$http', '$location', '$route', 'NgTableParams', function($scope, $rootScope, $http, $location, $route, NgTableParams) {

  // Instantiate scope variables
  $scope.results = '';

  $scope.searchForItem = function() {

    $http({
      method: 'GET',
      url: 'http://api.vip.supplyhub.com:19000/products' + '?search=' + $scope.searchInput
    }).then(function (response) {
      $scope.results = response.data;

      $location.update_path('/?search=' + $scope.searchInput, true);

    }, function (response) {
      console.log('Error: ' + response);
    });
  
  };

}]);