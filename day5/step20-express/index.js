const express = require("express");
const app = express();
app.get("/",function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<h1>hello from express</h1>");
})
app.listen(3000);
console.log("Express is now running on localhost:3000");