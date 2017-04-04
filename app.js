function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;

}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
};

var questions = [
  new Question("What is the only second film in a franchise to win Best Picture?",["The Empire Strikes Back", "Elizabeth:The Golden Age", "The Godfather Pt. 2", "The Lord of the Rings: The Two Towers"], "The Godfather Pt. 2" ),
  new Question("Who is the only person to have won an Oscar for both writing and acting?",["Matt Damon", "Woody Allen", "Emma Thompson", "Lawrence Oliver"], "Woody Allen"),
  new Question("Who was the youngest nominee for Best Director?",["Orson Welles", "Ben Affleck", "Quentin Tarantino", "Federico Fellini"], "Orson Welles" ),
  new Question("What was the first animated film to be nominated for Best Picture?",["Snow White and the Seven Dwarves", "Beauty and the Beast", "Toy Story 3", "The Little Mermaid"], "Beauty and the Beast" ),
  new Question("Who of the following has won a Best Director Oscar?",["Alfred Hitchcock", "Kevin Costner", "Quentin Tarantino", "Stanley Kubrick"], "Kevin Costner" ),


];

var quiz = new Quiz(questions);

populate();
