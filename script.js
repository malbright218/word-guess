


var wordBank = ["bmw","gmc","kia","fiat","ford","jeep","mini","saab","acura","buick","dodge","honda",
"isuzu","lexus","lotus","mazda","tesla","volvo","jaguar","lancia","nissan","pagani","subaru","toyota",
"bentley","bugatti","citroen","ferrari","hyundai","lincoln","mclaren","peugeot","porsche","renault","cadillac","chrysler",
"infiniti","maserati","mercedes","alfaromeo","chevrolet","landrover","koenigsegg","mitsubishi","rollsroyce","volkswagen","astonmartin","lamborghini"
];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];
var randWord;
var wincount = 0;



//Functions
//================================
function startGame() {

 wins = 0;
 loss = 0;
 wrongLetter = [];
 guessesLeft = 10;
 underScores = [];
 userGuesses = [];
 randWord;
 wincount = 0;
 wrongLetter = [];
 document.getElementById("guessedLetters").innerHTML = wrongLetter.join(" ");
    
    
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //picks a random word from word bank
    console.log(randWord);
    console.log(randWord.length);
    console.log(userGuesses);

    for( var i = 0; i < randWord.length; i++) { //underscore is pushed to the array of the same length as the random word
        console.log(i);
        underScores.push(' _ ');
    }
    //Prints underscores to the screen
    console.log(underScores);
    document.getElementById('word-blanks').innerHTML = underScores.join(" "); //gets rid of commas

    //Prints this on screen
    document.getElementById("guesses-left").innerHTML = guessesLeft;
};

//Logging the key presses
//================================

document.onkeypress = function(event) {
    if ((wincount === randWord.length) || (userGuesses === 0)) { //if the word is correctly guessed, this prevents the user from entering any more bad guesses
        return;
    }
    userGuesses = event.key;//user presses a key and it is logged
    console.log(userGuesses);

    if(randWord.indexOf(userGuesses) > -1) { //checking if the letter the user pressed is in the random word
        console.log('yes');

        for(var i = 0; i < randWord.length; i++) {
            if(randWord[i] === userGuesses) {
                underScores[i] = userGuesses;
                console.log(underScores);
                wincount++;
                document.getElementById("word-blanks").innerHTML = underScores.join(" ");
                winlose();
                
            }
        }

    } else {
        

        wrongLetter.push(userGuesses); //putting wrong letters into an array for the user to see what has been used
        console.log(wrongLetter);
        guessesLeft--;
        winlose();
        document.getElementById("guessedLetters").innerHTML = wrongLetter.join(" ");
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        
    }
};

function winlose() {
    if(wincount === randWord.length) {
       
        console.log(underScores);
        window.setTimeout(startGame,2500);
        //startGame();
        
        
    } else if(guessesLeft === 0) {
       // alert("you suck");
        window.setTimeout(startGame,2500);
        startGame();
        
        
    }
};














//Main Function
//===============================

startGame();