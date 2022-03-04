// import Deck from './deckOfCards.js';

// let deck = new Deck();
// console.log(deck);

// class BlackJack {
//   constructor(){
//     this.playerHand = [];
//     this.dealerHand = [];
//     this.playerScore = 0;
//     this.dealerScore = 0;
//   }
// }

function add(num1, num2){
  //add two numbers without using + or - using bitwise operators
  return (num1 ^ num2) & (num1 | num2);
}

console.log(add(5, 8));
