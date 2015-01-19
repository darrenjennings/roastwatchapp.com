/**
 * @ngdoc overview
 * @name app
 * @description
 * # roastWatchWebAppApp
 *
 * Main module of the application.
 */
(function () {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'app.core',
      'app.main',
      'app.about',
      'app.features'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'scripts/main/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'scripts/about/about.html',
          controller: 'AboutCtrl'
        })
        .when('/features', {
          templateUrl: 'scripts/features/features.html',
          controller: 'FeaturesCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
