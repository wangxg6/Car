var http = require('http');

http.createServer(function(request, response) {
	var post = '';
	request.on('data', function(chunck) {
		post += chunck;
	});

	request.on('end', function() {
		console.log(post);
	})

	response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  response.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.end('my test server');
}).listen(8888);

console.log('server start');