var https = require("https");
var request =  require('request');
var express = require('express');
var app = express();
var path = require("path");
var server = require('https').createServer(app);

app.get('/', function(req, res  ) {
   var wunder={} ;
var options = {
    hostname: 'price-api.datayuge.com',
    port: 443,
    path: '/api/v1/compare/search?product=oneplus%015t&api_key=4ECmIcYuCkqKCAfbYzkzeulI9Vgpwe53Qnc',
    method: 'GET'
};
var request = https.request(options, function(res) {
   var body='';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {

        body += chunk;

    });

    res.on('end', function() {

         wunder=JSON.parse(body);
        console.log(wunder);
    });
});

// handle failure
request.on('error', function(e) {
    throw e;
});
	res.json({
         	success:true,
        	result:wunder
         });
 request.end();
  });
app.listen(3000);
