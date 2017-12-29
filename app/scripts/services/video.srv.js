'use strict';
angular.module('videoStoreApp')
    .factory('VideoService', function ($http, ENDPOINT_URI) {

        function getAll() {
            return $http.get(ENDPOINT_URI + 'videos').then(function (result) {
                return result.data;
            });
        }
        function getVideo(id){
            return $http.get(ENDPOINT_URI+'video/'+id).then(function(result){
                console.log(result);
                return result.data;
            })
        }
        function getDirectors() {
            return $http.get(ENDPOINT_URI + 'directors').then(function (result) {
                return result.data;
            });
        }
        function createMovie(video){
            return $http.post(ENDPOINT_URI+'movie',video).then(function (result){
                return result.data;
            })
        }
        function createTvShow(video){
            return $http.post(ENDPOINT_URI+'tvShow',video).then(function (result){
                return result.data;
            })
        }
        function updateMovie(video){
            return $http.put(ENDPOINT_URI+'movie',video).then(function (result){
                return result.data;
            })
        }
        function updateTvShow(video){
            return $http.put(ENDPOINT_URI+'tvShow',video).then(function (result){
                return result.data;
            })
        }
        function deleteVideo(id){
            return $http.delete(ENDPOINT_URI+'video/delete/'+id).then(function (result){
                return result.data;
            })
        }
        return {
            getAll: getAll,
            getVideo: getVideo,
            getDirectors: getDirectors,
            createMovie: createMovie,
            createTvShow: createTvShow,
            updateMovie: updateMovie,
            updateTvShow: updateTvShow,
            deleteVideo: deleteVideo
        }
    })