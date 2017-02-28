/**
 * Created by 1 on 2017/2/27.
 */
var gamerString;
var gamer=[];
gamerString=localStorage.gamerListStorage;
gamer=gamerString.split(",");//获取数组
var gamerAmount=gamer.length;//获取数组长度


//设置变量用于存放游戏进度到第几天，
var progress =1;

//定义每天的4个状态
var stepOfDay={
    toKill:   "toKill",
    lastWord: "lastWord",
    talk:     "talk",
    vote:     "vote"
}








//写入storage
