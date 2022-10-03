const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=702be7ad514241bbbdece78d256bc2b2";

const listContainer = document.querySelector(".list-container");

async function getApi() {
  try {
    const getUrl = await fetch(url);
    const response = getUrl.json();
    console.log(response);
    data = response.result;
  } catch (error) {
    console.log(error);
  }

  let html = "";

  for (i = 0; i < data.length; i++) {
    const arrayResult = data.length;
    html += `<div>
             <li>
             ${arrayResult.results[8]}
             </li>
             </div>`;
    console.log(data[i].length);
  }
  listContainer.innerHTML = html;
}

getApi();

// const gameContainer = document.querySelector(".games-container");
// const apiKey = "d2316e921dc2464e9c73394403818610";
// const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;
// import { displayError } from "./components/displayError.js";

// const createHtml = (gamesList) => {
//   const listOfGames = gamesList;

//   gameContainer.innerHTML = "";

//   for (let i = 0; i < listOfGames.length; i++) {
//     if (i === 8) {
//       break;
//     }
//     const gameRating = listOfGames[i].rating;
//     const nameOfGame = listOfGames[i].name;
//     const numberOfTags = listOfGames[i].tags.length;

//     gameContainer.innerHTML += `<div class="games">
//                                 <h2>${nameOfGame}</h2>
//                                 <p>Rating: ${gameRating}</p>
//                                 <p>Number of Tags: ${numberOfTags}</p>
//                                 </div>`;
//   }
// };

// async function rawgApi() {
//   try {
//     const respons = await fetch(url);
//     const data = await respons.json();
//     const list = data.results;

//     createHtml(list);
//   } catch (error) {
//     console.warn(error);
//     gameContainer.innerHTML = displayError("An error has occurred when retrieving the API");
//   }
// }

// rawgApi();
