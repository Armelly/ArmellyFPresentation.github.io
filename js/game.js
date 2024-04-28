const $$ = (id) => document.querySelector(id);
const $$$ = (sel) => document.getElementById(sel);

// selection for gamerules
let myGameR = $$(`#myGameR`);
let gameRuleButton = $$(`#gameRuleButton`);
let spanClose = document.getElementsByClassName("close")[0];

//quit button
let quitBtn = $$(`.btn-quit`);

class Player {
  constructor(name) {
    this.name = name;
    this.totalScore = 0;
    this.currentScore = 0;
  }

  reset() {
    this.totalScore = 0;
    this.currentScore = 0;
  }
}

class Game {
  constructor() {
    this.players = [new Player("Player 1"), new Player("Player 2")];
    this.currentPlayerIndex = 0;
    this.diceElement = document.querySelector(".dice");
    this.isPlaying = false;
    this.rounds = 0;
    this.currentRound = 0;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    $$(".btn-start").addEventListener("click", () => this.startGame());
    $$(".btn-roll").addEventListener("click", () => this.rollDice());
    $$(".btn-hold").addEventListener("click", () => this.hold());
    // $$(".btn-new").addEventListener("click", () => this.newGame());
  }

  startGame() {
    const roundsInput = $$$("input-rounds");
    this.rounds = parseInt(roundsInput.value, 10);
    if (isNaN(this.rounds) || this.rounds < 1 || this.rounds > 11) {
      alert("Please enter a valid number of rounds. Between 1 and 11");
      return;
    }
    this.isPlaying = true;
    this.currentRound = 0;
    this.newGame();
  }

  rollDice() {
    if (!this.isPlaying) return;
    const diceValue = Math.floor(Math.random() * 6) + 1;
    this.diceElement.src = `./img/dice.png`;
    this.diceElement.style.display = "block";

    if (diceValue === 1) {
      this.players[this.currentPlayerIndex].currentScore = 0;
      this.switchPlayer();
    } else {
      this.players[this.currentPlayerIndex].currentScore += diceValue;
      this.updateUI();
    }
  }

  hold() {
    if (!this.isPlaying) return;
    const currentPlayer = this.players[this.currentPlayerIndex];
    currentPlayer.totalScore += currentPlayer.currentScore;
    currentPlayer.currentScore = 0;

    if (currentPlayer.totalScore >= 100 || ++this.currentRound >= this.rounds) {
      this.endGame(
        currentPlayer.totalScore >= 100
          ? `${currentPlayer.name} wins!`
          : "Game over. No winners."
      );
    } else {
      this.switchPlayer();
    }
  }

  newGame() {
    if (isNaN(this.rounds) || this.rounds < 1 || this.rounds > 11) {
      alert("Please enter a valid number of rounds. (Between 1 or 11)");
      return;
    }

    this.isPlaying = true;
    this.players.forEach((player) => player.reset());
    this.currentPlayerIndex = 0;
    this.updateUI();
    this.diceElement.style.display = "none";
  }

  endGame() {
    let winnerIndex = 0;
    let highestScore = 0;

    this.players.forEach((player, index) => {
      if (player.totalScore > highestScore) {
        highestScore = player.totalScore;
        winnerIndex = index;
      }
    });

    const winnerMessage =
      highestScore >= 100
        ? `${this.players[winnerIndex].name} wins with ${highestScore} points!`
        : `Game over. ${this.players[winnerIndex].name} has the highest score with ${highestScore} points.`;

    alert(winnerMessage);
    this.isPlaying = false;
    this.updateUI();
  }

  switchPlayer() {
    this.players[this.currentPlayerIndex].currentScore = 0;
    this.currentPlayerIndex = 1 - this.currentPlayerIndex; // Toggle between 0 and 1
    this.updateUI();
  }

  updateUI() {
    this.players.forEach((player, index) => {
      $$$(`score-${index}`).textContent = player.totalScore;
      $$$(`current-${index}`).textContent = player.currentScore;

      // Check if the player panel element exists before manipulating its classList
      const playerPanel = document.getElementById(`player-${index}-panel`);
      if (playerPanel) {
        // Remove the 'active' class from all player panels
        playerPanel.classList.remove("active");

        // Add the 'active' class to the current player's panel
        if (index === this.currentPlayerIndex) {
          playerPanel.classList.add("active");
        }
      }
    });
  }
}

gameRuleButton.onclick = function () {
  myGameR.style.display = "block";
};

spanClose.onclick = function () {
  myGameR.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == myGameR) {
    myGameR.style.display = "none";
  }
};

//quit

quitBtn.onclick = function () {
  alert(
    `Thanks for playing the game! See you next time! ${firstName} ${lastName}`
  );
  window.location.href = "index.html";
};

// $$("#firstName").InnerHTML = localStorage.getItem("firstName");
let footer = $$(`#PlayerInfo`);

let firstName = localStorage.getItem("firstName");
let p = document.createElement("p");
p.textContent = firstName;
footer.append(p);

let lastName = localStorage.getItem("lastName");
let p2 = document.createElement("p");
p2.textContent = lastName;
footer.append(p2);

let usersame = localStorage.getItem("username");
let p3 = document.createElement("p");
p3.textContent = usersame;
footer.append(p3);

let phoneNumber = localStorage.getItem("phoneNumber");
let p4 = document.createElement("p");
p4.textContent = phoneNumber;
footer.append(p4);

let city = localStorage.getItem("city");
let p5 = document.createElement("p");
p5.textContent = city;
footer.append(p5);

let email = localStorage.getItem("email");
let p6 = document.createElement("p");
p6.textContent = email;
footer.append(p6);

$$(`#name-0`).innerHTML = usersame;

const game = new Game();
game.init();

//player Class
// class Player {
// constructor(
//   firstName,
//   lastName,
//   username,
//   phoneNumber,
//   city,
//   emailAddres,
//   score = 0
// ) {
//   this._firstName = firstName;
//   this._lastname = lastName;
//   this._username = username;
//   this._phoneNumber = phoneNumber;
//   this._city = city;
//   this._emailAddres = emailAddres;
//   this._score = score;
// }

//Getting the full name
//   getFullName() {
//     return `${this._firstName} ${this._lastname}`;
//   }
// }

//function to roll a dica
// let rollDice = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// //game Class
// class Game {
//   constructor(roundsToPLay, maxPoint = 100) {
//     this._roundsToPlay = roundsToPLay;
//     this._maxPoint = maxPoint;
//     this._currentRound = 1;
//     this._players = [];
//     this._currentPlayerIndex = 0; //keeping track of player index
//   }

//   //method to add a player to the game
//   addPlayer(player) {
//     this._players.push(player);
//   }

//   //startgame
//   startGame() {
//     if (this._players.length < 2) {
//       // console.error("CANNOT START GAME");
//     } else {
//       this.playRound();
//     }
//   }

//   playRound() {
//     while (this._currentRound <= this._roundsToPlay) {
//       let currentPLayer = this._players[this._currentPlayerIndex]; // get current player
//       let continueTurn = true;

//       while (continueTurn) {
//         //rollDice
//         const rollD = rollDice();
//         if (rollD === 1) {
//           //if rool a one reset points
//           currentPLayer._score = 0;
//           continueTurn = false;
//         } else {
//           //add the roll number to the present score
//           currentPLayer._score += rollD;

//           if (currentPLayer._score >= this._maxPoint) {
//             return `${currentPLayer.getFullName} won with ${currentPLayer._score} points!`;
//           }
//         }
//         continueTurn = this.askContinue;
//       }
//     }
//     this._currentRound++;
//   }

//   askContinue(isTurn) {
//     if (isTurn === false) {
//       this._currentPlayerIndex =
//         (this._currentPlayerIndex + 1) % this._players.length;
//       return this.currentPLayer;
//     } else return this.currentPLayer;
//   }
// }

//Game rules pop up
