'use strict';
angular.module('videoStoreApp')
    .factory('MovieService', function($http,ENDPOINT_URI){

        function getAll(sortFilter, titleFilter){
            return $http.get(ENDPOINT_URI+'movies?sortBy='+sortFilter+'&titleFilter='+titleFilter).then(function(result){
                return result.data;
            });
        }
        function getRentedMovies(){
            return $http.get(ENDPOINT_URI+'videos/rented/2').then(function(result){
                return result.data;
            })
        }
        return {
            getAll: getAll,
            getRentedMovies: getRentedMovies
        }
    })