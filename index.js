var express = require('express');
var app = express();
var server = require('https').createServer(app);


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.post('/', function(req, res) {
//var w = getWeather();
	// ejs render automatically looks in the views folder
	res.json({
    'fulfillmentText':'Hello Ankur',
    'fulfillmentMessages':[{"text":{"text":["mjsafjdk"]}}],
    'source':'gmail'
  })
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
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
/*function getWeather(){
  var url = 'https://price-api.datayuge.com/api/v1/compare/search?product=oneplus%015t&api_key=4ECmIcYuCkqKCAfbYzkzeulI9Vgpwe53Qnc';
  var options = {
  host: url,
  method: 'GET'
};

http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
  return chunk;
}).end();
}*/
