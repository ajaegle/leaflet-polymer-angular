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
    function() {
      this.location = {
        lat: 49.005120,
        lon: 8.414887
      };
      this.zoom = 14;
    }
  );
