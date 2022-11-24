let homeScoreTotal = 0
let guestScoreTotal = 0

let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

//FOR HOME

function addOneForHome(){
    homeScoreTotal += 1
    homeScoreEl.textContent = homeScoreTotal
}

function addTwoForHome(){
    homeScoreTotal += 2
    homeScoreEl.textContent = homeScoreTotal
}

function addThreeForHome(){
    homeScoreTotal += 3
    homeScoreEl.textContent = homeScoreTotal
}

//FOR GUEST

function addOneForGuest(){
    guestScoreTotal += 1
    guestScoreEl.textContent = guestScoreTotal
}

function addTwoForGuest(){
    guestScoreTotal += 2
    guestScoreEl.textContent = guestScoreTotal
}

function addThreeForGuest(){
   guestScoreTotal += 3
   guestScoreEl.textContent = guestScoreTotal
}

//NEW GAME

function newGame(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}

