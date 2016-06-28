var intervalId = false

function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keyCode == 32 && intervalId == false) {
        intervalId = setInterval(sayThatWasEasy, 1500);
    document.getElementById("easy").blur();
    }
    console.log(intervalId);
}

$("#easy").on("click", decide);

function decide() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = false;
    } else {
        sayThatWasEasy()
    }
    document.getElementById("easy").blur();
    console.log(intervalId);
}



/*$("#easy").trigger("click");*/
