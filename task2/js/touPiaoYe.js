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

for(var i=0;i<gamerAmount;i++){//初始化卡牌身份，写入
    creatGamer();
}
function goTo() {//定义点击事件
    location.href="faGuanTaiBen.html";
}
$(".f-btn-small").bind("click",goTo);//绑定事件



//定义一个有限状态机，
//两种状态：生存，死亡，currentState
//对象：玩家数组的每个单位,singleGamer
//事件：被杀死/被投死/杀某人/投票给某人

// var singleGamer ={
//     currentState: "alive",//当前状态,
//     initialize: function(){//初始化,执行函数回掉
//         var self=this;
//         self.on("hover",self.transition);//绑定事件
//     },
//     transition: function(event){
//         switch(this.currentState){//switch选择执行
//             case "alive":
//                 this.currentState = "dead";
//                 beKilled;
//                 break;
//             case "dead":
//                 this.currentState = "alive";
//                 doSomething();
//                 break;
//             default:
//                 console.log()
//         }
//     }
// };
//
// if(singleGamer.currentState=="alive"){}
// if(singleGamer.currentState=="dead"){}

var singleGamer ={
    currentState: "alive"
}


function killSomeOne() {
    singleGamer.currentState= "dead";
}



















