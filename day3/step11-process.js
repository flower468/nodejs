const EventEmitter = require("events").EventEmitter;
let ee = new EventEmitter();

function callBackFun(hero1, hero2){
 console.log("vijay event happened", hero1.title, hero2.city);
};

ee.addListener("vijay", callBackFun);

process.nextTick(function(){
    ee.emit("vijay", { title : "Batman", city : "Gotham"}, { title : "Ironman", city : "New York"});
});

console.log("log from line 14");
console.log("log from line 15");
console.log("log from line 16");
console.log("log from line 17");