
var numberOfDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var touchButton = this.innerText;
        // document.getElementsByClassName(touchButton)[0].classList.toggle("btn-press");
        makeSound(touchButton);
        buttonAnimation(touchButton);
    });
}

document.addEventListener("keypress", function (event) {
    // console.log(event.key.toLowerCase());
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});


function makeSound(touchType) {
    switch (touchType) {
        case "w": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a": var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s": var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j": var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k": var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l": var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: alert("no button associated");
            break;
    }
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}