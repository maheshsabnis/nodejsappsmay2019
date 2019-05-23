var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// set the global promise
mongoose.Promise = global.Promise;

// establish db connection

var db = mongoose.connect('mongodb://localhost/ProductsDatabase', { useNewUrlParser: true });

var instance = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

if (db == 'undefined') {
    console.log('failed');
    return;
} else {
    // 1. define the schema
    var productSchema = mongoose.Schema({
        ProductId: String,
        ProductName: String,
        Manufacturer: String,
        Price: Number
    });

    // 2. map the schema with the collection in db
    //                                  name    schema          collection
    var productModel = mongoose.model('Products', productSchema, 'Products');

    instance.get('/api/products', function (req, resp) {
        // the find() method is async. The exec() method will
        // subscribe to find() method response and process it 
        productModel.find().exec(function (err, data) {
            if (err) {
                resp.status(500).send(err.message);
            }
            resp.status(200).send(JSON.stringify(data));
        });
    });

    instance.post('/api/products', function (req, resp) {
        var product = {
            ProductId: req.body.ProductId,
            ProductName: req.body.ProductName,
            Manufacturer: req.body.Manufacturer,
            Price: req.body.Price
        };

        productModel.create(product, function (err, data) {
            if (err) {
                resp.status(500).send(err.message);
            }
            resp.status(200).send(JSON.stringify(data));
        });
    });
}


instance.listen(4008, function () {
    console.log('server started on port 4008');
});
