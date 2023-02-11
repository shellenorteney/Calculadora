/*Shellen Orteney      Super Calculadora        Atividade XPE IGTI*/

// pegando elementos do HTML via DOM
let soma = document.getElementById('soma');
let multiplicacao = document.getElementById('multiplicacao');
let raizA = document.getElementById('raizA');
let subtracaoAB = document.getElementById('subtracaoAB');
let subtracaoBA = document.getElementById('subtracaoBA');
let divisaoAB = document.getElementById('divisaoAB');
let divisaoBA = document.getElementById('divisaoBA');
let raizB = document.getElementById('raizB');
let fatorialA = document.getElementById('fatorialA');
let fatorialB = document.getElementById('fatorialB');
let media = document.getElementById('media');
let porcentagemA = document.getElementById('porcentagemA');
let porcentagemB = document.getElementById('porcentagemB');
let potenciaAB = document.getElementById('potenciaAB');
let potenciaBA = document.getElementById('potenciaBA');

//Valor inicial dos Elementos
soma.innerHTML = 0;
subtracaoAB.innerHTML = 0;
subtracaoBA.innerHTML = 0;
divisaoAB.innerHTML = 0;
divisaoBA.innerHTML = 0;
multiplicacao.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
media.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
potenciaAB.innerHTML = 0;
potenciaBA.innerHTML = 0;
//Soma
function calcularSoma(a, b) {
    return a + b;
};

//Subtração
function calcularSubtracaoAB(a, b) {
    return a - b;
};
function calcularSubtracaoBA(b, a) {
    return b - a;
};

//Multiplicação
function calcularMultiplicacao(a, b) {
    return a * b;
};

//Divisão
function calcularDivisaoAB(a, b) {
    return (a / b).toFixed(2);
};
function calcularDivisaoBA(a, b) {
    return (b / a).toFixed(2);
};

//Raiz Quadrada
const CalcularRaizA = (a) => Math.sqrt(a).toFixed(2);
const CalcularRaizB = (b) => Math.sqrt(b).toFixed(2);

//Fatorial
function CalcularFatorialA(a) {
    if (a < 0) {
        return -1;
    }
    else if (a == 0) {
        return 1;
    }
    else {
        return (a * CalcularFatorialA(a - 1)).toFixed(2);
    }
};

function CalcularFatorialB(b) {
    if (b < 0) {
        return -1;
    }
    else if (b == 0) {
        return 1;
    }
    else {
        return (b * CalcularFatorialB(b - 1)).toFixed(2);
    }
};

//Potência
const CalcularPotenciaAB = (a, b) => Math.pow(a, b).toFixed(2);
const CalcularPotenciaBA = (b, a) => Math.pow(b, a).toFixed(2);

//Porcentagem
function CalcularporcentagemA(a, b) {
    return ((a * 100) / b).toFixed(2) + '%';
}

function CalcularporcentagemB(a, b) {
    return ((b * 100) / a).toFixed(2) + '%';
}
// Media
function CalcularMedia(a, b) {
    return ((a + b) / 2).toFixed(2);
};


const calcular = () => {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    soma.innerHTML = calcularSoma(a, b);
    multiplicacao.innerHTML = calcularMultiplicacao(a, b);
    raizA.innerHTML = CalcularRaizA(a);

    subtracaoAB.innerHTML = calcularSubtracaoAB(a, b);
    subtracaoBA.innerHTML = calcularSubtracaoBA(a, b);
    divisaoBA.innerHTML = calcularDivisaoBA(a, b);

    divisaoAB.innerHTML = calcularDivisaoAB(a, b);
    potenciaAB.innerHTML = CalcularPotenciaAB(a, b);
    potenciaBA.innerHTML = CalcularPotenciaBA(b, a);

    raizB.innerHTML = CalcularRaizB(b);
    fatorialA.innerHTML = CalcularFatorialA(a);
    fatorialB.innerHTML = CalcularFatorialB(b);

    porcentagemA.innerHTML = CalcularporcentagemA(a, b);
    porcentagemB.innerHTML = CalcularporcentagemB(a, b);
    media.innerHTML = CalcularMedia(a, b);


}
