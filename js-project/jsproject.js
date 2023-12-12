function generateRandomNumber(generatorId) {
  // Generate a random number between 0 and 9
  var randomNumber = Math.floor(Math.random() * 10);

  // Display the random number
  document.getElementById(`randomNumber${generatorId}`).innerText = `Random Number: ${randomNumber}`;

  // Store the current random number in a variable for potential saving
  window.currentRandomNumber = randomNumber;
}

function saveNumber(generatorId) {
  if (window.currentRandomNumber !== undefined) {
    // Store the current random number in the saved numbers list
    var savedNumberList = document.getElementById('savedNumberList');
    var listItem = document.createElement("li");
    listItem.textContent = `${window.currentRandomNumber}`;
    savedNumberList.appendChild(listItem);

    // Clear the current random number after saving
    window.currentRandomNumber = undefined;
  } else {
    alert('Generate a random number first before saving.');
  }
}