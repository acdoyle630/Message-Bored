/*jshint esversion: 6*/

angular.module('app').controller('LoginCtrl', ['$scope', 'loginService', function($scope, loginService){

  $scope.createUser = function(){
      loginService.postUser($scope.name, $scope.password)
      .then(postedUser =>{
        $scope.postedUser = postedUser;
      });
    };







}]);