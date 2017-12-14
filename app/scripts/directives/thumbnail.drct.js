'use strict';
angular.module('videoStoreApp')
  .directive('thumbnail', function () {
    var linker = function (scope, element, attrs) {
    }
    

      
    return {
      restrict: 'A',
      templateUrl: 'views/thumbnail.tmpl.html',
      scope: {
        movie: "="
      },
      link: linker
    }
  })
  ;