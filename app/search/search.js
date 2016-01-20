'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', 'ngTableParams', function($scope, $http, ngTableParams) {

  $scope.searchForItem = function() {
    console.log('Searching for ' + $scope.searchInput);

    $http({
      method: 'GET',
      url: 'http://api.vip.supplyhub.com:19000/products' + '?search=' + $scope.searchInput
    }).then(function (response) {
      console.log('Success: ' + response.data);
      $scope.results = response.data;
    }, function (response) {
      console.log('Error: ' + response);
    });

  };

  $scope.tableParams = new ngTableParams({}, {
     dataset: $scope.results
  });

}]);




//Notes
  
  //Response object from http response 
// var obj = 
// { 
// brand: { name: 'HILTI, INC.', slug: 'hilti-inc' },
//   product: 
//    { pkgWeight: 2863,
//      invoiceDescription: 'Hammer Drill Bit',
//      pkgType: 'PK',
//      indvWeightQtyUom: 'EA',
//      upc: 613023533723,
//      mfrCatNum: '00293416',
//      psUomQty: 1,
//      psUom: 'EA',
//      pkgUom: 'EA',
//      name: 'Hammer Drill Bit',
//      pkgQty: 1,
//      indvWeightUom: 'LB',
//      fulltechDesc: 'Hammer Drill Bit',
//      colThree: 506,
//      pkgWeightUom: 'LB',
//      indvWeightQty: 1,
//      indvWeight: 2863,
//      specificationSheetUrl: 'https://images.tradeservice.com/F5O2VZeQgqbz23ZI/ATTACHMENTS/DIR100129/LEVMFCE22208_1_2.pdf',
//      slug: '613023533723' },
//   category: 
//    { name: 'Power Tools - Bits, Parts,  Accessories ',
//      slug: 'power-tools-bits-parts-accessories-66150' } 
// }