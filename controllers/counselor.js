var db = require('../models/db');
var passport = require('passport');

/*
 * GET pages. (right now it is getting all pages, but we might split this up if we want later)
 */

exports.index = function(req, res){
	res.render('index.html');
};

exports.intro = function(req, res) {
	res.render('intro.html');
};

exports.add = function(req, res) {
	res.render('add.html');
}

exports.view = function(req, res) {
	res.render('view.html');
}

exports.register = function(req, res) {
	res.render('register.html');
}

exports.loginpage = function(req, res) {
	// passport.authenticate('local', 
	// 	res.redirect('')
	res.render('login.html');
}

exports.home = function(req, res) {
	res.render('home.html');
}
/*
 * POST
 */
exports.additem = function(req, res) {
	// Do logic stuff here
	// An example of using the database. Will put this is the post requests
	db.User.create({
		email: 'Han Solo', 
		passwordhash: '1234', 
		salt: '12#21$1!@'
	})
	.complete(function(err, user){
	});

	// res.send(req.body.food);
	// TODO figure out how to get attached user
	// db.StoredFood.create({
	// 	food: req.body.food,
 //    	expirationDate: req.body.expiration,
 //    	amount: req.body.amount,
 //    	measurement: 'pounds',
 //    	storageLocation: req.body.location,
	// })
	// .complete(function(err, user){

	// });
}

exports.registeremail = function(req, res) {

}

exports.loginattempt = function(req, res) {

}

// exports.loginattempt = passport.authenticate('local', { successRedirect: '/home',
//                                    failureRedirect: '/login',
//                                    failureFlash: true });