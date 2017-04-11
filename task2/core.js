/**
 * Created by 1 on 2017/3/31.
 */
//开关状态机的工厂函数，
function onOff() {
    var o={
        state:"off",
        trans:function () {
            switch(this.state){
                    case "off":
                        this.state="on";break;
                    case "on":
                        this.state="off";break;
                    default:
                        this.state="off";break;
            }
        },
        event:function(){this.trans();}
    };
    return o;
}

function createGamer(name){//玩家的状态机 的工厂函数
    var o={
        state:{
            name:name,
            identity:"平民",//"杀手"
            aliveState:"alive",///null
            deadState:null,//"killDead"."voteDead"
            deadTime:null,
        },
        trans_identity:function(){
            if(this.identity=="平民"){this.identity="杀手"}
            else(this.identity="平民")
        },
        trans_aliveState:function(){
            if(this.aliveState=="alive"){this.aliveState=null}
            else{this.aliveState="alive"}
        },
        trans_deadState:function () {
            switch (localStorage.pageType) {
                case "killerPage":
                    this.deadState = "killDead";
                    break;
                case "votePage":
                    this.deadState = "voteDead";
                    break;
                default:
                    break;
            }
        },
        trans_deadTime:function () {this.deadTime=localStorage.day},
        event_Kill:function () {
            this.trans_aliveState();
            this.trans_deadState();
            this.trans_deadTime();
        },
        event_assignIdentity:function () {this.trans_identity()}
    };
    return o;
}
















