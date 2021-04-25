let fs = require("fs");
// fs.writeFileSync("temp.txt", "Welcome to your life", "utf-8" );
/*
fs.writeFile("temp.txt", "Welcome to your life", function(error){
    if(error){
        console.log(error);
    }else{
        console.log("File was created")
    }
})
*/
// console.log( fs.readFileSync("temp.txt","utf-8") );
// console.log( fs.readFileSync("temp.txt").toString() );
// console.log( fs.readFileSync("temp.txt")+"" );
fs.readFile("temp.txt", function(error, data){
// console.log(arguments[0], arguments[1]);
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
});

console.log("hello there");