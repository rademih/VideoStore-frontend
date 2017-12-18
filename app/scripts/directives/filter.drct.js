'use strict';
angular.module('videoStoreApp')
    .directive('filter', function () {
        return {
            restrict: 'A',
            templateUrl: 'views/filter.tmpl.html',
            scope: {
                sortFilter: '&'
            }
        }
    })
    ;