!function(){"use strict";angular.module("app",["ngRoute","app.core","app.main","app.about","app.features"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"scripts/main/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"scripts/about/about.html",controller:"AboutCtrl"}).when("/features",{templateUrl:"scripts/features/features.html",controller:"FeaturesCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}])}(),function(){"use strict";angular.module("app.main",[])}(),function(){"use strict";function a(){}angular.module("app.main").controller("MainCtrl",a)}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";function a(){function a(){var a=[{name:"Thermometer",path:"images/RoastWatchScreen1.png"},{name:"Stopwatch",path:"images/RoastWatchScreen2.png"}];return console.log("Retrieved features data."),a}var b={getFeatures:a};return b}angular.module("app.core").factory("dataservice",a)}(),function(){"use strict";angular.module("app.about",[])}(),function(){"use strict";function a(){function a(){c.body=b()}function b(){return""}var c=this;c.body=[],a()}angular.module("app.about").controller("AboutCtrl",a)}(),function(){"use strict";angular.module("app.features",[])}(),function(){"use strict";function a(a){function b(){return c()}function c(){var b=a.getFeatures();return d.features=b,d.features}var d=this;d.features=[],d.title="Features",b()}angular.module("app.features").controller("FeaturesCtrl",a),a.$inject=["dataservice"]}();