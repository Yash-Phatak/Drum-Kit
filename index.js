// Detecting Button Press
for(let i=0;i<document.querySelectorAll(".drum").length ;i++){
    document.querySelectorAll("button")[i].addEventListener("click",
        function(){
            let letter = this.innerHTML;
            playAudio(letter);
            buttonAnimation(letter);
        }
    );
}

// Detecting Key Press
document.addEventListener("keydown", function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
})

// Audio Play Function 
function playAudio(letter){
    // Lets us know what to do when button is selected
    // alert(i + " got clicked");
    // this pointer can be used to access the current button
    // var letter = this.innerHTML;
    switch (letter) {
        case "w":
            var audio  = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "a":
            var audio  = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        case "s":
            var audio  = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "d":
            var audio  = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        default:
            console.log("Wrong key pressed.");
            break;
    }
}

// Button Animations
function buttonAnimation(curentKey){
    let activeButton = document.querySelector("."+curentKey);
    activeButton.classList.add('pressed'); // add a css class to the button
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100)
}








// NOTES
// Higher Order Functions can take functions as parameter inputs -> add Event Listener
// Call back functions -> takes a parameter and returns commands as part of a callback

// JS function to play audio
// var audio  = new Audio("sounds/tom-1.mp3")
//             audio.play();
// Audio() is a constructor function. They have first letter capitalised.