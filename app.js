var app = angular.module('app', []);

app.controller('tableController', [
  '$scope',
  'getResult',
  function($scope, getResult) {
    $scope.page = 1; //Page Number Declaration
    $scope.heading = ['Id', 'Title'];
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
    $scope.heading = ['Id', 'Title'];
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

/*Pagination Directive*/

app.directive('ngPaginate', function() {
  return {
    restrict: 'AE',
    transclude: true,
    scope: {
      data: '=',
      page: '=',
      limit: '=',
      paginationType: '@',
      paginationHeading: '=',
      itemLimit: '@',
      removeItem: '='
    },
    controller: ['$scope', function pgController($scope) {}],
    link: function(scope, element, attribute) {


      scope.pageLimit = [];
      scope.tableHead = {};

      if (scope.paginationType == 2) {
        for (var i = scope.limit[0]; i <= scope.limit[1]; i++)
          scope.pageLimit.push(i);
      }

      scope.changePage = function(flag) {
        var limit = scope.limit;
        let tempPage = scope.page;

        if (flag == 1) tempPage++;
        else tempPage--;

        if (tempPage >= limit[0] && tempPage <= limit[1]) scope.page = tempPage;
      };

      scope.ch = function(count) {
        scope.page = count;
      };

      scope.checkExist = function(key) {
        return scope.removeItem.indexOf(key) >= 0;
      };
    },
    templateUrl: './paginate.html'
  };
});
