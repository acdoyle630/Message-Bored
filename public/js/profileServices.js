/*jshint esversion: 6*/

angular.module('app')
.service('profileService', ['$http', function($http){
  return {
    getProfile: function(id){
      return $http.get(`/api/users/${id}`)
      .then(data =>{
        return data.data;
      });
    },
    getMessages: function(id){
      return $http.get(`/api/messages/by-user/${id}`)
      .then(data=>{
        return data.data;
      });
    }
  };
}]);