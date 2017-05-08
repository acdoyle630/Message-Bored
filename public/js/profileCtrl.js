/*jshint esversion: 6*/

angular.module('app').controller('ProfileCtrl', ['$scope', '$location', 'profileService', function($scope, $location, profileService){

  let path = $location.$$path;
  let pathArray = path.split('/');
  let pathNumber = pathArray[pathArray.length - 1];

  profileService.getProfile(pathNumber)
  .then(profile=>{
    $scope.profile = profile;
  });





}]);