const button = document.querySelector("animatedButton1");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.getElementById("animatedButton2");

button.addEventListener("click", function() {
  button.classList.add("animated");
  setTimeout(() => {
    button.classList.remove("animated");
  }, 300); 
});