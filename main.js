// API URL: https://uselessfacts.jsph.pl/api/v2/facts/random

const randomFact = document.getElementById("random-fact");

// Fetching from this URL.
fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then((response) => {
        return response.json(); // We try to read the response body in json-format.
    })
    .then((response) => {
        randomFact.textContent = response.text; // When JSON is parsed we update the textContent of the randomFact variable
    })
    .catch((response) => {
        console.log(response); // If an error occurs, log it.
    });


// Simulating a server request with setTimeout. You will seldom need to write this on the frontend. This often happens on the backend.
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const success = true; // Simulate success or failure

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data");
            }
        }, 2000); // Simulate 2 seconds delay
    });
}

console.log("Start");

fetchData()
    .then((data) => {
        console.log(data); // Logs "Data fetched successfully!" after 2 seconds
    })
    .catch((error) => {
        console.log(error); // Logs if there is an error
    });

console.log("End"); // This gets logged before the promise

// Async function to fetch a random useless fact
async function fetchRandomFact() {
    try {
        console.log("Fetching fact...");

        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json(); // Wait for the JSON parsing
        console.log("Fact fetched:", data.text); // Log the fact

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return "Failed to fetch the fact";
    }
}

console.log("Start");

fetchRandomFact(); // Asynchronous, won't block the next line

console.log("Other synchronous code running...");

