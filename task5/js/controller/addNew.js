/**
 * Created by 1 on 2017/4/4.
 */
angular.module('myApp')
    .controller('addNewCtrl',function ($scope,$http, $state,$filter) {
        $scope.toLastPage=function () {
            $state.go('tab.list')
        };

        $scope.confirm=function () {
            $scope.dateStr=$filter("date")($scope.joinTime,"yyyyMMdd");
            $scope.addForm={
                name:$scope.name,
                qq:$scope.QQ,
                type:$scope.type,
                school:$scope.school,
                talent:$scope.talent,
                level:$scope.level,
                joinTime:$scope.dateStr,
                wish:$scope.wish
            };
            console.info(JSON.stringify($scope.addForm));
            $http({
                method:"POST",
                url:"/b/student",
                data:JSON.stringify($scope.addForm)
            }).then(function success(resp){
                console.info(resp.data)
            },function error(resp){
                console.error(resp)
            })
        };












    });//});controller










