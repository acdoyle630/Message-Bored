/*jshint esversion:6*/

angular.module('app')
.service('userService', ['$http', function($http){
  return {
    getUsers: function(){
      return $http.get('/api/users')
      .then(data =>{
        console.log(data);
        return data.data;
      });
    }
  };
}]);