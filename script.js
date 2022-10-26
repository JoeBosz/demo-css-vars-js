const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

const buttons = document.querySelectorAll("button");

function handleClick(event) {
  const currentFontSize =
    Number.parseFloat(getComputedStyle(h2).getPropertyValue("--font-size")) +
    0.05;

  // TODO: Add logic to change the text of the h2 elements
  // If we clicked 'increase'...
  if (event.target.id === "increase") {
    h2.style.setProperty("--font-size", currentFontSize + 0.5 + "em");
    h2.style.setProperty("--font-size", currentFontSize - 0.5 + "em");
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});

h2.style.setProperty("color", "green");
