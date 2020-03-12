const button = document.querySelector("button");
const team1box = document.querySelector(".team1Box");
const team2box = document.querySelector(".team2Box");
const team1name = document.querySelector(".team1Name");
const team2name = document.querySelector(".team2Name");

button.addEventListener('click', async () => {
  const response = await axios.get("https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams", {
    "headers": {
      "x-rapidapi-host": "montanaflynn-fifa-world-cup.p.rapidapi.com",
      "x-rapidapi-key": "3c20d1cd6emshdcd6f41cc0297edp10ba17jsnab0322d15693",
    }
  })
    .then(response => {

      //To randomize the array//
      const randomTeam1 = Math.random()
      const randomTeam2 = Math.random()
      console.log(response.data[Math.floor(randomTeam1 * response.data.length)].title)
      team1name.innerHTML = response.data[Math.floor(randomTeam1 * response.data.length)].title;
      team2name.innerHTML = response.data[Math.floor(randomTeam2 * response.data.length)].title;

    })

})


