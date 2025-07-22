 const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed is measured in words per minute.",
  "Practice makes a man perfect.",
  "Stay focused and keep typing accurately.",
  "Every skilled coder writes clean and simple code.",
  "She sells seashells by the seashore every sunny Sunday.",
  "Pack my box with five dozen liquor jugs.",
  "The five boxing wizards jump quickly over the gate.",
  "A journey of a thousand miles begins with a single keystroke.",
  "Bright vixens jump; dozy fowl quack.",
  "Typing without looking improves your muscle memory and confidence.",
  "Zany wizards pluck exotic javelins from the big quilted box.",
  "How razorback-jumping frogs can level six piqued gymnasts!",
  "Jack quietly moved the heavy boxes to the front yard.",
  "Fix the big problem with clever thinking and fast fingers.",
  "Learning to type is like riding a bicycle for your fingers.",
  "Jumping foxes quickly vex the bright and lazy dogs.",
  "Avoid errors by typing each word slowly and correctly at first.",
  "Speed builds over time, so type patiently and stay consistent.",
  "Keep practicing daily to develop fast and accurate typing skills."
];

let startTime, originalText;

const sentenceDisplay = document.getElementById("sentence");
const inputBox = document.getElementById("inputBox");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

function startNewTest() {
  // Reset everything
  inputBox.value = "";
  wpmDisplay.textContent = "";
  accuracyDisplay.textContent = "";

  originalText = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceDisplay.textContent = originalText;
  startTime = null;
}

inputBox.addEventListener("input", () => {
  if (!startTime) {
    startTime = new Date(); // Start time when user begins typing
  }

  const typedText = inputBox.value;

  if (typedText.length >= originalText.length) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // seconds

    const wordCount = originalText.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    // Accuracy Calculation
    let correct = 0;
    for (let i = 0; i < originalText.length; i++) {
      if (typedText[i] === originalText[i]) {
        correct++;
      }
    }
    const accuracy = Math.round((correct / originalText.length) * 100);

    wpmDisplay.textContent = `Speed: ${wpm} WPM`;
    accuracyDisplay.textContent = `Accuracy: ${accuracy}%`;
  }
});

// Start the first test on load
startNewTest();
