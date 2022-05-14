const axios = require('axios');
yourConfig = {
  headers: {
    Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2OGNmYzJmLTljYTEtNGEyZC1iYWE4LWU2NGQxNmJmZmJmNiIsImlhdCI6MTY1MjQ4NzY5OCwic3ViIjoiZGV2ZWxvcGVyLzg0MTFkMTQ2LWJkYWEtMGE1OS1lZjFjLTU3ZjIxZjIxNDYyNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ni42Ny4xMzMuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.eyFGTDHekPgdEqr89nl6ulwL1ZuXNe20tgPGNmFcxjqA2-_W76d1gOM18Rf7VOFunBdrbGLIF8mY7z52T6rDFQ"
  }
}
axios.get("https://api.clashroyale.com/v1/players/%239GPUQQJGG"
, yourConfig)
  .then(function(response){
      console.log(response.data.name)
  })
