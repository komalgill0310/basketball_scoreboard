let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

//FOR HOME

function handleHomeScore(scoreIncrement) {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + scoreIncrement;
}

//FOR GUEST

function handleGuestScore(scoreIncrement) {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + scoreIncrement;
}

//NEW GAME

function newGame() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
