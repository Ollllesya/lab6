const http = require('http')

http.createServer(function(request,response){

	response.setHeader("Content-Type","text/html; charset=utf-8;");

	if(request.url === "/" || request.url === "/"){
		response.write('<h2>Home Page</h2>');
	}

	else if(request.url === "/is-13fiot-21-192"){
		response.write('<h2> Olesia Skydan 2 cours IS-13</h2>');
	}
	else{
		response.write('<h2>Not found</h2>');
	}
	response.end();
}).listen(3000);
