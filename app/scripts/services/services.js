angular.module('ngYsuraTaskApp')
  .factory('ParkingSettings', function () {
    var levels = 3,
        places = 10;


    return {
      levels: levels,
      places: places,

      setLevel: function(value) {
        levels = value
      },
      getLevel: function() {
        return levels;
      },
      setPlaces: function(value) {
        places = value
      },
      getPlaces: function() {
        return places;
      }
    }

  })
  .factory('Vehicles', function() {
    var types = ['Car', 'Motobike'];
    var vehicles = [
      {type: 'Car', licensce: 'XX-11', level: 0},
      {type: 'Car', licensce: 'XX-12', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Car', licensce: 'XX-13', level: 0},
      {type: 'Motobike', licensce: 'XX-15', level: 0},
      {type: 'Car', licensce: 'XX-16', level: 1},
      {type: 'Motobike', licensce: 'XX-17', level: 1},
      {type: 'Car', licensce: 'XX-18', level: 1},
      {type: 'Motobike', licensce: 'XX-19', level: 1},
      {type: 'Car', licensce: 'YY-11', level: 2},
      {type: 'Car', licensce: 'YY-12', level: 2},
      {type: 'Car', licensce: 'YY-13', level: 2},
      {type: 'Motobike', licensce: 'YY-15', level: 2},
      {type: 'Car', licensce: 'YY-16', level: 3},
      {type: 'Motobike', licensce: 'YY-17', level: 3},
      {type: 'Car', licensce: 'YY-18', level: 3},
      {type: 'Motobike', licensce: 'YY-19', level: 3},
      {type: 'Motobike', licensce: 'YY-19', level: 3},
      {type: 'Motobike', licensce: 'YY-19', level: 3},
      {type: 'Motobike', licensce: 'YY-19', level: 3},
      {type: 'Motobike', licensce: 'YY-19', level: 3},
    ];

    return {
      vehicles: vehicles,
      types: types
    }
  });
