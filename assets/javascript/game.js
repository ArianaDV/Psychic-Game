var win = 0;
		var	lose = 0;


		var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]	;

		var userGuess = [];

		var numberOfGuesses = 10

		var guessesLeft = [9];

		var noGuessesleft = true;


	
				
		//Runs through loop 10 times

	
	

		for (var i = 0; i < numberOfGuesses; i++) {
	
			//function for 'key press' event
			document.onkeyup = function(event) {

				var myGuess = event.key	;

				var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

			
			//defines correct and incorrect guesses

				if ( myGuess == computerGuess) {

      				win++;

      				guessesLeft = 10;

      				userGuess = [];
      				      				
    				}

      			else if ( myGuess !== computerGuess) {
      			
      				if (guessesLeft > 0) {

      				}

      				else { lose++;
      				}

      			if (guessesLeft==0) {

      				true;

      				guessesLeft = 10;

      				userGuess = [];
      			}
      			
      	}

      	var html =
      		"<div>You chose: " + myGuess + "<div>" +
      		"<div> Wins:" + win + "</div>" + "<div>Loses:" + lose + "</div>"+
			"<div> Attempts left:" + guessesLeft + "</div>" +
			"<div> Letters Guessed:" + userGuess + "</div>"		;

      			document.querySelector("#Game").innerHTML = html;


     	userGuess.push(myGuess);

     	guessesLeft -= 1;
     	
      }
  }
 		 	


