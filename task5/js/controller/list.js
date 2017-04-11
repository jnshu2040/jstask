/**
 * Created by 1 on 2017/3/24.
 */
angular.module('myApp')
// 分页的方法

    .controller('listCtrl',['$scope','$http',function ($scope,$http,$state) {
        $scope.studentType=[
            // 公司行业 industry 0-移动互联网 1-电子商务 2-企业服务 3-O2O 4-教育 5-金融 6-游戏
            "移动互联网",  "电子商务", "企业服务", "O2O", "教育","金融","游戏"
        ];
        $scope.studentTalent=["未认证","已认证"];
        $scope.studentLevel=[
            //1:0基础 2:3个月内 3:6个月内 4:1年内 5:3年内 6:3年以上
            // "0基础","3个月内","6个月内","一年内", "3年内","3年以上"
            // financing 0-无需融资 1-天使轮 2-A轮 3-B轮 4-C轮 5-D轮及以上 6-上市公司
            "无需融资","天使轮","A轮","B轮","C轮","D轮及以上","上市公司"
        ];
        $http.get("/a/company/search")
            .then(function successCallback(response){
                    console.info(response.data.data[0]);
                    if(response.data.code>=0&&response.data.code<=399){
                        $scope.studentsRes=response.data.data;//是个数组。
                        console.log($scope.studentsRes);
                        $scope.maxPage=Math.floor(($scope.studentsRes.length)/($scope.number))+1;
                    }
                    else alert("服务器返回的错误代码："+response.data.code)
                },
                function errorCallback(response) {
                    console.error(response)
                }
            );
        $scope.edits=function(){
            // $http.
            // 跳转到个人信息页面
        };
        $scope.deletes=function(num){
            $http.post("/b/students","",{params:{id:num}})//删除学生
                .then(function successCallback(response){
                    console.info(response.data)
                    },function errorCallback(){

                    }
                )
        };
        $scope.addNew=function(){$state.go("tab.addNew")};
        //变量，初始化
        $scope.type=0;$scope.talent=0;$scope.level=0;
        // $scope.type0=0;$scope.talent0=0;$scope.level0=0;
        //变量，搜索
        // $scope.search=function () {
        //     $scope.type=$scope.type0;
        //     $scope.talent=$scope.talent0;
        //     $scope.level=$scope.level0;
        //     $scope.page=1;
        // }
        //翻页//初始化
        $scope.studentsRes=[];
        $scope.page=1;$scope.number=10;$scope.students=[];
        $scope.pageUp=function(){
            $scope.sumPage();
            if($scope.page>1){$scope.page--}
        };
        $scope.pageDown=function(){
            $scope.sumPage();
            if($scope.page<$scope.maxPage){$scope.page++}
        }
        $scope.sumPage=function () {//求最大页数的函数。在repeat完毕后执行？
            $scope.maxPage=Math.floor(($scope.students.length)/($scope.number))+1;
        }
    }])







