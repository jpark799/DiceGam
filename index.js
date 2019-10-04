let rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let imgSelector = (classs, n) => {
  document.querySelector(classs).setAttribute(`src`, `images/dice${n}.png`);
};

let displayResults = result => {
  document.querySelector("h1").innerText = result;
};

let dice1 = rollDice();
imgSelector(".img1", dice1);

var dice2 = rollDice();
imgSelector(".img2", dice2);

if (dice1 > dice2) {
  displayResults("🏆Player 1 Wins!");
} else if (dice1 < dice2) {
  displayResults("Player 2 Wins!🏆");
} else {
  displayResults("Draw");
}
