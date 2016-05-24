(function (angular) {
    'use strict';
    angular.module('neolentApp.filters', [])

        .filter('paymentsFilter', paymentsFilter);

    function paymentsFilter() {
        return function (items, text) {
            if (text == 'All' || text == null) {
                return items;
            } else {
                var filtered = [];
                for (var i = 0; i < items.length; i++) {
                    if (items[i].userId == text) {
                        filtered.push(items[i]);
                    }
                }
                return filtered;
            }
        }
    }
})(window.angular);
