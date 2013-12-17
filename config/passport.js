var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, db, config) {

	passport.use(new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(username, password, done) {
		    db.User.findOne({ username: username }, function(err, user) {
		      if (err) { return done(err); }
		      if (!user) {
		        return done(null, false, { message: 'Incorrect username.' });
		      }
		      if (!user.validPassword(password)) {
		        return done(null, false, { message: 'Incorrect password.' });
		      }
		      return done(null, user);
		    });
	  	}
	));
}