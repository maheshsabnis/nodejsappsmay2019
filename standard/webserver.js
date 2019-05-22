// 1. load the http module
var http = require('http');
var Employees = [
    { EmpNo: 1, EmpName: 'A' },
    { EmpNo: 2, EmpName: 'B' }
];
// 2. create a server object
var server = http.createServer(function (req, resp) {
    var id = req.url.split('/')[1];
    console.log(id);
    // 2a. write the http headers
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    if (id !== 'favicon.ico' && id !== '') {

        var emps = Employees.filter(function (e, idx) {
            return e.EmpNo == id;
        });
        // 2b. response body
        resp.write(JSON.stringify(emps));

    } else {
        // 2b. response body
        resp.write(JSON.stringify(Employees));
    }
    // 2c. complete the response
    resp.end();
});


// 3. start listening
server.listen(4004);
console.log('server listening on port 4004');