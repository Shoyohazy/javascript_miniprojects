

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions , currentQuestionIndex ;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click' , () =>{
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random() - 0.5);  //For the game to have random questions 
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click' , selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body , correct);
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button , button.dataset.correct);
    });
    if(shuffledQuestions.length > (currentQuestionIndex+1)){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element , correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }
    else{
        element.classList.add('wrong');

    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question:"What is 8 x 9?",
        answer:[{text : "72" , correct : true} , {text : '89' , correct : false}] 
    },
    {
        question:"Which one is the smallest ocean in the World?",
        answer:[{text : "Arctic" , correct : true} , {text : 'Atlantic' , correct : false}] 
    },
    {
        question:"Who among the following considered as the 'father of artificial intelligence?",
        answer:[{text : "John McCarthy" , correct : true} , {text : 'JP Eckert' , correct : false}] 
    },
    {
        question:"What is part of a database that holds only one type of information?",
        answer:[{text : "Record" , correct : false} , {text : 'Field' , correct : true}] 
    },
    {
        question:"Which country is also known as the ‘Land of Rising Sun’?",
        answer:[{text : "Fiji" , correct : false} , {text : 'Japan' , correct : true}] 
    },
    {
        question:"Which of the following is the capital of Arunachal Pradesh?",
        answer:[{text : "Itanagar" , correct : true} , {text : 'Imphal' , correct : false}] 
    },
    {
        question:"Name of the first Atomic Submarine of India?",
        answer:[{text : "I.N.S Chakra" , correct : true} , {text : 'R.N. Shukla' , correct : false}] 
    },
    {
        question:" What is the name of first British to visit India?",
        answer:[{text : "Hawkins" , correct : true} , {text : 'Devid' , correct : false}] 
    }
    
]

