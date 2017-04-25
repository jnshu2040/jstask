/**
 * Created by 1 on 2017/4/4.
 */
angular.module('myApp')
    .controller('addNewCtrl',function ($scope,$http, $state,$stateParams,httpService,companyFactory,companyProvider) {
//取消
        $scope.toLastPage=function () {
            $state.go('tab.list')
        };
        $scope.id=$stateParams.id;//获取id

//获取公司明细
        $scope.getDetail=function (){
            $http.get('/a/company/' + $scope.id).then(
                function success(response) {
                    console.log(response);
                    if(Number(response.data.code)===0) {
                        $scope.companyRes = response.data.data;
                        console.log($scope.companyRes);
                        $scope.id = $scope.companyRes.company.id;
                        $scope.name = $scope.companyRes.company.name;
                        $scope.province = $scope.companyRes.company.province;
                        $scope.city = $scope.companyRes.company.city;
                        $scope.county = $scope.companyRes.company.county;
                        $scope.financing = $scope.companyRes.company.financing;
                        $scope.approved = $scope.companyRes.company.approved;
                        $scope.freezed = $scope.companyRes.company.freezed;
                        $scope.logo = $scope.companyRes.company.logo;
                        $scope.slogan = $scope.companyRes.company.slogan;
                        $scope.totalNum = $scope.companyRes.company.totalNum;
                        $scope.summary = $scope.companyRes.company.summary;
                        $scope.phone = $scope.companyRes.company.phone;
                        $scope.address = $scope.companyRes.company.address;
                        $scope.map = $scope.companyRes.company.map;
                        $scope.mail = $scope.companyRes.company.mail;
                        $scope.productList = $scope.companyRes.productList;
                        $scope.tagList = $scope.companyRes.tagList;
                        $scope.industryList = $scope.companyRes.industryList;
                        $scope.industry = $scope.companyRes.industryList[0].industry;
                    }else {
                        alert("服务器返回的错误信息："+response.data);
                        console.log(response.data)
                    }
                }, function error(response) {
                    alert("请求失败"+response)
                }
            )
        };
//判断页面累型
        $scope.add_edit__=function () {
            if ($scope.id>0){
                $scope.add_edit= "保存";
                $scope.pageType="editPage";
                $scope.getDetail();
            }
            else {
                $scope.add_edit="新增";
                $scope.pageType="addPage";
            }
        };$scope.add_edit__();

//新增公司
        $scope.addNew=function() {
            $scope.er=true;
            httpService.addNew(
                companyFactory.companyObj(
                    $scope.name,
                    $scope.financing,
                    $scope.approved,
                    $scope.slogan,
                    $scope.summary,
                    $scope.industry
                )
            )
            .then(function success(response) {
                console.log(response);
                if(Number(response.data.code)===0) {alert("添加成功");
                    $state.go("tab.list");
                }else{alert("服务器返回的错误"+response.data.code+":"+response.data.message)}
            }, function error(response) {
                alert('服务器未响应' + response);
                $scope.er=false;
            })
        };
//修改公司
        $scope.updateDetail=function () {//自定义的provider
            companyProvider.sayName($scope.name);
            if($scope.companyRes){//修改的内容，如果作为页面的变量，就不用手动赋值了。
                $scope.companyRes.company.name=$scope.name;
                $scope.companyRes.company.financing=$scope.financing;
                $scope.companyRes.company.approved=$scope.approved;
                $scope.companyRes.company.slogan=$scope.slogan;
                $scope.companyRes.company.summary=$scope.summary;
                $scope.companyRes.industryList[0].industry=$scope.industry;
            }
            $scope.er=true;
            httpService.edit($scope.id,$scope.companyRes)
                .then(
                    function success(response) {
                        console.log(response);
                        $scope.er=false;
                        if(Number(response.data.code)===0){alert("修改成功");

                        }
                        else(alert('服务器返回的错误'+response))
                    },function error(response){alert("失败"+response);
                    $scope.er=false;
                }
            )
        };
        $scope.submit=function () {
            if($scope.pageType==="addPage"){$scope.addNew()}
            else{$scope.updateDetail()}
        };
        $scope.editorContent = '';











    });//});controller











