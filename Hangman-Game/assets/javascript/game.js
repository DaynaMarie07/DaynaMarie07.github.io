newFunction();
    var possibleWords = ["mango","pineapple", "strawberry", "blueberry", "banana","kiwi","pear","peach","grape"];
    
    function newFunction() {
        console.log("Hello from game.js");
        console.log("Hello again!");
        alert("Hello " + prompt("Would you like to play a game?"));
    }
console.log(function)
// create alphabet ul
var word = possibleWords [Math.floor (Math.random() * possibleWords.length)];
//var computerChoices = ["m", "a", "n", "g", "o"];-->
// 
var answerArray = [];
for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
}

var remainingLetters = word.length;
while (remainingLetters > 0) {
   alert("This is the number of remaining letters:\n" + answer.join(" "));
   var guess = prompt ("Guess a letter or click 'Cancel' to end the game. ");
  if (prompt === null){
      //Leave game
      break;
  } else if (guess.length !== 1) {
      alert("Please enter a single letter");
  } else {
      //matching with guess
      for(var j = 0; j < word.length; j++){
          if(word[j]===guess){
              answer[j] = guess;
              remainingLetters--;
              alert(answer.join(" "));
              alert("Good work! The right answer is " + word)
          }
        }
    }
