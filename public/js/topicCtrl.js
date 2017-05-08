/*jshint esversion: 6*/


angular.module('app').controller('TopicCtrl', ['$scope', 'topicService',
  function($scope, topicService){

    topicService.getTopics()
    .then(topics =>{
      $scope.topics = topics;
    });


    $scope.createTopic = function(){
      topicService.postTopic($scope.topic, $scope.id)
      .then(newTopic =>{
        $scope.newTopic = newTopic;
      });
    };







 }]);
