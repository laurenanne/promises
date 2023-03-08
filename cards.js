// Part 2.3
let deckId = "";

window.addEventListener("load", (event) => {
  let newDeck = axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  newDeck
    .then((data) => (deckId = data.data.deck_id))
    .catch((err) => console.log(err));
});

let button = document.getElementById("card");
button.addEventListener("click", getCard);

let cardImage = document.querySelector(".image-card");

function getCard() {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((data) => {
      let cardImgSrc = data.data.cards[0].image;
      cardImage.src = cardImgSrc;
    })
    .catch((err) => console.log(err));
}
