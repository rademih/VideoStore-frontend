'use strict';
angular.module('videoStoreApp')
  .directive('search', function () {
    return {
      restrict: 'A',
      templateUrl: 'views/search.tmpl.html',
      link: function (scope) {
        scope.search = function (test) {
          scope.$broadcast('onChange', scope.test);
        }
      }
    }
  })
  ;