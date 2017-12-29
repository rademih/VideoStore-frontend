'use strict';
angular.module('videoStoreApp')
    .controller('MovieCtrl', function (MovieService,$scope) {
        var ctrl = this;
        ctrl.movies =[];
        ctrl.rentedMovies = [];
        ctrl.sortFilter = '';
        ctrl.titleFilter = '';
        
        function getMovies(sortFilter, titleFilter) {
            MovieService.getAll(ctrl.sortFilter, ctrl.titleFilter)
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
                        movie.rented =rented;
                        return movie;
                    })
                }) 
    }
        ctrl.setSortFilter = function(filter){
            ctrl.sortFilter = filter;
        }

        $scope.$watch('ctrl.sortFilter', function(newValue, oldValue){
            getMovies(newValue, ctrl.titleFilter);
        })

        $scope.$on('onChange', function(event, args) {
            ctrl.titleFilter = args;
            getMovies(ctrl.sortFilter, ctrl.titleFilter);
            
        })
        
        getMovies();
        
});
