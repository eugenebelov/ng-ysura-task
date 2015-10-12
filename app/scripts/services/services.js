angular.module('ngYsuraTaskApp')
  .factory('ParkingSettings', function () {
    var levels = 3,
        places = 3;


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
    var vehicles = [
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

    return {
      vehicles: vehicles
    }
  });
