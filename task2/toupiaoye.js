/**
 * Created by 1 on 2017/2/25.
 */
var gamerString;
var gamer=[];
gamerString=localStorage.gamerListStorage;
gamer=gamerString.split(",");
var gamerAmount=gamer.length;//获取数组


function creatGamer() {
    $(".m-select-box-group").append(
        "<div class='m-select-box'> " +
        "<div class='m-select-person-box'> " +
        "<p class='m-select-person-name'>" +
        gamer[i] +
        "</p> <p class='m-select-person-number'>" +
        (i+1)+
        "号" +
        "</p> </div> <div class='m-select-role-box'><!--hover--> " +
        "<img src='pic2/killer.png'>" +
        "<img src='pic2/detecter.png'>" +
        "<img src='pic2/target.png'>" +
        "<img src='pic2/docter.png'> " +
        "</div> </div>"
    )
}

for(i=0;i<gamerAmount;i++){
    creatGamer();
}

















