/**
 * Created by 1 on 2017/2/25.
 */
var gamerString;
var gamer=[];
gamerString=localStorage.gamerListStorage;
gamer=gamerString.split(",");
var gamerAmount=gamer.length;//获取数组
var gamerObj=JSON.parse(localStorage.gamerObjStorage);//从本地获取玩家详细信息
    console.log(gamerObj);
var gamerDom=$(".m-select-person-box");//获取玩家的html节点
//定义状态表现层样式函数
function deadView(number) {
    if(gamerObj[number-1].state=="dead"){
        $(gamerDom[number-1]).attr("border",".05rem solid #f00");
    }
}
for(var i=1;i<=gamerAmount;i++){//遍历以初始化死亡玩家样式
    deadView(i);
}


console.log($("title"));
switch (localStorage.pageType){//定义页面标题
    case "killerPage":
        $("title").append("杀手杀人");
        break;
    case "votePage":
        $("title").append("投票页");
        break;
    default:
        $("title").append("玩家列表");
}


function creatGamerDom() {//定义初始化卡牌的函数
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
for(var i=0;i<gamerAmount;i++){creatGamerDom();}//初始化卡牌，写入页面
//定义初始化提示框的函数
function creatVoteTip() {//对投票的提示
    $(".m-tip-group-wrapper").append(
        "<div class='m-tips-box'>" +
        "<span class='m-tips-span'>发言讨论结束，大家请投票</span>" +
        " <img class='m-tips-audio--img' src='pic/audio.png'> </div> " +
        "<div class='m-intro-box'> <span class='m-intro-span'>点击得票最多人的头像</span> </div>"
    )
}
function creatKillerTip() {//对杀手的提示
    $(".m-tip-group-wrapper").append(
        "<div class='m-tips-box'>" +
        "<span class='m-tips-span'>杀手请睁眼，告诉法官你要杀的对象</span>" +
        " <img class='m-tips-audio--img' src='pic/audio.png'> </div> " +
        "<div class='m-intro-box'> <span class='m-intro-span'>点击下方玩家头像，对被狙击的玩家进行标记</span> </div>"
    )
}
//写入按页面类型写入提示
if(localStorage.pageType=="killerPage"){creatKillerTip();}
else {creatVoteTip();}





function goTo() {location.href="faGuanTaiBen.html";}//定义点击跳转事件
$(".f-btn-small").bind("click",goTo);//绑定事件,点击跳转

//定义死亡函数/杀手杀
function killerKill(number) {
    if(gamerObj[number-1].identity!="杀手"){
        gamerObj[number-1].state="dead";
        localStorage.gamerObjStorage=JSON.stringify(gamerObj);
        $(gamerDom[number-1]).style="border: .05rem solid #f00;";
    }
    else{alert("他也是杀手")}
}
//定义死亡函数/投票杀
function voteKill(number) {
    if(gamerObj[number-1].state!="dead"){
        gamerObj[number-1].state="dead";
        localStorage.gamerObjStorage=JSON.stringify(gamerObj);
        $(gamerDom[number-1]).style="border: .05rem solid #f00;";

    }
    else (alert("他已经死了"))
}
//定义状态表现层样式函数
function deadView(number) {
    if(gamerObj[number-1].state=="dead"){
        $(gamerDom[number-1]).style="border: .05rem solid #f00;"
    }
}

























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



















