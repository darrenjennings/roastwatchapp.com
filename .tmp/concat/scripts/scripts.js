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
    .config(["$routeProvider", function ($routeProvider) {
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
    }]);
})();

'use strict';

/**
 * @ngdoc function
 * @name roastWatchWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roastWatchWebAppApp
 */
(function () {
  'use strict';

  angular.module('app.main',[])

})();

/**
 * Created by dmjenn02 on 1/18/15.
 */
/**
 * @ngdoc main
 * @name app.controller:MainCtrl
 * @description
 * # FeaturesCtrl
 * Controller of the roastWatchWebAppApp
 */
(function() {
  'use strict';

  angular.module('app.main')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl(){
    //intialize();
  }
})();





(function() {
  'use strict';

  angular.module('app.core', []);

})();

/**
 * Created by dmjenn02 on 1/18/15.
 */

(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice() {

    var service = {
      getFeatures: getFeatures
    };

    return service;

    /////////

    function getFeatures() {
      var data = [{name:'Thermometer', path:'images/RoastWatchScreen1.png'}, {name:'Stopwatch',path:'images/RoastWatchScreen2.png'}];
      console.log('Retrieved features data.');
      return data;
    }
  }
})();

/**
 * @ngdoc function
 * @name roastWatchWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the roastWatchWebAppApp
 */

(function() {
  'use strict';

  angular.module('app.about',[]);

})();

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

(function() {
  'use strict';

  angular.module('app.features',[]);

})();

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
  FeaturesCtrl.$inject = ["dataservice"];
})();




