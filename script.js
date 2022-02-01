const jokeText = document.querySelector(".joke-text");
const newJokeBtn = document.querySelector(".new-joke-btn");
const tweetBtn = document.querySelector(".tweet-btn");

newJokeBtn.addEventListener("click", getJoke);
getJoke();

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const joke = data.joke;
      jokeText.innerText = joke;
      const tweetLink = `https://web.whatsapp.com/`;
      tweetBtn.setAttribute("href", tweetLink);
    })
    .catch(function (error) {
      jokeText.innerText = "Oops! Some error happened :(";
      tweetBtn.removeAttribute("href");
      console.log(error);
    });
}
