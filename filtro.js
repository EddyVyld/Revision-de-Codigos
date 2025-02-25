// Tenemos un li de productos

// Cree una carpeta Assets para almacenar las imagenes
// Puse en las declaraciones ";"
/* Como ahora estan en una carpeta los pruductos cambie la direccion */
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/zapato-rojo.jpg"}
]

const listaProductos = document.getElementById("lista-de-productos"); /* Guiandome del HTML preferi cambiar getElementsByName por getElementsById por hacer referencia a este. De igual manera li lo cambie por listaProductos para evitar confuciones */
const input = document.querySelector('input'); /* En este caso no era necesario poner el punto, si fuera una clase si hubiera sido necesario. De igual manera $i lo cambie por input para evitar confuciones  */



/* En todo este bloque de codigo se utilizo var, lo cambie por let */
for (let i = 0; i < productos.length; i++) {
  let producto = document.createElement("div"); /* Preferi cambiar d por producto y evitar confucion  */
  producto.classList.add("producto");

  let titulo = document.createElement("p"); /* Preferi cambiar t por titulo y evitar confucion */
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  producto.appendChild(titulo);
  producto.appendChild(imagen);

  listaProductos.appendChild(producto);
}

/* displayProductos(productos); */  // Es una funcion que llama a una funcion que no existe


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = input.value; /* $i lo cambie por input */
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );



 /*  Dentro de esta funcion nuevamente se utiliza mucho var, lo cambie por let */
  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div");
    d.classList.add("producto");
  
    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    listaProductos.appendChild(d); /* li lo cambie por listaProductos */
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  