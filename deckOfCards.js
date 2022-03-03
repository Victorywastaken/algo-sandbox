//Generic deck of cards
export default class Deck {
  constructor(){
    this.deck = [];
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for(let suit of suits){
      for(let value of values){
        this.deck.push({
          suit: suit,
          value: value,
          weight: this.getWeight(value),
        });
      }
    }
  }
  length(){
    return this.deck.length;
  }

  reset(){
    this.deck = [];
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for(let suit of suits){
      for(let value of values){
        this.deck.push({
          suit: suit,
          value: value,
          weight: this.getWeight(value),
        });
      }
    }
  }
  getWeight(value){
    if(value === "A") return 11;
    if(value === "J" || value === "Q" || value === "K") return 10;
    return parseInt(value);
  }

  shuffle(){
    this.reset();
    for(let i = 0; i < this.deck.length; i++){
      let location1 = Math.floor(Math.random()*this.deck.length);
      let location2 = Math.floor(Math.random()*this.deck.length);
      let temp = this.deck[location1];
      this.deck[location1] = this.deck[location2];
      this.deck[location2] = temp;
    }
    return this.deck;
  }

  deal(){
    return this.deck.pop();
  }
}

//Blackjack specific deck
class BlackJackDeck extends Deck {
  constructor(){
    super();
  }
  deal(){
    let card = super.deal();
    if(card.value === "A"){
      card.value = 11;
    }
    if(card.value === "J" || card.value === "Q" || card.value === "K"){
      card.value = 10;
    }
    return card;
  }
}

const blackDeck = new BlackJackDeck();
console.log(blackDeck);

// class BlackJackState {
//   constructor(){
//     this.deck = new BlackJackDeck();
//     this.players = [];
//   }
//   addPlayer(){
//     this.players.push(new Player());
//   }

//   deal(){
//     for(let i = 0; i < 2; i++){
//       for(let player of this.players){
//         player.hand.push(this.deck.deal());
//       }
//     }
//   }
//   play(){
//     this.deck.shuffle();
//     this.deal();
//     this.addPlayer();
//     this.players[0].turn = true;
//   }
//   nextPlayer(){
//     this.players[0].turn = false;
//     this.players.push(this.players.shift());
//     this.players[0].turn = true;
//   }
// }

// class Player {
//   constructor(){
//     this.hand = [];
//     this.turn = false;
//   }

//   hit(deck){
//     this.hand.push(deck.deal());

//   }

//   stay(){
//     //do nothing
//   }

//   getScore(){
//     let score = 0;
//     for(let card of this.hand){
//       score += card.value;
//     }
//     return score;
//   }
// }

// class Game {
//   constructor(){
//     this.state = new BlackJackState();
//   }
//   play(){
//     this.state.play();
//   }
// }

// let blackJack = new Game();
// blackJack.play();
