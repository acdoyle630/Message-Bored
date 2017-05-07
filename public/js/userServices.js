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
    },
    getUserById: function(id){
      return $http.get(`/api/users/${id}`)
      .then(data =>{
        console.log(data);
        return data.data;
      });
    },
    postUser: function(name){
      console.log(name);
      return $http.post(`/api/users`, JSON.stringify({"name":name}))
      .then(data=>{
        console.log('data');
        return data.data;
      });
    }
  };
}]);