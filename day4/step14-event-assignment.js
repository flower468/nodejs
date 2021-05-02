const EventEmitter = require("events").EventEmitter;
let eventEmitter = new EventEmitter();
let count = 1;
function callbackfun(){
    console.log("IPL Match "+ count +" Started");
}
eventEmitter.on("ipl", callbackfun);
let si = setInterval(function(){
    eventEmitter.emit("ipl");
    console.log(count);
    count++;
    if(count > 5){
        eventEmitter.off("ipl", callbackfun);
        clearInterval(si);
    }
},1000);
