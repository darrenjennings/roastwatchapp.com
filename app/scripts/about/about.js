/**
 * Created by dmjenn02 on 1/18/15.
 */
(function() {
  'use strict';

  angular
    .module('app.about')
    .controller('AboutCtrl', AboutCtrl);

  /* @ngInject */
  function AboutCtrl() {
    /*jshint validthis: true */
    var vm = this;
    vm.body = [];

    activate();

    function activate() {
      vm.body = getBody();
    }

    function getBody(){
      return '';
    }
  }
})();
