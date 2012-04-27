
// for more info, checkout http://expressjs.com/

var express = require('express')
	, app = express.createServer()

app.configure(function(){
	app.use(function(req,res,next){
		console.log('req for url: '+req.url);
		return next();
	});
	app.get('/',function(req,res,next){
		res.send('Hello World!');
	});
	app.get('/foo',function(req,res,next){
		res.send('Hello Foo!');
	});
	app.get('/:id',function(req,res,next){
		res.send('Hello User with ID '+req.params.id+'!');
	});
});
app.listen(3000);







