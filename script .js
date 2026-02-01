function removeNo() {
  document.getElementById("noBtn").style.display = "none";
}

function firstYes() {
  document.getElementById("question").innerHTML = "Will you be my Valentine? ❤️";
  document.getElementById("buttons").innerHTML = `
    <button onclick="finalYes()">Of course yes 💖</button>
    <button onclick="finalYes()">Yes forever 💍</button>
  `;
}

function finalYes() {
  document.getElementById("container").style.display = "none";
  document.getElementById("final").classList.remove("hidden");

  document.getElementById("song").play();
  startHearts();
}

function startHearts() {
  for (let i = 0; i < 150; i++) {
    let img = document.createElement("img");
    img.src = Math.random() > 0.5 ? "assets/heart.png" : "assets/rose.png";
    img.style.position = "fixed";
    img.style.left = Math.random() * 100 + "vw";
    img.style.top = "-60px";
    img.style.width = Math.random() * 30 + 30 + "px";
    img.style.opacity = Math.random();
    img.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    document.body.appendChild(img);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(120vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
