
class reproductor {
  constructor(id, nombre , canciones , imagen , audio) {
    this.id = id;
    this.nombre = nombre;
    this.canciones = canciones;
    this.imagen = imagen;
    this.auidio = audio;
  }
}

class BaseDeDatos {
  constructor() {
    this.canciones = [];
    this.cargarRegistros();
  }

  async cargarRegistros() {
    const resultado = await fetch("./scripts/canciones.json");
    this.canciones = await resultado.json();
    cargarCanciones(this.canciones);
  }

  traerRegistros() {
    return this.canciones;
  }

  registroPorId(id) {
    return this.canciones.find((reproductor) => reproductor.id === id);
  }

  registrosPorNombre(palabra) {
    return this.canciones.filter((reproductor) =>
    reproductor.nombre.toLowerCase().includes(palabra.toLowerCase())
    );
  }

 
  registrosPorCanciones(canciones) {
    return this.canciones.filter((reproductor) => reproductor.canciones == canciones);
  }
}

class Carrito {
  constructor() {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    this.carrito = carritoStorage || [];
     this.listar();
  }

  estaEnCarrito({ id }) {
    return this.carrito.find((reproductor) => reproductor.id === id);
  }

  agregar(producto) {
    const productoEnCarrito = this.estaEnCarrito(producto);
    if (!productoEnCarrito) {
      this.carrito.push({ ...producto, cantidad: 1 });
    } else {
      productoEnCarrito.cantidad;
    }
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.listar();
  }

  quitar(id) {
    const indice = this.carrito.findIndex((reproductor) => reproductor.id === id);
    if (this.carrito[indice].cantidad > 1) {
      this.carrito[indice].cantidad--;
    } else {
      this.carrito.splice(indice, 1);
    }
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.listar();
  }


  listar() {
    divCarrito.innerHTML = "";
    for (const producto of this.carrito) {
      divCarrito.innerHTML += `
        <div class="productoCarrito">
          <h2>${producto.nombre}</h2>
          <a href="#" class="btnQuitar" data-id="${producto.id}">Quitar de favoritos</a>
        </div>
      `;
   
    }
   
    const botonesQuitar = document.querySelectorAll(".btnQuitar");
    for (const boton of botonesQuitar) {
      boton.addEventListener("click", (event) => {
        event.preventDefault();
        const idProducto = Number(boton.dataset.id);
        this.quitar(idProducto);
      });
    }
  }
}


const divCanciones = document.querySelector("#canciones");
const divCarrito = document.querySelector("#carrito");
const inputBuscar = document.querySelector("#inputBuscar");
const botonFavoritos = document.querySelector(".favoritos");

const bd = new BaseDeDatos();
const carrito = new Carrito();

function cargarCanciones(canciones) {
  divCanciones.innerHTML = "";
  for (let cancion of canciones) {
    divCanciones.innerHTML += `
      <div class="canciones">
        <div class="canciones-box">
          <p class="nombre-cancion">${cancion.nombre}</p>
         <img class='imagen-cancion' src='./assets/images/${cancion.imagen}'>
         <div class="botones-reproductor">
           <button class="play" id="${cancion.categoria}"><i class="bi bi-play-circle-fill"></i></button>
           <button class="stop"><i class="bi bi-pause-circle-fill"></i></button>
             <input type="range" max="1" min="0" step="0.1" class="volumen volumen-canciones">  
           <button class="favorito btnAgregar " data-id="${cancion.id}"> <i class="bi bi-heart-fill"></i></button>
         </div>
      </div>
    </div>
    `;
  }

  const botonesAgregar = document.querySelectorAll(".btnAgregar");

  for (let boton of botonesAgregar) {
    boton.addEventListener("click", (event) => {
      event.preventDefault();
      const idCancion = Number(boton.dataset.id);
      const cancion = bd.registroPorId(idCancion);
      carrito.agregar(cancion);
     
      Toastify({
        text: `Se ha añadido ${cancion.nombre} a favoritos`,
        gravity: "top",
        position: "center",
        style: {
          background: "#E5383B",
          borderRadius: "20px",
          fontSize:"1.2rem",
          fontWeight: "bold",
          fontStyle: "italic"
        },
      }).showToast();
    });
  }
}


inputBuscar.addEventListener("input", (event) => {
  event.preventDefault();
  const palabra = inputBuscar.value;
  const canciones = bd.registrosPorNombre(palabra);
  cargarCanciones(canciones);
});

botonFavoritos.addEventListener("click", (event) => {
  document.querySelector(".btn-favs").classList.toggle("ocultar");
});

const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')
const volumen = document.querySelectorAll('.volumen')

let audio

for(elemento of playCancion) {
    elemento.addEventListener('click', function(){
    let cancion = this.getAttribute('id')
    audio = new Audio(`./assets/audio/${cancion}.mp3`)
    audio.play()
    })
  }

  for(elemento of stopCancion) {
    elemento.addEventListener('click', function(){
    audio.pause()
    })
    }

    volumen.addEventListener('click', function(){
        let vol = this.value
        audio.volumen = vol
        })