//*************************   DEPENDENCIES   *************************
var mysql = require("mysql");
var inquirer = require("inquirer");


//*************************   VARIABLES   *************************
var what;
var howMany;
var stock;
var price = 0;
var total = 0;


//*************************   CONNECT TO DATABASE   *************************
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});


//*************************   MAIN   *************************

// function shows all products
function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    console.log("WELCOME TO OUR STORE - This is what we've got!");
    console.log("ID| NAME | PRICE    ");
    for(var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product + " | " + "$" + res[i].price + ".00");
    }
    console.log("-----------------------------------");
    shop();
  });

}


// function prompts user for action
function shop() {
  // Prompt user for product and amount
  inquirer
  .prompt([
    {
      type: "input",
      message: "What would you like to buy? Please enter the product ID.",
      name: "what"
    },
    {
      type: "input",
      message: "How many would you like?",
      name: "howMany"
    }
  ])
  .then(function(answer) {

    what = answer.what;
    howMany = answer.howMany;
    price = 0;

    // Grab the price of the item
    connection.query("SELECT price, stock FROM products WHERE id = " + [what], function(err, res) {
      if (err) throw err;

      stock = res[0].stock;
      price = res[0].price;
      total = price * answer.howMany;

      console.log("stock: " + stock);
      console.log("howmany: " + howMany);

      // Compare stock vs order amount
      if(stock < howMany) {
        console.log("We don't have enough units");
      } else {

        var newStock = stock - howMany;
        console.log("newstock: " + newStock);

        // Update stock in database
        var query = "UPDATE products SET stock = ? WHERE id = " + [what];
        connection.query(query, [newStock], function(err, res) {
          console.log("Stock updated");
        });
      }
      connection.end();
    });
  });

}


// begin();








//*************************   END   *************************
