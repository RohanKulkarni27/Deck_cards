//An array containing all the 52 cards.
var deck=["hA","h2","h3","h4","h5","h6","h7","h8","h9","h10","hJ","hK","hQ",
          "sA","s2","s3","s4","s5","s6","s7","s8","s9","s10","sJ","sK","sQ",
          "cA","c2","c3","c4","c5","c6","c7","c8","c9","c10","cJ","cK","cQ",
          "dA","d2","d3","d4","d5","d6","d7","d8","d9","d10","dJ","dK","dQ"]

//Shuffle function which shuffles the deck in the random order.
function shuffle(){

  var counter = deck.length, temp, index;
  while (counter > 0) {
          // Generates a ranndom number between 1 to 52
          index = Math.floor(Math.random() * counter);
          counter--;
          //Randomly swapping cards of cards.
          temp = deck[counter];
          deck[counter] = deck[index];
          deck[index] = temp;
        }
  alert("The cards have been shuffled");
}

function deal(){

  var ctr = deck.length;
  if(ctr>0){
    shuffle();
    // Choosing a random card from the shuffled pack
    var new_index =  Math.floor(Math.random() * ctr);
    var getitem = deck[new_index];
    // Passing the random card to the user.
    var x = deck.splice(new_index,1);
    alert("Caller has been provided with a card");
  }
  else{
    alert("The deck is empty");
  }
}
