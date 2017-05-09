/*jshint esversion: 6*/

angular.module('app').controller('LoginCtrl', ['$rootScope','$scope', '$location', 'loginService', function($rootScope, $scope, $location, loginService){
  //console.log('log in page');

  let usern = $location;
  console.log(usern);


  $scope.createUser = function(){
    console.log('hit create user function');
      loginService.postUser($scope.name, $scope.password)
      .then(postedUser =>{
        $scope.postedUser = postedUser;
      });
    };

  $scope.login = function(){
    //console.log('fire login');
    loginService.checkPassword($scope.nameIn, $scope.passwordIn)
    .then(userInfo =>{
      console.log(userInfo);
      localStorage.setItem('userInfo');
      $rootScope.userInfo = userInfo;
    })
    .catch(err=>{
      console.log(err);
    });
  };







}]);