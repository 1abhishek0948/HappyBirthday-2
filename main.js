// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook(false);
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 3;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 2;
        break;
      case 4:
        openBook();
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 1;
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation--;
  }
}const lines = [
  "Today is...",
  "as beautiful as other days",
  "but you realize",
  "another year has gone",
  "in a blink of the eyes",
  "<strong>however</strong>",
  "Do you know..?",
  "Today is just special",
  "so special to you",
  "That's why",
  "Let's make it...",
  "The best celebration ever",
  "and let me share...",
  "A piece of happiness to you",
  "I made all this...",
  "as a birthday present to you",
  "Thanks for being there",
  "Thanks for the <br>friendship we made",
  "I wish you all the best",
  "May your life be at ease",
  "May all your wishes come true",
  "Remember",
  "Your ambitions",
  "You live as a free bird...",
  "Flying in the blue sky",
  "and I hope",
  "You'll find...",
  "Happiness along the way",
  "Keep your spirit up",
  "Enjoy every single moment...",
  "That you experience today",
  "Fill it with your <br>most beautiful smile",
  "and make it the best memory..",
  "Lastly...",
  "I'd like to wish you <br> one more time",
  "A very happy birthday {Name} 🫶🏻❤️"
];

document.getElementById("clickMe").addEventListener("click", function () {
  const messageBox = document.getElementById("messageBox");
  const button = this;
  let index = 0;

  // Hide the button
  button.style.display = 'none';

  function showNextLine() {
    if (index >= lines.length) return;

    messageBox.style.opacity = 0;

    setTimeout(() => {
      messageBox.innerHTML = `<p>${lines[index]}</p>`;
      messageBox.style.opacity = 1;
      index++;
    }, 500);

    setTimeout(showNextLine, 3000);
  }

  showNextLine();
});
function playMusic() {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("playButton");

  audio.play();         // Start the music
  button.style.display = "none"; // Hide the button
}