let palavras = [
    { nome: 'CPU', resposta: 'CPU', pista: 'Chip central que executa as instruções dos programas.' },
    { nome: 'ULA', resposta: 'ULA', pista: 'Parte do processador que faz as contas e as operações lógicas.' },
    { nome: 'UC', resposta: 'UC', pista: 'Parte do processador que coordena e dirige as demais unidades.' },
    { nome: 'Registradores', resposta: 'REGISTRADORES', pista: 'Pequenas memórias dentro do processador, as mais rápidas de todas.' },
    { nome: 'RAM', resposta: 'RAM', pista: 'Memória volátil que perde os dados ao desligar o computador.' },
    { nome: 'ROM', resposta: 'ROM', pista: 'Memória não volátil gravada de fábrica, que normalmente não se altera.' },
    { nome: 'EEPROM', resposta: 'EEPROM', pista: 'Memória não volátil que pode ser apagada e regravada eletricamente.' },
    { nome: 'Flash', resposta: 'FLASH', pista: 'Memória não volátil regravável em blocos, usada em pendrives e cartões SD.' },
    { nome: 'Cache', resposta: 'CACHE', pista: 'Memória pequena e veloz entre processador e RAM que guarda o mais usado.' },
    { nome: 'Memória de massa', resposta: 'MEMORIADEMASSA', pista: 'Guarda grande volume de dados de forma permanente, como HD e SSD.' },
    { nome: 'DMA', resposta: 'DMA', pista: 'Permite que periféricos troquem dados com a memória sem ocupar o processador.' },
    { nome: 'Address bus', resposta: 'ADDRESSBUS', pista: 'Via que carrega a localização da posição de memória a ser lida ou escrita.' },
    { nome: 'Data bus', resposta: 'DATABUS', pista: 'Via que transporta as informações entre processador, memória e periféricos.' },
    { nome: 'Microcontrolador', resposta: 'MICROCONTROLADOR', pista: 'Chip único com processador, memória e periféricos, comum em sistemas embarcados.' },
    { nome: 'Dual core', resposta: 'DUALCORE', pista: 'Processador com dois núcleos de processamento no mesmo chip.' },
    { nome: 'Quad core', resposta: 'QUADCORE', pista: 'Processador com quatro núcleos de processamento no mesmo chip.' }
];

let bonecos = [
    `  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========`,
    `  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========`,
    `  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========`,
    `  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========`,
    `  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========`,
    `  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========`,
    `  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========`
];

let ordem = [];
let opcoes = [];
let atual = 0;
let acertos = 0;
let erros = 0;
let rodadaAtiva = false;
let maxErros = 3;
let tentadas = [];

function embaralhar(lista) {
    let copia = [];
    for (let i = 0; i < lista.length; i++) {
        copia.push(lista[i]);
    }
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let troca = copia[i];
        copia[i] = copia[j];
        copia[j] = troca;
    }
    return copia;
}

function montarOpcoes() {
    let correta = ordem[atual];
    let outras = [];

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].resposta != correta.resposta) {
            outras.push(palavras[i]);
        }
    }

    outras = embaralhar(outras);

    let escolhidas = [];
    escolhidas.push(correta);
    for (let i = 0; i < 4; i++) {
        escolhidas.push(outras[i]);
    }

    return embaralhar(escolhidas);
}

function montarPalavra(revelar) {
    let resposta = ordem[atual].resposta;
    let partes = [];
    for (let i = 0; i < resposta.length; i++) {
        if (revelar) {
            partes.push(resposta[i]);
        } else {
            partes.push('_');
        }
    }
    return partes.join(' ');
}

function atualizarTela(revelar) {
    div_contador.innerHTML = `Palavra ${atual + 1} de ${ordem.length} &nbsp;|&nbsp; ${acertos} de ${ordem.length} palavras acertadas`;
    div_forca.innerHTML = bonecos[erros * 2];
    div_pista.innerHTML = `Pista: ${ordem[atual].pista} (${ordem[atual].resposta.length} letras)`;
    div_palavra.innerHTML = montarPalavra(revelar);
    div_erradas.innerHTML = `Erros: ${erros}/${maxErros}`;
}

function carregarRodada() {
    opcoes = montarOpcoes();
    tentadas = [];
    erros = 0;
    rodadaAtiva = true;

    div_result.innerHTML = '';
    div_result.className = 'resultado';
    btn_proxima.style.display = 'none';

    let html = '';
    for (let i = 0; i < opcoes.length; i++) {
        html += `<button class="opcao" id="btn_op${i}" onclick="escolher(${i})">${opcoes[i].nome}</button>`;
    }
    div_opcoes.innerHTML = html;

    atualizarTela(false);
}

function iniciar() {
    ordem = embaralhar(palavras);
    atual = 0;
    acertos = 0;
    carregarRodada();
}

function reiniciar() {
    iniciar();
}

function proxima() {
    atual++;
    carregarRodada();
}

function terminarRodada(venceu) {
    rodadaAtiva = false;
    let correta = ordem[atual];

    for (let i = 0; i < opcoes.length; i++) {
        document.getElementById(`btn_op${i}`).disabled = true;
        if (opcoes[i].resposta == correta.resposta) {
            document.getElementById(`btn_op${i}`).className = 'opcao certa';
        }
    }

    if (venceu) {
        acertos++;
        div_result.className = 'resultado ok';
        div_result.innerHTML = `Acertou! A palavra era ${correta.nome}.`;
    } else {
        div_result.className = 'resultado erro';
        div_result.innerHTML = `Você perdeu! A palavra era ${correta.nome}.`;
    }

    atualizarTela(true);

    if (atual < ordem.length - 1) {
        btn_proxima.style.display = 'inline-block';
    } else {
        div_result.innerHTML += `<br>Fim de jogo! Você acertou ${acertos} de ${ordem.length} palavras.`;
    }
}

function escolher(indice) {
    if (!rodadaAtiva) {
        alert('Rodada encerrada. Clique em "Próxima palavra" ou em "Reiniciar".');
        return;
    }

    for (let i = 0; i < tentadas.length; i++) {
        if (tentadas[i] == indice) {
            alert('Você já tentou essa alternativa.');
            return;
        }
    }

    tentadas.push(indice);
    let botao = document.getElementById(`btn_op${indice}`);

    if (opcoes[indice].resposta == ordem[atual].resposta) {
        terminarRodada(true);
    } else {
        botao.className = 'opcao errada';
        botao.disabled = true;
        erros++;
        atualizarTela(false);

        if (erros >= maxErros) {
            terminarRodada(false);
        }
    }
}

iniciar();