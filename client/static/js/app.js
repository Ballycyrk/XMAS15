var ballyCyrk = angular.module('ballyCyrk', ['ngRoute', 'ngMessages']);

// ------PARTIAL ROUTES------
ballyCyrk.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './../static/views/partials/_location.html',
  })
  .when('/cannon', {
    templateUrl: './../static/views/partials/_cannon.html',
    controller: 'cannonsController as CC'
  })
  .when('/home', {
    templateUrl: './../static/views/partials/_home.html',
    controller: 'homesController as HC'
  })
  .when('/fini', {
    templateUrl: './../static/views/partials/_fini.html',
    controller: 'finisController as FC'
  })
  .otherwise({ redirectTo: '/'});
});

