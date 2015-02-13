'use strict'

// use something slimer for just a few requests but this clean for now
var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(serveStatic('www', {'index': ['app.html']}));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


require('./helpers/gets.js')(app);

app.listen(8080, function () {
  console.log('Example app listening at 127.0.0.1:8080');
});
