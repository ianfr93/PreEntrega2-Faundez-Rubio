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
  // ... (usuarios existentes)
];

let nombreUsuario;
let intentosRestantes = 4;
let Selecione_Caja;
let productoSeleccionado;
let precio;
let total_compra = 0;
let salir;
let error;

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

// Al inicio, después de autenticar al usuario, puedes llamar a la función que manejará la selección de la caja
autenticarUsuario();
seleccionarCaja();

// Después de la función autenticarUsuario, agrega esta nueva función para seleccionar la caja
function seleccionarCaja() {
  do {
    error = 0;
    Selecione_Caja = prompt('Seleccione un tipo de caja para continuar' + '\n' +
      '1-caja-tienda-1' + '\n' +
      '2-caja-tienda-2' + '\n' +
      '3-caja-tienda-3');

    switch (Selecione_Caja) {
      case '1':
        Selecione_Caja = "caja-tienda-1";
        break;
      case '2':
        Selecione_Caja = "caja-tienda-2";
        break;
      case '3':
        Selecione_Caja = "caja-tienda-3";
        break;
      default:
        alert('Opción incorrecta. Digite nuevamente para abrir una caja valida');
        error = 1;
    }
  } while (error === 1);

  return Selecione_Caja;
}

//FUNCIONES
function cargar_productos() {
  //EJECUCION
  do {
    error = 0;
    producto = parseInt(prompt("Ingrese el código de producto que quiere llevar" + "\n" +
      "1-Aceite Belmont 1lt" + "\n" +
      "2-coca cola 3lts" + "\n" +
      "3-lavalozas quix 1lt" + "\n" +
      "4-leche soprole chocolate 1lt" + "\n" +
      "5-galletas oreo chocolate" + "\n" +
      "6-arroz miraflores granel"));

    switch (producto) {
      case 1:
        alert('Tú producto se agrego de manera exitosa');
        precio = 4000;
        productoSeleccionado = "Aceite Belmont 1lt";
        break;
      case 2:
        alert('Tú producto se agrego de manera exitosa');
        precio = 3000;
        productoSeleccionado = "coca cola 3lts";
        break;
      case 3:
        alert('Tú producto se agrego de manera exitosa');
        precio = 2850;
        productoSeleccionado = "lavalozas quix 1lt";
        break;
      case 4:
        alert('Tú producto se agrego de manera exitosa');
        precio = 1200;
        productoSeleccionado = "leche soprole chocolate 1lt";
        break;
      case 5:
        alert('Tú producto se agrego de manera exitosa');
        precio = 850;
        productoSeleccionado = "galletas oreo chocolate";
        break;
      case 6:
        alert('Tú producto se agrego de manera exitosa');
        precio = 1600;
        productoSeleccionado = "arroz miraflores granel";
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
// Luego de la función seleccionarCaja, puedes llamar a la función para cargar productos
cargarProductos();

do {
  // ... (código existente)

  salir = prompt('Desea agregar otro producto en el carrito de compras? Escriba SI/NO');

  if (salir.toUpperCase() !== 'SI' && salir.toUpperCase() !== 'NO') {
    alert('Error: La respuesta debe ser SI o NO. Por favor, vuelva a intentarlo.');
  }

} while (salir.toUpperCase() !== 'NO');

const iva = total_compra * 0.19;
const total_con_iva = total_compra + iva;

const mensaje = `${nombreUsuario.toUpperCase()}, el total de tu compra (con IVA) fue de $${total_con_iva.toFixed(2)}`;
alert(mensaje);

cerrarPrograma = confirm('¿Desea cerrar el programa?');

if (!cerrarPrograma) {
  alert('cancelando y cerrando programa');
}

if (cerrarPrograma) {
  console.log(`Último registro de compra para ${nombreUsuario}:`);
  console.log(`Producto: ${productoSeleccionado}`);
  console.log(`Precio: $${precio.toFixed(2)}`);
  console.log(`Cantidad: ${cantidad}`);
  console.log(`Total con IVA: $${total_con_iva.toFixed(2)}`);

  // Después de cargar productos, puedes agregar una función para mostrar el perfil del usuario
  function mostrarPerfilUsuario() {
    mostrarPerfil();
    // Puedes agregar más lógica aquí según tus necesidades
  }

  // Después de mostrar el perfil, puedes llamar a la función para mostrar la pantalla de inicio (home)
  mostrarPerfilUsuario();

  // Después de mostrar el perfil, puedes dar la opción de regresar a la pantalla de inicio (home)
  regresarHome = prompt('¿Desea regresar a la pantalla de inicio (home)? Escriba SI/NO');

  if (regresarHome.toUpperCase() === 'SI') {
    // Llama a la función para mostrar la pantalla de inicio (home)
    // Puedes agregar más lógica aquí según tus necesidades
  }

  alert('Gracias por tu compra. ¡Hasta luego!');
}

// Función para mostrar el perfil del usuario
function mostrarPerfil() {
  const usuarioActual = usuarios.find(user => user.usuario === nombreUsuario);
  console.log('Perfil de Usuario:');
  console.log(`Nombre: ${usuarioActual.perfil.nombre}`);
  console.log(`Edad: ${usuarioActual.perfil.edad}`);
  console.log(`Correo: ${usuarioActual.perfil.correo}`);
  console.log(`Dirección: ${usuarioActual.perfil.direccion}`);
}
