const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você gosta de praticar esportes?",
        alternativas: [
            {
                texto: "Sim, com certeza.",
                afirmacao: "Então você deve ser uma pessoas ativa esportivamente. "
            },
            {
                texto: "Não pefiro outras coisas.",
                afirmacao: "Então você deve gostar de ler e assistir."
            }
        ]
    },
    {
        enunciado: "Quais das atividades a seguir você prefere?",
        alternativas: [
            {
                texto: "Correr, pedalar, nadar, futebol, basquete, vôlei.",
                afirmacao: "Então você pratica esportes."
            },
            {
                texto: "Assistir, dormir, mexer no celular, malhar, estudar.",
                afirmacao: "Então você não gosta de praticar esportes."
            }
        ]
    },
    {
        enunciado: "Você tem uma rotina exaustiva a partir de suas atividades?",
        alternativas: [
            {
                texto: " Sim, canso de mais",
                afirmacao: "Então você é umas pessoa que descanda pouco"
            },
            {
                texto: " Não, eu suporto bem de boa.,
                afirmacao: "Então você é uma pessoas que dorme bem"
            }
        ]
    },
    {
        enunciado: "Ao planejar um encontro com amigos, qual destas opções parece mais divertida?",
        alternativas: [
            {
                texto: "Um jogo de vôlei ou uma partida de futebol.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Ir a um restaurante ou a um café para conversar.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Qual é a sua atitude em relação a pequenas caminhadas, como ir à padaria ou ao supermercado que ficam a poucas quadras de casa?",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();