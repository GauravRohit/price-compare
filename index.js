var http = require("http");
var request =  require('request');
var bodyparser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoder({extended: true}));
var path = require("path");
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.post('/webhook',function(req,res){
res.setHeader('content-Type','application/json');
var city = req.body.queryResult.parameters['geo-city'];
var w = getWeather(city);
let response = " ";
let responseObj =("fulfillmentText":response
                  ,"fulfillmentMessage":[{"text":{"text":[w]}])
                  ,"source":""
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
