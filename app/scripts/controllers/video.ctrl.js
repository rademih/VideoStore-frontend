'use strict';
angular.module('videoStoreApp')
    .controller('VideoCtrl', function (VideoService, $stateParams, $state) {
        var ctrl = this;
        ctrl.video = {};
        function getAll() {
            VideoService.getAll()
                .then(function (result) {
                    ctrl.videos = result;
                    console.log('result', result);
                })
        }
        function getVideo(id) {
            VideoService.getVideo(id)
                .then(function (result) {
                    ctrl.video = result;
                    ctrl.video.date = moment(ctrl.video.releaseDate).toDate();
                    console.log(ctrl.video.date)
                    if (ctrl.video.boxOffice == undefined) {
                        ctrl.video.type = 'tvShow';
                    }
                    else {
                        ctrl.video.type = 'movie';
                    }
                    console.log("video", ctrl.video);
                })
        }
        function getDirectors() {
            VideoService.getDirectors()
                .then(function (result) {
                    ctrl.directors = result;
                    console.log('directors', ctrl.directors);
                }
                )
        }
        function createMovie(video) {
            VideoService.createMovie(video)
                .then(function (result) {
                    getAll();
                })
        }
        function createTvShow(video) {
            VideoService.createTvShow(video)
                .then(function (result) {
                    getAll();
                })
        }
        function updateMovie(video) {
            VideoService.updateMovie(video)
                .then(function (result) {
                    console.log("updated");
                })
        }
        function updateTvShow(video) {
            VideoService.updateTvShow(video)
                .then(function (result) {
                    console.log("updated");
                })
        }
        ctrl.deleteVideo = function (id) {
            if (confirm('Are you sure?')) {
                VideoService.deleteVideo(id)
                    .then(function (result) {
                        console.log("deleted video");
                        $state.reload();
                    })
            }
        }
        ctrl.submit = function () {
            ctrl.video.releaseDate = ctrl.video.date;
            if (ctrl.video.id === undefined) {
                if (ctrl.video.type == 'movie') {
                    createMovie(ctrl.video);
                    console.log("created movie");
                }
                else {
                    createTvShow(ctrl.video);
                    console.log("created tv show");
                }
            }
            else {
                if (ctrl.video.type == 'movie') {
                    updateMovie(ctrl.video);
                }
                else {
                    updateTvShow(ctrl.video);
                }
            }
            $state.transitionTo('admin.list');
        }
        getAll();
        getDirectors();
        if ($stateParams.id) {
            getVideo($stateParams.id);
        }
    });