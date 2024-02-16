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

  if (!usuarioValido) {
    alert(`Nombre de usuario o contraseña incorrectos. Intentos restantes: ${intentosRestantes}`);
    intentosRestantes--;

    if (intentosRestantes <= 0) {
      alert("¡Se han agotado los intentos! Reinicie la sesión para intentar nuevamente.");
      intentosRestantes = 4;
      resetForm();
    }
  } else {
    alert(`¡Bienvenido, ${nombreUsuario}! Has iniciado sesión exitosamente.`);
    resetForm();
    // Puedes redirigir al usuario a otra página o realizar otras acciones necesarias después del inicio de sesión exitoso
  }
}

function resetForm() {
  document.getElementById("loginForm").reset();
}
// Comprueba  si  el  usuario y la contraseña es correcta