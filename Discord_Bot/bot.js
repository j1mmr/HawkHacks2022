var Discord = require("discord.io");
var Discord2 = require("discord.js");
var logger = require("winston");
var auth = require("./auth.json");
const axios = require("axios");
var p1 = "";
var p2 = "";
var crown1 = "";
var crown2 = "";
var test = "";
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});
bot.on("ready", function (evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`

  yourConfig = {
    headers: {
      // Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2OGNmYzJmLTljYTEtNGEyZC1iYWE4LWU2NGQxNmJmZmJmNiIsImlhdCI6MTY1MjQ4NzY5OCwic3ViIjoiZGV2ZWxvcGVyLzg0MTFkMTQ2LWJkYWEtMGE1OS1lZjFjLTU3ZjIxZjIxNDYyNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ni42Ny4xMzMuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.eyFGTDHekPgdEqr89nl6ulwL1ZuXNe20tgPGNmFcxjqA2-_W76d1gOM18Rf7VOFunBdrbGLIF8mY7z52T6rDFQ"
      Authorization:
        "Bearer " +
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImViZDljZjc4LWZlODAtNGNkOS05MTVhLTgyOWYwNjA2NjA0YyIsImlhdCI6MTY1MjU0ODkwMywic3ViIjoiZGV2ZWxvcGVyLzkyNTEwNzI2LTU4ODUtYzIyYi03MmM0LTQwYzZmYmE1NzYzYSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI2OS4xNTcuNTQuMTE0Il0sInR5cGUiOiJjbGllbnQifV19.UODyDk7iJ6k8vH1uPDYJczwtjWghE1y5l89kn1DsK_WLsUSDiK0pYgcfq3mDu16k4E_uXJOsIhH1n9774V5pzw",
    },
  };

  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];

    args = args.splice(1);

    //var tag1 = "9GPUQQJGG"
    //var tag2 = "YY09VLY2"
    //var tag2hashtag = "#"+tag2;

    switch (cmd) {
      case "player1":
        tags = message.substring(8);
        tags = tags.split("-")
        player1Tag = tags[0]

        bot.sendMessage({
          to: channelID,
          message: player1Tag,
        });
    }

    switch (cmd) {
      case "player2":
        tags = message.substring(8);
        tags = tags.split("-")
        player2Tag = tags[1]

        bot.sendMessage({
          to: channelID,
          message: player2Tag,
        });
    }
    switch (cmd) {
      case "game":
        tags = message.substring(6);
        tags = tags.split("-");
        tag1 = tags[0];
        tag2 = tags[1];
        hashtag = "#";
        tag2hashtag = hashtag + tag2;
        tag2hashtag = tag2hashtag.replace(/\s/g, "");

        function wrongOp() {
          bot.sendMessage({
            to: channelID,
            message: "last opponent was not p2, please try again",
          });
        }

        function output(player1, crown1, player2, crown2) {
          bot.sendMessage({
            to: channelID,
            message:
              "Game Result: " +
              player1 +
              ": " +
              parseInt(crown1) +
              " - " +
              player2 +
              ": " +
              parseInt(crown2),
          });

          if (crown1 > crown2) {
            bot.sendMessage({
              to: channelID,
              message: player1 + " wins!",
            });
          } else if (crown1 < crown2) {
            bot.sendMessage({
              to: channelID,
              message: player2 + " wins!",
            });
          } else {
            bot.sendMessage({
              to: channelID,
              message: "Draw!",
            });
          }
        }

        axios
          .get(
            "https://api.clashroyale.com/v1/players/%23" + tag1 + "/battlelog",
            yourConfig
          )
          .then(function (response) {
            lastOp = response.data[0].opponent[0].tag;
            crown1 = parseInt(response.data[0].team[0].crowns);
            name1 = response.data[0].team[0].name;
            name2 = response.data[0].opponent[0].name;
            crown2 = parseInt(response.data[0].opponent[0].crowns);
            if (lastOp == tag2hashtag) {
              output(name1, crown1, name2, crown2);
            } else {
              wrongOp();
            }
          })
          .catch(function (error) {
            console.log(error);
          });

        //getISS();
        break;
    }

    switch (cmd) {
      case "deck":
        tags = message.substring(6);
        tags = tags.split("-");
        tag1 = tags[0];
        tag2 = tags[1];
        hashtag = "#";
        tag2hashtag = hashtag + tag2;
        tag2hashtag = tag2hashtag.replace(/\s/g, "");

        function firstOutput(cards1, cards2) {
          bot.sendMessage({
            to: channelID,
            message:
              "Player 1's cards: " +
              "\n" +
              cards1[0].name +
              "\n" +
              cards1[1].name +
              "\n" +
              cards1[2].name +
              "\n" +
              cards1[3].name +
              "\n" +
              cards1[4].name +
              "\n" +
              cards1[5].name +
              "\n" +
              cards1[6].name +
              "\n" +
              cards1[7].name +
              "\n",
          });

          bot.sendMessage({
            to: channelID,
            message:
              "Player 2's cards: " +
              "\n" +
              cards2[0].name +
              "\n" +
              cards2[1].name +
              "\n" +
              cards2[2].name +
              "\n" +
              cards2[3].name +
              "\n" +
              cards2[4].name +
              "\n" +
              cards2[5].name +
              "\n" +
              cards2[6].name +
              "\n" +
              cards2[7].name +
              "\n",
          });
        }

        axios
          .get(
            "https://api.clashroyale.com/v1/players/%23" + tag1 + "/battlelog",
            yourConfig
          )
          .then(function (response) {
            cards1 = response.data[0].team[0].cards;
            cards2 = response.data[0].opponent[0].cards;
            firstOutput(cards1, cards2);
          })
          .catch(function (error) {
            console.log(error);
          });

        break;
    }

    switch (cmd) {
      case "trophies":

        tags = message.substring(10);
        tags = tags.split("-");
        tag1 = tags[0];
        tag2 = tags[1];
        hashtag = "#";
        tag2hashtag = hashtag + tag2;
        tag2hashtag = tag2hashtag.replace(/\s/g, "");

        function trophiesOutput(t1, t2) {
          bot.sendMessage({
            to: channelID,
            message: "Player 1 had " + t1 + " trophies!" + "\n",
          });

          bot.sendMessage({
            to: channelID,
            message: "Player 2 had " + t2 + " trophies!" + "\n",
          });
        }

        axios
          .get(
            "https://api.clashroyale.com/v1/players/%23" + tag1 + "/battlelog",
            yourConfig
          )
          .then(function (response) {
            trophies1 = response.data[0].team[0].startingTrophies;
            trophies2 = response.data[0].opponent[0].startingTrophies;
            trophiesOutput(trophies1, trophies2);
          })
          .catch(function (error) {
            console.log(error);
          });

        break;
    }
  }
});
