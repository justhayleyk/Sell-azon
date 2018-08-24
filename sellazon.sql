CREATE DATABASE sellazon_db;

USE sellazon_db;

CREATE TABLE products
(
  id INTEGER(10)
  AUTO_INCREMENT NOT NULL,
  product_name VARCHAR
  (50) NOT NULL,
  department_name VARCHAR
  (50) NOT NULL,
  price INTEGER
  (10) NOT NULL,
  stock INTEGER
  (10),
  PRIMARY KEY
  (id)
);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("MANSUR GAVRIEL Leather Circle Crossbody Bag", "Women's Handbags", 695, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Strathberry MC Mini Leather Crossbody Bag", "Women's Handbags", 495, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Danse Lente Mini Lorna Leather Bucket Bag", "Women's Handbags", 520, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Tory Burch Pump", "Women's Shoes", 295, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Christian Louboutin Pigalle Follies", "Women's Shoes", 795, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("VALENTINO Rockstud Pump", "Women's Shoes", 1520, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Michael Kors Bradshaw Smart Watch", "Accessories", 329, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Gucci G Timeless Watch", "Accessories", 829, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Bony Levy Diamond Earrings ", "Accessories", 1329, 25);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Sethi Couture Diamond Ring", "Accessories", 1629, 25);