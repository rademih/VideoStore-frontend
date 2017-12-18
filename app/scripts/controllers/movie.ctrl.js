'use strict';
angular.module('videoStoreApp')
    .controller('MovieCtrl', function (MovieService,) {
        var ctrl = this;
        ctrl.movies =[];
        ctrl.rentedMovies = [];
        ctrl.sortFilter = '';
        
        function getMovies() {
            MovieService.getAll(ctrl.sortFilter)
                .then(function (result) {
                    ctrl.movies = result;
                    getRentedMovies();
                })
        }
        
        function getRentedMovies () {
            MovieService.getRentedMovies()
                .then(function (result) {
                    ctrl.rentedMovies = result;
                    _.map(ctrl.movies, function(movie,key){
                        var rented = _.find(ctrl.rentedMovies, function(rm){
                            return rm.video.id == movie.id;
                        })
                        console.log(rented);
                        movie.rented =rented;
                        return movie;
                    })
                    console.log(ctrl.movies);
                }) 
    }
        ctrl.setSortFilter = function(filter){
            ctrl.sortFilter = filter;
            console.log('filter',filter);
        }
        
        getMovies();
        
});
