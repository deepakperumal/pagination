var app = angular.module('app', []);

app.controller('tableController', [
  '$scope',
  'getResult',
  function($scope, getResult) {
    $scope.page = 1;
    $scope.result = {};
    let url = 'https://jsonplaceholder.typicode.com/posts?userId=';

    let beginGetData = () => {
      getResult.getResult(url + $scope.page).then(function(response) {
 
        if(response.length!=0)
        $scope.result = response;
        else
        alert('Data not Found')
      });
    };
    beginGetData();
    $scope.$watch('page', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        beginGetData();
      }
    });
  }
]);

app.service('getResult', [
  '$http',
  '$q',
  function($http, $q) {
    this.getResult = function(url) {
      var def = $q.defer();

      $http
        .get(url)
        .success(function(data) {
          def.resolve(data);
        })
        .error(function() {
          def.reject({ err: 'Failed to get albums' });
        });
      return def.promise;
    };
  }
]);

app.directive('ngPaginate', function() {
  return {
    restrict: 'AE',
    transclude: true,
    scope: {
      data: '=',
      page: '='
    },
    controller: ['$scope', function pgController($scope) {}],
    templateUrl: './paginate.html'
  };
});
