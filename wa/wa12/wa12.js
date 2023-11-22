function getRandomActivity() {
    const apiUrl = 'https://www.boredapi.com/api/activity?type=recreational&participants=1';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayActivity(data.activity);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayActivity(activity) {
    // Display the activity on the webpage
    const activityElement = document.getElementById('activity');
    activityElement.textContent = `Random Activity: ${activity}`;
}



