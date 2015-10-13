'use strict';

/**
 * @ngdoc function
 * @name ngYsuraTaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngYsuraTaskApp
 */
angular.module('ngYsuraTaskApp')
  .controller('NewVehicleCtrl', ['$scope', 'ParkingSettings', 'Vehicles', function ($scope, parkingSettings, Vehicles) {

    $scope.levels = parkingSettings.levels;
    $scope.places = parkingSettings.places;
    
    $scope.types = Vehicles.types;
    $scope.vType = $scope.types[0];

    // $scope.places = parkingSettings.places;

    // $scope.$watch('levels', function(e) {
    //   parkingSettings.levels = e;
    // });
    //
    // $scope.$watch('places', function(e) {
    //   parkingSettings.places = e;
    // })

  }]);
