const axios = require('axios');
const prompt = require('prompt-sync')();


function wrongOp(){
  console.log("last opponent was not p2, please try again")
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
var tag1 = "YY09VLY2" //prompt("enter p1");
var tag2 = "9GPUQQJGG" //prompt("enter p2");
var tag2hashtag = "#"+tag2;

let list = {};
yourConfig = {
  headers: {
    Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2OGNmYzJmLTljYTEtNGEyZC1iYWE4LWU2NGQxNmJmZmJmNiIsImlhdCI6MTY1MjQ4NzY5OCwic3ViIjoiZGV2ZWxvcGVyLzg0MTFkMTQ2LWJkYWEtMGE1OS1lZjFjLTU3ZjIxZjIxNDYyNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ni42Ny4xMzMuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.eyFGTDHekPgdEqr89nl6ulwL1ZuXNe20tgPGNmFcxjqA2-_W76d1gOM18Rf7VOFunBdrbGLIF8mY7z52T6rDFQ"
  }
}
axios.get("https://api.clashroyale.com/v1/players/%23"+ tag1 +"/battlelog"
, yourConfig)
  .then(function(response){
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
