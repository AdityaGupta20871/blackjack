let player = {
    name:"person",
    chips:200
}
let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-id")
playerEl.textContent = player.name + ": $" + player.chips
console.log("cardsEl")
function getrandomcard(){
   let randomnumber = Math.floor(Math.random()*13)+1
   if (randomnumber > 10 ){
       return 10
   }else if (randomnumber === 1 ){
       return 11
   }else {
   return randomnumber
   }
}
function startGame(){
    isalive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards:"
    for (let i=0 ;i<cards.length ;i++)
    cardsEl.textContent += cards[i] + " "
    sumEl.textContent = "Sum:"+ sum
    if (sum <= 20){
        message = "do you want to draw a new card?"
}else if(sum === 21 ){
    message = "you got that blackjack "
    hasblackjack = true
}else{
    message = "you are out of game!"
    isalive = false
}
messageEl.textContent = message
}
function newcard(){
    if (isalive === true && hasblackjack === false){
    let card = getrandomcard()    
    sum += card
    cards.push(card)
    renderGame()
    }
}
