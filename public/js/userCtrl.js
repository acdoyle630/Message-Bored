/*jshint esversion: 6*/

angular.module('app').controller('UsersCtrl', ['$scope', 'userService',
  function($scope, userService){

    $scope.id = undefined;

    userService.getUsers()
    .then(users =>{
      $scope.users = users;
    });

    $scope.findUserById = function(){
    userService.getUserById($scope.id)
    .then(userById =>{
      $scope.userById = userById;
    });
  };
 }]);
