var express = require('express');//('express') é um pacote

var app = express();

/*app.get('/', function(req, res){
    res.send('<h1>Hello from Express</h1>');
});*/

app.use(express.static('public'));

//Traçando uma nova rota
app.get('/service', function(req, res){
    res.json({data: 'Some data...'});
});

//Traçando uma nova rota
app.get('/service/cep/:number', function(req, res){
    console.log(req.params.number);

    res.json({
        bairro: "Bela Vista",
        logradouro: "Avenida Paulista",
        cep: "01310000",
        uf: "SP",
        localidade: "São Paulo"
    });
});

app.listen(8080);

console.log('Server running...');