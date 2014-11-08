window.addEventListener('polymer-ready', function() {
    angular.bootstrap(wrap(document), ['polyhack']);
});

angular.module('polyhack', ['ng-polymer-elements']);

angular.module('polyhack')
  .controller('MainCtrl',
    function(GeoCoder) {
      this.location = {
        lat: 49.005120,
        lon: 8.414887
      };
      this.zoom = 14;
      var _this = this;
      this.performSearch = function(query) {
        console.log(query);
        _this.result = GeoCoder.request(query);
      };
    }
  );

angular.module('polyhack')
  .service('GeoCoder',
    function() {
      this.request = function (query) {
        return query + "!"
      }
    }
  );
