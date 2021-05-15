const express = require("express");
let app = express();

// app.set("view engine" ,"ejs");

app.get("/", (req, res)=>{
    // res.send("hi")
    /* res.render("home",{
        appTitle : "My Web Application",
        version : Math.round( Math.random() * 10000 )
    }); */
    res.render("home.pug",{
        appTitle : "My Web Application",
        version : Math.round( Math.random() * 10000 )
    })
})
app.listen(4000, "localhost", function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log("Express is now serving on localhost:4000");
    }
});