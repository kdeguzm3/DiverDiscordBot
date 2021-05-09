require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();

const Cmd = require('./Commands');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.channel.id != "836241154475163649") return;
    let prefix = msg.content.split(" ")[0];
    if (Cmd[prefix]) Cmd[prefix](msg);
}
)

client.login(process.env.BOT_TOKEN);