// BORDER 
function validBorder(){
    let borderOn = "5px";
    let borderOff = "0px";
    let imagen = document.getElementById("img");
   

    if (imagen.style.borderWidth == borderOff) {
        imagen.style.borderWidth = borderOn;
    }
    else {
        imagen.style.borderWidth = borderOff;
    }
}

// STICKERS
function comprar (){
const sticker1 = Number (document.getElementById("p1").value);
const sticker2 = Number (document.getElementById("p2").value);
const sticker3 = Number (document.getElementById("p3").value);
const mensaje = document.getElementById("result");


let total = sticker1 + sticker2 + sticker3;
 if (sticker1 < 0 || sticker2 < 0 || sticker3 < 0 ) {
    mensaje.textContent = "Los valores ingresados deben ser mayor o igual a 0";
 }
 else if (total > 10) {
    mensaje.textContent = "Llevas demasiados stickers";
 }
 else {
    mensaje.textContent = "Llevas" + total + "stickers";
 }
}


// PASSWORD
function verificar () {
    const select1 = document.getElementById("option1").value;
    const select2 = document.getElementById("option2").value;
    const select3 = document.getElementById("option3").value;

    let clave = select1 + select2 + select3;

    switch (clave) {
        case "911":
            document.getElementById("mensaje").textContent = "password 1 correcto";
            break;
         case "714":
            document.getElementById("mensaje").textContent = "password 2 correcto";
            break;
        default:
            document.getElementById ("mensaje").textContent = "password incorrecto";
            break;
            }
}