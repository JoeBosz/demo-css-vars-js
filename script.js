const h1 = document.querySelector("h1");
const h2 = document.querySelector(".art-title");

// TODO; Select the only input on the page

const input = document.querySelector("input");

const buttons = document.querySelectorAll("button");

function handleClick(event) {
  const currentFontSize =
    Number.parseFloat(getComputedStyle(h2).getPropertyValue("--font-size")) +
    0.05;

  // TODO: Add logic to change the text of the h2 elements
  // If we clicked 'increase'...
  if (event.target.id === "increase") {
    h2.style.setProperty("--font-size", currentFontSize + 0.5 + "em");
  } else {
    // decrease
    h2.style.setProperty("--font-size", currentFontSize - 0.5 + "em");
  }
}

buttons.forEach(
  // Call back function
  function (button) {
    button.addEventListener(
      "click",

      // Reference the function we created above - use it for each button
      handleClick
    );
  }
);
