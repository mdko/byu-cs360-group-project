var http = require('http');
var mysql = require('mysql');

var connection = mysql.createConnection({ 
   user: "$C9_USER", 
   password: "", 
   database: "c9"
});
connection.connect(function(err) {
  // connected! (unless `err` is set)
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Ryan! What do I do now? I need a working mysql database. \n');
  console.log("Hello World");
}).listen(process.env.PORT);

//Insert a food item into the table, this function will eventually have variable initialized by an API.
var email;
var foodType;
var Amount;
var expirationDate;
/*var insertFood; (email, foodType, Amount, expirationDate)
{
    //Prepare Insert Statement
    var sql = "INSERT INTO FoodStorage (email, foodtype, amountInPounds, ExpirationDate) VALUES ?";
    var values = [
    ['pizzaGuy@gmail.com', 'Wheat', 10, '10/12/14']
    ];
    connection.query(sql, [values], function(err) {
    if (err) throw err;
    connection.end();
});
}
//Create User function. Since Michael was originally intended to do this section, it currently doesn't use Salt/hashing security.
var password;
var salt;
var addNewUser; (email, password, salt)
{
    var sql = "INSERT INTO user (email, password, salt) VALUES ?";
    var values = [
    [email, password, salt]
    ];
    connection.query(sql, [values], function(err) {
    if (err) throw err;
    connection.end();
    });
}

//Queries the database to check a person's food supplies, and then calculates how much food will be available
var timeInDays;
var CalculateFoodLength; (email, timeInDays)
{
    var sql = "SELECT foodtype, amountInPounts FROM FoodStorage WHERE email = " + email;
    connection.query(sql, function(err, results) {
    if (err) throw err;
    
    //Work with the results array returned
    for( var i=0; i < results.length; i++){
        //Any fancy processing
    }
    connection.end();
    });
    
}*/
