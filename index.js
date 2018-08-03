var express = require('express');
var app = express();
var server = require('https').createServer(app);
var request=require("request")

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8083;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
var phone;
main();
app.post('/', function(req, res) {
 // var w = main();
  // var user_id = req.body.queryResult.parameters['geo-city'];
  console.log("------------------------------")
  //.console.log(body.queryResult.parameters)
    console.log('Dialogflow Request body: ' + req.body);
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
  console.log("------------------------------")
	// ejs render automatically looks in the views folder
	res.json({
    'fulfillmentText':"",
    'fulfillmentMessages':[{"text":{"text":["user_id"]}}],
    'source':'gmail'
  })
});
// console.log(phone)
;
app.listen(port, function() {
	console.log('Our app is running on http://localhost' + port);
});

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
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        phone  = 'Price of '+result.data[0].product_title +' is '+result.data[0].product_lowest_price;


        console.log(phone)

        return phone;
    }, function(err) {
        console.log(err);
    })

}
