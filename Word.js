var letter = require("./Letter")

var Word = function(answer){
    this.letterArr = [];

    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.letterArr.push(letter);
    }

    this.wordString = function(){
        var answerString = "";
        for (var i = 0; i < this.letterArr.length; i++) {
            answerString += this.letterAr[i] + " ";
        }
        console.log(answerString + "\n");
    }

    this.userGuess = function (userInput) {
        for (var i = 0; i < this.answerArr.length; i++) {
            this.answerArr[i].guess(userInput);
        }
    }
}

module.exports = Word