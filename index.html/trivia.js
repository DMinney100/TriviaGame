$( document ).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var question = "none";
    var input = "none";
    var answer = "none";
    var currentQuestion = "none";
    var correctAnswer = "none";
    var incorrectAnswer = "none";
    var unanswered = "none";
    var newQuestion = "none";
    var seconds = 90;
    var timer;
    
    
    // generateQuiz(triviaQuestions, quizContainer, resultsContainer, submit);
        // showQuestions(triviaQuestions, quizContainer)
        //question code 
    var triviaQuestions = [{
        question: "What was The Beatles debut album?",
        answerlist: ["Please Please Me", "The Wall", "", "Both Sides of the Sky"],
        answer: 0
    },{
        question: "Who was the frontman for Led Zeppelin?",
        answerList: ["Jimi Hendrix", "Robert Plant", "Roger Waters", "Joe Walsh"],
        answer: 1
    },{
        question: "What was the name of BB Kings legendary guitar?",
        answerList: ["Maxine", "Madeline", "Lucille", "Hariot"],
        answer: 2
    },{
        question: "What rock icon played his guitar upside down?",
        answerList: ["Jimi Hendrix", "Kurt Cobain", "Slash", "Eric Clapton"],
        answer: 0
    },{
        question: "What band is responsible for Dark Side of the Moon",
        answerList: ["Fleetwood Mac", "The Who", "Lyndard Skynard", "Pink Floyd"],
        answer:3
    }];
    
    //start
    $('#startBtn').on('click', function(){
        // $(this).hide();
        newGame();
    });
    
    // //start over 
    // $('#startOverBtn').on('click', function() {
    //     $(this).hide();
    //     newGame();
    // });
    // newGame();
    //start new game function
    function newGame() {
        console.log("im a new game function");
        // $('#finalMessage').empty();
        // $('#correctAnswers').empty();
        // $('#incorrectAnswers').empty();
        // $('#unanswered').empty();
        // currentQuestion = 0;
        // correctAnswer = 0;
        // incorrectAnswer = 0;
        // unanswered = 0;
        // newQuestion();
        timer = setInterval(countdown, 1000);
    }
    
    // function countdown() {
    //     seconds--
    //     $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    //     answered = true;
        
    //     time = setInterval(showCountdown, 6000);
    // }
    
    function countdown() {
        seconds--;
        //use jquery to display updated value of seconds 
        console.log(seconds);
        // $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if(seconds < 1) {
            console.log("Times Up")
            seconds = 90;
            clearInterval(timer);
            // answered = false;
            // answerPage;
        }
    }
    
       
       
       
       
       
       
       
        // showResults(questions, quizContainer, resultsContainer)
        // //^code
    
    
        // //show the questions 
        // showQuestions(questions, quizContainer);
    
        // //when user hits submit, show results 
        // submitButton.onclick = function(){
        //     showResults(questions, quizContainer, resultsContainer);
        // }
    
      
});