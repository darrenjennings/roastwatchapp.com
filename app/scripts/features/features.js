/**
 * Created by dmjenn02 on 1/18/15.
 */
/**
 * @ngdoc features
 * @name app.controller:FeaturesCtrl
 * @description
 * # FeaturesCtrl
 * Controller of the roastWatchWebAppApp
 */
(function() {
'use strict';

angular.module('app.features')
  .controller('FeaturesCtrl', FeaturesCtrl);

  /* @ngInject */
  function FeaturesCtrl(dataservice){
    var vm = this;
    vm.features = [];
    vm.title = 'Features';

    initialize();

    function initialize() {
      return getFeatures();
    }

    function getFeatures() {
      //var data = [{name:'Thermometer', path:'images/RoastWatchScreen1.png'}, {name:'Stopwatch',path:'images/RoastWatchScreen2.png'}];
      var data = dataservice.getFeatures();
      vm.features = data;
      return vm.features;
    }
  }
})();




