<?php
require 'conexion.php';

$sql = "SELECT * FROM inscripciones ORDER BY apellido ASC, nombre ASC";
$resultado = $conexion->query($sql);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Inscripciones</title>
    <link rel="stylesheet" href="estilos/estilos.css">
</head>
<body>

<div class="tabla-container">
    <h2 class="titulo-listado">📋 LISTADO DE INSCRIPTOS</h2>

    <a href="index.php" class="btn-volver">⬅ Volver</a>

    <table border="2">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo Doc</th>
            <th>N° Doc</th>
            <th>Año</th>
            <th>División</th>
            <th>Email</th>
        </tr>
        </thead>

        <tbody>
        <?php if ($resultado->num_rows > 0): ?>
            <?php while ($fila = $resultado->fetch_assoc()): ?>
                <tr>
                    <td><?= $fila['id'] ?></td>
                    <td><?= htmlspecialchars($fila['nombre']) ?></td>
                    <td><?= htmlspecialchars($fila['apellido']) ?></td>
                    <td><?= $fila['tipoDoc'] ?></td>
                    <td><?= $fila['numDoc'] ?></td>
                    <td><?= $fila['anio'] ?></td>
                    <td><?= $fila['division'] ?></td>
                    <td><?= $fila['email'] ?></td>
                </tr>
            <?php endwhile; ?>
        <?php else: ?>
            <tr>
                <td colspan="8">No hay inscripciones registradas.</td>
            </tr>
        <?php endif; ?>
        </tbody>

    </table>
</div>

</body>
</html>
