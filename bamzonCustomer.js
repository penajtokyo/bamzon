var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection information for bamzon database

var connection = mysql.createConnection({
    host: "localhost",
    //the port I am using
    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });

