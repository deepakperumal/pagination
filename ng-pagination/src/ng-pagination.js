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
      showItem: '='
    },
    controller: ['$scope', function pgController($scope) {}],
    link: function(scope, element, attribute) {
      scope.pageLimit = [];
      scope.tableHead = {};

      let generateLimit = startLimit => {
        let temp = [];

        for (i = startLimit; i <= 10 + startLimit; i++)
          if (i >= scope.limit[0] && i <= scope.limit[1]) temp.push(i);

        return temp;
      };

      if (scope.paginationType == 2) {
        scope.pageLimit = generateLimit(0);
      }

      scope.changePage = function(flag) {
        var limit = scope.limit;
        let tempPage = scope.page;

        if (flag == 1) tempPage++;
        else tempPage--;

        if (tempPage >= limit[0] && tempPage <= limit[1]) scope.page = tempPage;
        if (scope.page >= 10) {
          scope.pageLimit = generateLimit(scope.page);
        } else if (scope.page < 10) {
          scope.pageLimit = generateLimit(0);
        }
      };

      scope.ch = function(count) {
        scope.page = count;
      };

      scope.checkExist = function(key) {
        return scope.showItem.indexOf(key) >= 0;
      };

      scope.toggleClass = function(val) {
        return val === scope.page;
      };
    },
    templateUrl: './ng-pagination/partials/template/pg-table.html'
  };
});
