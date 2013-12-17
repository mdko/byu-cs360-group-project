/**
 * Module dependencies.
 */
var express = require('express')
  , passport = require('passport')
  , http = require('http')
  , db = require('./models/db');

// Load configurations
// if test env, load example file
var env = 'development'// || process.env.NODE_ENV
  , config = require('./config/config')[env]

require('./config/passport')(passport, db, config);

var app = express();

require('./config/express')(app, passport, config);

require('./config/routes')(app, passport);

db.sequelize.sync({force:true}).complete(function(err) {
	if (err) {
		throw err
	} else {
		http.createServer(app).listen(app.get('port'), function(){
		  console.log('Express server listening on port ' + app.get('port'));
		});
	}
});
