var express = require('express');
// the path module for reading server-side file IO
var path = require('path');
// creating a route table
// route middleware 
var router = express.Router();
// instance of express
var instance = express();

// configure the static resources for express as middleware
// staticFile Middleware
instance.use(
    express.static(path.join(__dirname, './../node_modules/jquery/dist'))
);
instance.use(
    express.static(path.join(__dirname, './../node_modules/bootstrap/dist/css'))
);
// defining routing for home.html page

router.get('/call', function (req, resp) {
    resp.sendFile(
        'call.html', {
            root: path.join(__dirname, './../views')
        }
    );
});


// configure the routing for the express instance
instance.use(router);
// start listening
instance.listen(4007, function () {
    console.log('express runs on port 4007');
});
