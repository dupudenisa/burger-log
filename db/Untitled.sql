DROP DATABASE IF EXISTS g2hknh0f9cazg6vo;
CREATE DATABASE g2hknh0f9cazg6vo;
USE g2hknh0f9cazg6vo;

CREATE TABLE burgs (
    id INT AUTO_INCREMENT NOT NULL
    , name VARCHAR(255) NOT NULL
	, devour BOOLEAN DEFAULT false
	, createdAt TIMESTAMP NOT NULL
	,PRIMARY KEY(id)
);
    