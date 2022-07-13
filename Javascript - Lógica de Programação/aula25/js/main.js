const h1 = document.querySelector('.container h1');
const data = new Date();

//função para retornar valor em string do dia
function diaSemana(diaNumero) {
    let diaSemanaTexto;

    switch (diaNumero) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

//função que retorna valor em string do mes
function nomeMes(mesNumero) {
    let mes;

    switch (mesNumero) {
        case 0:
            mes = 'Janeiro';
            return mes;
        case 1:
            mes = 'Fevereiro';
            return mes;
        case 2:
            mes = 'Março';
            return mes;
        case 3:
            mes = 'Abril';
            return mes;
        case 4:
            mes = 'Maio';
            return mes;
        case 5:
            mes = 'Junho';
            return mes;
        case 6:
            mes = 'Julho';
            return mes;
        case 7:
            mes = 'Agosto';
            return mes;
        case 8:
            mes = 'Setembro';
            return mes;
        case 9:
            mes = 'Outubro';
            return mes;
        case 10:
            mes = 'Novembro';
            return mes;
        case 11:
            mes = 'Dezembro';
            return mes;
    }
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
 }

function criaDate(data){
    const diaDaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = diaSemana(diaDaSemana);
    const mes = nomeMes(numeroMes);

    return  (
    `${nomeDia}, ${data.getDate()} de  ${mes}` +
    ` de ${data.getFullYear()} ` +
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaDate(data);

// ou entao

const h2 = document.querySelector('.container h2');
h2.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});

/* 
uma forma de criar uma funcão menor de dia e meses é:
function mes (numeroMes){
meses = ['janeiro', 'fevereiro' ....];
return meses [numeroMes];
}
mesma coisa com os dias.
*/