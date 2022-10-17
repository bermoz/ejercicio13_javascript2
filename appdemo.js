let contador = 0;
const mensaje = "Buenos Dias IUE";

var num1 = "234";
let nombre = "luisito";
let num2 = 4567;
let Num2 = 4567;

function Contar() {
  let elem = document.getElementById("para0"); // ambito local
  contador += 1; // contador = contador + 1;
  console.log(contador);
  // alert(contador);
  elem.textContent = contador;
  let elem2 = document.getElementById("titulo");
  elem2.textContent = mensaje + " " + contador;
  console.log(elem2.textContent);
}
function desContar() {
  let elem = document.getElementById("para0"); // ambito local
  contador -= 1; // contador = contador - 1;
  console.log(contador);
  // alert(contador);
  elem.textContent = contador;
  let elem2 = document.getElementById("titulo");
  elem2.textContent = mensaje + " " + contador;
  console.log(elem2.textContent);
}

function changeColor(newColor) {
  var elem = document.getElementById("para");
  console.log(newColor);
  elem.style.backgroundColor = newColor;

  ///    if (newColor = "Blue"){
  //     elem.className="caja2";
  /*  }else{
                elem.className="caja1";
               } */
}

function changeColor1(newColor, identificador) {
  var elem = document.getElementById(identificador);
  console.log(newColor, identificador);
  elem.style.background = newColor;
  elem.textContent = "El Color es: " + newColor;
  if ((newColor = "blue")) {
    elem.className = "caja2";
    elem.style.color = "black";
  } else {
    elem.className = "caja1";
    elem.style.color = "black";
  }
  console.log(elem.className);
}

function changeEstilo(newEstilo, estilo) {
  var elem = document.getElementById(estilo);
  //  console.log(newEstilo)
  elem.className = newEstilo;
  console.log(newEstilo);
}

function changeTexto(newTexto, estilo) {
  const texto1 =
    "La función prompt() nos permite abrir un cuadro de diálogo al usuario para que introduzca un dato. Podemos pasarle como parámetro una cadena de caracteres que se mostrará y nos devuelve una cadena de texto.";
  const texto2 =
    "The prompt () function allows us to open a dialog box for the user to enter data. We can pass it as a parameter a string of characters that will be displayed and it returns a text string.";
  const texto3 =
    "La fonction prompt () nous permet d'ouvrir une boîte de dialogue permettant à l'utilisateur de saisir des données. On peut lui passer en paramètre une chaîne de caractères qui sera affichée et elle renvoie une chaîne de texte.";
  var elem = document.getElementById("para5");
  // console.log("Valor que se carga al hacer click en el boton " + newTexto);
  if (newTexto == "t1") {
    //   console.log(newTexto = "t3");
    elem.textContent = texto1;
    changeEstilo("caja1", "para5");
  } else if (newTexto == "t2") {
    //      console.log(newTexto = "t2");
    elem.textContent = texto2;
    changeEstilo("caja2", "para5");
  } else if (newTexto == "t3") {
    //       console.log(newTexto = "t3");
    elem.textContent = texto3;
    changeEstilo("caja3", "para5");
  }
}

function misparrafos() {
  const p0 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione a commodi amet nesciunt corrupti facilis molestias beatae fuga voluptates, hic libero alias accusantium possimus quisquam sint soluta reiciendis recusandae.";

  var texto = document.getElementById("mparra");
  var p1 = document.createElement("p");
  p1.innerHTML = p0;
  texto.appendChild(p1);
}

function llenarparrafos2() {
  var p0 = "Producto ";

  var lista = document.getElementById("mparra2");
  for (i = 1; i <= 10; i++) {
    var E1 = document.createElement("li");
    E1.innerHTML = p0 + i;
    lista.appendChild(E1);
  }
}

function mistitulos() {
  var t0 = prompt("Digite el titulo: ");
  //"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione a commodi amet nesciunt corrupti facilis molestias beatae fuga voluptates, hic libero alias accusantium possimus quisquam sint soluta reiciendis recusandae.";

  var texto = document.getElementById("mtitulo");
  //console.log(texto);
  var t3 = document.createElement("h3");
  t3.innerHTML = t0;
  texto.appendChild(t3);
  console.log(texto.className);
  //alert(texto.className)
  t3.className = "caja2";
  console.log(t3.className);
}

function llenarYear() {
  var select = document.getElementById("año");
  for (i = 2010; i <= 2023; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
  var select = document.getElementById("mes");
  for (i = 0; i <= 4; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = meses[i];
    select.appendChild(option);
  }
  var select = document.getElementById("dia");
  for (i = 1; i <= 30; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
}

function llenarDias() {
  Dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
    "Ninguno",
  ];
  select = document.getElementById("diatexto");

  for (i = 0; i <= 7; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = Dias[i];
    select.appendChild(option);
  }
}

function generaTabla() {
  // get the reference for the body
  var mybody = document.getElementById("mtabla");

  // creates <table> and <tbody> elements
  mytable = document.createElement("table");
  mytablebody = document.createElement("tbody");

  // creating all cells
  for (var j = 0; j < 7; j++) {
    // creates a <tr> element
    mycurrent_row = document.createElement("tr");

    for (var i = 0; i < 5; i++) {
      // creates a <td> element
      mycurrent_cell = document.createElement("td");
      // creates a Text Node
      currenttext = document.createTextNode(
        "cell is row " + j + ", column " + i
      );
      // appends the Text Node we created into the cell <td>
      mycurrent_cell.appendChild(currenttext);

      if (i % 2 == 0) {
        mycurrent_cell.className = "caja2";
      } else {
        mycurrent_cell.className = "caja3";
      }
      // appends the cell <td> into the row <tr>
      mycurrent_row.appendChild(mycurrent_cell);
    }

    // appends the row <tr> into <tbody>
    mytablebody.appendChild(mycurrent_row);
  }

  // appends <tbody> into <table>
  mytable.appendChild(mytablebody);
  // appends <table> into <body>
  mybody.appendChild(mytable);
  // sets the border attribute of mytable to 2;
  mytable.setAttribute("border", "2");
}

function poneretiqueta(forma, titulo) {
  var t1 = document.createElement("label");
  t1.innerHTML = titulo;
  forma.appendChild(t1);
}

function generaForma() {
  var forma = document.getElementById("mforma");
  //console.log(texto);
  var titulo = "Nombres y apellidos: ";
  poneretiqueta(forma, titulo);

  var entrada1 = document.createElement("input");
  entrada1.placeholder = "Digite nombres y apellidos";
  entrada1.value = "";
  entrada1.name = "nombre";
  entrada1.type = "text";
  entrada1.id = "mnombre";
  entrada1.className = "caja4";
  forma.appendChild(entrada1);

  var t1 = document.createElement("br");
  t1.innerHTML = titulo;
  forma.appendChild(t1);

  titulo = "Correo Electronico: ";
  poneretiqueta(forma, titulo);
  var entrada2 = document.createElement("input");
  entrada2.placeholder = "Digite Correo Electronico";
  entrada2.value = "";
  entrada2.name = "correo";
  entrada2.type = "email";
  entrada2.id = "mcorreo";
  entrada2.className = "caja4";
  forma.appendChild(entrada2);

  var t1 = document.createElement("br");
  t1.innerHTML = titulo;
  forma.appendChild(t1);

  titulo = "Fecha de Cita: ";
  poneretiqueta(forma, titulo);
  var entrada3 = document.createElement("input");
  entrada3.value = "";
  entrada3.name = "fechahora";
  entrada3.type = "datetime-local";
  entrada3.id = "mfechahora";
  entrada3.className = "caja4";
  forma.appendChild(entrada3);

  var t1 = document.createElement("br");
  t1.innerHTML = titulo;
  forma.appendChild(t1);
}

// Ultima clase 03/05/2021

// Visor de fotos
function muestra(num) {
  var imagen = document.images[num].src;
  // console.log(imagen)
  var comentario = document.images[num].alt;
  // console.log(comentario)
  var grande = document.images["pantalla"];
  var texto = document.getElementById("descripcion");
  grande.src = imagen;
  texto.innerHTML = comentario;
}

//Revisar MODELO DOM fuente URL: https://aprende-web.net/javascript/js5_1.php
function info() {
  var texto = document.getElementById("cajaS1");
  var t1 = document.createElement("h3");
  var titulo = "Usted recibirá información sobre los siguientes temas:";
  t1.innerHTML = titulo;
  texto.appendChild(t1);

  if (document.suscripcion.deportes.checked == true) {
    deportes = "<h4>" + document.suscripcion.deportes.value + "</h4>";
  } else {
    deportes = "";
  }
  if (document.suscripcion.noticias.checked == true) {
    noticias = "<h4>" + document.suscripcion.noticias.value + "</h4>";
  } else {
    noticias = "";
  }
  if (document.suscripcion.economia.checked == true) {
    economia = "<h4>" + document.suscripcion.economia.value + "</h4>";
  } else {
    economia = "";
  }
  if (document.suscripcion.cultura.checked == true) {
    cultura = "<h4>" + document.suscripcion.cultura.value + "</h4>";
  } else {
    cultura = "";
  }
  if (document.suscripcion.medioambiente.checked == true) {
    medioambiente = "<h4>" + document.suscripcion.medioambiente.value + "</h4>";
  } else {
    medioambiente = "";
  }
  // console.log(deportes + noticias + economia + cultura + medioambiente)
  texto.innerHTML += deportes + noticias + economia + cultura + medioambiente;
}

function validardatos(nombre, precio) {
  if (precio.value == null) {
    alert("El precio no puede estar Vacio");
  }
  if (nombre.value == null) {
    alert("El nombre no puede estar Vacio");
  }
}

function myproducto(nombre, precio, estado) {
  alert(nombre.value + " " + precio.value + " " + estado.value);
  console.log(precio);
  //validardatos(nombre, precio);
  if (precio.length == 0) {
    alert("El precio no puede estar Vacio");
  }

  /*const producto = {
    nombreProducto: nombre,
    precio : precio,
    disponible : precio
    }
*/
}

function generaRegistro() {
  /* const producto = {
      nombreProducto: "Monitor 20 Pulgadas",
      precio : 300,
      disponible : true
      }
  
    const medidas = {
      peso: '1kg',
      medida: '1m'
    }
*/
}
