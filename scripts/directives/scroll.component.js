(function() {
  app.directive('scroll', function() {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {},
      controller: [
        '$scope',
        'GHRepo',
        function scrollController($scope, GHRepo) {
          $scope.ghRepo = new GHRepo();
        }
      ],
      templateUrl:'./partials/templates/scroll.component.html'
     
    };
  });
})();
