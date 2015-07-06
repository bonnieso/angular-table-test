'use strict';

angular.module('heimdall', [])
.factory('Data', function($http) {
  return {
    getData: function() {
      return $http.get("http://localhost:3000/data");
    }
  }
})
.controller('MainCtrl', function($scope, Data){
  Data.getData().success(function(data) {
    $scope.dataDisplay = data;
    
    $scope.getColor = function(){

      if($(".cell").text()==="Yes"){
        return "green";
      }
      if($(".cell").text()==="No"){
        return "red";
      }
      if($(".cell").text()==="Partial"){
        return "orange";
      }
      else{
        return "red";
      }
    };
    
    console.log($(".cell").text());
    
    $scope.coloring = function(){
      $scope.qcolor = true;
    };
    
    $scope.uncoloring = function(){
      $scope.qcolor = false;
    };
    
    $scope.highlight = function(){
      if ($scope.qcolor === true){
      return "highlight";
      }
      
    }; 
    
  }).catch(function(err) {
    console.error(err);
  });
});
