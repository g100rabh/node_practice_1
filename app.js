const http = require("http");
const route = require("./routes")

const server = http.createServer(route.handlers);

console.log(route.someText)

server.listen(4000);

