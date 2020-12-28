const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "=";

Client.on("ready", () => {
    console.log("Bot Operatinal")
});

Client.on("message", message => {
    if(message.author.bot) return;

    //=ha
    if(message.content == prefix + "ha"){
        message.channel.send("ma")
    }
});

client.login(process.env.TOKEN);
