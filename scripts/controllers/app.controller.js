app.controller('appController', function($scope, GHRepo) {
  $scope.ghRepo = new GHRepo();
});