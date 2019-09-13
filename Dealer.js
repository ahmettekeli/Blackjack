
const Player = require('./Player.js');

class Dealer extends Player{
    constructor(name, deck)
    {
        super(name, deck);
    }

    //Drawing a card to the hand
    hit()
    {
        while(this.hand.getHandTotal()<17)
        {
            super.hit();
        }
    }

    //Show dealer's last card, hide the rest.
    showcards()
    {
        console.log('-------------CPU Hand-------------');
        console.log(this.hand.cards[this.hand.cards.length-1].toString());
        //console.log('total: ' + this.hand.getHandTotal());
    }

    //Show dealer's hand.
    showAllCards()
    {
        //show cards.
        console.log('-------------CPU Hand-------------');
        for(let card of this.hand.cards){
            console.log(card.toString());
        }
        console.log('total: ' + this.hand.getHandTotal());
    }
}
module.exports = Dealer;