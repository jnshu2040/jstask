/**
 * Created by 1 on 2017/3/24.
 */
angular.module('myApp')
// 分页的方法

    .controller('listCtrl',['$scope','$http','$state',function ($scope,$http,$state) {

        $scope.getList=function(industry,approved,financing,page){
            $http({
                method:"get",
                url:"/a/company/search/",
                params:{
                    "industry": industry,
                    "approved": approved,
                    "financing":financing,
                    "page":page
                },
                timeout:"2000"
            }).then(function successCallback(response){
                    console.info(response.data.data[0]);
                    if(response.data.code>=0&&response.data.code<=399){
                        $scope.companyRes=response.data.data;//是个数组。
                        $scope.resData=response.data;
                        console.log($scope.companyRes);
                        // $scope.maxPage=Math.floor(($scope.studentsRes.length)/($scope.number))+1;
                    }
                    else alert("服务器返回的错误代码："+response.data.code)
                }, function errorCallback(response) {
                        console.error("服务器超时："+response);
                        if(confirm("服务器超时,是否重试？")){$scope.getList()}
                }
            );
        };$scope.getList("","","","");
        $scope.edit=function(){
            // $http.
            // 跳转到个人信息页面
        };
        $scope.delete=function(id,name){
            if(confirm("删除公司:"+name+"？")){
                $http.delete("/a/u/company/"+id,"")//删除公司
                    .then(function successCallback(response){
                        console.info("删除公司返回的信息"+response.data);
                        $scope.getList($scope.industry,$scope.approved,$scope.financing,$scope.page)
                        },function errorCallback(response){
                            console.log("失败"+response.data);
                            alert("删除失败，请重新登录")
                        }
                    )
            }

        };
        $scope.industry=$scope.approved=$scope.financing="";
        $scope.search=function () {
            $scope.getList($scope.industry,$scope.approved,$scope.financing,"")
        };
        $scope.addNew=function(){$state.go("tab.addNew")};

        $scope.sumPage=function(){console.log($scope.resData);
            return Math.floor($scope.resData.total/$scope.resData.size)+1
        };
        $scope.page=1;
        $scope.pageNext=function(){console.log($scope.sumPage());
            if($scope.page<$scope.sumPage()){
                $scope.page++;
                $scope.getList($scope.industry,$scope.approved,$scope.financing,$scope.page)
            }
        };
        $scope.pageUp=function(){console.log($scope.page);
            if($scope.page>1){
                $scope.page--;
                $scope.getList($scope.industry,$scope.approved,$scope.financing,$scope.page)
            }
        }


    }]);


// $scope.studentType=[
//     // 公司行业 industry 0-移动互联网 1-电子商务 2-企业服务 3-O2O 4-教育 5-金融 6-游戏
//     "移动互联网",  "电子商务", "企业服务", "O2O", "教育","金融","游戏"
// ];
// $scope.studentTalent=["未认证","已认证"];
// $scope.studentLevel=[
//     //1:0基础 2:3个月内 3:6个月内 4:1年内 5:3年内 6:3年以上
//     // "0基础","3个月内","6个月内","一年内", "3年内","3年以上"
//     // financing 0-无需融资 1-天使轮 2-A轮 3-B轮 4-C轮 5-D轮及以上 6-上市公司
//     "无需融资","天使轮","A轮","B轮","C轮","D轮及以上","上市公司"
// ];




