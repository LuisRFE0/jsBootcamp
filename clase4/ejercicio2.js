const arr = [5, 10, 15, 20, 25];


// function dup(arre) {
//     const arr2 = arre.map(e => e * 2);
//     console.log(arr2);
// }

// dup(arr);

// duplicar(arr);
// function duplicar(arreglo) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     console.log(arr);
// }



// let arreglo1 = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
// let arreglo2 = ["Geography", "Spanish", "Programming", "Music"];

// // for (let i = 0; i < arreglo1.length; i++) {
// //     for (let j = 0; j < arreglo2.length; j++) {
// //         if (arreglo1[i] === arreglo2[j]) {
// //             console.log("Coincidencia: " + arreglo1[i]);
// //         }
// //     }
// // }

// const filtro = (arreglo1, arreglo2) => arreglo1.filter(curso => arreglo2.includes(curso));
// console.log(filtro(arreglo1, arreglo2));


// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

const contarCaracteres = (frase = []) => {
    const letraP = frase.filter(elemento => elemento === 'p');
    return `La cantidad de P son : ${letraP.length}`;
}

const dom = document.createElement('H3');
dom.classList.add('text-white', 'text-center');
dom.innerHTML = contarCaracteres('pepe pecas pica papas con un pico y una pala'.split(""));
document.querySelector('.con').appendChild(dom);
