const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, ".."))); 
app.use(express.json());

app.post("/registrar", (req, res) => {
  const nuevoUsuario = req.body;
  const carpetaBase = path.join(__dirname, "..", "base de datos");
  const rutaArchivo = path.join(carpetaBase, "base.json");

  // Crear carpeta si no existe
  if (!fs.existsSync(carpetaBase)) {
    fs.mkdirSync(carpetaBase, { recursive: true });
  }

  // Leer archivo si existe
  let usuarios = [];
  if (fs.existsSync(rutaArchivo)) {
    try {
      usuarios = JSON.parse(fs.readFileSync(rutaArchivo, "utf8"));
    } catch (err) {
      usuarios = [];
    }
  }

  // Agregar nuevo usuario
  usuarios.push(nuevoUsuario);

  // Guardar
  try {
    fs.writeFileSync(rutaArchivo, JSON.stringify(usuarios, null, 2));
    res.json({ status: "ok" });
  } catch (error) {
    console.error("Error al guardar:", error);
    res.status(500).json({ status: "error" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
