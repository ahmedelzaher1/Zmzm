/*
  Send a user a link to their avatar
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzU3NTM3ODc5ODYzNDU5ODQx.DVtE4A.hdH7EIwi7z3M2xSsPvr9yMYbb4A';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// Log our bot in
client.login(MzU3NTM3ODc5ODYzNDU5ODQx.DVtE4A.hdH7EIwi7z3M2xSsPvr9yMYbb4A);
