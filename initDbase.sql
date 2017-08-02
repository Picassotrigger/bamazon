-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect animals_db --
USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  price INTEGER(10) NOT NULL,
  stock INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product, department, price, stock)
VALUES ("frame", "bicycle", 300.00, 20);

INSERT INTO products (product, department, price, stock)
VALUES ("wheel", "bicycle", 70.00, 80);

INSERT INTO products (product, department, price, stock)
VALUES ("handlebars", "bicycle", 50.00, 40);

INSERT INTO products (product, department, price, stock)
VALUES ("crank set", "bicycle", 150.00, 20);

INSERT INTO products (product, department, price, stock)
VALUES ("brake set", "bicycle", 200.00, 30);

INSERT INTO products (product, department, price, stock)
VALUES ("pedal", "bicycle", 20.00, 100);

INSERT INTO products (product, department, price, stock)
VALUES ("saddle", "bicycle", 40.00, 40);

INSERT INTO products (product, department, price, stock)
VALUES ("helmet", "clothing", 70.00, 40);

INSERT INTO products (product, department, price, stock)
VALUES ("shoes", "clothing", 200.00, 100);

INSERT INTO products (product, department, price, stock)
VALUES ("jersey", "clothing", 80.00, 30);

INSERT INTO products (product, department, price, stock)
VALUES ("shorts", "clothing", 50.00, 70);