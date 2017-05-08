/*jshint esversion: 6*/

angular.module('app')
.service('topicService', ['$http', function($http){
  return{
    getTopics: function(){
      return $http.get('/api/topics')
      .then(data =>{
        return data.data;
      });
    },
    postTopic: function( topic, id ){
      return $http.post('/api/topics',
        {
          "name": topic,
          "created_by": id
        })
        .then(data=>{
          return data;
        });
      }
    };
}]);