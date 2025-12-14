CREATE DATABASE IF NOT EXISTS testdb;

USE testdb;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT
);

INSERT INTO users (name, email, age) VALUES
('Ana', 'ana@example.com', 25),
('Juan', 'juan@example.com', 30),
('Lucia', 'lucia@example.com', 28),
('Pedro', 'pedro@example.com', 35),
('María', 'maria@example.com', 22);
