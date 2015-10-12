/**
 * Created by eugene on 10/12/15.
 */
angular.module('ngYsuraTaskApp')
  .directive('toggleFilterLink', function () {
    return {
      restrict: 'E',
      scope: {
        filterBy: '@'
      },
      link: function(scope, element, attrs) {

      },
      template: '<a href="">{{filterBy}}</a>'
    }
  })
  .directive('vehiclesPaging', function () {
    return {
      restrict: 'E',
      scope: {
        page: '=',
        limit: '='
      },
      controller: function($scope, $element, $attrs) {
        $scope.onPreviousPage = function() {
          if($scope.page > 0) $scope.page--;
          console.log("prev", $scope.page)
        }

        $scope.onNextPage = function() {
          if($scope.page < $scope.limit - 1) $scope.page++;
          console.log("next", $scope.page, $scope.limit)
        }
      },
      link: function(scope, element, attrs) {

      },
      template: '<div><span>current page: {{page}}</span><span>items on page: {{items}}</span><span>total items: {{total}}</span>' +
      '<br><a href="" ng-click="onPreviousPage()">Prev</a> <a href="" ng-click="onNextPage()">Next</a></div>'
    }
  });
