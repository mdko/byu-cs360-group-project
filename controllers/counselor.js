var db = require('../models/db');

/*
 * GET pages. (right now it is getting all pages, but we might split this up if we want later)
 */

exports.index = function(req, res){
	res.render('index.html');
};

exports.home = function(req, res) {
console.log("YOOOOOOOOOOOO");
	res.render('home.html');
}

exports.intro = function(req, res) {
	res.render('intro.html');
};

exports.add = function(req, res) {
if (!req._passport.session.user) { //was if(!req.user)
		console.log('No user currently logged-in')
		res.render('view.html', {
			foods: [],
			message: 'You must log-in to store and view your foods'
		})
	}
	else {
		res.render('add.html');
		}
}

exports.view = function(req, res) {

	///Query database for foods	
	if (!req._passport.session.user) {
		console.log('No user currently logged-in')
		res.render('view.html', {
			foods: [],
			message: 'You must log-in to store and view your foods'
		})
	} else {
		// TODO: I don't think req.user.facebookid is what we want to look at, since it always remains one id
		// I think we want req._passport.session.user, which unfortunately isn't the exact way you're supposed
		// to do it, but it works...
		console.log('Getting saved foods for logged-in user ' + req._passport.session.user)
		//console.log('Getting saved foods for logged-in user ' + req.user.facebookid)
		db.StoredFood.findAll( {where: {FacebookUserId: req._passport.session.user} }).success(function(foods) {
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var year = today.getFullYear();
			for (var i=0; i<foods.length;i++)
			{
				var str = foods[i].values.expirationDate;
				var result = str.split("/");
				console.log(foods[i].values.expirationDate);
				if(year > result[2])
				{
					foods[i].color = 'red';
				}
				else if(year == result[2] && mm > result[0])
				{
					foods[i].color = 'red';
				}
				else if(year == result[2] && mm == result[0] && dd > result[1])
				{
					foods[i].color = 'red';
				}

			}

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
exports.edit = function(req, res){
	res.render('edit.html');
}
/*
 * POST
 */
 exports.alteritem = function(req, res) {
 //console.log(req.body);
	if(req.body.button2 == "remove"){

	db.StoredFood.destroy({id: req.body.id}); //amount: req.body.amount

	res.render('update.html');
	}
	else if(req.body.button1 == "edit"){
	db.StoredFood.findAll( {where: {FacebookUserId: req._passport.session.user, id: req.body.id } }).success(function(foods) {
		console.log(foods);
			res.render('edit.html', {
				foods: foods, message: '' });
		})
	}
	else if (req.body.button3 == "Update"){
	db.StoredFood.destroy({id: req.body.id}); // Ok, this should remove the old one, allowing us to insert the new one!


	db.FacebookUser.find( {where: {facebookid: req._passport.session.user}}).complete(function(err, fbuser) { // needed to add {where: } clause, was getting wrong user each time
			if (!err && fbuser) {
				console.log('User found: ' + fbuser.facebookid)
				var food = db.StoredFood.create({
					food: req.body.food,
			 		expirationDate: req.body.expiration,	// TODO fix this to Datetime (mysql) or Timestamp (postgresql)
			 		amount: req.body.amount,
			 		measurement: req.body.unit,
			 		storageLocation: req.body.location,
			 		FacebookUserId: fbuser.facebookid
				}).success(function(john) {
  					console.log('Saved foods to table');
				});
			}
		});
		res.render('update.html');
	}
}

exports.edititem = function(req, res) {
db.StoredFood.destroy({id: req.body.id}); // Ok, this should remove the old one, allowing us to insert the new one!


db.FacebookUser.find( {where: {facebookid: req._passport.session.user}}).complete(function(err, fbuser) { // needed to add {where: } clause, was getting wrong user each time
			if (!err && fbuser) {
				console.log('User found: ' + fbuser.facebookid)
				var food = db.StoredFood.create({
					food: req.body.food,
			 		expirationDate: req.body.expiration,	// TODO fix this to Datetime (mysql) or Timestamp (postgresql)
			 		amount: req.body.amount,
			 		measurement: req.body.unit,
			 		storageLocation: req.body.location,
			 		FacebookUserId: fbuser.facebookid
				}).success(function(john) {
  					console.log('Saved foods to table');
				});
			}
		});
		db.StoredFood.findAll( {where: {FacebookUserId: req._passport.session.user} }).success(function(foods) {
			res.render('view.html', {
				foods: foods,
				message: ''
			})
		})

}

exports.removeitem = function(req, res) {
if (!rreq._passport.session.user) {
		res.render('add.html')
	} else {
		console.log(req);
		db.FacebookUser.find( {where: {facebookid: req._passport.session.user}} ).complete(function(err, fbuser) {
			if (!err && fbuser) {
				console.log()
				var food = db.StoredFood.create({
					food: req.body.food,
			 		expirationDate: req.body.expiration,	// TODO fix this to Datetime (mysql) or Timestamp (postgresql)
			 		amount: req.body.amount,
			 		measurement: req.body.unit,
			 		storageLocation: req.body.location,
			 		FacebookUserId: fbuser.facebookid
				}).success(function(john) {
  					console.log('Removed food item from table');
				});
			}
		});
	}
	res.render('view.html');
}

exports.addbarcode = function(req, res) {
	//Do computation here by parsing information from req object

}

exports.additem = function(req, res) {
	console.log("test");
	if (!req._passport.session.user) {
		res.render('add.html')
	}
	else if(req.body.food == "" || req.body.amount == "" || req.body.location == ""){
		console.log("Empty info");
		res.render('add.html')
	} else {
		console.log("req.body");
		console.log(req.body);
		console.log("req.body");
		console.log(req.body.amount);
		console.log(req.body.unit);
		console.log(req.body.location);
		//console.log(req);
		console.log(req._passport.session.user)
		db.FacebookUser.find( {where: {facebookid: req._passport.session.user}}).complete(function(err, fbuser) { // needed to add {where: } clause, was getting wrong user each time
			if (!err && fbuser) {
				console.log('User found: ' + fbuser.facebookid)
				var food = db.StoredFood.create({
					food: req.body.food,
			 		expirationDate: req.body.expiration,	// TODO fix this to Datetime (mysql) or Timestamp (postgresql)
			 		amount: req.body.amount,
			 		measurement: req.body.unit,
			 		storageLocation: req.body.location,
					color: req.body.color,
			 		FacebookUserId: fbuser.facebookid
				}).success(function(john) {
  					console.log('Saved foods to table');
				});
			}
		});
		res.render('update.html')	// TODO either update something on the screen or tell the user it was successfully saved (add something to the response?)
	}
}

// exports.googlecallback = function(req, res){
// 	res.render('home.html')
// }

//TODO review difference between redirecting and rendering here...
//We want to save the fact that the user is now authenticated
exports.facebookcallback = function(req, res) {
	res.redirect('/home?id='+req.user.facebookid)	// don't think I need to change this req._passport.session.user
	//res.send(req.user);	// user information is now stored in this!
	// res.render('home.html')
}
