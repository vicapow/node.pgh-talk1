var http = require('http');
http.createServer(function (req, res) {
	// header status code, 200
	if(req.method==='GET'){
		if(req.url==='/'){
			res.writeHead(200,{'Content-Type': 'text/plain'});
			res.end("You're home!\n");
		}else if(req.url==='/api'){
			res.writeHead(200,{'Content-Type':'application/json'});
			res.end(JSON.stringify({foo:'bar'}));
		}else{
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end("You're host :(\n");
		}
	}else{
		res.writeHead(404);
		return res.end();
	}
}).listen(3000,'127.0.0.1');