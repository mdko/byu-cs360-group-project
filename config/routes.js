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

	// POSTs
	app.post('/add', counselor.additem);
	app.post('/login', counselor.loginattempt);
}