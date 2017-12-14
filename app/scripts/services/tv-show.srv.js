'use strict';
angular.module('videoStoreApp')
    .factory('TvShowService', function($http,ENDPOINT_URI){

        function getAll(){
            return $http.get(ENDPOINT_URI+'tvShows').then(function(result){
                console.log(result);
                return result.data;
            });
        }
        return {
            getAll: getAll
        }
    })