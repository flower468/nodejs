const EventEmitter = require("events").EventEmitter;
var eventEmitter = new EventEmitter();

// setTimeout(function(){
//     eventEmitter.emit("vjEvent");// vjEvent is type of event
// },2000);

function vjEventCallBack1(){
    console.log("vjEvent Happened callback 1");
};
function vjEventCallBack2(){
    console.log("vjEvent Happened callback 2");
};
setInterval(function(){
    eventEmitter.emit("vjEvent");
},1000);

setInterval(function(){
    eventEmitter.off("vjEvent", vjEventCallBack1);
},5000);

eventEmitter.on("vjEvent",vjEventCallBack1 );
eventEmitter.on("vjEvent",vjEventCallBack2 );