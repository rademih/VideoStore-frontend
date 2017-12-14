'use strict';
angular.module('videoStoreApp')
.controller('MovieCtrl', function (MovieService) {
    var ctrl = this;

    ctrl.getMovies = function(){
        MovieService.getAll()
        .then(function(result) {
            ctrl.movies = result;
            console.log(result);
        })
    }
    ctrl.getRentedMovies = function(){
        MovieService.getRentedMovies()
        .then(function(result){
            ctrl.rentedMovies = result;
            console.log(result);
        })
    }
  ctrl.getMovies();
  ctrl.getRentedMovies();
});
