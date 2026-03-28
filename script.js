// TYPING
let text = "From nothing → to something → to everything 🎧";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// GET ELEMENTS
let startBtn = document.getElementById("startBtn");
let popup = document.getElementById("popup");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

// BUTTON CLICK → OPEN POPUP
startBtn.addEventListener("click", () => {
  popup.style.display = "flex";

  gsap.from(".popup-box", {
    scale: 0,
    duration: 0.4
  });
});

// CLOSE POPUP
yesBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

noBtn.addEventListener("click", () => {
  popup.style.display = "none";
});