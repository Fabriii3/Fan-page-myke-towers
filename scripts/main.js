// alert("Esto funciona")

let verificacion = Number(prompt("Ingrese el número 3 para verificarte"))

if(verificacion === 3 ){
    alert("Verificado");
} else 
    while(verificacion !== 3){
        alert("Error, intenta de nuevo");
        verificacion = Number(prompt("Ingrese el número 3 para verificarte"));
    }
 

let usuario = prompt("Ingrese su nombre de usuario");
 console.log("Hola , nos alegra verte devuelta " + usuario);
 elegirOpcion();

function elegirOpcion () {
    console.log("1 : Escuchar la cancion mas con mas reproducciones");
    console.log("2 : Ver listado de las mas reproducidas ");
    console.log("3 : Ver perfil de Mike Towers");
    console.log("4 : Salir ");

 
let opciones = prompt("Seleccionar una opción");
switch (opciones) {
    case "1":
        alert("Si Se da")
        elegirOpcion() 
       break
    case "2":
       console.log("1ra con 1371M : " + "Si Se Da Remix" );
       console.log("2da con 896M : " + "La Forma En la Que Me Miras");
       console.log("3ra con 859M : " + "La Curiosidad");
       console.log("4ta con 771M : " + "BANDIDO" );
       console.log("5ta con 660M : " + "Caramelo Remix");
       elegirOpcion()
        break
    case "3":
        alert("Mike Towers") ;
        elegirOpcion()
        break
    case "4":
        console.log("Saliste correctamente");
        break
    default : 
       console.log("Opción incorrecta");
       elegirOpcion()
     }

  } 


   
  