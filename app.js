window.NG_POLYMER_ELEMENTS_EXTENDED_MAPPINGS = {
    coreItem: {
        ngClick: {
            event: 'item-clicked'
        }
    },
    paperIconButton: {
        ngClick: {
            event: 'item-clicked'
        }
    }
};

document.addEventListener('polymer-ready', function() {
    var navicon = document.getElementById('navicon');
    var drawerPanel = document.getElementById('drawerPanel');
    navicon.addEventListener('click', function() {
        drawerPanel.togglePanel();
    });
});

window.addEventListener('polymer-ready', function() {
    angular.bootstrap(wrap(document), ['polyhack']);
});

angular.module('polyhack', ['ng-polymer-elements']);

angular.module('polyhack')
  .controller('MainCtrl',
    function(GeoCoder) {
      this.search = 'Wildpark';
      this.location = {
        lat: 49.005120,
        lon: 8.414887
      };
      this.zoom = 14;
      var _this = this;
      this.performSearch = function(query) {
        console.log(query);
          GeoCoder.request(query).then(
            function(res) {_this.result = res.data.results;},
            function(err) { console.log(err); }
          );
      };
      this.setLocation = function(index) {
          console.log("set location of index " + index);
          var hit = this.result[index];
          this.location.lat = hit.geometry.location.lat;
          this.location.lon = hit.geometry.location.lng;
      };
    }
  );

angular.module('polyhack')
  .service('GeoCoder',
    function($http) {
      this.request = function (query) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + query;
        return $http.get(url);
      }
    }
  );
