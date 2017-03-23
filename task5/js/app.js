/**
 * Created by 1 on 2017/3/16.
 */
/* 使用ui-router来进行路由定义，需要注入ui.router模块 */
angular.module('myApp',['ui.router'])
/* 注入$stateProvider，$urlRouterProvider */
.config(function($stateProvider,$urlRouterProvider){
    /*通过$stateProvider的state()函数来进行路由定义*/


    $urlRouterProvider.otherwise('login');
    $stateProvider
        .state('login', {
                url: "/login",
            controller:"loginCtrl",//引用某个控制器，指定此控制器用来控制此页面
            templateUrl: "views/login.html"
        }).state('tab',{
            url: '/tab',
            templateUrl:'views/tab.html',
            controller:''
        }).state('tab.list', {
            url:'/list',
            templateUrl:'views/listPage.html',
            // controller:''
        }).state('tab.personalInformation',
        {
            url:'/personalInformation',
            templateUrl:'views/personalInformation.html',
            // controller:''
        }).state('tab.addNew',
        {
            url:'/addNew',
            templateUrl:'views/addNew.html',
            // controller:''
        }).state('404',
        {
            url:'/404',
            templateUrl:'404.html',
            // controller:''
        }
    );
});




// myRouterApp.controller('myController',function($scope){
//
// })


