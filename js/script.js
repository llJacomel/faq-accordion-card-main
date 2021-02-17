// Check screen and change images source
checkScreen(); // First load

window.onresize = function(event) {
    checkScreen();
}

function checkScreen() {
    var platform = "desktop";
    var boxDisplay = "block";

    if (window.matchMedia("(max-width: 700px)").matches) {
        platform = "mobile";
        boxDisplay = "none";
        changeImg(platform, boxDisplay);
    }
    else {
        platform = "desktop";
        changeImg(platform, boxDisplay);
    }
}

function changeImg(n, e) {
    var bgS = document.getElementById("bg");
    var womanS = document.getElementById("woman");
    var boxS = document.getElementById("box");

    bgS.src = "images/bg-pattern-" + n + ".svg";
    womanS.src = "images/illustration-woman-online-" + n + ".svg";
    boxS.style.display = e;
}

// Show - hide content
var questionClick = document.getElementsByClassName("question");
var displayAnswer = document.getElementsByClassName("answer");
var arrowChange = document.getElementsByClassName("arrow");

showHidecontent(); // Run

function showHidecontent() {
    for (let i = 0; i < questionClick.length; i++) {
        questionClick[i].addEventListener("click", function() { // Add event where need to click
            if (displayAnswer[i].style.display === "block") { // Check content
                displayAnswer[i].style.display = "none";
                removeClass(i);
                return;
            }
            for (let j = 0; j < displayAnswer.length; j++) { // If open a new content, the other will closed
                displayAnswer[j].style.display = "none";
                removeClass(j);
            }
            if (displayAnswer[i].style.display === "none") { // Check content
                addClass(i);
                displayAnswer[i].style.display = "block";
            }
        });
    }
}

function removeClass(n) { // Remove class
    displayAnswer[n].classList.remove('fade');
    questionClick[n].classList.remove('weight');
    arrowChange[n].classList.remove('arrowup');
}

function addClass(n) { // Add class
    questionClick[n].classList.add('weight');
    arrowChange[n].classList.add('arrowup');
    var delay = 300;
    var fadeAnimation = setTimeout(function(){ // Add delay to create a fade animation
        displayAnswer[n].classList.add('fade');
    }, delay);
}