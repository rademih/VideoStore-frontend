'use strict';
angular.module('videoStoreApp')
.controller('VideoDetailsCtrl', function (VideoDetailsService,$stateParams) {
    var ctrl = this;
   
    ctrl.getVideo = function(id){
        VideoDetailsService.getVideo(id)
        .then(function(result) {
            ctrl.video = result;
            console.log('result',result);
            ctrl.video.date = moment(ctrl.video.releaseDate).format("DD.MM.YYYY.");
            })
    }
    ctrl.id = $stateParams.id;
    ctrl.getVideo(ctrl.id);
    
});
