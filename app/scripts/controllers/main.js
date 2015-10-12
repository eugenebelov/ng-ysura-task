'use strict';

/**
 * @ngdoc function
 * @name ngYsuraTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngYsuraTaskApp
 */
angular.module('ngYsuraTaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.places = 3;
    $scope.levels = 3;
    $scope.currentPage = 0;
    $scope.pageSize = 5;

    $scope.slotsAvailable = $scope.places * $scope.levels;

    $scope.types = ['Car', 'Motobike'];
    $scope.vehicles = [
      {type: 'Car', licensce: 'XX-11', level: 0},
      {type: 'Car', licensce: 'XX-12', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Motobike', licensce: 'XX-15', level: 1},
      {type: 'Car', licensce: 'XX-16', level: 1},
      {type: 'Motobike', licensce: 'XX-17', level: 1},
      {type: 'Car', licensce: 'XX-18'},
      {type: 'Motobike', licensce: 'XX-19'},
      {type: 'Car', licensce: 'XX-20'},
      {type: 'Car', licensce: 'YY-11'},
      {type: 'Car', licensce: 'YY-12'},
      {type: 'Car', licensce: 'YY-13'},
      {type: 'Motobike', licensce: 'YY-15'},
      {type: 'Car', licensce: 'YY-16'},
      {type: 'Motobike', licensce: 'YY-17'},
      {type: 'Car', licensce: 'YY-18'},
      {type: 'Motobike', licensce: 'YY-19'},
      {type: 'Car', licensce: 'YY-20'},
    ];

    $scope.generateParking = function() {
      var parking = [];

      for(var level = 0; level < $scope.levels; level++) {
        parking.push({name: 'Level' + level, id: level});

        var places = [];
        for(var slot = 0; slot < $scope.places; slot++) {
          places.push({name: 'Slot' + slot});
        }

        parking[level].slots = places;
      }

      $scope.putVehiclesIntoParking(parking);
      return parking;
    };

    $scope.putVehiclesIntoParking = function(parking) {
      for(var i = 0; i < $scope.vehicles.length; i++) {
        var level = $scope.vehicles[i].level,
            item = $scope.vehicles[i];

        if(level != undefined)
        {
          parking[level].slots.some(function(slot) {
              if(!slot.vehicle) {
                slot.vehicle = item;
                item.levelName = parking[level].name;
                $scope.slotsAvailable--;
                return true;
              }
          })
        }
      }
    }

    $scope.parking = $scope.generateParking();

    $scope.addToParking = function(item) {
      for(var i = 0; i < $scope.parking.length; i++) {
        var hasVehicle = $scope.parking[i].slots.some(function(slot){
          if(!slot.vehicle) {
            slot.vehicle = item;
            item.level = $scope.parking[i].id;
            item.levelName = $scope.parking[i].name;
            $scope.slotsAvailable--;
            return true;
          }
        });

        if(hasVehicle) break;
      }
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

  });

angular.module('ngYsuraTaskApp')
  .filter('startFrom', function() {
    return function(input, start) {
      start = +start; //parse to int
      return input.slice(start);
    }
});
