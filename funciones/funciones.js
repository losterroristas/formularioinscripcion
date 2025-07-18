const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const tipoDoc = document.getElementById('tipoDoc').value;
    const numDoc = document.getElementById('numDoc').value.trim();
    const anio = document.getElementById('anio').value;
    const division = document.getElementById('division').value;
    const email = document.getElementById('email').value.trim();

    if (!nombre || !apellido || !tipoDoc || !numDoc || !anio || !division || !email) {
    alert("Por favor completá todos los campos.");
    return;
        }

    // Validaciones
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const soloNumeros = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras.");
            return;
        }

    if (!soloLetras.test(apellido)) {
        alert("El apellido solo puede contener letras.");
            return;
        }

    if (!soloNumeros.test(numDoc)) {
        alert("El número de documento debe ser numérico.");
            return;
        }

    if (!emailRegex.test(email)) {
        alert("La dirección de mail no es válida.");
            return;
        }

        const usuario = {
            nombre,
            apellido,
            tipoDoc,
            numDoc,
            anio,
            division,
            email
        };

    console.log("Usuario a registrar:", usuario);

    fetch("/registrar", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)

    })

    .then(res => {

        if (!res.ok) throw new Error("Error en el servidor");
        return res.json();

    })
    .then(data => {

        alert("Usuario registrado con éxito.");
        formulario.reset();

    })
    .catch(err => {

        console.error(err);
        alert("Error al registrar.");
    });

});

