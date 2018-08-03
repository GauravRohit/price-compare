var https = require("https");
var request =  require('request');
var express = require('express');
var app = express();
var path = require("path");
var server = require('http').createServer(app);

var options = {
    hostname: 'price-api.datayuge.com',
    port: 443,
    path: '/api/v1/compare/search?product=iphone%207&api_key=4ECmIcYuCkqKCAfbYzkzeulI9Vgpwe53Qnc',
    method: 'GET'
};
var req = https.request(options, function(res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {

        body += chunk;

    });

    res.on('end', function() {

        var wunder=JSON.parse(body);
        console.log("__");
        console.log(wunder);

    });
});

// handle failure
req.on('error', function(e) {
    throw e;
});

req.end();
