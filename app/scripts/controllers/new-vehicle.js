'use strict';

/**
 * @ngdoc function
 * @name ngYsuraTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngYsuraTaskApp
 */
angular.module('ngYsuraTaskApp')
  .controller('NewVehicleCtrl', ['$scope', '$rootScope', 'ParkingSettings', 'Vehicles', function ($scope, $rootScope, ParkingSettings, Vehicles) {
    $scope.types = Vehicles.types;

    $scope.licensce = '';
    $scope.vType = $scope.types[0];

    console.log(ParkingSettings.levels, ParkingSettings.places, Vehicles.vehicles.length);
    $scope.disabledAdding = (Vehicles.vehicles.length >= ParkingSettings.levels * ParkingSettings.places);

    $scope.pushToParking = function() {
      Vehicles.pushed.push({
        type: $scope.vType.id,
        licensce: $scope.licensce
      });

      console.log(Vehicles.pushed);
    };

  }]);
