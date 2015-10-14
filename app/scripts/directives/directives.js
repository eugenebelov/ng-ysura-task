/**
 * Created by eugene on 10/12/15.
 */
angular.module('ngYsuraTaskApp')
  .directive('toggleMenu', function () {
    return {
      restrict: 'A',
      scope: {
        toggleClass: '@'
      },
      controller: function($scope, $element, $attrs) {

      },
      link:function(scope, element, attrs) {

      }
    }
  })
  .directive('toggleFilterLink', function () {
    return {
      restrict: 'E',
      scope: {
        filterBy: '@',
        filterLabel: '@'
      },
      link: function(scope, element, attrs) {

      },
      template: '<a href="" data-id-attribute={{filterBy}}>{{filterLabel}}</a>'
    }
  })
  .directive('vehicleItem', function () {
    return {
      restrict: 'E',
      scope: {
        licensce: '@',
        type: '@',
        level: '@',
        slot: '@',
        parkOutHandler: '&onParkOutHandler'
      },
      link: function(scope, element, attrs) {
        scope.parkOut = false;

        element.on('mouseleave', function(e) {
          scope.parkOut = false;
          scope.$apply();
        });

        element.on('mouseenter', function(e) {
          scope.parkOut = true;
          scope.$apply();
        });
      },
      templateUrl: '../views/partials/vehicle-item.html'
    }
  })
  .directive('vehiclesPaging', function () {
    return {
      restrict: 'E',
      scope: {
        page: '=',
        size: '@',
        limit: '@',
        totalInParking: '@'
      },
      controller: function($scope, $element, $attrs) {
        $scope.total = $scope.size * $scope.limit;
        $scope.prevPageActive = false;
        $scope.nextPageActive = true;

        $scope.onPreviousPage = function() {
          if($scope.page > 0) $scope.page--;
          $scope.updateActivePageButtons();
        }

        $scope.onNextPage = function() {
          if($scope.page < $scope.limit - 1) $scope.page++;
          $scope.updateActivePageButtons();
        }

        $scope.updateActivePageButtons = function() {
          $scope.prevPageActive = $scope.page > 0;
          $scope.nextPageActive = $scope.page < $scope.limit - 1;
        }

      },
      link: function(scope, element, attrs) {

      },
      templateUrl: '../views/partials/paging.html'
    }
  });
