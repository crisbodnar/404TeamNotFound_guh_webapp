var express = require('express');
var router = express.Router();


var http = require("http");
var https = require("https");


router.get('/', function(request, response) {
    console.log(request);
    response.send('respond with a resource');
});


module.exports = router;