
//Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //não enviar o formulario

    //pega o que foi digitado nos box
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //transformar os valores colocados do box em numbers
    const peso = Number(inputPeso.value); 
    const altura = Number(inputAltura.value);

    if (!peso) { //se digitar NaN
        setResultado('Peso inválido', false); 
        return;
    }
    if (!altura) { //se digitar NaN
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); //chama funcao para calcular imc
    const nivelImc = getNivelImc(imc); //chama funcao p calcular nivel imc

    const msg = `Seu IMC é ${imc} (${nivelImc})`; //mensagem que aparecera

    setResultado(msg, true); //chamar funcao para mostrar resultado 

});

//calcular o nivel de imc
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    //importante estar decrescente
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//calcular o imc e retornar com 2 casas decimais
function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

//cria paragrafo para aparecer o resultado escrito
//para manipular a cor do paragrafo tbm
function criaP() {
    const p = document.createElement('p'); //criar um paragrafo
    return p;
}

//mostrar o resultado com as cores corretas
//campo 'ISVALID' importante p saber se o que foi digitado é valido
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //para aparecer na pagina

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado-bom');
    } else {
        p.classList.add('paragrafo-resultado-ruim');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
