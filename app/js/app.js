'use strict';

angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/standing", {templateUrl: "partials/standing.html", controller: "driversController"});
//	when("/drivers/:id", {templateUrl: "../partials/driver.html", controller: "driverController"}).
//	otherwise({redirectTo: '/standing'});
}]);