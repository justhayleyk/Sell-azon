const mysql = require("mysql");
const Table = require("cli-table");
const inquirer = require("inquirer");

let total = 0;

// creating connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "hayley",
  port: 3306,
  password: "hayley123",
  database: "sellazon_db"
});

// Display Table
let table = new Table({
  head: ["ID", "Product Name", "Department Name", "Price", "Stock"],
  colWidths: [5, 40, 20, 10, 10]
});

// Connection
connection.connect(function(err) {
  if (err) {
    console.log(`Oh dear! Something has gone horribly wrong`);
    console.log(err);
  } else {
    console.log(
      `Welcome to Sellazon.  Your one stop for all things expensive.`
    );
    console.log(`-----------------`);
    console.log(`Here are today's specials...`);

    console.log(`-----------------`);
    createTables(promptConsumer);
  }
});

//Creating the Table for the Stock
function createTables(callback) {
  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;

    result.forEach(function(row) {
      table.push([
        row.id,
        row.product_name,
        row.department_name,
        "$" + row.price,
        row.stock
      ]);
    });

    console.log(table.toString());
    callback();
  });
}

// Prompting the shopper
function promptConsumer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message:
          "Please enter the ID of the product you would like to purchase. ",
        validate: function(value) {
          var value = parseInt(value);
          return value >= 1 && value <= table.length;
        }
      },
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to buy?",
        validate: function(value) {
          var value = parseInt(value);
          return value >= 1;
        }
      }
    ])
    .then(function(answers) {
      updateInventory(answers.id, answers.quantity, promptConsumer);
    });
}

// Update Inventory
function updateInventory(id, quantity, callback) {
  connection.query("SELECT * FROM products WHERE id = ?", [id], function(
    err,
    result
  ) {
    let stockQuantity = result[0].stock;
    if (err) throw err;
    let currentItem = result;
    if (quantity <= stockQuantity) {
      connection.query(
        "UPDATE products SET stock = stock - ? WHERE id = ?",
        [quantity, id],
        function(err, result) {
          let subtotal = currentItem[0].price * quantity;
          total = total + subtotal;
          if (err) throw err;

          console.log(`
          Item: ${currentItem[0].product_name}
          Price per item: $${currentItem[0].price}
          Quantity: ${quantity} 
          Grand Total: $${total}
          `);
          console.log(
            `Thank you for your purchase today! Enjoy your ${
              currentItem[0].product_name
            }`
          );
        }
      );
    } else {
      console.log(`Sorry! We only have ${stockQuantity} currently in stock.`);
      callback();
    }
  });
}

function quit(answer) {
  if (answer == "q") {
    process.exit();
  } else {
    return true;
  }
}
