/*jshint esversion: 6*/

angular.module('app')
.service('loginService', ['$http', function($http){

  return {



    postUser: function(name, password){
        console.log(name);
        return $http.post(`/api/users`,(
          {
            "name":name,
            "password": password
          }))
        .then(data=>{
          console.log('data');
          return data.data;
        });
      },
    checkPassword: function(username, password){
      console.log('checking');
      return $http.post('/loginAuth', (
      {
        "username": username,
        "password": password
      }))
      .then(data=>{
        return data;
      });
    }





  };
}]);