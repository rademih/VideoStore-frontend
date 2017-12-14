'use strict';
angular.module('videoStoreApp')
    .controller('MovieCtrl', function (MovieService) {
        var ctrl = this;

        ctrl.getMovies = function () {
            MovieService.getAll()
                .then(function (result) {
                    ctrl.movies = result;
                    console.log(result);
                })
        }
        ctrl.getRentedMovies = function () {
            MovieService.getRentedMovies()
                .then(function (result) {
                    ctrl.rentedMovies = result;
                    console.log(result);
                })
        }      
       ctrl.getRentedStatus = function(){
        ctrl.getMovies();
        ctrl.getRentedMovies();
        for(movie in ctrl.movies){
            console.log('test',movie);
        }
        return ctrl.movies;
       }
        ctrl.getMovies();
        ctrl.getRentedMovies();
        var nesto = ctrl.getRentedStatus();
        console.log(nesto);        
  
});
