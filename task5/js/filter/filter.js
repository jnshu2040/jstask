/**
 * Created by 1 on 2017/3/27.
 */
angular.module('myApp')
    .filter('industry',function(){
        return function(input){
            switch (input){
                case 0: return "移动互联网";break;
                case 1: return "电子商务";break;
                case 2: return "企业服务";break;
                case 3: return "O2O";break;
                case 4: return "教育";break;
                case 5: return "金融";break;
                case 6: return "游戏";break;
                default: return "其它";break;
            }
        }
    })
    .filter('financing',function () {
        return function (input) {
            switch(input){
                case 0: return "无需融资";break;
                case 1: return "天使轮";break;
                case 2: return "A轮";break;
                case 3: return "B轮";break;
                case 4: return "C轮";break;
                case 5: return "D轮及以上";break;
                case 6: return "上市公司";break;
                default: return "其它";break;
            }
        }
    })
    .filter('approvedStatus',function () {
        return function (input) {
            switch (input){
                case 0: return "未认证";break;
                case 1: return "已认证";break;
                default: return "其它";break;
            }
        }
    });













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

















// angular.module('myApp')
//     .filter('pagination',function () {//分页
//         return function (input,pageNumber,number) {
//             return input.slice((pageNumber-1)*number,pageNumber*number);
//         };//slice()的end参数不被选择
//         // var pageArray=[];
//         // for(var page=1;page<=(Math.floor(array.length/number));page++){
//         //     pageArray[page-1]=array.slice((page-1)*number,page*number-1)
//         // }
//         // pageArray[page-1]=array.slice((page-1)*number);
//         // return pageArray;//返回新的被切开数组
//     })
//     .filter('type',function () {
//         // 1:CSS 2:JS 3:Java 4:运维 5:DBA 6:产品 7:IOS 8:Android
//         return function(input,type){
//             if(type<0){return input}
//             else{
//                 var n=-1;var output=[];
//                 for(var i=0;i<input.length;i++){
//                     if (input[i].industryList[0]==type){
//                         n++; output[n]=input[i];
//                     }
//                 }
//                 return output;
//         }
//     };
//     })
//     .filter('level',function () {
//         return function(input,level){
//             if(level<0){return input}
//             else{
//                 var n=-1;var output=[];
//                 for(var i=0;i<input.length;i++){
//                     if (input[i].financing==level){
//                         n++; output[n]=input[i];
//                     }
//                 }
//                 return output;
//             }
//         };
//     })
//     .filter('talent',function(){
//         return function(input,talent){
//             if(talent<0){return input}
//             else{
//                 var n=-1;var output=[];
//                 for(var i=0;i<input.length;i++){
//                     if (input[i].approved==talent){
//                         n++; output[n]=input[i];
//                     }
//                 }
//                 return output;
//             }
//         };
//     });





