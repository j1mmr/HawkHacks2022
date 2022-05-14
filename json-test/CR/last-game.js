const axios = require('axios');
const prompt = require('prompt-sync')();

function funcTest (){
  console.log("yes")
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
      crown1 = response.data[0].team[0].crowns
      name1 =  response.data[0].team[0].name
      name2 =  response.data[0].opponent[0].name
      crown2 = response.data[0].opponent[0].crowns
      if (lastOp == tag2hashtag) {
        funcTest();
      }
  })
//console.log(list);
//console.log("below is lastop")
//console.log(name1);
//console.log("below is tag2")
//console.log(tag2hashtag);
