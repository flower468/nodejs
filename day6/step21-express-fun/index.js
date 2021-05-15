const express = require("express");
let app = express();

// app.post()      Create 
// app.get()       Read
// app.put()       Update
// app.delete()    Delete

// app.use("/assets",express.static(__dirname+"/public/images"));
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    // console.log("I got a get request");
    // res.send("hello there");
    res.sendFile(__dirname+"/public/index.html");
});
app.get("/about", function(req, res){
    res.sendFile(__dirname+"/public/about.html");
});
app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/public/contact.html");
});
app.get("/data", function(req, res){
    res.sendFile(__dirname+"/data/simple.json");
});
app.get("**", function(req, res){
    res.sendFile(__dirname+"/public/notfound.html");
});

let listen = app.listen(process.env.PORT || 8080,function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        // console.log("express is running on localhost : "+this.address().port);
        // console.log("express is running on localhost : "+this.address().port);
        console.log("express is running on localhost : "+listen.address().port);
        // console.log(process.env.PORT);
    }
});