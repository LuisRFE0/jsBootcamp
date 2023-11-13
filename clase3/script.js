// Tipos de datos 
const resultado = document.querySelector('.resultados');
//Strings 

const htm = document.createElement('h3');
htm.classList.add('text-white');
htm.textContent = 'Esto es un string';
resultado.appendChild(htm);
//Numeros 
const htm2 = document.createElement('h3');
htm2.classList.add('text-white');
htm2.textContent = 'Esto es un numero 12'
resultado.appendChild(htm2);

const htm3 = document.createElement('h3');
htm3.classList.add('text-white');
htm3.textContent = 'Esto es un BigInt 10000000000000000000000000000000000000000000000000000'
resultado.appendChild(htm3);

const htm4 = document.createElement('h3');
htm4.classList.add('text-white');
htm4.textContent = 'Esto es un boleano  :  true  y false'
resultado.appendChild(htm4);




const canciones = [
    'ella bala',
    'lady',
    'lou',
    'laguna',
    'gavilan',
    {
        2020: 5,
        2021: 30,
        2023: 56,
        total: 91
    }
]




console.log(parseInt('$3MNX'.charAt(1)) + 5 + 6);
console.log(String({a:1,b:2}));


console.log(Boolean([]));

