const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//-------------------------------
// CONFIG
const config = {
    "port" : process.env.PORT || 3030,
    "host" : "localhost"
};
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname+"/public"));
//-------------------------------
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id:ObjectId,
    username : String,
    usermail : String,
    usercity : String
}));

mongoose.Promise = global.Promise;
let uri = "mongodb://localhost/usersdb";
mongoose.connect(uri,{ useNewUrlParser : true, useUnifiedTopology : true }).then(
    () => {
        console.log("Database is now connected")
    },
    (error) => {
        console.log("Error ", error)
    }
);
//-------------------------------
// let userRoutes = express.Router();
    //READ
//    userRoutes.route("/").get(function(req, res){
app.get("/data", function(req, res){
    User.find(function(err, users){
        if(err){
            console.log("Error : ", err)
        }else{
            res.json(users);
        }
    })
})
    //CREATE
//     userRoutes.route("/add").post(function(req, res){
app.post("/data",function(req, res){
    let user = new User(req.body);
    user.save().then( dbres => {
        res.status(200).json({ 'users' : 'User was added to the database' })
    }).catch( error => {
        res.status(400).send("user was not saved into database");
    })
})
    //DELETE
//    userRoutes.route("/delete/:id").get(function(req, res){
app.get("/delete/:id", function(req, res){
    User.findByIdAndDelete({ _id : req.params.id }, function(error, deleteduser){
        if(error){
            res.json({"error": error})
        }else{
            res.json({"deleteduser" : deleteduser})
        }
    })
}) 
    // FIND USER TO UPDATE
//    userRoutes.route("/edit/:id").get(function(req, res){
app.get("/edit/:id", function(req, res){
    User.findById(req.params.id, function(error, usertoedit){
        if(error){
            res.json({"error": error})
        }else{
            res.json(usertoedit)
        }
    })
})

    // UPDATE USER INFO
//  userRoutes.route("/edit/:id").post(function(req, res){
app.post("/edit/:id", function(req, res){
    User.findById(req.params.id, function(error, user){
        if(error){
            res.json({"error": error})
        }else{
            user.username = req.body.username;
            user.usermail = req.body.usermail;
            user.usercity = req.body.usercity;
            user.save().then( user => {
                res.json(user);
            }).catch( error => {
                res.status(400).send("user was not updated")
            })
        }
    })
})
//-------------------------------
// app.use('/users', userRoutes);
//-------------------------------
app.listen(config.port, config.host, function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log("Server is now running on localhost : ",config.port);
    }
})