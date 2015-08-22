var fileSystem = require('fs');
var http = require('http');
var html;

fileSystem.stat('page.html', function(error, stats){
    console.log('Is file ?' + stats.isFile());
    console.log(stats);
});
fileSystem.readFile('./page.html', function(erros, buffer){
    html = buffer.toString();
    //console.log('************* Read *************');
    //console.log(html);
});

http.createServer(function(req, res){
    res.write(html);
    res.end();
}).listen(8080);