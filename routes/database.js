var express = require('express');
var router = express.Router();
var connection;

function databaseConnect(){
  var Connection = require('tedious').Connection;
  var config = {
    userName: 'admin1',
    password: '13245768m!',
    server: '2balls2guys.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: '2guys2balls'}
  };
  connection = new Connection(config);

  connection.on('connect', function(err) { 
    if (err) {
      console.log(err);
    } else {
      executeStatement();
      console.log("Connected");
    }
  });
}

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement() {
    //var query = "CREATE TABLE users(uname varchar(255),passwd varchar(255),email varchar(255));";
    var query = "INSERT INTO users(uname, passwd, email) VALUES('john', 'password', 'john@gmail.com')";
    request = new Request(query, function(err) {
    if (err) {
        console.log(err);} 
    });

    request.on('done', function(rowCount, more) {
      console.log(rowCount + ' rows returned');
    });

    console.log("query executed");
    connection.execSql(request);
}


router.post('/login', function(request, response) {
  databaseConnect();
  
  response.send('respond with a resource');
});

module.exports = router;