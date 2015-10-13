'use strict';

/**
 * @ngdoc overview
 * @name ngYsuraTaskApp
 * @description
 * # ngYsuraTaskApp
 *
 * Main module of the application.
 */
angular
  .module('ngYsuraTaskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/settings.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/new', {
        templateUrl: 'views/new-vehicle.html',
        controller: 'NewVehicleCtrl',
        controllerAs: 'new'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
