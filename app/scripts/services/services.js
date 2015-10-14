angular.module('ngYsuraTaskApp')
  .factory('ParkingSettings', function () {
    var levels = 3,
        places = 10;


    return {
      levels: levels,
      places: places
    }

  })
  .factory('Vehicles', function() {
    var pushed = [];
    var types = [
      {id: 0, label: 'Car'},
      {id: 1, label: 'Motorbike'}
    ];
    var vehicles = [
      {type: 0, licensce: 'XX-11', level: 0},
      {type: 0, licensce: 'XX-12', level: 0},
      {type: 0, licensce: 'XX-13', level: 0},
      {type: 0, licensce: 'XX-13', level: 0},
      {type: 0, licensce: 'XX-13', level: 0},
      {type: 0, licensce: 'XX-13', level: 0},
      {type: 0, licensce: 'XX-13', level: 0},
      {type: 0, licensce: 'XX-13', level: 0},
      {type: 1, licensce: 'XX-15', level: 0},
      // {type: 0, licensce: 'XX-16', level: 1},
      // {type: 1, licensce: 'XX-17', level: 1},
      // {type: 0, licensce: 'XX-18', level: 1},
      // {type: 1, licensce: 'XX-19', level: 1},
      // {type: 0, licensce: 'YY-11', level: 2},
      // {type: 0, licensce: 'YY-12', level: 2},
      // {type: 0, licensce: 'YY-13', level: 2},
      // {type: 1, licensce: 'YY-15', level: 2},
      // {type: 0, licensce: 'YY-16', level: 3},
      // {type: 1, licensce: 'YY-17', level: 3},
      // {type: 0, licensce: 'YY-18', level: 3},
      // {type: 1, licensce: 'YY-19', level: 3},
      // {type: 1, licensce: 'YY-19', level: 3},
      // {type: 1, licensce: 'YY-19', level: 3},
      // {type: 1, licensce: 'YY-19', level: 3},
      // {type: 1, licensce: 'YY-19', level: 3},
    ];

    return {
      vehicles: vehicles,
      types: types,
      pushed: pushed
    }
  });
