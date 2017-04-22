/**
 * Created by 1 on 2017/4/21.
 */

angular.module('myApp')
    .factory('companyFactory',function () {
        return{//工厂模式类似于构造函数，但是工厂代替了new的过程。
            companyObj: //第一个方法/属性
                function(name,financing,approved,slogan,summary,industry) {
                    return {
                        company: {
                            name: name,
                            province: "340000",
                            city: "340001",
                            county: "340002",
                            financing: financing,
                            approved: approved,//返回的key是approved,请求的key是approved
                            freezed: 0,//同上
                            logo: "logo",
                            slogan: slogan,
                            totalNum: 100,
                            summary: summary,
                            phone: "18866668888",
                            address: "address地址",
                            map: "map地图string",
                            mail: "123456@163.com"
                        },
                        industryList: [{industry: industry}]
                    }
                },
            text:"第二个对象"//第二个方法/属性
        }
    });



