// carne = 400gr por pessoas(homens/mulheres) + de 6horas = 650gr
// Cerveja = 6000ml por homens + 6horas = 8000ml
// Mulheres valem por 0.5 em cerveja
// Refrigerante = 500ml por pessoa + 6horas 1000ml

// Crianças valem por 0,5

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * homens + carnePP(duracao) * mulheres + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * homens + (cervejaPP(duracao) / 2 * mulheres);
    let qdtTotalRefrigerantes = refrigerantesPP(duracao) * homens + refrigerantesPP(duracao) * mulheres + (refrigerantesPP(duracao) / 2 * criancas);
    let qdtTotalAgua = refrigerantesPP(duracao) * homens + aguaPP(duracao) * mulheres + (aguaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${Math.ceil(qdtTotalCarne / 1000)} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 600)}  Garrafas de cerveja(600ml)</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerantes / 2000)} Refrigerantes de 2l</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerantes / 500)} Garrafas de 500ml</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 8000;
    } else {
        return 6000;
    }
}

function refrigerantesPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 500;
    }
}
function aguaPP(duracao) {
    if (duracao >= 6) {
            return 1000;
    } else {
            return 500;
    }
}
    
