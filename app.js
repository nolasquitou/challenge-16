// Ejercicio descuento según marca y modelo del auto:

//Le pedimos al usuario que ingrese marca y modelo del auto, en caso que el auto sea Ford fiesta el 
//descuento que se aplica será del 5%, si es un Ford Focus el descuento será del 10%. Mostramos por 
//consola el descuento que obtendrá.

let marcamodel = prompt("Ingrese marca y modelo");


const marca_model_auto = marcamodel.toLowerCase();

if (marca_model_auto == "ford fiesta" ) {
    console.log("Tienes un descuento del 5%");
    
}else if (marca_model_auto == "ford focus") {
    console.log("Tienes un descuento del 10%");

}else{
    console.log("no tiene ningun descuento");
}