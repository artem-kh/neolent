(function (angular, app) {
    'use strict';
    app.controller('mainCtrl', mainCtrl);
    mainCtrl.$inject = ['$location'];

    function mainCtrl($location){
        var Main = this;
        $location.url()=='/users'?Main.nav_name = 'item2':Main.nav_name = 'item1';

    }

})(window.angular, window.angular.module('neolentApp'));


