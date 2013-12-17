var db = require('../models/db');
/*
 * GET home page. (right now it is getting all pages, but we might split this up if we want later)
 */

/** This is how the 'express <name>' default installer does
 * 	it, routing a .jade file
 */
// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

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

exports.login = function(req, res) {
	res.render('login.html');
}

/*
 * POST
 */
exports.additem = function(req, res) {
	// Do logic stuff here
	// An example of using the database. Will put this is the post requests
	// db.User.create({
	// 	email: 'Han Solo', 
	// 	passwordhash: '1234', 
	// 	salt: '12#21$1!@'
	// })
	// .complete(function(err, user){
	// });

	// res.send(req.body.food);
	db.StoredFood.create({
		food: req.body.food,
    	expirationDate: req.body.expiration,
    	amount: req.body.amount,
    	measurement: 'pounds',
    	storageLocation: req.body.location,
	})
	.complete(function(err, user){

	});
}