const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=702be7ad514241bbbdece78d256bc2b2";

const listContainer = document.querySelector(".list-container");
let spinner = document.querySelector("#spinner");
let html = "";

// window.addEventListener ('load', () => {

// });

const htmlData = (data) => {
  function timeOutTest() {
    setTimeout(function () {
      for (i = 0; i < data.length; i++) {
        // console.log(data[i]);
        // console.log(data[i].name);
        // console.log(data[i].tags.length);

        if (i === 8) {
          spinner.style.display = "none"; //Removing the spinner before the html is created!
          break;
        }

        html += `<div>
            <h3>${data[i].name}</h3>     
            <p>Rating: ${data[i].rating}</p>
            <p>Number of tags: ${data[i].tags.length}</p>          
            </div>`;
      }
      listContainer.innerHTML = html;
    }, 1500);
  }
  timeOutTest(); //This is a test to show the spinner on loading
};

async function getApi() {
  try {
    const getUrl = await fetch(url);

    const response = await getUrl.json();

    htmlData(response.results);

    const data = response;
  } catch (error) {
    console.log(error);
  }
}

getApi();
