const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

const resultsContainer = document.querySelector(".results");

// we need the code in an async function as we are using the await keyword
async function fetchTeams() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        // always log and inspect the data you get from an API call to see what properties it has
        console.log(json);

        const teams = json.data;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < teams.length; i++) {
            // we only want to display a maximum of 15 teams
            // there will be less than 15 if any team names begin with "C"
            // use break to leave the loop
            if (i === 15) {
                break;
            }

            const teamName = teams[i].full_name;
            const city = teams[i].city;

            // we are checking for small "c" and big "C"
            if (teamName.startsWith("c") || teamName.startsWith("C")) {
                continue;
            }

            // instead of checking for both small "c" and big "C" we can make the teamName lowercase and just check for "c"
            // if (teamName.toLowerCase().startsWith("c")) {
            //     continue;
            // }

            resultsContainer.innerHTML += `<div class="card">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                        </div>`;
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

// call the function
// without this nothing will happen
fetchTeams();
