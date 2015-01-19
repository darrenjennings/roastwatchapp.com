/**
 * Created by dmjenn02 on 1/18/15.
 */

(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($log) {

    var service = {
      getFeatures: getFeatures
    };

    return service;

    /////////

    function getFeatures() {
      var data = [{name:'Thermometer', path:'images/RoastWatchScreen1.png'}, {name:'Stopwatch',path:'images/RoastWatchScreen2.png'}];
      $log('Retrieved features data.');
      return data;
    }
  }
})();
