const Discord = require(`discord.js`);
const Client = new Discord.Client();

Client.on(`message`,(message) => {
    if (message.content == `ping`) {
         message.channel.sendMessage(`pong`);
    }
});

// Create an event listener for messages
Client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.channel.sendMessage(message.author.avatarURL);
  }
});

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.channel.sendMessage('You need to join a voice channel first!');
    }
  }
});

Client.login(`MzU3NTM3ODc5ODYzNDU5ODQx.DVsTXw.rxNUdEudQkAK5LSDUt2QRUbkZ2g`);
