(function (angular) {
    'use strict';
    angular.module('neolentApp.payments', []).controller('paymentsCtrl', paymentsCtrl);
    paymentsCtrl.$inject = ['localStorageService','userService','$state', '$scope'];

    function paymentsCtrl(localStorageService, userService, $state, $scope){
        var Payments = this;


        var localStorageData = localStorageService.get('pay');
        localStorageData?Payments.data = localStorageData:Payments.data = [];



        var generateId = function(){
            var id = Payments.data.length;
            return ++id;
        };

        //Users for select list
        Payments.users = userService.users;
        Payments.all_payments = 'All';




        //Watcher for PaymentSum
        Payments.checked = false;
        $scope.$watch('Payments.checked',function(){
            var sum = 0;
            for(var i=0; i<Payments.data.length; i++){
                    sum += +Payments.data[i].paymentAmount;
            }
            Payments.paymentsSum = sum;
        });


        //Change stateParams
        var stateParams = (function(){
            if($state.params.contactId){
                for(var i=0; i<Payments.data.length; i++){
                    if(Payments.data[i].id == $state.params.contactId){
                        Payments.updateObj=Payments.data[i];
                        return;
                    }else{
                        Payments.updateObj={};
                    }
                }
            }
        })();


        //Add new Payment
        Payments.addPayment = function(pay){
            pay.id = generateId();
            pay.userId = userService.user.id;
            Payments.data.push(pay);
            localStorageService.set('pay', Payments.data);
        };


        //Update Payment
        Payments.updatePayment = function(id){
            for(var i = 0; i<Payments.data.length; i++){
                if(Payments.data[i].id==id){
                    Payments.data[i]=Payments.updateObj;
                    localStorageService.set('pay', Payments.data);
                }
            }

        };
    }

})(window.angular);


