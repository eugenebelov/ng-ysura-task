angular.module('ngYsuraTaskApp')
  .factory('ParkingSettings', function () {
    var levels = 0,
        places = 0;


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

  });
