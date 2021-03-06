/*jshint esversion: 6*/
//const controller = require('/controller')

angular.module('app', ['ngRoute'])
.config([
  '$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){

    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
      })
      .when('/login',{
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/users/:id', {
        templateUrl: '/views/usersId.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/users', {
        templateUrl: '/views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/messages', {
        templateUrl: '/views/messages.html',
        controller: 'MessageCtrl',
        controllerAs: 'messages'
      })
      .when('/topics', {
        templateUrl: '/views/topics.html',
        controller: 'TopicCtrl',
        controllerAs: 'topicController'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);


// .controller('UsersCtrl', ['$scope',
//   function($scope){
//   $scope.testScope = 'hello scope';
//   $scope.controllerAsTest = 'hello controllerAs';

//   localStorage.testLs = 'hello ls';
//  }]);
