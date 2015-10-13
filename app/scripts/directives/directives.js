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
        // $scope.eventHandler = function() {
        //   console.log('lolool c');
        //   // scope.toggleClass = 'in';
        // }
      },
      link:function(scope, element, attrs) {
        // scope.toggleClass = true;
        //
        // element.on('click', function() {
        //   console.log('lolool l', scope.toggleClass);
        //   scope.toggleClass = (scope.toggleClass) ? false : true;
        // });
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
        parkOut: '@',
        parkOutHandler: '&onParkOutHandler'
      },
      templateUrl: '../views/partials/vehicle-item.html'
    }
  })
  .directive('vehiclesPaging', function () {
    return {
      restrict: 'E',
      scope: {
        page: '=',
        limit: '=',
        size: '='
      },
      controller: function($scope, $element, $attrs) {
        $scope.total = $scope.size * $scope.limit;

        $scope.onPreviousPage = function() {
          if($scope.page > 0) $scope.page--;
        }

        $scope.onNextPage = function() {
          if($scope.page < $scope.limit - 1) $scope.page++;
        }
      },
      link: function(scope, element, attrs) {

      },
      templateUrl: '../views/partials/paging.html'
    }
  });
