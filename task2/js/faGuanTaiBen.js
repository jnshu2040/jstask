/**
 * Created by 1 on 2017/2/27.
 */
var gamerString;
var gamer=[];
var gamerObj=[];
gamerString=localStorage.gamerListStorage;
gamer=gamerString.split(",");//获取数组
var gamerAmount=gamer.length;//获取数组长度



$(".m-process-wrapper").append(
    "<div class='m-process-day'></div>" +
    "<div class='m-process-detail-wrapper'> " +
    "<div class='m-process-detail'>杀手杀人</div> " +
    "<div class='m-process-detail'>亡灵发表遗言</div> " +
    "<div class='m-process-detail'>玩家依次发言</div> " +
    "<div class='m-process-detail'>投票</div> </div>"
);




//玩家状态工厂函数
function setGamer(number,identity,state) {
    var a={
        number : number,
        identity : identity,
        state : state
    };
    return a;
}//示例：gamerObj[1]=setGamer(1,gamer[1],"alive");
//示例：转换成json格式的字符串,并存储：localStorage.gamerObjStorage=json.stringify(gamerObj)

//遍历得到每个玩家详情,
for(var i=0;i<gamerAmount;i++){
    gamerObj[i]=setGamer(i+1,gamer[1],"alive");
}
console.log("gamerObj");console.log(gamerObj);
//转换为JSON格式并写入本地存储
localStorage.gamerObjStorage=JSON.stringify(gamerObj);
console.log("localStorage.gamerObjStorage");console.log(localStorage.gamerObjStorage);
//第几天/写入文档
$(".m-process-day").html("第"+localStorage.dayNumberStorage+"天");

//点击事件/杀手杀人/投票杀人
var processList=$(".m-process-detail");
console.log(processList[0]);
function toKillerPage() {
    localStorage.pageType="killerPage";
    location.href="TouPiaoYe.html";
}
function toVotePage() {
    localStorage.pageType="votePage";
    location.href="TouPiaoYe.html";
}
$(processList[0]).on("click",toKillerPage);
$(processList[3]).on("click" ,toVotePage);











/////////////////////*****************************///////////
//设置变量用于存放游戏进度到第几天，
// var progressDay = 1;

//定义每天的4个状态[toKill,lastWord,talk,vote]
// var stepOfDay = 1;

//定义每个玩家的死活状态
// var currentState="alive";

/////////////*****************************************////////////
// var singleState = {    //定义有限状态机，是个对象，两个方法.beKill将其杀死
//     initialize: function(){    //初始化，在调用的时候使用
//         var self=this;//什么被call，什么就是this,而非function本身，更不是singleState.
//         self.currentState="alive";//初始 状态alive
//             console.log(self.currentState);////
//         self.click(singleState.beKill);   //绑定点击事件/
//     },
//     beKill: function () {this.currentState="dead"}//
// };
//
//
//
//
//
// singleState.initialize.call($("#vote-h-center"));//

// cece=singleState.initialize.apply($("#vote-h-center"));
// console.log(cece);

//写入storage
// localStorage.progressDayStorage = progressDay;//第几天
// localStorage.stepOfDayStorage = stepOfDay;//第几步
// localStorage. //死活状态/用json/