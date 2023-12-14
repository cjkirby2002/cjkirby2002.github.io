function generateRandomNumber(generatorId, position) {
  var randomNumber = Math.floor(Math.random() * 10);
  var targetId = `randomNumber${generatorId}-${position}`;

  console.log(targetId);

  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.textContent = `Random Number: ${randomNumber}`;
    window.currentRandomNumber = randomNumber;
  } else {
    console.error(`Element with ID '${targetId}' not found.`);
  }
}


function saveNumber(generatorId, position) {
  if (window.currentRandomNumber !== undefined) {
    // Store the current random number in the saved numbers list
    var savedNumberList = document.getElementById('savedNumberList');

    // Get the list item at the specified position
    var listItem = document.getElementById(`savedNumber${generatorId}-${position}`);

    // If the list item exists, update its content; otherwise, create a new list item
    if (listItem) {
      listItem.textContent = `${window.currentRandomNumber}`;
    } else {
      listItem = document.createElement("li");
      listItem.id = `savedNumber${generatorId}-${position}`;
      listItem.textContent = `${window.currentRandomNumber}`;
      savedNumberList.appendChild(listItem);
    }

    // Clear the current random number after saving
    window.currentRandomNumber = undefined;
  } else {
    alert('Generate a random number first before saving.');
  }
}
