CREATE DATABASE IF NOT EXISTS inscripciones_db;
USE inscripciones_db;

CREATE TABLE inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    tipoDoc VARCHAR(5) NOT NULL,
    numDoc VARCHAR(10) NOT NULL,
    anio INT NOT NULL,
    division VARCHAR(3) NOT NULL,
    email VARCHAR(100) NOT NULL
);
