/**
 * Created by 1 on 2017/3/24.
 */
angular.module('myApp')
// 分页的方法

    .controller('listCtrl',['$scope','$http','$state','httpService',function ($scope,$http,$state,httpService) {

        httpService.getList()  //页面加载结束触发   //这里直接载入请求了
           .then(
               function successCallback(response){
                  if(response.data.code>=0&&response.data.code<=399){
                      $scope.companyRes=response.data.data;//是个数组。
                      $scope.resData=response.data
                   }
                   else
                       alert("服务器返回的错误代码："+response.data.code)
               }, function errorCallback(response) {
                   if(confirm("服务器超时,是否重试？")){
                       httpService.getList()}
               }
           );
        $scope.delete=function(id,name){
            if(confirm("删除公司:"+name+"？")){
                $scope.delState=true;
                httpService.deleteDetail(id)//删除公司
                    .then(
                        function suc(res){
                            $scope.delState=false;
                            httpService.getList($scope.industry,$scope.approved,$scope.financing,$scope.page)
                        },function err(res){
                            $state.delState=false;
                            alert("删除失败：服务器未响应")
                        }
                    )
            }
        };
        $scope.industry=$scope.approved=$scope.financing="";//初始化变量，可以没有
        $scope.search=function () {//搜索
            httpService.getList($scope.industry,$scope.approved,$scope.financing,"")
        };
        $scope.addNew=function(){$state.go("tab.addNew")};//添加，跳转

        $scope.sumPage=function(){console.log($scope.resData);//计算总页面长度
            if($scope.resData){
                return Math.floor($scope.resData.total/$scope.resData.size)+1
            }else {return "*"}
        };
        $scope.page=1;//初始化为第一页
        $scope.pageNext=function(){console.log($scope.sumPage());//下一页
            if($scope.page<$scope.sumPage()){
                $scope.pageDownState=true;
                $scope.page++;
                httpService.getList($scope.industry,$scope.approved,$scope.financing,$scope.page)
                .then(function(res){
                    if(res.data.code===0){
                        $scope.companyRes=res.data.data;//是个数组。
                        $scope.resData=res.data;
                        $scope.pageDownState=false;
                    }
                },function(res) {
                    alert("请重试"+res);
                    $scope.pageDownState=false;
                    $scope.page--;
                })
            }
        };
        $scope.pageUp=function(){console.log($scope.page);//上一页
            if($scope.page>1){
                $scope.pageUpState=true;
                $scope.page--;
                httpService.getList($scope.industry,$scope.approved,$scope.financing,$scope.page)
                    .then(
                        function(res){
                            if(res.data.code===0){
                                $scope.companyRes=res.data.data;//是个数组。
                                $scope.resData=res.data;
                                $scope.pageUpState=false;
                            }else{
                                alert("服务器返回的错误代码："+res.data.code)
                            }
                        }, function(res) {
                            alert("请重试"+res);
                            $scope.pageUpState=false;
                            $scope.page++;
                        }
                    )
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




