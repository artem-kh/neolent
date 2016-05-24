(function (angular) {
    'use strict';
    angular.module('neolentApp.userService', []).factory('userService', userService);

    userService.$inject = ['localStorageService'];

    function userService(localeStorageService){
        var Service = this;

        // GET USERS FROM LOCALE STORAGE
        var users = localeStorageService.get('users');
        users?Service.users = users:Service.users = [];

        var generateId = function(){
            var id = Service.users.length;
            return ++id;
        };

        //CREATE NEW ISER
        var newUser = (function(){
            Service.users.push({id: generateId(), name:'User' + generateId()});
            localeStorageService.set('users', Service.users);

        })();

        //GET CURRENT USER
        Service.user = Service.users[Service.users.length-1];

        return Service;
    }


})(window.angular);
