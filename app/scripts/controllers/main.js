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

    $scope.slotsAvailable = $scope.places * $scope.levels;

    $scope.types = ['Car', 'Motobike'];
    $scope.vehicles = [
      {type: 'car', licensce: 'XX-11'},
      {type: 'car', licensce: 'XX-12'},
      {type: 'car', licensce: 'XX-13'},
      {type: 'bike', licensce: 'XX-15'},
      {type: 'car', licensce: 'XX-16'},
      {type: 'bike', licensce: 'XX-17'},
      {type: 'car', licensce: 'XX-18'},
      {type: 'bike', licensce: 'XX-19'},
      {type: 'car', licensce: 'XX-20'},
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
      return parking;
    };

    $scope.parking = $scope.generateParking();

    $scope.addToParking = function(item) {
      for(var i = 0; i < $scope.parking.length; i++) {
        var hasVehicle = $scope.parking[i].slots.some(function(slot){
          // var isFree = !slot.vehicle;
          if(!slot.vehicle) {
            slot.vehicle = item;
            item.level = $scope.parking[i].name;
            $scope.slotsAvailable--;
            return true;
          }
          // return isFree;
        });

        if(hasVehicle) break;
      }

    };

  });
