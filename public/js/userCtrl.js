/*jshint esversion: 6*/

angular.module('app').controller('UsersCtrl', ['$scope', 'userService',
  function($scope, userService){
    //$scope.users = userService;
    userService.getUsers()
    .then(users =>{
      $scope.users = users;
    });
 }]);
