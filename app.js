const http = require("http");

const server = http.createServer((req,res, )=>{
    // const name = "saurabh";
    // console.log(name);
    // process.exit();
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1> </body>')
    res.write('</html>')
    res.end()

});

server.listen(4000);