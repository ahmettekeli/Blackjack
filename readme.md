/*
    Blackjack is a card game where the player(you) need to beat the dealer by getting closer to 21 higher than the dealer without exceeding 21.
    
    Rules:
        - The game has 6 decks of 52 classic playing cards (312 cards total).
        - Goal: Get closer to 21 than the dealer without going over 21.
        - If a player exceeds 21 he busts and it means that player loses the round.
        - Card Values:
            - 2 through 10 has face value
            - Jack, Queen and King have values of 10
            - Ace has 1 or 11 values depending of the hand whichever is the best for the hand
        - Initial Dealt:
            - Each player gets 2 initial random cards from the 6 decks of cards
                - Dealer gets 1 card facing down. Player doesn't know about this card.
                - Player gets 1 card facing up
                - Dealer gets 1 card facing up
                - Player gets 1 card facing up
                Example:
                Dealer Hand
                |-------|       |-------|
                |?      |       |9      |
                |       |       |       |
                |      ?|       |      9|
                |-------|       |-------|
                ?               Spades

                Player Hand
                |-------|       |-------|
                |2      |       |4      |
                |       |       |       |
                |      2|       |      4|
                |-------|       |-------|
                Diamonds        Clubs
        - The facing down card gets shown when the player "stays" or "busts".
        - The dealer has to hit (get card) until his hand has a value of 17 or more. 
        He can't get cards if his hand has a value of 17 or more even if he has a worse hand than the player.

    Playing:
        - The Player wants to get closer to 21.
        - The player has 2 choices: "hit" or "stay"
        - If the player hits he gets a new card
            - If the new hand value is less than 21 and satisfies the player he "stays"
                - The dealer shows his hidden card
                - If the dealer has a less then 17 value hand the dealer gets a new card until the hand has 17 or more value
                - If the dealer busts the player wins
                - The winner of the round is the closest one to 21
            - If the new hand value is 21 then the player has a blackjack hand
                - The dealer show the hidden card
                - If the dealer has a less then 17 value hand the dealer gets a new card until the hand has 17 or more value
                - If the dealer has a 21 value hand the round ends draw
                - If the dealer busts the player wins
                - The winner of the round is the closest one to 21
            - If the new hand value exceeds 21 then the player busts
                - The dealer automatically wins

    Your task:
        - Create a blackjack game that has only 1 player and the player should be controlled by you.
        -Create The game and associated utilities with the end goal being a game runner class which takes 2 parameters "delay" and "playerName", 
            generates the shuffled deck and deals the cards and let the player plays the game until the round ends.
        - Once the every round ends, return the winner hand as an object containing a winner property ex: { winner: <hand> }.
        - If there is no winner, return the player hand as an object containing a draw property ex: { draw: <hand> }.
        - Before starting the new round, a timer should countdown from how much seconds you decide from a parameter you pass to the game runner class
        example rounds:
                Dealer Hand (Winner)
                |-------|       |-------|       |-------|
                |6      |       |9      |       |6      |
                |       |       |       |       |       |
                |      6|       |      9|       |      6|
                |-------|       |-------|       |-------|
                Hearts          Spades          Spades

                Player Hand
                |-------|       |-------|       |-------|
                |6      |       |4      |       |10     |
                |       |       |       |       |       |
                |      6|       |      4|       |     10|
                |-------|       |-------|       |-------|
                Diamonds        Clubs           Hearts

                ------------------------------------------------

                Dealer Hand
                |-------|       |-------|
                |8      |       |9      |
                |       |       |       |
                |      8|       |      9|
                |-------|       |-------|
                Hearts          Spades   

                Player Hand (Winner)
                |-------|       |-------|       |-------|
                |6      |       |4      |       |8      |
                |       |       |       |       |       |
                |      6|       |      4|       |      8|
                |-------|       |-------|       |-------|
                Diamonds        Clubs           Hearts

                ------------------------------------------------
                
                Dealer Hand
                |-------|       |-------|
                |8      |       |9      |
                |       |       |       |
                |      8|       |      9|
                |-------|       |-------|
                Hearts          Spades   

                Player Hand (Winner)
                |-------|       |-------|       |-------|
                |6      |       |4      |       |8      |
                |       |       |       |       |       |
                |      6|       |      4|       |      8|
                |-------|       |-------|       |-------|
                Diamonds        Clubs           Hearts
                
                ------------------------------------------------

                Dealer Hand (Winner)
                |-------|       |-------|
                |8      |       |9      |
                |       |       |       |
                |      8|       |      9|
                |-------|       |-------|
                Hearts          Spades   

                Player Hand (Bust)
                |-------|       |-------|       |-------|
                |6      |       |10     |       |6      |
                |       |       |       |       |       |
                |      6|       |     10|       |      6|
                |-------|       |-------|       |-------|
                Diamonds        Clubs           Hearts

                ------------------------------------------------

                Dealer Hand
                |-------|       |-------|
                |8      |       |9      |
                |       |       |       |
                |      8|       |      9|
                |-------|       |-------|
                Hearts          Spades   

                Player Hand (Winner)
                |-------|       |-------|
                |A      |       |10     |
                |       |       |       |
                |      A|       |     10|
                |-------|       |-------|
                Diamonds        Clubs    
                Ace is valued 11 here

                ------------------------------------------------

                Dealer Hand
                |-------|       |-------|
                |8      |       |9      |
                |       |       |       |
                |      8|       |      9|
                |-------|       |-------|
                Hearts          Spades   

                Player Hand (Winner)
                |-------|       |-------|       |-------|       |-------|
                |A      |       |3      |       |10     |       |7      |
                |       |       |       |       |       |       |       |
                |      A|       |      3|       |     10|       |      7|
                |-------|       |-------|       |-------|       |-------|
                Diamonds        Clubs           Hears           Clubs    
                Ace is valued 1 here

*/