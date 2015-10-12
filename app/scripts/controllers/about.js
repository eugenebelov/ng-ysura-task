'use strict';

/**
 * @ngdoc function
 * @name ngYsuraTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngYsuraTaskApp
 */
angular.module('ngYsuraTaskApp')
  .controller('AboutCtrl', ['$scope', 'ParkingSettings', function ($scope, parkingSettings) {

    $scope.levels = parkingSettings.levels;
    $scope.places = parkingSettings.places;

    $scope.$watch('levels', function(e) {
      parkingSettings.levels = e;
    });

    $scope.$watch('places', function(e) {
      parkingSettings.places = e;
    })

  }]);
