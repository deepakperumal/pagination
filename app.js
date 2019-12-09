var app = angular.module('app', ['pgModule']);

/*Controller*/

app.controller('tableController', [
  '$scope',
  'getResult',
  function($scope, getResult) {
    $scope.page = 1; //Page Number Declaration
    $scope.heading = ['Id', 'Title', 'Body'];
    // Watch Page
    $scope.$watch('page', function() {
      beginGetData();
    });

    let url = 'https://jsonplaceholder.typicode.com/posts?userId=';
    let beginGetData = () => {
      getResult.getResult(url + $scope.page).then(function(response) {
        $scope.result = response;
      });
    };
  }
]);

app.controller('tableController1', [
  '$scope',
  'getResult',
  function($scope, getResult) {
    $scope.page = 1; //Page Number Declaration
    $scope.heading = ['ID', 'Title'];
    // Watch Page
    $scope.$watch('page', function() {
      beginGetData();
    });

    let url = 'https://jsonplaceholder.typicode.com/posts?userId=';
    let beginGetData = () => {
      getResult.getResult(url + $scope.page).then(function(response) {
        $scope.result = response;
      });
    };
  }
]);

/*Service*/

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
