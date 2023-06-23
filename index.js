let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = "" 
let messageEl = document.getElementById("message-el")
let Sum = document.getElementById("sum-el")
//let Sum = document.querySelector("#sum-el")
let Cards = document.getElementById("cards-el") 
let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startgame() {
    isAlive = true
    let firtcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firtcard,secondcard]
    sum = firtcard+secondcard
    rendergame()
}

function rendergame() {
    Sum.textContent = "Sum: " + sum
    Cards.textContent = "Cards: "

    for(let i=0; i<cards.length; i++) {
        Cards.textContent += cards[i]+", "
    }

    if (sum <= 20) {
        msg = "Do you want to pick up another card"
    }
    else if (sum === 21) {
        msg = "You have won"
        hasBlackJack = true
    }
    else {
        msg ="You have lost"
        isAlive = false
    }
    messageEl.innerText = msg
}

function newcard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame() 
    }
}

function getRandomCard() {
    let random_num =  Math.floor(Math.random()*13)+1
    if(random_num > 10) {
        return 10
    }   else if (random_num === 1) {
        return 11
    }   else {
        return random_num
    }
}

