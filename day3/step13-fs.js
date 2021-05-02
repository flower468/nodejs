const fs = require("fs");

fs.mkdir("temp",function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log("Directory created");
    }
});
