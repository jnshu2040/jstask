/**
 * Created by 1 on 2017/4/13.
 */
angular.module('myApp')
    .controller('tabCtrl',function ($scope,$state) {
        $scope.signOut=function(){
            localStorage.loginState="false";
            $state.go("login")
        }
    });