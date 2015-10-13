'use strict';

/**
 * @ngdoc function
 * @name ngYsuraTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngYsuraTaskApp
 */
angular.module('ngYsuraTaskApp')
  .controller('NewVehicleCtrl', ['$scope', '$rootScope', 'ParkingSettings', 'Vehicles', function ($scope, $rootScope, parkingSettings, Vehicles) {
    $scope.types = Vehicles.types;

    $scope.licensce = '';
    $scope.vType = $scope.types[0];

    $scope.pushToParking = function() {

      Vehicles.pushed.push({
        type:$scope.vType,
        licensce:$scope.licensce
      });
    };

  }]);
