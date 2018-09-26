// Code goes here
(function(){
    var app = angular.module('githubViewer',[]);
    
    var MainController = function($scope, $http) {
      
      var onUserComplete = function(response) {
        console.log(response.data);
        $scope.person = response.data;
      }
      
      $http.get('https://api.github.com/users/supunbula').then(onUserComplete);
      $scope.message= 'Hello !';
      
    };
    
    app.controller("MainController", ['$scope','$http',MainController]);
    
    }());