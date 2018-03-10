-- Database Creation/Use --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Table Creation --
CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false
);