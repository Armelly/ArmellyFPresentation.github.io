// const player1 = new Player(
//   "John",
//   "Doe",
//   "johndoe",
//   "1234567890",
//   "New York",
//   "john@example.com"
// );
// const player2 = new Player(
//   "Jane",
//   "Smith",
//   "janesmith",
//   "9876543210",
//   "Los Angeles",
//   "jane@example.com"
// );

// }

// const game = new Game(5);
// game.addPlayer(player1);
// // game.addPlayer(player2);
// game.startGame();

// Helper function to assert equality
// function EspectedResults(actual, expected, message) {
//   if (actual === expected) {
//     console.log(`PASS: ${message}`);
//   } else {
//     console.error(`FAIL: ${message}. Expected ${expected}, but got ${actual}`);
//   }
// }

// Test starting game with insufficient players
// function gameTestIn() {
//   const game2 = new Game(5, 100);
//   const player1 = new Player(
//     "John",
//     "Doe",
//     "johndoe",
//     "1234567890",
//     "City",
//     "email@example.com"
//   );

// Test cases for Player class
// function testPlayer() {
//   const player1 = new Player(
//     "John",
//     "Doe",
//     "johndoe",
//     "1234567890",
//     "City",
//     "email@example.com"
//   );

//   // Test getting full name
//   EspectedResults(
//     player1.getFullName(),
//     "John Doe",
//     "Should return full name correctly"
//   );
// }

// // Test cases for Game class
// function testGame() {
//   const game = new Game(5, 100);
//   const player2 = new Player(
//     "John",
//     "Doe",
//     "johndoe",
//     "1234567890",
//     "City",
//     "email@example.com"
//   );
//   const player3 = new Player(
//     "Jane",
//     "Doe",
//     "janedoe",
//     "0987654321",
//     "City",
//     "email@example.com"
//   );
//   game.addPlayer(player2);
//   game.addPlayer(player3);

//   // Test adding player
//   EspectedResults(game._players.length, 2, "Should add player to the game");

//   // Test playing round
//   game.startGame();
//   EspectedResults(game._currentRound, 2, "Should play a round of the game");

//   // Test asking player to continue their turn
//   const continueTurn = game.askContinue(true);
//   EspectedResults(
//     continueTurn,
//     undefined,
//     "Should ask player to continue their turn"
//   );
// }

// // Run all test cases
// function runTests() {
//   console.log("Running tests for Player class...");
//   testPlayer();
//   console.log("Running tests for Game class...");
//   testGame();
// }

// // Execute tests
// runTests();

const player1 = new Player(
  "John",
  "Doe",
  "johndoe",
  "1234567890",
  "New York",
  "john.doe@example.com"
);
const player2 = new Player(
  "Jane",
  "Doe",
  "janedoe",
  "0987654321",
  "Los Angeles",
  "jane.doe@example.com"
);

// Create a game with 3 rounds
const game = new Game(3, 100);

// Add players to the game
game.addPlayer(player1);
game.addPlayer(player2);


// Start the game
game.startGame();

// Output the results of each round
console.log("Game started!");
for (let i = 0; i < game._roundsToPlay; i++) {
  console.log(`Round ${i + 1}:`);
  const result = game.playRound();
  console.log(result);
}

// Check the final scores of each player
console.log("Final Scores:");
for (let player of game._players) {
  console.log(`${player.getFullName()}: ${player._score} points`);
}
