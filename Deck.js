const Card = require('./Card.js');

class Deck{

    constructor()
    {
        this.cards = [];
        this.initializeDeck();

    }

    initializeDeck(){
        const cardTYpes = ["Hearts","Spades","Clubs","Diamonds"];
        const cardValues = [1,2,3,4,5,6,7,8,9,10,10,10,10];
        const cardNames = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"]
        
        for(let suit of cardTYpes)
        {
            for(let i = 0 ; i<13; i++){
                this.cards.push(new Card(suit,cardNames[i],cardValues[i]));
            }
        }
        //6 decks of 52 cards.
        let copyDeck = [...this.cards];
        for(let i = 0; i<5 ;i++)
        {
            this.cards.push(...copyDeck);
        }
    }

    //Fisher Yates by Durstenfeld
    shuffleDeck()
    {
        for(let i = this.cards.length -1 ; i>0; i--)
        {
            let j = Math.floor(Math.random()*(i+1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    //Drawing a card from the deck.
    pickCard()
    {
        let pickedCard = this.cards[0];
        this.removeCard();
        return pickedCard;
    }

    //Removing the card from the deck.
    removeCard()
    {
        //this.cards.splice(0);
        this.cards.shift();
    }
}
module.exports = Deck;