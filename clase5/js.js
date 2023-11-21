// ------------------- Funciones Recursivas -----------
/*
  Es una técnica de programación en donde la función se llama así misma.
  Se debe tener precausión de no entrar en un ciclo infinito.

  En algunos casos, la recursividad puede ser más legible y clara
  ya que refleja de manera directa la naturaleza recursiva del problema.

  function funcionRecursiva ( valor ){
     if( condicionParo ){

     } else {
        funcionRecursiva( nuevoValor ); // llamada recursiva
     }
  }

*/

function sumaNumerosPares(numero) {
    if (numero == 0) {
        return 0;
    } else {
        if (numero % 2 == 0) {
            return numero + sumaNumerosPares(numero - 2);
        } else {
            return numero + sumaNumerosPares(numero - 1);
        }
    }
}
console.log(sumaNumerosPares(12));
