/**
 * Created by 1 on 2017/3/16.
 */
/* 使用ui-router来进行路由定义，需要注入ui.router模块 */
angular.module('myApp',['ui.router','ngMessages','oc.lazyLoad'])
/* 注入$stateProvider，$urlRouterProvider */
.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        };
    };
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });
    /*通过$stateProvider的state()函数来进行路由定义*/
    $urlRouterProvider.otherwise('login');
    $stateProvider
        .state('login', {
                url: "/login",
            controller:"loginCtrl",//引用某个控制器，指定此控制器用来控制此页面
            templateUrl: "views/login.html",
            resolve:{
                    loadMyFile:_lazyLoad([
                        'js/controller/ng-login.js',
                        'css/login.css'
                    ])
            }
        }).state('tab',{
            url: '/tab',
            templateUrl:'views/tab.html',
            controller:'tabCtrl',
            resolve:{
                loadMyFile:_lazyLoad([
                    'css/tabPage.css',
                    'js/controller/tab.js'
                ])
            }
        }).state('tab.list', {
            url:'/list',
            templateUrl:'views/listPage.html',
            controller:'listCtrl',
            resolve:{
                loadMyFile:_lazyLoad([
                    'js/controller/list.js',
                    'js/filter/filter.js',
                    'css/list.css'
                ])
            }
        }).state('tab.personInfo', {
            url:'/personInfo',
            templateUrl:'views/personInfo.html',
            controller:'personInfoCtrl',
            resolve:{
                loadMFile:_lazyLoad([
                    'frame/ng-file-upload.js',
                    'frame/ng-file-upload-shim.js',
                    'js/controller/personInfo.js',
                    'css/personInfo.css'
                ])
            }
        }).state('tab.addNew', {
            url:'/addNew?id',
            templateUrl:'views/addNew.html',
            controller:'addNewCtrl',
            resolve:{
                loadMyFile:_lazyLoad([
                    'frame/umEditor/themes/default/css/umeditor.css',
                    'frame/umEditor/third-party/template.min.js',
                    'frame/umEditor/umeditor.config.js',
                    'frame/umEditor/umeditor.min.js',
                    'frame/umEditor/lang/zh-cn/zh-cn.js',
                    'js/controller/addNew.js',
                    'css/addNew.css'
                ])
            }
        }).state('404', {
            url:'/404',
            templateUrl:'404.html',
            // controller:''
        }
    );
});




// myRouterApp.controller('myController',function($scope){
//
// })


