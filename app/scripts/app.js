'use strict';

/**
 * @ngdoc overview
 * @name videoStoreApp
 * @description
 * # videoStoreApp
 *
 * Main module of the application.
 */
angular
  .module('videoStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-underscore'
  ])
  .constant('ENDPOINT_URI', 'http://localhost:9000/api/v1/')  
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/movies/list');

    $stateProvider
    .state('movies', {
      url: '/movies',
      template: '<ui-view/>',
     
    })
    .state('movies.details', {
      url: '/:id',
      templateUrl: 'views/details.html',
      controller: 'VideoDetailsCtrl',
      controllerAs: 'ctrl'
    })
    .state('movies.list', {
      url: '/list',
      templateUrl: 'views/main.html',
      controller: 'MovieCtrl',
      controllerAs: 'ctrl'
    });
  });
