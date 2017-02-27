/**
 * Created by 1 on 2017/2/25.
 */
var gamerString;
var gamer=[];
gamerString=localStorage.gamerListStorage;
gamer=gamerString.split(",");
var gamerAmount=gamer.length;//获取数组
function creatGamer() {//写卡牌的函数
    $(".m-select-box-group").append(
        "<div class='m-select-box'> " +
        "<div class='m-select-person-box'> " +
        "<p class='m-select-person-name'>" +
        gamer[i] +
        "</p> <p class='m-select-person-number'>" +
        (i+1)+
        "号" +
        "</p> " +
        "<div class='m-select-person-box-cover'></div>"+
        "</div> <div class='m-select-role-box'><!--hover-->" +
        "<img src='pic/killer.png'>" +
        "<img src='pic/detecter.png'>" +
        "<img src='pic/target.png'>" +
        "<img src='pic/docter.png'> " +
        "</div> " +
        "</div>"
    );
}

for(i=0;i<gamerAmount;i++){//写卡牌/初始化卡牌
    creatGamer();
}
function goTo() {
    location.href="../faGuanTaiBen.html";
}
$(".f-btn-small").bind("click",goTo);














