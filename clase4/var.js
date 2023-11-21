// const sumatoriaVAriosNumeros = (a, b, ...manyMoreArgs) => {
//     let suma = a + b;
//     return suma += manyMoreArgs.reduce((resultado, sumatoria) => resultado + sumatoria)
// }
// console.log(`sumatoria de numeros  = ${sumatoriaVAriosNumeros(4, 6, 3, 5, 4, 5)}`);


//Realizar 3 funciones
//1 funcion recibe mensaje e imprrima en consola
//"" imrpima en alert
//"" imprima en el dom h2


function consola(m) {
    console.log(m);
}
function alerta(m) {
    alert(m);
}

function dom(m) {
    const ref = document.getElementById('mensaje');
    ref.innerHTML = m;
}

// consola('Hola a todos');
// alerta('Hola a todos');
// dom('Hola a todos');



const printToConsole = message => console.log(message);

const printToAlert = message => alert(message);

const printToH2 = message => {
    const refH2 = getH2Message();
    refH2.innerHTML = message;
};
const getH2Message = () => document.getElementById("message");

// Función que obtenga un mensaje e imprima en consola o alert o DOM o lo que se me ocurra.
function getMessageAndPrint(fncPrint) {
    const message = getUserMessage();
    fncPrint(message);
}

const getUserMessage = () => `Martes de frescura`;

getMessageAndPrint(printToH2);
// getMessageAndPrint("");
// getMessageAndPrint("DOM");
//Funcion de callback 
