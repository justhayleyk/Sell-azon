const mysql = require("mysql");
const Table = require("cli-table");

let table = new Table({
  head: ["ID", "Product Name", "Department Name", "Price", "Stock"],
  colWidths: [5, 30, 20, 10, 7]
});

// test data
// table.push(
//   ["45", "Second value", "Third value", "Forth value", "Fifth value"],
//   ["46", "Second value b", "Third value b", "Forth value b", "Fifth value b"]
// );

// console.log(table.toString());

// creating connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  pasword: "password",
  database: "sellazon_db"
});

// connection
connection.connect(err => {
  if (err) throw err;
  console.log(`MySQL is connected!`);
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
