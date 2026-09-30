const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda em uma manhã comum e percebe que sua cidade está diferente. Telões espalhados pelas ruas anunciam uma nova inteligência artificial capaz de conversar com pessoas, criar imagens, produzir músicas e até ajudar em tarefas do dia a dia. Curioso, você para para observar uma demonstração. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Fico impressionado, mas também penso que uma tecnologia tão poderosa precisa ser usada com cuidado.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Fico empolgado! Quero experimentar essa tecnologia imediatamente e descobrir tudo o que ela consegue fazer.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Ao chegar à escola, você descobre que a direção instalou uma ferramenta de IA para ajudar os alunos nos estudos. Naquela semana, você precisa aprender um conteúdo de matemática que não conseguiu entender durante a aula. Você decide utilizar a nova ferramenta. O que faz?",
        alternativas: [
            {
                texto: "Peço para a IA explicar o conteúdo passo a passo e tento resolver os exercícios sozinho depois.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Peço para a IA resolver todos os exercícios e copio as respostas para terminar rapidamente.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "No intervalo, seus amigos começam a conversar sobre o futuro. Um deles diz que, em alguns anos, muitas profissões poderão ser realizadas por inteligências artificiais e robôs. Outro colega acredita que as máquinas apenas vão mudar a forma como as pessoas trabalham. A conversa fica cada vez mais interessante e você decide participar.",
        alternativas: [
            {
                texto: "Acredito que algumas profissões podem desaparecer ou mudar bastante, então as pessoas precisarão aprender novas habilidades.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Acredito que a tecnologia também pode criar novas profissões e permitir que as pessoas se concentrem em tarefas que exigem criatividade e decisões humanas.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Depois da aula, sua professora anuncia uma competição. Cada grupo deverá criar um cartaz sobre como será a escola do futuro. Seu grupo tem várias ideias, mas pouco tempo para produzir o desenho. Um colega sugere utilizar uma inteligência artificial para criar uma imagem. O que você decide?",
        alternativas: [
            {
                texto: "Usar a IA para criar uma primeira versão e depois editar a imagem, acrescentando as ideias do grupo.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Fazer todo o cartaz manualmente, pois quero que o resultado seja produzido diretamente pelo grupo.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "No dia da apresentação, seu grupo percebe que a imagem criada pela IA contém um detalhe estranho: uma informação no cartaz está incorreta. Alguns colegas dizem que não há problema e que ninguém vai perceber. Você sabe que a apresentação será avaliada pela professora. O que você faz?",
        alternativas: [
            {
                texto: "Aviso o grupo sobre o erro, verifico a informação em outras fontes e corrijo o cartaz antes da apresentação.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Decido deixar o cartaz como está, pois a IA criou a imagem e provavelmente a informação deve estar correta.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Depois da apresentação, a professora elogia a criatividade da turma, mas faz uma pergunta: 'Se uma inteligência artificial consegue fazer tantas coisas, qual deve ser o papel das pessoas no futuro?' Você pensa em tudo o que aconteceu durante aquela semana e responde...",
        alternativas: [
            {
                texto: "As pessoas devem aprender a utilizar a IA como uma ferramenta, mas continuar pensando, verificando informações e tomando suas próprias decisões.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Se a IA consegue realizar as tarefas melhor e mais rápido, podemos deixar cada vez mais decisões e responsabilidades para ela.",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();