const listaComentarios = document.querySelector('#lista-comentarios');
const formulario = document.querySelector('#formulario');
let comentarios = [];

function mostrarError(){
    Toastify({
        text: "El comentario no puede estar vacio",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", 
        position: "center",
        stopOnFocus: true, 
        style: {
          background: "#E5383B",
          borderRadius: "20px",
          fontSize:"1.2rem",
          fontWeight: "bold",
          fontStyle: "italic"
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function dibujarHTML(){
    limpiarComentarios();
    
    comentarios.forEach( comentario => {
        const btnBorrar = document.createElement('a');
        btnBorrar.classList.add('borrar-comentario');
        btnBorrar.textContent = '❌';

        const li = document.createElement('li');
        li.textContent = comentario.texto;
        li.id = comentario.id

        li.appendChild(btnBorrar);

        listaComentarios.appendChild(li);
    })

    sincronizarStorage();
}

function limpiarComentarios(){
    while(listaComentarios.firstChild){
        listaComentarios.removeChild(listaComentarios.firstChild)
    }
}

 function agregarComentario(evento){
    evento.preventDefault();


    const comentario = document.querySelector('#comentario').value;

    if(comentario === ''){

        mostrarError();
        return;
    }
    const objComentario = {
        id: Date.now(),
        texto: comentario
    }

    comentarios = [...comentarios, objComentario];
    formulario.reset();
    dibujarHTML();

} 

function borrarComentario(evento){
    evento.preventDefault();
    const id = evento.target.parentElement.id;
    comentarios = comentarios.filter(comentario => comentario.id != id);
    dibujarHTML();
}

function sincronizarStorage(){
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}


window.addEventListener('DOMContentLoaded', ()=>{
    comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    dibujarHTML();
})
formulario.addEventListener('submit', agregarComentario);
listaComentarios.addEventListener('click', borrarComentario)
