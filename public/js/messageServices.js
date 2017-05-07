/*jshint esversion:6*/

angular.module('app')
.service('messageService',['$http', function($http){
  return {
    getMessages: function(){
      return $http.get('/api/messages/latest')
      .then(data =>{
        return data.data;

      });
    },
    postMessage: function(body, topic, author){
      return $http.post(`/api/messages`,
      {
        "body": body,
        "topic_id": topic,
        "author_id": author
      })
      .then(data=>{
        return data.data;
      });
    }
  };
}]);