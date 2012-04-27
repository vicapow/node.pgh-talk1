
// for more info, checkout http://expressjs.com/

var express = require('express')
	, app = express.createServer()

app.configure(function(){
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.get('/',function(req,res,next){
		res.render('4',{
			layout : false
		});
	});
});
app.listen(3000);


