// 1. load the express module
var express = require('express');
// load the body-parser
var bodyParser = require('body-parser');
// load the cors module
var cors = require('cors');
// 1a. create an instance of express module object
// 1b. The data for the application
var products = [
    { ProdId: 1, ProdName: 'P1' },
    { ProdId: 2, ProdName: 'P2' },
    { ProdId: 3, ProdName: 'P3' }
];
var instance = express();
// 1c. configure the bodyParser middleware to Express
// with json() methos the express will read and parse
// the body as JSON
instance.use(bodyParser.json());
// 1d. Remove any url encoded post e.g. the URL parameters as K/V pair
// from the middleware
instance.use(bodyParser.urlencoded({ extended: false }));
// 1e. configure the cors middleware for express instance
instance.use(cors({origin:'*',methods:'*',allowedHeaders:'*'}));
// 2. implement REST APIs
instance.get('/api/products', function (req, resp) {
    resp.send({ statusCode: 200, data: JSON.stringify(products) });
});
instance.get('/api/products/:id', function (req, resp) {
    // read the the request parameter
    var id = req.params.id;

    var prd = products.filter(function (p, i) {
        return p.ProdId == id;
    });

    resp.status(200).send(JSON.stringify(prd));
});

// instance.get('/api/products/byname/:name', function (req, resp) {
//     // read the the request parameter
//     var name = req.params.name;
//     var prd = products.filter(function (p, i) {
//         return p.ProdName === name;
//     });

//     resp.status(200).send(JSON.stringify(prd));
// });

instance.post('/api/products', function (req, resp) {
    // the JSON empty object
    var prd = {};

    prd.ProdId = req.body.ProdId;
    prd.ProdName = req.body.ProdName;
    products.push(prd);
    var errMessage = valid(prd);

    resp.status(200).send(JSON.stringify(products));
});

instance.put('/api/products/:id', function (req, resp) {
    // logic to read the header paramter
    // the JSON empty object
    var prd = {};
    prd.ProdId = req.body.ProdId;
    prd.ProdName = req.body.ProdName;
    // logic to update record
    resp.status(200).send(JSON.stringify(products));
});


instance.delete('/api/products/:id', function (req, resp) {
    // logic to read the header paramter

    // logic to delete record
    resp.status(200).send(JSON.stringify(products));
});

// 3. publish endpoint port
instance.listen(4005, function () {
    console.log('Server is listening on port 4005');
});

function valid(prd) {
    errorMessages = [];
    if (prd.ProdId < 0) {
        errorMessages.push("prdid should not be zero");
    }

    return errorMessages;
}