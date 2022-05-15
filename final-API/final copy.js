const axios = require('axios');
const prompt = require('prompt-sync')();


function wrongOp(){
  console.log("last opponent was not p2, please try again")
}

function firstOutput (cards1, cards2) {
  console.log("Player 1's cards: ")

  for (let i=0; i < 8; i++){
  console.log(cards1[i].name)
  }
  
  console.log("\nPlayer 2's cards: ")

  for (let i = 0; i < 8; i++) {
    console.log(cards2[i].name)
  }
}

function trophiesOutput(t1, t2) {
  console.log("Player 1 had " + t1 + " trophies!")
  console.log("Player 2 had " + t2 + " trophies!")
}

function output (player1, crown1, player2, crown2){
  console.log("Game Result: " + player1 + ": " + parseInt(crown1) + " - " + player2 + ": " + parseInt(crown2));
  if (crown1 > crown2) {
    console.log(player1 + " wins!")
  } else if (crown1 < crown2){
    console.log(player2 + " wins!")
  } else {
    "Draw!"
  }
}
var tag2 = "YY09VLY2" //prompt("enter p1");
var tag1 = "9GPUQQJGG" //prompt("enter p2");
var tag2hashtag = "#"+tag2;

let list = {};
yourConfig = {
  headers: {
    //Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2OGNmYzJmLTljYTEtNGEyZC1iYWE4LWU2NGQxNmJmZmJmNiIsImlhdCI6MTY1MjQ4NzY5OCwic3ViIjoiZGV2ZWxvcGVyLzg0MTFkMTQ2LWJkYWEtMGE1OS1lZjFjLTU3ZjIxZjIxNDYyNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ni42Ny4xMzMuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.eyFGTDHekPgdEqr89nl6ulwL1ZuXNe20tgPGNmFcxjqA2-_W76d1gOM18Rf7VOFunBdrbGLIF8mY7z52T6rDFQ"
    Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImViZDljZjc4LWZlODAtNGNkOS05MTVhLTgyOWYwNjA2NjA0YyIsImlhdCI6MTY1MjU0ODkwMywic3ViIjoiZGV2ZWxvcGVyLzkyNTEwNzI2LTU4ODUtYzIyYi03MmM0LTQwYzZmYmE1NzYzYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI2OS4xNTcuNTQuMTE0Il0sInR5cGUiOiJjbGllbnQifV19.UODyDk7iJ6k8vH1uPDYJczwtjWghE1y5l89kn1DsK_WLsUSDiK0pYgcfq3mDu16k4E_uXJOsIhH1n9774V5pzw" 
  }
}

axios.get("https://api.clashroyale.com/v1/players/%23"+ tag1 +"/battlelog"
, yourConfig)
  .then(function(response){
    
      cards1 = response.data[0].team[0].cards
      cards2 = response.data[0].opponent[0].cards
      cardsOutput(cards1, cards2)

      trophies1 = response.data[0].team[0].startingTrophies
      trophies2 = response.data[0].opponent[0].startingTrophies
      trophiesOutput(trophies1, trophies2)
    
      lastOp = response.data[0].opponent[0].tag
      crown1 = parseInt(response.data[0].team[0].crowns)
      name1 =  response.data[0].team[0].name
      name2 =  response.data[0].opponent[0].name
      crown2 = parseInt(response.data[0].opponent[0].crowns)
      if (lastOp == tag2hashtag) {
        output(name1, crown1, name2, crown2);
      }
      else {
        wrongOp();
      }     
  })
//console.log(list);
//console.log("below is lastop")
//console.log(name1);
//console.log("below is tag2")
//console.log(tag2hashtag);

