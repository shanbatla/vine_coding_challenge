'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.searchForItem = function() {
    console.log('Searching for ' + $scope.searchInput);

    $http({
      method: 'GET',
      url: 'http://api.vip.supplyhub.com:19000/products' + '?search=' + $scope.searchInput
    }).then(function (response) {
      console.log('Success' + response)
    }, function (response) {
      console.log('Error: ' + response);
    });

  };

}]);