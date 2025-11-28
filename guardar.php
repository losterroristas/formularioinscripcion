<?php

$conexion = new mysqli("localhost", "root", "", "inscripciones_db");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre   = $_POST["nombre"] ?? null;
$apellido = $_POST["apellido"] ?? null;
$tipoDoc  = $_POST["tipoDoc"] ?? null;
$numDoc   = $_POST["numDoc"] ?? null;
$anio     = $_POST["anio"] ?? null;
$division = $_POST["division"] ?? null;
$email    = $_POST["email"] ?? null;

$sql = "INSERT INTO inscripciones (nombre, apellido, tipoDoc, numDoc, anio, division, email)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);

$stmt->bind_param(
    "ssssiss",
    $nombre,
    $apellido,
    $tipoDoc,
    $numDoc,
    $anio,
    $division,
    $email
);

if ($stmt->execute()) {
    echo "Usuario registrado con éxito";
} else {
    echo "Error al guardar el usuario: " . $stmt->error;
}
