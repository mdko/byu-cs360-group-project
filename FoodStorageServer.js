var http = require('http');
var mysql = require('mysql');
var async = require('async');

var connection = mysql.createConnection({ 
   user: "$C9_USER", 
   password: "", 
   database: "c9"
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Ryan! What do I do now? I need a working mysql database. \n');
  console.log("Hello World");
}).listen(process.env.PORT);

//Insert a food item into the table, this function will eventually have variable initialized by a JSON document
var email;
var foodType;
var expirationDate;
var amount;
var measurement;
var storageLocation;
var insertFood(email, foodType, expirationDate, amount, measurement, storageLocation){
    connection.connect();
    //Prepare Insert Statement
    var statement = "("+email+", "+foodType+", "+expirationDate+", "+amount+", "+measurement+", "+storageLocation+");"
    var sql = "INSERT INTO FoodStorage (email, foodtype, expirationDate, amount, measurement, storageLocation) VALUES ?";
    connection.query(sql, function(err) {
    if (err) throw err;
});
connection.end();
}
//Create User function. Still needs a hashing for the password and salt to prevent rainbow attacks
var email;
var password;
var salt = Math.random();
var addNewUser(email, password, salt){
    connection.connect();
    var sql = "INSERT INTO user (email, password, salt) VALUES ("+email+", "+password", "+ salt");";
    var query = connection.query(sql, function(err) {
    if (err) throw err;
    });
    console.log(query.sql);
    connection.end();
}

//Queries the database to check a person's food supplies, and then calculates how much food will be available

var retrieveUserFood(email){
    connection.connect();
    var sql = "SELECT foodtype, expirationDate, amount, measurement, storageLocation FROM FoodStorage WHERE email = " + email+";";
    connection.query(sql, function(err, rows, fields) {
       if (err) throw err;

    console.log('The solution is: ', rows[0].solution); //This will eventually be made into a JSON object and sent to the client.
    });
    
}
