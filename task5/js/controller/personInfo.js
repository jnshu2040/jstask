/**
 * Created by 1 on 2017/3/29.
 */
angular.module("myApp")
    .controller('personInfoCtrl',function ($scope,$http) {
        $scope.name=(JSON.parse(localStorage.user)).manager.name;
        $scope.image=null;


        window.getFiles=function () {
            $scope.file=window.document.getElementById("inputFile").files[0];
            console.log($scope.file);
            $scope.reader=new window.FileReader();//实例化FileReader
            $scope.reader.readAsDataURL($scope.file);//读取为base64
            $scope.reader.onload=function (e) {
                // console.log($scope.reader.result);//看看是什么//然后准备formData
                $scope.preview=$scope.reader.result;//预览
                // console.log($scope.preview);
                document.getElementById("img").src=$scope.preview;
            };
        };
        $scope.upload=function () {
            //FormData//使用artical的接口
            $scope.fileForm=new FormData();
            $scope.fileForm.append("file",$scope.file);//文件传入
            //ajax请求
            $http({
                method:'POST',
                url:"/a/u/img/1",///接口
                data:$scope.fileForm
                // contentType: false,
                // processData: false
                // contentLength:false,
                // cache:false
            })
                .then(
                    function seccessCallback(response){
                        if(response.data.code){
                            console.log(response.data.data.url)
                        }
                    },
                    function errorCallback(response) {
                        console.error(response)
                    }
                )
        }








    });




















// var getFiles=function () {
//     var file=document.getElementById("inputFile").files[0];
//     console.log(file);
//     var reader=new FileReader();
//     reader.onload = function(e) {//必须这样才能看到结果。
//         console.log(e.target.result);
//     };
//     reader.readAsDataURL(file);
//     window.result=reader.result
//     console.log(result)//这样看不到，因为在这几条语句中，复制还没有完成。
// };





