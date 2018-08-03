var http = require("http");
var request =  require('request');
var express = require('express');
var app = express();

var path = require("path");
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.post('/webhook',function(req,res){
res.setHeader('content-Type','application/json');
var city = req.body.queryResult.parameters['geo-city'];
var w = getWeather(city);
let response = " ";
let responseObj ={"fulfillmentText":"hahahahahahah"
                  ,"fulfillmentMessage":[{"text":{"text":["lolo"]}}]
                  ,"source":""
                }
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
  var url = 'https://price-api.datayuge.com/api/v1/compare/search?product=oneplus%015t&api_key=4ECmIcYuCkqKCAfbYzkzeulI9Vgpwe53Qnc';
  console.log(url);
  var req = request(url,cb);
  while(result === undefined){
    require('deasync').runLoopOnce();
  }
  return result;
}
