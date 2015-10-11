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
    $scope.levels = ['Level1', 'Level2', 'Level3', 'Level4'];
    $scope.types = ['Car', 'Motobike'];
    
  });
