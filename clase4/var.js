const sumatoriaVAriosNumeros = (a, b, ...manyMoreArgs) => {
    let suma = a + b;
    return suma += manyMoreArgs.reduce((resultado, sumatoria) => resultado + sumatoria)
}
console.log(`sumatoria de numeros  = ${sumatoriaVAriosNumeros(4, 6, 3, 5, 4, 5)}`);