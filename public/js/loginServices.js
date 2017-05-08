/*jshint esversion: 6*/

angular.module('app')
.service('loginService', ['$http', function($http){

  return {



    postUser: function(name, password){
        console.log(name);
        return $http.post(`/api/users`, JSON.stringify(
          {
            "name":name,
            "password": password
          }))
        .then(data=>{
          console.log('data');
          return data.data;
        });
      }





  };
}]);