angular.module('polyhack', []);

angular.module('polyhack')
  .controller('MainCtrl',
    function() {
      this.location = {
        lat: 49.005120,
        lon: 8.414887
      };
      this.zoom = 14;
    }
  );
