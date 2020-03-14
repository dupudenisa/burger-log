DROP DATABASE IF EXISTS burgs_db;
CREATE DATABASE burgs_db;
USE burgs_db;

CREATE TABLE burgers (
id INT  AUTO_INCREMENT
, name VARCHAR(255) NOT NULL
, cheesy_buns BOOLEAN DEFAULT false
, PRIMARY KEY (id)
);


