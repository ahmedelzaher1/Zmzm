const Discord = require(`discord.js`);
const client = new Discord.Client();

client.on(`message`,(message) => {
    if (message.content == `Ahmed`) {
         message.channel.sendMessage(`The King ?`);
    }
    
    client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
    
});

bot.login(`MzU3NTM3ODc5ODYzNDU5ODQx.DVsTXw.rxNUdEudQkAK5LSDUt2QRUbkZ2g`);
