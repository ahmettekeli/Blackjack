const Card = require('./Card.js');
//const Deck = require('./Deck.js');

class Hand{
    constructor()
    {
        this.cards = [];
        this.hasAce = false;
    }

    addCard(card)
    {
        this.cards.push(card);
    }

    getHandTotal()
    {
        let handTotal = 0;
        for(let card of this.cards)
        {
            //if there is ace , skip and hasAce=true            
            if(card.value === 1)
            {
                this.hasAce = true;
            }
            handTotal += card.value;
        }
        if(this.hasAce)
        {
            if(handTotal+10 <=21)
            {
                handTotal+=10;
            }
        }
        // for(let card of this.cards)
        // {
        //     val += card.value;
        // }
        return handTotal;
    }

    resetHand(deck)
    {
        //starting a new game draw 2 cards
        //let game manager know if there is a natural black jack
        this.addCard(deck.pickCard());
        this.addCard(deck.pickCard());
    }
}

module.exports = Hand;