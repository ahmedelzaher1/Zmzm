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
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.channel.sendMessage(message.author.avatarURL);
  }
});

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

    
Client.login(`MzU3NTM3ODc5ODYzNDU5ODQx.DVsTXw.rxNUdEudQkAK5LSDUt2QRUbkZ2g`);
