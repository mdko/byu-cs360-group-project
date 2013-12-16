/**
 * Module dependencies.
 */

var express = require('express');
var counselor = require('./controllers/counselor'); // these were called routes originally
// var user = require('./controllers/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');	// original 'express <thing>' setup uses jade
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', counselor.index);
app.get('/intro', counselor.intro)
app.get('/add', counselor.add);
app.get('/view', counselor.view);
app.get('/register', counselor.register);
app.get('/login', counselor.login);

//app.get('/users', user.list);	// from original, left to study/understand framework

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
