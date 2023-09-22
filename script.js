// Função Nomeada de dois números para resultado de diversas operações
function operacoes(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
    const resultadoSoma = valorA + valorB;
    const resultadoSub = valorA - valorB;
    const resultadoMul = valorA * valorB;
    const resultadoDiv = valorA / valorB;
    const resultadoExp = valorA ** valorB;
    const resultadoRes = valorA % valorB;

    alert(`O resultado da soma é: ${resultadoSoma}`);
    alert(`O resultado da subtração é: ${resultadoSub}`);
    alert(`O resultado da multiplicação é: ${resultadoMul}`);
    alert(`O resultado da divisão é: ${resultadoDiv}`);
    alert(`O resultado da exponenciação é: ${resultadoExp}`);
    alert(`O resto da divisão é: ${resultadoRes}`);
    console.log(resultadoSoma);
    console.log(resultadoSub);
    console.log(resultadoMul);
    console.log(resultadoDiv);
    console.log(resultadoExp);
    console.log(resultadoRes);
}

// Arrow Function de  de dois números para resultado de diversas operações
const arrowFunction = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
    const resultSoma = num1 + num2;
    const resultSub = num1 - num2;
    const resultMult = num1 * num2;
    const resultDiv = num1 / num2;
    const resultExp = num1 ** num2;
    const resultRes = num1 % num2;

    alert(`O resultado da soma é: ${resultSoma}`);
    alert(`O resultado da subtração é: ${resultSub}`);
    alert(`O resultado da multiplicação é: ${resultMult}`);
    alert(`O resultado da divisão é: ${resultDiv}`);
    alert(`O resultado da exponenciação é: ${resultExp}`);
    alert(`O resto da divisão é: ${resultRes}`);
    console.log(resultSoma);
    console.log(resultSub);
    console.log(resultMult);
    console.log(resultDiv);
    console.log(resultExp);
    console.log(resultRes);
}

// Funções nomeadas individuais

function operacaoSoma(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
    const resultadoSoma = valorA + valorB;
    alert(`O resultado da soma é: ${resultadoSoma}`);
    console.log(resultadoSoma);
}

function operacaoSub(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
const resultadoSub = valorA - valorB;
alert(`O resultado da subtração é: ${resultadoSub}`);
console.log(resultadoSub);
}

function operacaoMult(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
const resultadoMul = valorA * valorB;
alert(`O resultado da multiplicação é: ${resultadoMul}`);
console.log(resultadoMul);
}

function operacaoDiv(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
const resultadoDiv = valorA / valorB;
alert(`O resultado da divisão é: ${resultadoDiv}`);
console.log(resultadoDiv);
}

function operacaoExp(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
const resultadoExp = valorA ** valorB;
alert(`O resultado da exponenciação é: ${resultadoExp}`);
console.log(resultadoExp);
}

function operacaoRest(a, b) {
    const valorA = parseInt(prompt("Digite o primeiro valor: "));
    const valorB = parseInt(prompt("Digite o segundo valor: "));
const resultadoRes = valorA % valorB;
alert(`O resto da divisão é: ${resultadoRes}`);
console.log(resultadoRes);
}

// Arrow Function Individuais

const arrowFunctionSoma = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
    const resultSoma = num1 + num2;
    alert(`O resultado da soma é: ${resultSoma}`);
    console.log(resultSoma);
}

const arrowFunctionSub = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
const resultSub = num1 - num2;
alert(`O resultado da subtração é: ${resultSub}`);
console.log(resultSub);
}

const arrowFunctionMult = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
const resultMult = num1 * num2;
alert(`O resultado da multiplicação é: ${resultMult}`);
console.log(resultMult);
}

const arrowFunctionDiv = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
const resultDiv = num1 / num2;
alert(`O resultado da divisão é: ${resultDiv}`);
console.log(resultDiv);
}

const arrowFunctionExp = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
const resultExp = num1 ** num2;
alert(`O resultado da exponenciação é: ${resultExp}`);
console.log(resultExp);
}

const arrowFunctionRes = () => {
    const num1 = parseInt(prompt("Insira o primeiro número: "));
    const num2 = parseInt(prompt("Insira o segundo número: "));
const resultRes = num1 % num2;
alert(`O resto da divisão é: ${resultRes}`);
console.log(resultRes);
}

/* Código testado com parseFloat para ver como ficava os números de exponenciação muito grandes / o resultado foi igual ao do parseInt*/