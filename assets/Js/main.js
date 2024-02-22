// Mensaje principal
alert("HOLA! :) :) :) , Bienvenido a Megatron POS Web para continuar debe iniciar sesión");

let usuarios = [
  {
    usuario: "usuario1",
    contraseña: "contraseña1",
    perfil: {
      nombre: "Nombre Usuario1",
      edad: 25,
      correo: "usuario1@example.com",
      direccion: "Calle 123, Ciudad"
    }
  },
  {
    usuario: "usuario2",
    contraseña: "contraseña2",
    perfil: {
      nombre: "Nombre Usuario2",
      edad: 30,
      correo: "usuario2@example.com",
      direccion: "Avenida XYZ, Ciudad"
    }
  },
  {
    usuario: "usuario3",
    contraseña: "contraseña3",
    perfil: {
      nombre: "Nombre Usuario3",
      edad: 28,
      correo: "usuario3@example.com",
      direccion: "Plaza ABC, Ciudad"
    }
  },
  {
    usuario: "usuario4",
    contraseña: "contraseña4",
    perfil: {
      nombre: "Nombre Usuario4",
      edad: 35,
      correo: "usuario4@example.com",
      direccion: "Calle Principal, Ciudad"
    }
  },
  {
    usuario: "usuario5",
    contraseña: "contraseña5",
    perfil: {
      nombre: "Nombre Usuario5",
      edad: 22,
      correo: "usuario5@example.com",
      direccion: "Calle Secundaria, Ciudad"
    }
  },
  {
    usuario: "usuario6",
    contraseña: "contraseña6",
    perfil: {
      nombre: "Nombre Usuario6",
      edad: 27,
      correo: "usuario6@example.com",
      direccion: "Avenida Central, Ciudad"
    }
  }
];

let nombreUsuario;
let intentosRestantes = 4;

function autenticarUsuario() {
  nombreUsuario = prompt("Ingrese su nombre de usuario");
  let contraseña = prompt("Ingrese su contraseña");
  let usuarioValido = usuarios.find(user => user.usuario === nombreUsuario && user.contraseña === contraseña);

  if (!usuarioValido) {
    alert(`Nombre de usuario o contraseña incorrectos. Intentos restantes: ${intentosRestantes}`);
    intentosRestantes--;

    if (intentosRestantes > 0) {
      autenticarUsuario();
    } else {
      alert("¡Se han agotado los intentos! Reinicie la sesión para intentar nuevamente.");
      intentosRestantes = 4;
      autenticarUsuario();
    }
  }
}

autenticarUsuario();

// Resto del código...

// Función para mostrar el perfil del usuario
function mostrarPerfil() {
  let usuarioActual = usuarios.find(user => user.usuario === nombreUsuario);

  if (usuarioActual) {
    alert(`
      Perfil de ${nombreUsuario}:
      Nombre: ${usuarioActual.perfil.nombre}
      Edad: ${usuarioActual.perfil.edad}
      Correo: ${usuarioActual.perfil.correo}
      Dirección: ${usuarioActual.perfil.direccion}
    `);
  } else {
    alert("Usuario no encontrado");
  }
}

// Solicitara datos al cliente
pedir_datos_cliente();

do {
  cargar_productos();
  cantidad = parseInt(prompt("¿cúantas cantidades del " + producto + " desea llevar?"));

  console.log(producto);
  console.log(precio);
  console.log(cantidad);

  total_compra = total_compra + precio * cantidad;

  salir = prompt('Desea agregar otro producto en el carrito de compras? Escriba SI/NO');

  if (salir.toUpperCase() !== 'SI' && salir.toUpperCase() !== 'NO') {
    alert('Error: La respuesta debe ser SI o NO. Por favor, vuelva a intentarlo.');
  }

} while (salir.toUpperCase() != 'NO');

const iva = total_compra * 0.19;
const total_con_iva = total_compra + iva;

const mensaje = `${nombreUsuario.toUpperCase()}, el total de tu compra (con IVA) fue de $${total_con_iva.toFixed(2)}`;
alert(mensaje);

// le va a Preguntar al usuario si desea cerrar el programa
cerrarPrograma = confirm('¿Desea cerrar el programa?');

// Si el usuario elige cancelar, se devuelve al home
if (!cerrarPrograma) {
  alert('cancelando y cerrando programa');
}

// Cuando damos a cerrar y sale el mensaje de despedida
if (cerrarPrograma) {
  console.log(`Último registro de compra para ${nombreUsuario}:`);
  console.log(`Producto: ${productoSeleccionado}`);
  console.log(`Precio: $${precio.toFixed(2)}`);
  console.log(`Cantidad: ${cantidad}`);
  console.log(`Total con IVA: $${total_con_iva.toFixed(2)}`);

  mostrarPerfil(); // Muestra el perfil al cerrar el programa

  alert('Gracias por tu compra. ¡Hasta luego!');
}
