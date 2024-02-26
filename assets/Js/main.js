alert("HOLA! :) :) :) , Bienvenido a Megatron POS Web. Para continuar, inicie sesión");

let usuarios = [
  {
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
      rut: "13402203-9",
      correo: "juanito.c@hotmail.com",
      direccion: "Santiago,centro"
    }
  },
  {
    usuario: "usuario3",
    contraseña: "contraseña3",
    perfil: {
      nombre: "marcelo rios",
      rut: "10708223-9",
      correo: "Chinorrios@hotmail.com",
      direccion: "lo barnechea las casas 45"
    }
  },
  {
    usuario: "usuario4",
    contraseña: "contraseña4",
    perfil: {
      nombre: "gabriel prieto",
      rut: "11408203-9",
      correo: "Ifaundez.a@hotmail.com",
      direccion: "Nuñoa 456"
    }
  },
  {
    usuario: "usuario5",
    contraseña: "contraseña5",
    perfil: {
      nombre: "luis miguel",
      rut: "11402303-9",
      correo: "luismi.a@hotmail.com",
      direccion: "coquimbo 345"
    }
  },
  {
    usuario: "usuario6",
    contraseña: "contraseña6",
    perfil: {
      nombre: "nicolas massu",
      rut: "13408103-1",
      correo: "nicolas.massu@hotmail.com",
      direccion: "la florida 233"
    }
  }
];

let nombreUsuario;
let intentosRestantes = 4;
let indexUsuarioAutenticado;
let seleccionCaja;

class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad) {
    this.stock -= cantidad;
    return this.precio * cantidad;
  }
}

const productos = [
  new Producto("Aceite Belmont 1lt", 4000, 800),
  new Producto("Coca Cola 3lts", 3000, 500),
  new Producto("Lavalozas Quix 1lt", 2850, 700),
  new Producto("Leche Soprole Chocolate 1lt", 1200, 1200),
  new Producto("Galletas Oreo Chocolate", 850, 80),
  new Producto("Arroz Miraflores Granel", 1600, 980),
  new Producto("Papel Higiénico Suave 4 rollos", 2000, 450),
  new Producto("Manzanas Royal Gala (kg)", 3500, 600),
  new Producto("Jabón Dove 100g", 1200, 250),
  new Producto("Atún en lata 160g", 2500, 560),
];

// Función para autenticar al usuario
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

// Llamar a la función de autenticación al cargar la página
autenticarUsuario();
alert("Esto es Megatron WebPOS Ventas. Para continuar, presione aceptar");
pedirDatosCliente();
mostrarMenu();

// Función para solicitar datos del cliente
function pedirDatosCliente() {
  let error;
  do {
    error = 0;
    seleccionCaja = prompt('Seleccione un tipo de caja para continuar' + '\n' +
      '1-caja-tienda-1' + '\n' +
      '2-caja-tienda-2' + '\n' +
      '3-caja-tienda-3');

    switch (seleccionCaja) {
      case '1':
        seleccionCaja = "caja-tienda-1";
        break;
      case '2':
        seleccionCaja = "caja-tienda-2";
        break;
      case '3':
        seleccionCaja = "caja-tienda-3";
        break;
      default:
        alert('Opción incorrecta. Digite nuevamente para abrir una caja válida');
        error = 1;
    }
  } while (error === 1);
}

// Función para mostrar el inventario
function verInventario() {
  console.log("Inventario actualizado:");
  productos.forEach(producto => console.log(producto));
}

// Función para mostrar el menú principal
function mostrarMenu() {
  let salir = false;

  while (!salir) {
    let opcion = prompt('Selecciona una opción:\n1. Ir a mi perfil de usuario\n2. Ir al home\n3. Ver inventario\n4. Salir');

    if (opcion === null) {
      // Si el usuario hace clic en Cancelar, tratamos como si hubiera seleccionado salir
      alert('Saliendo del sistema. ¡Hasta luego!');
      salir = true;
      // Agrega la siguiente línea para detener la ejecución de la función
      break;
    } else if (opcion === '') {
      // Si el usuario ingresa una cadena vacía, le informamos que la opción es incorrecta
      alert('Opción incorrecta. Digite nuevamente para continuar en el sistema');
    } else {
      switch (opcion) {
        case '1':
          mostrarPerfil();
          break;
        case '2':
          realizarCompra();
          break;
        case '3':
          verInventario();
          break;
        case '4':
          if (window.confirm('¿Estás seguro de que deseas salir del sistema?')) {
            alert('Saliendo del sistema. ¡Hasta luego!');
            salir = true;
            // Agrega la siguiente línea para detener la ejecución de la función
            break;
          }
          break;
        default:
          alert('Opción incorrecta. Digite nuevamente para continuar en el sistema');
          break;
      }
    }
  }
}






// Función para mostrar el perfil del usuario
function mostrarPerfil() {
  console.log(`Información del perfil para ${nombreUsuario}:`);
  console.log(`Nombre: ${usuarios[indexUsuarioAutenticado].perfil.nombre}`);
  console.log(`Rut: ${usuarios[indexUsuarioAutenticado].perfil.rut}`);
  console.log(`Correo: ${usuarios[indexUsuarioAutenticado].perfil.correo}`);
  console.log(`Dirección: ${usuarios[indexUsuarioAutenticado].perfil.direccion}`);
  console.log("----------------------------------");

  gestionarCambios();
}

// Función para gestionar cambios en el perfil
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

// Función para cargar productos
function cargarProductos() {
  let error;
  let productoSeleccionado;

  do {
    error = 0;
    let producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" +
      "1-Aceite Belmont 1lt" + "\n" +
      "2-Coca Cola 3lts" + "\n" +
      "3-Lavalozas Quix 1lt" + "\n" +
      "4-Leche Soprole Chocolate 1lt" + "\n" +
      "5-Galletas Oreo Chocolate" + "\n" +
      "6-Arroz Miraflores Granel" + "\n" +
      "7-Papel Higiénico Suave 4 rollos" + "\n" +
      "8-Manzanas Royal Gala (kg)" + "\n" +
      "9-Jabón Dove 100g" + "\n" +
      "10-Atún en lata 160g"
    ));

    switch (producto) {
      case 1:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[0];
        break;
      case 2:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[1];
        break;
      case 3:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[2];
        break;
      case 4:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[3];
        break;
      case 5:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[4];
        break;
      case 6:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[5];
        break;
      case 7:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[6];
        break;
      case 8:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[7];
        break;
      case 9:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[8];
        break;
      case 10:
        alert('Tu producto se agregó de manera exitosa');
        productoSeleccionado = productos[9];
        break;
      default:
        alert('Opción incorrecta. Digite nuevamente para poder continuar con su compra');
        error = 1;
    }
  } while (error === 1);

  return {
    producto: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio
  };
}

// Función para realizar una compra
function realizarCompra() {
  let historialCompras = [];
  let totalCompra = 0;
  let salir;

  do {
    const productoInfo = cargarProductos();

    let cantidad = parseInt(prompt(`¿Cuántas cantidades del ${productoInfo.producto} desea llevar?`));

    historialCompras.push({
      producto: productoInfo.producto,
      precio: productoInfo.precio,
      cantidad: cantidad
    });

    totalCompra = totalCompra + productoInfo.precio * cantidad;

    salir = prompt('¿Desea agregar otro producto al carrito de compras? Escriba SI/NO');

    if (salir === null) {
      alert('Compra cancelada. Volviendo al menú principal.');
      mostrarMenu();
      return;
    }

    if (salir.trim().toUpperCase() !== 'SI' && salir.trim().toUpperCase() !== 'NO') {
      alert('Error: La respuesta debe ser SI o NO. Por favor, vuelva a intentarlo.');
    }
  } while (salir.trim().toUpperCase() === 'SI');

  const iva = totalCompra * 0.19;
  const totalConIVA = totalCompra + iva;

  const mensaje = `El total de tu compra (con IVA) fue de $${totalConIVA.toFixed(2)}`;
  alert(mensaje);

  actualizarInventario(historialCompras);
  verInventario();
  volvermostrarMenu(historialCompras, totalCompra);
}

// Función para actualizar el inventario
function actualizarInventario(historialCompras) {
  historialCompras.forEach((compra) => {
    const producto = productos.find((p) => p.nombre === compra.producto);
    if (producto) {
      producto.vender(compra.cantidad);
    }
  });
}

// Función para volver a mostrar el menú con el historial de compras
function volvermostrarMenu(historialCompras, totalCompra) {
  while (true) {
    console.log(`Historial de compras para ${nombreUsuario}:`);
    historialCompras.forEach((compra, index) => {
      console.log(`Compra ${index + 1}:`);
      console.log(`Producto: ${compra.producto}`);
      console.log(`Precio: $${compra.precio.toFixed(2)}`);
      console.log(`Cantidad: ${compra.cantidad}`);
      console.log("----------------------------------");
    });

    const cerrarPrograma = prompt('¿Desea cerrar el programa? Escriba SI/NO');

    if (cerrarPrograma !== null) {
      const respuesta = cerrarPrograma.trim().toUpperCase();

      if (respuesta === 'SI') {
        alert('¡Gracias por su compra! ¡Hasta luego!');
        // Salir del bucle y del programa
        break;
      } else if (respuesta === 'NO') {
        // Volver al menú principal
        mostrarMenu();
      } else {
        alert('Respuesta no válida. Por favor, escriba SI o NO.');
      }
    } else {
      // Si el usuario hace clic en Cancelar, tratamos como si hubiera seleccionado NO
      mostrarMenu();
    }
  }
}
