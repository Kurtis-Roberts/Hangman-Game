var words = ["SPONGEBOB", "SIMPSONS", "FAMILY-GUY", "NINJA-TURTLES", "ANIMANIACS"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var characters = [];
var userGuesses = [];
var incorrect = 0;
var correct = 0;
var wins = 0;
var losses = 0;




function newWord() {
    randomWord = words[Math.floor(Math.random() * words.length)];
}

function characterArray() {
    for (i = 0; i < randomWord.length; i++) {
        characters.push(randomWord[i])
    }
};

characterArray();



function characterArraytoDOM() {
    for (i = 0; i < characters.length; i++) {
        var randomCharacters = $("<div>");
        randomCharacters.addClass("hidden-icon text-center");
        randomCharacters.text("_");
        randomCharacters.attr("value", i);
        //$(".letter-button").prop('disabled', true);
        $("#random-word").append(randomCharacters);
    }
};

$("#start").on("click", characterArraytoDOM());




$(document).ready(function() {

    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];

    function letterDisplay() {
        for (i = 0; i < letters.length; i++) {

            var letterBtn = $('<button>');
            letterBtn.addClass("letter-button letter letter-button-color");

            letterBtn.attr("data-letter", letters[i]);
            letterBtn.text(letters[i]);
            $("#buttons").append(letterBtn);
        }

    }
    letterDisplay();

    $(".letter-button").on("click", function(e) {
        var foundOne = false;
        var selected = $("<div>");

        selected.addClass("letter selected-color card-color");
        selected.text($(this).attr("data-letter"));
        $(".card-text").append(selected);
        $(this).remove()

        characters.forEach(function(letter, index) {
            //console.log(letter, e.target.dataset.letter)
            if (letter === e.target.dataset.letter) {
                $(`div[value=${index}]`).text(letter);
                $(`div[value=${index}]`).addClass("found-letter");
                foundOne = true;
            }
        })

        var foundLetters = $('.found-letter').length;
        if (foundOne) {
            correct++;
            if (characters.length === foundLetters) {
                alert("YOU WIN");
                setTimeout(function() {
                    gameReset();
                }, 1000);
                wins++
                console.log("YOU HAVE " + wins + " Wins!")
                $("#wins").text(wins);
            }
        } else {
            incorrect++;
        }

        if (incorrect === 0) {
            $('#hangman').empty().append('<img src="assets/images/H0.jpg" height="400px" width="400px">');
        } else if (incorrect === 1) {
            $('#hangman').empty().append('<img src="assets/images/H1.jpg" height="400px" width="400px">');
        } else if (incorrect === 2) {
            $('#hangman').empty().append('<img src="assets/images/H2.jpg" height="400px" width="400px">');
        } else if (incorrect === 3) {
            $('#hangman').empty().append('<img src="assets/images/H3.jpg" height="400px" width="400px">');
        } else if (incorrect === 4) {
            $('#hangman').empty().append('<img src="assets/images/H4.jpg" height="400px" width="400px">');
        } else if (incorrect === 5) {
            $('#hangman').empty().append('<img src="assets/images/H5.jpg" height="400px" width="400px">');
        } else if (incorrect === 6) {
            $('#hangman').empty().append('<img src="assets/images/H6.jpg" height="400px" width="400px">');
            setTimeout(function() {
                $('#hangman').empty().append('<img src="assets/images/Hangman.jpg" height="400px" width="400px">');
                alert("GAME OVER");
                losses++
                $("#losses").text(losses);
                gameReset();
            }, 1000);
        } else {

        }



        console.log("Incorrect Guesses are: " + incorrect + ". Correct Guesses are: " + correct + ". Found Letter Classes are: " + foundLetters);


    });


    function gameReset() {
        incorrect = 0
        correct = 0
        foundLetters = 0
        newWord();
        $('#random-word').empty();
        characterArraytoDOM();
        $('#hangman').empty().append('<img src="assets/images/Hangman.jpg" height="464px" width="464px">');
        $('#selected-display').empty();
        $('#buttons').empty();
        letterDisplay();



        $(".letter-button").on("click", function(e) {
            var foundOne = false;
            var selected = $("<div>");

            selected.addClass("letter selected-color card-color");
            selected.text($(this).attr("data-letter"));
            $(".card-text").append(selected);
            $(this).remove()

            characters.forEach(function(letter, index) {
                //console.log(letter, e.target.dataset.letter)
                if (letter === e.target.dataset.letter) {
                    $(`div[value=${index}]`).text(letter);
                    $(`div[value=${index}]`).addClass("found-letter");
                    foundOne = true;
                }
            })

            var foundLetters = $('.found-letter').length;
            if (foundOne) {
                correct++;
                if (characters.length === foundLetters) {
                    alert("YOU WIN");
                    setTimeout(function() {
                        gameReset();
                    }, 1000);
                    wins++
                    console.log("YOU HAVE " + wins + " Wins!")
                    $("#wins").text(wins);
                }
            } else {
                incorrect++;
            }

            if (incorrect === 0) {
                $('#hangman').empty().append('<img src="assets/images/H0.jpg" height="400px" width="400px">');
            } else if (incorrect === 1) {
                $('#hangman').empty().append('<img src="assets/images/H1.jpg" height="400px" width="400px">');
            } else if (incorrect === 2) {
                $('#hangman').empty().append('<img src="assets/images/H2.jpg" height="400px" width="400px">');
            } else if (incorrect === 3) {
                $('#hangman').empty().append('<img src="assets/images/H3.jpg" height="400px" width="400px">');
            } else if (incorrect === 4) {
                $('#hangman').empty().append('<img src="assets/images/H4.jpg" height="400px" width="400px">');
            } else if (incorrect === 5) {
                $('#hangman').empty().append('<img src="assets/images/H5.jpg" height="400px" width="400px">');
            } else if (incorrect === 6) {
                $('#hangman').empty().append('<img src="assets/images/H6.jpg" height="400px" width="400px">');
                setTimeout(function() {
                    $('#hangman').empty().append('<img src="assets/images/Hangman.jpg" height="400px" width="400px">');
                    alert("YOU LOSE")
                    losses++
                    $("#losses").text(losses);
                    gameReset();
                }, 1000);
            } else {

            }


            console.log("Incorrect Guesses are: " + incorrect + ". Correct Guesses are: " + correct + ". Found Letter Classes are: " + foundLetters);


        });

    };


});