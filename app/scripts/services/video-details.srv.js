'use strict';
angular.module('videoStoreApp')
    .factory('VideoDetailsService', function($http,ENDPOINT_URI){

        function getVideo(id){
            return $http.get(ENDPOINT_URI+'video/'+id).then(function(result){
                console.log(result);
                return result.data;
            })
        }
        return {
           
            getVideo: getVideo
        }
    })