var darkMode = true;

function switchMode(event) {
  darkMode = !darkMode;
  if (darkMode) {
    event.target.innerText = "Lights On!";
    changeColors("#15202B", "white");
    return;
  }
  event.target.innerText = "Lights Off!";
  changeColors("white", "#15202B");
}

function changeColors(bgColor, textColor) {
  document.body.style.setProperty("--bg-color", bgColor);
  document.body.style.setProperty("--text-color", textColor);
}
