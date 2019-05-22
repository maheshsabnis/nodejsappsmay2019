var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {
    var pgResp;
    if (req.url === '/home') {
        pgResp = fs.readFileSync('./views/home.html');
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write(pgResp);
    } else {
        if (req.url === '/about') {
            pgResp = fs.readFileSync('./views/about.html');
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(pgResp);
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write('Resource not found');
        }
    }
    resp.end();
});

server.listen(4005);
console.log('Server is listening on 4005');