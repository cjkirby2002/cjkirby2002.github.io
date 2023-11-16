const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

function getQuote () {
    const apiURL = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
    fetch(apiURL)
        .then (response => {
            if(!response.ok) {
                throw new Error ('Network response was not okay');
            }
            return response.json();
        })
        .then(data => {
            console.log ('Fetched Quote:', data.question);
            displayQuote(data.question);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            alert('Failed to fetch quote');
        });
    }
function displayQuote(quoteText) {
    const quoteTextElement = document.getElementById('js-quote-text');
    quoteTextElement.textContent = quoteText;
}



