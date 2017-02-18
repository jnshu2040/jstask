/**
 * Created by 1 on 2017/2/16.
 */

var gamerAmount;
gamerAmount=document.getElementById("gameramount").value;

var killerAmount;
killerAmount=Math.floor(gamerAmount/3.5);

var commonPeopleAmount;
commonPeopleAmount=gamerAmount-killerAmount;

function printNumber() {//获取输入框数量
    gamerAmount=document.getElementById("gameramount").value;
    killerAmount=Math.floor(gamerAmount/3.5);
    commonPeopleAmount=gamerAmount-killerAmount;
var inputKillerNumber= document.getElementById("m-proprotion-killerNumber");
var inputCommonPeopleNumber= document.getElementById("m-proprotion-commonPeopleNumber");

    inputKillerNumber.innerHTML=killerAmount;
    inputCommonPeopleNumber.innerHTML=commonPeopleAmount;
}




var gamerIdentity = new Array(gamerAmount);
var gamer         = new Array(gamerAmount);
function assignIdentity() {//顺序分配身份
    var i=1;
    for (i=1;i<=killerAmount;i++){
        gamerIdentity[i]="杀手"
    }
    for (i=killerAmount+1;i<=gamerAmount;i++){
        gamerIdentity[i]="平民";
    }
}
assignIdentity();

function resetGamer(){
    var i=1;
    for(i=1;i<=gamerAmount;i++){
        gamer[i]="平民";
    }
}
resetGamer();
function assignKillerToGamer() {//为游戏者随机分配杀手
    resetGamer();
        var a=1;
        while(a<=killerAmount){
            var  n=Math.floor(Math.random()*gamerAmount+1);
            if(gamer[n]=="平民"){gamer[n]="杀手";a++;}
}}


function writeGamerIn() {
    assignKillerToGamer();
    var i=0;
    var gamerList;
    gamerList=document.getElementsByClassName("gamerlist");
    // for(i=0;i<=18;i++){gamerList[i].innerHTML="";}
    for(i=0;i<gamerAmount;i++){
        gamerList[i].innerHTML="玩家"+(i+1)+"  :  "+gamer[i+1];
    }
}

function printNumberTime() {
    id=window.setInterval(printNumber,300);
}
function clearPrintNumberTime() {
    clearInterval(id);
    writeGamerIn();
}









