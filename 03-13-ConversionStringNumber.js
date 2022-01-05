let miNumero = "21";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if (edad >= 18 ){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar")
}


//Ejercicio usando el operador ternario
let miNumero2 = "17";
let edad2 = Number(miNumero2);

let respuesta = (edad2 >= 18) ? "Puede votar" : "Muy joven para votar"
console.log(respuesta)