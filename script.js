var goalScore = 0;
var relationshipScore = 0;
var learningScore = 0;

function scoreQuiz() {
  //question one
  if (document.getElementById('getDone').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('helpOthers').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('solveProblems').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);


  //question two
  if (document.getElementById('next').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('people').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('ideas').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);



  // question three
  if (document.getElementById('relaxingActivity').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('hangOut').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('learn').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);




  // question four
  if (document.getElementById('rightAway').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('withEveryone').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('feelsRight').checked) {
    learningScore = learningScore + 1;
  }

  // question five
  if (document.getElementById('search').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('conversation').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('links').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);




  // question six
  if (document.getElementById('onTime').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('inGroups').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('meaningful').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);




  // question seven
  if (document.getElementById('questions').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('friends').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('explore').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);



  // question eight
  if (document.getElementById('organized').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('coordinate').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('usefulTools').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);




  // question nine
  if (document.getElementById('organization').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('kindness').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('smart').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);



  // question ten
  if (document.getElementById('finish').checked) {
    goalScore = goalScore + 1;
  } else if (document.getElementById('askHelp').checked) {
    relationshipScore = relationshipScore + 1;
  } else if (document.getElementById('learning').checked) {
    learningScore = learningScore + 1;
  }
  console.log(`${goalScore} ${relationshipScore} ${learningScore}`);



  displayScore();
  return [goalScore, relationshipScore, learningScore];
}



function redo() {
  location.reload();
}

function displayScore() {
  var returnScore = [goalScore, relationshipScore, learningScore];
  // var largest = Math.max(...returnScore);
  returnScore.sort(function (a, b) { return a - b })
  var largest = returnScore.pop();
  var secondLargest = returnScore.pop();
  console.log(largest);
  console.log(returnScore);

  

  document.getElementById('results').style.display = 'block';

  document.getElementById('goalResult').innerHTML = goalScore;
  document.getElementById('relationshipResult').innerHTML = relationshipScore;
  document.getElementById('learningResult').innerHTML = learningScore;


  if (largest == goalScore) {
    document.getElementById('quizScoreHere1').innerHTML = `Goal Oriented:  ${goalScore}`;
    if (secondLargest == relationshipScore) {
      document.getElementById('quizScoreHere2').innerHTML = `Relationship Oriented:  ${relationshipScore}`;
    } else {
      document.getElementById('quizScoreHere2').innerHTML = `Learning Oriented:  ${learningScore}`;
    }
  } else if (largest == relationshipScore) {
    document.getElementById('quizScoreHere1').innerHTML = `Relationship Oriented:  ${relationshipScore}`;
    if (secondLargest == goalScore) {
      document.getElementById('quizScoreHere2').innerHTML = `Goal Oriented:  ${goalScore}`;
    } else {
      document.getElementById('quizScoreHere2').innerHTML = `Learning Oriented:  ${learningScore}`;
    }
  } else {
    document.getElementById('quizScoreHere1').innerHTML = `Learning Oriented:  ${learningScore}`;
    if (secondLargest == goalScore) {
      document.getElementById('quizScoreHere2').innerHTML = `Goal Oriented:  ${goalScore}`;
    } else {
      document.getElementById('quizScoreHere2').innerHTML = `Relationship Oriented:  ${relationshipScore}`;
    }
  }


  

  goalScore = 0;
  relationshipScore = 0;
  learningScore = 0;
}
