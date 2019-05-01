DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	ItemId INT(4) NOT NULL,
	Product VARCHAR(100) NOT NULL,
	Department VARCHAR(100) NOT NULL,
	Price DECIMAL(10,2) NOT NULL,
	StockQuantity INT(20) NOT NULL,
	PRIMARY KEY (ItemId)
);

Select * FROM products;

INSERT INTO products (ItemId, Product, Department, Price, StockQuantity) 
VALUES (1101, "Comfort legging", "Clothing", 29.99, 16),
	   (1102, "Twill Joggers", "Clothing", 19.99, 5),
	   (1103, "Collegiate hoodie", "Clothing", 39.99, 29),
	   (2101, "Air freshener", "Household", 129.99, 15),
	   (2102, "Trash Bags", "Household", 14.99, 140),
	   (2103, "Paper Towels", "Household", 1.99, 155),
	   (3101, "Body Lotion", "Skincare", 9.99, 41),
	   (3102, "Sunscreen", "Skincare", 12.99, 5),
	   (2104, "Light Bulbs", "Household", 11.99, 45),
	   (3103, "Toner", "Skincare", 39.99, 19)