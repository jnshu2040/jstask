/**
 * Created by 1 on 2017/3/17.
 */

angular.module('myApp',['ui.router'])
    .controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
    .controller('AboutController', function ($scope, $route) { $scope.$route = $route;})

    .config(function ($routeProvider) {
        $routeProvider.
        when('/views/login', {
            templateUrl: 'embedded.view/login.html',
            controller: 'HomeController'
        }).
        when('/about', {
            templateUrl: 'embedded.about.html',
            controller: 'AboutController'
        }).
        otherwise({
            redirectTo: '/home'
        });
    });












