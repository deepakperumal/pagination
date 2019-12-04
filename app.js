var app = angular.module('app', ['infinite-scroll']);

app.directive('directive1', function() {
  return {
    restrict: 'AE',
    scope: {},
    controller: [
      '$scope',
      'scrollFactory',
      function scope1Controller1($scope, scrollFactory) {
        $scope.logEvents = [];
        let page = 0;
        $scope.loadMore = function() {
          page++;
          $scope.logEvents.push({
            name: page
          });
        };
      }
    ],
    templateUrl: './scroll1.html'
  };
});
app.directive('directive2', function() {
  return {
    restrict: 'AE',
    scope: {},
    controller: [
      '$scope',
      'scrollFactory',
      function scope1Controller1($scope, scrollFactory) {
        $scope.logEvents = [];
        let page = 0;
        $scope.loadMore = function() {
          page++;
          $scope.logEvents.push({
            name: page
          });
        };
      }
    ],
    templateUrl: './scroll2.html'
  };
});

app.factory('scrollFactory', function($http, $q) {
  return {
    resultData: function(url) {
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
    }
  };
});
