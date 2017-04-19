/**
 * Created by 1 on 2017/4/4.
 */
angular.module('myApp')
    .controller('addNewCtrl',function ($scope,$http, $state,$stateParams) {
        $scope.toLastPage=function () {
            $state.go('tab.list')
        };
        $scope.id=$stateParams.id;
        $scope.createCompanyObj=function () {
            $scope.companyObj={
                company: {
                    name: $scope.name,
                    province: $scope.province = "340000",
                    city: $scope.city = "340001",
                    county: $scope.county = "340002",
                    financing: $scope.financing,
                    approved: $scope.approved,//返回的key是approved,请求的key是approved
                    freezed: $scope.freezed = 0,//同上
                    logo: $scope.logo = "logo",
                    slogan: $scope.slogan,
                    totalNum: $scope.totalNum = 100,
                    summary: $scope.summary,
                    phone: $scope.phone = "18866668888",
                    address: $scope.address = "address地址",
                    map: $scope.map = "map地图string",
                    mail: $scope.mail = "123456@163.com"
                },
                industryList:[{industry:$scope.industry}]
                // tags: $scope.tags=[{tag:"示例标语"}],//数组
                // productList: $scope.productList=[{
                //     id: 1,
                //     name:"产品名称",
                //     slogan:"示例产品标语",
                //     summary: "示例产品介绍",
                //     logo: "产品logo链接"
                // }]
            };
            return $scope.companyObj;
        };
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
        $scope.add_edit__=function () {//判断页面累型
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
            $scope.summary="这个功能没有完成";
            $http({
                method: 'POST',
                url: '/a/u/company',
                data: $scope.createCompanyObj(),
                timeout: "3000"
            }).then(function success(response) {
                console.log(response);
                if(Number(response.data.code)===0) {
                    alert("添加成功");
                    // $scope.getDetail()
                }else{alert("服务器返回的错误"+response.data.code+":"+response.data.message)}
            }, function error(response) {
                alert('服务器未响应' + response)
            })
        };
//修改公司
        $scope.updateDetail=function () {
            if($scope.companyRes){
                $scope.companyRes.company.name=$scope.name;
                $scope.companyRes.company.financing=$scope.financing;
                $scope.companyRes.company.approved=$scope.approved;
                $scope.companyRes.company.slogan=$scope.slogan;
                $scope.companyRes.company.summary=$scope.summary;
                $scope.companyRes.industryList[0].industry=$scope.industry;
            }
            $http({
                method:"PUT",
                url:'/a/u/company/'+$scope.id,
                data:$scope.companyRes,
                timeout:"3000"
            }).then(
                function success(response) {
                    console.log(response);
                    if(Number(response.data.code)===0){alert("修改成功")}
                    else(alert('服务器返回的错误'+response))
                },function error(response){
                    alert("失败"+response)
                }
            )
        };
        $scope.submit=function () {
            if($scope.pageType==="addPage"){$scope.addNew()}
            else{$scope.updateDetail()}
        };


        $scope.companyObj____={
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
            }














        // $scope.confirm=function () {
        //     $scope.dateStr=$filter("date")($scope.joinTime,"yyyyMMdd");
        //     $scope.addForm={
        //         name:$scope.name,
        //         qq:$scope.QQ,
        //         type:$scope.type,
        //         school:$scope.school,
        //         talent:$scope.talent,
        //         level:$scope.level,
        //         joinTime:$scope.dateStr,
        //         wish:$scope.wish
        //     };
        //     console.info(JSON.stringify($scope.addForm));
        //     $http({
        //         method:"POST",
        //         url:"/b/student",
        //         data:JSON.stringify($scope.addForm)
        //     }).then(function success(resp){
        //         console.info(resp.data)
        //     },function error(resp){
        //         console.error(resp)
        //     })
        // };


    });//});controller









