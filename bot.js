const Discord = require('discord.js');

const client = new Discord.Client();
 

client.on('ready', () => {

    console.log('I am ready!');

});

 


client.on('message', message => {

    if (message.content === '.ite') {

       message.reply('> **ITE** `Internal Server Error`');

       }

});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'members');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member}, just joined the server!`);
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
