
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
	// Do logic stuff here
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