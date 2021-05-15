const http = require("http");
const fs = require("fs");
//---------------------------
const host = "localhost";
const port = 1234;
let server = http.createServer(function(request, response){
    // console.log(request.url);
    // response.writeHead(200,{"Content-Type":"text/html"});
    // var pageData = fs.readFileSync(__dirname+"/"+request.url);
    // response.write(pageData);
    // response.end();
    fs.readFile(__dirname+request.url,'UTF-8', function(error, data){
        if(data){
            // console.log(data);// 
            response.writeHead(200, { "Content-Type" : "text/html"});
            response.end(data.replace("Application", "Vijay's"));
        }else{
            response.writeHead(404, { "Content-Type" : "text/plain"});
            response.end("404 : requested file was not found");
        }
    })
});

server.listen(port, host, function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log("Server is now live on localhost:1234");
    }
})
