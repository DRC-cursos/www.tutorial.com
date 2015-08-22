var http = require('http');

var server = http.createServer(function(resquest, response){
  response.writeHead(200);
  response.write('<h1> Hello From NodeJS </h1>');
  response.end();
});

server.listen(8080);

console.log('Server runnig at http://127.0.0.1:8080');