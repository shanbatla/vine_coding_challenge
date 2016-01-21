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

  // Add parameter to location service
  // var original = $location.path;
  // $location.path = function (path, reload) {
  //   if (reload === false) {
  //     var lastRoute = $route.current;
  //     var un = $rootScope.$on('$locationChangeSuccess', function () {
  //       $route.current = lastRoute;
  //         un();
  //       });
  //     }
  //   return original.apply($location, [path]);
  // };

  $scope.searchForItem = function() {

    $http({
      method: 'GET',
      url: 'http://api.vip.supplyhub.com:19000/products' + '?search=' + $scope.searchInput
    }).then(function (response) {
      $scope.results = response.data;
      
      // $location.path('/?search=' + $scope.searchInput).replace();
      // console.log($location.path());
    
      // Change path
      // $location.path('/?search=' + $scope.searchInput, false);
      // console.log($location.path());

      $location.update_path('/?search=' + $scope.searchInput, true);

    }, function (response) {
      console.log('Error: ' + response);
    });
  
  };

}]);