var Letter = function(letter){
    this.letter = letter;
    this.guess = false;
    this.guessCheck = function(){
        if(this.letter === " "){
            this.guess = true;
            return " ";

        }
        else{
            if(this.guess === false){
                return "_";
            }
            else{
                return this.letter;
            }
        }
    };
    console.log(Letter)
console.log(this.letter)
    this.check = function(check){
        if(check === this.letter){
            this.guess = true;
        }
    }
};

module.exports = Letter;