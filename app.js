var app = angular.module('app', ['infinite-scroll']);

app.directive('directive1', function() {
  return {
    restrict: 'AE',
    scope: {},
    controller: [
      '$scope',

      function scope1Controller1($scope) {
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

      function scope1Controller1($scope) {
        $scope.logEvents = [];
        let page = 0;
        $scope.loadMore = function() {
          page++;
          $scope.logEvents.push(
            {
              name: page
            },
            {
              name: page
            },
            {
              name: page
            },
            {
              name: page
            },
            {
              name: page
            },
            {
              name: page
            },
            {
              name: page
            },
            {
              name: page
            }
          );
        };
      }
    ],
    templateUrl: './scroll2.html'
  };
});
