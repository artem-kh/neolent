(function (angular) {
    'use strict';

    var app = angular.module('neolentApp', [
        'LocalStorageModule',
        'ui.router',
        'neolentApp.payments',
        'neolentApp.users',
        'neolentApp.userService',
        'neolentApp.filters'
    ]);


    //CONFIGURATION FOR STATE PROVIDER
    app.config(['$stateProvider', '$urlRouterProvider', "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('payments', {
                    url: "/payments",
                    templateUrl: "templates/payments.html",
                    controller: 'paymentsCtrl',
                    controllerAs: 'Payments'
                })
                .state('payments.create', {
                    url: "/create",
                    views: {
                        create: {templateUrl: 'templates/create.html'}
                    },
                    controller: 'paymentsCtrl',
                    controllerAs: 'Payments'

                })
                .state('payments.update', {
                    url: "/:contactId",
                    views: {
                        create: {templateUrl: 'templates/update.html'}
                    },
                    controller: 'paymentsCtrl',
                    controllerAs: 'Payments'
                })
                .state('users', {
                    url: "/users",
                    templateUrl: "templates/user.html",
                    controller: "userCtrl",
                    controllerAs: "User"
                });
            $urlRouterProvider.otherwise("/payments");
            $locationProvider.html5Mode(true);
        }])


        // CONFIGURATION FOR LOCAL STORAGE
        .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('neolent')
                .setStorageType('localStorage')
                .setStorageCookie(45, '/')
                .setNotify(true, true);
        }]);


    // BOOTSTRAPING APP
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['neolentApp']);
    });
})(window.angular);

