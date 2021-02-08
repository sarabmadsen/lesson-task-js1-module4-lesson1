// Lesson Task 1 Question

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        const results = json.data;

        console.log(results);

        resultsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {

            if (i === 15) {
                break;
            }
                
            const teamName = results[i].full_name;
            const city = results[i].city;

            if (teamName.startsWith("c") || teamName.startsWith("C")) {
                continue;
            }


            resultsContainer.innerHTML +=`<div class="card">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                            </div>`

        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

makeApiCall();