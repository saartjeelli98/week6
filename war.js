class Players{
    constructor(name, playerCards, playerPoints){
        this.name = name;
        this.playerCards = [];
        this.playerPoints = 0;
    }
}

let player1 = new Players("Sara");
let player2 = new Players("Computer");

class Cards{ //how to define the cards
    constructor (suite, value, rank){
        this.suite = suite;
        this.value = value;
        this.rank = rank;
    }
}



class Deck{ //defining the deck and what you can do with it
    constructor(cards){
        this.cards = []; //to create an array that holds the cards
    }

    makeDeck(){
        let suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
        let rank = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        let values = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13];
        for(let i=0; i<suits.length; i++){
            for (let a=0; a<rank.length; a++){
                this.cards.push(new Cards(suits[i], rank[a], values[a]));
            }
        }
    }

    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--){ 
            let b = Math.floor(Math.random() * i); //math.random will make a random number; 
            let hand = this.cards[i]; //a hand will be each card iterated
            this.cards[i] = this.cards[b];
            this.cards[b] = hand;
        }
    }

    deal(player1, player2){
        for (let i = 0; i < 52 ; i ++){ 
            let deal1 = this.cards.pop(); //removes a card from the shuffled deck
            player1.playerCards.push(deal1); //adds a card to the hand that the first player holds
            let deal2 = this.cards.pop(); //removes another card from the shuffled deck
            player2.playerCards.push(deal2); //adds a card to the hand that the second player holds
        }
    }
}

class Game{ //to define the game and what happens within it
    constructor(){
        this.gamePlayers = [];
    }

    gameRounds(){
        for (let round = 0; round <26; round++){
            let play1 = player1.playerCards[round].rank;
            let play2 = player2.playerCards[round].rank;
            console.log(`
                Round ${round + 1}:
                ${player1.name} played a ${player1.playerCards[round].rank} of ${player1.playerCards[round].suite}.
                ${player2.name} played a ${player2.playerCards[round].rank} of ${player2.playerCards[round].suite}.
            `);
        if (player1.playerCards[round].value > player2.playerCards[round].value){
            player1.playerPoints += 1;
            player2.playerPoints == 0;
            console.log(`
            ${player1.name} is the winner of round ${round +1}.
            `);
        } else if (player2.playerCards[round].value > player1.playerCards[round].value){
            player1.playerPoints == 0;
            player2.playerPoints += 1;
            console.log(`
            ${player2.name} is the winner of round ${round + 1}.
            `)
        }  else if (player1.playerCards[round].value == player2.playerCards[round].value){
            player1.playerPoints == 0;
            player2.playerPoints == 0;
            console.log(`
            No one won round ${round +1}. This round was a tie.
            `)
        }
        }
    }

    finalScoring(){
        let score1 = player1.playerPoints;
    let score2 = player2.playerPoints;
    console.log(`
        The final scores are: 
        ${player1.name}: ${score1}
        ${player2.name}: ${score2}
        `);
    if (player1.playerPoints > player2.playerPoints){
        console.log(`
        ${player1.name} won the game!
        `);
    } else if(player2.playerPoints > player1.playerPoints){
        console.log(`
        ${player2.name} won the game!
        `);
    } else {
        console.log(`There is no winner, the game is tied.`);
    }
    }

    startGame(){ //needs to initialize the game
        this.gamePlayers.push(player1); //adds one player to the game
        this.gamePlayers.push(player2); //adds another player to the game
        let game = new Deck();
        game.makeDeck();//starting all the methods
        game.shuffle();
        console.log(game.cards);
        game.deal(player1, player2);
        this.gameRounds();
        this.finalScoring();
    }
}

//need to start the game
const game = new Deck();
console.log(game.cards);

let newGame = new Game();
newGame.startGame();