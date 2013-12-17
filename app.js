/**
 * Module dependencies.
 */
var express = require('express');
var counselor = require('./controllers/counselor'); // these were called routes originally
// var user = require('./controllers/user');
var http = require('http');
var path = require('path');
var db = require('./models/db');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');	// original 'express <thing>' setup uses jade
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());			// equivalent to app.use(express.bodyParser())
app.use(express.urlencoded());		// "	"
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// GETs
app.get('/', counselor.index);
app.get('/intro', counselor.intro)
app.get('/add', counselor.add);
app.get('/view', counselor.view);
app.get('/register', counselor.register);
app.get('/login', counselor.login);

// POSTs
app.post('/add', counselor.additem);

//app.get('/users', user.list);	// from original, left to study/understand framework

db.sequelize.sync({force:false}).complete(function(err) {
	if (err) {
		throw err
	} else {
		http.createServer(app).listen(app.get('port'), function(){
		  console.log('Express server listening on port ' + app.get('port'));
		});
	}
});
