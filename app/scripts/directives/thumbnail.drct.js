'use strict';
angular.module('videoStoreApp')
.directive('thumbnail', function(){
  var linker = function(scope,element, attrs){
    console.log("rented",scope.isRented);

  }
    return {
      restrict: 'A',
      templateUrl: 'views/thumbnail.tmpl.html',
      scope: {
      },
    }
  })
  ;