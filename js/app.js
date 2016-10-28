var fPlannerApp = angular.module('fPlannerApp', ['ngRoute'])

.config(function($routeProvider) {
 
  $routeProvider
    .when('/', {
      controller:'PlanController',
      templateUrl:'partials/planView.html'
    })
    .when('/weekplan', {
      //controller:'NewProjectController as editProject',
      templateUrl:'partials/weekPlanView.html'
    })
    .when('/pantry', {
      //controller:'NewProjectController as editProject',
      templateUrl:'partials/pantryView.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})


