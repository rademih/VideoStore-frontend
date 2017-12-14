'use strict';
angular.module('videoStoreApp')
.controller('TvShowCtrl', function (TvShowService) {
    var ctrl = this;

    ctrl.getTvShows = function(){
        TvShowService.getAll()
        .then(function(result) {
            ctrl.tvShows = result;
            console.log(result);
        })
    }
  ctrl.getTvShows();
});
