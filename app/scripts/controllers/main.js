'use strict';

/**
 * @ngdoc function
 * @name ngYsuraTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngYsuraTaskApp
 */

 angular.module('ngYsuraTaskApp')
   .controller('MenuCtrl', ['$scope', function ($scope) {
     $scope.toggleClass = true;
     $scope.hght = 0;
     $scope.toggleCollapse = function() {
       console.log($scope.toggleClass);
       $scope.toggleClass = ($scope.toggleClass) ? false : true;
       $scope.hght = ($scope.hght == 0) ? 85 : 0;
     }
   }]);

angular.module('ngYsuraTaskApp')
  .controller('MainCtrl', ['$scope', 'ParkingSettings', 'Vehicles', function ($scope, parkingSettings, Vehicles) {

    $scope.levels = parkingSettings.levels;
    $scope.places = parkingSettings.places;

    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.slotsAvailable = $scope.places * $scope.levels;

    $scope.types = ['Car', 'Motobike'];
    $scope.vehicles = Vehicles.vehicles;

    $scope.generateParking = function() {
      var parking = [];

      for(var level = 0; level < $scope.levels; level++) {
        parking.push({name: 'Level' + level, id: level});

        var places = [];
        for(var slot = 0; slot < $scope.places; slot++) {
          places.push({name: 'Slot ' + slot, id: slot});
        }

        parking[level].slots = places;
      };
      return parking;
    };

    $scope.putVehiclesIntoParking = function(parking) {
      for(var i = 0; i < $scope.vehicles.length; i++) {
        var vehicleLevel = $scope.vehicles[i].level,
            vehicleObj = $scope.vehicles[i];

        if(parking[vehicleLevel] && vehicleLevel != undefined) {
          parking[vehicleLevel].slots.some(function(slot) {
            if(!slot.vehicle) {
              slot.vehicle = vehicleObj;
              vehicleObj.levelName = parking[vehicleLevel].name;
              vehicleObj.slot = slot.id;
              $scope.slotsAvailable--;
              return true;
            }
          });
        }
      }
    };

    $scope.addToParking = function(item) {
      for(var i = 0; i < $scope.parking.length; i++) {
        var hasVehicle = $scope.parking[i].slots.some(function(slot){
          if(!slot.vehicle) {
            slot.vehicle = item;
            item.level = $scope.parking[i].id;
            item.slot = slot.id;
            item.levelName = $scope.parking[i].name;
            $scope.slotsAvailable--;
            return true;
          }
        });

        if(hasVehicle) break;
      }
    };

    $scope.goOutOfParking = function(item) {
      for(var i = 0; i < $scope.parking.length; i++) {
        var hasVehicle = $scope.parking[i].slots.some(function(slot){
          if(slot.vehicle == item) {
            slot.vehicle = null;
            item.level = null;
            item.levelName = '';
            $scope.slotsAvailable++;
            return true;
          }
        });

        if(hasVehicle) break;
      }

      var index = $scope.vehicles.indexOf(item);
      $scope.vehicles.splice(index, 1);
    };

    $scope.filterByLevel = function(value) {
      $scope.filterModelLevel = ($scope.filterModelLevel == "Level" + value) ? "" : "Level" + value;
    };

    $scope.filterByType = function(value) {
      $scope.filterModelType = ($scope.filterModelType == value) ? "" : value;
    };

    $scope.totalPages = function() {
      return Math.ceil($scope.vehicles.length/$scope.pageSize);
    };

    // $scope.$watch('places', function() {
    //   $scope.parking = [];
    //   $scope.parking = $scope.generateParking();
    //   console.log($scope.parking);
    // });

    $scope.parking = $scope.generateParking();
    $scope.putVehiclesIntoParking($scope.parking);

    // console.log($scope.parking);

  }]);

angular.module('ngYsuraTaskApp')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start; //parse to int
      return input.slice(start);
    }
});
