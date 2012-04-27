// for more info, checkout http://expressjs.com/

var express = require('express')
	, app = express.createServer()

app.configure(function(){
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
	app.get('/',function(req,res,next){
		res.render('home',{
		    title: '<h1>This is the PGH Node.JS Meetup</h1>'
		});
	});
});
app.listen(3000);