/*jshint esversion: 6*/

angular.module('app').controller('MessageCtrl', ['$scope', 'messageService',
  function($scope, messageService){





  $scope.allMessages = function(){
    messageService.getMessages()
    .then(messages =>{
      $scope.messages = messages;
    });
  };



  $scope.createMessage = function(){
    messageService.postMessage($scope.body, $scope.topic, $scope.author)
    .then(postedMessage =>{
      $scope.postedMessage = postedMessage;
    });
  };








 }]);
