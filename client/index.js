'use strict';

angular.module('angular-prototype', ['ui.router', 'ngMessages', 'firebase'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {url:'/', templateUrl:'/views/general/home.html', controller: 'HomeCtrl'})
      .state('faq', {url:'/faq', templateUrl:'/views/general/faq.html'})
      .state('contact', {url:'/contact', templateUrl:'/views/general/contact.html'})
      .state('todos', {url:'/todos', templateUrl:'/views/todos/index.html', controller: 'TodosCtrl'});
  }]);
