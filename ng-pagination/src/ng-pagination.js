var pgModule = angular.module('pgModule', []);

/*Pagination Directive*/

pgModule.directive('ngPaginate', function() {
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
    templateUrl: 'ng-pagination/partials/template/pg-table.html'
  };
});
