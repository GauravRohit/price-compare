/*var http = require("http");
var request =  require('request');
var express = require('express');
var app = express();
app.post('/webhook',function(req,res){
res.setHeader('content-Type','application/json');
var city = req.body.queryResult.parameters['geo-city'];
var w = getWeather(city);
let response = " ";
let responseObj ={"fulfillmentText":response
                  ,"fulfillmentMessage":[{"text":{"text":[w]}}]
                  ,"source":""}
})
var apiKey = 'f6dacb03346d39ed9172cd49941688a3'
var result
function cd (err,response,body){
  if(err){
    console.log('error:',error);
  }
  var weather = Json.parse(body)
  if(weather.message === 'city not found'){
    result = 'Unable to get weather '+ weather.message;
  }
  else{
    result = 'Right now its '+weather.main.temp+' degree with '+ weather.weather[0].description;
  }
}

function getWeather(city){
  result = undefined;
  var url = `http://api.openweathermap.org/data/2.5/weather?=q${city}&units=imperial&appid=${apiKeuy}`;
  console.log(url);
  var req = request(url,cb);
  while(result === undefined){
    require('deasync').runLoopOnce();
  }
  return result;
}
*/

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
