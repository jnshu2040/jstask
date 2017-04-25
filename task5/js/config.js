/**
 * Created by 1 on 2017/3/16.
 */
/* 使用ui-router来进行路由定义，需要注入ui.router模块 */
angular.module('myApp',['ui.router','ngMessages','oc.lazyLoad'])
/* 注入$stateProvider，$urlRouterProvider */
.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider,$provide){
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        };
    };
    $ocLazyLoadProvider.config({//懒加载配置
        debug: false,//？
        events: true//？
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
                    'js/service/service.js',
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
                    'frame/wangEditor/dist/css/wangEditor.css',
                    // 'frame/wangEditor/dist/js/lib/jquery-2.2.1.js',
                    'frame/wangEditor/dist/js/wangEditor.js',
                    // 'frame/umEditor/themes/default/css/umeditor.css',
                    // 'frame/umEditor/third-party/template.min.js',
                    // 'frame/umEditor/umeditor.config.js',
                    // 'frame/umEditor/umeditor.min.js',
                    // 'frame/umEditor/lang/zh-cn/zh-cn.js',
                    'css/addNew.css',
                    'js/directive/directive.js',
                    'js/service/service.js',
                    'js/factory/factory.js',
                    'js/controller/addNew.js'
                ])
            }
        }).state('404', {
            url:'/404',
            templateUrl:'404.html'
            // controller:''
        }
    );

    $provide.provider('companyProvider',function(){
        this.$get=function(){//$get是用来返回service和factory的，还有其它方法可用。
            return{
                companyModel:{
                    "company":{
                        "id":58,
                        "name":"修改盈泰财富云",
                        "province":"1",
                        "city":"1",
                        "county":"1",
                        "financing":2,
                        "approved":1,
                        "freezed":0,
                        "logo":"http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
                        "slogan":"盈泰财富云，互联网+财富管理，中国三方财富管理行业最佳运营服务商，互联网产品有私募云App和云台系统",
                        "totalNum":100,
                        "summary":"北京",
                        "phone":"",
                        "address":"",
                        "map":"",
                        "mail":""
                    },
                    "productList":[{
                        "name":"私募云",
                        "slogan":"",
                        "logo":"http://carrots.ks3-cn-beijing.ksyun.com/3/0053bac4-c84e-47e4-92e1-31f5ec1804e0.png",
                        "summary":"私募云"
                    }],
                    "industryList":[{"industry":0},{"industry":5}],
                    "tagList":[{"tag":"技能培训"},{"tag":"岗位晋升"},{"tag":"年终分红"},{"tag":"股票期权"},{"tag":"扁平管理"},{"tag":"五险一金"},{"tag":"带薪年假"},{"tag":"弹性工作"},{"tag":"快速成长"}]
                },
                sayName:function(name){
                    alert('当前公司：【'+name+'】')
                }

            }

        };
        // this.sayName=function () {
        //     return function(name){
        //         alert()
        //     };
        //
        // }

    })







});//.config结束





// myRouterApp.controller('myController',function($scope){
//
// })


