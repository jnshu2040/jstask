/**
 * Created by 1 on 2017/3/21.
 */
angular.module('myApp')//这是模块，不是模型。
//使用$scope来调用控制器，$scope是作用域/控制范围，用来保存模型的对象
//
.controller('loginCtrl',function($scope,$http,$state) {//把$scope作为一个参数传递。

    //在此，$scope是保存控制器内的模型的对象，它就是个对象。
    //$scope对象保存了这个控制器所控制的页面的所有绑定的model和事件，成为它的方法
    //loginCtrl内的模型和函数，都是被作为参数传递的$scope的属性或方法。
    $scope.submit = function () {//在此定义
        $http({//$http是
            method: 'post',
            url: "/carrots-admin-ajax/a/login/",//现在是学员接口，要重新设置nginx，问师兄取。
            params: {//post请求只能用params，不能用data。
                name: $scope.inputName,
                pwd:  $scope.inputPassword
            },
        }).then(function successCallback(response) {
            // 请求成功执行代码
            console.info(response);
            switch(response.data.code){
                case 0:
                    console.log($state.go);
                    $state.go("tab");break;
                default: alert(response.data.message)
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
            console.error(response);
        });
        console.log(($scope.inputName)+($scope.inputPassword));
    };
});//myApp.controller











