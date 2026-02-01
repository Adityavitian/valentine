const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");
const finalDiv = document.getElementById("final");
const song = document.getElementById("song");

function removeNo() {
  noBtn.style.display = "none";
}

function firstYes() {
  question.innerText = "Miaata , Will you be my Valentine forever? 💖";
  buttons.innerHTML = `
    <button onclick="finalYes()">Of course yess 💕</button>
    <button onclick="finalYes()">Yes Forever ♾️</button>
  `;
  song.play();
}

function finalYes() {
  document.getElementById("container").style.display = "none";
  finalDiv.classList.remove("hidden");
  song.play();
  startHearts();

  // --- THE FIX IS HERE ---
  // This waits 2 seconds, then shows the Akkii-fied popup
  setTimeout(() => {
    const popup = document.getElementById("akkiiPopup");
    if (popup) {
      popup.classList.remove("popup-hidden");
    }
  }, 2000); 
}

// Function to close the popup if she clicks "YAY"
function closePopup() {
  document.getElementById("akkiiPopup").classList.add("popup-hidden");
}
// -----------------------

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = Math.random() > 0.5 ? "❤️" : "🌹";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}