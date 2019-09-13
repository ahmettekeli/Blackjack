const Deck = require('./Deck.js');
const Dealer = require('./Dealer.js');
const Player = require('./Player.js');
const Card = require('./Card.js');
const readline = require('readline-sync');


class GameManage{
    constructor(delayAmount, playerName)
    {
        this.deck = new Deck();
        this.delayAmount = delayAmount;
        this.playerName = playerName;
    }

    startGame()
    {
        let stopGame = false;
        let deck = new Deck();
        deck.shuffleDeck();
        let player = new Player(this.playerName,deck);
        let cpu = new Dealer('CPU',deck);
        cpu.hit();
        
        //for testing purposes.
        //player.hand.cards = [new Card("Hearts", "5", 5),  new Card("Hearts","ACE",1),];

        while(!stopGame)
        {
            cpu.showcards();
            player.showCards();
            console.log("------------------------------");

            //check for bj first hand           
            if(player.hand.getHandTotal() === 21)
            {
                if(cpu.hand.getHandTotal() === 21)
                {
                    //draw
                    console.log("It's a draw.");
                    stopGame = true;
                }
                else
                {
                    console.log('Player wins!!');
                    stopGame = true;
                }
            }
            
            if(player.isBusted)
            {
                player.showCards();
                if(cpu.isBusted)
                {
                    //draw print cards.{draw: <hand>}
                    //let obj = {"draw": player.hand.cards};
                    console.log("It's a draw.");
                    stopGame = true;
                }
                else
                {
                    //Player lose print winner hand {winner: <hand>}
                    console.log("Player is busted, CPU wins.");
                    stopGame = true;
                }
            }
            else if(player.hand.getHandTotal() < 21)
            {
                //hit or stand 
                let answer = readline.question("Hit or stand? (H/S)")
                //get user input to hit or stand.
                if(answer.toUpperCase() === 'H') // .uppercase kullanilabilir.
                {
                    player.hit();
                    if(player.isBusted)
                    {
                        console.log("Player is busted.");
                        stopGame = true
                    }
                    //donguye tekrar gir
                }
                else if(answer.toUpperCase() === 'S'){
                    //player.stand();
                    stopGame = true;
                    
                }
            }
        }
        //show result
        this.checkForWinner(cpu,player);
    }


    //Show result
    checkForWinner(cpu, player)
    {
        let cpuHand = cpu.hand.getHandTotal();
        let playerHand = player.hand.getHandTotal();
        cpu.showAllCards();
        player.showCards();
        //show result
        if(cpu.isBusted)
        {
            if(!player.isBusted)
            {
                //player wins.
                console.log('Player wins!!');
            }
            else
            {
                console.log('Its a draw.');
            }
        }
        else
        {
            if(!player.isBusted)
            {
                if(cpuHand>playerHand)
                {
                    //cpu wins
                    console.log('Dealer wins!!');
                }
                else if(cpuHand<playerHand)
                {
                    //player wins
                    console.log('Player wins!!');
                }
                else
                {
                    //draw
                    console.log("it's a draw!!");
                }
            }
            else{
                console.log("Dealer wins.");
            }
        }
        this.checkReplay(this.delayAmount);
    }

    //Setting delay between rounds. (seconds)
    setDelay(delayAmount)
    {
        if(!isNaN(delayAmount))
        {
            var interval = setInterval(() => {
                console.log(delayAmount);
                delayAmount--;              
                if(delayAmount < 0 ){
                  // the timer has reached zero.
                  this.startGame();  
                  clearInterval(interval);
                };
              }, 1000);
        }
        else
        {
            console.log("Please, enter a valid number.");
            //get delay input and startover.
            //this.startGame();
        }
        
    }

    //Checking if player wants to play again.
    checkReplay(delayAmount)
    {
        const answer = readline.question("Would you like to play again? (Y/N)");
        if(answer.toUpperCase() === 'Y')
        {
            this.setDelay(delayAmount);
        }
        else if(answer.toUpperCase() === 'N')
        {
            console.log("Good bye.");
        }
    }
}
module.exports = GameManage;