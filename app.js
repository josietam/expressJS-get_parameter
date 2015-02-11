var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port);
console.log("Server is on at port" + port);

app.get('/api/users', function(request, response){
  response.send(request.param('id') + "/" + request.param('token') + "/" + request.param('geo'));
});


app.post('/api/users', function(request, response){
  response.send(request.body.id + '\n' + request.body.token + '\n' + request.body.geo);
});

app.get('/api/:version', function(request, response){
  response.send(req.params.version);
});

app.param('name', function(request,response, next, title){
  request.name = title + '-dude';
  next();
});

app.get('/api/users/:name', function(request, response){
  response.send('Yo! ' + request.name);
});