# Forca da Arquitetura Computacional

Jogo da forca que roda no navegador para treinar os termos da aula de Tópicos de Arquitetura Computacional (Sprint 3). Feito com HTML, CSS e JavaScript puros.

**Site publicado:** https://SEU-USUARIO.github.io/arqcomp-cruzadinha/

## Como jogar

1. Leia a pista e veja quantas letras tem a palavra.
2. Clique numa letra do teclado na tela. Não é preciso digitar.
3. Letra certa: aparece na palavra e a tecla fica verde. Letra errada: a tecla fica vermelha e o boneco da forca ganha uma parte.
4. Você pode errar até 6 vezes por palavra.
5. Ao terminar a palavra, clique em **Próxima palavra**.
6. São 16 palavras por partida, em ordem aleatória. O contador mostra quantas você acertou, por exemplo "8 de 16 palavras".
7. O botão **Reiniciar** começa uma nova partida do zero.

As palavras são escritas em maiúsculas, sem acento e sem espaço (por exemplo, MEMORIADEMASSA).

## Palavras e pistas

| Nº | Palavra | Pista |
|----|---------|-------|
| 1 | CPU | Chip central que executa as instruções dos programas. |
| 2 | ULA | Parte do processador que faz as contas e as operações lógicas. |
| 3 | UC | Parte do processador que coordena e dirige as demais unidades. |
| 4 | REGISTRADORES | Pequenas memórias dentro do processador, as mais rápidas de todas. |
| 5 | RAM | Memória volátil que perde os dados ao desligar o computador. |
| 6 | ROM | Memória não volátil gravada de fábrica, que normalmente não se altera. |
| 7 | EEPROM | Memória não volátil que pode ser apagada e regravada eletricamente. |
| 8 | FLASH | Memória não volátil regravável em blocos, usada em pendrives e cartões SD. |
| 9 | CACHE | Memória pequena e veloz entre processador e RAM que guarda o mais usado. |
| 10 | MEMORIADEMASSA | Guarda grande volume de dados de forma permanente, como HD e SSD. |
| 11 | DMA | Permite que periféricos troquem dados com a memória sem ocupar o processador. |
| 12 | ADDRESSBUS | Via que carrega a localização da posição de memória a ser lida ou escrita. |
| 13 | DATABUS | Via que transporta as informações entre processador, memória e periféricos. |
| 14 | MICROCONTROLADOR | Chip único com processador, memória e periféricos, comum em sistemas embarcados. |
| 15 | DUALCORE | Processador com dois núcleos de processamento no mesmo chip. |
| 16 | QUADCORE | Processador com quatro núcleos de processamento no mesmo chip. |

## Estrutura do projeto

```
arqcomp-cruzadinha/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Como rodar localmente

Baixe os arquivos e abra o `index.html` no navegador. Não precisa instalar nada.