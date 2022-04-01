const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    const path = url.parse(req.url, true);
    const filename = "." + path.pathname;
    fs.readFile(filename, (err, data) => {
        if(err){
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("404 Not Found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
  }).listen(3000);
