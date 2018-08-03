var https = require("https");
var request =  require('request');
var express = require('express');
var app = express();
var phone;

function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://price-api.datayuge.com/api/v1/compare/search?product=oneplus%015t&api_key=4ECmIcYuCkqKCAfbYzkzeulI9Vgpwe53Qnc'
    };
    // Return new promise
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {

                resolve(JSON.parse(body));

            }
        })
    })

}
function main(){
app.get('/', function(req, res  ) {

    var initializePromise = initialize();
    initializePromise.then(function(result) {
        phone  = result;
        res.json({
        	success:true,
        	result:phone
        })
    }, function(err) {
        console.log(err);
    })

})
}
var server = require('https').createServer(app);
main();
app.listen(3000);
