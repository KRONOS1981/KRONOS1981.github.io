// este codigo le permite al usuario guardar registro de datos del cliente y su mascota como lo es nombre cliente, celular y dirección,
//  adicional a esto su mascota y los datos de esta como nombre, tipo y raza.
var muestraHtml = document.getElementById("muestraHtml")

let Cliente = function Cliente(Nombre, Celular, Direccion, Mascota) {
    this.nombre = Nombre;
    this.celular = Celular;
    this.direccion = Direccion;
    this.mascota = Mascota;
    }

let Mascota = function Mascota(Nombre, Tipo, Raza) {
    this.nombre = Nombre;
    this.tipo = Tipo;
    this.raza = Raza;
    }


var nombreUsu = prompt(' bienvenido a mascotas.com por favor ingrese el nombre del cliente');
var celularUsu = prompt(' por favor ingrese el celular del cliente');
var direccionUsu = prompt(' por favor ingrese la dirección del cliente');
var cliente = new Cliente (nombreUsu, celularUsu, direccionUsu, ingresarMascota());
    

function ingresarMascota(){
    var nombreMas = prompt('  por favor ingrese el nombre de la mascota');
    var tipoMas = prompt(' por favor ingrese el tipo de la mascota');
    var razaMas = prompt(' por favor ingrese la raza de la mascota');
    var mascota = new Mascota(nombreMas, tipoMas, razaMas);
    return mascota;
    }

var masCota = cliente.mascota;


muestraHtml.innerHTML = ' el registro es el siguiente: '+ '<br />' + cliente.nombre + '<br />' + ' su mascota es: ' + masCota.nombre


