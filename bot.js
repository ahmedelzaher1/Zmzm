const Discord = require(`discord.js`);
const Client = new Discord.Client();

Client.on(`message`,(message) => {
    if (message.content == `ping`) {
         message.channel.sendMessage(`pong`);
    }
});

Client.login(`MzU3NTM3ODc5ODYzNDU5ODQx.DVsTXw.rxNUdEudQkAK5LSDUt2QRUbkZ2g`);