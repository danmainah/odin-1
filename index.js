const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    let path = url.parse(req.url, true);
    let filename = "." + path.blog;
    fs.readFileSync(filename, (err, data) => {
        if(err){
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("404 Not Found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
  }).listen(8080);
