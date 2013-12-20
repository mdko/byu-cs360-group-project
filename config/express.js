/**
 * Module dependencies.
 */
var flash = require('connect-flash')
  , express = require('express')
  , http = require('http')
  , path = require('path');

module.exports = function (app, passport, config) {

	app.configure( function() {
		app.set('port', process.env.PORT || 5000);
		app.set('views', config.root + '/views');
		app.engine('html', require('ejs').renderFile);
		//app.set('view engine', 'jade')	// wish we had done it with jade instead of html
		app.use(express.favicon(path.join(__dirname, '/../public/images/favicon.ico')));
		app.use(express.logger('dev'));
		app.use(express.json());			// equivalent to app.use(express.bodyParser())
		app.use(express.urlencoded());		// "	"
		app.use(express.methodOverride());
		app.use(express.static(config.root + '/public'));
		app.use(express.cookieParser());
		app.use(express.session({ secret: 'SECRET' }));
		app.use(flash());
		app.use(passport.initialize());
		app.use(passport.session());
		app.use(app.router);

		// development only
		if ('development' == app.get('env')) {
		  app.use(express.errorHandler());
		}
	})
}
