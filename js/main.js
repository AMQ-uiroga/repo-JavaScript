let opcion = prompt(
  "Ingrese una opcion: (1)Ganancias/(2)Gastos/(3)Mostrar/(4)Balance/(0)Salir"
);
let datos = Array();
let totalBalance = 0;
let totalgastos = 0;
let totalganancias = 0;

function balance() {
  datos.forEach((c) => {
    if (c.tipo === "1") {
      totalganancias = totalganancias + parseFloat(c.monto);
    } else {
      totalgastos = totalgastos + parseFloat(c.monto);
    }
    totalBalance = totalganancias - totalgastos;
  });

  console.log("La Ganancia total es:" + totalganancias);
  console.log("El Gasto total es:" + totalgastos);
  console.log("El Balance es:" + totalBalance);
}

function addRegistro(tipo) {
  const registro = {};
  let categoria = prompt("Ingrese Categoria:");
  let fecha = prompt("Ingrese fecha:");
  let monto = prompt("Ingrese monto:");
  registro.tipo = tipo;
  registro.Categoria = categoria;
  registro.fecha = fecha;
  registro.monto = monto;
  datos.push(registro);
  return console.log(registro);
}

while (opcion != "0") {
  let texto;

  switch (opcion) {
    case "1":
      texto = "Ganancias";
      console.log(texto);
      addRegistro("1");
      break;
    case "2":
      texto = "Gastos";
      console.log(texto);
      addRegistro("2");
      break;
    case "3":
      console.log("Listado:");
      datos.forEach((c) => {
        console.log(c);
      });
      break;
    case "4":
      texto = "Balance";
      console.log(texto);
      balance();
      break;
    default:
      texto = "Opcion Invalida";
      console.log(texto);
      break;
  }
  opcion = prompt(
    "Ingrese una opcion: (1)Ganancias/(2)Gastos/(3)Mostrar/(4)Balance/(0)Salir"
  );
}
