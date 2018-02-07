const Discord = require(`discord.js`);
const Client = new Discord.Client();

Client.on(`message`,(message) => {
    if (message.content == `ping`) {
         message.channel.sendMessage(`pong`);
    }
});

Client.on(`message`,(message) => {
    if (message.content == `Ahmed`) {
         message.channel.sendMessage(`The King?`);
    }
});

Client.on(`message`,(message) => {
    if (message.content == `Shehab`) {
         message.channel.sendMessage(`The Best Gamer ?`);
    }
});

// Create an event listener for messages
Client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.channel.sendMessage(message.author.avatarURL);
  }
});
    
Client.login(`MzU3NTM3ODc5ODYzNDU5ODQx.DVsTXw.rxNUdEudQkAK5LSDUt2QRUbkZ2g`);
