const Discord = require(`discord.js`);
const bot = new Discord.Client();

bot.on(`message`,(message) => {
    if (message.content == `Ahmed`) {
         message.channel.sendMessage(`The King ?`);
    }
});

bot.login(`MzU3NTM3ODc5ODYzNDU5ODQx.DVsTXw.rxNUdEudQkAK5LSDUt2QRUbkZ2g`);
