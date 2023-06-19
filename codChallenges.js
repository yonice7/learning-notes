// Fist challenge
const game = {
  team1: {
    name: "Bayern Munich",
  },
  team2: { name: "Borrussia Dortmund" },
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
// 2
[game.team1.gk, ...game.team1.fieldPlayers] = players1;
[game.team2.gk, ...game.team2.fieldPlayers] = players2;

console.log(game.team1.gk);
console.log(game.team2.gk);
console.log(game.team1.fieldPlayers);
console.log(game.team2.fieldPlayers);

// 3
const allPlayers = players1.concat(players2);
// console.log(allPlayers);

// 4

//First approach, not good
// const players1Final = players1.push("Thiago", "Coutinho", "Perisic");
// console.log(players1Final);
// console.log(players1);

const players1Final = players1.concat("Thiago", "Coutinho", "Perisic");
//console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;

// 6
const countGoals = function (listScorers, playerName) {
  count = 0;
  for (let i = 0; i < listScorers.length; i++) {
    if (listScorers[i] == playerName) {
      count++;
    }
  }
  return count;
};

// console.log(game.scored);
// console.log(countGoals(game.scored, "Lewandowski"));

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i], countGoals(game.scored, players[i]));
  }
};

printGoals("Gotze", "Hummels", "Lewandowski", "Kimmich");
// this works but I understood the problem wrong

const printGoals2 = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals2(...game.scored);

// 7
game.odds.team1 < game.odds.team2 &&
  console.log("Team 1 is more likely to win");

// Second challenge
// 1
let theResult = `the goals were: `;
for (const [i, player] of game.scored.entries()) {
  theResult += `Goal ${i}: ${player}`;
}

// 2
let oddAverage = 0;
for (const odd of Object.values(game.odds)) {
  oddAverage += odd;
}
console.log(oddAverage / oddAverage.lenght);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Coding Challenge #3
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// 1
const events = [...new Set([gameEvents.values()])];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4
for (const [minute, event] of gameEvents.entries()) {
  if (minute <= 45) {
    console.log(`[FIRST HALF] ${minute}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${minute}: ${event}`);
  }
}
// best way
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
