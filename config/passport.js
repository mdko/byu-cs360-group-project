var LocalStrategy = require('passport-local').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy
  , GoogleStrategy = require('passport-google').Strategy;

module.exports = function (passport, db, config) {

	//For Facebook session serialization
	passport.serializeUser(function(user, done) {
		done(null, user.facebookid);
	});

	passport.deserializeUser(function(id, done) {
		db.FacebookUser.find({ facebookid: id }).complete(function (err, user) {
	  		done(err, user);
		});
	});

	//Use Facebook strategy
	passport.use(new FacebookStrategy({
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL
	},
	function(accessToken, refreshToken, profile, done) {
		db.FacebookUser.findOrCreate({ facebookid : profile.id }).complete(function (err, user) {
			done(err, user);
		});
	}
	));

	// For Google serialization
	// passport.serializeUser(function(user, done) {
	// 	done(null, user.openid);
	// });

	// passport.deserializeUser(function(id, done) {
	// 	db.GoogleUser.find({ openid: id }, function (err, user) {
	//   		done(err, user);
	// 	});
	// });

	//Use Google Strategy
	// passport.use(new GoogleStrategy({
	// 	returnURL: config.google.callbackURL,
	//     realm: config.google.realm
	// },
	// function(identifier, profile, done) {
	//    	db.GoogleUser.findOrCreate({ openid: identifier }).complete(function(err, user) {
	//    		done(err, user);
	// 	});
	// }
	// ));

	//For personal email (not currently set up)
	// passport.use(new LocalStrategy({
	// 		usernameField: 'email',
	// 		passwordField: 'password'
	// 	},
	// 	function(username, password, done) {
	// 	    db.User.findOne({ username: username }, function(err, user) {
	// 	      if (err) { return done(err); }
	// 	      if (!user) {
	// 	        return done(null, false, { message: 'Incorrect username.' });
	// 	      }
	// 	      if (!user.validPassword(password)) {
	// 	        return done(null, false, { message: 'Incorrect password.' });
	// 	      }
	// 	      return done(null, user);
	// 	    });
	//   	}
	// ));
}