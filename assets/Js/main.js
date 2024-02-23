// Mensaje principal
alert("HOLA! :) :) :) , Bienvenido a Megatron POS Web para continuar debe iniciar sesión");

let usuarios = [
  {
    usuario: "usuario1",
    contraseña: "contraseña1",
    perfil: {
      nombre: "Ian Faúndez Rubio",
      rut: 18408203-9,
      correo: "Ifaundez.a@hotmail.com",
      direccion: "Emiliano Zapata 693"
    }
  },
  {
    usuario: "usuario2",
    contraseña: "contraseña2",
    perfil: {
      nombre: "juan fernandez calvo",
      rut: 13402203-9,
      correo: "juanito.c@hotmail.com",
      direccion: "Santiago,centro"
    }
  },
  {
    usuario: "usuario3",
    contraseña: "contraseña3",
    perfil: {
      nombre: "marcelo rios",
      rut: 10708223-9,
      correo: "Chinorrios@hotmail.com",
      direccion: "lo barnechea las casas 45"
    }
  },
  {
    usuario: "usuario4",
    contraseña: "contraseña4",
    perfil: {
      nombre: "gabriel prieto",
      rut: 11408203-9,
      correo: "Ifaundez.a@hotmail.com",
      direccion: "Nuñoa 456"
    }
  },
  {
    usuario: "usuario5",
    contraseña: "contraseña5",
    perfil: {
      nombre: "luis miguel",
      rut: 11402303-9,
      correo: "luismi.a@hotmail.com",
      direccion: "coquimbo 345"
    }
  },
  {
    usuario: "usuario6",
    contraseña: "contraseña6",
    perfil: {
      nombre: "nicolas massu",
      rut: 13408103-1,
      correo: "nicolas.massu@hotmail.com",
      direccion: "la florida 233"
    }
  }
  // ... (otros usuarios)
];

let nombreUsuario;
let intentosRestantes = 4;
let indexUsuarioAutenticado; // Variable para almacenar el índice del usuario autenticado

function autenticarUsuario() {
  nombreUsuario = prompt("Ingrese su nombre de usuario");
  let contraseña = prompt("Ingrese su contraseña");
  let usuarioValido = usuarios.find((user, index) => {
    if (user.usuario === nombreUsuario && user.contraseña === contraseña) {
      indexUsuarioAutenticado = index; // Almacena el índice del usuario autenticado
      return true;
    }
    return false;
  });

  // Si los datos son incorrectos
  if (!usuarioValido) {
    alert(`Nombre de usuario o contraseña incorrectos. Intentos restantes: ${intentosRestantes}`);

    // Reducira el número de intentos restantes
    intentosRestantes--;

    // va ir a Verificar si quedan intentos
    if (intentosRestantes > 0) {
      autenticarUsuario();
    } else {
      // Mostrar mensaje de alerta cuando se agoten los intentos
      alert("¡Se han agotado los intentos! Reinicie la sesión para intentar nuevamente.");
      // Reiniciar intentos y volver a solicitar inicio de sesión
      intentosRestantes = 4;
      autenticarUsuario();
    }
  }
}

// va a Llamar a la función de autenticación al cargar la página
autenticarUsuario();

//VARIABLES
let Selecione_Caja;
let producto;
let precio;
let total_compra = 0;
let salir;
let error;

//FUNCIONES
function pedir_datos_cliente() {

  

  //EJECUCION
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
  } while (error == 1);

  return Selecione_Caja; // Devuelve la selección de caja
}

let productoSeleccionado; // Declara la variable a nivel global para acceder a ella fuera del bucle
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



// Cuando Comienzo con el programa
alert("Esto es Megatron WebPOS Ventas para continuar presione aceptar");

// Solicitara datos al cliente
pedir_datos_cliente();

let historialCompras = [];

do {
  // Solicitara cliente al usuarios
  cargar_productos();

  // Solicitara la cantidad del producto
  cantidad = parseInt(prompt("¿Cúantas cantidades del " + producto + " desea llevar?"));

  console.log(producto);
  console.log(precio);
  console.log(cantidad);

  // Almacena la información de cada compra en el historial
  historialCompras.push({
    producto: productoSeleccionado,
    precio: precio,
    cantidad: cantidad
  });

  // Sumo al total de la compra
  total_compra = total_compra + precio * cantidad;

  salir = prompt('Desea agregar otro producto en el carrito de compras? Escriba SI/NO');

  // Verificar si la respuesta es SI o NO de lo contrario arrojara un mensaje de error 
  if (salir.toUpperCase() !== 'SI' && salir.toUpperCase() !== 'NO') {
    alert('Error: La respuesta debe ser SI o NO. Por favor, vuelva a intentarlo.');
  }

} while (salir.toUpperCase() != 'NO');

// Mostrar al cliente el total de su compra con IVA
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

  // Mostrar todos los registros de compra en la consola
console.log(`Historial de compras para ${nombreUsuario}:`);
historialCompras.forEach((compra, index) => {
  console.log(`Compra ${index + 1}:`);
  console.log(`Producto: ${compra.producto}`);
  console.log(`Precio: $${compra.precio.toFixed(2)}`);
  console.log(`Cantidad: ${compra.cantidad}`);
  console.log("----------------------------------");
});

  console.log(`Información del perfil para ${nombreUsuario}:`);
  console.log(`Nombre: ${usuarios[indexUsuarioAutenticado].perfil.nombre}`);
  console.log(`rut: ${usuarios[indexUsuarioAutenticado].perfil.rut}`);
  console.log(`Correo: ${usuarios[indexUsuarioAutenticado].perfil.correo}`);
  console.log(`Dirección: ${usuarios[indexUsuarioAutenticado].perfil.direccion}`);
  console.log("----------------------------------");



// Cuando damos a cerrar y sale el mensaje de despedida


  // Aca Mostramos un mensaje de despedida solo si el usuario elige cerrar el programa
  alert('Gracias por tu compra. ¡Hasta luego!');

}