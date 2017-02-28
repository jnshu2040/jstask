/**
 * Created by 1 on 2017/2/27.
 */
var gamerString;
var gamer=[];
gamerString=localStorage.gamerListStorage;
gamer=gamerString.split(",");//获取数组
var gamerAmount=gamer.length;//获取数组长度
var //详细信息的数组，用于json保存本地存储


//设置变量用于存放游戏进度到第几天，
var progressDay = 1;

//定义每天的4个状态[toKill,lastWord,talk,vote]
var stepOfDay = 1;

//定义每个玩家的死活状态
// var currentState="alive";
var singleState = {    //定义有限状态机的对象，.beKill将其杀死
    currentState: "alive",
    initialize: function(){    //初始化,执行函数回掉
        var self=this;
        self.on("click",self.beKill);   //绑定事件/
    },
    beKill: function () {this.currentState="dead"}
}



//写入storage
localStorage.progressDayStorage = progressDay;//第几天
localStorage.stepOfDayStorage = stepOfDay;//第几步
localStorage. //死活状态/用json