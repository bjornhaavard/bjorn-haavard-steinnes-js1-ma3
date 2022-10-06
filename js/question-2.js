const apiKey = "702be7ad514241bbbdece78d256bc2b2"
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;
const listContainer = document.querySelector(".list-container");
let spinner = document.querySelector("#spinner");
let html = "";

const htmlData = (gameData) => {
  function timeOutTest() {
    setTimeout(function () {
      for (i = 0; i < gameData.length; i++) {
        if (i === 8) {
          spinner.style.display = "none"; //Removing the spinner before the html is created!
          break;
        }

        html += `<div>
            <h3>${gameData[i].name}</h3>     
            <p>Rating: ${gameData[i].rating}</p>
            <p>Number of tags: ${gameData[i].tags.length}</p>          
            </div>`;
      }
      listContainer.innerHTML = html;
    }, 1300);
  }
  timeOutTest(); //This is a test to show the spinner on loading
};

async function getApi() {
  try {
    const getUrl = await fetch(url);

    const response = await getUrl.json();

    htmlData(response.results);
  } catch (error) {
    console.log(error, (listContainer.innerHTML = `An error occured while fetching the API: ${error}`));
  }
}

getApi();
