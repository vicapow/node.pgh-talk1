
// for more info, checkout http://expressjs.com/
var express = require('express')
	, app = express.createServer()
app.get('/', function(req, res){
    res.send("You're home!");
});
app.get('/api',function(req,res){
	res.json({'foo':'bar'});
});
app.get('/*', function(req,res){
	res.send("You're lost :(");
});


app.listen(3000);