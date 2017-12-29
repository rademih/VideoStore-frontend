'use strict';

angular.module('videoStoreApp')
  .controller('MainCtrl', function () {
    var ctrl = this;
    ctrl.setTitleFilter = function(search) {
      console.log('search', search);
  }
  });
