'use strict';

angular.module('peopleApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home',
        controller: 'HomeController'
      });
  });