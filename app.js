var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
var http = require('http');
var path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));
console.log('path= ' + path.join(__dirname,'/dist'));
console.log('running from __dirname=' + __dirname);
app.set('port', process.env.PORT || 3000);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
