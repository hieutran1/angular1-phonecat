'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider', '$analyticsProvider',
    function config($locationProvider, $routeProvider, $analyticsProvider) {
      console.log('[config]: state - ' + document.readyState);
      $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
      $analyticsProvider.withAutoBase(true);  /* Records full path */
      
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]).
  run(function(){
    console.log('[run]: state - ' + document.readyState);
    $(document).ready(function(){
      console.log('[run-window]: state - ' + document.readyState);
    });
  });
