var express = require('express');
var app 	= express();
var fs 		= require('fs');
var routes	= fs.readdirSync('./routes');

console.log('He cargado la ruta ' + routes);

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});

console.log('1');

// app.get('/', function(){
// 	console.log('routaok');
// });
module.exports = app;