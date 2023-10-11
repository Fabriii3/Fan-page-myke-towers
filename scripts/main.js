// let nombre = "";
// let album = "" ;
// let yearLanzamiento = 2023;

// let verificacion = Number(prompt("Ingrese el número 3 para verificarte !"))

// if(verificacion === 3 ){
//     alert("Verificado")
// } else {
//     while(verificacion !== 3){
//         alert("Error, intenta de nuevo");
//         verificacion = Number(prompt("Ingrese el número 3 para verificarte !"))
//     }
//  }
 
//  let usuario = prompt("Ingrese su nombre de usuario");
//  console.log("Hola , nos alegra verte devuelta " + usuario + " ! "); 

//  function elegirOpcion () {
//     console.log("1 : Escuchar la cancion mas con mas reproducciones");
//     console.log("2 : Ver listado de las mas reproducidas ");
//     console.log("3 : Ver Biografia de Mike Towers");
//     console.log("4 : Ver todas las canciones y albunes");
//     console.log("5 : Buscar Canciones");
//     console.log("6 : Salir ");

//     console.log("---------------------------------------------------")

//     let opciones = prompt("Selecciona una opcion" + " | " +
//      "1 : Escuchar la cancion mas con mas reproducciones" + " | " + "2 : Ver listado de las mas reproducidas " + " | " + "3 : Ver Biografia de Mike Towers" + " | " + 
//       "4 : Ver todas las canciones y albunes" + " | " +  "5 : Buscar Canciones" + " | " + "6 : Salir " + " | " +"(Puedes verlo en la consola del navegador)" );

// switch (opciones) {
//     case "1":
//         alert("La cancion mas repoducida es : " + "Si Se da");
//         elegirOpcion() ;
//        break
//     case "2":
//        console.log("Top One con 1371M : " + "Si Se Da Remix" );
//        console.log("Top Two con 896M : " + "La Forma En la Que Me Miras");
//        console.log("Top Three con 859M : " + "La Curiosidad");
//        console.log("Top Four con 771M : " + "BANDIDO" );
//        console.log("Top Five con 660M : " + "Caramelo Remix");
//        elegirOpcion();
//         break
//     case "3":
//         alert("Mike Towers(esto llevaria a la biografia)") ;
//         elegirOpcion();
//         break
//      case "4":
//         console.log(cancionesMt)
//         elegirOpcion();
//         break
//      case "5":
//         (prompt("Escribir Nombre - Album - Year"))
//             buscarCanciones()
//             elegirOpcion();
//             break
//     case "6":
//         alert("Saliste correctamente . " + " Gracias por su visita " + " " + usuario + " ! ");
//         break
//     default : 
//        console.log("Opción incorrecta");
//        elegirOpcion();
//      }
//   }

//  elegirOpcion();
 
// function verCanciones(cancionesMt){
//     cancionesMt.forEach(cancion => console.log(cancion.nombre + "-" + cancion.album + "-" + cancion.yearLanzamiento));
// }

// function buscarCanciones(){
//     const resultado = cancionesMt.filter(filtrarCanciones).filter(filtrarYear).filter(filtrarAlbum);
//     if(resultado.length>0){
//         verCanciones(resultado);
//     } else {
//         console.log("no se encontraron resultados");
//     }
// }

// function filtrarCanciones(cancion){
//    if(nombre){
//     return cancion.nombre === nombre
//    }
//    return cancion;
// }

// function filtrarYear(cancion){
//     if(album){
//      return cancion.album === album
//     }
//     return cancion;
//  }

//  function filtrarAlbum(cancion){
//     if(yearLanzamiento){
//      return cancion.yearLanzamiento === yearLanzamiento
//     }
//     return cancion;
//  }

  


   
  