var db = require('../models/db');

/*
 * GET pages. (right now it is getting all pages, but we might split this up if we want later)
 */

exports.index = function(req, res){
	res.render('index.html');
};

exports.home = function(req, res) {
	res.render('home.html');
}

exports.intro = function(req, res) {
	res.render('intro.html');
};

exports.add = function(req, res) {
	res.render('add.html');
}

exports.view = function(req, res) {
	///Query database for foods	
	if (!req.user) {
		console.log('No user currently logged-in')
		res.render('view.html', {
			allfoods: [],
			message: 'You must log-in to store and view your foods'
		})
	} else {
		console.log('Getting saved foods for logged-in user')
		db.StoredFood.findAll( {where: {FacebookUserId: req.user.facebookid} }).success(function(foods) {
			res.render('view.html', {
				foods: foods,
				message: ''
			})
		})
	}
}

exports.register = function(req, res) {
	res.render('register.html');
}

exports.loginpage = function(req, res) {
	res.render('login.html');
}

exports.schedules = function(req, res) {
	res.render('schedules.html');
}

/*
 * POST
 */
exports.additem = function(req, res) {
	if (!req.user) {

	} else {

		db.FacebookUser.find( {facebookid: req.user.facebookid} ).complete(function(err, user) {
			if (!err && user) {

				var food = db.StoredFood.create({
					food: req.body.food,
			 		expirationDate: req.body.expiration,	// TODO fix this to Datetime (mysql) or Timestamp (postgresql)
			 		amount: req.body.amount,
			 		measurement: req.body.unit,
			 		storageLocation: req.body.location,
			 		FacebookUserId: user.facebookid
				}).success(function(john) {
  					console.log('Saved foods to table');
				});
			}
		});
	}
	res.render('add.html')	// TODO either update something on the screen or tell the user it was successfully saved (add something to the response?)
}

// exports.googlecallback = function(req, res){
// 	res.render('home.html')
// }

//TODO review difference between redirecting and rendering here...
//We want to save the fact that the user is now authenticated
exports.facebookcallback = function(req, res) {
	res.redirect('/home?id='+req.user.facebookid)
	//res.send(req.user);	// user information is now stored in this!
	// res.render('home.html')
}