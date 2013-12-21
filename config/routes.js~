/* Controllers */
var counselor = require('../controllers/counselor');

/* Routes */
module.exports = function (app, passport) {
	// GETs
	app.get('/', counselor.index);
	app.get('/home', counselor.home);
	app.get('/intro', counselor.intro)
	app.get('/add', counselor.add);
	app.get('/view', counselor.view);
	app.get('/register', counselor.register);
	app.get('/login', counselor.loginpage);
	app.get('/schedules', counselor.schedules);
	app.get('/editfood', counselor.edit);
	app.get('/update', counselor.edit);

	// POSTs
	app.post('/view', counselor.alteritem)
	app.post('/add', counselor.additem);
	app.post('/edit', counselor.edititem);
	app.post('/removeitem', counselor.removeitem);
	app.post('/addbarcode', counselor.addbarcode);

	/************************************************************************
	 * Facebook
	 ************************************************************************/
	// Redirect user to Facebook
	app.get('/auth/facebook',
		passport.authenticate('facebook', { //scope: [ 'email', 'user_about_me'],
	    									failureRedirect: '/login' }));

	// Url to which Facebook will redirect user after they have logged in
	// finish the authentication by attempting to obtain an access token; if
	// it is granted, then logged in, else not.
	app.get('/auth/facebook/callback',
	    passport.authenticate('facebook'),// { successRedirect: '/home',
	    								  // failureRedirect: '/login' }),
		counselor.facebookcallback);


	/************************************************************************
	 * Google (this works but right now I don't have it set up to be able to
	 * have this application support letting people use all three (Google, 
	 * Facebook, and personal email) to sign up)
	 ************************************************************************/
 //	 app.get('/auth/google', 
 //		passport.authenticate('google', {
 //      		failureRedirect: '/login',
 //      		scope: [
 //        		'https://www.googleapis.com/auth/userinfo.profile'
 //     		]
 //    	}));
 // 
 //  	app.get('/auth/google/callback',
 //    	passport.authenticate('google'),// { successRedirect: '/home',
 //      									//  failureRedirect: '/login'
 //    	//}),
 //  	 	counselor.googlecallback);


	/************************************************************************
	 * Personal Email (not currently set-up, but Facebook is and Google can be)
	 ************************************************************************/
 //	 app.post('/users/session',
 //    	passport.authenticate('local', {
 //      		failureRedirect: '/login',
 //      		failureFlash: 'Invalid email or password.'
 //    	}), users.session)
}