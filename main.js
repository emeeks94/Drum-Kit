/* We are adding the sound */
var numberOfButton = document.querySelectorAll('.btn').length;

// This is the code for the button pressed //
for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll('.btn')[i].addEventListener('click', playSound);

     function playSound() {
        
        var pressedBtn = this.innerHTML;

        keyBoard(pressedBtn);
        addAnimation(pressedBtn);        
    }
 
}

// This is the code for keyboard press //
document.addEventListener('keypress', function (event) {
    keyBoard(event.key);
    addAnimation(event.key);
});

function keyBoard(buzz) {

    switch (buzz) {
        case 'a':
            var crash = new Audio ('sounds/crash.mp3');
            crash.play();
            break;
        case 'b':
            var kickbass = new Audio ('sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case 'c':
            var snare = new Audio ('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio ('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'e':
            var tom2 = new Audio ('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'f':
            var tom3 = new Audio ('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'g':
            var tom4 = new Audio ('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            alert('Wrong key');
            break;
    }
}
 
function addAnimation(currentKey) {
    var pressedKeyOrButton = document.querySelector('.' + currentKey);
    pressedKeyOrButton.classList.add('pressed');

    setTimeout(() => {
        pressedKeyOrButton.classList.remove('pressed');
    }, 100);
}