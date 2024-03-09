const http = require("http");
const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("middleware-1");
    next();
})

app.use((req,res,next)=>{
    console.log("middleware-2")
    // res.send("<h1>Good Express</h1>")
    res.send({sa: 1})
})

const server = http.createServer(app);

server.listen(4000);

