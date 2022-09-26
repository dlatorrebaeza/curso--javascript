alert("Bienvenidos a la Calculadora de Valores de Productos");

const usuarioValido = "Diego";
const passwordValido = "asdf1234";

let usuario = prompt("Ingrese su Nombre de Usuario: ");
let password = prompt("Ingrese su Contraseña: ");

if (usuario === usuarioValido && password === passwordValido) {
  alert(
    "Bienvenido a la Plataforma " + usuario + ". Gracias por validar sus datos."
  );
  let cantidadProductos = parseInt(
    prompt("Ingrese la Cantidad de Productos que comprará: ")
  );

  let total = 0;

  for (let i = 0; i < cantidadProductos; i++) {
    let valor = prompt("Ingrese el valor del Producto " + (i + 1) + " :");
    total = calcularTotal(total, parseInt(valor));
  }

  if (total >= 10000) {
    alert(usuario + " recibe descuentos.");
    total = descuentoProductos(total);
  } else {
    alert(usuario + " no recibe descuentos.");
  }

  alert("La suma total de su compra es de: $ " + total);
} else {
  alert(
    "Nombre de Usuario o Contraseña Incorrectos. Por favor, intente nuevamente."
  );
}

function calcularTotal(totalActual, valor) {
  return totalActual + parseInt(valor);
}

function descuentoProductos(totalActual) {
  return totalActual - (totalActual * 20) / 100;
}
