window.currentRandomNumber = undefined;

function generateRandomNumber(generatorId, position) {
    var minRange, maxRange;

    if (generatorId === 3) {
        minRange = 1000;
        maxRange = 9999;
    } else {
        minRange = 100;
        maxRange = 999;
    }

    var randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
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
        var savedNumberList = document.getElementById('savedNumberList');
        var listItem = document.getElementById(`savedNumber${generatorId}-${position}`);

        if (listItem) {
            listItem.textContent = `${window.currentRandomNumber}`;
        } else {
            listItem = document.createElement("li");
            listItem.id = `savedNumber${generatorId}-${position}`;
            listItem.textContent = `${window.currentRandomNumber}`;
            savedNumberList.appendChild(listItem);
        }

        window.currentRandomNumber = undefined;
    } else {
        alert('Generate a random number first before saving.');
    }
}

function clearCurrentNumber() {
    window.currentRandomNumber = undefined;
    var randomNumberContainer = document.getElementById('savedNumberList');
    if (randomNumberContainer) {
        randomNumberContainer.textContent = '';
    }
}

function saveAllNumbers() {
  for (var generatorId = 1; generatorId <= 3; generatorId++) {
      for (var position = 1; position <= 3; position++) {
          var currentNumberElement = document.getElementById(`randomNumber${generatorId}-${position}`);

          if (currentNumberElement) {
              var savedNumberList = document.getElementById('savedNumberList');
              var listItem = document.getElementById(`savedNumber${generatorId}-${position}`);

              if (listItem) {
                  listItem.textContent = `${currentNumberElement.textContent}`;
              } else {
                  listItem = document.createElement("li");
                  listItem.id = `savedNumber${generatorId}-${position}`;
                  listItem.textContent = `${currentNumberElement.textContent}`;
                  savedNumberList.appendChild(listItem);
              }
          }
      }
  }

  // Clear the displayed numbers on the page
  clearCurrentNumber();
}