/**
 * Created by 1 on 2017/4/21.
 */
angular.module('myApp')
    .service('httpService',function($http){//定义一个服务，在需要的页面懒加载

        this.getList=function (industry,approved,financing,page) {//需要的变量
            return $http({//返回的是一个函数，这里是$http，所以不能包在function(){里面}
                method:'GET',
                url:'/a/company/search/',
                params:{
                    "industry": industry,
                    "approved": approved,
                    "financing":financing,
                    "page":page
                },
                timeout:"2000"
            })
        };

        this.deleteDetail=function (id) {
            return $http.delete("/a/u/company/" + id, "")
        };
        this.addNew=function (obj) {
            return $http({
                method: 'POST',
                url: '/a/u/company',
                data: obj,
                timeout: "3000"
            })
        };
        this.edit=function (id,res) {
            return $http({
                method: "PUT",
                url: '/a/u/company/'+id,
                data: res
            })
        }







    });