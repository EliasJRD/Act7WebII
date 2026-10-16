var btn1 = document.getElementById("transformation1");
var btn2 = document.getElementById("transformation2");
var btn3 = document.getElementById("transformation3");

let transf = "";
let limite = 0;
var gemasRojas = 0;
var gemasN = 0;

const texto = "HOLA KIRBY";
document.write('<h1 style="color: #df0068">' + texto + '</h1>');

function asignarPoder(trans) {
    switch (trans) {
        case "metamortexDigger":
            console.log("Kirby forma Digger");
            limite = 41;
            contadorGemas();
            break;
        case "metamortexDolphin":
            console.log("Kirby forma Dolphin");
            limite = 30;
            contadorGemas();
            break;
        case "metamortexFireEngine":
            console.log("Kirby forma Fire Engine");
            limite = 22;
            contadorGemas();
            break;
        default:
            console.log("Kirby no tiene forma");
            limite = 35;
            break;
    }
}

btn1.addEventListener("click", function () {
    asignarPoder("metamortexDigger")
});
btn2.addEventListener("click", () => asignarPoder("metamortexDolphin"));
btn3.addEventListener("click", () => asignarPoder("metamortexFireEngine"));


function contadorGemas() {
    gemasN = 0;
    gemasRojas = 0;
    for (var gemas = 1; gemas <= limite; gemas++) {
        gemasN++;
        if (gemas%5 == 0 && gemas != 0) {
            console.log("+1 Gema Roja")
            gemasRojas++;
        }
    }
    console.log("Gemas totales: "+gemasN)
    console.log("Gemas rojas totales: "+gemasRojas)
}
