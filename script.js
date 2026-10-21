
"use strict";

const $ = (id) => document.getElementById(id);

const elements = {
  start: $("start-button"),
  restart: $("restart-button"),
  mission: $("mission"),
  tag: $("card-tag"),
  icon: $("terminal-icon"),
  title: $("mission-title"),
  text: $("mission-text"),
  area: $("challenge-area"),
  feedback: $("feedback"),
  footer: $("footer-message"),
  score: $("score-display"),
  count: $("challenge-count"),
  progress: $("progress-number"),
  bar: $("progress-bar"),
  steps: [...document.querySelectorAll(".step-item")]
};

const questions = [
  {
    tag: "ETAPA 01 • DECODIFICAÇÃO",
    icon: "⌘",
    title: "O que é Inteligência Artificial?",
    text: "O terminal foi desbloqueado. O NEXUS pergunta: qual alternativa explica melhor o conceito de Inteligência Artificial?",
    options: [
      {
        title: "Uma tecnologia que permite realizar tarefas inteligentes",
        description: "Sistemas que reconhecem padrões, geram conteúdo ou apoiam decisões.",
        correct: true,
        explanation: "Correto! IA é um campo da computação que desenvolve sistemas capazes de executar tarefas que normalmente exigem habilidades como reconhecimento de padrões, linguagem e tomada de decisões."
      },
      {
        title: "Uma máquina que sabe tudo e nunca erra",
        description: "Uma inteligência com conhecimento perfeito.",
        correct: false,
        explanation: "Sistemas de IA podem cometer erros, inventar informações e apresentar limitações. Por isso, seus resultados precisam ser avaliados."
      },
      {
        title: "Um programa que funciona sem dados ou instruções",
        description: "Um sistema que não precisa ser desenvolvido.",
        correct: false,
        explanation: "Sistemas de IA são desenvolvidos por pessoas e dependem de métodos, dados ou instruções para realizar suas tarefas."
      }
    ]
  },
  {
    tag: "ETAPA 02 • LABORATÓRIO",
    icon: "⠿",
    title: "Como uma IA aprende?",
    text: "Você acessou o laboratório do NEXUS. Agora precisa identificar como muitos sistemas de IA aprendem a reconhecer padrões.",
    options: [
      {
        title: "Analisando exemplos e padrões nos dados",
        description: "O sistema é treinado para executar uma tarefa.",
        correct: true,
        explanation: "Isso mesmo! Em muitos métodos de aprendizado de máquina, o sistema ajusta seu funcionamento com base em exemplos e padrões encontrados durante o treinamento."
      },
      {
        title: "Lendo pensamentos humanos automaticamente",
        description: "O sistema recebe conhecimento diretamente da mente.",
        correct: false,
        explanation: "A IA não lê pensamentos automaticamente. Seu funcionamento depende de dados, sensores, instruções e métodos desenvolvidos para tarefas específicas."
      },
      {
        title: "Adivinhando sempre a resposta correta",
        description: "O sistema nunca precisa ser testado.",
        correct: false,
        explanation: "Uma IA pode produzir resultados incorretos. Testes e avaliações são necessários para entender seu desempenho e suas limitações."
      }
    ]
  },
  {
    tag: "ETAPA 03 • CÓDIGO",
    icon: "{ }",
    title: "A função secreta",
    text: "O NEXUS encontrou um bloqueio. Para continuar, você precisa entender uma função JavaScript. Observe o código: function somar(a, b) { return a + b; }. O que acontece quando chamamos somar(3, 4)?",
    options: [
      {
        title: "O resultado é 7",
        description: "A função soma os dois argumentos e retorna o resultado.",
        correct: true,
        explanation: "Perfeito! A função recebe 3 e 4 nos parâmetros a e b. A expressão a + b calcula 7, e return devolve esse valor."
      },
      {
        title: "O resultado é 34",
        description: "Os números são sempre unidos como texto.",
        correct: false,
        explanation: "Com os argumentos numéricos 3 e 4, o operador + realiza uma soma e retorna 7. A concatenação ocorreria em situações envolvendo strings."
      },
      {
        title: "Nada acontece, pois funções não recebem valores",
        description: "O código não pode ser executado.",
        correct: false,
        explanation: "Funções podem receber valores por meio de parâmetros. Neste caso, somar(3, 4) executa a soma e retorna 7."
      }
    ]
  },
  {
    tag: "ETAPA 04 • ÉTICA DIGITAL",
    icon: "◇",
    title: "A decisão do agente",
    text: "O NEXUS está pronto para ser utilizado em um serviço importante. Antes de liberar o sistema, você precisa escolher a atitude mais responsável.",
    options: [
      {
        title: "Testar os resultados, proteger dados e manter supervisão humana",
        description: "Avaliar riscos antes de usar o sistema.",
        correct: true,
        explanation: "Excelente! O uso responsável da IA inclui proteção de dados, testes, atenção a possíveis vieses e erros, além de supervisão humana adequada."
      },
      {
        title: "Publicar tudo sem verificar os resultados",
        description: "Confiar que a tecnologia nunca vai falhar.",
        correct: false,
        explanation: "A IA pode errar ou reproduzir vieses. Verificar resultados e avaliar riscos ajuda a evitar consequências prejudiciais."
      },
      {
        title: "Enviar informações pessoais de todos os usuários",
        description: "Compartilhar os dados sem autorização.",
        correct: false,
        explanation: "Dados pessoais precisam ser tratados com cuidado e conforme as regras aplicáveis. Coletar ou compartilhar informações sem justificativa adequada pode comprometer a privacidade."
      }
    ]
  }
];

const endings = {
  explorer: {
    icon: "✦",
    tag: "MISSÃO CONCLUÍDA • EXPLORADOR",
    title: "Você abriu novos caminhos!",
    text: "Você investigou o NEXUS, decifrou o código e aprendeu conceitos fundamentais de Inteligência Artificial. Sua curiosidade ajudou a revelar o potencial e os limites da tecnologia. Continue estudando: cada novo conhecimento abre uma possibilidade diferente."
  },
  specialist: {
    icon: "⬡",
    tag: "MISSÃO CONCLUÍDA • ESPECIALISTA",
    title: "O futuro está mais seguro!",
    text: "Você demonstrou conhecimento sobre IA, programação e responsabilidade digital. Ao compreender que a tecnologia exige testes, cuidado com dados e supervisão humana, ajudou a construir um caminho mais seguro para o NEXUS. Sua missão foi um sucesso!"
  },
  learner: {
    icon: "⌁",
    tag: "MISSÃO CONCLUÍDA • APRENDIZ",
    title: "Toda descoberta começa assim!",
    text: "Você concluiu a missão e descobriu que a Inteligência Artificial tem possibilidades, mas também limitações. Algumas respostas podem ter sido difíceis, porém cada explicação foi uma oportunidade de aprender. Reinicie para tentar novamente e conquistar uma pontuação maior!"
  }
};

let stage = 0;
let score = 0;
let answered = false;
let completed = false;
let correctAnswers = 0;
let prepared = false;

function updateScore() {
  elements.score.innerHTML =
    `${String(score).padStart(3, "0")} <span>PTS</span>`;
  elements.count.innerHTML =
    `${String(stage).padStart(2, "0")} <span>/ 04</span>`;
}

function updateProgress() {
  const percent = completed ? 100 : Math.round((stage / 4) * 100);
  elements.progress.textContent = `${percent}%`;
  elements.bar.style.width = `${percent}%`;

  elements.steps.forEach((step, index) => {
    step.classList.toggle("active", !completed && index === stage);
    step.classList.toggle("completed", completed || index < stage);

    const indicator = step.querySelector(".step-indicator");
    if (indicator) {
      indicator.textContent = completed || index < stage
        ? "✓"
        : index === stage
          ? "●"
          : "○";
    }
  });
}

function showFeedback(title, message, success) {
  elements.feedback.hidden = false;
  elements.feedback.replaceChildren();

  const heading = document.createElement("strong");
  heading.textContent = title;

  const paragraph = document.createElement("span");
  paragraph.textContent = message;

  elements.feedback.append(heading, paragraph);
  elements.feedback.style.borderColor = success
    ? "rgba(115,230,189,.4)"
    : "rgba(255,174,130,.35)";
}

function createButton(label, description, key, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "answer-button";

  const keyElement = document.createElement("span");
  keyElement.className = "answer-key";
  keyElement.textContent = key;

  const copy = document.createElement("span");
  const title = document.createElement("strong");
  const subtitle = document.createElement("small");

  title.textContent = label;
  subtitle.textContent = description;
  copy.append(title, subtitle);

  const arrow = document.createElement("span");
  arrow.className = "answer-arrow";
  arrow.textContent = "→";

  button.append(keyElement, copy, arrow);
  button.addEventListener("click", action);

  return button;
}

function showIntroduction() {
  stage = 0;
  score = 0;
  answered = false;
  completed = false;
  correctAnswers = 0;
  prepared = false;

  elements.tag.textContent = "TRANSMISSÃO RECEBIDA";
  elements.icon.textContent = "⌁";
  elements.title.textContent = "Uma mensagem do futuro";
  elements.text.textContent =
    "Ano 2049. Um sistema experimental de Inteligência Artificial chamado NEXUS começou a enviar mensagens para centros de pesquisa do mundo inteiro. Você foi selecionado para investigar o sinal. Antes de acessar o sistema, precisará demonstrar que compreende a tecnologia que está prestes a encontrar.";

  elements.feedback.hidden = true;
  elements.area.replaceChildren();

  elements.area.append(
    createButton(
      "Acessar o terminal",
      "Começar a investigação.",
      "A",
      startQuestions
    ),
    createButton(
      "Consultar o protocolo",
      "Conhecer as regras de segurança primeiro.",
      "B",
      showProtocol
    )
  );

  elements.footer.textContent = "AGUARDANDO COMANDO DO AGENTE";
  updateScore();
  updateProgress();
}

function showProtocol() {
  prepared = true;
  elements.tag.textContent = "PROTOCOLO DE SEGURANÇA";
  elements.icon.textContent = "◇";
  elements.title.textContent = "Antes de entrar no sistema";
  elements.text.textContent =
    "Toda investigação tecnológica precisa de responsabilidade. Não compartilhe senhas ou dados pessoais, confira as informações geradas pela IA e lembre-se de que decisões importantes exigem avaliação humana.";

  elements.area.replaceChildren(
    createButton(
      "Entendi. Iniciar missão",
      "Estou pronto para investigar o NEXUS.",
      "A",
      startQuestions
    )
  );

  elements.feedback.hidden = true;
  elements.footer.textContent = "PROTOCOLO CONSULTADO";
}

function startQuestions() {
  stage = 0;
  answered = false;
  renderQuestion();
  elements.mission.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const question = questions[stage];

  if (!question) {
    finishMission();
    return;
  }

  answered = false;
  elements.tag.textContent = question.tag;
  elements.icon.textContent = question.icon;
  elements.title.textContent = question.title;
  elements.text.textContent = question.text;
  elements.feedback.hidden = true;
  elements.area.replaceChildren();

  const label = document.createElement("div");
  label.className = "choices-label";
  label.textContent = "SELECIONE A RESPOSTA CORRETA";
  elements.area.appendChild(label);

  question.options.forEach((option, index) => {
    const button = createButton(
      option.title,
      option.description,
      String.fromCharCode(65 + index),
      () => selectAnswer(option, button)
    );

    elements.area.appendChild(button);
  });

  elements.footer.textContent = `DESAFIO ${stage + 1} DE ${questions.length}`;
  updateScore();
  updateProgress();
}

function selectAnswer(option, selectedButton) {
  if (answered || completed) return;
  answered = true;

  const buttons = [...elements.area.querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
    button.style.opacity = ".65";
  });

  selectedButton.style.opacity = "1";

  if (option.correct) {
    score += 25;
    correctAnswers += 1;
    showFeedback("✓ RESPOSTA CORRETA", option.explanation, true);
  } else {
    showFeedback("! CONTINUE APRENDENDO", option.explanation, false);
  }

  updateScore();

  const nextButton = createButton(
    stage === questions.length - 1 ? "Ver resultado da missão" : "Próximo desafio",
    "Continuar a investigação.",
    "→",
    () => {
      stage += 1;
      if (stage >= questions.length) {
        finishMission();
      } else {
        renderQuestion();
      }
    }
  );

  nextButton.style.marginTop = "7px";
  elements.area.appendChild(nextButton);

  elements.footer.textContent = "RESPOSTA REGISTRADA";
}

function finishMission() {
  completed = true;
  stage = questions.length;

  let ending;
  if (correctAnswers === questions.length) {
    ending = endings.specialist;
  } else if (correctAnswers >= 2) {
    ending = endings.explorer;
  } else {
    ending = endings.learner;
  }

  elements.tag.textContent = ending.tag;
  elements.icon.textContent = ending.icon;
  elements.title.textContent = ending.title;
  elements.text.textContent = ending.text;
  elements.feedback.hidden = false;

  const resultTitle = document.createElement("strong");
  resultTitle.textContent = `RESULTADO: ${correctAnswers} DE ${questions.length} RESPOSTAS CORRETAS`;

  const resultText = document.createElement("span");
  resultText.textContent =
    `Pontuação final: ${score} de 100 pontos. ${prepared ? "Você também consultou o protocolo de segurança." : "Você foi direto à investigação."}`;

  elements.feedback.replaceChildren(resultTitle, resultText);
  elements.feedback.style.borderColor = "rgba(99,231,255,.35)";

  elements.area.replaceChildren(
    createButton(
      "Jogar novamente",
      "Recomeçar do início e tentar melhorar sua pontuação.",
      "↻",
      () => {
        showIntroduction();
        elements.mission.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    )
  );

  elements.footer.textContent = "MISSÃO ENCERRADA • SISTEMA SEGURO";
  updateScore();
  updateProgress();
}

elements.start.addEventListener("click", () => {
  elements.mission.scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.restart.addEventListener("click", () => {
  showIntroduction();
  elements.mission.scrollIntoView({ behavior: "smooth", block: "start" });
});

showIntroduction();
