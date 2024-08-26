const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const text = "G'day\xa0, I'm Matt";  // \xa0 is a non-breaking space

let charIndex = 0;

const type = () => {
    if (charIndex <= text.length - 1) {
        cursor.classList.remove('blink');
        if (charIndex == 6 && !typedText.textContent.includes("👋")) {
            typedText.textContent += "👋"; // Necessary because the emoji won't print properly if placed in the text variable
        } else {
            typedText.textContent += text.charAt(charIndex);
            charIndex++;
        }
        setTimeout(type, 50);
    } else {
        cursor.classList.add('blink');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {  // function() block is required so timeout is respected by the event listener
        type();
    }, 300);
});