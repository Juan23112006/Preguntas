const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Madrid", "París", "Lisboa"],
        answer: 1
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "¿Cuál es el océano más grande?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        answer: 3
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges", "Julio Cortázar"],
        answer: 4
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsButtons = document.getElementById('options').children;

    if (selectedIndex === currentQuestion.answer) {
        document.getElementById('message').textContent = '¡Correcto!';
        optionsButtons[selectedIndex].classList.add('correct');
    } else {
        document.getElementById('message').textContent = 'Incorrecto. La respuesta correcta era: ' + currentQuestion.options[currentQuestion.answer];
        optionsButtons[selectedIndex].classList.add('incorrect');
    }

    for (let button of optionsButtons) {
        button.disabled = true;
    }

    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('message').textContent = '';
    } else {
        document.getElementById('message').textContent = '¡Fin del juego!';
        document.getElementById('nextButton').style.display = 'none';
    }
}

loadQuestion();