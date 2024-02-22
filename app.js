const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const method = req.method;
    if (req.url === "/") {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body>')
        
        try {
            const message = fs.readFileSync('msg.txt', 'utf8');
            if (message) {
                res.write('<p>Message from file: ' + message + '</p>');
            }
        } catch (err) {
            console.error("Error reading message file:", err);
        }
        res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>')
        res.write('</body></html>')
        return res.end();
    }

    if (req.url === "/message" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFileSync('msg.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    req.url === "/home" && res.write('<body><h1>Welcome Home</h1> </body>')
    req.url === "/about" && res.write('<body><h1>Welcome to About Us page</h1> </body>')
    req.url === "/node" && res.write('<body><h1>Welcome Home</h1> </body>')
    res.write('</html>')
});

server.listen(4000);
