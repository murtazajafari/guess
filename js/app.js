var chance = 0;
function myFunction() {
    var random = document.getElementById('random').value;
    var guess = document.getElementById('guess').value;
    var result = document.getElementById('result');


    if (random != '' && guess != '') {
        if (isNaN(random) || isNaN(guess)) {
            result.innerHTML = 'OOPS SORRY!! JUST NUMBER';
        } else {
            if (random == guess) {
                result.innerHTML = 'CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ' + guess + ' GUESS ';
            } else if (random > guess) {
                chance++;
                result.innerHTML = 'OOPS SORRY!! TRY A LARGER NUMBER. ' + chance + 'Chance';

            } else if (random < guess) {
                chance++;
                result.innerHTML = 'OOPS SORRY!! TRY A SMALLER NUMBER. ' + chance + 'Chance';

            }
        }
    } else {
        result.innerHTML = 'OOPS SORRY!! INVALID INPUT';
    }

}
document.getElementById('click').addEventListener("click", myFunction);

function hideShow() {
    var hideShow = document.getElementById('random');
    if (hideShow.style.opacity == 1) {
        hideShow.style.opacity = 0;
    } else {
        hideShow.style.opacity = 1;
    }
}
document.getElementById('hideShow').addEventListener("click", hideShow);