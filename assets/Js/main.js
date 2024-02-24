// Mensaje principal
alert("HOLA! :) :) :) , Bienvenido a Megatron POS Web para continuar debe iniciar sesión");

let usuarios = [{
    usuario: "usuario1",
    contraseña: "contraseña1",
    perfil: {
      nombre: "Ian Faúndez Rubio",
      rut: "18408203-9",
      correo: "Ifaundez.a@hotmail.com",
      direccion: "Emiliano Zapata 693"
    }
  },
  {
    usuario: "usuario2",
    contraseña: "contraseña2",
    perfil: {
      nombre: "juan fernandez calvo",
      rut: 13402203 - 9,
      correo: "juanito.c@hotmail.com",
      direccion: "Santiago,centro"
    }
  },
  {
    usuario: "usuario3",
    contraseña: "contraseña3",
    perfil: {
      nombre: "marcelo rios",
      rut: 10708223 - 9,
      correo: "Chinorrios@hotmail.com",
      direccion: "lo barnechea las casas 45"
    }
  },
  {
    usuario: "usuario4",
    contraseña: "contraseña4",
    perfil: {
      nombre: "gabriel prieto",
      rut: 11408203 - 9,
      correo: "Ifaundez.a@hotmail.com",
      direccion: "Nuñoa 456"
    }
  },
  {
    usuario: "usuario5",
    contraseña: "contraseña5",
    perfil: {
      nombre: "luis miguel",
      rut: 11402303 - 9,
      correo: "luismi.a@hotmail.com",
      direccion: "coquimbo 345"
    }
  },
  {
    usuario: "usuario6",
    contraseña: "contraseña6",
    perfil: {
      nombre: "nicolas massu",
      rut: 13408103 - 1,
      correo: "nicolas.massu@hotmail.com",
      direccion: "la florida 233"
    }
  }

];

let nombreUsuario;
let intentosRestantes = 4;
let indexUsuarioAutenticado;

function autenticarUsuario() {
  nombreUsuario = prompt("Ingrese su nombre de usuario");
  let contraseña = prompt("Ingrese su contraseña");

  let usuarioValido = usuarios.find((user, index) => {
    if (user.usuario === nombreUsuario && user.contraseña === contraseña) {
      indexUsuarioAutenticado = index;
      return true;
    }
    return false;
  });

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

alert(`¡Hola ${usuarios[indexUsuarioAutenticado].perfil.nombre}! Bienvenido a Megatron POS Web.`);

function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt('Selecciona una opción:\n1. Ir a mi perfil de usuario\n2. Ir al home\n3. Salir');

    switch (opcion) {
      case '1':
        mostrarPerfil();
        break;
      case '2':
        cargarProductos();
        break;
      case '3':
        return;
      default:
        alert('Opción incorrecta. Digite nuevamente para continuar en el sistema');
    }
  } while (true);
}

function mostrarPerfil() {
  console.log(`Información del perfil para ${nombreUsuario}:`);
  console.log(`Nombre: ${usuarios[indexUsuarioAutenticado].perfil.nombre}`);
  console.log(`Rut: ${usuarios[indexUsuarioAutenticado].perfil.rut}`);
  console.log(`Correo: ${usuarios[indexUsuarioAutenticado].perfil.correo}`);
  console.log(`Dirección: ${usuarios[indexUsuarioAutenticado].perfil.direccion}`);
  console.log("----------------------------------");

  gestionarCambios();
}

function gestionarCambios() {
  const guardarCambios = confirm('¿Desea guardar los datos de tu perfil?');

  if (guardarCambios) {
    console.log('Datos guardados con éxito');
    mostrarMenu();
  } else {
    console.log('Cambios descartados con éxito');
    mostrarMenu();
  }
}

function cargarProductos() {
  let historialCompras = [];
  let totalCompra = 0;

  do {
    let productoSeleccionado = seleccionarProducto();
    let cantidad = parseInt(prompt(`¿Cuántas cantidades del ${productoSeleccionado.producto} desea llevar?`));

    historialCompras.push({
      producto: productoSeleccionado.producto,
      precio: productoSeleccionado.precio,
      cantidad: cantidad
    });

    totalCompra += productoSeleccionado.precio * cantidad;

    let salir = prompt('Desea agregar otro producto en el carrito de compras? Escriba SI/NO');

    if (salir.toUpperCase() !== 'SI' && salir.toUpperCase() !== 'NO') {
      alert('Error: La respuesta debe ser SI o NO. Por favor, vuelva a intentarlo.');
    }

  } while (salir.toUpperCase() !== 'NO');

  const iva = totalCompra * 0.19;
  const total_con_iva = totalCompra + iva;

  const mensaje = `${nombreUsuario.toUpperCase()}, el total de tu compra (con IVA) fue de $${total_con_iva.toFixed(2)}`;
  alert(mensaje);

  cerrarPrograma = confirm('¿Desea cerrar el programa?');

  if (!cerrarPrograma) {
    alert('Cancelando y cerrando el programa');
  } else {
    mostrarHistorialCompras(historialCompras);
    alert('¡Gracias por tu compra! ¡Hasta luego!');
  }
}

function seleccionarProducto() {
  let productoSeleccionado;
  do {
    let producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" +
      "1-Aceite Belmont 1lt" + "\n" +
      "2-Coca Cola 3lts" + "\n" +
      "3-Lavalozas Quix 1lt" + "\n" +
      "4-Leche Soprole Chocolate 1lt" + "\n" +
      "5-Galletas Oreo Chocolate" + "\n" +
      "6-Arroz Miraflores Granel"));

    switch (producto) {
      case 1:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = { producto: "Aceite Belmont 1lt", precio: 4000 };
        break;
      case 2:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = { producto: "Coca Cola 3lts", precio: 3000 };
        break;
      case 3:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = { producto: "Lavalozas Quix 1lt", precio: 2850 };
        break;
      case 4:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = { producto: "Leche Soprole Chocolate 1lt", precio: 1200 };
        break;
      case 5:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = { producto: "Galletas Oreo Chocolate", precio: 850 };
        break;
      case 6:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = { producto: "Arroz Miraflores Granel", precio: 1600 };
        break;
      default:
        alert('Opción incorrecta. Digite nuevamente para poder continuar con su compra');
    }
  } while (!productoSeleccionado);

  return productoSeleccionado;
}

function mostrarHistorialCompras(historialCompras) {
  console.log(`Historial de compras para ${nombreUsuario}:`);
  historialCompras.forEach((compra, index) => {
    console.log(`Compra ${index + 1}:`);
    console.log(`Producto: ${compra.producto}`);
    console.log(`Precio: $${compra.precio.toFixed(2)}`);
    console.log(`Cantidad: ${compra.cantidad}`);
    console.log("----------------------------------");
  });
}