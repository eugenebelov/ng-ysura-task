angular.module('ngYsuraTaskApp')
  .controller('MenuCtrl', ['$scope', function ($scope) {
    $scope.toggleClass = false;
    $scope.toggleCollapse = function() {
      $scope.toggleClass = ($scope.toggleClass) ? false : true;
    }
  }]);
