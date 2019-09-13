const Hand = require('./Hand.js');

class Player{

    constructor(name, deck)
    {
        this.name = name;
        this.hand = new Hand();
        this.deck = deck;
        this.hand.resetHand(this.deck);
        this.isBusted = false;
    }


    //Pick a card and add it to the hand.
    hit()
    {
        //picks a card adds to the hand.
        //get hand value if > 21 
        //busted = true
        this.hand.addCard(this.deck.pickCard());
        const handVal = this.hand.getHandTotal()
        if(handVal>21)
        {
            if(this.hand.hasAce)
            {
                //hand total'den 10 cikar.
                //handVal i tekrar hesapla halen 21 den buyukse
                this.isBusted = true;
            }
            else{
                this.isBusted = true;
            }
            
        }
    }

    stand()
    {
        //stops the game and lets manager to check for the winner.
    }

    //Show player's hand.
    showCards()
    {
        //show cards.
        console.log('-------------Player Hand-------------');
        for(let card of this.hand.cards){
            console.log(card.toString());
        }
        console.log('total: ' + this.hand.getHandTotal());
    }
}

module.exports = Player;