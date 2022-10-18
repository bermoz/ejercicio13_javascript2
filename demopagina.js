let encabezado =
  "<header class='encabezado'><h1>Bienvenido a mi pagina</h1><p>Desarrollada por: Bernardo Molina Z</p></header>";
let menu =
  "<nav class='menu'><a class='opcion' href='#'>Inicio</a><a class='opcion' href='#'>Noticias</a><a class='opcion' href='#'>Actualidad</a><a class='opcion' href='#'>Servicios</a><a class='opcion' href='#'>Acerca...</a></nav>";
function pintarpagina() {
  let e1 = document.getElementById("contenedor");
  e1.innerHTML = encabezado + menu;
}
