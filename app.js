const http = require("http");

const server = http.createServer((req,res, )=>{
    // const name = "saurabh";
    // console.log(name);
    // process.exit();

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    req.url==="/home" && res.write('<body><h1>Welcome Home</h1> </body>')
    req.url==="/about" && res.write('<body><h1>Welcome to About Us page</h1> </body>')
    req.url==="/node" && res.write('<body><h1>Welcome Home</h1> </body>')


    res.write('</html>')
    res.end()

});

server.listen(4000);