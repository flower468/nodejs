let http = require("http");
let config = {
    port : 5050,
    host : "localhost"
}
let server = http.createServer(function(request, response){
    // response.writeHead(200, {"Content-Type" : "text/plain"});
    response.writeHead(200, {"Content-Type" : "text/html"});
    if(request.url == "/"){
        response.write("<h1> Welcome to the home page </h1>");
    }else if(request.url == "/about"){
        response.write("<h1> Welcome to About Page </h1>");
    }else{
        response.writeHead(404, {"Content-Type" : "text/html"});
        response.write("<h1> 404 | Requested page was not found </h1>");
    }
    response.end();
});

server.listen(config.port, config.host, function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log("Web server is now live on localhost:5050")
    }
})