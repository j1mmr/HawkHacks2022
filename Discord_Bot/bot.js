var Discord = require('discord.io');
var Discord2 = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
const axios = require('axios');
var p1 = "";
var p2 = "";
var crown1 = "";
var crown2 = "";
var test = "";
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`




	yourConfig = {
  		headers: {
    			Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2OGNmYzJmLTljYTEtNGEyZC1iYWE4LWU2NGQxNmJmZmJmNiIsImlhdCI6MTY1MjQ4NzY5OCwic3ViIjoiZGV2ZWxvcGVyLzg0MTFkMTQ2LWJkYWEtMGE1OS1lZjFjLTU3ZjIxZjIxNDYyNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ni42Ny4xMzMuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.eyFGTDHekPgdEqr89nl6ulwL1ZuXNe20tgPGNmFcxjqA2-_W76d1gOM18Rf7VOFunBdrbGLIF8mY7z52T6rDFQ"
  		}
	}



    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);


	//var tag1 = "9GPUQQJGG"
	//var tag2 = "YY09VLY2"
	//var tag2hashtag = "#"+tag2;

  switch(cmd) {

        case 'player1':
                p1 = message.substring(8);

		bot.sendMessage({
                    to: channelID,
                    message: tag1
                	});

                }

	switch(cmd) {

            case 'player2':
                p2 = message.substring(8);

	}
	switch(cmd) {

            case 'game':

		tags = message.substring(6);
		tags = tags.split("-");
		tag1 = tags[0];
		tag2 = tags[1];
		hashtag = "#"
		tag2hashtag = hashtag+tag2
		tag2hashtag = tag2hashtag.replace(/\s/g, '')

		function wrongOp(){
		 bot.sendMessage({
                    to: channelID,
                    message: 'last opponent was not p2, please try again'
                	});
		}

		function output (player1, crown1, player2, crown2){

		 bot.sendMessage({
                    to: channelID,
                    message: "Game Result: " + player1 + ": " + parseInt(crown1) + " - " + player2 + ": " + parseInt(crown2)
                	});

		if (crown1 > crown2) {

		bot.sendMessage({
                    to: channelID,
                    message: player1 + " wins!"
                	});

  		} else if (crown1 < crown2){

		bot.sendMessage({
                    to: channelID,
                    message: player2 + " wins!"
                	});

  		} else {

		bot.sendMessage({
                    to: channelID,
                    message: "Draw!"
                	});

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
      					} else {
        					wrongOp();
      						}


 				 })



      //getISS();
            break;
         }

     };
});
