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
                texto: " Não, eu suporto bem de boa.",
                afirmacao: "Então você é uma pessoas que dorme bem"
            }
        ]
    },
    {
        enunciado: "Voce acha que rotina ta fazendo bem a sua saúde?",
        alternativas: [
            {
                texto: "Sim, melhorou muito minha saúde.",
                afirmacao: "Sua rotina está toda conciliada co suas atividades."
            },
            {
                texto: "Não, estou cada vez mais exausto",
                afirmacao: "Você deve rever sua rotina."
            }
        ]
    },
    {
        enunciado: "Você está indo bem na escola mesmo com suas rotinas cansativas?",
        alternativas: [
            {
                texto: "Sim, estou indo muito bem.",
                afirmacao: "Muito bem ,você é uma pessoa que consegue se dedicar essa rotina cansativa."
            },
            {
                texto: "Não, estou indo mal.",
                afirmacao: "Você terá que rever suas tarefas, e deixar um tempo maior para tarefas."
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
    caixaPerguntas.textContent = "Seu diagnóstico é:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();