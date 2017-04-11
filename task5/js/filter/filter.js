/**
 * Created by 1 on 2017/3/27.
 */
angular.module('myApp')
    .filter('pagination',function () {//分页
        return function (input,pageNumber,number) {
            return input.slice((pageNumber-1)*number,pageNumber*number);
        };//slice()的end参数不被选择
        // var pageArray=[];
        // for(var page=1;page<=(Math.floor(array.length/number));page++){
        //     pageArray[page-1]=array.slice((page-1)*number,page*number-1)
        // }
        // pageArray[page-1]=array.slice((page-1)*number);
        // return pageArray;//返回新的被切开数组
    })
    .filter('type',function () {
        // 1:CSS 2:JS 3:Java 4:运维 5:DBA 6:产品 7:IOS 8:Android
        return function(input,type){
            if(type==0){return input}
            else{
                var n=-1;var output=[];
                for(var i=0;i<input.length;i++){
                    if (input[i].type==type){
                        n++; output[n]=input[i];
                    }
                }
                return output;
        }
    };
    })
    .filter('level',function () {
        return function(input,level){
            if(level==0){return input}
            else{
                var n=-1;var output=[];
                for(var i=0;i<input.length;i++){
                    if (input[i].level==level){
                        n++; output[n]=input[i];
                    }
                }
                return output;
            }
        };
    })
    .filter('talent',function(){
        return function(input,talent){
            if(talent==0){return input}
            else{
                var n=-1;var output=[];
                for(var i=0;i<input.length;i++){
                    if (input[i].type==talent){
                        n++; output[n]=input[i];
                    }
                }
                return output;
            }
        };
    });





