const http = require("http");

const server = http.createServer((req,res, )=>{
    const name = "saurabh";
    console.log(name);
    process.exit();
});

server.listen(4000);