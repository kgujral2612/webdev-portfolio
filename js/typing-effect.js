const typedTextSpan = document.querySelector("#typed-text");
const typingCursorSpan = document.querySelector("#typing-cursor");
var typingSound= document.querySelector("#typing-sound");

const textArray = ["a Software Engineer", "an NLP Enthusiast", "a Creative Mind"];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!typingCursorSpan.classList.contains("typing")) typingCursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    play();
  } 
  else {
    typingCursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
    pause();
  }
}

function erase() {
	if (charIndex > 0) {
    if(!typingCursorSpan.classList.contains("typing")) typingCursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
    play();
  } 
  else {
    typingCursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
    pause();
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


const play = () => {
  typingSound.play();
}

const pause = () => {
  typingSound.pause();
}


