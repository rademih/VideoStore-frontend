'use strict';
angular.module('videoStoreApp')
    .factory('MovieService', function($http,ENDPOINT_URI){

        function getAll(){
            return $http.get(ENDPOINT_URI+'movies').then(function(result){
                console.log(result);
                return result.data;
            });
        }
        function getRentedMovies(){
            return $http.get(ENDPOINT_URI+'videos/rented/2').then(function(result){
                console.log(result);
                return result.data;
            })
        }
        return {
            getAll: getAll,
            getRentedMovies: getRentedMovies
        }
    })