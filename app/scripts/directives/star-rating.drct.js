
'use strict';
angular.module('videoStoreApp')
    .directive('starRating', function () {

        var linker = function (scope, elem, attrs) {
            scope.stars = [];
            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < 5; i++) {
                    scope.stars.push({
                        filled: i < scope.rating,
                        editable: scope.isEditable=='true'
                    });
                }
            };
            scope.toggle = function (index) {
                console.log(scope.isEditable);
                if (scope.isEditable=='true') {
                    scope.rating = index + 1;
                    
                }
                console.log(scope.rating);
            };
            scope.$watch('rating', function (oldVal, newVal) {
                updateStars();
            });
        }

        return {
            restrict: 'A',
            templateUrl: 'views/star-rating.tmpl.html',
            scope: {
                rating: '=',
                isEditable: '@'        
                },
            link: linker
        }
    })
    ;