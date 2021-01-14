const GameManage = require("./GameManage.js");
const readline = require("readline-sync");

let delay = readline.question("Please enter the delay amount bt rounds: ");
const playBlackjack = (delay, playerName) => {
	const gameManager = new GameManage(delay, playerName);
	gameManager.setDelay(delay);
};

playBlackjack(delay, "Ahmet");
