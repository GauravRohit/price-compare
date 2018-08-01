var options = {
    hostname: 'price-api.datayuge.com',
    port: 443,
    path: '/api/v1/compare/search?product=iphone%207&api_key=Mb6gnIUu4vTJVmcVtxo2dF67X9EPSyAWPJf',
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

req.end()
