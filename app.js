// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const arreglo1 = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const valor = input.value;
    console.log(valor);
    arreglo1.push(valor);
    console.log("Arreglo: ", arreglo1);
    
}

function sortearAmigo() {
    resultado=arreglo1[Math.floor(Math.random() * arreglo1.length)];
    console.log(resultado);
    const item = document.getElementById('resultado');
    item.textContent = resultado;
}
