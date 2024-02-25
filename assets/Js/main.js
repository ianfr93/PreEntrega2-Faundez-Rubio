alert("HOLA! :) :) :) , Bienvenido a Megatron POS Web. Para continuar, inicie sesión");
// Asegúrate de que esta línea esté ubicada solo una vez y antes de cualquier intento de acceso

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

// Mostrar mensaje de bienvenida después de la autenticación
alert("Esto es Megatron WebPOS Ventas. Para continuar, presione aceptar");

// Solicitar datos al cliente y seleccionar caja
pedirDatosCliente();

// Función para pedir datos al cliente
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

// Mostrar el menú principal
mostrarMenu();

// Función para mostrar el menú
function mostrarMenu() {
  while (true) {
    let opcion = prompt('Selecciona una opción:\n1. Ir a mi perfil de usuario\n2. Ir al home\n3. Ver inventario\n4. Salir');

    switch (opcion) {
      case '1':
        mostrarPerfil();
        break;
      case '2':
        realizarCompra();
        // Después de realizar la compra, salir del bucle
        return;
      case '3':
        verInventario();
        break;
      case '4':
        alert('Saliendo del sistema. ¡Hasta luego!');
        return;
      default:
        alert('Opción incorrecta. Digite nuevamente para continuar en el sistema');
        break;
    }
  }
}

function verInventario() {
  function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.vender = (cantidad) => {
      // Reducir el stock
      this.stock -= cantidad;

      // Calcular el precio total de la venta
      return this.precio * cantidad;
    };
  }

  // Crear instancias de la clase Producto
  const producto1 = new Producto("Aceite Belmont 1lt", 4000, 10);
  const producto2 = new Producto("Coca Cola 3lts", 3000, 15);
  const producto3 = new Producto("Lavalozas Quix 1lt", 2850, 20);
  const producto4 = new Producto("Leche Soprole Chocolate 1lt", 1200, 12);
  const producto5 = new Producto("Galletas Oreo Chocolate", 850, 18);
  const producto6 = new Producto("Arroz Miraflores Granel", 1600, 25);

  // Ejemplos de ventas
  console.log(producto1.vender(2));
  console.log(producto2.vender(4));

  // Puedes agregar más ejemplos de ventas aquí

  // Mostrar inventario al final
  console.log("Inventario después de ventas:");
  console.log(producto1);
  console.log(producto2);
  console.log(producto3);
  console.log(producto4);
  console.log(producto5);
  console.log(producto6);
}

// Llamar a la función para ver el inventario y realizar ventas
verInventario();




// Función para mostrar el perfil
function mostrarPerfil() {
  console.log(`Información del perfil para ${nombreUsuario}:`);
  console.log(`Nombre: ${usuarios[indexUsuarioAutenticado].perfil.nombre}`);
  console.log(`Rut: ${usuarios[indexUsuarioAutenticado].perfil.rut}`);
  console.log(`Correo: ${usuarios[indexUsuarioAutenticado].perfil.correo}`);
  console.log(`Dirección: ${usuarios[indexUsuarioAutenticado].perfil.direccion}`);
  console.log("----------------------------------");

  // Llamar a la función para gestionar cambios
  gestionarCambios();
}

// Función para gestionar cambios en el perfil
function gestionarCambios() {
  // Preguntar si desea guardar los cambios
  const guardarCambios = confirm('¿Desea guardar los datos de tu perfil?');

  if (guardarCambios) {
    // Mostrar mensaje de éxito en la consola
    console.log('Datos guardados con éxito');

    // Volver al menú de selección
    mostrarMenu();
  } else {
    // Mostrar mensaje de éxito en la consola
    console.log('Cambios descartados con éxito');

    // Redirigir a la sección mostrarMenu()
    mostrarMenu();
  }
}




// Función para cargar productos
function cargarProductos() {
  let error;

  let productoSeleccionado; // Declara la variable a nivel global para acceder a ella fuera del bucle
  do {
    error = 0;
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
        precio = 4000;
        productoSeleccionado = "Aceite Belmont 1lt";
        break;
      case 2:
        alert('Tu producto se agregó de manera exitosa');
        precio = 3000;
        productoSeleccionado = "Coca Cola 3lts";
        break;
      case 3:
        alert('Tu producto se agregó de manera exitosa');
        precio = 2850;
        productoSeleccionado = "Lavalozas Quix 1lt";
        break;
      case 4:
        alert('Tu producto se agregó de manera exitosa');
        precio = 1200;
        productoSeleccionado = "Leche Soprole Chocolate 1lt";
        break;
      case 5:
        alert('Tu producto se agregó de manera exitosa');
        precio = 850;
        productoSeleccionado = "Galletas Oreo Chocolate";
        break;
      case 6:
        alert('Tu producto se agregó de manera exitosa');
        precio = 1600;
        productoSeleccionado = "Arroz Miraflores Granel";
        break;

      default:
        alert('Opción incorrecta. Digite nuevamente para poder continuar con su compra');
        error = 1;
    }
  } while (error == 1);

  return {
    producto: productoSeleccionado,
    precio: precio
  };
}
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

    if (salir.trim().toUpperCase() !== 'SI' && salir.trim().toUpperCase() !== 'NO') {
      alert('Error: La respuesta debe ser SI o NO. Por favor, vuelva a intentarlo.');
    }
  } while (salir.trim().toUpperCase() === 'SI'); // Continuar solo si la respuesta es 'SI'

  const iva = totalCompra * 0.19;
  const totalConIVA = totalCompra + iva;

  const mensaje = `${nombreUsuario.toUpperCase()}, el total de tu compra (con IVA) fue de $${totalConIVA.toFixed(2)}`;
  alert(mensaje);

  // Llamar a la función para volver al menú principal después de realizar la compra
  volvermostrarMenu(historialCompras, totalCompra);
}

function volvermostrarMenu(historialCompras, totalCompra) {
  // Mostrar historial de compras en la consola
  console.log(`Historial de compras para ${nombreUsuario}:`);
  historialCompras.forEach((compra, index) => {
    console.log(`Compra ${index + 1}:`);
    console.log(`Producto: ${compra.producto}`);
    console.log(`Precio: $${compra.precio.toFixed(2)}`);
    console.log(`Cantidad: ${compra.cantidad}`);
    console.log("----------------------------------");
  });

  // Preguntar al usuario si desea cerrar el programa
  const cerrarPrograma = prompt('¿Desea cerrar el programa? Escriba SI/NO');

  if (cerrarPrograma.trim().toUpperCase() === 'SI') {
    // Mostrar mensaje de despedida
    alert('¡Gracias por su compra! ¡Hasta luego!');

  }
}
