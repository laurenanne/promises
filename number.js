//Part 1.1
let url = "http://numbersapi.com/13?json";
let fact = axios.get(url);

fact.then((data) => console.log(data.data)).catch((err) => console.log(err));

//Part 1.2
let factArr = [];

for (let i = 0; i < 5; i++) {
  factArr.push(axios.get(`http://numbersapi.com/${i}?json`));
}

Promise.all(factArr)
  .then((arr) => arr.forEach((f) => console.log(f.data)))
  .catch((err) => console.log(err));

//Part 1.3

let favNumArr = [];

for (let i = 0; i < 5; i++) {
  factArr.push(axios.get(`http://numbersapi.com/13?json`));
}

Promise.all(factArr)
  .then((arr) => arr.forEach((f) => console.log(f.data)))
  .catch((err) => console.log(err));

// Part 2.1
let newShuffle =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

axios
  .get(newShuffle)
  .then((data) => {
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`
    );
  })
  .then((card) => {
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Part 2.2
let shuffleTwo =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

axios
  .get(shuffleTwo)
  .then((d) => {
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${d.data.deck_id}/draw/?count=2`
    );
  })
  .then((card) => {
    for (i = 0; i < 2; i++) {
      console.log(`${card.data.cards[i].value} of ${card.data.cards[i].suit}`);
    }
  })
  .catch((error) => {
    console.log(`${error}`);
  });
