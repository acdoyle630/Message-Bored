

angular.module('app').controller('UsersCtrl', ['$scope',
  function($scope){
  $scope.testScope = 'hello scope';
  $scope.controllerAsTest = 'hello controllerAs';
  localStorage.testLs = 'hello ls';
 }]);
