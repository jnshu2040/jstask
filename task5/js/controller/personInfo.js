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
                console.log($scope.reader.result);//看看是什么//然后准备formData
                $scope.preview=$scope.reader.result;//预览
                console.log($scope.preview);
                document.getElementById("img").src=$scope.preview;
            };
        };
        $scope.uploadxx=function () {
            //FormData
            $scope.fileForm=new FormData();
            $scope.fileForm.append($scope.file.name,$scope.file);//文件传入
            //ajax请求
            $http({
                method:'post',
                url:"/b/student",///接口
                data:$scope.fileForm
                })
                .then(
                    function seccessCallback(response){
                        console.log("上传图片--服务器返回"+response)
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





