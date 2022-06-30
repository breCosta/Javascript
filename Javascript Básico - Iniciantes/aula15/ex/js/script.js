const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;

texto.innerHTML += `<p>Seu número - 2 é igual a: <b>${numero - 2}</b></p>`;
texto.innerHTML += `<p>Raiz quadrada: <b>${numero ** 0.5}</b></p>`;
texto.innerHTML += `<p><b>${numero}</b> é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN? <b>${Number.isNaN(numero)}</b></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <b>${Math.floor(numero)}</b></p>`;
texto.innerHTML += `<p>Arredondando para cima: <b>${Math.ceil(numero)}</b></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <b>${numero.toFixed(2)}</b></p>`;




