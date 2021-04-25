// var let const;
var hero = {
    title : "Ironman",
    power : 6
};

function checkPower(){
    if(hero.power > 5){
       var tempname = hero.title+" is strong";
       hero.title = tempname;
    }
    console.log(tempname);
};

checkPower();

console.log(hero.title);