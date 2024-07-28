document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next');
    const quizContainer = document.getElementById('quiz-container'); // Added reference to the container


    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            answer: "Paris"
        },
        {
            question: "What is the symbol of Magnesium?",
            options: ["M", "Mn", "Mg", "Ma"],
            answer: "Mg"
        },
        {
            question: "Which is not of the colors in a rainbow?",
            options: ["Red", "Yellow", "Pink", "Blue"],
            answer: "Pink"
        }
    ];

    function showQuestion(question) {
        questionElement.innerText = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-button');
            button.addEventListener('click', () => selectOption(button, option, question.answer));
            optionsElement.appendChild(button);
        });
    }

    function selectOption(button, selected, correct) {
        if (selected === correct)
        {
            button.style.backgroundColor = 'green';
            quizContainer.style.boxShadow = '0px 0px 20px 5px green'; // Set shadow to green
            score++;
        }
        else
        {
            button.style.backgroundColor = 'red';
            quizContainer.style.boxShadow = '0px 0px 20px 5px red'; // Set shadow to red
        }
        Array.from(optionsElement.children).forEach(btn => {
            btn.disabled = true;
            if (btn.innerText === correct)
            {
                btn.style.backgroundColor = 'green';
            }
        });
        nextButton.disabled = false;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length)
        {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.disabled = true;
            quizContainer.style.boxShadow = ''; // Reset shadow
        }
        else
        {
            showResults();
        }
    });

    function showResults()
    {
        questionElement.innerText = `Quiz Finished! Your score: ${score}/${questions.length}`;
        optionsElement.innerHTML = '';
        nextButton.style.display = 'none';
        quizContainer.style.boxShadow = ''; // Reset shadow
    }

    showQuestion(questions[currentQuestionIndex]);
});