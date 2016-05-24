(function (angular) {
    'use strict';
    angular.module('neolentApp.users', []).controller('userCtrl', userCtrl);

    userCtrl.$inject = ['userService', 'localStorageService'];

    function userCtrl(userService, localStorageService) {
        var User = this;

        //Get current user from userService
        User.currentUser = userService.user;

        User.user_changed = false;


        var users = userService.users;

        //Update user
        User.updateUserName = function (id) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    users[i].name = User.currentUser.name;
                }
            }
            localStorageService.set('users', users);
        };
    }

})(window.angular);


