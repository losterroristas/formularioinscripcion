const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {

    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const tipoDoc = document.getElementById('tipoDoc').value;
    const numDoc = document.getElementById('numDoc').value.trim();
    const anio = document.getElementById('anio').value;
    const division = document.getElementById('division').value;
    const email = document.getElementById('email').value.trim();

    // Validaciones
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const soloNumeros = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Campos vacíos
    if (!nombre || !apellido || !tipoDoc || !numDoc || !anio || !division || !email) {
        e.preventDefault();
        alert("Por favor completá todos los campos.");
        return;
    }

    // Nombre letras
    if (!soloLetras.test(nombre)) {
        e.preventDefault();
        alert("El nombre solo puede contener letras.");
        return;
    }

    // Apellido letras
    if (!soloLetras.test(apellido)) {
        e.preventDefault();
        alert("El apellido solo puede contener letras.");
        return;
    }

    // Número documento
    if (!soloNumeros.test(numDoc)) {
        e.preventDefault();
        alert("El número de documento debe ser numérico.");
        return;
    }

    // Email válido
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("La dirección de mail no es válida.");
        return;
    }

    // SI LLEGA HASTA AQUÍ → SE ENVÍA A guardar.php
});
