let usuarios = [
  { usuario: "usuario1", contraseña: "contraseña1" },
  { usuario: "usuario2", contraseña: "contraseña2" },
  { usuario: "usuario3", contraseña: "contraseña3" },
  { usuario: "usuario4", contraseña: "contraseña4" },
  { usuario: "usuario5", contraseña: "contraseña5" },
  { usuario: "usuario6", contraseña: "contraseña6" }
];

let intentosRestantes = 4;

function autenticarUsuario() {
  let nombreUsuario = document.getElementById("username").value;
  let contraseña = document.getElementById("password").value;

  let usuarioValido = usuarios.find(user => user.usuario === nombreUsuario && user.contraseña === contraseña);

  // Obtén el elemento del mensaje
  let mensajeElement = document.getElementById("mensaje");

  if (!usuarioValido) {
      // Muestra mensaje de error
      mensajeElement.innerHTML = `Nombre de usuario o contraseña incorrectos. Intentos restantes: ${intentosRestantes}`;
      mensajeElement.className = "alert alert-danger";
      mensajeElement.style.display = "block";
      intentosRestantes--;

      if (intentosRestantes <= 0) {
          mensajeElement.innerHTML = "¡Se han agotado los intentos! Reinicie la sesión para intentar nuevamente.";
          resetForm();
      }
  } else {
      // Muestra mensaje de éxito
      mensajeElement.innerHTML = `¡Bienvenido, ${nombreUsuario}! Has iniciado sesión exitosamente.`;
      mensajeElement.className = "alert alert-success";
      mensajeElement.style.display = "block";
      resetForm();
      // Puedes redirigir al usuario a otra página o realizar otras acciones necesarias después del inicio de sesión exitoso
  }
}

function resetForm() {
  document.getElementById("loginForm").reset();
  // Oculta el mensaje después de reiniciar el formulario
  document.getElementById("mensaje").style.display = "none";
}