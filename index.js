var https = require("https");
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
        //console.log("__");
        //console.log(wunder);
        return ({
          "fulfillmentText":"Getting all phones"
              ,"fulfillmentMessage":[{"text":{"text":["fndkfkinfidf"]}}]
,"source":"testing"
             })


    });

});

req.on('error', function(e) {
    throw e;
});

req.end();
